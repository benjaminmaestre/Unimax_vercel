'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/components/language-provider'

const navLinks = [
  { href: '#soluciones', key: 'nav.soluciones' },
  { href: '#productos', key: 'nav.productos' },
  { href: '#servicios', key: 'nav.servicios' },
  { href: '#plantas', key: 'nav.plantas' },
  { href: '#contacto', key: 'nav.contacto' },
]

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="relative bg-surface border-t border-border/80">
      <div className="section-container py-16">
        {/* Main Row */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unima_logo_transparente-9yVMcDbsHGaclLXyjqdkfFccg5Raf9.png"
              alt="UNIMAX Corp"
              width={140}
              height={52}
              className="h-10 w-auto object-contain brightness-0 dark:brightness-100 transition-all duration-300"
            />
          </Link>

          {/* Slogan or Description */}
          <p className="text-sm text-text-muted text-center max-w-sm lg:text-left">
            {t('footer.slogan')}
          </p>

          {/* Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-text-secondary hover:text-primary transition-colors"
              >
                {t(link.key)}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <Link
            href="#contacto"
            className="inline-flex items-center justify-center h-10 px-5 text-[12px] font-bold tracking-[0.12em] uppercase bg-transparent text-text-primary border border-border hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 rounded-md"
          >
            {t('nav.cotizar')}
          </Link>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-border/80" />

        {/* Bottom Row */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <p className="text-center lg:text-left">
            {t('footer.rights')}
          </p>
          <p className="font-mono text-center lg:text-right">
            RUC: 20608552190 (Referencial) · Lima, Perú
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-primary transition-colors">
              {t('footer.privacy')}
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
