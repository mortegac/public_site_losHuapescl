'use client'

import { useState } from 'react'
import type { FormEvent } from 'react'

type FormStatus = 'idle' | 'sending' | 'success' | 'error'

interface ProgramaOption {
  id: string
  value: string
  label: string
}

const programaOptions: ProgramaOption[] = [
  { id: 'prog01', value: 'Programa 01 · Cabalgata y Picoteo', label: 'Programa 01 · Cabalgata y Picoteo' },
  { id: 'prog02', value: 'Programa 02 · Del Potrero al Río', label: 'Programa 02 · Del Potrero al Río' },
  { id: 'prog03', value: 'Programa 03 · Del Río al Potrero', label: 'Programa 03 · Del Río al Potrero' },
  { id: 'prog04', value: 'Programa 04 · Travesía San Pedro', label: 'Programa 04 · Travesía San Pedro' },
]

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

interface ValidationResult {
  valid: boolean
  message?: string
}

function validateForm(form: HTMLFormElement): ValidationResult {
  const data = new FormData(form)
  const agencia = String(data.get('agencia') ?? '').trim()
  const contacto = String(data.get('contacto') ?? '').trim()
  const telefono = String(data.get('telefono') ?? '').trim()
  const email = String(data.get('email') ?? '').trim()
  const privacidad = data.get('privacidad')

  if (!agencia || !contacto || !telefono || !email) {
    return {
      valid: false,
      message: 'Por favor completa todos los campos obligatorios marcados con *.',
    }
  }
  if (!EMAIL_REGEX.test(email)) {
    return {
      valid: false,
      message: 'El correo electrónico ingresado no es válido. Revísalo e intenta de nuevo.',
    }
  }
  if (!privacidad) {
    return {
      valid: false,
      message: 'Debes aceptar la política de privacidad para enviar la consulta.',
    }
  }
  return { valid: true }
}

function buildPayload(form: HTMLFormElement): Record<string, string> {
  const data = new FormData(form)
  const programasSeleccionados = data.getAll('programas').map(String)

  return {
    nombre: String(data.get('contacto') ?? '').trim(),
    agencia: String(data.get('agencia') ?? '').trim(),
    email: String(data.get('email') ?? '').trim(),
    telefono: String(data.get('telefono') ?? '').trim(),
    fecha: String(data.get('fecha') ?? '').trim() || 'Por definir',
    personas: String(data.get('personas') ?? '').trim() || 'Por definir',
    ...(programasSeleccionados.length > 0
      ? { programa: programasSeleccionados.join(', ') }
      : { programa: 'Consulta comercial de agencia' }),
    ...(String(data.get('comentarios') ?? '').trim()
      ? { mensaje: String(data.get('comentarios') ?? '').trim() }
      : {}),
  }
}

