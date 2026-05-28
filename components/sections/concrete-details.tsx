'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/components/language-provider'
import { 
  Check, 
  Settings, 
  Layers, 
  Sparkles, 
  ShieldAlert, 
  MessageSquare, 
  Download, 
  Lightning 
} from 'lucide-react'
import Link from 'next/link'

export function ConcreteDetails() {
  const { t, language } = useLanguage()

  // Granulometría data matching the screenshots
  const aggregates = [
    { 
      size: t('concrete.agregados.size1.title'), 
      desc: t('concrete.agregados.size1.desc'),
      label: '3/8"',
      gradient: 'from-amber-500/10 via-amber-500/5 to-transparent'
    },
    { 
      size: t('concrete.agregados.size2.title'), 
      desc: t('concrete.agregados.size2.desc'),
      label: '1/2"',
      gradient: 'from-primary/10 via-primary/5 to-transparent'
    },
    { 
      size: t('concrete.agregados.size3.title'), 
      desc: t('concrete.agregados.size3.desc'),
      label: '3/4"',
      gradient: 'from-blue-500/10 via-blue-500/5 to-transparent'
    }
  ]

  // Applications data matching the screenshots
  const apps = [
    { title: t('concrete.aplicaciones.cimentacion.title'), desc: t('concrete.aplicaciones.cimentacion.desc'), tag: '01' },
    { title: t('concrete.aplicaciones.estructuras.title'), desc: t('concrete.aplicaciones.estructuras.desc'), tag: '02' },
    { title: t('concrete.aplicaciones.losas.title'), desc: t('concrete.aplicaciones.losas.desc'), tag: '03' },
    { title: t('concrete.aplicaciones.pavimentos.title'), desc: t('concrete.aplicaciones.pavimentos.desc'), tag: '04' }
  ]

  // Technical table rows matching the screenshots
  const tableRows = [
    { fc: '100 – 140', app: language === 'es' ? 'Ideal para elementos de relleno, falsos pisos, solados y concreto ciclópeo.' : 'Ideal for filling elements, subfloors, blinding concrete, and cyclopean concrete.' },
    { fc: '175 – 210', app: language === 'es' ? 'El estándar residencial. Utilizado en cimientos, columnas, vigas y losas aligeradas.' : 'The residential standard. Used in foundations, columns, beams, and lightweight slabs.' },
    { fc: '245 – 280', app: language === 'es' ? 'Resistencia moderada-alta. Para mayores luces, pavimentos rígidos y edificios de varios niveles.' : 'Moderate-high strength. For wider spans, rigid pavements, and multi-story buildings.' },
    { fc: '315 – 350', app: language === 'es' ? 'Alta resistencia para infraestructura, placas de edificios altos y ambientes agresivos.' : 'High strength for infrastructure, high-rise shear walls, and aggressive environments.' }
  ]

  return (
    <div className="bg-background grain py-16 lg:py-24 relative overflow-hidden">
      
      {/* ========================================================================= */}
      {/* CAPTURA 1: TRES AÑOS DE COMPROMISO CON LA INFRAESTRUCTURA + METRICAS       */}
      {/* ========================================================================= */}
      <section className="section-container mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Text Block */}
          <motion.div 
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 p-6 md:p-8 rounded-2xl border border-border/80 dark:border-white/5 bg-surface/35 backdrop-blur-md space-y-5 shadow-xs"
          >
            <h2 className="text-2xl md:text-4.5xl font-display font-extrabold tracking-wide text-text-primary uppercase leading-tight">
              {t('concrete.commitment.title')}
            </h2>
            <p className="text-sm md:text-base text-text-secondary leading-relaxed font-sans">
              {t('concrete.commitment.desc1')}
            </p>
            <p className="text-sm md:text-base text-text-secondary leading-relaxed font-sans">
              {t('concrete.commitment.desc2')}
            </p>
          </motion.div>

          {/* Right Metrics Block */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-row items-center justify-around gap-4"
          >
            {[
              { val: t('concrete.commitment.metric1.val'), label: t('concrete.commitment.metric1.label'), desc: 'M3' },
              { val: t('concrete.commitment.metric2.val'), label: t('concrete.commitment.metric2.label'), desc: 'Obras' },
              { val: t('concrete.commitment.metric3.val'), label: t('concrete.commitment.metric3.label'), desc: 'Clientes' }
            ].map((metric, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                {/* Circular indicator container */}
                <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full border-3 border-primary/20 flex flex-col items-center justify-center bg-surface select-none shadow-xs group hover:border-primary transition-colors duration-300">
                  <div className="absolute inset-1 rounded-full border border-dashed border-primary/10 group-hover:border-primary/30" />
                  <span className="text-lg md:text-xl font-display font-extrabold text-primary tracking-wide">
                    {metric.val}
                  </span>
                  <span className="text-[7px] md:text-[8px] font-bold tracking-widest text-text-muted uppercase mt-0.5">
                    {metric.desc}
                  </span>
                </div>
                <span className="text-[9px] md:text-[10px] font-extrabold tracking-wider text-text-secondary mt-3 uppercase max-w-[90px] leading-snug">
                  {metric.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Captura 1 Quote block */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-center max-w-4xl mx-auto"
        >
          <p className="italic text-xs md:text-base font-medium text-text-muted leading-relaxed relative py-4 px-6 border-l-2 border-primary/45 bg-surface/30 dark:bg-white/5 rounded-r-xl max-w-2xl mx-auto">
            {t('concrete.commitment.quote')}
          </p>
        </motion.div>
      </section>

      {/* ========================================================================= */}
      {/* CAPTURA 2: VERSATILIDAD Y ESPECIFICACIONES TÉCNICAS                       */}
      {/* ========================================================================= */}
      <section className="bg-surface/50 dark:bg-black/20 border-y border-border/60 py-16 lg:py-24 mb-24 transition-colors duration-300">
        <div className="section-container">
          {/* Banner Title */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] md:text-[11px] font-extrabold tracking-[0.25em] text-primary uppercase block">
              • {language === 'es' ? 'CALIDAD CERTIFICADA' : 'CERTIFIED QUALITY'}
            </span>
            <h3 className="mt-3 text-2xl md:text-4.5xl font-display font-extrabold tracking-wide text-text-primary uppercase leading-tight">
              {t('concrete.versatility.title')}
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left Side: Resistencia & Dosificación */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 space-y-6"
            >
              <h4 className="text-lg md:text-xl font-bold tracking-tight text-text-primary uppercase border-l-2 border-primary pl-4">
                {t('concrete.versatility.subtitle')}
              </h4>
              <p className="text-xs md:text-sm text-text-secondary leading-relaxed font-sans">
                {t('concrete.versatility.desc')}
              </p>

              {/* Active Box Dosificación Controlada */}
              <div className="p-6 rounded-xl border border-primary/25 bg-linear-to-br from-primary/10 via-primary/5 to-transparent shadow-xs space-y-3 relative overflow-hidden">
                <div className="absolute right-4 top-4 text-primary/10 select-none">
                  <Check size={48} strokeWidth={1} />
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-white shrink-0 shadow-sm">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <h5 className="text-xs md:text-sm font-extrabold text-text-primary uppercase tracking-wider">
                    {t('concrete.versatility.dosificacion.title')}
                  </h5>
                </div>
                <p className="text-[11px] md:text-xs text-text-secondary leading-relaxed font-sans">
                  {t('concrete.versatility.dosificacion.desc')}
                </p>
              </div>
            </motion.div>

            {/* Right Side: Specifications Table Displayed DIRECTLY */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 rounded-xl border border-border/80 bg-background overflow-hidden shadow-xs"
            >
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface/80 border-b border-border/85">
                    <th className="py-4 px-5 text-[10px] md:text-xs font-bold uppercase tracking-wider text-text-primary">
                      {language === 'es' ? 'Clasificación Fc (Kg/cm²)' : 'Fc Classification (Kg/cm²)'}
                    </th>
                    <th className="py-4 px-5 text-[10px] md:text-xs font-bold uppercase tracking-wider text-text-primary">
                      {language === 'es' ? 'Aplicación Sugerida' : 'Suggested Application'}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60 text-xs md:text-sm">
                  {tableRows.map((row) => (
                    <tr key={row.fc} className="hover:bg-surface/30 transition-colors">
                      <td className="py-4.5 px-5 font-mono font-bold text-primary text-sm whitespace-nowrap">
                        {row.fc}
                      </td>
                      <td className="py-4.5 px-5 text-text-secondary leading-relaxed font-sans">
                        {row.app}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* CAPTURA 3: CONCRETO RESISTENCIA ACELERADA E ADITIVOS PLASTIFICANTES SPLIT */}
      {/* ========================================================================= */}
      <section className="section-container mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Resistencia Acelerada */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="flex items-center gap-3 border-b border-border/40 pb-4 mb-4">
              <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                ⚡
              </span>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-text-primary uppercase">
                {t('concrete.accel.title')}
              </h3>
            </div>

            <div className="space-y-6">
              {[
                { label: t('concrete.accel.item3'), desc: t('concrete.accel.desc3') },
                { label: t('concrete.accel.item7'), desc: t('concrete.accel.desc7') },
                { label: t('concrete.accel.item14'), desc: t('concrete.accel.desc14') }
              ].map((item, idx) => (
                <div key={idx} className="relative pl-6 border-l-2 border-primary/20 hover:border-primary transition-all duration-300">
                  <h4 className="text-xs md:text-sm font-extrabold text-primary uppercase tracking-wide">
                    {item.label}
                  </h4>
                  <p className="mt-1 text-xs md:text-sm text-text-secondary leading-relaxed font-sans">
                    <span className="font-bold text-text-primary block sm:inline mr-1">{language === 'es' ? 'Propósito:' : 'Purpose:'}</span>
                    {language === 'es' ? 'Máxima velocidad de ejecución. Ideal para reparaciones urgentes y alta rotación de encofrado.' : 'Maximum execution speed. Ideal for urgent repairs and high formwork turnover.'}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Aditivos Plastificantes Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 p-6 md:p-8 rounded-2xl border border-border/80 dark:border-white/5 bg-surface/30 backdrop-blur-md shadow-xs space-y-6"
          >
            <div className="flex items-center gap-3 pb-3 border-b border-border/40">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                🧪
              </div>
              <div>
                <h3 className="text-base md:text-lg font-bold tracking-wide text-text-primary uppercase leading-tight">
                  {t('concrete.aditivos.title')}
                </h3>
                <p className="text-[11px] text-text-muted mt-0.5 font-sans">
                  {t('concrete.aditivos.desc')}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              {[
                { title: t('concrete.aditivos.colocacion.title'), desc: t('concrete.aditivos.colocacion.desc'), icon: Layers },
                { title: t('concrete.aditivos.bombeo.title'), desc: t('concrete.aditivos.bombeo.desc'), icon: Settings },
                { title: t('concrete.aditivos.cara.title'), desc: t('concrete.aditivos.cara.desc'), icon: Sparkles },
                { title: t('concrete.aditivos.durabilidad.title'), desc: t('concrete.aditivos.durabilidad.desc'), icon: ShieldAlert }
              ].map((ad, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0 mt-0.5">
                    <Check size={12} strokeWidth={2.5} />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-text-primary uppercase block tracking-wider">
                      {ad.title}
                    </span>
                    <span className="text-[11px] text-text-muted leading-relaxed mt-0.5 block font-sans">
                      {ad.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* CAPTURA 4: GRANULOMETRÍA Y SELECCIÓN DE AGREGADOS                          */}
      {/* ========================================================================= */}
      <section className="bg-surface/30 border-t border-border/40 py-16 lg:py-24 mb-20 transition-colors duration-300">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] md:text-[11px] font-extrabold tracking-[0.2em] text-primary uppercase block">
              • {language === 'es' ? 'GRANULOMETRÍA' : 'GRADATION'}
            </span>
            <h3 className="mt-3 text-2xl md:text-4.5xl font-display font-extrabold tracking-wide text-text-primary uppercase leading-tight">
              {t('concrete.agregados.title')}
            </h3>
            <p className="mt-4 text-sm md:text-base text-text-secondary leading-relaxed font-sans">
              {t('concrete.agregados.desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {aggregates.map((ag, idx) => (
              <motion.div
                key={ag.size}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="p-6 lg:p-8 rounded-xl border border-border/80 dark:border-white/5 bg-background shadow-xs hover:border-primary transition-all duration-300 relative overflow-hidden group flex flex-col justify-between min-h-[240px]"
              >
                {/* Glow Background */}
                <div className={`absolute inset-0 bg-linear-to-br ${ag.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4 border-b border-border/40 pb-3">
                    <h4 className="text-xs md:text-sm font-extrabold text-text-primary uppercase">
                      {ag.size}
                    </h4>
                    <span className="px-2.5 py-1 rounded bg-surface border border-border/85 text-[10px] font-extrabold font-mono text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      {ag.label}
                    </span>
                  </div>
                  <p className="text-xs md:text-sm text-text-secondary leading-relaxed font-sans">
                    {ag.desc}
                  </p>
                </div>
                <div className="w-6 h-6 rounded-full border border-border/80 dark:border-white/10 flex items-center justify-center text-text-muted group-hover:text-primary group-hover:border-primary transition-colors duration-300 relative z-10">
                  <Check size={12} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CAPTURA 4 PARTE INFERIOR: SOLUCIONES PARA CADA ETAPA DE SU PROYECTO       */}
      {/* ========================================================================= */}
      <section className="section-container mb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] md:text-[11px] font-extrabold tracking-[0.2em] text-primary uppercase block">
            • {language === 'es' ? 'ALCANCE TÉCNICO' : 'TECHNICAL RANGE'}
          </span>
          <h3 className="mt-3 text-2xl md:text-4.5xl font-display font-extrabold tracking-wide text-text-primary uppercase leading-tight">
            {t('concrete.applications.banner')}
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {apps.map((app, idx) => (
            <motion.div
              key={app.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 rounded-xl border border-border/85 dark:border-white/5 bg-surface/30 dark:bg-black/15 shadow-2xs hover:bg-background dark:hover:bg-background hover:border-primary transition-all duration-300 flex flex-col justify-between min-h-[190px]"
            >
              <div>
                <span className="font-mono text-xs font-bold text-primary block border-b border-border/40 pb-2 mb-3">
                  {app.tag}
                </span>
                <h4 className="text-xs md:text-sm font-extrabold text-text-primary uppercase">
                  {app.title}
                </h4>
                <p className="mt-2.5 text-xs text-text-secondary leading-relaxed font-sans">
                  {app.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECCIÓN FINAL: LEAD GENERATION CTA                                        */}
      {/* ========================================================================= */}
      <section className="section-container relative z-10" id="contacto-directo">
        <div className="relative bg-[#0E1419] rounded-2xl overflow-hidden border border-primary/20 dark:border-primary/30 p-8 md:p-12 lg:p-16 select-none shadow-2xl">
          {/* Subtle warmth background light */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(193,61,58,0.14),transparent_40%)] pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            <div className="max-w-2xl text-left">
              <span className="text-[10px] md:text-[11px] font-extrabold tracking-[0.2em] text-primary uppercase block mb-3">
                • {language === 'es' ? 'SOLICITAR DISEÑO' : 'REQUEST DESIGN'}
              </span>
              <h3 className="text-2xl md:text-4xl font-display font-extrabold text-white tracking-wide uppercase leading-tight">
                {t('concrete.cta.title')}
              </h3>
              <p className="mt-3 text-xs md:text-sm text-white/70 leading-relaxed">
                {t('concrete.cta.desc')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3.5 w-full lg:w-auto shrink-0">
              <a
                href="https://wa.me/51900000000" // Placeholder for Sales WhatsApp
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 h-12 px-6 md:px-8 text-[11px] font-extrabold tracking-widest uppercase bg-primary text-white hover:bg-cta-hover transition-all duration-200 rounded-md active:scale-95 shadow-md flex-1 sm:flex-none text-center"
              >
                <MessageSquare size={13} />
                {t('concrete.cta.whatsapp')}
              </a>
              
              <Link
                href="/#contacto"
                className="inline-flex items-center justify-center gap-2.5 h-12 px-6 md:px-8 text-[11px] font-extrabold tracking-widest uppercase bg-transparent text-white border border-white/20 hover:bg-white/5 hover:border-white/40 transition-all duration-200 rounded-md active:scale-95 flex-1 sm:flex-none text-center"
              >
                <Download size={13} />
                {t('concrete.cta.brochure')}
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
