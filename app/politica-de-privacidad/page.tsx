import type { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Políticas de Privacidad | UNIMAX Corp',
  description: 'Políticas de privacidad y protección de datos personales de UNIMAX Corp conforme a la Ley N.º 29733 del Perú.',
  alternates: {
    canonical: 'https://unimaxcorp.com.pe/politica-de-privacidad',
  },
}

export default function PrivacyPage() {
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
              Políticas de Privacidad
            </h1>
            <p className="mt-4 text-xs md:text-sm text-text-secondary max-w-2xl leading-relaxed font-light">
              POLÍTICAS DE PRIVACIDAD — GRUPO EMPRESARIAL UNIMAX S.A.C. (UNIMAX CORP.)
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
              <span>RUC: 20608552190</span>
            </div>

            <div className="space-y-10 text-sm md:text-base leading-relaxed text-text-secondary font-light">
              
              {/* 1. RESPONSABLE DEL TRATAMIENTO DE DATOS */}
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-primary uppercase tracking-wide flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  1. RESPONSABLE DEL TRATAMIENTO DE DATOS
                </h2>
                <div className="pl-4 space-y-1 text-xs md:text-sm text-text-muted">
                  <p><strong>Razón social:</strong> Grupo Empresarial UNIMAX S.A.C.</p>
                  <p><strong>Nombre comercial:</strong> UNIMAX CORP.</p>
                  <p><strong>Domicilio legal:</strong> Lima, Perú</p>
                  <p><strong>Correo de contacto:</strong> consultas@unimaxcorp.com</p>
                </div>
                <p className="pl-4 mt-2">
                  UNIMAX CORP. actúa como responsable del tratamiento de los datos personales que recopila en el marco de la prestación de servicios de concreto premezclado, mortero, bombeo de concreto, alquiler de equipos y servicios complementarios, así como en el uso de sus plataformas y canales digitales.
                </p>
              </div>

              {/* 2. DATOS PERSONALES QUE RECOPILAMOS */}
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-primary uppercase tracking-wide flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  2. DATOS PERSONALES QUE RECOPILAMOS
                </h2>
                <p className="pl-4">
                  En el curso normal de la relación comercial y del uso de nuestras plataformas, podemos recopilar las siguientes categorías de datos:
                </p>
                <ul className="list-disc pl-8 space-y-2 text-xs md:text-sm">
                  <li><strong>Datos de identificación:</strong> nombre, denominación social, RUC/DNI, representante legal.</li>
                  <li><strong>Datos de contacto:</strong> correo electrónico, número de teléfono, número de WhatsApp.</li>
                  <li><strong>Datos de ubicación y obra:</strong> dirección de obra, coordenadas GPS para el seguimiento de despachos y logística de entrega.</li>
                  <li><strong>Datos comerciales y contractuales:</strong> cotizaciones aceptadas, órdenes de compra, especificaciones técnicas, guías de remisión, comprobantes de pago e historial de pedidos.</li>
                  <li><strong>Datos de comunicación:</strong> correos electrónicos, mensajes de WhatsApp, llamadas telefónicas y cualquier comunicación digital relacionada con la contratación o prestación del servicio.</li>
                  <li><strong>Datos de acceso a plataformas:</strong> credenciales de usuario, historial de acceso y registros de actividad en portales web o app móvil.</li>
                  <li><strong>Datos financieros:</strong> información necesaria para la evaluación de crédito, modalidades de pago y gestión de cobranza.</li>
                </ul>
              </div>

              {/* 3. FINALIDAD DEL TRATAMIENTO */}
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-primary uppercase tracking-wide flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  3. FINALIDAD DEL TRATAMIENTO
                </h2>
                <p className="pl-4">
                  Los datos recopilados son tratados exclusivamente para las siguientes finalidades:
                </p>
                <ul className="list-disc pl-8 space-y-1">
                  <li>Gestionar la relación comercial: cotizaciones, pedidos, programaciones y despachos.</li>
                  <li>Verificar y validar las especificaciones técnicas proporcionadas por el cliente.</li>
                  <li>Coordinar la logística de entrega y el seguimiento de unidades mediante GPS.</li>
                  <li>Emitir comprobantes de pago, guías de remisión y demás documentos contables y tributarios.</li>
                  <li>Administrar líneas de crédito, gestionar cobros y, de ser necesario, iniciar procedimientos de recuperación de cartera.</li>
                  <li>Atender reclamos, consultas y solicitudes de soporte técnico o comercial.</li>
                  <li>Brindar acceso a plataformas digitales, portales web, aplicaciones móviles y sistemas de información.</li>
                  <li>Cumplir con obligaciones legales, tributarias y regulatorias aplicables en el Perú.</li>
                  <li>Enviar comunicaciones relacionadas con el servicio contratado, actualizaciones operativas y notificaciones relevantes.</li>
                  <li>Mejorar la calidad de nuestros productos, servicios y herramientas tecnológicas.</li>
                </ul>
              </div>

              {/* 4. BASE LEGAL DEL TRATAMIENTO */}
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-primary uppercase tracking-wide flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  4. BASE LEGAL DEL TRATAMIENTO
                </h2>
                <p className="pl-4">
                  El tratamiento de sus datos personales se sustenta en las siguientes bases legales conforme a la Ley N.º 29733 — Ley de Protección de Datos Personales del Perú — y su Reglamento:
                </p>
                <ul className="list-disc pl-8 space-y-2 text-xs md:text-sm">
                  <li><strong>Ejecución de un contrato:</strong> el tratamiento es necesario para la prestación de los servicios contratados.</li>
                  <li><strong>Consentimiento del titular:</strong> otorgado mediante la aceptación de cotizaciones, órdenes de compra, confirmaciones digitales o firma de documentos.</li>
                  <li><strong>Interés legítimo:</strong> para la gestión de cobranzas, prevención de fraudes y mejora de nuestros servicios.</li>
                  <li><strong>Cumplimiento de obligaciones legales:</strong> emisión de comprobantes, declaraciones tributarias y requerimientos de autoridades competentes.</li>
                </ul>
              </div>

              {/* 5. PLATAFORMAS DIGITALES, HERRAMIENTAS TECNOLÓGICAS Y GPS */}
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-primary uppercase tracking-wide flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  5. PLATAFORMAS DIGITALES, HERRAMIENTAS TECNOLÓGICAS Y GPS
                </h2>
                <p className="pl-4">
                  UNIMAX CORP. pone a disposición de sus clientes portales web, aplicaciones móviles, sistemas de seguimiento de pedidos, monitoreo GPS de unidades, reportes en línea y demás herramientas tecnológicas con fines operativos y comerciales.
                </p>
                <p className="pl-4">
                  El uso de estas herramientas puede implicar el registro de datos de acceso, preferencias, historial de consultas y datos de geolocalización. Dichos datos se utilizan exclusivamente para facilitar la gestión operativa y mejorar la experiencia del usuario, y no serán utilizados para ninguna otra finalidad sin consentimiento previo.
                </p>
                <p className="pl-4 text-text-muted">
                  UNIMAX CORP. podrá implementar, modificar, suspender o retirar cualquiera de estas herramientas en cualquier momento. No seremos responsables por interrupciones, ataques informáticos, fallas de proveedores tecnológicos u otras circunstancias que afecten el funcionamiento de dichos sistemas, siempre que se hayan adoptado medidas de seguridad razonables.
                </p>
              </div>

              {/* 6. COMUNICACIONES ELECTRÓNICAS */}
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-primary uppercase tracking-wide flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  6. COMUNICACIONES ELECTRÓNICAS
                </h2>
                <p className="pl-4">
                  Al interactuar con UNIMAX CORP. a través de correo electrónico, WhatsApp u otros canales digitales, usted acepta que dichas comunicaciones podrán ser registradas y almacenadas como parte del expediente comercial y como evidencia de las condiciones acordadas.
                </p>
                <p className="pl-4">
                  No utilizamos sus datos de contacto para enviar comunicaciones comerciales no solicitadas. Toda comunicación tendrá relación directa con los servicios contratados o en proceso de contratación.
                </p>
              </div>

              {/* 7. COMPARTICIÓN DE DATOS CON TERCEROS */}
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-primary uppercase tracking-wide flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  7. COMPARTICIÓN DE DATOS WITH TERCEROS
                </h2>
                <p className="pl-4">
                  UNIMAX CORP. podrá compartir sus datos personales con terceros únicamente en los siguientes supuestos:
                </p>
                <ul className="list-disc pl-8 space-y-2 text-xs md:text-sm">
                  <li><strong>Operadores logísticos y socios comerciales:</strong> empresas aliadas, unidades afiliadas o proveedores estratégicos que participen en la ejecución del servicio, bajo acuerdos de confidencialidad.</li>
                  <li><strong>Proveedores tecnológicos:</strong> empresas que prestan servicios de hosting, desarrollo de software, monitoreo GPS u otros servicios digitales necesarios para nuestra operación.</li>
                  <li><strong>Entidades financieras y de cobranza:</strong> en caso de créditos aprobados, líneas corporativas o procesos de recuperación de cartera vencida.</li>
                  <li><strong>Autoridades competentes:</strong> cuando sea requerido por mandato legal, orden judicial o disposición de autoridades reguladoras.</li>
                </ul>
                <p className="pl-4 text-text-muted">
                  En ningún caso UNIMAX CORP. venderá, alquilará ni cederá sus datos personales a terceros con fines comerciales ajenos a nuestra operación.
                </p>
              </div>

              {/* 8. CONSERVACIÓN DE DATOS */}
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-primary uppercase tracking-wide flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  8. CONSERVACIÓN DE DATOS
                </h2>
                <p className="pl-4">
                  Sus datos serán conservados durante el tiempo necesario para cumplir con las finalidades descritas y con las obligaciones legales y contractuales aplicables:
                </p>
                <ul className="list-disc pl-8 space-y-1">
                  <li>Los datos contractuales y comerciales se conservarán por un mínimo de 5 años desde la última operación, conforme a la normativa tributaria y comercial peruana.</li>
                  <li>Los datos de acceso a plataformas se conservarán mientras la cuenta permanezca activa y hasta 2 años después de su cancelación.</li>
                  <li>Las comunicaciones relacionadas con reclamos o litigios se conservarán hasta la resolución definitiva del caso.</li>
                </ul>
                <p className="pl-4 text-text-muted">
                  Transcurridos los plazos aplicables, los datos serán eliminados o anonimizados de forma segura.
                </p>
              </div>

              {/* 9. DERECHOS DEL TITULAR DE LOS DATOS */}
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-primary uppercase tracking-wide flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  9. DERECHOS DEL TITULAR DE LOS DATOS
                </h2>
                <p className="pl-4">
                  Conforme a la Ley N.º 29733 y su Reglamento, usted tiene derecho a:
                </p>
                <ul className="list-disc pl-8 space-y-2 text-xs md:text-sm">
                  <li><strong>Acceso:</strong> conocer qué datos personales suyos tratamos y cómo los utilizamos.</li>
                  <li><strong>Rectificación:</strong> solicitar la corrección de datos inexactos o incompletos.</li>
                  <li><strong>Cancelación / Supresión:</strong> solicitar la eliminación de sus datos cuando ya no sean necesarios, salvo que exista obligación legal de conservarlos.</li>
                  <li><strong>Oposición:</strong> oponerse al tratamiento de sus datos para finalidades específicas, en los casos permitidos por ley.</li>
                  <li><strong>Revocación del consentimiento:</strong> retirar el consentimiento otorgado, sin efecto retroactivo.</li>
                </ul>
                <p className="pl-4 text-text-muted">
                  Para ejercer cualquiera de estos derechos, comuníquese con nosotros a través de los canales indicados en la sección 12. Atenderemos su solicitud en un plazo máximo de 20 días hábiles.
                </p>
              </div>

              {/* 10. SEGURIDAD DE LA INFORMACIÓN */}
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-primary uppercase tracking-wide flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  10. SEGURIDAD DE LA INFORMACIÓN
                </h2>
                <p className="pl-4">
                  UNIMAX CORP. implementa medidas técnicas y organizativas razonables para proteger sus datos frente a accesos no autorizados, pérdida, alteración o divulgación indebida, incluyendo:
                </p>
                <ul className="list-disc pl-8 space-y-1">
                  <li>Control de acceso mediante usuarios y contraseñas con perfiles autorizados.</li>
                  <li>Cifrado de comunicaciones en canales digitales.</li>
                  <li>Procedimientos internos de gestión de incidentes de seguridad.</li>
                  <li>Acuerdos de confidencialidad con proveedores y socios comerciales.</li>
                </ul>
                <p className="pl-4 text-text-muted">
                  Sin perjuicio de lo anterior, ningún sistema de transmisión de datos por internet es completamente seguro. UNIMAX CORP. no puede garantizar la seguridad absoluta de la información transmitida a través de sus canales digitales.
                </p>
              </div>

              {/* 11. MODIFICACIONES A ESTA POLÍTICA */}
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-primary uppercase tracking-wide flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  11. MODIFICACIONES A ESTA POLÍTICA
                </h2>
                <p className="pl-4">
                  UNIMAX CORP. se reserva el derecho de actualizar esta Política de Privacidad en cualquier momento. La versión vigente estará disponible de manera permanente en la página web oficial de la empresa. Las modificaciones entrarán en vigor desde su publicación. El uso continuado de nuestros servicios tras la publicación de los cambios implica la aceptación de la nueva versión.
                </p>
              </div>

              {/* 12. CONTACTO Y RECLAMACIONES */}
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-primary uppercase tracking-wide flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  12. CONTACTO Y RECLAMACIONES
                </h2>
                <p className="pl-4">
                  Para cualquier consulta, ejercicio de derechos o reclamación relacionada con el tratamiento de sus datos personales, puede contactarnos a través de:
                </p>
                <ul className="list-disc pl-8 space-y-1">
                  <li><strong>Correo electrónico:</strong> consultas@unimaxcorp.com</li>
                  <li>Asesor comercial asignado</li>
                </ul>
                <p className="pl-4">
                  Si considera que su solicitud no ha sido atendida satisfactoriamente, tiene derecho a presentar una reclamación ante la Autoridad Nacional de Protección de Datos Personales del Ministerio de Justicia y Derechos Humanos del Perú.
                </p>
              </div>

            </div>
            
            <div className="mt-12 pt-6 border-t border-border/40 text-center text-xs text-text-muted">
              <p>Grupo Empresarial UNIMAX S.A.C. — Lima, Perú. Jurisdicción: Lima Metropolitana.</p>
              <p className="mt-1">Ley N.º 29733 — Ley de Protección de Datos Personales.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
