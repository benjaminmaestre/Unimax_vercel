'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export function CertificationsSection() {
  const { t } = useLanguage()

  const certifications = [
    {
      name: t('cert.c1.title'),
      description: t('cert.c1.desc'),
    },
    {
      name: t('cert.c2.title'),
      description: t('cert.c2.desc'),
    },
    {
      name: t('cert.c3.title'),
      description: t('cert.c3.desc'),
    },
  ]

  return (
    <section className="relative py-12 lg:py-20 bg-surface border-y border-border/80 grain" id="certificaciones">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10"
        >
          <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-primary">
            {t('cert.prelabel')}
          </span>
          <h2 className="mt-3 text-2xl lg:text-3xl font-bold leading-[1.15] tracking-tight text-text-primary text-balance">
            {t('cert.title')}
          </h2>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative w-full max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {certifications.map((cert, index) => (
                <CarouselItem
                  key={cert.name}
                  className="pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full"
                  >
                    <div className="group relative flex flex-col p-6 rounded-lg bg-surface border border-border/80 hover:border-primary transition-colors duration-300 shadow-xs h-full min-h-[160px] justify-start">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-sm lg:text-base font-bold text-text-primary tracking-wide">
                          {cert.name}
                        </span>
                      </div>
                      <p className="mt-3 text-xs lg:text-sm text-text-muted leading-relaxed">
                        {cert.description}
                      </p>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Industrial Navigation Controls */}
            <div className="flex justify-end gap-3 mt-6 select-none">
              <CarouselPrevious className="static translate-y-0 border border-border hover:bg-primary hover:text-white" />
              <CarouselNext className="static translate-y-0 border border-border hover:bg-primary hover:text-white" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  )
}
