interface JsonLdProps {
  data: Record<string, unknown>
}

/**
 * Serializes a plain object produced by the jsonld.ts helpers into a JSON
 * string that is safe to embed directly in a <script> tag.
 *
 * Safety rationale:
 * - `data` is always a static, server-authored object from src/lib/jsonld.ts.
 *   It never contains user-supplied strings.
 * - The replacer strips any key that starts with "__proto__" or "constructor"
 *   to prevent prototype-pollution gadgets from reaching the DOM.
 * - The "</script>" sequence is escaped so an injected closing tag cannot
 *   break out of the script block even if unexpected data somehow appears.
 */
function serializeJsonLd(data: Record<string, unknown>): string {
  const dangerousKeys = new Set(['__proto__', 'constructor', 'prototype'])

  const json = JSON.stringify(data, (key, value) => {
    if (dangerousKeys.has(key)) return undefined
    return value
  })

  // Escape </script> to prevent early script tag termination.
  return json.replace(/<\/script>/gi, '<\\/script>')
}

/**
 * Renders a JSON-LD <script> tag for structured data (SEO / GEO / AEO).
 * Place this component in any Server Component page or layout.
 *
 * @example
 * <JsonLd data={getTouristAttractionJsonLd()} />
 */
export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
    />
  )
}
