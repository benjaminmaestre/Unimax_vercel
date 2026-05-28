'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/components/language-provider'
import { 
  Check, 
  Clock, 
  Users, 
  Trash2, 
  MessageSquare, 
  PhoneCall, 
  ArrowRight 
} from 'lucide-react'
import Link from 'next/link'

export function PumpDetails() {
  const { t, language } = useLanguage()

  // Advantages data
  const advantages = [
    {
      title: t('pump.ventajas.tiempo.title'),
      desc: t('pump.ventajas.tiempo.desc'),
      icon: Clock,
      gradient: 'from-red-500/10 to-transparent'
    },
    {
      title: t('pump.ventajas.personal.title'),
      desc: t('pump.ventajas.personal.desc'),
      icon: Users,
      gradient: 'from-primary/10 to-transparent'
    },
    {
      title: t('pump.ventajas.desperdicio.title'),
      desc: t('pump.ventajas.desperdicio.desc'),
      icon: Trash2,
      gradient: 'from-emerald-500/10 to-transparent'
    }
  ]

  return (
    <div className="bg-background grain py-16 lg:py-24 relative overflow-hidden">
      
      {/* 1. SECCIÓN INTRODUCTORIA Y DOS TIPOS DE BOMBAS */}
      <section className="section-container mb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] md:text-[11px] font-extrabold tracking-[0.2em] text-primary uppercase block">
            • {language === 'es' ? 'TECNOLOGÍA DE MAQUINARIA' : 'MACHINERY TECHNOLOGY'}
          </span>
          <h2 className="mt-3 text-2xl md:text-4xl font-bold tracking-tight text-text-primary uppercase leading-tight">
            {t('pump.intro.title')}
          </h2>
          <p className="mt-4 text-sm md:text-base text-text-secondary leading-relaxed">
            {t('pump.intro.desc')}
          </p>
        </div>

        {/* Side-by-Side Equipment Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Bomba Estacionaria */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col bg-surface/30 dark:bg-black/20 border border-border/80 dark:border-white/5 rounded-2xl overflow-hidden shadow-2xs hover:border-primary transition-all duration-300 group"
          >
            <div className="h-[240px] md:h-[280px] w-full relative overflow-hidden bg-surface">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-103"
                style={{ backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vaciado-Unimaxcorp-002-lCojy5wXyOYj9Fl3zxtJ0S1EpUHHYT.webp')" }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/20 to-transparent" />
            </div>
            <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1.5 h-3 bg-primary rounded-full" />
                  <h3 className="text-lg md:text-xl font-bold text-text-primary uppercase">
                    {t('pump.equipos.estacionaria.title')}
                  </h3>
                </div>
                <p className="text-xs md:text-sm text-text-secondary leading-relaxed">
                  {t('pump.equipos.estacionaria.desc')}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border/40 flex items-center gap-2.5 text-[11px] font-extrabold text-primary uppercase tracking-widest">
                <span>{language === 'es' ? 'LARGAS DISTANCIAS Y ALTURA' : 'LONG REACH & ELEVATION'}</span>
              </div>
            </div>
          </motion.div>

          {/* Bomba Pluma */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col bg-surface/30 dark:bg-black/20 border border-border/80 dark:border-white/5 rounded-2xl overflow-hidden shadow-2xs hover:border-primary transition-all duration-300 group"
          >
            <div className="h-[240px] md:h-[280px] w-full relative overflow-hidden bg-surface">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-103"
                style={{ backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/plnata-dosificadora-1-nBJ3KM7b2wgHOjE006GXWkj4cKEZ5k.webp')" }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/20 to-transparent" />
            </div>
            <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1.5 h-3 bg-primary rounded-full" />
                  <h3 className="text-lg md:text-xl font-bold text-text-primary uppercase">
                    {t('pump.equipos.pluma.title')}
                  </h3>
                </div>
                <p className="text-xs md:text-sm text-text-secondary leading-relaxed">
                  {t('pump.equipos.pluma.desc')}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border/40 flex items-center gap-2.5 text-[11px] font-extrabold text-primary uppercase tracking-widest">
                <span>{language === 'es' ? 'VACIADOS RÁPIDOS Y VERSÁTILES' : 'FAST & FLEXIBLE POURS'}</span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 2. VENTAJAS DE EFICIENCIA Y OPTIMIZACIÓN FINANCIERA */}
      <section className="bg-surface/50 border-y border-border/60 py-16 lg:py-24 mb-24 transition-colors duration-300">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Context Pitch text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 space-y-5"
            >
              <span className="text-[10px] md:text-[11px] font-extrabold tracking-[0.2em] text-primary uppercase block">
                • {language === 'es' ? 'OPTIMIZACIÓN FINANCIERA' : 'FINANCIAL STRATEGY'}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-text-primary uppercase leading-tight">
                {t('pump.ventajas.title')}
              </h3>
              <p className="text-xs md:text-sm text-text-secondary leading-relaxed">
                {t('pump.ventajas.desc')}
              </p>
              
              {/* Confirmed quote highlight */}
              <div className="p-5 rounded-xl border border-primary/20 bg-primary/5 dark:bg-primary/10 relative overflow-hidden select-none">
                <span className="absolute right-3 bottom-0 text-7xl font-display font-extrabold opacity-[0.04] text-primary select-none">
                  “
                </span>
                <p className="italic text-xs md:text-sm font-bold text-primary leading-relaxed relative z-10">
                  {t('pump.ventajas.quote')}
                </p>
              </div>
            </motion.div>

            {/* List of advantages */}
            <div className="lg:col-span-7 space-y-6">
              {advantages.map((adv, idx) => (
                <motion.div
                  key={adv.title}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="p-6 rounded-xl border border-border/80 bg-background hover:border-primary hover:shadow-xs transition-all duration-300 flex items-start gap-5 relative overflow-hidden"
                >
                  {/* Small gradient backdrop for icons */}
                  <div className={`absolute inset-0 bg-linear-to-r ${adv.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />
                  
                  <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 relative z-10">
                    <adv.icon size={22} />
                  </div>
                  <div className="relative z-10">
                    <h4 className="text-xs md:text-sm font-extrabold text-text-primary uppercase tracking-wide">
                      {adv.title}
                    </h4>
                    <p className="mt-2 text-xs md:text-sm text-text-muted leading-relaxed">
                      {adv.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 3. CALL TO ACTION FINAL */}
      <section className="section-container relative z-10" id="contacto-directo">
        <div className="relative bg-primary text-white rounded-2xl overflow-hidden p-8 md:p-12 lg:p-16 select-none shadow-2xl">
          {/* Subtle warmth background light */}
          <div 
            className="absolute inset-0 pointer-events-none" 
            style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.12), transparent 45%)' }}
          />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            <div className="max-w-2xl text-left">
              <span className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] text-white/70 uppercase block mb-3">
                • {language === 'es' ? 'CONSULTORÍA TÉCNICA' : 'TECHNICAL ADVISORY'}
              </span>
              <h3 className="text-2xl md:text-4xl font-display font-extrabold text-white tracking-wide uppercase leading-tight">
                {t('pump.cta.title')}
              </h3>
              <p className="mt-3 text-xs md:text-sm text-white/90 leading-relaxed font-light">
                {t('pump.cta.desc')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3.5 w-full lg:w-auto shrink-0">
              <a
                href="https://wa.me/51900000000" // Placeholder for Sales WhatsApp
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 bg-white text-primary px-8 h-12 rounded-md text-[11px] font-extrabold tracking-widest uppercase hover:bg-black hover:text-white transition-all duration-200 active:scale-95 shadow-md flex-1 sm:flex-none text-center"
              >
                <MessageSquare size={13} className="shrink-0" />
                {t('pump.cta.whatsapp')}
                <ArrowRight size={13} className="group-hover:translate-x-1.5 transition-transform shrink-0" />
              </a>
              
              <Link
                href="/#contacto"
                className="inline-flex items-center justify-center gap-2.5 h-12 px-6 md:px-8 text-[11px] font-extrabold tracking-widest uppercase bg-transparent text-white border-2 border-white/40 hover:bg-white/10 hover:border-white transition-all duration-200 rounded-md active:scale-95 flex-1 sm:flex-none text-center"
              >
                <PhoneCall size={13} />
                {language === 'es' ? 'CENTRAL COMERCIAL' : 'COMMERCIAL LINE'}
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
