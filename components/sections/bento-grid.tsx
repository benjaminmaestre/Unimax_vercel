'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Satellite, Truck, Play } from 'lucide-react'
import Link from 'next/link'

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.08,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

export function BentoGridSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-[var(--background)] grain" id="productos">
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
            • NUESTRAS SOLUCIONES
          </span>
          <h2 className="mt-3 text-3xl lg:text-[40px] font-bold leading-[1.1] tracking-[-0.02em] text-white text-balance">
            Todo lo que tu proyecto necesita, en un solo aliado.
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-3">
          {/* Row 1 */}
          {/* Card 1 - Concreto Premezclado (Large - 3 cols) */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="lg:col-span-3 group relative overflow-hidden rounded-xl min-h-[480px] border border-[var(--border-subtle)] hover:border-[var(--red-primary)] transition-colors duration-300"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.04]"
              style={{
                backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vaciado-Unimaxcorp-002-lCojy5wXyOYj9Fl3zxtJ0S1EpUHHYT.webp')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--black-950)] via-[var(--black-950)]/60 to-transparent" />
            <div className="relative h-full flex flex-col justify-end p-6 lg:p-8">
              <span className="text-[11px] font-medium tracking-[0.14em] uppercase text-[var(--red-primary)]">
                PRODUCTOS
              </span>
              <h3 className="mt-2 text-2xl lg:text-[28px] font-semibold leading-[1.2] text-white">
                Concreto Premezclado
              </h3>
              <ul className="mt-4 space-y-2">
                {["f'c 175 / 210 / 280 / 350 kg/cm²", "Concreto de alta resistencia", "Diseño personalizado NTP", "Concreto autocompactante"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-base text-[var(--text-secondary)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--red-primary)]" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="#contacto"
                className="group/link mt-6 inline-flex items-center gap-2 text-[var(--white-300)] hover:text-white transition-colors"
              >
                <span className="text-sm font-medium">Ver todos los productos</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover/link:translate-x-1.5" />
              </Link>
            </div>
          </motion.div>

          {/* Card 2 - Logística Inteligente (Small - 2 cols) */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="lg:col-span-2 group relative overflow-hidden rounded-xl min-h-[480px] bg-[var(--elevated)] border border-[var(--border-subtle)] hover:border-[var(--red-primary)] transition-colors duration-300"
          >
            <div className="h-full flex flex-col p-6 lg:p-8">
              {/* Icon */}
              <div className="w-20 h-20 rounded-xl bg-[var(--red-ghost)] flex items-center justify-center">
                <Satellite className="w-10 h-10 text-[var(--red-primary)]" />
              </div>
              
              <span className="mt-6 text-[11px] font-medium tracking-[0.14em] uppercase text-[var(--red-primary)]">
                TECNOLOGÍA
              </span>
              <h3 className="mt-2 text-2xl lg:text-[28px] font-semibold leading-[1.2] text-white">
                Logística Inteligente
              </h3>
              <ul className="mt-4 space-y-2 flex-1">
                {["Rastreo GPS en tiempo real", "Control de calidad en laboratorio propio", "Soporte técnico especializado", "Programación de vaciados continuos"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-base text-[var(--text-secondary)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--red-primary)]" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="#contacto"
                className="group/link mt-6 inline-flex items-center gap-2 text-[var(--white-300)] hover:text-white transition-colors"
              >
                <span className="text-sm font-medium">Ver servicios</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover/link:translate-x-1.5" />
              </Link>
            </div>
          </motion.div>

          {/* Row 2 */}
          {/* Card 3 - Maquinaria y Bombeo (Small - 2 cols) */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="lg:col-span-2 group relative overflow-hidden rounded-xl min-h-[480px] bg-[var(--elevated)] border border-[var(--border-subtle)] hover:border-[var(--red-primary)] transition-colors duration-300"
            id="servicios"
          >
            <div className="h-full flex flex-col p-6 lg:p-8">
              {/* Icon */}
              <div className="w-20 h-20 rounded-xl bg-[var(--red-ghost)] flex items-center justify-center">
                <Truck className="w-10 h-10 text-[var(--red-primary)]" />
              </div>
              
              <span className="mt-6 text-[11px] font-medium tracking-[0.14em] uppercase text-[var(--red-primary)]">
                SERVICIOS
              </span>
              <h3 className="mt-2 text-2xl lg:text-[28px] font-semibold leading-[1.2] text-white">
                Bombeo y Maquinaria
              </h3>
              <ul className="mt-4 space-y-2 flex-1">
                {["Boom pump hasta 58m de alcance", "Bombas estacionarias de alta presión", "Grúas torre y móviles", "Operadores certificados"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-base text-[var(--text-secondary)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--red-primary)]" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="#contacto"
                className="group/link mt-6 inline-flex items-center gap-2 text-[var(--white-300)] hover:text-white transition-colors"
              >
                <span className="text-sm font-medium">Ver maquinaria</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover/link:translate-x-1.5" />
              </Link>
            </div>
          </motion.div>

          {/* Card 4 - Video Card (Large - 3 cols) */}
          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="lg:col-span-3 group relative overflow-hidden rounded-xl min-h-[480px] border border-[var(--border-subtle)] hover:border-[var(--red-primary)] transition-colors duration-300"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.04]"
              style={{
                backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/plnata-dosificadora-1-nBJ3KM7b2wgHOjE006GXWkj4cKEZ5k.webp')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--black-950)] via-[var(--black-950)]/40 to-transparent" />
            
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-[var(--red-primary)]/90 flex items-center justify-center hover:bg-[var(--red-primary)] hover:scale-110 transition-all duration-300 cursor-pointer">
                <Play className="w-8 h-8 text-white ml-1" fill="white" />
              </div>
            </div>

            <div className="relative h-full flex flex-col justify-end p-6 lg:p-8">
              <p className="text-base text-[var(--text-secondary)]">Nuestras plantas dosificadoras en operación</p>
              <div className="mt-3 inline-flex items-center gap-2 glass px-4 py-2 rounded-lg border border-[var(--border-subtle)] w-fit">
                <span className="w-2 h-2 rounded-full bg-[var(--red-primary)] animate-pulse" />
                <span className="text-[11px] font-medium tracking-[0.14em] uppercase text-white">
                  DESPACHO CONTINUO 24/7
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
