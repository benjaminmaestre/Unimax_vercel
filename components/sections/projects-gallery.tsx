'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/components/language-provider'

export function ProjectsGallerySection() {
  const { language, t } = useLanguage()

  const projects = [
    {
      id: 1,
      title: language === 'es' ? 'Pavimentación SJL' : 'SJL Paving Project',
      location: 'San Juan de Lurigancho',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pavimento-san-juan-de-lurigancho-Unimaxcorp-aFKG9rAwfcI1r2anhItf2YY1uzZyVb.webp',
      volume: '12,500 m³',
      colSpan: 'lg:col-span-2',
      rowSpan: 'lg:row-span-2',
    },
    {
      id: 2,
      title: language === 'es' ? 'Obra Civil Puente Piedra' : 'Puente Piedra Civil Works',
      location: 'Puente Piedra, Lima',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/obra-por-civil-Puente-piedra-Unimaxcorp-SEgI9lVQ2mXkeHi3EHHH68UkJ8uWgO.webp',
      volume: '8,200 m³',
      colSpan: 'lg:col-span-1',
      rowSpan: 'lg:row-span-1',
    },
    {
      id: 3,
      title: language === 'es' ? 'Proyecto Cieneguilla' : 'Cieneguilla Project',
      location: 'Cieneguilla, Lima',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/obra-Cieneguilla-Unimaxcorp-VaH4EoUIyk4zxpVdU3aC9APxQZNMZ0.webp',
      volume: '5,400 m³',
      colSpan: 'lg:col-span-1',
      rowSpan: 'lg:row-span-1',
    },
    {
      id: 4,
      title: language === 'es' ? 'Parque San Miguel' : 'San Miguel Park',
      location: 'San Miguel, Lima',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/veredad-parque-San-Miguel-Unimaxcorp-FnZoYVtHlbvGitU4SKYXKxGbqjGkrH.webp',
      volume: '1,800 m³',
      colSpan: 'lg:col-span-1',
      rowSpan: 'lg:row-span-1',
    },
    {
      id: 5,
      title: language === 'es' ? 'Vaciado Especializado' : 'Specialized Pouring',
      location: language === 'es' ? 'Lima Metropolitana' : 'Metropolitan Lima',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/personal-aten-0022-4x47XtoV1Wnj6vpeNYUz6iSMkCrHpS.webp',
      volume: '3,200 m³',
      colSpan: 'lg:col-span-1',
      rowSpan: 'lg:row-span-1',
    },
  ]

  return (
    <section className="relative py-24 lg:py-32 bg-surface grain" id="proyectos">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-primary">
            {t('projects.prelabel')}
          </span>
          <h2 className="mt-3 text-2xl lg:text-4xl font-bold leading-[1.15] tracking-tight text-text-primary text-balance">
            {t('projects.title')}
          </h2>
          <p className="mt-4 text-sm lg:text-base text-text-muted max-w-2xl mx-auto">
            {t('projects.desc')}
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative overflow-hidden rounded-xl ${project.colSpan} ${project.rowSpan} ${
                project.rowSpan === 'lg:row-span-2' ? 'min-h-[360px] lg:min-h-[540px]' : 'min-h-[250px]'
              } border border-border/80 hover:border-primary transition-colors duration-300 shadow-xs`}
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 pointer-events-none"
              />
              
              {/* Protection Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent opacity-85" />

              {/* Content - Forced light text for visibility against dark image overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-end justify-between gap-3">
                  <div>
                    <h3 className="text-base lg:text-lg font-bold text-white leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs text-white/70 mt-0.5">
                      {project.location}
                    </p>
                  </div>
                  <span className="text-xs font-bold text-primary bg-black/40 backdrop-blur-md px-2.5 py-1 rounded border border-white/5 shrink-0 uppercase tracking-wider">
                    {project.volume}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Logo Watermark */}
        <div className="mt-16 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 0.25, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon-unimax-300x300-s5KeGrqqEC0e2lsvK7WzQjKISeIKMB.png"
              alt="UNIMAXCORP Icon"
              className="w-20 h-20 object-contain select-none dark:invert-0 invert"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
