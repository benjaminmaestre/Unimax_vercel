'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/components/language-provider'

export function HeroSection() {
  const { t, language } = useLanguage()

  const stats = [
    { value: '+85,000', unit: t('hero.stats.despacho.unit'), label: t('hero.stats.despacho.label') },
    { value: '25', unit: t('hero.stats.trayectoria.unit'), label: t('hero.stats.trayectoria.label') },
    { value: '4', unit: t('hero.stats.plantas.unit'), label: t('hero.stats.plantas.label') },
    { value: '<60', unit: t('hero.stats.entrega.unit'), label: t('hero.stats.entrega.label') },
  ]

  return (
    <section id="hero" className="relative h-screen min-h-[680px] overflow-hidden grain bg-white dark:bg-black text-[#0A0F14] dark:text-white transition-colors duration-300">
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
        
        {/* Cinematic Overlays - Light Mode (Warm, bright, golden-hour industrial look) */}
        <div 
          className="absolute inset-0 block dark:hidden"
          style={{
            background: 'linear-gradient(to right, rgba(255, 255, 255, 0.68) 0%, rgba(255, 255, 255, 0.42) 52%, rgba(255, 255, 255, 0.10) 100%)'
          }}
        />
        <div 
          className="absolute inset-0 block dark:hidden"
          style={{
            background: 'radial-gradient(circle at 70% 30%, rgba(193, 61, 58, 0.10), transparent 35%)'
          }}
        />

        {/* Cinematic Overlays - Dark Mode (Intense, industrial, night look - locked from before) */}
        <div 
          className="absolute inset-0 hidden dark:block"
          style={{
            background: 'linear-gradient(to right, rgba(0, 0, 0, 0.82) 0%, rgba(0, 0, 0, 0.55) 60%, rgba(0, 0, 0, 0.30) 100%)'
          }}
        />
      </div>

      {/* Decorative monumental outline background text (Opacity 10-15%, stroke outline, non-legible) */}
      <div className="absolute right-0 top-1/3 -translate-y-1/2 pointer-events-none select-none overflow-hidden hidden lg:block max-w-full z-0">
        <span className="font-display text-[180px] font-black leading-none text-neutral-900/4 dark:text-white/12 text-outline tracking-wider block translate-x-16 uppercase">
          {t('hero.bg_decor')}
        </span>
      </div>

      {/* Main Content */}
      <div className="relative z-10 section-container h-full flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Column: Text Content (moved towards center, controlled max-width) */}
        <div className="max-w-[720px] flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col"
          >
            {/* Pre-label (Tagline LÍDERES EN CONCRETO PREMEZCLADO with WCAG AA compliance >4.5:1 ratio) */}
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-[12px] font-extrabold tracking-[0.25em] uppercase text-[#1F2937] dark:text-white/90 mb-5 flex items-center gap-3"
            >
              <span className="w-10 h-[2px] bg-primary" />
              {t('hero.prelabel')}
            </motion.span>

            {/* Monumental value proposition headline */}
            <h1 className="font-display select-none leading-tight">
              <span className="block text-[42px] sm:text-[56px] lg:text-[68px] font-extrabold tracking-tight text-[#0A0F14] dark:text-white drop-shadow-2xl">
                {t('hero.title1')}
              </span>
              <span className="block text-[30px] sm:text-[40px] lg:text-[48px] font-bold text-[#1F2937] dark:text-white/90 tracking-tight mt-2 drop-shadow-xl font-sans">
                {t('hero.title2')}
              </span>
            </h1>

            {/* Description - sentence case, light gray */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="mt-6 text-base sm:text-lg lg:text-xl leading-[1.65] text-[#374151] dark:text-white/80 max-w-[620px] font-light"
            >
              {t('hero.desc')}
            </motion.p>

            {/* Free Inspection Hook — High-impact marketing badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-8 inline-flex items-center gap-3 px-5 py-3 rounded-lg bg-primary/8 dark:bg-primary/15 border border-primary/20 dark:border-primary/30 w-fit"
            >
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
              </span>
              <span className="text-[13px] sm:text-[14px] font-extrabold tracking-wide text-primary uppercase">
                {t('hero.hook')}
              </span>
            </motion.div>

            {/* CTA Stack */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <Link
                href="#contacto"
                className="group relative inline-flex items-center justify-center h-[56px] px-12 text-[13px] sm:text-[14px] font-extrabold tracking-[0.15em] uppercase bg-primary text-white rounded-md overflow-hidden transition-all duration-300 border border-primary hover:bg-cta-hover active:scale-95 shadow-lg hover:shadow-primary/20"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {t('hero.cta.cotizar')}
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1.5" />
                </span>
              </Link>
              <Link
                href="#soluciones"
                className="inline-flex items-center justify-center h-[56px] px-9 text-[12px] font-bold tracking-[0.15em] uppercase bg-transparent text-neutral-900 dark:text-white border-2 border-neutral-900/30 dark:border-white/40 hover:border-neutral-900 dark:hover:border-white/80 rounded-md hover:bg-neutral-900/5 dark:hover:bg-white/5 transition-all duration-200 active:scale-95"
              >
                {t('hero.cta.servicios')}
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Anchoring Element (Operation plants indicator badge) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="hidden md:flex flex-col items-start gap-4 p-6 bg-neutral-50/90 dark:bg-white/3 border border-neutral-200 dark:border-white/10 backdrop-blur-md rounded-xl max-w-[320px] shadow-2xl relative overflow-hidden group transition-all duration-300"
        >
          {/* Decorative glow */}
          <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/30 transition-all duration-300 animate-pulse" />
          
          <div className="flex items-center gap-3">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] font-extrabold tracking-[0.2em] uppercase text-emerald-600 dark:text-emerald-400">
              {language === 'es' ? 'OPERACIÓN EN VIVO' : 'LIVE OPERATION'}
            </span>
          </div>
          
          <h3 className="font-display text-xl text-[#0A0F14] dark:text-white mt-1 leading-tight tracking-wide">
            {language === 'es' ? '4 PLANTAS DOSIFICADORAS DESPACHANDO 24/7' : '4 BATCHING PLANTS DISPATCHING 24/7'}
          </h3>
          
          <p className="text-[11px] text-[#374151] dark:text-white/70 leading-relaxed font-light mt-1">
            {language === 'es' 
              ? 'Monitoreo GPS en tiempo real para asegurar entregas en menos de 60 minutos en todo Lima.' 
              : 'Real-time GPS monitoring to ensure deliveries in under 60 minutes across Lima.'}
          </p>
          
          <Link
            href="#plantas" 
            className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.15em] uppercase text-primary hover:text-black dark:hover:text-white transition-colors duration-200 mt-2 cursor-pointer"
          >
            {language === 'es' ? '▶ VER PLANTAS EN OPERACIÓN' : '▶ VIEW OPERATIONAL PLANTS'}
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-32 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3 z-10"
      >
        <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-neutral-500 dark:text-white/50">{t('hero.scroll')}</span>
        <div className="w-px h-10 bg-linear-to-t from-primary to-transparent relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 40] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-primary dark:bg-white"
          />
        </div>
      </motion.div>

      {/* Bottom Stats Strip - (Hidden on mobile) */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-0 left-0 right-0 bg-neutral-100/80 dark:bg-black/75 border-t border-neutral-200 dark:border-white/15 backdrop-blur-md hidden lg:block z-20 transition-all duration-300"
      >
        <div className="section-container">
          <div className="grid grid-cols-4 divide-x divide-neutral-200 dark:divide-white/10">
            {stats.map((stat) => (
              <div key={stat.label} className="py-8 px-6 flex flex-col justify-center">
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-4xl text-[#0A0F14] dark:text-white tracking-tight font-extrabold">
                    {stat.value}
                  </span>
                  <span className="text-[11px] font-bold text-primary uppercase tracking-tighter">
                    {stat.unit}
                  </span>
                </div>
                <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-neutral-500 dark:text-white/60 mt-1">
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
