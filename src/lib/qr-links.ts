import links from './qr-links.json'

/**
 * QR redirect table: /go/<slug> → destination.
 *
 * Edit destinations in qr-links.json (shared with scripts/generate-qr.py).
 * Changing a destination never requires reprinting — the printed QR only
 * encodes https://troxellendeavors.com/go/<slug>.
 * Destinations can be site-relative paths or absolute URLs.
 */
export const QR_LINKS: Record<string, string> = links

export const QR_FALLBACK = '/'
