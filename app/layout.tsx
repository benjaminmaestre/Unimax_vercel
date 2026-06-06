import type { Metadata, Viewport } from 'next'
import { Inter, Bebas_Neue } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const bebasNeue = Bebas_Neue({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://unimaxcorp.com.pe'),
  title: 'UNIMAX Corp | Concreto Premezclado y Maquinarias | Lima, Perú',
  description: 'Líder en concreto premezclado de alta resistencia, bombeo continuo y alquiler de maquinaria pesada en Lima y Perú. Más de 25 años de experiencia en soluciones de concreto para proyectos de infraestructura.',
  keywords: ['concreto premezclado', 'Lima', 'Perú', 'bombeo de concreto', 'mixer truck', 'construcción', 'maquinaria pesada', 'plantas de concreto'],
  generator: 'v0.app',
  openGraph: {
    title: 'UNIMAX Corp | Concreto Premezclado y Maquinarias',
    description: 'Soluciones integrales de concreto premezclado y maquinaria pesada para proyectos de construcción en Lima y todo el Perú.',
    type: 'website',
    images: [
      {
        url: '/og-logo.png',
        width: 1200,
        height: 630,
        alt: 'UNIMAX Corp Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UNIMAX Corp | Concreto Premezclado y Maquinarias | Lima, Perú',
    description: 'Líder en concreto premezclado de alta resistencia, bombeo continuo y alquiler de maquinaria pesada en Lima y Perú.',
    images: ['/og-logo.png'],
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
}

import { ThemeProvider } from '@/components/theme-provider'
import { LanguageProvider } from '@/components/language-provider'

export const viewport: Viewport = {
  themeColor: '#0A0F14',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "name": "UNIMAX Corp",
    "url": "https://unimaxcorp.com.pe",
    "logo": "https://unimaxcorp.com.pe/logo_unimx-removebg-preview.png",
    "description": "Líder en concreto premezclado de alta resistencia, bombeo continuo y alquiler de maquinaria pesada en Lima y Perú.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Calle Carrozable Lote 4, Lurigancho",
      "addressLocality": "Lima",
      "addressCountry": "PE"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+51-959-345-117",
      "contactType": "technical support / sales",
      "areaServed": "PE",
      "availableLanguage": ["Spanish", "English"]
    }
  }

  return (
    <html lang="es" className={`${inter.variable} ${bebasNeue.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-foreground transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  )
}
