import type { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Precio Concreto Premezclado m3 Lima 2026 | UNIMAX',
  description: 'Conoce el mejor precio de concreto premezclado m3 en Lima (f\'c 210, 280). Calcula el costo exacto de tu mixer. ¡Asesoría gratis, contáctanos hoy!',
  keywords: [
    'precio concreto premezclado m3 Lima',
    'costo mixer Lima 2026',
    'precio concreto fc210 Lima'
  ],
  openGraph: {
    title: 'Precio de Concreto Premezclado por m3 en Lima (2026)',
    description: 'Conoce el mejor precio de concreto premezclado m3 en Lima (f\'c 210, 280). Calcula el costo exacto de tu mixer. ¡Asesoría gratis, contáctanos hoy!',
    url: 'https://www.unimaxcorp.com/precios/concreto-premezclado-por-m3',
    siteName: 'UNIMAX Corp',
    images: [{ url: 'https://www.unimaxcorp.com/og-logo-dark.png', width: 1200, height: 630 }],
    locale: 'es_PE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Precio Concreto Premezclado m3 Lima 2026 | UNIMAX',
    description: 'Conoce el mejor precio de concreto premezclado m3 en Lima (f\'c 210, 280). Calcula el costo exacto de tu mixer. ¡Asesoría gratis, contáctanos hoy!',
    images: ['https://www.unimaxcorp.com/og-logo-dark.png'],
  },
  alternates: {
    canonical: 'https://www.unimaxcorp.com/precios/concreto-premezclado-por-m3',
  },
}

export default function PreciosPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navigation />
      <div className="grow flex items-center justify-center py-32 mt-20 px-4 text-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold font-bebas tracking-wider text-primary mb-6 uppercase">
            Precios de Concreto Premezclado
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos trabajando en esta sección. Pronto encontrarás toda la información de precios por m3 de nuestro concreto mixer.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  )
}
