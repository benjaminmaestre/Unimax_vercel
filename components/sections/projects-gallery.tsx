'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useLanguage } from '@/components/language-provider'
import { RingCarousel3D } from '@/components/ui/ring-carousel-3d'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel'

export function ProjectsGallerySection() {
  const { language, t } = useLanguage()
  const [api, setApi] = useState<CarouselApi>()

  // Premium Custom Autoplay loop using native Embla API hooks
  useEffect(() => {
    if (!api) return

    const intervalId = setInterval(() => {
      api.scrollNext()
    }, 4500) // Cycles cards smoothly every 4.5 seconds

    return () => clearInterval(intervalId)
  }, [api])

  const projects = [
    {
      id: 1,
      title: language === 'es' ? 'Pavimento Rígido' : 'Rigid Pavement',
      location: 'San Juan de Lurigancho, Lima',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pavimento-san-juan-de-lurigancho-Unimaxcorp-aFKG9rAwfcI1r2anhItf2YY1uzZyVb.webp',
      volume: '12,500 m³',
    },
    {
      id: 2,
      title: language === 'es' ? 'Suministro Masivo' : 'Massive Ready-Mix Supply',
      location: 'San Juan de Miraflores, Lima',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/obra-por-civil-Puente-piedra-Unimaxcorp-SEgI9lVQ2mXkeHi3EHHH68UkJ8uWgO.webp',
      volume: '8,200 m³',
    },
    {
      id: 3,
      title: language === 'es' ? 'Vaciado Estructural – Escaleras' : 'Structural Pouring – Staircases',
      location: 'Cieneguilla, Lima',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/obra-Cieneguilla-Unimaxcorp-VaH4EoUIyk4zxpVdU3aC9APxQZNMZ0.webp',
      volume: '5,400 m³',
    },
    {
      id: 4,
      title: language === 'es' ? 'Infraestructura Urbana – Veredas' : 'Urban Infrastructure – Sidewalks',
      location: 'Parque San Miguel, Lima',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/veredad-parque-San-Miguel-Unimaxcorp-FnZoYVtHlbvGitU4SKYXKxGbqjGkrH.webp',
      volume: '1,800 m³',
    },
    {
      id: 5,
      title: language === 'es' ? 'Edificación Estructural' : 'Structural High-Rise Construction',
      location: 'Proyecto Lince, Lima',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/personal-aten-0022-4x47XtoV1Wnj6vpeNYUz6iSMkCrHpS.webp',
      volume: '3,200 m³',
    },
    {
      id: 6,
      title: language === 'es' ? "Losa Aligerada f'c 210 kg/cm²" : "Lightweight Slab f'c 210 kg/cm²",
      location: 'Villa María del Triunfo, Lima',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vaciado-Unimaxcorp-002-lCojy5wXyOYj9Fl3zxtJ0S1EpUHHYT.webp',
      volume: '2,500 m³',
    },
  ]

  return (
    <section className="relative py-10 lg:py-32 bg-surface grain overflow-x-hidden" id="proyectos">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-8 lg:mb-16"
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
      </div>

      {/* Carousel Container — full width to allow 3D bleed on large screens */}
      <div className="relative w-full">

        {/* Mobile and Tablet View (up to 1023px): Classic Embla Carousel */}
        <div className="block lg:hidden px-5 md:px-20">
          <Carousel
            setApi={setApi}
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-3 md:-ml-4">
              {projects.map((project, index) => (
                <CarouselItem
                  key={project.id}
                  className="pl-3 md:pl-4 basis-[85%] sm:basis-[75%] md:basis-1/2 lg:basis-1/3"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full"
                  >
                    <div className="group relative h-[300px] sm:h-[340px] md:h-[380px] rounded-xl overflow-hidden border border-border/80 hover:border-primary transition-colors duration-300 bg-surface shadow-xs flex flex-col justify-end">
                      {/* Image */}
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 480px) 85vw, (max-width: 768px) 75vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 pointer-events-none"
                      />

                      {/* Protection Dark Gradient Overlay */}
                      <div className="absolute inset-0 bg-linear-to-t from-black via-black/35 to-transparent opacity-85" />

                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 z-10">
                        <div className="flex items-end justify-between gap-3">
                          <div>
                            <p className="text-sm md:text-base font-bold text-white leading-snug">
                              {project.title}
                            </p>
                            <p className="text-xs text-white/70 mt-0.5">
                              {project.location}
                            </p>
                          </div>
                          <span className="text-[10px] md:text-xs font-bold text-primary bg-black/40 backdrop-blur-md px-2 md:px-2.5 py-1 rounded border border-white/5 shrink-0 uppercase tracking-wider">
                            {project.volume}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation Controls — between content and edge */}
            <div className="flex justify-end gap-3 mt-5 select-none">
              <CarouselPrevious className="static translate-y-0 w-10 h-10 border border-border hover:bg-primary hover:text-white hover:border-primary" />
              <CarouselNext className="static translate-y-0 w-10 h-10 border border-border hover:bg-primary hover:text-white hover:border-primary" />
            </div>
          </Carousel>
        </div>

        {/* Desktop View: 3D Ring Carousel (lg+ screens ≥1024px) */}
        {/* Responsive item width: smaller on 1024-1280px, larger on 1280px+ */}
        <div className="hidden lg:block py-8 max-w-[1280px] mx-auto px-16">
          <RingCarousel3D itemWidth={300} itemHeight={400} cardSpread={0.45}>
            {projects.map((project) => (
              <div key={project.id} className="w-full h-full">
                <div className="group relative h-full rounded-xl overflow-hidden border border-border/80 hover:border-primary transition-colors duration-300 bg-surface shadow-xs flex flex-col justify-end">
                  {/* Image */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 pointer-events-none"
                  />

                  {/* Protection Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/35 to-transparent opacity-85" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                    <div className="flex items-end justify-between gap-3">
                      <div>
                        <p className="text-base xl:text-lg font-bold text-white leading-snug">
                          {project.title}
                        </p>
                        <p className="text-xs text-white/70 mt-0.5">
                          {project.location}
                        </p>
                      </div>
                      <span className="text-xs font-bold text-primary bg-black/40 backdrop-blur-md px-2.5 py-1 rounded border border-white/5 shrink-0 uppercase tracking-wider">
                        {project.volume}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </RingCarousel3D>
        </div>
      </div>

      {/* Logo Watermark */}
      <div className="mt-12 xl:mt-16 flex justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 0.25, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon-unimax-300x300-s5KeGrqqEC0e2lsvK7WzQjKISeIKMB.png"
            alt="UNIMAXCORP Icon"
            width={80}
            height={80}
            className="w-16 h-16 xl:w-20 xl:h-20 object-contain select-none dark:invert-0 invert"
          />
        </motion.div>
      </div>
    </section>
  )
}