export default function AgencyForm() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState<string>('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget

    const validation = validateForm(form)
    if (!validation.valid) {
      setStatus('error')
      setErrorMessage(validation.message ?? 'Revisa los campos del formulario.')
      return
    }

    setStatus('sending')
    setErrorMessage('')

    try {
      const response = await fetch('/api/reservas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(buildPayload(form)),
      })
      const result: { success?: boolean; error?: string } = await response
        .json()
        .catch(() => ({}))

      if (response.ok && result.success) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
        setErrorMessage(
          result.error ??
            'No pudimos enviar tu consulta. Intenta nuevamente o escríbenos a hola@loshuapes.cl.'
        )
      }
    } catch {
      setStatus('error')
      setErrorMessage(
        'No pudimos enviar tu consulta. Revisa tu conexión e intenta nuevamente, o escríbenos a hola@loshuapes.cl.'
      )
    }
  }

  if (status === 'success') {
    return (
      <div
        role="status"
        className="bg-cream/10 border border-gold/40 rounded-xl p-8 text-center"
      >
        <p className="font-display text-2xl font-bold text-gold mb-3">
          ¡Consulta enviada!
        </p>
        <p className="font-body text-base text-cream/80 leading-relaxed">
          Recibimos tu consulta comercial. Nos pondremos en contacto contigo en menos de 24
          horas hábiles.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 font-ui text-sm font-medium text-gold underline underline-offset-4 hover:text-cream transition-colors cursor-pointer"
        >
          Enviar otra consulta
        </button>
      </div>
    )
  }

  return (
    <form
      aria-label="Formulario de consulta comercial para agencias"
      className="space-y-6"
      noValidate
      onSubmit={handleSubmit}
    >
      {/* Nombre agencia + Contacto */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="agencia"
            className="block font-ui text-xs font-semibold uppercase tracking-widest text-cream/60 mb-2"
          >
            Nombre de la agencia <span aria-hidden="true" className="text-ember">*</span>
            <span className="sr-only">(obligatorio)</span>
          </label>
          <input
            id="agencia"
            name="agencia"
            type="text"
            required
            autoComplete="organization"
            placeholder="Nombre de tu agencia"
            className="w-full bg-cream/10 border border-cream/20 rounded-lg px-4 py-3 font-body text-sm text-cream placeholder-cream/30 focus:outline-none focus:ring-2 focus:ring-ember focus:border-transparent transition-colors"
          />
        </div>
        <div>
          <label
            htmlFor="contacto"
            className="block font-ui text-xs font-semibold uppercase tracking-widest text-cream/60 mb-2"
          >
            Nombre del contacto <span aria-hidden="true" className="text-ember">*</span>
            <span className="sr-only">(obligatorio)</span>
          </label>
          <input
            id="contacto"
            name="contacto"
            type="text"
            required
            autoComplete="name"
            placeholder="Tu nombre"
            className="w-full bg-cream/10 border border-cream/20 rounded-lg px-4 py-3 font-body text-sm text-cream placeholder-cream/30 focus:outline-none focus:ring-2 focus:ring-ember focus:border-transparent transition-colors"
          />
        </div>
      </div>

      {/* Teléfono + Email */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="telefono"
            className="block font-ui text-xs font-semibold uppercase tracking-widest text-cream/60 mb-2"
          >
            Teléfono / WhatsApp <span aria-hidden="true" className="text-ember">*</span>
            <span className="sr-only">(obligatorio)</span>
          </label>
          <input
            id="telefono"
            name="telefono"
            type="tel"
            required
            autoComplete="tel"
            placeholder="+56 9 XXXX XXXX"
            className="w-full bg-cream/10 border border-cream/20 rounded-lg px-4 py-3 font-body text-sm text-cream placeholder-cream/30 focus:outline-none focus:ring-2 focus:ring-ember focus:border-transparent transition-colors"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block font-ui text-xs font-semibold uppercase tracking-widest text-cream/60 mb-2"
          >
            Correo electrónico <span aria-hidden="true" className="text-ember">*</span>
            <span className="sr-only">(obligatorio)</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="tu@agencia.cl"
            className="w-full bg-cream/10 border border-cream/20 rounded-lg px-4 py-3 font-body text-sm text-cream placeholder-cream/30 focus:outline-none focus:ring-2 focus:ring-ember focus:border-transparent transition-colors"
          />
        </div>
      </div>

      {/* Programas de interés */}
      <fieldset>
        <legend className="block font-ui text-xs font-semibold uppercase tracking-widest text-cream/60 mb-3">
          Programas de interés
        </legend>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {programaOptions.map((prog) => (
            <label
              key={prog.id}
              htmlFor={prog.id}
              className="flex items-center gap-3 bg-cream/5 border border-cream/10 rounded-lg px-4 py-3 cursor-pointer hover:bg-cream/10 hover:border-cream/20 transition-colors"
            >
              <input
                id={prog.id}
                name="programas"
                type="checkbox"
                value={prog.value}
                className="w-4 h-4 accent-ember flex-shrink-0 rounded cursor-pointer"
              />
              <span className="font-body text-sm text-cream/80">{prog.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Fecha + Personas */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="fecha"
            className="block font-ui text-xs font-semibold uppercase tracking-widest text-cream/60 mb-2"
          >
            Fecha aproximada de la visita
          </label>
          <input
            id="fecha"
            name="fecha"
            type="text"
            autoComplete="off"
            placeholder="Ej: marzo 2026"
            className="w-full bg-cream/10 border border-cream/20 rounded-lg px-4 py-3 font-body text-sm text-cream placeholder-cream/30 focus:outline-none focus:ring-2 focus:ring-ember focus:border-transparent transition-colors"
          />
        </div>
        <div>
          <label
            htmlFor="personas"
            className="block font-ui text-xs font-semibold uppercase tracking-widest text-cream/60 mb-2"
          >
            Número estimado de personas
          </label>
          <input
            id="personas"
            name="personas"
            type="number"
            min={1}
            max={10}
            placeholder="Máx. 10 personas"
            className="w-full bg-cream/10 border border-cream/20 rounded-lg px-4 py-3 font-body text-sm text-cream placeholder-cream/30 focus:outline-none focus:ring-2 focus:ring-ember focus:border-transparent transition-colors"
          />
        </div>
      </div>

      {/* Comentarios */}
      <div>
        <label
          htmlFor="comentarios"
          className="block font-ui text-xs font-semibold uppercase tracking-widest text-cream/60 mb-2"
        >
          Comentarios o requerimientos especiales
        </label>
        <textarea
          id="comentarios"
          name="comentarios"
          rows={4}
          placeholder="Cuéntanos más sobre el grupo, necesidades especiales, etc."
          className="w-full bg-cream/10 border border-cream/20 rounded-lg px-4 py-3 font-body text-sm text-cream placeholder-cream/30 focus:outline-none focus:ring-2 focus:ring-ember focus:border-transparent transition-colors resize-y"
        />
      </div>

      {/* Política de privacidad */}
      <div>
        <label
          htmlFor="privacidad"
          className="flex items-start gap-3 cursor-pointer group"
        >
          <input
            id="privacidad"
            name="privacidad"
            type="checkbox"
            required
            className="mt-0.5 w-4 h-4 accent-ember flex-shrink-0 rounded cursor-pointer"
          />
          <span className="font-body text-sm text-cream/60 leading-relaxed group-hover:text-cream/80 transition-colors">
            He leído y acepto la{' '}
            <a
              href="/privacidad"
              className="text-gold underline underline-offset-4 hover:text-cream transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              política de privacidad
            </a>{' '}
            de Fundo Los Huapes.{' '}
            <span aria-hidden="true" className="text-ember">*</span>
            <span className="sr-only">(obligatorio)</span>
          </span>
        </label>
      </div>

      {/* Mensaje de error */}
      {status === 'error' && (
        <p
          role="alert"
          className="bg-ember/20 border border-ember/50 rounded-lg px-4 py-3 font-body text-sm text-cream"
        >
          {errorMessage}
        </p>
      )}

      {/* Submit */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full sm:w-auto inline-flex items-center justify-center font-ui font-medium tracking-wide rounded transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 bg-ember text-cream border-2 border-ember hover:bg-transparent hover:text-ember px-8 py-4 text-lg disabled:pointer-events-none disabled:opacity-50"
        >
          {status === 'sending' ? 'Enviando…' : 'Enviar consulta comercial'}
        </button>
      </div>

      <p className="font-ui text-xs text-cream/40">
        Los campos marcados con{' '}
        <span aria-hidden="true" className="text-ember">*</span>{' '}
        son obligatorios.
      </p>
    </form>
  )
}
