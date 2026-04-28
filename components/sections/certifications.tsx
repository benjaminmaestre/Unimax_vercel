'use client'

import { motion } from 'framer-motion'

const certifications = [
  { name: 'ASTM C94', description: 'Ready-Mixed Concrete Standard' },
  { name: 'NTC 321', description: 'Norma Técnica Colombiana' },
  { name: 'ISO 9001:2015', description: 'Quality Management' },
  { name: 'ICONTEC', description: 'Certificación Nacional' },
  { name: 'SENA', description: 'Operadores Certificados' },
  { name: 'SGC', description: 'Sistema de Gestión Colombia' },
]

export function CertificationsSection() {
  return (
    <section className="relative py-10 lg:py-0 bg-[var(--surface)] border-y border-[var(--border-subtle)] grain">
      <div className="section-container">
        {/* Pre-label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-[11px] font-medium tracking-[0.14em] uppercase text-[var(--red-600)] pt-8 lg:pt-10"
        >
          • AVALADOS POR
        </motion.p>

        {/* Certifications Grid */}
        <div className="mt-6 pb-8 lg:pb-10 flex flex-wrap items-center justify-center gap-6 lg:gap-12">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative flex items-center justify-center px-6 py-4 rounded-lg bg-[var(--elevated)] border border-[var(--border-subtle)] hover:border-[var(--red-600)] transition-colors duration-300 min-w-[140px]"
            >
              <span className="text-sm font-semibold text-white tracking-wide">
                {cert.name}
              </span>
              
              {/* Tooltip */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                <div className="glass px-3 py-1.5 rounded text-xs text-white whitespace-nowrap border border-[var(--border-subtle)]">
                  {cert.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
