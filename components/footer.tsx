'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const navLinks = [
  { href: '#soluciones', label: 'Soluciones' },
  { href: '#productos', label: 'Productos' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#plantas', label: 'Plantas' },
  { href: '#contacto', label: 'Contacto' },
]

export function Footer() {
  return (
    <footer className="relative bg-[var(--surface)] border-t border-[var(--border-subtle)]">
      <div className="section-container py-16">
        {/* Main Row */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
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

          {/* Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[var(--text-secondary)] hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <Link
            href="#contacto"
            className="inline-flex items-center justify-center h-10 px-5 text-[13px] font-medium tracking-[0.12em] uppercase bg-transparent text-white border border-[var(--white-300)]/50 rounded-lg hover:bg-[var(--red-ghost)] hover:border-[var(--red-600)] transition-all duration-200"
          >
            Cotizar ahora
          </Link>
        </div>

        {/* Divider */}
        <div className="my-8 h-[1px] bg-[var(--border-subtle)]" />

        {/* Bottom Row */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 text-sm text-[var(--text-muted)]">
          <p>
            © 2026 UNIMAXCORP. Todos los derechos reservados.
          </p>
          <p>
            NIT: XXX.XXX.XXX-X · Bello, Antioquia, Colombia
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-white transition-colors">
              Privacidad
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Términos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
