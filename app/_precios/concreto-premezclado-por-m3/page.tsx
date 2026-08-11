import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, MapPin, Ruler, Truck } from 'lucide-react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ConcreteVolumeCalculator } from '@/components/concrete-volume-calculator'

const canonicalUrl = 'https://www.unimaxcorp.com/precios/concreto-premezclado-por-m3'

export const metadata: Metadata = {
  title: 'Precio de Concreto Premezclado por m³ en Lima | UNIMAX',
  description: 'Conoce qué determina el precio del concreto premezclado por m³ en Lima, calcula el volumen de tu obra y solicita una cotización técnica.',
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: 'Precio de Concreto Premezclado por m³ en Lima',
    description: 'Calcula el volumen y conoce los factores que determinan una cotización de concreto en Lima.',
    url: canonicalUrl,
    siteName: 'UNIMAX Corp',
    images: [{ url: '/og-logo-dark.png', width: 1200, height: 630, alt: 'UNIMAX Corp' }],
    locale: 'es_PE',
    type: 'website',
  },
}

const factors = [
  ["Resistencia y diseño de mezcla", "La resistencia f'c, el asentamiento, los aditivos y el agregado modifican la dosificación.", Ruler],
  ['Volumen total', 'La cantidad condiciona la programación de mixers y el rendimiento logístico.', CheckCircle2],
  ['Ubicación y acceso', 'Distancia, tráfico, restricciones de acceso y horario influyen en el despacho.', MapPin],
  ['Bombeo y colocación', 'La bomba se evalúa según altura, alcance, tiempo y condiciones de obra.', Truck],
] as const

const mixes = [
  ["f'c 100–140 kg/cm²", 'Solados, rellenos y elementos no estructurales.'],
  ["f'c 175 kg/cm²", 'Veredas, pisos y trabajos de uso general.'],
  ["f'c 210 kg/cm²", 'Cimientos, columnas, vigas, losas y techos residenciales.'],
  ["f'c 245–280 kg/cm²", 'Pavimentos y estructuras de mayor exigencia.'],
  ["f'c 315–350 kg/cm²", 'Elementos de alta resistencia sujetos a validación técnica.'],
] as const

const faqs = [
  ['¿Cuánto cuesta un metro cúbico de concreto premezclado en Lima?', "No existe una tarifa única: cambia según resistencia f'c, volumen, ubicación, horario, aditivos y bombeo."],
  ['¿Cómo calculo los metros cúbicos que necesito?', 'Multiplica largo × ancho × espesor expresados en metros y considera un margen que debe validar el responsable técnico.'],
  ['¿El precio por m³ incluye la bomba?', 'El bombeo se evalúa por separado según tipo de bomba, alcance, tiempo operativo y acceso.'],
  ['¿Qué información necesito para cotizar?', "Dirección, volumen, resistencia f'c, fecha, horario, elemento a vaciar, acceso y necesidad de bombeo."],
] as const

const schema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(([question, answer]) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: { '@type': 'Answer', text: answer },
  })),
}

// Private route draft: the leading underscore keeps this module out of the
// public Next.js route tree until the commercial section is contracted.
export default function PrivateConcretePricePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navigation />
      <section className="bg-[#0A0F14] pb-20 pt-36 text-white">
        <div className="section-container max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">Guía de cotización en Lima</p>
          <h1 className="mt-4 font-display text-5xl uppercase leading-none sm:text-6xl lg:text-7xl">Precio de concreto premezclado por m³ en Lima</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/70">Calcula el volumen y conoce cómo influyen resistencia, cantidad, ubicación, programación y bombeo.</p>
          <a href="#calculadora" className="mt-8 inline-flex h-12 items-center gap-2 rounded-lg bg-primary px-6 text-sm font-bold">Calcular volumen <ArrowRight className="size-4" /></a>
        </div>
      </section>
      <section className="py-20">
        <div className="section-container">
          <h2 className="text-3xl font-bold text-text-primary">¿Qué determina el precio final?</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {factors.map(([title, description, Icon]) => (
              <article key={title} className="rounded-xl border border-border bg-card p-6">
                <Icon className="size-6 text-primary" />
                <h3 className="mt-5 font-bold text-text-primary">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="calculadora" className="bg-surface py-20">
        <div className="section-container"><ConcreteVolumeCalculator /></div>
      </section>
      <section className="py-20">
        <div className="section-container grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-text-primary">Resistencias de referencia</h2>
            <div className="mt-7 overflow-hidden rounded-xl border border-border">
              {mixes.map(([resistance, use], index) => (
                <div key={resistance} className={`p-5 ${index ? 'border-t border-border' : ''}`}>
                  <h3 className="font-bold text-primary">{resistance}</h3><p className="mt-1 text-sm text-text-muted">{use}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-text-primary">Preguntas frecuentes</h2>
            <div className="mt-7 space-y-4">
              {faqs.map(([question, answer]) => (
                <details key={question} className="rounded-xl border border-border bg-card p-5">
                  <summary className="cursor-pointer font-bold text-text-primary">{question}</summary>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="pb-20">
        <div className="section-container rounded-2xl bg-[#0A0F14] p-8 text-white md:p-12">
          <h2 className="text-3xl font-bold">Cotización según las condiciones de la obra</h2>
          <p className="mt-3 text-white/65">Un asesor valida volumen, resistencia, cobertura y bombeo antes de programar el suministro.</p>
          <Link href="/#contacto" className="mt-6 inline-flex h-12 items-center rounded-lg bg-primary px-6 text-sm font-bold">Solicitar cotización</Link>
        </div>
      </section>
      <Footer />
    </main>
  )
}
