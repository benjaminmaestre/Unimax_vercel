import type { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { ServiceHero } from '@/components/sections/service-hero'
import { ConcreteDetails } from '@/components/sections/concrete-details'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Concreto Premezclado de Alta Resistencia | UNIMAX Corp | Lima',
  description: 'Suministro de concreto premezclado dosificado electrónicamente bajo criterios técnicos aplicables, incluyendo la Norma E.060. Soporte en obra, control de calidad y despacho continuo en Lima.',
  alternates: {
    canonical: '/servicios/concreto-premezclado',
  },
}

export default function ConcreteServicePage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
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
