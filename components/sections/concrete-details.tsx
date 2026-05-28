'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/components/language-provider'
import { 
  Settings, 
  Download, 
  FlaskConical,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'

export function ConcreteDetails() {
  const { t, language } = useLanguage()

  // Granulometría data
  const aggregates = [
    { 
      size: t('concrete.agregados.size1.title'), 
      desc: t('concrete.agregados.size1.desc'),
      label: '3/8"',
      width: '33%',
    },
    { 
      size: t('concrete.agregados.size2.title'), 
      desc: t('concrete.agregados.size2.desc'),
      label: '1/2"',
      width: '66%',
    },
    { 
      size: t('concrete.agregados.size3.title'), 
      desc: t('concrete.agregados.size3.desc'),
      label: '3/4"',
      width: '100%',
    }
  ]

  // Applications
  const apps = [
    { title: t('concrete.aplicaciones.cimentacion.title'), desc: t('concrete.aplicaciones.cimentacion.desc'), tag: '01' },
    { title: t('concrete.aplicaciones.estructuras.title'), desc: t('concrete.aplicaciones.estructuras.desc'), tag: '02' },
    { title: t('concrete.aplicaciones.losas.title'), desc: t('concrete.aplicaciones.losas.desc'), tag: '03' },
    { title: t('concrete.aplicaciones.pavimentos.title'), desc: t('concrete.aplicaciones.pavimentos.desc'), tag: '04' }
  ]

  // Technical table rows
  const tableRows = [
    { fc: '100–140', unit: 'kg/cm²', app: language === 'es' ? 'Ideal para elementos de relleno, falsos pisos, solados y concreto ciclópeo.' : 'Ideal for filling elements, subfloors, blinding concrete, and cyclopean concrete.' },
    { fc: '175–210', unit: 'kg/cm²', app: language === 'es' ? 'El estándar residencial. Utilizado en cimientos, columnas, vigas y losas aligeradas.' : 'The residential standard. Used in foundations, columns, beams, and lightweight slabs.' },
    { fc: '245–280', unit: 'kg/cm²', app: language === 'es' ? 'Resistencia moderada-alta. Para mayores luces, pavimentos rígidos y edificios de varios niveles.' : 'Moderate-high strength. For wider spans, rigid pavements, and multi-story buildings.' },
    { fc: '315–350', unit: 'kg/cm²', app: language === 'es' ? 'Alta resistencia para infraestructura, placas de edificios altos y ambientes agresivos.' : 'High strength for infrastructure, high-rise shear walls, and aggressive environments.' }
  ]

  /* ── Shared card styles ──────────────────────────────────────────────── */
  const card = 'rounded-xl bg-white dark:bg-white/5 border border-neutral-200/70 dark:border-white/10 shadow-[0_1px_3px_rgba(0,0,0,0.06),0_6px_24px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.15)] hover:shadow-[0_2px_8px_rgba(0,0,0,0.08),0_12px_36px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_12px_40px_rgb(0,0,0,0.25)] hover:border-neutral-300 dark:hover:border-white/20 transition-all duration-300 relative overflow-hidden group'

  const cardInner = 'rounded-lg bg-neutral-50/80 dark:bg-white/5 border border-neutral-200/50 dark:border-white/10'

  return (
    <div className="bg-background text-text-primary py-12 lg:py-32 relative overflow-hidden font-sans selection:bg-primary selection:text-white grain">

      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 xl:px-20 relative z-10">
        
        {/* ========================================================================= */}
        {/* SECTION 1: EDITORIAL HEADER & METRICS                                     */}
        {/* ========================================================================= */}
        <section className="mb-20 lg:mb-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start border-b border-border/40 pb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[2px] w-8 bg-primary"></div>
                <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-primary">
                  {language === 'es' ? 'Especificaciones Técnicas' : 'Technical Specifications'}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-[1.15] tracking-tight text-text-primary text-balance uppercase">
                {t('concrete.commitment.title')}
              </h2>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
                <p className="text-sm text-text-secondary leading-relaxed font-light">
                  {t('concrete.commitment.desc1')}
                </p>
                <p className="text-sm text-text-secondary leading-relaxed font-light">
                  {t('concrete.commitment.desc2')}
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="lg:col-span-4 flex flex-col gap-4 w-full"
            >
              {[
                { val: t('concrete.commitment.metric1.val'), label: t('concrete.commitment.metric1.label'), unit: 'M³' },
                { val: t('concrete.commitment.metric2.val'), label: t('concrete.commitment.metric2.label'), unit: 'OBRAS' },
                { val: t('concrete.commitment.metric3.val'), label: t('concrete.commitment.metric3.label'), unit: 'CLIENTES' }
              ].map((metric, index) => (
                <div 
                  key={index} 
                  className={`${card} p-5 flex justify-between items-center`}
                >
                  <div className="relative z-10">
                    <span className="text-[10px] font-bold tracking-widest text-primary block mb-1">
                      {metric.unit}
                    </span>
                    <span className="text-xs font-bold tracking-wider text-text-secondary uppercase">
                      {metric.label}
                    </span>
                  </div>
                  <span className="relative z-10 text-3xl font-bold tracking-tight text-text-primary group-hover:text-primary transition-colors">
                    {metric.val}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 max-w-4xl"
          >
            <p className="text-lg md:text-xl font-light italic text-text-muted leading-relaxed">
              "{t('concrete.commitment.quote')}"
            </p>
          </motion.div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: DATASHEET TABLE & CONTROLLED MIX                               */}
        {/* ========================================================================= */}
        <section className="mb-20 lg:mb-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            {/* Left Box: Info Card */}
            <div className={`lg:col-span-4 ${card} p-8 flex flex-col justify-between`}>
              
              <div className="relative z-10">
                <span className="text-[10px] font-bold tracking-widest text-primary mb-4 block uppercase">
                  {language === 'es' ? 'Ficha de Diseño' : 'Design Sheet'}
                </span>
                <h3 className="text-xl md:text-2xl font-bold uppercase leading-snug mb-4 text-text-primary">
                  {t('concrete.versatility.title')}
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed mb-8">
                  {t('concrete.versatility.desc')}
                </p>
              </div>
              
              <div className={`relative z-10 ${cardInner} p-5 mt-4`}>
                <div className="w-10 h-10 rounded-lg bg-white dark:bg-white/10 border border-neutral-200/70 dark:border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm mb-4">
                  <Settings className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <h4 className="text-xs font-bold tracking-wider uppercase mb-2 text-text-primary">
                  {t('concrete.versatility.dosificacion.title')}
                </h4>
                <p className="text-[11px] text-text-muted leading-relaxed">
                  {t('concrete.versatility.dosificacion.desc')}
                </p>
              </div>
            </div>

            {/* Right Box: Specifications Table */}
            <div className={`lg:col-span-8 ${card} flex flex-col`}>
              <div className="border-b border-neutral-200/60 dark:border-white/10 p-5 flex justify-between items-center bg-neutral-50/50 dark:bg-black/20 rounded-t-xl">
                <span className="text-[11px] font-bold tracking-[0.15em] text-text-secondary uppercase">
                  {language === 'es' ? 'Clasificación F\'C' : 'F\'C Classification'}
                </span>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                  <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider">Activo</span>
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-center divide-y divide-neutral-100 dark:divide-white/5">
                {tableRows.map((row, idx) => (
                  <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-4 p-5 hover:bg-neutral-50/60 dark:hover:bg-white/2 transition-colors items-center group/row">
                    <div className="md:col-span-4 flex items-baseline gap-2">
                      <span className="text-2xl font-bold tracking-tight text-text-primary group-hover/row:text-primary transition-colors">
                        {row.fc}
                      </span>
                      <span className="text-[10px] font-bold text-text-muted">{row.unit}</span>
                    </div>
                    <div className="md:col-span-8">
                      <p className="text-xs text-text-secondary leading-relaxed font-light">
                        {row.app}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: ACCELERATED PERFORMANCE                                        */}
        {/* ========================================================================= */}
        <section className="mb-20 lg:mb-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Left Block: Strength Milestones */}
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-bold tracking-widest text-primary mb-3 block uppercase">
                  {language === 'es' ? 'Rendimiento Acelerado' : 'Accelerated Performance'}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold uppercase leading-tight mb-4 text-text-primary">
                  {t('concrete.accel.title')}
                </h3>
                <p className="text-xs md:text-sm text-text-secondary font-light">
                  {t('concrete.accel.subtitle')}
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {[
                  { label: t('concrete.accel.item3'), desc: t('concrete.accel.desc3'), tag: '03', unit: 'DAYS' },
                  { label: t('concrete.accel.item7'), desc: t('concrete.accel.desc7'), tag: '07', unit: 'DAYS' },
                  { label: t('concrete.accel.item14'), desc: t('concrete.accel.desc14'), tag: '14', unit: 'DAYS' }
                ].map((item, idx) => (
                  <div key={idx} className={`${card} p-5 flex gap-6 items-center`}>
                    
                    <div className={`text-center shrink-0 w-16 h-16 ${cardInner} flex flex-col justify-center items-center`}>
                      <span className="text-2xl font-bold tracking-tight text-primary leading-none">
                        {item.tag}
                      </span>
                      <span className="text-[8px] font-bold text-text-muted tracking-widest mt-1 block">
                        {item.unit}
                      </span>
                    </div>
                    
                    <div className="relative z-10 flex-1">
                      <h4 className="text-xs font-bold uppercase tracking-wider mb-1 text-text-primary">
                        {item.label}
                      </h4>
                      <p className="text-xs text-text-secondary leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Block: Additives Details */}
            <div className={`${card} p-8 flex flex-col justify-between`}>
              
              <div className="mb-8 relative z-10">
                <div className="w-12 h-12 rounded-lg bg-white dark:bg-white/10 border border-neutral-200/70 dark:border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                  <FlaskConical className="w-5 h-5 animate-pulse" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold uppercase tracking-wide mb-3 text-text-primary">
                  {t('concrete.aditivos.title')}
                </h3>
                <p className="text-xs text-text-muted font-light leading-relaxed">
                  {t('concrete.aditivos.desc')}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                {[
                  { title: t('concrete.aditivos.colocacion.title'), desc: t('concrete.aditivos.colocacion.desc') },
                  { title: t('concrete.aditivos.bombeo.title'), desc: t('concrete.aditivos.bombeo.desc') },
                  { title: t('concrete.aditivos.cara.title'), desc: t('concrete.aditivos.cara.desc') },
                  { title: t('concrete.aditivos.durabilidad.title'), desc: t('concrete.aditivos.durabilidad.desc') }
                ].map((ad, idx) => (
                  <div key={idx} className={`${cardInner} p-4 hover:bg-neutral-100/80 dark:hover:bg-white/10 transition-all duration-300 flex flex-col h-full`}>
                    <span className="text-[10px] font-bold text-primary mb-2 block">
                      0{idx + 1}
                    </span>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-text-primary mb-1">
                      {ad.title}
                    </h4>
                    <p className="text-[11px] text-text-secondary leading-relaxed">
                      {ad.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: AGGREGATE GAUGES                                               */}
        {/* ========================================================================= */}
        <section className="mb-20 lg:mb-32 relative z-10 border-t border-border/40 pt-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <span className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase block mb-3">
                {language === 'es' ? 'Análisis de Malla' : 'Sieve Analysis'}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold uppercase leading-tight text-text-primary">
                {t('concrete.agregados.title')}
              </h3>
            </div>
            <p className="text-xs text-text-muted font-light max-w-sm md:text-right">
              {t('concrete.agregados.desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {aggregates.map((ag, idx) => (
              <motion.div
                key={ag.size}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`${card} p-6 flex flex-col justify-between`}
              >
                
                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-text-primary">
                      {ag.size}
                    </span>
                    <span className="text-xl font-bold text-primary">
                      {ag.label}
                    </span>
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed h-16">
                    {ag.desc}
                  </p>
                </div>

                <div className="mt-8 relative z-10">
                  <div className="flex justify-between text-[8px] font-bold text-text-muted mb-2 tracking-wider">
                    <span>MIN</span>
                    <span>MAX</span>
                  </div>
                  <div className="h-2 bg-neutral-100 dark:bg-white/5 border border-neutral-200/50 dark:border-white/10 rounded-full w-full relative overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: ag.width }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                      className="absolute top-0 left-0 h-full bg-primary rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: APPLICATIONS                                                   */}
        {/* ========================================================================= */}
        <section className="mb-20 lg:mb-32 relative z-10">
          <h3 className="text-xl md:text-2xl font-bold uppercase mb-10 text-text-primary">
            {t('concrete.applications.banner')}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {apps.map((app) => (
              <div 
                key={app.tag} 
                className={`${card} p-6 flex flex-col h-full`}
              >
                <span className="text-3xl font-bold text-neutral-200 dark:text-white/10 group-hover:text-neutral-300 dark:group-hover:text-white/20 transition-colors mb-4 block relative z-10">
                  {app.tag}
                </span>
                <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-3 relative z-10">
                  {app.title}
                </h4>
                <p className="text-xs text-text-secondary leading-relaxed relative z-10 mt-auto">
                  {app.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 6: CONVERSION CTA                                                 */}
        {/* ========================================================================= */}
        <section className="relative z-10" id="contacto-directo">
          <div className="rounded-xl bg-primary text-white p-8 md:p-14 lg:p-16 flex flex-col lg:flex-row justify-between items-center gap-8 md:gap-12 relative overflow-hidden">
            <div 
              className="absolute inset-0 pointer-events-none" 
              style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.12), transparent 45%)' }}
            />
            
            <div className="max-w-2xl relative z-10 text-center lg:text-left">
              <span className="text-[10px] font-bold tracking-[0.2em] text-white/70 uppercase block mb-3">
                {language === 'es' ? 'Soporte de Ingeniería' : 'Engineering Support'}
              </span>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight mb-3">
                {t('concrete.cta.title')}
              </h3>
              <p className="text-xs md:text-sm font-light text-white/90">
                {t('concrete.cta.desc')}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row lg:flex-col w-full sm:w-auto gap-4 shrink-0 relative z-10">
              <a
                href="https://wa.me/51900000000"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-6 bg-white text-primary px-8 h-12 rounded-md text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all active:scale-95 shadow-sm"
              >
                {t('concrete.cta.whatsapp')}
                <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
              </a>
              <Link
                href="/#contacto"
                className="group flex items-center justify-center gap-6 bg-transparent border-2 border-white/40 text-white px-8 h-12 rounded-md text-xs font-bold uppercase tracking-widest hover:bg-white/10 hover:border-white transition-all active:scale-95"
              >
                {t('concrete.cta.brochure')}
                <Download size={14} />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
