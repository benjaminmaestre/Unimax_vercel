import type { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Alquiler Maquinaria Pesada Lima | Construcción Segura',
  description: 'Expertos en alquiler de maquinaria pesada en Lima y Perú. Retroexcavadoras y cargadores frontales disponibles. ¡Equipos modernos listos para tu obra!',
  keywords: [
    'alquiler maquinaria pesada Lima',
    'retroexcavadora Lima',
    'cargador frontal alquiler Perú'
  ],
  openGraph: {
    title: 'Servicio de Alquiler de Maquinaria Pesada en Lima',
    description: 'Expertos en alquiler de maquinaria pesada en Lima y Perú. Retroexcavadoras y cargadores frontales disponibles. ¡Equipos modernos listos para tu obra!',
    url: 'https://www.unimaxcorp.com/servicios/alquiler-maquinaria-pesada',
    siteName: 'UNIMAX Corp',
    images: [{ url: 'https://www.unimaxcorp.com/og-logo-dark.png', width: 1200, height: 630 }],
    locale: 'es_PE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alquiler Maquinaria Pesada Lima | Construcción Segura',
    description: 'Expertos en alquiler de maquinaria pesada en Lima y Perú. Retroexcavadoras y cargadores frontales disponibles. ¡Equipos modernos listos para tu obra!',
    images: ['https://www.unimaxcorp.com/og-logo-dark.png'],
  },
  alternates: {
    canonical: 'https://www.unimaxcorp.com/servicios/alquiler-maquinaria-pesada',
  },
}

export default function AlquilerMaquinariaPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navigation />
      <div className="flex-grow flex items-center justify-center py-32 mt-20 px-4 text-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold font-bebas tracking-wider text-primary mb-6 uppercase">
            Alquiler de Maquinaria Pesada
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos trabajando en esta sección. Pronto encontrarás toda la información sobre nuestro servicio de alquiler de maquinaria pesada en Lima.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  )
}
