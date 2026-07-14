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
      <div className="grow flex items-center justify-center py-32 mt-20 px-4 text-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold font-bebas tracking-wider text-primary mb-6 uppercase">
            Alquiler de Maquinaria Pesada
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Ofrecemos servicio especializado de alquiler de maquinaria pesada en Lima para obras de construcción. Equipos modernos y operadores certificados para garantizar la eficiencia de su proyecto.
          </p>
          <ul className="text-left text-lg text-muted-foreground max-w-md mx-auto space-y-4">
            <li className="flex items-center gap-3">
              <span className="text-primary font-bold">✓</span> Retroexcavadoras
            </li>
            <li className="flex items-center gap-3">
              <span className="text-primary font-bold">✓</span> Cargadores Frontales
            </li>
            <li className="flex items-center gap-3">
              <span className="text-primary font-bold">✓</span> Excavadoras sobre orugas
            </li>
            <li className="flex items-center gap-3">
              <span className="text-primary font-bold">✓</span> Rodillos compactadores
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </main>
  )
}
