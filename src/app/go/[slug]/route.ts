import { NextResponse, type NextRequest } from 'next/server'
import { QR_FALLBACK, QR_LINKS } from '@/lib/qr-links'

// Always resolve at request time so destination edits take effect on deploy
// and nothing gets baked into a static/cached response.
export const dynamic = 'force-dynamic'

export function GET(request: NextRequest, { params }: { params: { slug: string } }) {
  const slug = params.slug.toLowerCase()
  // Unknown slugs fall back to the homepage instead of 404ing.
  const destination = Object.hasOwn(QR_LINKS, slug) ? QR_LINKS[slug] : QR_FALLBACK

  // --- SCAN LOGGING HOOK -------------------------------------------------
  // Not implemented yet. When adding scan tracking, log here:
  //   slug, destination, timestamp, request.headers.get('user-agent'),
  //   request.headers.get('referer'), request.geo (Vercel)
  // Keep it non-blocking so a logging failure never breaks the redirect.
  // -----------------------------------------------------------------------

  // 302, not 301: browsers cache 301s permanently, which would pin old destinations.
  const response = NextResponse.redirect(new URL(destination, request.url), 302)
  response.headers.set('Cache-Control', 'no-store')
  return response
}
