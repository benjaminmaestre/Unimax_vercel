import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.unimaxcorp.com'

  return {
    rules: [
      // ── Googlebot: acceso completo con bloqueo de rutas privadas ─────────
      {
        userAgent: 'Googlebot',
        allow: [
          '/',
          '/nosotros/proyectos',
          '/servicios/bomba-de-concreto',
          '/politica-de-cookies',
          '/politica-de-privacidad',
          '/terminos-y-condiciones',
        ],
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/wp-admin/',
          '/*.json$',
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
          '/wp-admin/',
        ],
      },
      // ── Todos los demás crawlers ──────────────────────────────────────────
      {
        userAgent: '*',
        allow: [
          '/',
          '/nosotros/proyectos',
          '/servicios/bomba-de-concreto',
          '/politica-de-cookies',
          '/politica-de-privacidad',
          '/terminos-y-condiciones',
        ],
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/wp-admin/',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl, // declara el host canónico
  }
}
