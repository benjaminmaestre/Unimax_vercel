import type { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { ServiceHero } from '@/components/sections/service-hero'
import { PumpDetails } from '@/components/sections/pump-details'
import { Footer } from '@/components/footer'
import { pumpServiceJsonLd } from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Alquiler de Bomba de Concreto Lima hoy | UNIMAX Corp',
  description: 'Servicio y alquiler de bomba de concreto en Lima hoy. Bombas pluma y estacionarias. Bombeo de concreto compatible con Unicon, Mixercon y otros proveedores.',
  keywords: [
    'bomba de concreto Lima',
    'bomba de concreto en Lima hoy',
    'alquiler bomba pluma Lima',
    'alquiler de bomba de concreto',
    'bombeo concreto Unicon'
  ],
  openGraph: {
    title: 'Servicio y Alquiler de Bomba de Concreto en Lima hoy',
    description: 'Servicio y alquiler de bomba de concreto en Lima. Bombas pluma y estacionarias. Bombeo de concreto compatible con Unicon, Mixercon y otros proveedores.',
    url: 'https://www.unimaxcorp.com/servicios/bomba-de-concreto',
    siteName: 'UNIMAX Corp',
    images: [{ url: 'https://www.unimaxcorp.com/og-logo-dark.png', width: 1200, height: 630 }],
    locale: 'es_PE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alquiler de Bomba de Concreto Lima hoy | UNIMAX Corp',
    description: 'Servicio y alquiler de bomba de concreto en Lima. Bombas pluma y estacionarias. Bombeo de concreto compatible con Unicon, Mixercon y otros proveedores.',
    images: ['https://www.unimaxcorp.com/og-logo-dark.png'],
  },
  alternates: {
    canonical: 'https://www.unimaxcorp.com/servicios/bomba-de-concreto',
  },
}

export default function PumpServicePage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <script
        id="schema-service-bomba"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pumpServiceJsonLd) }}
      />
      <Navigation />
        <ServiceHero
          titleKey="pump.hero.title"
          descKey="pump.hero.desc"
          bgImage="/unimax%20bomba.jpg"
        />
        <PumpDetails />
        <Footer />
    </main>
  )
}

