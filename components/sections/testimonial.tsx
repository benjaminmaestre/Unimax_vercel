'use client'

import { motion } from 'framer-motion'

export function TestimonialSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-[var(--background)] grain overflow-hidden">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-0 items-center">
          {/* Left Side - Quote */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:pr-16 lg:border-r border-[var(--red-primary)]"
          >
            {/* Quote Mark */}
            <span className="font-display text-[120px] leading-none text-[var(--red-primary)] opacity-50">
              &ldquo;
            </span>

            {/* Quote Text */}
            <blockquote className="-mt-16 text-2xl lg:text-[32px] font-bold leading-[1.3] tracking-[-0.01em] text-white">
              Necesitábamos un proveedor que garantizara la resistencia estructural 
              y el vaciado continuo en altura. UNIMAXCORP demostró tener la capacidad 
              técnica y logística para cumplir sin retrasos.
            </blockquote>

            {/* Divider */}
            <div className="mt-8 w-12 h-[1px] bg-[var(--red-primary)]" />

            {/* Author */}
            <div className="mt-6 flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-[var(--elevated)] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2187&auto=format&fit=crop"
                  alt="Ing. Roberto Campos"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">
                  Ing. Roberto Campos
                </h4>
                <p className="text-base text-[var(--text-muted)]">
                  Gerente de Proyectos, Constructora Los Andes
                </p>
              </div>
            </div>

            {/* Project Reference */}
            <p className="mt-6 text-[11px] font-medium tracking-[0.14em] uppercase text-[var(--text-muted)]">
              Pavimentación San Juan de Lurigancho, Lima 2025
            </p>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:pl-16"
          >
            <div className="relative rounded-xl overflow-hidden h-[400px] lg:h-[520px]">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pavimento-san-juan-de-lurigancho-Unimaxcorp-aFKG9rAwfcI1r2anhItf2YY1uzZyVb.webp"
                alt="Pavimentación San Juan de Lurigancho"
                className="w-full h-full object-cover"
              />
              
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute bottom-4 left-4 glass rounded-lg px-4 py-3 border border-[var(--border-subtle)]"
              >
                <span className="text-sm font-medium text-white">
                  12.500 m³ vaciados · 8 meses
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
