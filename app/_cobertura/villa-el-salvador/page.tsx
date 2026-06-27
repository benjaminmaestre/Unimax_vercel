import type { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Concreto Premezclado Villa El Salvador | VES Lima',
  description: 'Venta de concreto premezclado en Villa El Salvador (VES). Planta en zona sur de Lima. Concreto y bombeo de alta resistencia. ¡Solicita presupuesto!',
  keywords: [
    'concreto premezclado Villa El Salvador',
    'mixer VES Lima',
    'bomba concreto Villa El Salvador'
  ],
  openGraph: {
    title: 'Suministro de Concreto Premezclado en Villa El Salvador',
    description: 'Venta de concreto premezclado en Villa El Salvador (VES). Planta en zona sur de Lima. Concreto y bombeo de alta resistencia. ¡Solicita presupuesto!',
    url: 'https://www.unimaxcorp.com/cobertura/villa-el-salvador',
    siteName: 'UNIMAX Corp',
    images: [{ url: 'https://www.unimaxcorp.com/og-logo-dark.png', width: 1200, height: 630 }],
    locale: 'es_PE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Concreto Premezclado Villa El Salvador | VES Lima',
    description: 'Venta de concreto premezclado en Villa El Salvador (VES). Planta en zona sur de Lima. Concreto y bombeo de alta resistencia. ¡Solicita presupuesto!',
    images: ['https://www.unimaxcorp.com/og-logo-dark.png'],
  },
  alternates: {
    canonical: 'https://www.unimaxcorp.com/cobertura/villa-el-salvador',
  },
}

export default function VESCoveragePage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navigation />
      <div className="flex-grow flex items-center justify-center py-32 mt-20 px-4 text-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold font-bebas tracking-wider text-primary mb-6 uppercase">
            Cobertura en Villa El Salvador
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos trabajando en esta sección. Conoce pronto los detalles de nuestra planta y despachos en VES y Lima Sur.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  )
}
