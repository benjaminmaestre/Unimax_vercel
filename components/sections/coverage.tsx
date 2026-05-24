'use client'

import { motion } from 'framer-motion'
import { MapPin, ArrowRight, Search } from 'lucide-react'
import { useState } from 'react'
import { useLanguage } from '@/components/language-provider'

export function CoverageSection() {
  const { language, t } = useLanguage()
  const [searchValue, setSearchValue] = useState('')

  const translateRadius = (radius: string, lang: 'es' | 'en') => {
    return lang === 'es' ? radius : radius.replace('Radio', 'Radius')
  }

  const translateHours = (hours: string, lang: 'es' | 'en') => {
    return lang === 'es' ? hours : hours.replace('Lun-Sab', 'Mon-Sat')
  }

  const plants = [
    {
      name: language === 'es' ? 'Planta Lima Norte' : 'North Lima Plant',
      location: 'Puente Piedra',
      radius: 'Radio 35km',
      hours: 'Lun-Sab 5am-8pm',
      coords: { x: '40%', y: '25%' }
    },
    {
      name: language === 'es' ? 'Planta Lima Este' : 'East Lima Plant',
      location: 'Ate Vitarte',
      radius: 'Radio 30km',
      hours: 'Lun-Sab 5am-8pm',
      coords: { x: '70%', y: '45%' }
    },
    {
      name: language === 'es' ? 'Planta Lima Sur' : 'South Lima Plant',
      location: 'Villa El Salvador',
      radius: 'Radio 30km',
      hours: 'Lun-Sab 5am-8pm',
      coords: { x: '45%', y: '75%' }
    },
    {
      name: language === 'es' ? 'Planta Callao' : 'Callao Plant',
      location: 'Ventanilla',
      radius: 'Radio 25km',
      hours: 'Lun-Sab 5am-7pm',
      coords: { x: '25%', y: '40%' }
    },
  ]

  return (
    <section className="relative py-12 lg:py-32 bg-background grain" id="plantas">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10 lg:mb-16"
        >
          <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-primary">
            {t('coverage.prelabel')}
          </span>
          <h2 className="mt-3 text-2xl lg:text-3xl font-bold leading-[1.15] tracking-tight text-text-primary text-balance max-w-3xl mx-auto">
            {t('coverage.title')}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[55%_45%] gap-10 items-start">
          {/* Map Side (Forced dark/technical blueprint look for premium contrast) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full"
          >
            <div className="relative aspect-4/3 rounded-xl overflow-hidden bg-black/95 border border-border/80 shadow-md">
              {/* Map Background */}
              <div className="absolute inset-0 opacity-20">
                <svg viewBox="0 0 400 300" className="w-full h-full">
                  <path
                    d="M50,150 Q100,50 200,80 Q300,110 350,150 Q300,250 200,280 Q100,260 50,150"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="0.5"
                    opacity="0.3"
                  />
                  {[...Array(10)].map((_, i) => (
                    <line
                      key={`h-${i}`}
                      x1="0"
                      y1={i * 30}
                      x2="400"
                      y2={i * 30}
                      stroke="#ffffff"
                      strokeWidth="0.2"
                      opacity="0.15"
                    />
                  ))}
                  {[...Array(14)].map((_, i) => (
                    <line
                      key={`v-${i}`}
                      x1={i * 30}
                      y1="0"
                      x2={i * 30}
                      y2="300"
                      stroke="#ffffff"
                      strokeWidth="0.2"
                      opacity="0.15"
                    />
                  ))}
                </svg>
              </div>

              {/* Plant Markers */}
              {plants.map((plant, index) => (
                <motion.div
                  key={plant.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="absolute"
                  style={{ left: plant.coords.x, top: plant.coords.y }}
                >
                  <div className="absolute inset-0 w-12 h-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/25 animate-ping" />
                  <div className="absolute inset-0 w-8 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/35" />
                  <div className="relative w-3.5 h-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary border-2 border-white" />
                  <span className="absolute top-4 left-1/2 -translate-x-1/2 text-[9px] font-bold text-white whitespace-nowrap bg-black/60 backdrop-blur-md px-1.5 py-0.5 rounded border border-white/5 uppercase tracking-wider">
                    {plant.location}
                  </span>
                </motion.div>
              ))}

              {/* Coverage Circles */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <circle cx="40%" cy="25%" r="48" fill="#C13D3A" fillOpacity="0.08" stroke="#C13D3A" strokeWidth="0.8" strokeOpacity="0.25" />
                <circle cx="70%" cy="45%" r="44" fill="#C13D3A" fillOpacity="0.08" stroke="#C13D3A" strokeWidth="0.8" strokeOpacity="0.25" />
                <circle cx="45%" cy="75%" r="44" fill="#C13D3A" fillOpacity="0.08" stroke="#C13D3A" strokeWidth="0.8" strokeOpacity="0.25" />
                <circle cx="25%" cy="40%" r="38" fill="#C13D3A" fillOpacity="0.08" stroke="#C13D3A" strokeWidth="0.8" strokeOpacity="0.25" />
              </svg>
            </div>
          </motion.div>

          {/* Plants List Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-3.5 w-full"
          >
            {plants.map((plant, index) => (
              <motion.div
                key={plant.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group p-4 rounded-lg bg-surface border border-border/80 hover:border-primary transition-all duration-300 shadow-xs"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  {/* Left block: Icon + Content */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base font-bold text-text-primary leading-tight">
                        {plant.name}
                      </h4>
                      <p className="mt-1 text-sm text-text-secondary">
                        {plant.location} · {translateRadius(plant.radius, language)}
                      </p>
                      <p className="mt-0.5 text-xs text-text-muted">
                        {translateHours(plant.hours, language)}
                      </p>
                    </div>
                  </div>
                  {/* Right block: Action Button (aligned under the text block on mobile with pl-14, side-by-side on sm+) */}
                  <button className="group/link flex items-center gap-1 text-text-muted hover:text-primary transition-colors shrink-0 pl-14 sm:pl-0 self-start">
                    <span className="text-xs font-bold tracking-wider uppercase">{language === 'es' ? 'Cómo llegar' : 'Get Directions'}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover/link:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            ))}

            {/* Address Search Bar */}
            <div className="mt-6 flex gap-3 w-full">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                <input
                  type="text"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder={language === 'es' ? 'Ingresa la dirección de tu obra' : 'Enter your job site address'}
                  className="w-full h-12 pl-11 pr-4 rounded-md bg-surface border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors text-sm"
                />
              </div>
              <button className="h-12 px-6 text-xs font-bold tracking-widest uppercase bg-primary hover:bg-cta-hover text-white rounded-md transition-all border border-primary hover:border-cta-hover active:scale-95 shadow-sm">
                {language === 'es' ? 'Buscar' : 'Search'}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
