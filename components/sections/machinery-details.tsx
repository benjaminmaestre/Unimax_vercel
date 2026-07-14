'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/components/language-provider'
import Image from 'next/image'

export function MachineryDetails() {
  const { t, language } = useLanguage()

  const cardInner = "relative bg-white/70 dark:bg-[#111111]/70 backdrop-blur-md border border-neutral-200/50 dark:border-white/5 rounded-2xl overflow-hidden"

  return (
    <div className="bg-background grain py-16 lg:py-24 relative overflow-hidden">
      <section className="section-container mb-24">
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] md:text-[11px] font-extrabold tracking-[0.2em] text-primary uppercase block">
            • {language === 'es' ? 'TECNOLOGÍA Y EFICIENCIA' : 'TECHNOLOGY AND EFFICIENCY'}
          </span>
          <h2 className="mt-3 text-2xl md:text-4xl font-bold tracking-tight text-text-primary uppercase leading-tight">
            {t('machinery.intro.title')}
          </h2>
          <p className="mt-4 text-sm md:text-base text-text-secondary leading-relaxed">
            {t('machinery.intro.desc')}
          </p>
        </div>

        {/* Highlighted section: Concrete Pumps */}
        <div className="mb-20 group relative overflow-hidden rounded-3xl border border-primary/20 dark:border-primary/10 shadow-2xl">
          <div className="absolute inset-0 bg-linear-to-r from-primary/95 to-primary/50 md:from-primary/90 md:to-primary/20 z-10" />
          <Image 
            src="/bomba_hero.png" 
            alt="Bomba de Concreto" 
            fill 
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="relative z-20 p-8 md:p-16 flex flex-col md:flex-row items-center gap-8 md:gap-16 min-h-[400px]">
            <div className="flex-1 text-white drop-shadow-lg">
              <h3 className="text-4xl md:text-6xl font-bold font-bebas tracking-wider mb-6">
                {t('machinery.pump.title')}
              </h3>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed font-medium md:font-light">
                {t('machinery.pump.desc')}
              </p>
            </div>
          </div>
        </div>

        {/* Other Machinery Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-text-primary uppercase mb-8 border-l-4 border-primary pl-4">
            {t('machinery.equipos.title')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Retroexcavadora */}
            <div className={`${cardInner} group shadow-lg`}>
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src="/retroexcavadora.png" 
                  alt="Retroexcavadora" 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <h4 className="text-xl font-bold text-text-primary uppercase mb-3">
                  {t('machinery.equipos.retro.title')}
                </h4>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {t('machinery.equipos.retro.desc')}
                </p>
              </div>
            </div>

            {/* Cargador Frontal */}
            <div className={`${cardInner} group shadow-lg`}>
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src="/cargador_frontal.png" 
                  alt="Cargador Frontal" 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <h4 className="text-xl font-bold text-text-primary uppercase mb-3">
                  {t('machinery.equipos.cargador.title')}
                </h4>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {t('machinery.equipos.cargador.desc')}
                </p>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  )
}
