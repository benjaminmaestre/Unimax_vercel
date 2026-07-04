import type { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Política de Cookies | UNIMAX Corp',
  description: 'Política de cookies y tecnologías de seguimiento de UNIMAX Corp conforme a la legislación de protección de datos personales del Perú.',
  alternates: {
    canonical: 'https://www.unimaxcorp.com/politica-de-cookies',
  },
}

export default function CookiesPolicyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      
      {/* Editorial Title Banner */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-[#F4F1ED] dark:bg-[#0A0F14] border-b border-border/40 transition-colors duration-300">
        <div className="section-container relative z-10">
          <div className="max-w-4xl">
            <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-primary mb-3 block">
              Documento Legal
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight text-text-primary uppercase">
              Política de Cookies
            </h1>
            <p className="mt-4 text-xs md:text-sm text-text-secondary max-w-2xl leading-relaxed font-light">
              POLÍTICA DE COOKIES Y TECNOLOGÍAS DE SEGUIMIENTO — GRUPO EMPRESARIAL UNIMAX S.A.C.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(193,61,58,0.06),transparent_32%)] dark:bg-[radial-gradient(circle_at_80%_20%,rgba(193,61,58,0.18),transparent_32%)] pointer-events-none" />
      </section>

      {/* Main Document Content */}
      <section className="py-12 lg:py-24 bg-background transition-colors duration-300">
        <div className="section-container">
          <div className="max-w-4xl mx-auto rounded-xl bg-white dark:bg-white/5 border border-neutral-200/70 dark:border-white/10 p-6 md:p-12 lg:p-16 shadow-[0_1px_3px_rgba(0,0,0,0.06),0_6px_24px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.15)]">
            
            <div className="text-xs text-text-muted mb-8 pb-4 border-b border-border/40 flex justify-between items-center">
              <span>Grupo Empresarial UNIMAX S.A.C. — Lima, Perú</span>
              <span>RUC: 20614013983</span>
            </div>

            <div className="space-y-10 text-sm md:text-base leading-relaxed text-text-secondary font-light text-justify">
              
              {/* 1. INTRODUCCIÓN */}
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-primary uppercase tracking-wide flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  1. INTRODUCCIÓN
                </h2>
                <p className="pl-4">
                  El sitio web oficial de UNIMAX Corp utiliza cookies y tecnologías de seguimiento equivalentes para optimizar la experiencia de navegación del usuario, analizar el tráfico web e integrar funcionalidades de soporte comercial y técnico (como el chat inteligente). Al continuar navegando, el usuario consiente el uso de cookies conforme a esta Política.
                </p>
              </div>

              {/* 2. ¿QUÉ SON LAS COOKIES? */}
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-primary uppercase tracking-wide flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  2. ¿QUÉ SON LAS COOKIES?
                </h2>
                <p className="pl-4">
                  Las cookies son pequeños archivos de texto que los sitios web almacenan en el navegador de su ordenador, teléfono inteligente o tableta. Permiten recordar información de la visita (como el idioma seleccionado, estadísticas de navegación o preferencias de visualización) para facilitar y mejorar la experiencia en futuros accesos.
                </p>
              </div>

              {/* 3. TIPOS DE COOKIES QUE UTILIZAMOS */}
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-primary uppercase tracking-wide flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  3. TIPOS DE COOKIES QUE UTILIZAMOS
                </h2>
                <p className="pl-4">
                  Nuestra plataforma emplea las siguientes categorías de cookies:
                </p>
                <ul className="list-disc pl-8 space-y-2 text-xs md:text-sm">
                  <li><strong>Cookies Técnicas y Esenciales:</strong> Necesarias para el correcto funcionamiento de la web, tales como la selección de idioma (almacenada localmente) y la persistencia de sesión segura de usuario. No recopilan información con fines comerciales.</li>
                  <li><strong>Cookies de Análisis Operativo:</strong> Permiten recopilar datos estadísticos sobre el comportamiento y uso de la web por parte de los visitantes (ej. páginas más visitadas, tiempo de permanencia). Para esta función se puede utilizar Vercel Analytics o herramientas similares que recogen información anónima.</li>
                  <li><strong>Cookies de Funcionalidad:</strong> Permiten recordar decisiones del usuario como su aceptación del aviso de cookies para evitar mostrar el banner en visitas subsecuentes.</li>
                </ul>
              </div>

              {/* 4. CONTROL Y DESACTIVACIÓN DE COOKIES */}
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-primary uppercase tracking-wide flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  4. CONTROL Y DESACTIVACIÓN DE COOKIES
                </h2>
                <p className="pl-4">
                  El usuario puede retirar su consentimiento o configurar el uso de cookies en cualquier momento. La mayoría de navegadores web modernos permiten bloquear, borrar o restringir las cookies a través de sus menús de configuración:
                </p>
                <ul className="list-disc pl-8 space-y-2 text-xs md:text-sm">
                  <li><strong>Google Chrome:</strong> Configuración → Privacidad y seguridad → Cookies y otros datos de sitios.</li>
                  <li><strong>Mozilla Firefox:</strong> Opciones → Privacidad & Seguridad → Cookies y datos del sitio.</li>
                  <li><strong>Safari:</strong> Preferencias → Privacidad → Bloquear todas las cookies.</li>
                  <li><strong>Microsoft Edge:</strong> Configuración → Cookies y permisos del sitio.</li>
                </ul>
                <p className="pl-4 text-text-muted">
                  Tenga en cuenta que si desactiva o bloquea las cookies esenciales, es posible que algunas funciones operativas del sitio web de UNIMAX Corp (como la retención del idioma seleccionado) no se ejecuten correctamente.
                </p>
              </div>

              {/* 5. ACTUALIZACIONES DE LA POLÍTICA */}
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-primary uppercase tracking-wide flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  5. ACTUALIZACIONES DE LA POLÍTICA
                </h2>
                <p className="pl-4">
                  UNIMAX Corp se reserva el derecho de modificar esta Política de Cookies para adaptarla a cambios regulatorios y técnicos en el Perú. Toda actualización estará disponible en este mismo apartado web y entrará en vigencia inmediatamente tras su publicación.
                </p>
              </div>

            </div>
            
            <div className="mt-12 pt-6 border-t border-border/40 text-center text-xs text-text-muted">
              <p>Grupo Empresarial UNIMAX S.A.C. — Lima, Perú.</p>
              <p className="mt-1">Ley N.º 29733 — Ley de Protección de Datos Personales del Perú.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
