import type { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Precio Concreto Premezclado Lima 2025 | Guía de Costos',
  description: 'Descubre el precio del concreto premezclado en Lima este 2025. Entérate cuánto cuesta el mixer y el precio por m3. ¡Lee nuestra guía y ahorra dinero!',
  keywords: [
    'precio concreto premezclado Lima 2025',
    'cuanto cuesta el mixer en Lima',
    'precio m3 concreto Perú'
  ],
  openGraph: {
    title: 'Guía de Precios: Concreto Premezclado en Lima 2025',
    description: 'Descubre el precio del concreto premezclado en Lima este 2025. Entérate cuánto cuesta el mixer y el precio por m3. ¡Lee nuestra guía y ahorra dinero!',
    url: 'https://www.unimaxcorp.com/blog/precio-concreto-premezclado-lima-2025',
    siteName: 'UNIMAX Corp',
    images: [{ url: 'https://www.unimaxcorp.com/og-logo-dark.png', width: 1200, height: 630 }],
    locale: 'es_PE',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Precio Concreto Premezclado Lima 2025 | Guía de Costos',
    description: 'Descubre el precio del concreto premezclado en Lima este 2025. Entérate cuánto cuesta el mixer y el precio por m3. ¡Lee nuestra guía y ahorra dinero!',
    images: ['https://www.unimaxcorp.com/og-logo-dark.png'],
  },
  alternates: {
    canonical: 'https://www.unimaxcorp.com/blog/precio-concreto-premezclado-lima-2025',
  },
}

export default function BlogPrecioPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navigation />
      <div className="flex-grow flex items-center justify-center py-32 mt-20 px-4 text-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold font-bebas tracking-wider text-primary mb-6 uppercase">
            Guía de Precios de Concreto 2025
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos trabajando en este artículo. Muy pronto publicaremos nuestra guía completa de costos de concreto premezclado.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  )
}
