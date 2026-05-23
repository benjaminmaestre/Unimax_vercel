'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Satellite, Truck, Play } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/components/language-provider'

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.06,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

export function BentoGridSection() {
  const { t } = useLanguage()

  return (
    <section className="relative py-24 lg:py-32 bg-background grain" id="productos">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-primary">
            {t('bento.prelabel')}
          </span>
          <h2 className="mt-3 text-2xl lg:text-4xl font-bold leading-[1.15] tracking-tight text-text-primary text-balance">
            {t('bento.title')}
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          {/* Row 1 */}
          {/* Card 1 - Concreto Premezclado (Large - 3 cols) */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={cardVariants}
            className="lg:col-span-3 group relative overflow-hidden rounded-xl min-h-[460px] border border-border/80 hover:border-primary transition-colors duration-300 bg-surface shadow-xs"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.03]"
              style={{
                backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vaciado-Unimaxcorp-002-lCojy5wXyOYj9Fl3zxtJ0S1EpUHHYT.webp')`,
              }}
            />
            {/* Matte gradient overlay for high text contrast in both light/dark modes */}
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent" />
            <div className="relative h-full flex flex-col justify-end p-6 lg:p-8">
              <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-primary">
                {t('bento.p1.tag')}
              </span>
              <h3 className="mt-2 text-xl lg:text-2xl font-bold text-white">
                {t('bento.p1.title')}
              </h3>
              <ul className="mt-4 space-y-2 max-w-sm">
                {[
                  t('bento.p1.item1'),
                  t('bento.p1.item2'),
                  t('bento.p1.item3'),
                  t('bento.p1.item4')
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-white/80">
                    <span className="w-1.5 h-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="#contacto"
                className="group/link mt-6 inline-flex items-center gap-2 text-white/95 hover:text-primary transition-colors"
              >
                <span className="text-xs font-bold tracking-[0.1em] uppercase">{t('bento.p1.link')}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover/link:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          {/* Card 2 - Logística Inteligente (Small - 2 cols) */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={cardVariants}
            className="lg:col-span-2 group relative overflow-hidden rounded-xl min-h-[460px] bg-surface border border-border/80 hover:border-primary transition-colors duration-300 shadow-xs"
          >
            <div className="h-full flex flex-col p-6 lg:p-8">
              {/* Matte Industrial Icon container */}
              <div className="w-16 h-16 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center transition-colors group-hover:bg-primary/20">
                <Satellite className="w-8 h-8 text-primary" />
              </div>
              
              <span className="mt-6 text-[10px] font-bold tracking-[0.15em] uppercase text-primary">
                {t('bento.p2.tag')}
              </span>
              <h3 className="mt-2 text-xl lg:text-2xl font-bold text-text-primary">
                {t('bento.p2.title')}
              </h3>
              <ul className="mt-4 space-y-2 flex-1">
                {[
                  t('bento.p2.item1'),
                  t('bento.p2.item2'),
                  t('bento.p2.item3'),
                  t('bento.p2.item4')
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-text-secondary">
                    <span className="w-1.5 h-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="#contacto"
                className="group/link mt-6 inline-flex items-center gap-2 text-text-primary hover:text-primary transition-colors"
              >
                <span className="text-xs font-bold tracking-[0.1em] uppercase">{t('bento.p2.link')}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover/link:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          {/* Row 2 */}
          {/* Card 3 - Maquinaria y Bombeo (Small - 2 cols) */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={cardVariants}
            className="lg:col-span-2 group relative overflow-hidden rounded-xl min-h-[460px] bg-surface border border-border/80 hover:border-primary transition-colors duration-300 shadow-xs"
            id="servicios"
          >
            <div className="h-full flex flex-col p-6 lg:p-8">
              {/* Matte Industrial Icon container */}
              <div className="w-16 h-16 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center transition-colors group-hover:bg-primary/20">
                <Truck className="w-8 h-8 text-primary" />
              </div>
              
              <span className="mt-6 text-[10px] font-bold tracking-[0.15em] uppercase text-primary">
                {t('bento.p3.tag')}
              </span>
              <h3 className="mt-2 text-xl lg:text-2xl font-bold text-text-primary">
                {t('bento.p3.title')}
              </h3>
              <ul className="mt-4 space-y-2 flex-1">
                {[
                  t('bento.p3.item1'),
                  t('bento.p3.item2'),
                  t('bento.p3.item3'),
                  t('bento.p3.item4')
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-text-secondary">
                    <span className="w-1.5 h-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="#contacto"
                className="group/link mt-6 inline-flex items-center gap-2 text-text-primary hover:text-primary transition-colors"
              >
                <span className="text-xs font-bold tracking-[0.1em] uppercase">{t('bento.p3.link')}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover/link:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          {/* Card 4 - Video Card (Large - 3 cols) */}
          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={cardVariants}
            className="lg:col-span-3 group relative overflow-hidden rounded-xl min-h-[460px] border border-border/80 hover:border-primary transition-colors duration-300 shadow-xs"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.03]"
              style={{
                backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/plnata-dosificadora-1-nBJ3KM7b2wgHOjE006GXWkj4cKEZ5k.webp')`,
              }}
            />
            {/* Matte dark gradient overlay for text protection */}
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/45 to-transparent" />
            
            {/* Matte industrial Play Button - heavy, clean construction style */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-primary/95 flex items-center justify-center hover:bg-cta-hover hover:scale-105 active:scale-95 shadow-lg transition-all duration-200 cursor-pointer border border-primary/20">
                <Play className="w-6 h-6 text-white ml-0.5" fill="white" />
              </div>
            </div>

            <div className="relative h-full flex flex-col justify-end p-6 lg:p-8">
              <p className="text-sm text-white/95 font-medium">{t('bento.p4.desc')}</p>
              <div className="mt-3 inline-flex items-center gap-2 bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded border border-white/10 w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-[9px] font-bold tracking-[0.15em] uppercase text-white">
                  {t('bento.p4.badge')}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
