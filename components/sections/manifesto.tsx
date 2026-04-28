'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export function ManifestoSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-[var(--background)] grain" id="soluciones">
      <div className="section-container">
        <div className="grid lg:grid-cols-[55%_45%] gap-12 lg:gap-20 items-center">
          {/* Image Side - Mixer Truck Fleet */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-xl aspect-[16/10]">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2076&auto=format&fit=crop"
                alt="Flota de camiones mixer UNIMA Corp"
                className="w-full h-full object-cover"
              />
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute bottom-4 right-4 glass rounded-lg px-4 py-3 flex items-center gap-2 border border-[var(--border-subtle)]"
              >
                <CheckCircle className="w-5 h-5 text-[var(--red-primary)]" />
                <span className="text-sm font-medium text-white">Flota certificada ISO 9001</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:pl-8"
          >
            {/* Pre-label */}
            <span className="text-[11px] font-medium tracking-[0.14em] uppercase text-[var(--red-primary)]">
              • NUESTRA EXPERIENCIA
            </span>

            {/* Headline */}
            <h2 className="mt-3 text-3xl lg:text-[40px] font-bold leading-[1.1] tracking-[-0.02em] text-white text-balance">
              Precisión en cada metro cúbico. Compromiso con cada proyecto.
            </h2>

            {/* Description */}
            <p className="mt-6 text-lg leading-[1.7] text-[var(--text-secondary)]">
              UNIMA Corp es líder en soluciones de concreto premezclado y alquiler de 
              maquinaria pesada en Lima y todo el Perú. Con más de 25 años de experiencia, 
              ofrecemos productos de alta resistencia respaldados por tecnología de punta 
              y un equipo técnico altamente capacitado.
            </p>

            {/* Divider */}
            <div className="mt-8 w-12 h-[1px] bg-[var(--red-primary)]" />

            {/* Secondary Text */}
            <p className="mt-6 text-base leading-[1.65] text-[var(--text-muted)]">
              Operamos bajo normas ASTM C94, NTP 339.114 y estándares internacionales. 
              Cada despacho incluye diseño de mezcla personalizado, certificación técnica 
              y soporte especializado en obra.
            </p>

            {/* CTA */}
            <Link
              href="#contacto"
              className="group mt-8 inline-flex items-center justify-center h-[52px] px-7 text-[13px] font-medium tracking-[0.12em] uppercase bg-transparent text-white border border-[var(--white-300)]/50 rounded-lg hover:bg-[var(--red-ghost)] hover:border-[var(--red-primary)] transition-all duration-200"
            >
              Conocer la empresa
              <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-150 group-hover:translate-x-1.5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
