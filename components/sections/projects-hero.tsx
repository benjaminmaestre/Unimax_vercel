'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLanguage } from '@/components/language-provider'

export function ProjectsHero() {
  const { t, language } = useLanguage()

  return (
    <section className="relative w-full h-[60vh] min-h-[460px] md:h-[65vh] flex items-center justify-center overflow-hidden bg-background text-text-primary transition-colors duration-300 select-none">
      {/* Background Image with Parallax-like scale entry - Light Mode */}
      <motion.div
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.65 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none block dark:hidden"
        style={{ backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pavimento-san-juan-de-lurigancho-Unimaxcorp-aFKG9rAwfcI1r2anhItf2YY1uzZyVb.webp')` }}
      />

      {/* Background Image with Parallax-like scale entry - Dark Mode */}
      <motion.div
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.45 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none hidden dark:block"
        style={{ backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pavimento-san-juan-de-lurigancho-Unimaxcorp-aFKG9rAwfcI1r2anhItf2YY1uzZyVb.webp')` }}
      />

      {/* Cinematic Overlays - Light Mode */}
      <div 
        className="absolute inset-0 block dark:hidden pointer-events-none"
        style={{
          background: 'linear-gradient(to right, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.85) 50%, rgba(255, 255, 255, 0.2) 100%)'
        }}
      />
      <div 
        className="absolute inset-0 block dark:hidden pointer-events-none"
        style={{
          background: 'linear-gradient(to top, var(--background) 0%, rgba(255, 255, 255, 0.4) 40%, transparent 100%)'
        }}
      />

      {/* Cinematic Overlays - Dark Mode */}
      <div 
        className="absolute inset-0 hidden dark:block pointer-events-none"
        style={{
          background: 'linear-gradient(to right, rgba(10, 15, 20, 0.92) 0%, rgba(10, 15, 20, 0.65) 60%, rgba(10, 15, 20, 0.3) 100%)'
        }}
      />
      <div 
        className="absolute inset-0 hidden dark:block pointer-events-none"
        style={{
          background: 'linear-gradient(to top, var(--background) 0%, rgba(10, 15, 20, 0.4) 40%, transparent 100%)'
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 section-container w-full pt-20">
        <div className="max-w-3xl flex flex-col items-start text-left">
          {/* Breadcrumbs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2 mb-4"
          >
            <Link 
              href="/" 
              className="text-[10px] md:text-[11px] font-extrabold tracking-[0.15em] text-[#4B5563] dark:text-[#C8CED4] hover:text-primary dark:hover:text-primary uppercase transition-colors"
            >
              {language === 'es' ? 'INICIO' : 'HOME'}
            </Link>
            <span className="text-[#9CA3AF] dark:text-[#525252] text-[10px] opacity-70">/</span>
            <span className="text-[10px] md:text-[11px] font-extrabold tracking-[0.15em] text-[#4B5563] dark:text-[#C8CED4] uppercase">
              {language === 'es' ? 'NOSOTROS' : 'ABOUT US'}
            </span>
            <span className="text-[#9CA3AF] dark:text-[#525252] text-[10px] opacity-70">/</span>
            <span className="text-[10px] md:text-[11px] font-extrabold tracking-[0.15em] text-primary uppercase">
              {language === 'es' ? 'PROYECTOS' : 'PROJECTS'}
            </span>
          </motion.div>

          {/* Bebas Neue Bold Display Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-7xl font-display font-extrabold tracking-wide text-[#0A0F14] dark:text-white leading-tight uppercase"
          >
            {t('projects.hero.title')}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 md:mt-6 text-sm md:text-lg text-neutral-800 dark:text-white/80 leading-relaxed max-w-2xl font-sans"
          >
            {t('projects.hero.desc')}
          </motion.p>
        </div>
      </div>
    </section>
  )
}
