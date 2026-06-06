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
