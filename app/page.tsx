import { Navigation } from '@/components/navigation'
import { HeroSection } from '@/components/sections/hero'
import { StatsSection } from '@/components/sections/stats'
import { ManifestoSection } from '@/components/sections/manifesto'
import { BentoGridSection } from '@/components/sections/bento-grid'
import { ProcessSection } from '@/components/sections/process'
import { FleetGallerySection } from '@/components/sections/fleet-gallery'
import { TestimonialSection } from '@/components/sections/testimonial'
import { CertificationsSection } from '@/components/sections/certifications'
import { CoverageSection } from '@/components/sections/coverage'
import { ContactSection } from '@/components/sections/contact'
import { Footer } from '@/components/footer'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <ManifestoSection />
      <BentoGridSection />
      <ProcessSection />
      <FleetGallerySection />
      <TestimonialSection />
      <CertificationsSection />
      <CoverageSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
