'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const stats = [
  { value: '+85.000', unit: 'm³/mes', label: 'DESPACHO' },
  { value: '25', unit: 'años', label: 'TRAYECTORIA' },
  { value: '4', unit: 'plantas', label: 'EN LIMA' },
  { value: '<60', unit: 'min', label: 'ENTREGA' },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden grain">
      {/* Background Image with Overlays - Concrete Plant Image */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1587582423116-ec07293f0395?q=80&w=2070&auto=format&fit=crop')`,
          }}
        />
        {/* Triple gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--black-950)] via-[var(--black-950)]/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--black-950)] via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[var(--black-950)]/50" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 section-container pt-[180px] pb-[180px] min-h-screen flex flex-col justify-between">
        <div className="grid lg:grid-cols-[65%_35%] gap-8">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col"
          >
            {/* Pre-label */}
            <span className="text-[11px] font-medium tracking-[0.14em] uppercase text-[var(--red-primary)] mb-3">
              • CONCRETO PREMEZCLADO · LIMA, PERÚ
            </span>

            {/* Display Headlines */}
            <h1 className="font-display">
              <span className="block text-[60px] sm:text-[80px] lg:text-[120px] leading-[0.92] tracking-[-0.02em] text-white">
                CONCRETO QUE
              </span>
              <span className="block text-[60px] sm:text-[80px] lg:text-[120px] leading-[0.92] tracking-[-0.02em] text-outline">
                CONSTRUYE.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-lg leading-[1.7] text-[var(--text-secondary)] max-w-[520px]">
              Concreto premezclado de alta resistencia, bombeo especializado y maquinaria pesada.
              Logística certificada para obras que exigen precisión y puntualidad en todo el Perú.
            </p>

            {/* CTA Stack */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="#contacto"
                className="group inline-flex items-center justify-center h-[52px] px-7 text-[13px] font-medium tracking-[0.12em] uppercase bg-[var(--red-primary)] text-white rounded-lg hover:bg-[var(--red-dark)] hover:glow-red-intense transition-all duration-150 ease-snappy hover:scale-[1.02]"
              >
                Solicitar Cotización
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-150 group-hover:translate-x-1.5" />
              </Link>
              <Link
                href="#soluciones"
                className="inline-flex items-center justify-center h-[52px] px-7 text-[13px] font-medium tracking-[0.12em] uppercase bg-transparent text-white border border-[var(--white-300)]/50 rounded-lg hover:bg-[var(--red-ghost)] hover:border-[var(--red-primary)] transition-all duration-200"
              >
                Ver Servicios
              </Link>
            </div>

            {/* Trust Strip */}
            <div className="mt-12 flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] font-medium tracking-[0.14em] uppercase text-[var(--text-muted)]">
              <span>ASTM C94</span>
              <span>·</span>
              <span>NTP 339.114</span>
              <span>·</span>
              <span>ISO 9001</span>
              <span>·</span>
              <span>+1.200 proyectos entregados</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Stats Strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-0 left-0 right-0 glass border-t border-[var(--border-subtle)]"
      >
        <div className="section-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-[var(--border-subtle)]">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="py-5 lg:py-6 px-4 lg:px-8 text-center lg:text-left"
              >
                <div className="flex items-baseline justify-center lg:justify-start gap-1">
                  <span className="font-display text-2xl lg:text-4xl text-white">
                    {stat.value}
                  </span>
                  <span className="text-base lg:text-lg font-semibold text-[var(--red-primary)]">
                    {stat.unit}
                  </span>
                </div>
                <p className="mt-1 text-[11px] font-medium tracking-[0.14em] uppercase text-[var(--text-muted)]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
