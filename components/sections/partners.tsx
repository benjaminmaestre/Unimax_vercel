'use client'

import { motion } from 'framer-motion'
import { Building2, Factory, HardHat, Truck, ShieldCheck, CheckCircle2, Handshake } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

export function PartnersSection() {
  const { language } = useLanguage()

  const partners = [
    { name: 'Suministros', icon: Factory },
    { name: 'Aceros', icon: Building2 },
    { name: 'Logística', icon: Truck },
    { name: 'Maquinarias', icon: HardHat },
    { name: 'Seguros', icon: ShieldCheck },
    { name: 'Garantía', icon: CheckCircle2 },
  ]

  const texts = {
    es: {
      pre: 'RESPALDO GARANTIZADO',
      title1: 'ALIANZAS',
      title2: 'ESTRATÉGICAS',
      desc: 'En UNIMAX CORP tenemos convenios exclusivos con las empresas más grandes e importantes del Perú. Esta red de aliados estratégicos nos permite asegurar un suministro ininterrumpido, maquinaria de última generación y un servicio a prueba de fallas para tu proyecto, sin importar su escala.'
    },
    en: {
      pre: 'GUARANTEED BACKING',
      title1: 'STRATEGIC',
      title2: 'PARTNERSHIPS',
      desc: 'At UNIMAX CORP, we hold exclusive agreements with the largest and most important companies in Peru. This network of strategic allies allows us to guarantee uninterrupted supply, cutting-edge machinery, and a fail-proof service for your project, regardless of its scale.'
    }
  }

  const t = texts[language] || texts.es

  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-white dark:bg-[#06090c] border-y border-neutral-200 dark:border-white/5 transition-colors duration-300">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 grain opacity-40 dark:opacity-50" />

      <div className="container relative z-10 px-6 mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Text Column */}
          <div className="w-full lg:w-5/12 flex flex-col items-center text-center lg:items-start lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="flex items-center gap-3 text-[10px] md:text-[12px] font-extrabold tracking-[0.25em] uppercase text-primary mb-6 justify-center lg:justify-start">
                <Handshake className="w-4 h-4" />
                {t.pre}
              </span>
              
              <h2 className="font-display leading-tight mb-6">
                <span className="block text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0A0F14] dark:text-white uppercase tracking-tight">
                  {t.title1}
                </span>
                <span className="block text-3xl md:text-4xl lg:text-5xl font-light text-neutral-500 dark:text-neutral-400 uppercase tracking-tight mt-1">
                  {t.title2}
                </span>
              </h2>
              
              <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed font-light max-w-lg">
                {t.desc}
              </p>
            </motion.div>
          </div>

          {/* Right Marquee Column */}
          <div className="w-full lg:w-7/12 relative">
            {/* Fade masks for smooth scroll effect */}
            <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 z-10 bg-linear-to-r from-white dark:from-[#06090c] to-transparent pointer-events-none transition-colors duration-300" />
            <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 z-10 bg-linear-to-l from-white dark:from-[#06090c] to-transparent pointer-events-none transition-colors duration-300" />

            <div className="overflow-hidden flex">
              <motion.div
                className="flex items-center gap-12 md:gap-20 py-8 whitespace-nowrap"
                animate={{ x: ['0%', '-50%'] }}
                transition={{
                  duration: 30,
                  ease: 'linear',
                  repeat: Infinity,
                }}
              >
                {/* Render duplicates for infinite scroll illusion */}
                {[...partners, ...partners].map((partner, i) => {
                  const Icon = partner.icon
                  return (
                    <div 
                      key={i} 
                      className="group flex flex-col items-center justify-center gap-5 transition-all duration-500 opacity-60 hover:opacity-100 grayscale hover:grayscale-0 hover:scale-105 cursor-default"
                    >
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 shadow-lg flex items-center justify-center text-neutral-400 dark:text-white/30 group-hover:bg-white dark:group-hover:bg-white/10 group-hover:text-primary group-hover:border-primary/30 group-hover:shadow-primary/20 transition-all duration-500">
                        <Icon className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1.2} />
                      </div>
                      <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-neutral-500 dark:text-neutral-400 group-hover:text-[#0A0F14] dark:group-hover:text-white transition-colors duration-300">
                        {partner.name}
                      </span>
                    </div>
                  )
                })}
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
