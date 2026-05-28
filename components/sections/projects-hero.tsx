'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLanguage } from '@/components/language-provider'

export function ProjectsHero() {
  const { t, language } = useLanguage()

  return (
    <section className="relative w-full h-[60vh] min-h-[460px] md:h-[65vh] flex items-center justify-center overflow-hidden bg-black select-none">
      {/* Background Image with Parallax-like scale entry */}
      <motion.div
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.55 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{ backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pavimento-san-juan-de-lurigancho-Unimaxcorp-aFKG9rAwfcI1r2anhItf2YY1uzZyVb.webp')` }}
      />

      {/* Industrial Dark Gradients for Content Legibility (WCAG AA Compliance) */}
      <div className="absolute inset-0 bg-linear-to-t from-background via-background/40 to-black/50 pointer-events-none" />
      <div className="absolute inset-0 bg-linear-to-r from-background/70 via-transparent to-transparent md:from-background/90 md:via-background/30 md:to-transparent pointer-events-none" />

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
              className="text-[10px] md:text-[11px] font-extrabold tracking-[0.15em] text-text-muted hover:text-primary uppercase transition-colors"
            >
              {language === 'es' ? 'INICIO' : 'HOME'}
            </Link>
            <span className="text-text-muted text-[10px] opacity-50">/</span>
            <span className="text-[10px] md:text-[11px] font-extrabold tracking-[0.15em] text-text-muted uppercase">
              {language === 'es' ? 'NOSOTROS' : 'ABOUT US'}
            </span>
            <span className="text-text-muted text-[10px] opacity-50">/</span>
            <span className="text-[10px] md:text-[11px] font-extrabold tracking-[0.15em] text-primary uppercase">
              {language === 'es' ? 'PROYECTOS' : 'PROJECTS'}
            </span>
          </motion.div>

          {/* Bebas Neue Bold Display Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-7xl font-display font-extrabold tracking-wide text-white leading-tight uppercase"
          >
            {t('projects.hero.title')}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 md:mt-6 text-sm md:text-lg text-white/80 leading-relaxed max-w-2xl font-sans"
          >
            {t('projects.hero.desc')}
          </motion.p>
        </div>
      </div>
    </section>
  )
}
