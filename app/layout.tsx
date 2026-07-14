import type { Metadata, Viewport } from 'next'
import { Inter, Bebas_Neue } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
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

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.unimaxcorp.com'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'UNIMAX Corp | Concreto Premezclado y Mixer en Lima, Perú',
  description: 'Servicio y venta de concreto premezclado (mixer) de alta resistencia en Lima y todo el Perú. Bombeo de concreto continuo y alquiler de maquinaria pesada. +10 años de experiencia.',
  keywords: [
    'premezclado en peru',
    'concreto premezclado en lima',
    'concreto mixer en lima',
    'venta de concreto premezclado',
    'concreto premezclado peru',
    'concreto mixer',
    'precio de concreto mixer',
    'bombeo de concreto en lima',
    'precio de concreto premezclado m3',
    'bombeo de concreto',
    'mixer truck',
    'construcción',
    'maquinaria pesada',
    'plantas de concreto',
    'dosificación de concreto',
    'concreto de alta resistencia',
    'bomba de concreto',
    'alquiler bomba de concreto',
    'alquiler maquinaria pesada',
    'refrigerante de concreto'
  ],
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || '',
  },
  generator: 'v0.app',
  openGraph: {
    title: 'UNIMAX Corp | Concreto Premezclado y Mixer en Lima, Perú',
    description: 'Servicio y venta de concreto premezclado (mixer) de alta resistencia en Lima y todo el Perú.',
    type: 'website',
    images: [
      {
        url: '/og-logo-dark.png',
        width: 1200,
        height: 630,
        alt: 'UNIMAX Corp Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UNIMAX Corp | Concreto Premezclado y Mixer en Lima, Perú',
    description: 'Servicio y venta de concreto premezclado (mixer) de alta resistencia en Lima y todo el Perú.',
    images: ['/og-logo-dark.png'],
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
}

import { ThemeProvider } from '@/components/theme-provider'
import { LanguageProvider } from '@/components/language-provider'
import { AiChat } from '@/components/ai-chat'
import { CookieBanner } from '@/components/cookie-banner'
import { localBusinessJsonLd } from '@/components/SchemaMarkup'

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
  return (
    <html lang="es" className={`${inter.variable} ${bebasNeue.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-foreground transition-colors duration-300">
        <script
          id="schema-local-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <LanguageProvider>
            {children}
            <AiChat />
            <CookieBanner />
          </LanguageProvider>
        </ThemeProvider>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
