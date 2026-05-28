'use client'

import { motion, AnimatePresence, Variants } from 'framer-motion'
import { ArrowRight, Satellite, Truck, Play, X, FileText, Check } from 'lucide-react'
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
  const { t, language } = useLanguage()
  const [api, setApi] = useState<CarouselApi>()
  const [isModalOpen, setIsModalOpen] = useState(false)

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

  // Ficha técnica tables and specifications dictionary in Spanish and English
  const specsData = {
    es: {
      title: 'Ficha Técnica - Concreto Premezclado',
      subtitle: 'Cumplimiento normativo y dosificación controlada bajo altos estándares de calidad.',
      sec1: 'Clasificación de Resistencia f\'c (kg/cm²)',
      sec2: 'Granulometría de Agregados',
      sec3: 'Aditivos y Trabajabilidad',
      sec4: 'Resistencia Acelerada',
      accelTitle: 'Concretos de Resistencia Acelerada (3, 7 y 14 días)',
      accelDesc: 'Mezclas diseñadas para acelerar los tiempos de encofrado y reparaciones de urgencia estructural, garantizando la durabilidad final.',
      aditivos: [
        'Fácil colocación: Ideal para elementos con alta densidad de acero de refuerzo.',
        'Bombeo optimizado: Aditivos reductores que disminuyen la fricción en tuberías.',
        'Acabado cara vista: Mayor cohesión de mezcla para superficies densas y lisas sin porosidad.',
        'Durabilidad final: Relación agua-cemento estrictamente controlada para evitar cangrejeras.',
      ],
      tableHead: ['Resistencia', 'Aplicaciones Sugeridas'],
      tableRows: [
        { fc: '100 – 140 kg/cm²', app: 'Elementos de relleno, falsos pisos, solados y concreto ciclópeo.' },
        { fc: '175 – 210 kg/cm²', app: 'Estándar residencial para cimientos, columnas, vigas y losas aligeradas.' },
        { fc: '245 – 280 kg/cm²', app: 'Resistencia moderada-alta para pavimentos rígidos, mayores luces y edificios.' },
        { fc: '315 – 350 kg/cm²', app: 'Alta resistencia para infraestructura pesada, placas estructurales y ambientes agresivos.' },
      ],
      agregados: [
        { size: 'Piedra 3/8" (Confitillo)', desc: 'Recomendada para secciones delgadas o alta densidad de acero; su gran fluidez evita la formación de cangrejeras en columnas y placas esbeltas.' },
        { size: 'Piedra 1/2"', desc: 'Agregado estándar para viviendas y edificaciones convencionales; ofrece un balance perfecto entre resistencia final y trabajabilidad de vaciado.' },
        { size: 'Piedra 3/4"', desc: 'Agregado grueso idóneo para vaciados masivos, losas de gran espesor, zapatas gigantes y pavimentos rígidos; optimiza el cemento y eleva la estabilidad.' }
      ],
      close: 'Cerrar Ficha',
      quote: 'Cotizar con Asesor',
    },
    en: {
      title: 'Technical Data Sheet - Ready-Mix Concrete',
      subtitle: 'Regulatory compliance and controlled dosage under strict quality standards.',
      sec1: 'Compressive Strength f\'c (kg/cm²) Classification',
      sec2: 'Aggregate Size Selection',
      sec3: 'Admixtures & Workability',
      sec4: 'Accelerated Strength',
      accelTitle: 'Accelerated Concrete Strengths (3, 7, and 14 days)',
      accelDesc: 'Specially formulated mix designs to accelerate formwork turnaround times and urgent structural repairs without compromising final durability.',
      aditivos: [
        'Easy placement: Ideal for elements with high density of reinforcing steel.',
        'Optimized pumping: Special admixtures that reduce friction in pipeline systems.',
        'Fair-faced finish: Enhanced mix cohesion for smooth, dense surfaces with zero voids.',
        'Final durability: Strictly controlled water-cement ratio to prevent cracking.',
      ],
      tableHead: ['Strength', 'Suggested Applications'],
      tableRows: [
        { fc: '100 – 140 kg/cm²', app: 'Filling elements, subfloors, blinding concrete, and cyclopean concrete.' },
        { fc: '175 – 210 kg/cm²', app: 'Residential standard for foundations, columns, beams, and lightweight slabs.' },
        { fc: '245 – 280 kg/cm²', app: 'Moderate-high strength for rigid pavements, wider spans, and multi-story buildings.' },
        { fc: '315 – 350 kg/cm²', app: 'High strength for heavy infrastructure, structural shear walls, and aggressive environments.' },
      ],
      agregados: [
        { size: 'Piedra 3/8" (Confitillo)', desc: 'Recommended for thin sections or high steel density; its high fluidity prevents voids and honeycombs in columns and slender walls.' },
        { size: 'Piedra 1/2"', desc: 'Standard aggregate for residential and general construction; offers a perfect balance between strength and placing workability.' },
        { size: 'Piedra 3/4"', desc: 'Coarse aggregate ideal for mass pours, thick foundation slabs, heavy footings, and rigid pavements; optimizes cement and maximizes stability.' }
      ],
      close: 'Close Sheet',
      quote: 'Get a Technical Quote',
    }
  }[language]

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
          {/* Mobile and Tablet View: Classic Embla Carousel */}
          <div className="block lg:hidden">
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
                              href="/servicios/concreto-premezclado"
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
                            href={item.id === 3 ? "/servicios/bomba-de-concreto" : "#contacto"}
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

          {/* Desktop View: 3D Ring Carousel (Large screens only) */}
          <div className="hidden lg:block py-10">
            <RingCarousel3D itemWidth={380} itemHeight={480} visibleCards={3} cardSpread={0.85}>
              {solutions.map((item) => (
                <div key={item.id} className="w-full h-full bg-surface rounded-xl overflow-hidden shadow-xs border border-border/80 hover:border-primary transition-colors duration-300">
                  {item.type === 'image' && (
                    <div className="group relative h-full flex flex-col justify-end p-6 lg:p-8 bg-surface">
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
                        
                          <Link href="/servicios/concreto-premezclado" className="group/link mt-6 inline-flex items-center gap-2 text-white/95 hover:text-primary transition-colors">
                            <span className="text-xs font-bold tracking-widest uppercase">{item.link}</span>
                            <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover/link:translate-x-1" />
                          </Link>
                      </div>
                    </div>
                  )}

                  {item.type === 'icon' && (
                    <div className="group relative h-full flex flex-col p-6 lg:p-8 justify-between bg-surface">
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
                      <Link href={item.id === 3 ? "/servicios/bomba-de-concreto" : "#contacto"} className="group/link inline-flex items-center gap-2 text-text-primary hover:text-primary transition-colors">
                        <span className="text-xs font-bold tracking-widest uppercase">{item.link}</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  )}

                  {item.type === 'video' && (
                    <div className="group relative h-full flex flex-col justify-end p-6 lg:p-8 bg-surface">
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

      {/* Technical Data Sheet Modal - Highly Premium matte glass design */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 lg:p-6"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.5, bounce: 0.15 }}
              className="relative w-full max-w-4xl bg-surface border border-border/80 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="px-6 py-5 border-b border-border/60 flex items-center justify-between bg-surface relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base lg:text-lg font-bold text-text-primary tracking-wide leading-tight">
                      {specsData.title}
                    </h3>
                    <p className="text-[11px] text-text-muted mt-0.5 hidden sm:block">
                      {specsData.subtitle}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-all duration-200 cursor-pointer shadow-xs"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body - Scrollable content */}
              <div className="overflow-y-auto p-6 lg:p-8 space-y-8 relative z-0">
                {/* Section 1: Table of Compressive Strength */}
                <div>
                  <h4 className="text-sm font-extrabold uppercase tracking-widest text-primary flex items-center gap-2 mb-4">
                    <span className="w-1.5 h-3 bg-primary rounded-full" />
                    {specsData.sec1}
                  </h4>
                  <div className="overflow-x-auto rounded-xl border border-border/80 bg-surface">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-background border-b border-border/80">
                          <th className="py-4 px-5 text-xs font-bold uppercase tracking-wider text-text-primary">
                            {specsData.tableHead?.[0]}
                          </th>
                          <th className="py-4 px-5 text-xs font-bold uppercase tracking-wider text-text-primary">
                            {specsData.tableHead?.[1]}
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border/60 text-sm">
                        {specsData.tableRows?.map((row) => (
                          <tr key={row.fc} className="hover:bg-background/40 transition-colors">
                            <td className="py-4 px-5 font-mono font-bold text-primary">
                              {row.fc}
                            </td>
                            <td className="py-4 px-5 text-text-secondary">
                              {row.app}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Section 2 & 3: Aggregate Size and Admixtures Split Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                  {/* Aggregates Column */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-extrabold uppercase tracking-widest text-primary flex items-center gap-2">
                      <span className="w-1.5 h-3 bg-primary rounded-full" />
                      {specsData.sec2}
                    </h4>
                    <div className="space-y-4">
                      {specsData.agregados?.map((ag) => (
                        <div key={ag.size} className="p-4 rounded-xl border border-border/40 bg-background/30">
                          <h5 className="text-xs font-extrabold uppercase tracking-wider text-text-primary">
                            {ag.size}
                          </h5>
                          <p className="mt-1.5 text-xs text-text-muted leading-relaxed">
                            {ag.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Admixtures Column */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-extrabold uppercase tracking-widest text-primary flex items-center gap-2">
                      <span className="w-1.5 h-3 bg-primary rounded-full" />
                      {specsData.sec3}
                    </h4>
                    <div className="p-5 rounded-xl border border-border/80 bg-surface shadow-xs space-y-4">
                      {specsData.aditivos?.map((item) => {
                        const [title, desc] = item.split(': ')
                        return (
                          <div key={title} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0 mt-0.5">
                              <Check className="w-3.5 h-3.5" />
                            </div>
                            <div>
                              <span className="text-xs font-bold text-text-primary block">{title}</span>
                              <span className="text-xs text-text-muted mt-0.5 leading-relaxed block">{desc}</span>
                            </div>
                          </div>
                        )
                      })}
                    </div>

                    {/* Accelerated strength Card */}
                    <div className="p-5 rounded-xl bg-linear-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 shadow-2xs">
                      <h5 className="text-xs font-extrabold uppercase tracking-wider text-primary">
                        {specsData.accelTitle}
                      </h5>
                      <p className="mt-2 text-xs text-text-secondary leading-relaxed">
                        {specsData.accelDesc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-4 border-t border-border/60 bg-background/50 flex items-center justify-end gap-3 select-none relative z-10">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 h-11 text-xs font-bold tracking-widest uppercase border border-border hover:bg-surface text-text-secondary rounded-lg transition-colors cursor-pointer"
                >
                  {specsData.close}
                </button>
                <Link
                  href="#contacto"
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 h-11 text-xs font-bold tracking-widest uppercase bg-primary hover:bg-cta-hover text-white rounded-lg transition-all active:scale-95 shadow-sm border border-primary hover:border-cta-hover inline-flex items-center justify-center gap-2"
                >
                  {specsData.quote}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
