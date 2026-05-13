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
    <section className="relative h-screen min-h-[700px] overflow-hidden grain">
      {/* Background Image with Overlays - Cinematic Wide Angle */}
      <div className="absolute inset-0">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/hero-bg.png')`,
          }}
        />
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-linear-to-r from-(--black-950) via-(--black-950)/40 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-(--black-950) via-transparent to-(--black-950)/20" />
        <div className="absolute inset-0 bg-(--black-950)/30" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 section-container h-full flex flex-col justify-center">
        <div className="max-w-[1200px]">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col"
          >
            {/* Pre-label */}
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-[12px] font-bold tracking-[0.2em] uppercase text-(--red-primary) mb-6 flex items-center gap-3"
            >
              <span className="w-12 h-[2px] bg-(--red-primary)" />
              LÍDERES EN CONCRETO PREMEZCLADO · PERÚ
            </motion.span>

            {/* Monumental Headlines */}
            <h1 className="font-display">
              <span className="block text-[70px] sm:text-[100px] lg:text-[150px] leading-[0.85] tracking-[-0.04em] text-white drop-shadow-2xl">
                SOLUCIONES
              </span>
              <span className="block text-[70px] sm:text-[100px] lg:text-[150px] leading-[0.85] tracking-[-0.04em] text-outline drop-shadow-2xl">
                QUE TRASCIENDEN.
              </span>
            </h1>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="mt-8 text-xl lg:text-2xl leading-[1.6] text-(--text-secondary) max-w-[650px] font-light"
            >
              Potenciamos el desarrollo del país con concreto de alta resistencia y 
              logística de vanguardia. Más de 25 años construyendo el futuro del Perú.
            </motion.p>

            {/* CTA Stack */}
            <div className="mt-12 flex flex-col sm:flex-row gap-5">
              <Link
                href="#contacto"
                className="group relative inline-flex items-center justify-center h-[60px] px-10 text-[14px] font-bold tracking-[0.15em] uppercase bg-(--red-primary) text-white rounded-md overflow-hidden transition-all duration-300 hover:glow-red-intense"
              >
                <span className="relative z-10 flex items-center">
                  Cotizar Proyecto
                  <ArrowRight className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
                </span>
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
              <Link
                href="#soluciones"
                className="inline-flex items-center justify-center h-[60px] px-10 text-[14px] font-bold tracking-[0.15em] uppercase bg-transparent text-white border-2 border-white/20 rounded-md hover:bg-white/10 hover:border-white/40 transition-all duration-300"
              >
                Nuestros Servicios
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/40">SCROLL</span>
        <div className="w-px h-12 bg-linear-to-t from-(--red-primary) to-transparent relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-white"
          />
        </div>
      </motion.div>

      {/* Bottom Stats Strip - Condensed for better focus on Hero */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-0 left-0 right-0 glass-dark border-t border-white/10 hidden lg:block"
      >
        <div className="section-container">
          <div className="grid grid-cols-4 divide-x divide-white/10">
            {stats.map((stat, index) => (
              <div key={stat.label} className="py-8 px-8 flex flex-col justify-center">
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-4xl text-white tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-sm font-bold text-(--red-primary) uppercase tracking-tighter">
                    {stat.unit}
                  </span>
                </div>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/40 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

