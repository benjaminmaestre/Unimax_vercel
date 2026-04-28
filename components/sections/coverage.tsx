'use client'

import { motion } from 'framer-motion'
import { MapPin, ArrowRight, Search } from 'lucide-react'
import { useState } from 'react'

const plants = [
  {
    name: 'Planta Lima Norte',
    location: 'Puente Piedra',
    radius: 'Radio 35km',
    hours: 'Lun-Sab 5am-8pm',
  },
  {
    name: 'Planta Lima Este',
    location: 'Ate Vitarte',
    radius: 'Radio 30km',
    hours: 'Lun-Sab 5am-8pm',
  },
  {
    name: 'Planta Lima Sur',
    location: 'Villa El Salvador',
    radius: 'Radio 30km',
    hours: 'Lun-Sab 5am-8pm',
  },
  {
    name: 'Planta Callao',
    location: 'Ventanilla',
    radius: 'Radio 25km',
    hours: 'Lun-Sab 5am-7pm',
  },
]

export function CoverageSection() {
  const [searchValue, setSearchValue] = useState('')

  return (
    <section className="relative py-24 lg:py-32 bg-[var(--background)] grain" id="plantas">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="text-[11px] font-medium tracking-[0.14em] uppercase text-[var(--red-primary)]">
            • COBERTURA EN LIMA METROPOLITANA
          </span>
          <h2 className="mt-3 text-3xl lg:text-[40px] font-bold leading-[1.1] tracking-[-0.02em] text-white text-balance max-w-3xl mx-auto">
            4 plantas estratégicas para que el concreto llegue en su punto óptimo.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[55%_45%] gap-12 items-start">
          {/* Map Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[var(--black-900)] border border-[var(--border-subtle)]">
              {/* Map Background */}
              <div className="absolute inset-0 opacity-30">
                <svg viewBox="0 0 400 300" className="w-full h-full">
                  {/* Simplified map paths representing Lima region */}
                  <path
                    d="M50,150 Q100,50 200,80 Q300,110 350,150 Q300,250 200,280 Q100,260 50,150"
                    fill="none"
                    stroke="var(--white-400)"
                    strokeWidth="0.5"
                    opacity="0.3"
                  />
                  {/* Grid lines */}
                  {[...Array(10)].map((_, i) => (
                    <line
                      key={`h-${i}`}
                      x1="0"
                      y1={i * 30}
                      x2="400"
                      y2={i * 30}
                      stroke="var(--white-400)"
                      strokeWidth="0.2"
                      opacity="0.2"
                    />
                  ))}
                  {[...Array(14)].map((_, i) => (
                    <line
                      key={`v-${i}`}
                      x1={i * 30}
                      y1="0"
                      x2={i * 30}
                      y2="300"
                      stroke="var(--white-400)"
                      strokeWidth="0.2"
                      opacity="0.2"
                    />
                  ))}
                </svg>
              </div>

              {/* Plant Markers */}
              {[
                { x: '40%', y: '25%', name: 'Puente Piedra' },
                { x: '70%', y: '45%', name: 'Ate Vitarte' },
                { x: '45%', y: '75%', name: 'Villa El Salvador' },
                { x: '25%', y: '40%', name: 'Ventanilla' },
              ].map((plant, index) => (
                <motion.div
                  key={plant.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                  className="absolute"
                  style={{ left: plant.x, top: plant.y }}
                >
                  {/* Glow ring */}
                  <div className="absolute inset-0 w-16 h-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--red-primary)]/20 animate-ping" />
                  <div className="absolute inset-0 w-12 h-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--red-primary)]/30" />
                  {/* Pin */}
                  <div className="relative w-4 h-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--red-primary)] border-2 border-white" />
                  {/* Label */}
                  <span className="absolute top-4 left-1/2 -translate-x-1/2 text-xs font-medium text-white whitespace-nowrap">
                    {plant.name}
                  </span>
                </motion.div>
              ))}

              {/* Coverage Circles */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <circle cx="40%" cy="25%" r="50" fill="var(--red-primary)" fillOpacity="0.1" stroke="var(--red-primary)" strokeWidth="1" strokeOpacity="0.3" />
                <circle cx="70%" cy="45%" r="45" fill="var(--red-primary)" fillOpacity="0.1" stroke="var(--red-primary)" strokeWidth="1" strokeOpacity="0.3" />
                <circle cx="45%" cy="75%" r="45" fill="var(--red-primary)" fillOpacity="0.1" stroke="var(--red-primary)" strokeWidth="1" strokeOpacity="0.3" />
                <circle cx="25%" cy="40%" r="40" fill="var(--red-primary)" fillOpacity="0.1" stroke="var(--red-primary)" strokeWidth="1" strokeOpacity="0.3" />
              </svg>
            </div>
          </motion.div>

          {/* Plants List Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4"
          >
            {plants.map((plant, index) => (
              <motion.div
                key={plant.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-5 rounded-xl bg-[var(--elevated)] border border-[var(--border-subtle)] hover:border-[var(--red-primary)] transition-colors duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--red-ghost)] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[var(--red-primary)]" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white">
                      {plant.name}
                    </h4>
                    <p className="mt-1 text-base text-[var(--text-secondary)]">
                      {plant.location} · {plant.radius}
                    </p>
                    <p className="mt-1 text-sm text-[var(--text-muted)]">
                      {plant.hours}
                    </p>
                  </div>
                  <button className="group/link flex items-center gap-1 text-[var(--white-300)] hover:text-white transition-colors">
                    <span className="text-sm font-medium">Cómo llegar</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover/link:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            ))}

            {/* Search Input */}
            <div className="mt-6 flex gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--text-muted)]" />
                <input
                  type="text"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="Ingresa la dirección de tu obra"
                  className="w-full h-[52px] pl-12 pr-4 rounded-lg bg-[var(--elevated)] border border-[var(--border)] text-white placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--red-primary)] transition-colors"
                />
              </div>
              <button className="h-[52px] px-6 text-[13px] font-medium tracking-[0.12em] uppercase bg-[var(--red-primary)] text-white rounded-lg hover:bg-[var(--red-dark)] hover:glow-red-intense transition-all duration-150">
                Buscar
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
