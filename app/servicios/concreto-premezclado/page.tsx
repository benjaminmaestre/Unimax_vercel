import type { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { ServiceHero } from '@/components/sections/service-hero'
import { ConcreteDetails } from '@/components/sections/concrete-details'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Concreto Premezclado de Alta Resistencia | UNIMAX Corp | Lima',
  description: 'Suministro de concreto premezclado dosificado electrónicamente bajo normas técnicas RNE E.060 y ASTM C94. Laboratorio de control y despacho continuo 24/7 en Lima.',
  alternates: {
    canonical: 'https://unimaxcorp.com.pe/servicios/concreto-premezclado',
  },
}

export default function ConcreteServicePage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <ServiceHero
        titleKey="concrete.hero.title"
        descKey="concrete.hero.desc"
        bgImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vaciado-Unimaxcorp-002-lCojy5wXyOYj9Fl3zxtJ0S1EpUHHYT.webp"
      />
      <ConcreteDetails />
      <Footer />
    </main>
  )
}
