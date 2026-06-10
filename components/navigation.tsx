'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon, Phone, ChevronDown, Layers, Cpu } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useLanguage } from '@/components/language-provider'

interface NavLinkItem {
  href?: string
  key: string
  items?: { href: string; labelEs: string; labelEn: string }[]
}

const navLinks: NavLinkItem[] = [
  { href: '#nosotros', key: 'nav.nosotros' },
  { href: '/nosotros/proyectos', key: 'nav.proyectos' },
  { 
    key: 'nav.servicios',
    items: [
      { href: '/servicios/concreto-premezclado', labelEs: 'Concreto Premezclado', labelEn: 'Ready-Mix Concrete' },
      { href: '/servicios/bomba-de-concreto', labelEs: 'Bomba de Concreto', labelEn: 'Concrete Pumping' }
    ]
  },
  { href: '#plantas', key: 'nav.plantas' },
  { href: '#contacto', key: 'nav.contacto' },
]

export function Navigation() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [showNavCta, setShowNavCta] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('')
  const { theme, setTheme, resolvedTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()

  // Use resolvedTheme if available (handles 'system' properly), otherwise fallback to theme
  const currentTheme = resolvedTheme || theme

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)

    const heroElement = document.getElementById('hero')
    let ctaObserver: IntersectionObserver | null = null

    if (heroElement) {
      ctaObserver = new IntersectionObserver(
        ([entry]) => {
          // If hero is NOT intersecting (out of viewport), show the CTA
          setShowNavCta(!entry.isIntersecting)
        },
        { threshold: 0.1 }
      )
      ctaObserver.observe(heroElement)
    } else {
      setShowNavCta(true)
    }

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: '-10% 0px -50% 0px' }
    )

    navLinks.forEach((link) => {
      if (link.href) {
        const el = document.getElementById(link.href.replace('#', ''))
        if (el) sectionObserver.observe(el)
      }
    })
    
    // Also observe hero to clear active state when scrolled to top
    if (heroElement) {
      sectionObserver.observe(heroElement)
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (ctaObserver) ctaObserver.disconnect()
      sectionObserver.disconnect()
    }
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  return (
    <motion.header
      initial={{ y: -72 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 border-b border-border/80 shadow-md backdrop-blur-md' 
          : 'bg-transparent border-b border-border/20 dark:border-white/10 backdrop-blur-sm'
      }`}
    >
      <nav className="section-container h-full flex items-center justify-between">
        {/* Logo */}
        <Link href={isHome ? '#hero' : '/'} className="flex items-center">
          <Image
            src={mounted && currentTheme === 'dark' ? '/logo_unimx-removebg-preview.png' : '/logo_unimx_light.png'}
            alt="UNIMAX Corp"
            width={150}
            height={48}
            className="h-10 w-auto object-contain select-none transition-all duration-300"
            priority
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => {
            if (link.items) {
              return (
                <div 
                  key={link.key}
                  className="relative"
                  onMouseEnter={() => setIsServicesDropdownOpen(true)}
                  onMouseLeave={() => setIsServicesDropdownOpen(false)}
                >
                  <button
                    className={`text-[11px] font-bold tracking-[0.15em] transition-colors duration-200 uppercase flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0 select-none ${
                      pathname.startsWith('/servicios')
                        ? 'text-primary' 
                        : 'text-text-secondary dark:text-white/90 hover:text-primary'
                    }`}
                  >
                    {t(link.key)}
                    <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {isServicesDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 15, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute left-0 mt-3 w-64 rounded-xl bg-white dark:bg-[#0E1419] border border-neutral-200/80 dark:border-white/10 p-2 shadow-[0_10px_40px_rgba(0,0,0,0.08),0_1px_3px_rgba(0,0,0,0.02)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.3)] backdrop-blur-xl z-50 transition-colors duration-300"
                      >
                        <div className="flex flex-col gap-1">
                          {link.items.map((sub) => {
                            const isConcrete = sub.href.includes('concreto-premezclado')
                            const title = language === 'es' ? sub.labelEs : sub.labelEn
                            return (
                              <Link
                                key={sub.href}
                                href={sub.href}
                                onClick={() => setIsServicesDropdownOpen(false)}
                                className="group flex items-center gap-3 p-2 rounded-lg hover:bg-neutral-50 dark:hover:bg-white/5 transition-all duration-200"
                              >
                                {/* Icon Box */}
                                <div className="w-8 h-8 rounded-lg bg-neutral-100 dark:bg-white/5 border border-neutral-200/50 dark:border-white/10 flex items-center justify-center text-neutral-500 dark:text-white/70 group-hover:bg-primary/10 group-hover:text-primary dark:group-hover:bg-primary/20 dark:group-hover:text-primary group-hover:border-primary/20 transition-all duration-200 shrink-0 shadow-3xs">
                                  {isConcrete ? (
                                    <Layers className="w-3.5 h-3.5" strokeWidth={2} />
                                  ) : (
                                    <Cpu className="w-3.5 h-3.5" strokeWidth={2} />
                                  )}
                                </div>

                                {/* Text content */}
                                <div className="flex-1 min-w-0">
                                  <h5 className="text-[10px] font-extrabold uppercase tracking-wider text-text-primary dark:text-white group-hover:text-primary transition-colors flex items-center justify-between">
                                    <span>{title}</span>
                                    <span className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-[10px] text-primary">
                                      →
                                    </span>
                                  </h5>
                                </div>
                              </Link>
                            )
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            }

            const finalHref = link.href!.startsWith('/') 
              ? link.href! 
              : (isHome ? link.href! : `/${link.href!}`)
            
            const isActive = (isHome && activeSection === link.href!.replace('#', '')) || pathname === link.href

            return (
              <Link
                key={link.href}
                href={finalHref}
                className={`text-[11px] font-bold tracking-[0.15em] transition-colors duration-200 relative group ${
                  isActive 
                    ? 'text-primary' 
                    : 'text-text-secondary dark:text-white/90 hover:text-primary'
                }`}
              >
                {t(link.key)}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-200 ${
                  isActive ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            )
          })}
        </div>

        {/* Global Toolbar Options */}
        <div className="hidden lg:flex items-center gap-5">
          {/* Language Switcher */}
          <div className="flex items-center gap-2 border-r border-border dark:border-white/20 pr-5 text-[11px] font-bold tracking-widest">
            <button
              onClick={() => setLanguage('es')}
              className={`transition-all duration-200 cursor-pointer ${
                language === 'es' 
                  ? 'text-primary text-[13px] font-extrabold' 
                  : 'text-text-muted text-[10px] font-normal hover:text-text-primary dark:text-white/60 dark:hover:text-white'
              }`}
            >
              ES
            </button>
            <span className="text-text-muted dark:text-white/60 text-[10px] font-normal">/</span>
            <button
              onClick={() => setLanguage('en')}
              className={`transition-all duration-200 cursor-pointer ${
                language === 'en' 
                  ? 'text-primary text-[13px] font-extrabold' 
                  : 'text-text-muted text-[10px] font-normal hover:text-text-primary dark:text-white/60 dark:hover:text-white'
              }`}
            >
              EN
            </button>
          </div>

          {/* Theme Switcher */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg bg-surface dark:bg-white/10 border border-border dark:border-white/20 text-text-primary dark:text-white hover:bg-elevated dark:hover:bg-white/20 transition-colors cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
            </button>
          )}

          {/* Direct CTA - Hidden when Hero is in viewport using IntersectionObserver */}
          <AnimatePresence>
            {showNavCta && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href={isHome ? '#contacto' : '/#contacto'}
                  className="inline-flex items-center justify-center h-10 px-5 text-[11px] font-bold tracking-[0.12em] uppercase bg-primary text-white hover:bg-cta-hover transition-all duration-200 rounded-md border border-primary hover:border-cta-hover active:scale-95"
                >
                  {t('nav.cotizar')}
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile Actions (Mobile Toolbar + Menu Trigger) */}
        <div className="lg:hidden flex items-center gap-3">
          {/* Theme switcher on mobile */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg bg-surface dark:bg-white/10 border border-border dark:border-white/20 text-text-primary dark:text-white"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
            </button>
          )}

          {/* Call direct CTA for quick conversions */}
          <a
            href="https://wa.me/51959345117"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-primary text-white"
            aria-label="Chat on WhatsApp"
          >
            <Phone size={15} />
          </a>

          {/* Hamburger trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg bg-surface dark:bg-white/10 border border-border dark:border-white/20 text-text-primary dark:text-white"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-background border-b border-border shadow-lg overflow-hidden"
          >
            <div className="section-container py-6 flex flex-col gap-4">
              {navLinks.map((link) => {
                if (link.items) {
                  return (
                    <div key={link.key} className="flex flex-col border-b border-border/40 py-1">
                      <button
                        onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                        className="w-full flex items-center justify-between text-[12px] font-bold tracking-[0.15em] text-text-secondary dark:text-white/90 hover:text-primary transition-colors py-2.5 cursor-pointer uppercase bg-transparent border-none text-left select-none"
                      >
                        <span>{t(link.key)}</span>
                        <span className={`text-[8px] transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`}>▼</span>
                      </button>
                      
                      <AnimatePresence>
                        {isMobileServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="flex flex-col pl-4 gap-2 overflow-hidden mt-1 pb-2"
                          >
                            {link.items.map((sub) => (
                              <Link
                                key={sub.href}
                                href={sub.href}
                                onClick={() => {
                                  setIsMobileMenuOpen(false)
                                  setIsMobileServicesOpen(false)
                                }}
                                className="text-[11px] font-bold tracking-wider uppercase text-text-muted dark:text-white/60 hover:text-primary py-1.5 border-l-2 border-border/50 pl-3 hover:border-primary transition-colors"
                              >
                                {language === 'es' ? sub.labelEs : sub.labelEn}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                }

                const finalHref = link.href!.startsWith('/') 
                  ? link.href! 
                  : (isHome ? link.href! : `/${link.href!}`)
                
                const isActive = (isHome && activeSection === link.href!.replace('#', '')) || pathname === link.href

                return (
                  <Link
                    key={link.href}
                    href={finalHref}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-[12px] font-bold tracking-[0.15em] transition-colors py-2.5 border-b border-border/40 ${
                      isActive ? 'text-primary' : 'text-text-secondary dark:text-white/90 hover:text-primary'
                    }`}
                  >
                    {t(link.key)}
                  </Link>
                )
              })}
              
              {/* Mobile Language Switcher */}
              <div className="flex items-center gap-4 py-2 text-[12px] font-bold tracking-widest border-b border-border/40">
                <span className="text-text-muted">IDIOMA / LANGUAGE:</span>
                <button
                  onClick={() => { setLanguage('es'); setIsMobileMenuOpen(false); }}
                  className={`px-3 py-1 rounded border transition-all duration-200 ${
                    language === 'es' 
                      ? 'border-primary text-primary text-[13px] font-extrabold bg-primary/5' 
                      : 'border-border text-text-muted text-[10px] font-normal'
                  }`}
                >
                  ESPAÑOL
                </button>
                <button
                  onClick={() => { setLanguage('en'); setIsMobileMenuOpen(false); }}
                  className={`px-3 py-1 rounded border transition-all duration-200 ${
                    language === 'en' 
                      ? 'border-primary text-primary text-[13px] font-extrabold bg-primary/5' 
                      : 'border-border text-text-muted text-[10px] font-normal'
                  }`}
                >
                  ENGLISH
                </button>
              </div>

              {/* Mobile Quote CTA */}
              <Link
                href={isHome ? '#contacto' : '/#contacto'}
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex items-center justify-center h-12 text-[12px] font-bold tracking-[0.15em] uppercase bg-primary text-white hover:bg-cta-hover transition-colors rounded-md mt-2 w-full"
              >
                {t('nav.cotizar')}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
