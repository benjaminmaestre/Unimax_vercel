import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.unimaxcorp.com'

  return [
    // ── HOME ──────────────────────────────────────────────────────────────
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },

    // ── SERVICIOS (páginas de conversión principales) ─────────────────────
    {
      url: `${baseUrl}/servicios/concreto-premezclado`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/servicios/concreto-mixer-lima`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/servicios/bomba-de-concreto`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    /* NO CONTRATADO AÚN
    {
      url: `${baseUrl}/servicios/alquiler-maquinaria-pesada`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/servicios/diseno-de-mezcla`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    */

    /* NO CONTRATADO AÚN
    // ── PRECIOS (alto volumen de búsqueda) ────────────────────────────────
    {
      url: `${baseUrl}/precios/concreto-premezclado-por-m3`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    */

    /* NO CONTRATADO AÚN
    // ── COBERTURA POR ZONA / DISTRITO ─────────────────────────────────────
    {
      url: `${baseUrl}/cobertura/lima-este`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/cobertura/lima-sur`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/cobertura/san-juan-de-lurigancho`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/cobertura/villa-el-salvador`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/cobertura/ate-vitarte`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/cobertura/surco`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/cobertura/chorrillos`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/cobertura/miraflores`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/cobertura/villa-maria-del-triunfo`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/cobertura/la-molina`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    */

    // ── NOSOTROS ──────────────────────────────────────────────────────────
    /* NO CONTRATADO AÚN
    {
      url: `${baseUrl}/nosotros/quienes-somos`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    */
    {
      url: `${baseUrl}/nosotros/proyectos`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.75,
    },

    /* NO CONTRATADO AÚN
    // ── BLOG (SEO de contenido) ───────────────────────────────────────────
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/precio-concreto-premezclado-lima-2025`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/diferencia-fc175-fc210-fc280`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/blog/como-calcular-metros-cubicos-losa`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/blog/que-es-concreto-premezclado`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/blog/bomba-de-concreto-tipos-y-usos`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    */

    // ── LEGALES (baja prioridad) ──────────────────────────────────────────
    {
      url: `${baseUrl}/politica-de-privacidad`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terminos-y-condiciones`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/libro-de-reclamaciones`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/politica-de-cookies`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
