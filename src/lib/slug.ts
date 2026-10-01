/**
 * Next.js peut transmettre le segment d'URL encore encodé (ex: `service%201`
 * au lieu de `service 1`), ce qui faisait échouer la recherche dans Sanity et
 * renvoyer un 404. On décode donc systématiquement le segment avant de l'utiliser.
 */
export function readSlug(raw: string): string {
  try {
    return decodeURIComponent(raw).trim()
  } catch {
    return raw.trim()
  }
}
