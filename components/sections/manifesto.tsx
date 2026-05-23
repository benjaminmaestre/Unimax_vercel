'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/components/language-provider'

export function ManifestoSection() {
  const { t } = useLanguage()

  return (
    <section className="relative py-20 lg:py-32 bg-background grain" id="soluciones">
      <div className="section-container">
        <div className="grid lg:grid-cols-[55%_45%] gap-10 lg:gap-16 items-center">
          {/* Image Side - Mixer Truck Fleet */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-xl aspect-16/10 shadow-md">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FLOTA-DE-MIXE-1-mbwJtyBvhWEEPoA6hNfsEhLyPhYGpZ.webp"
                alt="Flota de camiones mixer UNIMAXCORP"
                className="w-full h-full object-cover select-none"
              />
              {/* Floating Badge (Matte Glass style for contrast in day/night) */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md rounded-lg px-4 py-2.5 flex items-center gap-2 border border-white/10"
              >
                <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">{t('manifesto.badge')}</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:pl-6"
          >
            {/* Pre-label */}
            <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-primary">
              {t('manifesto.prelabel')}
            </span>

            {/* Headline */}
            <h2 className="mt-3 text-2xl lg:text-3xl font-bold leading-[1.15] tracking-tight text-text-primary text-balance">
              {t('manifesto.title')}
            </h2>

            {/* Description */}
            <p className="mt-6 text-sm lg:text-base leading-relaxed text-text-secondary">
              {t('manifesto.desc')}
            </p>

            {/* Divider */}
            <div className="mt-6 w-12 h-0.5 bg-primary" />

            {/* Secondary Text */}
            <p className="mt-6 text-xs lg:text-sm leading-relaxed text-text-muted">
              {t('manifesto.sub')}
            </p>

            {/* CTA - Matte outline shape */}
            <Link
              href="#contacto"
              className="group mt-8 inline-flex items-center justify-center h-12 px-6 text-xs font-bold tracking-[0.1em] uppercase bg-transparent text-text-primary border border-border rounded-md hover:bg-primary hover:text-white hover:border-primary transition-all duration-200"
            >
              {t('manifesto.cta')}
              <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-150 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
