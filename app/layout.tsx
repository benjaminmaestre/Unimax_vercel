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
  title: 'UNIMAX Corp | Concreto Premezclado y Maquinarias | Lima, Perú',
  description: 'Líder en concreto premezclado de alta resistencia, bombeo continuo y alquiler de maquinaria pesada en Lima y Perú. Más de 25 años de experiencia en soluciones de concreto para proyectos de infraestructura.',
  keywords: ['concreto premezclado', 'Lima', 'Perú', 'bombeo de concreto', 'mixer truck', 'construcción', 'maquinaria pesada', 'plantas de concreto'],
  generator: 'v0.app',
  openGraph: {
    title: 'UNIMAX Corp | Concreto Premezclado y Maquinarias',
    description: 'Soluciones integrales de concreto premezclado y maquinaria pesada para proyectos de construcción en Lima y todo el Perú.',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

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
    <html lang="es" className={`${inter.variable} ${bebasNeue.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
