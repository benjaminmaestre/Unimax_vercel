'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/components/language-provider'

export function TestimonialSection() {
  const { language } = useLanguage()

  // Localized dictionary for the testimonial section
  const t = {
    es: {
      prelabel: '• CLIENTES SATISFECHOS',
      title: 'La voz de los que construyen el país.',
      quote: 'Necesitábamos un proveedor que garantizara la resistencia estructural y el vaciado continuo en altura. UNIMAX Corp demostró tener la capacidad técnica y logística para cumplir sin retrasos.',
      author: 'Ing. Roberto Campos',
      role: 'Gerente de Proyectos, Constructora Los Andes',
      ref: 'Pavimentación San Juan de Lurigancho, Lima 2025',
      badge: '12,500 m³ vaciados · 8 meses',
    },
    en: {
      prelabel: '• SATISFIED CLIENTS',
      title: 'The voice of those who build the country.',
      quote: 'We needed a supplier that guaranteed structural strength and continuous high-rise pouring. UNIMAX Corp proved to have the technical and logistical capacity to deliver without delays.',
      author: 'Eng. Roberto Campos',
      role: 'Project Manager, Constructora Los Andes',
      ref: 'SJL Paving Project, Lima 2025',
      badge: '12,500 m³ poured · 8 months',
    }
  }[language]

  return (
    <section className="relative py-12 lg:py-32 bg-background grain overflow-hidden">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-0 items-center">
          {/* Left Side - Quote */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:pr-16 lg:border-r border-primary"
          >
            {/* Quote Mark */}
            <span className="font-display text-[90px] leading-none text-primary opacity-45 select-none block">
              &ldquo;
            </span>

            {/* Quote Text */}
            <blockquote className="-mt-10 text-xl lg:text-[28px] font-bold leading-normal tracking-tight text-text-primary">
              {t.quote}
            </blockquote>

            {/* Divider */}
            <div className="mt-6 w-12 h-0.5 bg-primary" />

            {/* Author */}
            <div className="mt-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-elevated overflow-hidden shadow-xs shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2187&auto=format&fit=crop"
                  alt={t.author}
                  className="w-full h-full object-cover select-none"
                />
              </div>
              <div>
                <h4 className="text-base lg:text-lg font-bold text-text-primary leading-tight">
                  {t.author}
                </h4>
                <p className="text-xs lg:text-sm text-text-muted mt-0.5">
                  {t.role}
                </p>
              </div>
            </div>

            {/* Project Reference */}
            <p className="mt-6 text-[10px] font-bold tracking-[0.15em] uppercase text-text-muted">
              {t.ref}
            </p>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:pl-16"
          >
            <div className="relative rounded-xl overflow-hidden h-[300px] lg:h-[480px] shadow-md">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pavimento-san-juan-de-lurigancho-Unimaxcorp-aFKG9rAwfcI1r2anhItf2YY1uzZyVb.webp"
                alt="Pavimentación San Juan de Lurigancho"
                className="w-full h-full object-cover select-none"
              />
              
              {/* Floating Badge (Forced dark backdrop for perfect readability) */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md rounded-lg px-4 py-2.5 border border-white/10"
              >
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  {t.badge}
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Infinite Logo Marquee */}
        <div className="mt-16 lg:mt-24 border-t border-border/40 pt-12 lg:pt-16 overflow-hidden relative w-full">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-10 lg:mb-16"
          >
            <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-primary">
              {language === 'es' ? '• NUESTROS ALIADOS' : '• OUR PARTNERS'}
            </span>
            <h2 className="mt-3 text-2xl lg:text-4xl font-bold leading-[1.15] tracking-tight text-text-primary text-balance">
              {language === 'es' ? 'Empresas que confían en nuestra calidad.' : 'Companies that trust our quality.'}
            </h2>
          </motion.div>

          {/* Gradient Masks */}
          <div className="absolute inset-y-0 left-0 w-16 lg:w-32 bg-linear-to-r from-background via-background/40 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 lg:w-32 bg-linear-to-l from-background via-background/40 to-transparent z-10 pointer-events-none" />

          {/* Scrolling Track */}
          <div className="flex overflow-hidden select-none py-2">
            <motion.div
              animate={{ x: [0, '-33.33%'] }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="flex gap-4 lg:gap-6 whitespace-nowrap min-w-max"
            >
              {[
                { type: 'image', src: '/muni-surqu.webp', alt: 'Municipalidad de Surquillo' },
                { type: 'image', src: '/sg-inmob.webp', alt: 'SG Grupo Inmobiliario' },
                { type: 'image', src: '/textil-santa-ca.webp', alt: 'Intexsa S.A.C.' },
                { type: 'image', src: '/g-e-m.png', alt: 'E&M Metal Industry' },
                { type: 'text', name: 'Consorcio Santa Catalina' },
                { type: 'text', name: 'Molm Grupo Inmobiliario' },
                { type: 'text', name: 'Joco Design' }
              ].concat([
                { type: 'image', src: '/muni-surqu.webp', alt: 'Municipalidad de Surquillo' },
                { type: 'image', src: '/sg-inmob.webp', alt: 'SG Grupo Inmobiliario' },
                { type: 'image', src: '/textil-santa-ca.webp', alt: 'Intexsa S.A.C.' },
                { type: 'image', src: '/g-e-m.png', alt: 'E&M Metal Industry' },
                { type: 'text', name: 'Consorcio Santa Catalina' },
                { type: 'text', name: 'Molm Grupo Inmobiliario' },
                { type: 'text', name: 'Joco Design' }
              ], [
                { type: 'image', src: '/muni-surqu.webp', alt: 'Municipalidad de Surquillo' },
                { type: 'image', src: '/sg-inmob.webp', alt: 'SG Grupo Inmobiliario' },
                { type: 'image', src: '/textil-santa-ca.webp', alt: 'Intexsa S.A.C.' },
                { type: 'image', src: '/g-e-m.png', alt: 'E&M Metal Industry' },
                { type: 'text', name: 'Consorcio Santa Catalina' },
                { type: 'text', name: 'Molm Grupo Inmobiliario' },
                { type: 'text', name: 'Joco Design' }
              ]).map((item, i) => {
                let logoHeightClass = 'h-12 lg:h-16'
                if (item.type === 'image' && item.src) {
                  if (item.src === '/muni-surqu.webp') logoHeightClass = 'h-12 lg:h-16'
                  else if (item.src === '/sg-inmob.webp') logoHeightClass = 'h-10 lg:h-14'
                  else if (item.src === '/textil-santa-ca.webp') logoHeightClass = 'h-8 lg:h-10'
                  else if (item.src === '/g-e-m.png') logoHeightClass = 'h-12 lg:h-16'
                }

                return (
                  <div
                    key={i}
                    className="flex items-center justify-center px-8 py-4 rounded-xl bg-surface border border-border/60 backdrop-blur-md shadow-2xs h-20 lg:h-24 min-w-[240px] lg:min-w-[280px] transition-all duration-300 hover:border-primary/40 hover:bg-surface/90 cursor-default select-none group shrink-0"
                  >
                    {item.type === 'image' && item.src ? (
                      <img
                        src={item.src}
                        alt={item.alt}
                        className={`${logoHeightClass} w-auto object-contain opacity-75 group-hover:opacity-100 transition-all duration-300`}
                      />
                    ) : (
                      <span className="text-xs lg:text-sm font-extrabold tracking-widest uppercase font-display text-text-muted group-hover:text-text-primary transition-colors text-center whitespace-normal leading-tight">
                        {item.name}
                      </span>
                    )}
                  </div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
