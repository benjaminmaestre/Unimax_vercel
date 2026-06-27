import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.unimaxcorp.com'

  return {
    rules: [
      // ── Googlebot: acceso completo con bloqueo de rutas privadas ─────────
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/*.json$',
          '/*?*', // evita indexar URLs con query params duplicados
        ],
      },
      // ── Bingbot ───────────────────────────────────────────────────────────
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
        ],
      },
      // ── Todos los demás crawlers ──────────────────────────────────────────
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl, // declara el host canónico
  }
}
