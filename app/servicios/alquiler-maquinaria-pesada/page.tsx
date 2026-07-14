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

import { ServiceHero } from '@/components/sections/service-hero'
import { MachineryDetails } from '@/components/sections/machinery-details'

export default function AlquilerMaquinariaPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <ServiceHero
        titleKey="machinery.hero.title"
        descKey="machinery.hero.desc"
        bgImage="/bomba_hero.png"
      />
      <MachineryDetails />
      <Footer />
    </main>
  )
}
