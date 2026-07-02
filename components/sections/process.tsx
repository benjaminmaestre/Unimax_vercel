'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FileText, FlaskConical, Truck, HardHat } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

export function ProcessSection() {
  const { t, language } = useLanguage()
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  const steps = [
    {
      number: '01',
      icon: FileText,
      title: t('process.s1.title'),
      description: t('process.s1.desc'),
    },
    {
      number: '02',
      icon: FlaskConical,
      title: t('process.s2.title'),
      description: t('process.s2.desc'),
    },
    {
      number: '03',
      icon: Truck,
      title: t('process.s3.title'),
      description: t('process.s3.desc'),
    },
    {
      number: '04',
      icon: HardHat,
      title: t('process.s4.title'),
      description: t('process.s4.desc'),
    },
  ]

  return (
    <section className="relative py-12 lg:py-32 bg-surface grain">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10 lg:mb-20"
        >
          <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-primary">
            {t('process.prelabel')}
          </span>
          <h2 className="mt-3 text-2xl lg:text-4xl font-bold leading-[1.15] tracking-tight text-text-primary text-balance">
            {t('process.title')}
          </h2>
        </motion.div>

        {/* Timeline */}
        <div ref={containerRef} className="relative">
          {/* Connector Line - Desktop only */}
          <div className="hidden lg:block absolute top-[50px] left-[12.5%] right-[12.5%] h-px bg-border">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="h-full bg-primary origin-left"
            />
          </div>

          {/* Steps Grid - Compressed to compact 2x2 grid on mobile/tablet, 1x4 on desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 lg:gap-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex flex-col items-center text-center px-2 lg:px-4"
              >
                {/* Number */}
                <span className="font-display text-4xl lg:text-6xl text-primary font-bold">
                  {step.number}
                </span>

                {/* Icon Circle */}
                <div className="mt-2 lg:mt-3 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-surface border-2 border-primary flex items-center justify-center shadow-xs">
                  <step.icon className="w-5 h-5 lg:w-6 lg:h-6 text-text-primary" />
                </div>

                {/* Content */}
                <p className="mt-4 lg:mt-5 text-base lg:text-lg font-bold text-text-primary">
                  {step.title}
                </p>
                <p className="mt-1 lg:mt-2 text-xs lg:text-sm leading-relaxed text-text-muted max-w-[180px] mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footnote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.75 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-[10px] text-text-muted text-center max-w-lg mx-auto leading-relaxed select-none"
        >
          {language === 'es'
            ? '*Tiempo referencial sujeto a ubicación, tráfico, programación y condiciones de obra.'
            : '*Reference time subject to location, traffic, scheduling, and job site conditions.'}
        </motion.p>
      </div>
    </section>
  )
}
