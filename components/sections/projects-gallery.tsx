'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    id: 1,
    title: 'Pavimentación SJL',
    location: 'San Juan de Lurigancho',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pavimento-san-juan-de-lurigancho-Unimaxcorp-aFKG9rAwfcI1r2anhItf2YY1uzZyVb.webp',
    volume: '12,500 m³',
    colSpan: 'lg:col-span-2',
    rowSpan: 'lg:row-span-2',
  },
  {
    id: 2,
    title: 'Obra Civil Puente Piedra',
    location: 'Puente Piedra, Lima',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/obra-por-civil-Puente-piedra-Unimaxcorp-SEgI9lVQ2mXkeHi3EHHH68UkJ8uWgO.webp',
    volume: '8,200 m³',
    colSpan: 'lg:col-span-1',
    rowSpan: 'lg:row-span-1',
  },
  {
    id: 3,
    title: 'Proyecto Cieneguilla',
    location: 'Cieneguilla, Lima',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/obra-Cieneguilla-Unimaxcorp-VaH4EoUIyk4zxpVdU3aC9APxQZNMZ0.webp',
    volume: '5,400 m³',
    colSpan: 'lg:col-span-1',
    rowSpan: 'lg:row-span-1',
  },
  {
    id: 4,
    title: 'Parque San Miguel',
    location: 'San Miguel, Lima',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/veredad-parque-San-Miguel-Unimaxcorp-FnZoYVtHlbvGitU4SKYXKxGbqjGkrH.webp',
    volume: '1,800 m³',
    colSpan: 'lg:col-span-1',
    rowSpan: 'lg:row-span-1',
  },
  {
    id: 5,
    title: 'Vaciado Especializado',
    location: 'Lima Metropolitana',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/personal-aten-0022-4x47XtoV1Wnj6vpeNYUz6iSMkCrHpS.webp',
    volume: '3,200 m³',
    colSpan: 'lg:col-span-1',
    rowSpan: 'lg:row-span-1',
  },
]

export function ProjectsGallerySection() {
  return (
    <section className="relative py-24 lg:py-32 bg-[var(--surface)] grain" id="proyectos">
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
            • PROYECTOS DESTACADOS
          </span>
          <h2 className="mt-3 text-3xl lg:text-[40px] font-bold leading-[1.1] tracking-[-0.02em] text-white text-balance">
            Obras que construyen confianza.
          </h2>
          <p className="mt-4 text-lg text-[var(--text-muted)] max-w-2xl mx-auto">
            Más de 1,200 proyectos entregados en Lima y provincias con los más altos estándares de calidad.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative overflow-hidden rounded-xl ${project.colSpan} ${project.rowSpan} ${
                project.rowSpan === 'lg:row-span-2' ? 'min-h-[400px] lg:min-h-[600px]' : 'min-h-[280px]'
              } border border-[var(--border-subtle)] hover:border-[var(--red-primary)] transition-colors duration-300`}
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--black-950)] via-[var(--black-950)]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[var(--text-muted)]">
                      {project.location}
                    </p>
                  </div>
                  <span className="text-sm font-medium text-[var(--red-primary)]">
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
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon-unimax-300x300-s5KeGrqqEC0e2lsvK7WzQjKISeIKMB.png"
              alt="UNIMAXCORP Icon"
              className="w-24 h-24 opacity-30"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
