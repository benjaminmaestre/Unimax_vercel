import type { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { ProjectsHero } from '@/components/sections/projects-hero'
import { ProjectsDetails } from '@/components/sections/projects-details'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Portafolio de Proyectos y Obras Entregadas | UNIMAX Corp | Lima',
  description: 'Explore nuestro portafolio de obras en Lima y todo el Perú. Suministro masivo de concreto premezclado de alta resistencia y bombeo de alta precisión.',
  alternates: {
    canonical: 'https://www.unimaxcorp.com/nosotros/proyectos',
  },
}

export default function ProjectsPortfolioPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <ProjectsHero />
      <ProjectsDetails />
      <Footer />
    </main>
  )
}
