import type { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Concreto Premezclado San Juan de Lurigancho | UNIMAX',
  description: 'Despacho rápido de concreto premezclado en San Juan de Lurigancho. Planta de mixer en SJL, Lima. Calidad y puntualidad garantizada. ¡Cotiza aquí!',
  keywords: [
    'concreto premezclado San Juan de Lurigancho',
    'mixer SJL Lima',
    'concreto premezclado Lurigancho'
  ],
  openGraph: {
    title: 'Concreto Premezclado en San Juan de Lurigancho | Lima',
    description: 'Despacho rápido de concreto premezclado en San Juan de Lurigancho. Planta de mixer en SJL, Lima. Calidad y puntualidad garantizada. ¡Cotiza aquí!',
    url: 'https://www.unimaxcorp.com/cobertura/san-juan-de-lurigancho',
    siteName: 'UNIMAX Corp',
    images: [{ url: 'https://www.unimaxcorp.com/og-logo-dark.png', width: 1200, height: 630 }],
    locale: 'es_PE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Concreto Premezclado San Juan de Lurigancho | UNIMAX',
    description: 'Despacho rápido de concreto premezclado en San Juan de Lurigancho. Planta de mixer en SJL, Lima. Calidad y puntualidad garantizada. ¡Cotiza aquí!',
    images: ['https://www.unimaxcorp.com/og-logo-dark.png'],
  },
  alternates: {
    canonical: 'https://www.unimaxcorp.com/cobertura/san-juan-de-lurigancho',
  },
}

export default function SJLCoveragePage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navigation />
      <div className="flex-grow flex items-center justify-center py-32 mt-20 px-4 text-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold font-bebas tracking-wider text-primary mb-6 uppercase">
            Cobertura en San Juan de Lurigancho
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos trabajando en esta sección. Conoce pronto los detalles de nuestra planta y despachos en SJL.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  )
}
