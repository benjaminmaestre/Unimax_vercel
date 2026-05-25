'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, CheckCircle, Shield, Heart, Handshake, Award, Target, Leaf } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { useLanguage } from '@/components/language-provider'

type TabId = 'nosotros' | 'mision' | 'valores'

export function ManifestoSection() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState<TabId>('nosotros')

  const tabs = [
    { id: 'nosotros', label: t('manifesto.tab.nosotros') },
    { id: 'mision', label: t('manifesto.tab.mision') },
    { id: 'valores', label: t('manifesto.tab.valores') },
  ] as const

  const values = [
    { id: 1, title: t('manifesto.valores.v1.title'), desc: t('manifesto.valores.v1.desc'), icon: Shield },
    { id: 2, title: t('manifesto.valores.v2.title'), desc: t('manifesto.valores.v2.desc'), icon: Heart },
    { id: 3, title: t('manifesto.valores.v3.title'), desc: t('manifesto.valores.v3.desc'), icon: Handshake },
    { id: 4, title: t('manifesto.valores.v4.title'), desc: t('manifesto.valores.v4.desc'), icon: Award },
    { id: 5, title: t('manifesto.valores.v5.title'), desc: t('manifesto.valores.v5.desc'), icon: Target },
    { id: 6, title: t('manifesto.valores.v6.title'), desc: t('manifesto.valores.v6.desc'), icon: Leaf },
  ]

  return (
    <section className="relative py-12 lg:py-32 bg-background grain overflow-hidden" id="nosotros">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold tracking-[0.15em] uppercase text-primary"
          >
            {t('manifesto.prelabel')}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-2xl lg:text-4xl font-bold leading-[1.15] tracking-tight text-text-primary text-balance"
          >
            {t('manifesto.title')}
          </motion.h2>
        </div>

        {/* Sliding Pill Tab Selector - Premium Matte style */}
        <div className="flex justify-center mb-10 lg:mb-16 select-none">
          <div className="flex items-center gap-1.5 p-1.5 rounded-xl bg-surface border border-border/80 backdrop-blur-md shadow-xs">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-4 py-2.5 rounded-lg text-xs font-bold tracking-widest uppercase transition-colors duration-200 cursor-pointer ${
                    isActive ? 'text-white' : 'text-text-muted hover:text-text-primary'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabGlow"
                      className="absolute inset-0 bg-primary rounded-lg shadow-sm"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Dynamic Tab Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {activeTab === 'nosotros' && (
              <div className="grid lg:grid-cols-[50%_50%] gap-6 lg:gap-16 items-center">
                {/* Left Side: Fleet image with floating badge */}
                <div className="relative">
                  <div className="relative overflow-hidden rounded-xl aspect-16/10 shadow-md">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FLOTA-DE-MIXE-1-mbwJtyBvhWEEPoA6hNfsEhLyPhYGpZ.webp"
                      alt="Flota de camiones mixer UNIMAXCORP"
                      className="w-full h-full object-cover select-none animate-fade-in"
                    />
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md rounded-lg px-4 py-2.5 flex items-center gap-2 border border-white/10"
                    >
                      <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-xs font-bold text-white uppercase tracking-wider">
                        {t('manifesto.badge')}
                      </span>
                    </motion.div>
                  </div>
                </div>

                {/* Right Side: Text content */}
                <div className="lg:pl-6">
                  <p className="text-sm lg:text-base leading-relaxed text-text-secondary">
                    {t('manifesto.desc')}
                  </p>
                  <div className="mt-6 w-12 h-0.5 bg-primary" />
                  <p className="mt-6 text-xs lg:text-sm leading-relaxed text-text-muted">
                    {t('manifesto.sub')}
                  </p>
                  <Link
                    href="#contacto"
                    className="group mt-8 inline-flex items-center justify-center h-12 px-6 text-xs font-bold tracking-widest uppercase bg-transparent text-text-primary border border-border rounded-md hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 active:scale-95 shadow-sm"
                  >
                    {t('manifesto.cta')}
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-150 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            )}

            {activeTab === 'mision' && (
              <div className="grid lg:grid-cols-[45%_55%] gap-6 lg:gap-16 items-center">
                {/* Left Side: Industrial Image */}
                <div className="relative">
                  <div className="relative overflow-hidden rounded-xl aspect-16/10 shadow-md">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/plnata-dosificadora-1-nBJ3KM7b2wgHOjE006GXWkj4cKEZ5k.webp"
                      alt="Operación planta dosificadora Unimaxcorp"
                      className="w-full h-full object-cover select-none"
                    />
                  </div>
                </div>

                {/* Right Side: Mission / Vision / Purpose Cards */}
                <div className="space-y-6">
                  {/* Mission Card */}
                  <div className="p-5 lg:p-6 rounded-xl bg-surface border border-border/80 shadow-xs">
                    <div className="flex items-center gap-3">
                      <span className="w-1.5 h-6 bg-primary rounded-full shrink-0" />
                      <h3 className="text-base lg:text-lg font-bold text-text-primary uppercase tracking-wider">
                        {t('manifesto.mision.title')}
                      </h3>
                    </div>
                    <p className="mt-3 text-xs lg:text-sm text-text-secondary leading-relaxed pl-4">
                      {t('manifesto.mision.desc')}
                    </p>
                  </div>

                  {/* Vision Card */}
                  <div className="p-5 lg:p-6 rounded-xl bg-surface border border-border/80 shadow-xs">
                    <div className="flex items-center gap-3">
                      <span className="w-1.5 h-6 bg-primary rounded-full shrink-0" />
                      <h3 className="text-base lg:text-lg font-bold text-text-primary uppercase tracking-wider">
                        {t('manifesto.vision.title')}
                      </h3>
                    </div>
                    <p className="mt-3 text-xs lg:text-sm text-text-secondary leading-relaxed pl-4">
                      {t('manifesto.vision.desc')}
                    </p>
                  </div>

                  {/* Purpose Card */}
                  <div className="p-5 lg:p-6 rounded-xl bg-surface border border-border/80 shadow-xs">
                    <div className="flex items-center gap-3">
                      <span className="w-1.5 h-6 bg-primary rounded-full shrink-0" />
                      <h3 className="text-base lg:text-lg font-bold text-text-primary uppercase tracking-wider">
                        {t('manifesto.proposito.title')}
                      </h3>
                    </div>
                    <p className="mt-3 text-xs lg:text-sm text-text-secondary leading-relaxed pl-4">
                      {t('manifesto.proposito.desc')}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'valores' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {values.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className="group relative p-6 rounded-xl bg-surface border border-border/80 hover:border-primary transition-all duration-300 shadow-xs flex flex-col items-start overflow-hidden hover:shadow-md"
                    >
                      {/* Sub-hover glow */}
                      <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Icon with animated border glow */}
                      <div className="w-12 h-12 rounded-lg bg-background border border-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 shrink-0 shadow-2xs">
                        <Icon className="w-5 h-5" />
                      </div>

                      <h3 className="mt-4 text-base lg:text-lg font-bold text-text-primary tracking-wide">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-xs lg:text-sm text-text-muted leading-relaxed">
                        {item.desc}
                      </p>
                    </motion.div>
                  )
                })}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
