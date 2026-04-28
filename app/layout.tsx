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
  title: 'UNIMAXCORP | Concreto Premezclado de Alta Resistencia | Medellín',
  description: 'Premezclado de alta resistencia, bombeo continuo y maquinaria pesada. Desplegamos logística certificada para obras que no admiten errores. ASTM C94 · NTC 321 · ISO 9001',
  keywords: ['concreto premezclado', 'Medellín', 'bombeo de concreto', 'mixer truck', 'construcción', 'Antioquia'],
  generator: 'v0.app',
  openGraph: {
    title: 'UNIMAXCORP | Concreto Premezclado de Alta Resistencia',
    description: 'Premezclado de alta resistencia, bombeo continuo y maquinaria pesada para obras en Medellín y Antioquia.',
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
  themeColor: '#050505',
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
