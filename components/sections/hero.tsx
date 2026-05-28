'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
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
    <section id="hero" className="relative flex flex-col justify-center min-h-svh pt-32 pb-20 md:pt-40 md:pb-32 lg:pt-32 lg:pb-[150px] overflow-hidden grain bg-white dark:bg-black text-[#0A0F14] dark:text-white transition-colors duration-300">
      {/* Background Image with Overlays - Cinematic Wide Angle */}
      <div className="absolute inset-0">
        <motion.div 
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/hero-bg.png"
            alt="Fondo Unimax Corp"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
            quality={90}
          />
        </motion.div>
        
        {/* Cinematic Overlays - Light Mode (Warm, bright, golden-hour industrial look) */}
        <div 
          className="absolute inset-0 block dark:hidden"
          style={{
            background: 'linear-gradient(to right, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 45%, rgba(255, 255, 255, 0.15) 100%)'
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



      {/* Main Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-5 md:px-10 lg:px-16 xl:px-20 flex flex-col lg:flex-row items-center justify-between gap-10 mt-8 lg:mt-0">
        {/* Left Column: Text Content (moved towards center, controlled max-width) */}
        <div className="max-w-[720px] lg:max-w-[540px] xl:max-w-[720px] flex flex-col justify-center">
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
              className="text-[10px] xs:text-[12px] font-extrabold tracking-[0.25em] uppercase text-[#1F2937] dark:text-white/90 mb-6 sm:mb-5 flex items-center gap-3"
            >
              <span className="w-10 h-[2px] bg-primary" />
              {t('hero.prelabel')}
            </motion.span>

            {/* Monumental value proposition headline */}
            <h1 className="font-display select-none leading-tight">
              <span className="block text-[26px] xs:text-[32px] sm:text-[44px] md:text-[52px] lg:text-[56px] xl:text-[68px] font-extrabold tracking-tight text-[#0A0F14] dark:text-white uppercase sm:normal-case drop-shadow-2xl">
                {t('hero.title1')}
              </span>
              <span className="block text-[17px] xs:text-[22px] sm:text-[30px] md:text-[36px] lg:text-[38px] xl:text-[48px] font-bold text-[#1F2937] dark:text-white/90 tracking-tight mt-3 sm:mt-2 drop-shadow-xl font-sans">
                {t('hero.title2')}
              </span>
            </h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg xl:text-xl leading-[1.65] text-neutral-950 dark:text-neutral-100 max-w-[620px] font-normal"
            >
              <span className="inline md:hidden">
                {language === 'es' 
                  ? 'Concreto de alta resistencia y logística de vanguardia para tus obras.' 
                  : 'High-resistance concrete and leading-edge logistics for your projects.'}
              </span>
              <span className="hidden md:inline">
                {t('hero.desc')}
              </span>
            </motion.p>

            {/* Free Inspection Hook — High-impact marketing badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-6 sm:mt-8 inline-flex items-center gap-2.5 px-4 py-2.5 sm:px-5 sm:py-3 rounded-lg bg-primary/8 dark:bg-primary/15 border border-primary/20 dark:border-primary/30 w-fit"
            >
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
              </span>
              <span className="text-[12px] sm:text-[14px] font-extrabold tracking-wide text-primary uppercase">
                {t('hero.hook')}
              </span>
            </motion.div>

            {/* CTA Stack */}
            <div className="mt-8 sm:mt-6 flex flex-col sm:flex-row gap-3.5 sm:gap-4 w-full">
              <Link
                href="#contacto"
                className="group relative inline-flex items-center justify-center h-[56px] px-12 text-[13px] sm:text-[14px] font-extrabold tracking-[0.15em] uppercase bg-primary text-white rounded-md overflow-hidden transition-all duration-300 border border-primary hover:bg-cta-hover active:scale-95 shadow-lg hover:shadow-primary/20 w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {t('hero.cta.cotizar')}
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1.5" />
                </span>
              </Link>
              <Link
                href="#soluciones"
                className="inline-flex items-center justify-center h-[56px] px-9 text-[12px] font-bold tracking-[0.15em] uppercase bg-white/60 dark:bg-white/5 backdrop-blur-md text-neutral-900 dark:text-white border sm:border-2 border-neutral-950/15 sm:border-neutral-900/40 dark:border-white/20 sm:dark:border-white/50 hover:bg-white/80 dark:hover:bg-white/10 hover:border-neutral-900 dark:hover:border-white rounded-md transition-all duration-200 active:scale-95 shadow-sm w-full sm:w-auto"
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

      {/* Scroll Indicator - Positioned relatively below content on mobile to avoid overlap, absolutely centered on desktop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="relative lg:absolute mt-5 lg:mt-0 bottom-auto lg:bottom-[120px] left-auto lg:left-1/2 translate-x-0 lg:-translate-x-1/2 flex flex-col items-center z-10 mx-auto w-fit"
      >
        <div className="w-[2px] h-10 bg-neutral-300/80 dark:bg-white/20 relative overflow-hidden rounded-full">
          <motion.div 
            animate={{ y: [-14, 40] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-[14px] bg-linear-to-b from-primary to-white"
          />
        </div>
      </motion.div>

      {/* Bottom Stats Strip - (Hidden on mobile) */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-0 left-0 right-0 bg-neutral-100/80 dark:bg-black/75 border-t border-neutral-200 dark:border-white/15 backdrop-blur-md hidden md:block z-20 transition-all duration-300"
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
