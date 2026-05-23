'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/components/language-provider'
import { useTheme } from 'next-themes'

const navLinks = [
  { href: '#soluciones', key: 'nav.soluciones' },
  { href: '#productos', key: 'nav.productos' },
  { href: '#servicios', key: 'nav.servicios' },
  { href: '#plantas', key: 'nav.plantas' },
  { href: '#contacto', key: 'nav.contacto' },
]

export function Footer() {
  const { t, language } = useLanguage()
  const { theme } = useTheme()

  return (
    <footer className="relative w-full">
      {/* LEVEL 1: Upper CTA Band (Cement tone in light mode / Carbon in dark mode) */}
      <div className="relative bg-[#F4F1ED] dark:bg-[#0A0F14] border-t border-t-primary/50 dark:border-t-primary/70 border-b border-b-black/5 dark:border-b-white/10 overflow-hidden py-10 md:py-12 select-none transition-colors duration-300">
        {/* Soft warmth radial glow */}
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(193,61,58,0.06),transparent_32%)] dark:bg-[radial-gradient(circle_at_80%_20%,rgba(193,61,58,0.18),transparent_32%)] pointer-events-none" 
        />
        
        <div className="relative z-10 section-container flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-12">
          {/* Commercial pitch text */}
          <div className="max-w-3xl">
            <h3 className="text-2xl md:text-3xl font-display font-extrabold tracking-wide text-neutral-900 dark:text-white uppercase leading-tight">
              {language === 'es' 
                ? 'Concreto premezclado para proyectos exigentes en Lima' 
                : 'Ready-mix concrete for demanding projects in Lima'}
            </h3>
            <p className="mt-2 text-sm md:text-base text-neutral-600 dark:text-white/65 leading-relaxed">
              {language === 'es'
                ? 'Coordina tu despacho con una planta operativa cerca de tu obra y recibe atención especializada para tu proyecto.'
                : 'Coordinate your dispatch with an operational plant near your site and receive specialized attention for your project.'}
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-row flex-wrap gap-4 shrink-0 w-full lg:w-auto">
            <Link
              href="#contacto"
              className="inline-flex items-center justify-center h-12 px-6 text-[11px] font-extrabold tracking-widest uppercase bg-primary text-white hover:bg-cta-hover transition-all duration-200 rounded-md active:scale-95 shadow-md text-center"
            >
              {language === 'es' ? 'COTIZAR PROYECTO' : 'QUOTE PROJECT'}
            </Link>
            <Link
              href="#soluciones"
              className="inline-flex items-center justify-center h-12 px-6 text-[11px] font-extrabold tracking-widest uppercase bg-transparent text-neutral-900 dark:text-white border border-neutral-900/20 dark:border-white/20 hover:bg-neutral-900/5 dark:hover:bg-white/5 hover:border-neutral-900/40 dark:hover:border-white/45 transition-all duration-200 rounded-md active:scale-95 text-center"
            >
              {language === 'es' ? 'VER SERVICIOS' : 'VIEW SERVICES'}
            </Link>
          </div>
        </div>
      </div>

      {/* LEVEL 2: Main Corporate Footer (Warm-concrete light mode / Deep carbon dark mode) */}
      <div className="bg-[#FBFBFA] dark:bg-[#080C10] text-[#0A0F14] dark:text-white py-16 border-t border-black/5 dark:border-white/5 relative z-10 transition-colors duration-300">
        <div className="section-container">
          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
            
            {/* Column 1: Logo & Slogan + Direct Contact */}
            <div className="md:col-span-12 lg:col-span-4 flex flex-col items-start gap-4">
              <Link href="#hero" className="inline-flex items-center">
                <Image
                  src={theme === 'light' ? '/logo_unimx_light.png' : '/logo_unimx-removebg-preview.png'}
                  alt="UNIMAX Corp"
                  width={140}
                  height={52}
                  className="h-11 w-auto object-contain select-none transition-all duration-300"
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                />
              </Link>
              <p className="text-sm text-neutral-600 dark:text-white/50 leading-relaxed max-w-sm">
                {t('footer.slogan')}
              </p>
              
              {/* Confirmed General Contact Info */}
              <div className="mt-6 flex flex-col gap-3 text-xs text-neutral-500 dark:text-white/60">
                <div className="flex items-center gap-2.5">
                  <span className="text-primary text-xs">🏢</span>
                  <span className="leading-relaxed">
                    {language === 'es' ? 'Atención comercial para obras y proyectos' : 'Commercial service for works and projects'}
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-primary text-xs">📍</span>
                  <span>Lima, Perú</span>
                </div>
                <div className="flex items-center gap-2.5 font-mono text-[10px] opacity-75 mt-1">
                  <span>RUC: 20608552190</span>
                </div>
              </div>
            </div>

            {/* Column 2: Navigation Links */}
            <div className="col-span-6 md:col-span-4 lg:col-span-2 flex flex-col items-start gap-4 lg:pl-6">
              <h4 className="text-xs font-extrabold tracking-widest text-neutral-900 dark:text-white uppercase mb-2 border-l-2 border-primary pl-3">
                {language === 'es' ? 'Navegación' : 'Navigation'}
              </h4>
              <ul className="flex flex-col gap-3 text-xs text-neutral-600 dark:text-white/50">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href} 
                      className="hover:text-primary transition-colors duration-200"
                    >
                      {t(link.key)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Solutions Grid */}
            <div className="col-span-6 md:col-span-4 lg:col-span-3 flex flex-col items-start gap-4">
              <h4 className="text-xs font-extrabold tracking-widest text-neutral-900 dark:text-white uppercase mb-2 border-l-2 border-primary pl-3">
                {language === 'es' ? 'Soluciones' : 'Solutions'}
              </h4>
              <ul className="flex flex-col gap-3 text-xs text-neutral-600 dark:text-white/50">
                <li>
                  <Link href="#soluciones" className="hover:text-primary transition-colors duration-200">
                    {language === 'es' ? 'Concreto Premezclado' : 'Ready-Mix Concrete'}
                  </Link>
                </li>
                <li>
                  <Link href="#servicios" className="hover:text-primary transition-colors duration-200">
                    {language === 'es' ? 'Alquiler de Bomba y Maquinaria' : 'Pump & Heavy Machinery Rental'}
                  </Link>
                </li>
                <li>
                  <Link href="#soluciones" className="hover:text-primary transition-colors duration-200">
                    {language === 'es' ? 'Diseño de Mezcla / Laboratorio' : 'Mix Design / Laboratory Service'}
                  </Link>
                </li>
                <li>
                  <Link href="#servicios" className="hover:text-primary transition-colors duration-200">
                    {language === 'es' ? 'Logística Inteligente' : 'Smart Logistics'}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Calidad & Garantía */}
            <div className="md:col-span-12 lg:col-span-3 flex flex-col items-start gap-4">
              <h4 className="text-xs font-extrabold tracking-widest text-neutral-900 dark:text-white uppercase mb-2 border-l-2 border-primary pl-3">
                {language === 'es' ? 'Garantía & Confianza' : 'Warranty & Trust'}
              </h4>
              <ul className="flex flex-col gap-3.5 text-xs text-neutral-600 dark:text-white/50">
                <li className="flex items-start gap-2.5">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>
                    {language === 'es' 
                      ? 'Más de 25 años construyendo el desarrollo del país.' 
                      : 'Over 25 years building the country\'s development.'}
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>
                    {language === 'es' 
                      ? '4 plantas dosificadoras estratégicamente ubicadas.' 
                      : '4 strategically located batching plants.'}
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>
                    {language === 'es' 
                      ? 'Despacho continuo y control de calidad integral.' 
                      : 'Continuous dispatch and comprehensive quality control.'}
                  </span>
                </li>
              </ul>
            </div>
            
          </div>

          {/* LEVEL 3: Legal Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500 dark:text-white/40">
            <p className="text-center md:text-left">
              {t('footer.rights')}
            </p>
            <div className="flex items-center gap-6">
              <Link href="#" className="hover:text-primary dark:hover:text-white transition-colors duration-200">
                {t('footer.privacy')}
              </Link>
              <Link href="#" className="hover:text-white transition-colors duration-200">
                {t('footer.terms')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
