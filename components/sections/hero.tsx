'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/components/language-provider'

export function HeroSection() {
  const { t } = useLanguage()

  const stats = [
    { value: '+85,000', unit: t('hero.stats.despacho.unit'), label: t('hero.stats.despacho.label') },
    { value: '25', unit: t('hero.stats.trayectoria.unit'), label: t('hero.stats.trayectoria.label') },
    { value: '4', unit: t('hero.stats.plantas.unit'), label: t('hero.stats.plantas.label') },
    { value: '<60', unit: t('hero.stats.entrega.unit'), label: t('hero.stats.entrega.label') },
  ]

  return (
    <section className="relative h-screen min-h-[680px] overflow-hidden grain bg-black">
      {/* Background Image with Overlays - Cinematic Wide Angle */}
      <div className="absolute inset-0">
        <motion.div 
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/hero-bg.png')`,
          }}
        />
        {/* Cinematic Overlays (Locked as dark for text contrast) */}
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/55 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-black/25" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 section-container h-full flex flex-col justify-center">
        <div className="max-w-[1200px]">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col"
          >
            {/* Pre-label */}
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-[12px] font-bold tracking-[0.2em] uppercase text-primary mb-5 flex items-center gap-3"
            >
              <span className="w-10 h-[2px] bg-primary" />
              {t('hero.prelabel')}
            </motion.span>

            {/* Monumental Headlines */}
            <h1 className="font-display select-none">
              <span className="block text-[65px] sm:text-[95px] lg:text-[140px] leading-[0.82] tracking-[-0.04em] text-white drop-shadow-2xl">
                {t('hero.title1')}
              </span>
              <span className="block text-[65px] sm:text-[95px] lg:text-[140px] leading-[0.82] tracking-[-0.04em] text-white/10 text-outline drop-shadow-2xl">
                {t('hero.title2')}
              </span>
            </h1>

            {/* Description - Locked to light gray for legibility against dark overlay */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="mt-6 text-lg lg:text-xl leading-[1.65] text-white/80 max-w-[620px] font-light"
            >
              {t('hero.desc')}
            </motion.p>

            {/* CTA Stack */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="#contacto"
                className="group relative inline-flex items-center justify-center h-[56px] px-9 text-[12px] font-bold tracking-[0.15em] uppercase bg-primary text-white rounded-md overflow-hidden transition-all duration-300 border border-primary hover:bg-cta-hover active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {t('hero.cta.cotizar')}
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1.5" />
                </span>
              </Link>
              <Link
                href="#soluciones"
                className="inline-flex items-center justify-center h-[56px] px-9 text-[12px] font-bold tracking-[0.15em] uppercase bg-transparent text-white border-2 border-white/20 rounded-md hover:bg-white/10 hover:border-white/40 transition-all duration-200 active:scale-95"
              >
                {t('hero.cta.servicios')}
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 hidden md:flex"
      >
        <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-white/40">{t('hero.scroll')}</span>
        <div className="w-px h-10 bg-linear-to-t from-primary to-transparent relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 40] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-white"
          />
        </div>
      </motion.div>

      {/* Bottom Stats Strip - (Hidden on mobile to reduce scroll height and keep screen focused) */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-0 left-0 right-0 bg-surface/85 border-t border-border/60 backdrop-blur-md hidden lg:block"
      >
        <div className="section-container">
          <div className="grid grid-cols-4 divide-x divide-border/40">
            {stats.map((stat) => (
              <div key={stat.label} className="py-6 px-6 flex flex-col justify-center">
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-3xl text-text-primary tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-[11px] font-bold text-primary uppercase tracking-tighter">
                    {stat.unit}
                  </span>
                </div>
                <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-text-muted mt-0.5">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
