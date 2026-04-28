'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FileText, FlaskConical, Truck, HardHat } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: FileText,
    title: 'Solicitud',
    description: 'Formulario o llamada, confirmación en 10 min',
  },
  {
    number: '02',
    icon: FlaskConical,
    title: 'Diseño',
    description: 'Laboratorio valida mezcla según especificaciones',
  },
  {
    number: '03',
    icon: Truck,
    title: 'Despacho',
    description: 'Mixer sale con GPS, remisión digital en tiempo real',
  },
  {
    number: '04',
    icon: HardHat,
    title: 'Vaciado',
    description: 'Operador y bomba en sitio, soporte técnico incluido',
  },
]

export function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section className="relative py-24 lg:py-32 bg-[var(--surface)] grain">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="text-[11px] font-medium tracking-[0.14em] uppercase text-[var(--red-600)]">
            • NUESTRO PROCESO
          </span>
          <h2 className="mt-3 text-3xl lg:text-[40px] font-bold leading-[1.1] tracking-[-0.02em] text-white text-balance">
            Del pedido a tu obra en menos de 90 minutos.
          </h2>
        </motion.div>

        {/* Timeline */}
        <div ref={containerRef} className="relative">
          {/* Connector Line - Desktop */}
          <div className="hidden lg:block absolute top-[60px] left-[12.5%] right-[12.5%] h-[1px] bg-[var(--border)]">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="h-full bg-[var(--red-600)] origin-left"
            />
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex flex-col items-center text-center px-4"
              >
                {/* Number */}
                <span className="font-display text-6xl lg:text-7xl text-[var(--red-600)]">
                  {step.number}
                </span>

                {/* Icon Circle */}
                <div className="mt-4 w-14 h-14 rounded-full bg-[var(--elevated)] border-2 border-[var(--red-600)] flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="mt-6 text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-base leading-[1.65] text-[var(--text-muted)] max-w-[240px]">
                  {step.description}
                </p>

                {/* Connector Arrow - Mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden mt-6 w-[1px] h-8 bg-[var(--red-600)]" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
