'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const fleet = [
  {
    id: 1,
    model: 'SHACMAN F3000',
    type: 'Mixer 8m³',
    specs: ['Capacidad 8m³', 'Tambor reforzado', 'GPS integrado'],
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mixer-uni-cel-3rpW8pR89TmTVxJcYlKsSHd7Ue9v3R.jpg',
  },
  {
    id: 2,
    model: 'MIXER UNIMAXCORP',
    type: 'Mixer 10m³',
    specs: ['Capacidad 10m³', 'Alto rendimiento', 'Certificado ISO'],
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/UNIMAX-CORP-MIXER-wO5vunC8dngzES8xgWilWlJAtfmcZM.jpg',
  },
  {
    id: 3,
    model: 'BOOM PUMP CHANGFA',
    type: 'Boom Pump 47m',
    specs: ['Alcance 47m', '5 secciones', 'Para edificios'],
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/obra-por-civil-Puente-piedra-Unimaxcorp-SEgI9lVQ2mXkeHi3EHHH68UkJ8uWgO.webp',
  },
  {
    id: 4,
    model: 'BOOM PUMP VILLA',
    type: 'Boom Pump 58m',
    specs: ['Alcance 58m', 'Alta presión', 'Mega proyectos'],
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/obra-Cieneguilla-Unimaxcorp-VaH4EoUIyk4zxpVdU3aC9APxQZNMZ0.webp',
  },
  {
    id: 5,
    model: 'JCB 3CX',
    type: 'Retroexcavadora',
    specs: ['Multi-propósito', 'Alta potencia', 'Versatilidad'],
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/retroexcavadora-1-TwoQ7Z6p3vvBlKmE2UPskhy2BelJda.webp',
  },
  {
    id: 6,
    model: 'LIUGONG 856H',
    type: 'Cargador Frontal',
    specs: ['Alta capacidad', 'Eficiencia', 'Multi-terreno'],
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CARGADOR-FRON-Unimaxcorp-xVu9rUucZK75TuS8leMz3hDUshVIWy.webp',
  },
  {
    id: 7,
    model: 'HYUNDAI FLEET',
    type: 'Excavadoras',
    specs: ['Múltiples tamaños', 'Alta productividad', 'Terrenos difíciles'],
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/division-de-logistica-unimaxcorp-XKfXMZf4aAF0cH3OUTpMmDe2KIOQ3m.webp',
  },
]

export function FleetGallerySection() {
  return (
    <section className="relative py-24 lg:py-32 bg-[var(--background)] grain overflow-hidden">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <span className="text-[11px] font-medium tracking-[0.14em] uppercase text-[var(--red-primary)]">
            • NUESTRA FLOTA
          </span>
          <h2 className="mt-3 text-3xl lg:text-[40px] font-bold leading-[1.1] tracking-[-0.02em] text-white text-balance">
            Equipos de última generación para cualquier escala.
          </h2>
          <p className="mt-4 text-lg text-[var(--text-muted)] flex items-center gap-2">
            Desliza para explorar
            <ArrowRight className="w-4 h-4" />
          </p>
        </motion.div>
      </div>

      {/* Horizontal Scroll Gallery */}
      <div className="relative">
        <div className="flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory pl-5 md:pl-20 pr-5">
          {fleet.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex-shrink-0 w-[320px] lg:w-[360px] snap-start"
            >
              <div className="group relative h-[480px] rounded-xl overflow-hidden border border-[var(--border-subtle)] hover:border-[var(--red-primary)] transition-colors duration-300">
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.model}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--black-950)] via-[var(--black-950)]/50 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1.5 rounded bg-[var(--red-primary)] text-[11px] font-medium tracking-[0.14em] uppercase text-white">
                    {item.type}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-semibold text-white">
                    {item.model}
                  </h3>
                  
                  {/* Specs */}
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.specs.map((spec) => (
                      <span
                        key={spec}
                        className="text-sm text-[var(--text-secondary)]"
                      >
                        {spec} ·
                      </span>
                    ))}
                  </div>

                  {/* CTA - Shows on hover */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <Link
                      href="#contacto"
                      className="inline-flex items-center justify-center h-10 px-5 text-[13px] font-medium tracking-[0.12em] uppercase bg-[var(--red-primary)] text-white rounded-lg hover:bg-[var(--red-dark)] transition-colors"
                    >
                      Solicitar
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Final CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex-shrink-0 w-[320px] lg:w-[360px] snap-start"
          >
            <div className="h-[480px] rounded-xl overflow-hidden bg-[var(--elevated)] border border-[var(--border-subtle)] flex flex-col items-center justify-center text-center p-8">
              <h3 className="text-2xl font-semibold text-white">
                Ver flota completa
              </h3>
              <p className="mt-3 text-base text-[var(--text-muted)]">
                Más de 80 equipos disponibles para tu proyecto en Lima y provincias
              </p>
              <Link
                href="#contacto"
                className="group mt-6 inline-flex items-center justify-center h-[52px] px-7 text-[13px] font-medium tracking-[0.12em] uppercase bg-[var(--red-primary)] text-white rounded-lg hover:bg-[var(--red-dark)] hover:glow-red-intense transition-all duration-150"
              >
                Cotizar Ahora
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-150 group-hover:translate-x-1.5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
