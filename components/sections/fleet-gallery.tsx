'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useLanguage } from '@/components/language-provider'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel'

// Specs translation map for heavy machinery
const translateSpec = (spec: string, lang: 'es' | 'en') => {
  if (lang === 'es') return spec
  const translations: Record<string, string> = {
    'Capacidad 8m³': 'Capacity 8m³',
    'Tambor reforzado': 'Reinforced drum',
    'GPS integrado': 'Integrated GPS',
    'Capacidad 10m³': 'Capacity 10m³',
    'Alto rendimiento': 'High performance',
    'Certificado ISO': 'ISO Certified',
    'Alcance 47m': 'Reach 47m',
    '5 secciones': '5 sections',
    'Para edificios': 'For buildings',
    'Alcance 58m': 'Reach 58m',
    'Alta presión': 'High pressure',
    'Mega proyectos': 'Mega projects',
    'Multi-propósito': 'Multi-purpose',
    'Alta potencia': 'High power',
    'Versatilidad': 'Versatile',
    'Alta capacidad': 'High capacity',
    'Eficiencia': 'Efficient',
    'Multi-terreno': 'All-terrain',
    'Múltiples tamaños': 'Multiple sizes',
    'Alta productividad': 'High productivity',
    'Terrenos difíciles': 'Rough terrain',
  }
  return translations[spec] || spec
}

const translateType = (type: string, lang: 'es' | 'en') => {
  if (lang === 'es') return type
  if (type.includes('Mixer')) return type
  if (type === 'Retroexcavadora') return 'Backhoe Loader'
  if (type === 'Cargador Frontal') return 'Wheel Loader'
  if (type === 'Excavadoras') return 'Excavators'
  return type
}

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

  return (
    <section className="relative py-12 lg:py-32 bg-background grain overflow-hidden" id="servicios">
      <div className="section-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-primary">
              {t('fleet.prelabel')}
            </span>
            <h2 className="mt-3 text-2xl lg:text-4xl font-bold leading-[1.15] tracking-tight text-text-primary text-balance max-w-2xl">
              {t('fleet.title')}
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-wider text-text-muted flex items-center gap-2 select-none shrink-0"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            {t('fleet.swipe')}
          </motion.div>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full">
          <Carousel
            setApi={setApi}
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {fleet.map((item, index) => (
                <CarouselItem
                  key={item.id}
                  className="pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.5, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full"
                  >
                    <div className="group relative h-[440px] rounded-xl overflow-hidden border border-border/80 hover:border-primary transition-colors duration-300 bg-surface shadow-xs flex flex-col justify-end">
                      {/* Image */}
                      <img
                        src={item.image}
                        alt={item.model}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 pointer-events-none"
                      />
                      
                      {/* Protection Gradient */}
                      <div className="absolute inset-0 bg-linear-to-t from-black via-black/45 to-transparent opacity-85" />

                      {/* Machine Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center px-3 py-1.5 rounded bg-primary text-[10px] font-bold tracking-widest uppercase text-white shadow-xs">
                          {translateType(item.type, language)}
                        </span>
                      </div>

                      {/* Content Card */}
                      <div className="relative p-5 lg:p-6 z-10">
                        <h3 className="text-xl lg:text-2xl font-bold text-white leading-tight">
                          {item.model}
                        </h3>
                        
                        <div className="mt-3 flex flex-wrap gap-x-2 gap-y-1 text-xs text-white/70">
                          {item.specs.map((spec, i) => (
                            <span key={spec}>
                              {translateSpec(spec, language)}{i < item.specs.length - 1 ? '  ·' : ''}
                            </span>
                          ))}
                        </div>

                        <div className="mt-5">
                          <Link
                            href="#contacto"
                            className="inline-flex items-center justify-center h-9 px-4 text-xs font-bold tracking-widest uppercase bg-primary hover:bg-cta-hover text-white rounded-md transition-all active:scale-95 shadow-sm border border-primary hover:border-cta-hover"
                          >
                            {t('fleet.cta')}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}

              {/* Symmetrical CTA Slide */}
              <CarouselItem className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full"
                >
                  <div className="h-[440px] rounded-xl overflow-hidden bg-surface border border-border/80 flex flex-col items-center justify-center text-center p-6 lg:p-8 shadow-xs">
                    <h3 className="text-xl lg:text-2xl font-bold text-text-primary">
                      {t('fleet.more.title')}
                    </h3>
                    <p className="mt-3 text-sm text-text-muted leading-relaxed max-w-[240px]">
                      {t('fleet.more.desc')}
                    </p>
                    <Link
                      href="#contacto"
                      className="group mt-6 inline-flex items-center justify-center h-[50px] px-6 text-xs font-bold tracking-[0.12em] uppercase bg-primary hover:bg-cta-hover text-white rounded-md transition-all active:scale-95 shadow-sm border border-primary hover:border-cta-hover"
                    >
                      {t('fleet.more.cta')}
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-150 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              </CarouselItem>
            </CarouselContent>

            {/* Industrial Navigation Controls */}
            <div className="flex justify-end gap-3 mt-6 select-none">
              <CarouselPrevious className="static translate-y-0 border border-border hover:bg-primary hover:text-white" />
              <CarouselNext className="static translate-y-0 border border-border hover:bg-primary hover:text-white" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  )
}
