'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon, Phone } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useLanguage } from '@/components/language-provider'

const navLinks = [
  { href: '#soluciones', key: 'nav.soluciones' },
  { href: '#productos', key: 'nav.productos' },
  { href: '#servicios', key: 'nav.servicios' },
  { href: '#plantas', key: 'nav.plantas' },
  { href: '#contacto', key: 'nav.contacto' },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [showNavCta, setShowNavCta] = useState(false)
  
  const { theme, setTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)

    const heroElement = document.getElementById('hero')
    let observer: IntersectionObserver | null = null

    if (heroElement) {
      observer = new IntersectionObserver(
        ([entry]) => {
          // If hero is NOT intersecting (out of viewport), show the CTA
          setShowNavCta(!entry.isIntersecting)
        },
        { threshold: 0.1 }
      )
      observer.observe(heroElement)
    } else {
      setShowNavCta(true)
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (observer) {
        observer.disconnect()
      }
    }
  }, [])

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
        <Link href="#hero" className="flex items-center">
          <Image
            src={theme === 'light' && isScrolled ? '/logo_unimx_light.png' : '/logo_unimx-removebg-preview.png'}
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
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[11px] font-bold tracking-[0.15em] text-text-secondary dark:text-white/90 hover:text-primary transition-colors duration-200 relative group"
            >
              {t(link.key)}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Global Toolbar Options */}
        <div className="hidden lg:flex items-center gap-5">
          {/* Language Switcher */}
          <div className="flex items-center gap-2 border-r border-border dark:border-white/20 pr-5 text-[11px] font-bold tracking-widest">
            <button
              onClick={() => setLanguage('es')}
              className={`transition-colors cursor-pointer ${
                language === 'es' ? 'text-primary' : 'text-text-muted hover:text-text-primary dark:text-white/60 dark:hover:text-white'
              }`}
            >
              ES
            </button>
            <span className="text-text-muted dark:text-white/60">/</span>
            <button
              onClick={() => setLanguage('en')}
              className={`transition-colors cursor-pointer ${
                language === 'en' ? 'text-primary' : 'text-text-muted hover:text-text-primary dark:text-white/60 dark:hover:text-white'
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
                  href="#contacto"
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
            href="tel:+5116043900"
            className="p-2 rounded-lg bg-primary text-white"
            aria-label="Call UNIMAX Corp"
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
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[12px] font-bold tracking-[0.15em] text-text-secondary hover:text-primary transition-colors py-2 border-b border-border/40"
                >
                  {t(link.key)}
                </Link>
              ))}
              
              {/* Mobile Language Switcher */}
              <div className="flex items-center gap-4 py-2 text-[12px] font-bold tracking-widest border-b border-border/40">
                <span className="text-text-muted">IDIOMA / LANGUAGE:</span>
                <button
                  onClick={() => { setLanguage('es'); setIsMobileMenuOpen(false); }}
                  className={`px-3 py-1 rounded border ${language === 'es' ? 'border-primary text-primary bg-primary/5' : 'border-border text-text-muted'}`}
                >
                  ESPAÑOL
                </button>
                <button
                  onClick={() => { setLanguage('en'); setIsMobileMenuOpen(false); }}
                  className={`px-3 py-1 rounded border ${language === 'en' ? 'border-primary text-primary bg-primary/5' : 'border-border text-text-muted'}`}
                >
                  ENGLISH
                </button>
              </div>

              {/* Mobile Quote CTA */}
              <Link
                href="#contacto"
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
