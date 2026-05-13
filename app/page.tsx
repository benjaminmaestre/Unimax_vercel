import { Navigation } from '@/components/navigation'
import { HeroSection } from '@/components/sections/hero'
import { ManifestoSection } from '@/components/sections/manifesto'
import { BentoGridSection } from '@/components/sections/bento-grid'
import { ProcessSection } from '@/components/sections/process'
import { FleetGallerySection } from '@/components/sections/fleet-gallery'
import { TestimonialSection } from '@/components/sections/testimonial'
import { ProjectsGallerySection } from '@/components/sections/projects-gallery'
import { CertificationsSection } from '@/components/sections/certifications'
import { CoverageSection } from '@/components/sections/coverage'
import { ContactSection } from '@/components/sections/contact'
import { Footer } from '@/components/footer'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ManifestoSection />
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
