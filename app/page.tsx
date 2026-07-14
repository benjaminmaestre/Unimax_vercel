import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { Navigation } from '@/components/navigation'
import { HeroSection } from '@/components/sections/hero'

const ManifestoSection = dynamic(() => import('@/components/sections/manifesto').then(mod => mod.ManifestoSection))
const PartnersSection = dynamic(() => import('@/components/sections/partners').then(mod => mod.PartnersSection))
const StatsSection = dynamic(() => import('@/components/sections/stats').then(mod => mod.StatsSection))
const BentoGridSection = dynamic(() => import('@/components/sections/bento-grid').then(mod => mod.BentoGridSection))
const ProcessSection = dynamic(() => import('@/components/sections/process').then(mod => mod.ProcessSection))
const FleetGallerySection = dynamic(() => import('@/components/sections/fleet-gallery').then(mod => mod.FleetGallerySection))
const TestimonialSection = dynamic(() => import('@/components/sections/testimonial').then(mod => mod.TestimonialSection))
const ProjectsGallerySection = dynamic(() => import('@/components/sections/projects-gallery').then(mod => mod.ProjectsGallerySection))
const CertificationsSection = dynamic(() => import('@/components/sections/certifications').then(mod => mod.CertificationsSection))
const CoverageSection = dynamic(() => import('@/components/sections/coverage').then(mod => mod.CoverageSection))
const ContactSection = dynamic(() => import('@/components/sections/contact').then(mod => mod.ContactSection))
const Footer = dynamic(() => import('@/components/footer').then(mod => mod.Footer))

export const metadata: Metadata = {
  title: 'Concreto Premezclado Lima | UNIMAX Corp',
  description: 'Expertos en concreto premezclado en Lima. Alta resistencia, bombeo y despacho rápido. ¡Cotiza tu proyecto gratis con UNIMAX Corp hoy!',
  keywords: [
    'concreto premezclado Lima',
    'mixer Lima',
    'concreto premezclado Perú',
    'bomba de concreto',
    'alquiler maquinaria pesada Lima'
  ],
  openGraph: {
    title: 'Concreto Premezclado en Lima | UNIMAX Corp',
    description: 'Expertos en concreto premezclado en Lima. Alta resistencia, bombeo y despacho rápido. ¡Cotiza tu proyecto gratis con UNIMAX Corp hoy!',
    url: 'https://www.unimaxcorp.com/',
    siteName: 'UNIMAX Corp',
    images: [{ url: 'https://www.unimaxcorp.com/og-logo-dark.png', width: 1200, height: 630 }],
    locale: 'es_PE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Concreto Premezclado Lima | UNIMAX Corp',
    description: 'Expertos en concreto premezclado en Lima. Alta resistencia, bombeo y despacho rápido. ¡Cotiza tu proyecto gratis con UNIMAX Corp hoy!',
    images: ['https://www.unimaxcorp.com/og-logo-dark.png'],
  },
  alternates: {
    canonical: 'https://www.unimaxcorp.com/',
  },
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <PartnersSection />
      <ManifestoSection />
      <StatsSection />
      <BentoGridSection />
      <ProcessSection />
      <FleetGallerySection />
      <TestimonialSection />
      <ProjectsGallerySection />
      <CertificationsSection />
      <CoverageSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
