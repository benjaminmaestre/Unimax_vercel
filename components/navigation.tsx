'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '#soluciones', label: 'SOLUCIONES' },
  { href: '#productos', label: 'PRODUCTOS' },
  { href: '#servicios', label: 'SERVICIOS' },
  { href: '#plantas', label: 'PLANTAS' },
  { href: '#contacto', label: 'CONTACTO' },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -72 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-[9999] h-[72px] transition-all duration-300 ${
        isScrolled ? 'glass-intense' : 'glass'
      } border-b border-[var(--border-subtle)]`}
    >
      <nav className="section-container h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <div className="w-8 h-8 bg-[var(--red-600)] rounded-sm flex items-center justify-center">
              <span className="font-display text-white text-lg">U</span>
            </div>
            <span className="font-display text-xl tracking-tight text-white">
              UNIMAXCORP
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[11px] font-medium tracking-[0.14em] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--red-600)] transition-all duration-200 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link
            href="#contacto"
            className="inline-flex items-center justify-center h-10 px-5 text-[13px] font-medium tracking-[0.12em] uppercase bg-[var(--red-600)] text-white rounded-lg hover:bg-[var(--red-700)] hover:glow-red-intense transition-all duration-150 ease-snappy hover:scale-[1.02]"
          >
            Cotizar Ahora
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-white"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden glass-intense border-b border-[var(--border-subtle)]"
        >
          <div className="section-container py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[13px] font-medium tracking-[0.12em] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors py-2"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contacto"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-flex items-center justify-center h-10 px-5 text-[13px] font-medium tracking-[0.12em] uppercase bg-[var(--red-600)] text-white rounded-lg mt-2"
            >
              Cotizar Ahora
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
