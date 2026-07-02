import type { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { concreteServiceJsonLd, faqJsonLd } from '@/components/SchemaMarkup'
import { ServiceHero } from '@/components/sections/service-hero'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Servicio de Concreto Mixer en Lima | Logística y Despacho',
  description: 'Conoce nuestra flota de camiones mixer, capacidades de 8 m3 y 10 m3, y nuestra logística de despacho de concreto en Lima para tu obra.',
  keywords: [
    'concreto mixer Lima',
    'logística de concreto Lima',
    'despacho mixer para obras',
    'capacidad mixer 8m3'
  ],
  alternates: {
    canonical: 'https://www.unimaxcorp.com/servicios/concreto-mixer-lima',
  },
}

const faqs = [
  {
    question: '¿Cuánto cuesta el concreto premezclado en Lima?',
    answer: 'El precio varía según la resistencia del concreto (f\'c), el volumen solicitado y la distancia de la obra. Puede solicitar una cotización gratuita para un precio exacto.',
  },
  {
    question: '¿Cuál es el tiempo de entrega del mixer?',
    answer: 'Los despachos pueden realizarse desde 90 minutos, dependiendo del tráfico y la ubicación. Aseguramos puntualidad operativa.',
  },
  {
    question: '¿Qué resistencias de concreto manejan?',
    answer: 'Manejamos todas las resistencias estándar y concretos de alta resistencia (HPC). También ofrecemos diseños de mezcla según sus especificaciones.',
  },
  {
    question: '¿Atienden en todos los distritos de Lima?',
    answer: 'Sí, tenemos cobertura en toda Lima Metropolitana gracias a nuestras plantas operativas. Atendemos Lima Este, Sur, Norte y Centro.',
  },
  {
    question: '¿El servicio de bomba de concreto está incluido en el precio?',
    answer: 'El servicio de bombeo se cotiza por separado según las necesidades de su obra. Ofrecemos paquetes integrales que combinan suministro y bombeo.',
  },
  {
    question: '¿Trabajan con proyectos pequeños o solo obras grandes?',
    answer: 'Atendemos proyectos de toda escala, desde viviendas residenciales hasta grandes infraestructuras. Tenemos la flota adecuada para cualquier requerimiento.',
  },
]

export default function ConcreteMixerPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <script
        id="schema-service-mixer"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(concreteServiceJsonLd) }}
      />
      <script
        id="schema-faq-mixer"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navigation />

        {/* Hero Section */}
        <ServiceHero
          titleKey="Servicio de Concreto Mixer en Lima: Logística y Despacho para Obras"
          descKey="Conoce nuestra capacidad operativa, flota de camiones y tiempos de llegada a obra. Garantizamos un despacho eficiente en toda Lima Metropolitana."
          bgImage="/Concreto%20Premezclado.jpg"
        />

        {/* Content Section */}
        <section className="py-12 lg:py-24 bg-background">
          <div className="section-container max-w-3xl mx-auto">

            <div className="space-y-6">
              <details className="group border border-border rounded-lg overflow-hidden bg-surface" open>
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-elevated transition-colors">
                  <h2 className="text-lg font-bold text-text-primary">Capacidad de Nuestra Flota Mixer</h2>
                  <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-6 pt-0 text-text-secondary border-t border-border/40">
                  <p className="mb-4 mt-4">
                    Contamos con una moderna flota de camiones mixer diseñados para acceder a diversos tipos de obras en Lima.
                    Nuestra capacidad se adapta tanto a proyectos residenciales como a grandes infraestructuras.
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Mixers de 8 m³:</strong> Ideales para obras en zonas urbanas con accesos limitados o calles estrechas.</li>
                    <li><strong>Mixers de 10 m³ y 12 m³:</strong> Perfectos para vaciados masivos y proyectos de gran envergadura, optimizando los tiempos de despacho.</li>
                  </ul>
                </div>
              </details>

              <details className="group border border-border rounded-lg overflow-hidden bg-surface">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-elevated transition-colors">
                  <h2 className="text-lg font-bold text-text-primary">Cobertura y Tiempos de Despacho en Lima</h2>
                  <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-6 pt-0 text-text-secondary border-t border-border/40">
                  <p className="mb-4 mt-4">
                    Nuestras plantas de producción están estratégicamente ubicadas para asegurar que el concreto llegue en su estado óptimo de plasticidad a cualquier distrito de Lima.
                  </p>
                  <p className="mb-4">
                    <strong>Tiempo de llegada a obra:</strong> Planificamos nuestras rutas para garantizar tiempos de tránsito menores a 90 minutos desde la carga, cumpliendo estrictamente con la normativa técnica para evitar el fraguado prematuro.
                  </p>
                  <p>Atendemos a: Lima Centro, Lima Norte, Lima Sur (hasta Lurín), y Lima Este.</p>
                </div>
              </details>

              <details className="group border border-border rounded-lg overflow-hidden bg-surface">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-elevated transition-colors">
                  <h2 className="text-lg font-bold text-text-primary">Proceso de Vaciado y Bombeo</h2>
                  <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-6 pt-0 text-text-secondary border-t border-border/40">
                  <p className="mb-4 mt-4">
                    El despacho de concreto mixer se coordina de la mano con nuestro servicio de bombeo cuando la obra lo requiere.
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Llegada puntual:</strong> El camión mixer llega a la obra en el horario acordado.</li>
                    <li><strong>Descarga directa:</strong> Para cimentaciones o elementos a nivel del suelo con buen acceso.</li>
                    <li><strong>Descarga con bomba:</strong> Utilizamos bombas telescópicas o estacionarias para llevar el concreto a niveles superiores o sótanos, trabajando en sincronía con el mixer.</li>
                  </ul>
                </div>
              </details>
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/servicios/concreto-premezclado"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 h-12 rounded-md text-xs font-bold tracking-widest uppercase hover:bg-cta-hover transition-all shadow-md"
              >
                Ver Resistencias y Cotizar
              </Link>
            </div>

          </div>
        </section>

        {/* FAQ Section — visible content required by Google for FAQPage rich results */}
        <section className="py-12 lg:py-16 bg-surface border-t border-border/30">
          <div className="section-container max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-extrabold tracking-wide text-text-primary uppercase mb-8">
              Preguntas Frecuentes
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <details key={i} className="group border border-border rounded-lg overflow-hidden bg-background">
                  <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-elevated transition-colors gap-4">
                    <h3 className="text-sm font-semibold text-text-primary text-left">{faq.question}</h3>
                    <span className="text-primary shrink-0 group-open:rotate-180 transition-transform text-xs">▼</span>
                  </summary>
                  <div className="px-5 pb-5 text-sm text-text-secondary leading-relaxed border-t border-border/40 pt-4">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
  )
}
