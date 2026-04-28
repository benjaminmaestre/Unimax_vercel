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
            className="lg:pr-16 lg:border-r border-[var(--red-600)]"
          >
            {/* Quote Mark */}
            <span className="font-display text-[120px] leading-none text-[var(--red-600)] opacity-50">
              &ldquo;
            </span>

            {/* Quote Text */}
            <blockquote className="-mt-16 text-2xl lg:text-[32px] font-bold leading-[1.3] tracking-[-0.01em] text-white">
              Necesitábamos un aliado que garantizara la resistencia estructural 
              y el vaciado continuo. UNIMAXCORP demostró tener la logística 
              y la maquinaria para lograrlo sin retrasos.
            </blockquote>

            {/* Divider */}
            <div className="mt-8 w-12 h-[1px] bg-[var(--red-600)]" />

            {/* Author */}
            <div className="mt-6 flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-[var(--elevated)] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
                  alt="Carlos Restrepo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">
                  Carlos Restrepo
                </h4>
                <p className="text-base text-[var(--text-muted)]">
                  Director de Obra, Constructora Horizonte
                </p>
              </div>
            </div>

            {/* Project Reference */}
            <p className="mt-6 text-[11px] font-medium tracking-[0.14em] uppercase text-[var(--text-muted)]">
              Proyecto Bello Centro, 2024
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
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
                alt="Proyecto Bello Centro"
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
                  12.000 m³ vaciados · 18 meses
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
