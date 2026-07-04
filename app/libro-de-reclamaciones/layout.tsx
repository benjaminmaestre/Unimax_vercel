import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Libro de Reclamaciones | UNIMAX Corp',
  description: 'Libro de Reclamaciones virtual de UNIMAX Corp. Formule su queja o reclamo respecto a nuestros servicios de concreto y maquinaria.',
  alternates: {
    canonical: 'https://www.unimaxcorp.com/libro-de-reclamaciones',
  },
}

export default function LibroReclamacionesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
