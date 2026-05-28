import type { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { ServiceHero } from '@/components/sections/service-hero'
import { PumpDetails } from '@/components/sections/pump-details'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Alquiler de Bomba de Concreto y Maquinarias | UNIMAX Corp | Lima',
  description: 'Servicios de bombeo de concreto premezclado de alta presión y precisión en Lima. Alquiler de bomba estacionaria y pluma telescópica con operadores certificados.',
  alternates: {
    canonical: 'https://unimaxcorp.com.pe/servicios/bomba-de-concreto',
  },
}

export default function PumpServicePage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <ServiceHero
        titleKey="pump.hero.title"
        descKey="pump.hero.desc"
        bgImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/plnata-dosificadora-1-nBJ3KM7b2wgHOjE006GXWkj4cKEZ5k.webp"
      />
      <PumpDetails />
      <Footer />
    </main>
  )
}
