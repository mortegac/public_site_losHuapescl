import { NextRequest, NextResponse } from 'next/server'

interface ReservaPayload {
  nombre: string
  email: string
  telefono: string
  fecha: string
  personas: string | number
  programa?: string
  mensaje?: string
  agencia?: string
  turno?: string
  asado?: string
}

function validatePayload(body: unknown): body is ReservaPayload {
  if (!body || typeof body !== 'object') return false
  const b = body as Record<string, unknown>
  return (
    typeof b.nombre === 'string' && b.nombre.trim().length > 0 &&
    typeof b.email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(b.email) &&
    typeof b.telefono === 'string' && b.telefono.trim().length > 0 &&
    typeof b.fecha === 'string' && b.fecha.trim().length > 0 &&
    (typeof b.personas === 'string' || typeof b.personas === 'number')
  )
}

// Primitive in-memory rate limiter: max 5 req/IP per 60 s
const rateLimitMap = new Map<string, { count: number; ts: number }>()
const RATE_LIMIT = 5
const WINDOW_MS = 60_000

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)
  if (!entry || now - entry.ts > WINDOW_MS) {
    rateLimitMap.set(ip, { count: 1, ts: now })
    return false
  }
  if (entry.count >= RATE_LIMIT) return true
  entry.count++
  return false
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'

  // Los formularios HTML de las páginas de programa postean form-encoded y
  // esperan una navegación; los client components postean JSON.
  const contentType = req.headers.get('content-type') ?? ''
  const isFormPost = !contentType.includes('application/json')
  const formRedirect = (query: string) =>
    NextResponse.redirect(new URL(`/gracias${query}`, req.url), 303)

  if (isRateLimited(ip)) {
    if (isFormPost) return formRedirect('?error=limite')
    return NextResponse.json(
      { success: false, error: 'Demasiadas solicitudes. Intenta en unos minutos.' },
      { status: 429 }
    )
  }

  let body: unknown
  try {
    if (isFormPost) {
      const form = await req.formData()
      body = Object.fromEntries(
        [...form.entries()].filter(([, v]) => typeof v === 'string')
      )
    } else {
      body = await req.json()
    }
  } catch {
    if (isFormPost) return formRedirect('?error=datos')
    return NextResponse.json({ success: false, error: 'Formato inválido.' }, { status: 400 })
  }

  if (!validatePayload(body)) {
    if (isFormPost) return formRedirect('?error=datos')
    return NextResponse.json(
      { success: false, error: 'Faltan campos obligatorios.' },
      { status: 422 }
    )
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return NextResponse.json({ success: false, error: 'Servicio no configurado.' }, { status: 503 })
  }

  const { Resend } = await import('resend')
  const resend = new Resend(apiKey)

  const esc = (s: unknown): string =>
    String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')

  const escMultiline = (s: unknown): string =>
    esc(s).replace(/\n/g, '<br>')

  const row = (label: string, value: unknown) =>
    `<tr><td><strong>${label}</strong></td><td>${esc(value)}</td></tr>`

  const html = `
    <h2>Nueva solicitud de reserva — Fundo Los Huapes</h2>
    <table cellpadding="8" style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
      ${row('Nombre', body.nombre)}
      ${row('Email', body.email)}
      ${row('Teléfono', body.telefono)}
      ${row('Fecha solicitada', body.fecha)}
      ${row('Personas', body.personas)}
      ${body.programa ? row('Programa', body.programa) : ''}
      ${body.turno    ? row('Turno',    body.turno)    : ''}
      ${body.asado    ? row('Asado acampado', body.asado) : ''}
      ${body.agencia  ? row('Agencia',  body.agencia)  : ''}
      ${body.mensaje  ? `<tr><td><strong>Mensaje</strong></td><td>${escMultiline(body.mensaje)}</td></tr>` : ''}
    </table>
  `

  const { error } = await resend.emails.send({
    from: 'reservas@loshuapes.cl',
    to: 'reservas@loshuapes.cl',
    replyTo: body.email,
    subject: `Solicitud de reserva — ${body.nombre}`,
    html,
  })

  if (error) {
    if (isFormPost) return formRedirect('?error=envio')
    return NextResponse.json({ success: false, error: 'No se pudo enviar el mensaje.' }, { status: 500 })
  }

  if (isFormPost) return formRedirect('')
  return NextResponse.json({ success: true })
}
