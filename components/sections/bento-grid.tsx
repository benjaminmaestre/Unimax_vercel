'use client'

import { motion, Variants } from 'framer-motion'
import { ArrowRight, Satellite, Truck, Play } from 'lucide-react'
import Link from 'next/link'
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

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.06,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
}

export function BentoGridSection() {
  const { t } = useLanguage()
  const [api, setApi] = useState<CarouselApi>()

  // Premium Custom Autoplay loop using native Embla API hooks
  useEffect(() => {
    if (!api) return

    const intervalId = setInterval(() => {
      api.scrollNext()
    }, 4500) // Cycles cards smoothly every 4.5 seconds

    return () => clearInterval(intervalId)
  }, [api])

  const solutions = [
    {
      id: 1,
      tag: t('bento.p1.tag'),
      title: t('bento.p1.title'),
      items: [
        t('bento.p1.item1'),
        t('bento.p1.item2'),
        t('bento.p1.item3'),
        t('bento.p1.item4')
      ],
      link: t('bento.p1.link'),
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vaciado-Unimaxcorp-002-lCojy5wXyOYj9Fl3zxtJ0S1EpUHHYT.webp',
      type: 'image'
    },
    {
      id: 2,
      tag: t('bento.p2.tag'),
      title: t('bento.p2.title'),
      items: [
        t('bento.p2.item1'),
        t('bento.p2.item2'),
        t('bento.p2.item3'),
        t('bento.p2.item4')
      ],
      link: t('bento.p2.link'),
      icon: Satellite,
      type: 'icon'
    },
    {
      id: 3,
      tag: t('bento.p3.tag'),
      title: t('bento.p3.title'),
      items: [
        t('bento.p3.item1'),
        t('bento.p3.item2'),
        t('bento.p3.item3'),
        t('bento.p3.item4')
      ],
      link: t('bento.p3.link'),
      icon: Truck,
      type: 'icon'
    },
    {
      id: 4,
      title: t('bento.p4.desc'),
      badge: t('bento.p4.badge'),
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/plnata-dosificadora-1-nBJ3KM7b2wgHOjE006GXWkj4cKEZ5k.webp',
      type: 'video'
    }
  ]

  return (
    <section className="relative py-12 lg:py-32 bg-background grain" id="productos">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10 lg:mb-16"
        >
          <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-primary">
            {t('bento.prelabel')}
          </span>
          <h2 className="mt-3 text-2xl lg:text-4xl font-bold leading-[1.15] tracking-tight text-text-primary text-balance">
            {t('bento.title')}
          </h2>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative w-full">
          {/* Mobile View: Classic Embla Carousel */}
          <div className="block md:hidden">
            <Carousel
              setApi={setApi}
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {solutions.map((item, index) => (
                <CarouselItem
                  key={item.id}
                  className="pl-4 basis-[88%] md:basis-1/2 lg:basis-1/3"
                >
                  <motion.div
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-40px" }}
                    variants={cardVariants}
                    className="h-full"
                  >
                    {item.type === 'image' && (
                      <div className="group relative h-[460px] rounded-xl overflow-hidden border border-border/80 hover:border-primary transition-colors duration-300 bg-surface shadow-xs flex flex-col justify-end p-6 lg:p-8">
                        <div 
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.03]"
                          style={{
                            backgroundImage: `url('${item.image}')`,
                          }}
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent" />
                        
                        <div className="relative z-10">
                          <span className="text-[10px] font-bold tracking-widest uppercase text-primary">
                            {item.tag}
                          </span>
                          <h3 className="mt-2 text-xl lg:text-2xl font-bold text-white leading-tight">
                            {item.title}
                          </h3>
                          <ul className="mt-4 space-y-2 max-w-sm">
                            {item.items?.map((bullet) => (
                              <li key={bullet} className="flex items-center gap-2.5 text-sm text-white/80">
                                <span className="w-1.5 h-1.5 shrink-0 rounded-full bg-primary" />
                                {bullet}
                              </li>
                            ))}
                          </ul>
                          <Link
                            href="#contacto"
                            className="group/link mt-6 inline-flex items-center gap-2 text-white/95 hover:text-primary transition-colors"
                          >
                            <span className="text-xs font-bold tracking-widest uppercase">{item.link}</span>
                            <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover/link:translate-x-1" />
                          </Link>
                        </div>
                      </div>
                    )}

                    {item.type === 'icon' && (
                      <div className="group relative h-[460px] rounded-xl overflow-hidden bg-surface border border-border/80 hover:border-primary transition-colors duration-300 shadow-xs flex flex-col p-6 lg:p-8 justify-between">
                        <div>
                          <div className="w-16 h-16 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center transition-colors group-hover:bg-primary/20">
                            {item.icon && <item.icon className="w-8 h-8 text-primary" />}
                          </div>
                          
                          <span className="mt-6 block text-[10px] font-bold tracking-widest uppercase text-primary">
                            {item.tag}
                          </span>
                          <h3 className="mt-2 text-xl lg:text-2xl font-bold text-text-primary leading-tight">
                            {item.title}
                          </h3>
                          <ul className="mt-4 space-y-2">
                            {item.items?.map((bullet) => (
                              <li key={bullet} className="flex items-center gap-2.5 text-sm text-text-secondary">
                                <span className="w-1.5 h-1.5 shrink-0 rounded-full bg-primary" />
                                {bullet}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <Link
                          href="#contacto"
                          className="group/link inline-flex items-center gap-2 text-text-primary hover:text-primary transition-colors"
                        >
                          <span className="text-xs font-bold tracking-widest uppercase">{item.link}</span>
                          <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover/link:translate-x-1" />
                        </Link>
                      </div>
                    )}

                    {item.type === 'video' && (
                      <div className="group relative h-[460px] rounded-xl overflow-hidden border border-border/80 hover:border-primary transition-colors duration-300 shadow-xs flex flex-col justify-end p-6 lg:p-8">
                        <div 
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.03]"
                          style={{
                            backgroundImage: `url('${item.image}')`,
                          }}
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black via-black/45 to-transparent" />
                        
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-primary/95 flex items-center justify-center hover:bg-cta-hover hover:scale-105 active:scale-95 shadow-lg transition-all duration-200 cursor-pointer border border-primary/20">
                            <Play className="w-6 h-6 text-white ml-0.5" fill="white" />
                          </div>
                        </div>

                        <div className="relative z-10">
                          <p className="text-sm text-white/95 font-medium">{item.title}</p>
                          <div className="mt-3 inline-flex items-center gap-2 bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded border border-white/10 w-fit">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                            <span className="text-[9px] font-bold tracking-[0.15em] uppercase text-white">
                              {item.badge}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Industrial Navigation Controls */}
            <div className="flex justify-end gap-3 mt-6 select-none">
              <CarouselPrevious className="static translate-y-0 border border-border hover:bg-primary hover:text-white" />
              <CarouselNext className="static translate-y-0 border border-border hover:bg-primary hover:text-white" />
            </div>
          </Carousel>
          </div>

          {/* Desktop View: 3D Ring Carousel */}
          <div className="hidden md:block py-10">
            <RingCarousel3D itemWidth={380} itemHeight={480} visibleCards={3} cardSpread={0.85}>
              {solutions.map((item, index) => (
                <div key={item.id} className="w-full h-full">
                  {item.type === 'image' && (
                    <div className="group relative h-full rounded-xl overflow-hidden border border-border/80 hover:border-primary transition-colors duration-300 bg-surface shadow-xs flex flex-col justify-end p-6 lg:p-8">
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.03]"
                        style={{ backgroundImage: `url('${item.image}')` }}
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent" />
                      
                      <div className="relative z-10">
                        <span className="text-[10px] font-bold tracking-widest uppercase text-primary">
                          {item.tag}
                        </span>
                        <h3 className="mt-2 text-xl lg:text-2xl font-bold text-white leading-tight">
                          {item.title}
                        </h3>
                        <ul className="mt-4 space-y-2 max-w-sm">
                          {item.items?.map((bullet) => (
                            <li key={bullet} className="flex items-center gap-2.5 text-sm text-white/80">
                              <span className="w-1.5 h-1.5 shrink-0 rounded-full bg-primary" />
                              {bullet}
                            </li>
                          ))}
                        </ul>
                        <Link href="#contacto" className="group/link mt-6 inline-flex items-center gap-2 text-white/95 hover:text-primary transition-colors">
                          <span className="text-xs font-bold tracking-widest uppercase">{item.link}</span>
                          <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover/link:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  )}

                  {item.type === 'icon' && (
                    <div className="group relative h-full rounded-xl overflow-hidden bg-surface border border-border/80 hover:border-primary transition-colors duration-300 shadow-xs flex flex-col p-6 lg:p-8 justify-between">
                      <div>
                        <div className="w-16 h-16 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center transition-colors group-hover:bg-primary/20">
                          {item.icon && <item.icon className="w-8 h-8 text-primary" />}
                        </div>
                        <span className="mt-6 block text-[10px] font-bold tracking-widest uppercase text-primary">
                          {item.tag}
                        </span>
                        <h3 className="mt-2 text-xl lg:text-2xl font-bold text-text-primary leading-tight">
                          {item.title}
                        </h3>
                        <ul className="mt-4 space-y-2">
                          {item.items?.map((bullet) => (
                            <li key={bullet} className="flex items-center gap-2.5 text-sm text-text-secondary">
                              <span className="w-1.5 h-1.5 shrink-0 rounded-full bg-primary" />
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Link href="#contacto" className="group/link inline-flex items-center gap-2 text-text-primary hover:text-primary transition-colors">
                        <span className="text-xs font-bold tracking-widest uppercase">{item.link}</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  )}

                  {item.type === 'video' && (
                    <div className="group relative h-full rounded-xl overflow-hidden border border-border/80 hover:border-primary transition-colors duration-300 shadow-xs flex flex-col justify-end p-6 lg:p-8">
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.03]"
                        style={{ backgroundImage: `url('${item.image}')` }}
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black via-black/45 to-transparent" />
                      
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-primary/95 flex items-center justify-center hover:bg-cta-hover hover:scale-105 active:scale-95 shadow-lg transition-all duration-200 cursor-pointer border border-primary/20">
                          <Play className="w-6 h-6 text-white ml-0.5" fill="white" />
                        </div>
                      </div>

                      <div className="relative z-10">
                        <p className="text-sm text-white/95 font-medium">{item.title}</p>
                        <div className="mt-3 inline-flex items-center gap-2 bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded border border-white/10 w-fit">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                          <span className="text-[9px] font-bold tracking-[0.15em] uppercase text-white">
                            {item.badge}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </RingCarousel3D>
          </div>
        </div>
      </div>
    </section>
  )
}
