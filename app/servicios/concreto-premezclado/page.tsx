import type { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { ServiceHero } from '@/components/sections/service-hero'
import { ConcreteDetails } from '@/components/sections/concrete-details'
import { Footer } from '@/components/footer'
import { concreteServiceJsonLd } from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Concreto Premezclado en Lima | Calidad y Buen Precio',
  description: 'Venta de concreto premezclado en Lima con alta resistencia garantizada. Consulta el precio del concreto mixer por m3. ¡Llama y cotiza tu obra!',
  keywords: [
    'concreto premezclado en Lima',
    'precio concreto mixer',
    'concreto de alta resistencia Lima'
  ],
  openGraph: {
    title: 'Venta de Concreto Premezclado en Lima | UNIMAX Corp',
    description: 'Venta de concreto premezclado en Lima con alta resistencia garantizada. Consulta el precio del concreto mixer por m3. ¡Llama y cotiza tu obra!',
    url: 'https://www.unimaxcorp.com/servicios/concreto-premezclado',
    siteName: 'UNIMAX Corp',
    images: [{ url: 'https://www.unimaxcorp.com/og-logo-dark.png', width: 1200, height: 630 }],
    locale: 'es_PE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Concreto Premezclado en Lima | Calidad y Buen Precio',
    description: 'Venta de concreto premezclado en Lima con alta resistencia garantizada. Consulta el precio del concreto mixer por m3. ¡Llama y cotiza tu obra!',
    images: ['https://www.unimaxcorp.com/og-logo-dark.png'],
  },
  alternates: {
    canonical: 'https://www.unimaxcorp.com/servicios/concreto-premezclado',
  },
}

export default function ConcreteServicePage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <script
        id="schema-service-premezclado"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(concreteServiceJsonLd) }}
      />
      <Navigation />
        <ServiceHero
          titleKey="concrete.hero.title"
          descKey="concrete.hero.desc"
          bgImage="/Concreto%20Premezclado.jpg"
        />
        <ConcreteDetails />
        <Footer />
    </main>
  )
}

