'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/components/language-provider'
import { MessageSquare, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface ProjectItem {
  id: number
  titleEs: string
  titleEn: string
  location: string
  volume: string
  image: string
  category: 'building' | 'pavements' | 'pours' | 'infra'
}

export function ProjectsDetails() {
  const { t, language } = useLanguage()
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const categories = [
    { id: 'all', labelKey: 'projects.filter.all' },
    { id: 'building', labelKey: 'projects.filter.building' },
    { id: 'pavements', labelKey: 'projects.filter.pavements' },
    { id: 'pours', labelKey: 'projects.filter.pours' },
    { id: 'infra', labelKey: 'projects.filter.infra' },
  ]

  const projects: ProjectItem[] = [
    {
      id: 1,
      titleEs: 'Edificación Estructural – Proyecto Lince',
      titleEn: 'Structural High-Rise Construction – Lince Project',
      location: 'Lince, Lima',
      volume: '3,200 m³',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/personal-aten-0022-4x47XtoV1Wnj6vpeNYUz6iSMkCrHpS.webp',
      category: 'building',
    },
    {
      id: 2,
      titleEs: 'Vaciado Estructural – Escaleras Cieneguilla',
      titleEn: 'Structural Pouring – Cieneguilla Staircases',
      location: 'Cieneguilla, Lima',
      volume: '5,400 m³',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/obra-Cieneguilla-Unimaxcorp-VaH4EoUIyk4zxpVdU3aC9APxQZNMZ0.webp',
      category: 'pours',
    },
    {
      id: 3,
      titleEs: 'Suministro Masivo – San Juan de Miraflores',
      titleEn: 'Massive Ready-Mix Supply – San Juan de Miraflores',
      location: 'San Juan de Miraflores, Lima',
      volume: '8,200 m³',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/obra-por-civil-Puente-piedra-Unimaxcorp-SEgI9lVQ2mXkeHi3EHHH68UkJ8uWgO.webp',
      category: 'pours',
    },
    {
      id: 4,
      titleEs: 'Infraestructura Urbana – Veredas Parque San Miguel',
      titleEn: 'Urban Infrastructure – Sidewalks at San Miguel Park',
      location: 'Parque San Miguel, Lima',
      volume: '1,800 m³',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/veredad-parque-San-Miguel-Unimaxcorp-FnZoYVtHlbvGitU4SKYXKxGbqjGkrH.webp',
      category: 'infra',
    },
    {
      id: 5,
      titleEs: "Losa Aligerada f'c 210 kg/cm² – Villa María",
      titleEn: "Lightweight Slab f'c 210 kg/cm² – Villa Maria",
      location: 'Villa María del Triunfo, Lima',
      volume: '2,500 m³',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vaciado-Unimaxcorp-002-lCojy5wXyOYj9Fl3zxtJ0S1EpUHHYT.webp',
      category: 'building',
    },
    {
      id: 6,
      titleEs: 'Pavimento Rígido – San Juan de Lurigancho',
      titleEn: 'Rigid Pavement – San Juan de Lurigancho',
      location: 'San Juan de Lurigancho, Lima',
      volume: '12,500 m³',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pavimento-san-juan-de-lurigancho-Unimaxcorp-aFKG9rAwfcI1r2anhItf2YY1uzZyVb.webp',
      category: 'pavements',
    },
  ]

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <div className="bg-background grain py-16 lg:py-24 relative overflow-hidden">
      
      {/* Category Filter Tabs */}
      <section className="section-container mb-12">
        <div className="flex flex-wrap justify-center gap-2 border-b border-border/40 pb-6 max-w-4xl mx-auto">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-5 py-2.5 rounded-lg text-xs md:text-sm font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'text-white'
                    : 'text-text-secondary hover:text-text-primary dark:hover:text-white hover:bg-surface/35'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabGlow"
                    className="absolute inset-0 bg-primary rounded-lg z-0"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{t(cat.labelKey)}</span>
              </button>
            )
          })}
        </div>
      </section>

      {/* Grid of Projects */}
      <section className="section-container mb-24">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const displayTitle = language === 'es' ? project.titleEs : project.titleEn

              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative h-[380px] rounded-xl overflow-hidden border border-border/80 hover:border-primary transition-colors duration-300 bg-surface shadow-md flex flex-col justify-end"
                >
                  {/* Image */}
                  <Image
                    src={project.image}
                    alt={displayTitle}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
                  />
                  
                  {/* Protection Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/35 to-transparent opacity-85" />

                  {/* Category Tag on Top-Right */}
                  <span className="absolute top-4 right-4 text-[10px] font-extrabold text-white/95 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded border border-white/10 shrink-0 uppercase tracking-widest select-none z-10">
                    {t(`projects.filter.${project.category}`)}
                  </span>

                  {/* Content Container */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <div className="flex flex-col gap-2">
                      {/* Metric/Volume badge */}
                      <div className="flex items-center gap-1.5 self-start">
                        <span className="text-[10px] font-extrabold text-primary bg-primary/10 border border-primary/20 backdrop-blur-md px-2 py-0.5 rounded tracking-wide uppercase">
                          {project.volume}
                        </span>
                      </div>
                      
                      {/* Title & Location */}
                      <div>
                        <p className="text-base lg:text-lg font-bold text-white leading-snug">
                          {displayTitle}
                        </p>
                        <p className="text-xs text-white/70 mt-1">
                          {project.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Direct Call-to-Action Section */}
      <section className="section-container relative z-10" id="contacto-directo">
        <div className="relative bg-primary text-white rounded-2xl overflow-hidden p-8 md:p-12 lg:p-16 select-none shadow-2xl">
          {/* Subtle warmth background light */}
          <div 
            className="absolute inset-0 pointer-events-none" 
            style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.12), transparent 45%)' }}
          />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            <div className="max-w-2xl text-left">
              <span className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] text-white/70 uppercase block mb-3">
                • {language === 'es' ? 'ASESORÍA SIN COSTO' : 'FREE ADVISORY'}
              </span>
              <p className="text-2xl md:text-4xl font-display font-extrabold text-white tracking-wide uppercase leading-tight">
                {t('projects.cta.title')}
              </p>
              <p className="mt-3 text-xs md:text-sm text-white/90 leading-relaxed font-light">
                {t('projects.cta.desc')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3.5 w-full lg:w-auto shrink-0">
              <a
                href="https://wa.me/51959345117"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 bg-white text-primary px-8 h-12 rounded-md text-[11px] font-extrabold tracking-widest uppercase hover:bg-black hover:text-white transition-all duration-200 active:scale-95 shadow-md flex-1 sm:flex-none text-center"
              >
                <MessageSquare size={13} className="shrink-0" />
                {t('projects.cta.whatsapp')}
                <ArrowRight size={13} className="group-hover:translate-x-1.5 transition-transform shrink-0" />
              </a>
              
              <Link
                href="/#contacto"
                className="inline-flex items-center justify-center gap-2.5 h-12 px-6 md:px-8 text-[11px] font-extrabold tracking-widest uppercase bg-transparent text-white border-2 border-white/40 hover:bg-white/10 hover:border-white transition-all duration-200 rounded-md active:scale-95 flex-1 sm:flex-none text-center"
              >
                {t('projects.cta.quote')}
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
