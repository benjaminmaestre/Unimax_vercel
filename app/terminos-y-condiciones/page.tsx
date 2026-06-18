import type { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Términos y Condiciones | UNIMAX Corp',
  description: 'Términos y condiciones generales de atención, suministro y servicio de concreto premezclado y maquinarias de UNIMAX Corp.',
  alternates: {
    canonical: '/terminos-y-condiciones',
  },
}

export default function TermsPage() {
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
              Términos y Condiciones Generales
            </h1>
            <p className="mt-4 text-xs md:text-sm text-text-secondary max-w-2xl leading-relaxed">
              TÉRMINOS Y CONDICIONES GENERALES DE ATENCIÓN, SUMINISTRO Y SERVICIO GRUPO EMPRESARIAL UNIMAX S.A.C. (NOMBRE COMERCIAL UNIMAX CORP.)
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
              <span>GRUPO EMPRESARIAL UNIMAX S.A.C.</span>
              <span>RUC: 20614013983</span>
            </div>

            <div className="space-y-10 text-sm md:text-base leading-relaxed text-text-secondary font-light text-justify">
              
              {/* 1. OBJETO */}
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-primary uppercase tracking-wide flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  1. OBJETO
                </h2>
                <p className="pl-4">
                  Los presentes Términos y Condiciones regulan la atención, comercialización, programación, suministro y prestación de servicios relacionados con concreto premezclado, mortero, bombeo de concreto, alquiler de bomba y servicios complementarios brindados por GRUPO EMPRESARIAL UNIMAX S.A.C., en adelante <strong>“LA EMPRESA”</strong>.
                </p>
                <p className="pl-4">
                  La aceptación de una cotización, orden de compra, solicitud de atención, programación, pago parcial o total, confirmación vía correo electrónico, whatsapp, llamada telefónica, firma de guía, recepción del producto o utilización del servicio constituye aceptación expresa e integral de los presentes términos y condiciones.
                </p>
              </div>

              {/* 2. ESPECIFICACIONES DEL PRODUCTO */}
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-primary uppercase tracking-wide flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  2. ESPECIFICACIONES DEL PRODUCTO
                </h2>
                <p className="pl-4">
                  LA EMPRESA suministrará el producto conforme a las especificaciones técnicas solicitadas por el cliente, incluyendo según corresponda:
                </p>
                <ul className="list-disc pl-8 space-y-1">
                  <li>Resistencia (f’c)</li>
                  <li>Asentamiento (slump)</li>
                  <li>Tamaño máximo de agregado</li>
                  <li>Edad de diseño</li>
                  <li>Uso de aditivos</li>
                  <li>Tipo de concreto</li>
                  <li>Mortero</li>
                  <li>Bombeabilidad</li>
                  <li>Diseños especiales previamente coordinados</li>
                  <li>Tiempo y requerimientos especiales</li>
                </ul>
                <p className="pl-4">
                  Toda especificación técnica proporcionada por el cliente será considerada como información oficial para la preparación y despacho del producto, considerándose correctas para efectos de fabricación, programación y suministro.
                </p>
                <p className="pl-4 text-text-muted">
                  En caso de errores, omisiones, cambios posteriores o especificaciones incorrectas proporcionadas por el cliente respecto a resistencia, asentamiento (slump), tamaño máximo de agregado, volumen solicitado, edad de diseño, tipo de concreto, bombeabilidad, longitud de tuberías, tipo de bomba o cualquier otra característica técnica requerida para la obra, el pedido será considerado correctamente atendido conforme a la información originalmente suministrada por el cliente. Los costos derivados de reprogramaciones, modificaciones, nuevos despachos, movilizaciones adicionales o servicios complementarios serán asumidos por el cliente.
                </p>
              </div>

              {/* 3. CALIDAD Y GARANTÍA DEL PRODUCTO */}
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-primary uppercase tracking-wide flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  3. CALIDAD Y GARANTÍA DEL PRODUCTO
                </h2>
                <p className="pl-4">
                  LA EMPRESA garantiza las propiedades del concreto y/o mortero conforme al diseño originalmente solicitado y despachado desde planta, bajo condiciones normales de transporte y entrega. La garantía aplica únicamente respecto al producto suministrado y no incluye procedimientos constructivos ejecutados en obra.
                </p>
                <p className="pl-4">
                  LA EMPRESA no será responsable por la colocación de concreto, vibrado, bombeo realizado por terceros, curado, desencofrado, manipulación en obra, compactación, acabados, juntas, almacenamiento, procedimientos constructivos, condiciones ambientales, diseño estructural, metrados proporcionados por el cliente, rendimiento final en obra o uso posterior al suministro.
                </p>
                <p className="pl-4">
                  En caso el cliente solicite la incorporación de agua, aditivos, acelerantes, retardantes u otros materiales adicionales en obra, dicha modificación deberá quedar registrada en la guía correspondiente y será realizada bajo responsabilidad exclusiva del cliente, salvo que dichos productos formen parte del diseño previamente solicitado y aprobado por LA EMPRESA. Cuando los aditivos formen parte del diseño originalmente solicitado y suministrado por LA EMPRESA, éstos serán considerados parte integrante del producto despachado.
                </p>
              </div>

              {/* 4. ENSAYOS, MUESTREOS Y CONTROL DE CALIDAD */}
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-primary uppercase tracking-wide flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  4. ENSAYOS, MUESTREOS Y CONTROL DE CALIDAD
                </h2>
                <p className="pl-4">
                  La validación del asentamiento (slump) deberá realizarse conforme a los procedimientos establecidos en ASTM C143/C143M y criterios de tolerancia aplicables según ASTM C94/C94M y/o normativa técnica equivalente vigente. La prueba deberá ejecutarse antes de cualquier incorporación de agua, aditivos o modificación del concreto. No procederán observaciones sustentadas únicamente en apreciaciones visuales o subjetivas.
                </p>
                <p className="pl-4">
                  El rechazo por asentamiento únicamente procederá cuando el resultado del ensayo realizado en obra no cumpla con el rango de tolerancia correspondiente a la especificación solicitada, debiendo efectuarse la prueba antes de cualquier manipulación, incorporación de agua, aditivos o modificación del concreto en obra.
                </p>
                <p className="pl-4">
                  En caso de resultados irregulares, muestras no representativas o procedimientos de ensayo incorrectos, podrá efectuarse una nueva verificación técnica conforme al criterio del personal responsable. Las contramuestras, ensayos externos, verificaciones complementarias y/o pruebas solicitadas por terceros serán de responsabilidad del cliente. LA EMPRESA únicamente responderá por las muestras tomadas y registradas conforme a sus procedimientos de control de calidad.
                </p>
              </div>

              {/* 5. PROGRAMACIÓN DE PEDIDOS Y DESPACHOS */}
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-primary uppercase tracking-wide flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  5. PROGRAMACIÓN DE PEDIDOS Y DESPACHOS
                </h2>
                <p className="pl-4">
                  Los precios y costos de cualquier atención podrán variar según distrito, distancia, accesibilidad, horario, condiciones operativas, restricciones logísticas y operativas, tipo de servicio requerido y complejidad de la atención. Toda programación se encuentra sujeta a disponibilidad operativa, capacidad logística, disponibilidad de equipos, confirmación de pago, condiciones de acceso y condiciones de seguridad.
                </p>
                <p className="pl-4">
                  LA EMPRESA podrá otorgar prioridad de programación a clientes corporativos, líneas de crédito aprobadas, clientes recurrentes o proyectos de atención continua.
                </p>
                <p className="pl-4">
                  Las cancelaciones deberán realizarse con un mínimo de 24 horas de anticipación y las reprogramaciones deberán comunicarse con un mínimo de 14 horas de anticipación. Los servicios nocturnos, amanecidas, feriados, horarios especiales o atenciones extraordinarias estarán sujetos a disponibilidad operativa y podrán generar recargos adicionales previamente informados.
                </p>
                <p className="pl-4">
                  El volumen mínimo de atención para concreto y mortero es de 06.00 m³, salvo para determinadas zonas, distritos alejados o condiciones especiales de operación, donde LA EMPRESA podrá establecer un volumen mínimo de 07.00 m³ o el que resulte aplicable según evaluación logística. El volumen mínimo de atención para cualquier tipo de bomba es de 20.00 m³.
                </p>
              </div>

              {/* 6. RECEPCIÓN, DESCARGA Y SOBRETIEMPO */}
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-primary uppercase tracking-wide flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  6. RECEPCIÓN, DESCARGA Y SOBRETIEMPO
                </h2>
                <p className="pl-4">
                  El tiempo máximo de permanencia libre de sobrecargo será de 50 minutos contados desde el arribo de la unidad a obra. Vencido dicho plazo, se aplicará el cobro por sobretiempo correspondiente conforme a la tarifa vigente establecida por LA EMPRESA. Los costos de sobretiempo podrán variar según distancia, ubicación, condiciones de obra y el tiempo extra que permanezca la unidad en obra.
                </p>
              </div>

              {/* 7. CONDICIONES DE ACCESO A OBRA */}
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-primary uppercase tracking-wide flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  7. CONDICIONES DE ACCESO A OBRA
                </h2>
                <p className="pl-4">
                  Será responsabilidad del cliente garantizar accesos seguros, ingreso libre para maniobra, condiciones adecuadas de operación, obtener permisos municipales, gestionar autorizaciones de vía, proporcionar un área de descarga adecuada, coordinar restricciones vecinales y/o municipales, contar con personal de apoyo vial y garantizar condiciones mínimas de seguridad para la ejecución del servicio.
                </p>
                <p className="pl-4">
                  Los daños derivados de accesos deficientes, restricciones no informadas o condiciones inseguras serán responsabilidad del cliente. El cliente deberá proporcionar áreas seguras de trabajo, señalización, control de tránsito interno, protección de zonas de riesgo, líneas de vida, puntos de anclaje, espacios adecuados para limpieza y operación. Asimismo, deberá encargarse de la eliminación de bateas, residuos y desechos generados en obra.
                </p>
                <p className="pl-4">
                  LA EMPRESA podrá suspender o rechazar la atención cuando existan condiciones que pongan en riesgo la integridad del personal, equipos, unidades o terceros.
                </p>
              </div>

              {/* 8. CAUSALES VÁLIDAS DE RECHAZO DEL PRODUCTO */}
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-primary uppercase tracking-wide flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  8. CAUSALES VÁLIDAS DE RECHAZO DEL PRODUCTO
                </h2>
                <p className="pl-4">
                  El cliente únicamente podrá rechazar el suministro cuando exista una diferencia técnica objetiva y verificable entre el producto solicitado y el producto efectivamente despachado por LA EMPRESA, incluyendo:
                </p>
                <ul className="list-disc pl-8 space-y-1">
                  <li>Resistencia (f’c) distinta a la solicitada.</li>
                  <li>Tamaño máximo de agregado distinto al especificado en el pedido confirmado.</li>
                  <li>Resultado de prueba de cono en campo fuera de tolerancia conforme a norma aplicable.</li>
                  <li>Incorporación de aditivos no solicitados.</li>
                  <li>Evidencia comprobable de contaminación del producto antes de su descarga.</li>
                  <li>Diferencias sustanciales entre el pedido confirmado y el producto despachado.</li>
                </ul>
              </div>

              {/* 9. CAUSALES NO VÁLIDAS DE RECHAZO */}
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-primary uppercase tracking-wide flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  9. CAUSALES NO VÁLIDAS DE RECHAZO
                </h2>
                <p className="pl-4">
                  No constituirán causales válidas de rechazo:
                </p>
                <ul className="list-disc pl-8 space-y-1">
                  <li>Errores administrativos que no afecten técnicamente el producto.</li>
                  <li>Observaciones y diferencias relacionadas con precintos, etiquetas o aspectos documentarios.</li>
                  <li>Cambios de criterio posteriores al despacho.</li>
                  <li>Errores atribuibles al cliente respecto a especificaciones solicitadas.</li>
                  <li>Problemas de accesibilidad a obra, tiempos de espera o condiciones propias de la obra.</li>
                  <li>Errores de metrado o especificaciones proporcionadas por el cliente.</li>
                  <li>Apreciaciones subjetivas sin sustento técnico.</li>
                </ul>
              </div>

              {/* 10. CAUSALES DE SUSPENSIÓN O RECHAZO DEL SERVICIO */}
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-primary uppercase tracking-wide flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  10. CAUSALES DE SUSPENSIÓN O RECHAZO DEL SERVICIO
                </h2>
                <p className="pl-4">
                  LA EMPRESA podrá rechazar, suspender o detener la atención cuando existan:
                </p>
                <ul className="list-disc pl-8 space-y-1">
                  <li>Accesos inseguros, pendientes peligrosas o suelo inestable.</li>
                  <li>Riesgo para equipos o personal (e.g. cables eléctricos expuestos, falta de espacio para maniobras).</li>
                  <li>Obra no preparada o condiciones operativas inseguras.</li>
                  <li>Incumplimiento de pago o falta de permisos.</li>
                  <li>Esperas excesivas o diferencias entre el requerimiento solicitado y las condiciones reales de obra.</li>
                </ul>
              </div>

              {/* 11. BOMBEO Y TUBERÍAS */}
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-primary uppercase tracking-wide flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  11. BOMBEO Y TUBERÍAS
                </h2>
                <p className="pl-4">
                  El armado estándar de tuberías se encuentra incluido dentro del servicio regular, salvo condiciones especiales previamente informadas. La factibilidad de bombeo dependerá de las características técnicas del concreto solicitado, longitud de tuberías, altura de bombeo y condiciones de instalación.
                </p>
                <p className="pl-4">
                  LA EMPRESA otorgará hasta 10 tubos de cortesía equivalentes a aproximadamente 30 metros lineales. Los metros adicionales, accesos complejos, armados especiales o instalaciones extraordinarias generarán costos adicionales.
                </p>
                <p className="pl-4">
                  La limpieza de tuberías será realizada por el personal de bombeo. La limpieza de pisos, áreas de trabajo y espacios de obra será responsabilidad del cliente. Cuando el cliente utilice bomba propia o servicios de terceros, LA EMPRESA no asumirá responsabilidad sobre fallas, rendimiento o problemas operativos derivados de dichos equipos.
                </p>
              </div>

              {/* 12. PRECIOS Y VARIACIÓN DE COSTOS */}
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-primary uppercase tracking-wide flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  12. PRECIOS Y VARIACIÓN DE COSTOS
                </h2>
                <p className="pl-4">
                  Los precios cotizados podrán variar proporcionalmente ante incrementos en combustible, cemento, agregados, peajes, transporte, insumos, restricciones logísticas, costos operativos y condiciones de accesibilidad. Toda variación será comunicada según corresponda antes de la atención o programación.
                </p>
              </div>

              {/* 13. VOLUMEN SUMINISTRADO */}
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-primary uppercase tracking-wide flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  13. VOLUMEN SUMINISTRADO
                </h2>
                <p className="pl-4">
                  El volumen suministrado será acreditado mediante guías de remisión, registro de despacho, comprobante de entrega, documento de pago o registro interno. Salvo prueba técnica objetiva en contrario, dichos documentos constituirán evidencia suficiente del volumen entregado.
                </p>
                <p className="pl-4">
                  Los metrados, cubicaciones, rendimientos y cálculos de volumen son responsabilidad exclusiva del cliente. LA EMPRESA no será responsable por diferencias derivadas de errores de cálculo, información incompleta o modificaciones de obra.
                </p>
              </div>

              {/* 14. FORMAS DE PAGO Y CRÉDITO */}
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-primary uppercase tracking-wide flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  14. FORMAS DE PAGO Y CRÉDITO
                </h2>
                <p className="pl-4">
                  LA EMPRESA podrá trabajar bajo las siguientes modalidades:
                </p>
                <ul className="list-disc pl-8 space-y-1">
                  <li>Contado anticipado</li>
                  <li>Contado contra entrega</li>
                  <li>Crédito aprobado</li>
                  <li>Línea de crédito corporativa</li>
                </ul>
                <p className="pl-4">
                  Toda modalidad de crédito estará sujeta a evaluación y aprobación previa. Salvo pacto distinto por escrito, toda atención será considerada de pago inmediato y exigible desde la fecha de emisión del comprobante, guía y/o prestación efectiva del servicio.
                </p>
              </div>

              {/* 15. INTERESES MORATORIOS Y COBRANZA */}
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-primary uppercase tracking-wide flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  15. INTERESES MORATORIOS Y COBRANZA
                </h2>
                <p className="pl-4">
                  Toda factura vencida generará automáticamente un interés moratorio equivalente al 3% mensual acumulable, aplicable desde el día siguiente del vencimiento y sin necesidad de requerimiento previo.
                </p>
                <p className="pl-4">
                  El incumplimiento de pago faculta a LA EMPRESA a suspender despachos, programaciones o líneas de crédito, así como a iniciar procesos de cobranza, emitir cartas notariales, ejecutar acciones judiciales o extrajudiciales. Los gastos administrativos, notariales, judiciales, extrajudiciales y honorarios derivados de la recuperación de créditos vencidos serán asumidos por el cliente moroso.
                </p>
              </div>

              {/* 16. RECLAMOS Y PLAZOS */}
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-primary uppercase tracking-wide flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  16. RECLAMOS Y PLAZOS
                </h2>
                <p className="pl-4">
                  Los reclamos deberán presentarse mediante correo electrónico a <strong>consultas@unimaxcorp.com</strong> y/o mediante el asesor comercial correspondiente.
                </p>
                <p className="pl-4">
                  Plazos máximos para reclamos:
                </p>
                <ul className="list-disc pl-8 space-y-1">
                  <li><strong>Reclamos visibles:</strong> 24 horas.</li>
                  <li><strong>Reclamos técnicos:</strong> 07 días calendario.</li>
                  <li><strong>Reclamos de resistencia:</strong> Hasta 07 días posteriores al cumplimiento de la edad de diseño especificada.</li>
                </ul>
                <p className="pl-4">
                  Todo reclamo deberá permitir la inspección técnica y validación de condiciones relacionadas al suministro por parte de LA EMPRESA.
                </p>
              </div>

              {/* 17. OPERADORES LOGÍSTICOS Y SOCIOS COMERCIALES */}
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-primary uppercase tracking-wide flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  17. OPERADORES LOGÍSTICOS Y SOCIOS COMERCIALES
                </h2>
                <p className="pl-4">
                  LA EMPRESA podrá apoyarse en operadores logísticos, unidades afiliadas, socios comerciales, proveedores estratégicos, empresas aliadas y/o terceros especializados para la ejecución parcial o total de sus servicios contratados, manteniendo la coordinación operativa correspondiente.
                </p>
              </div>

              {/* 18. SISTEMAS DIGITALES, HERRAMIENTAS TECNOLÓGICAS Y MEDIOS ELECTRÓNICOS */}
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-primary uppercase tracking-wide flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  18. SISTEMAS DIGITALES, HERRAMIENTAS TECNOLÓGICAS Y MEDIOS ELECTRÓNICOS
                </h2>
                <p className="pl-4">
                  LA EMPRESA podrá poner a disposición de sus clientes plataformas digitales, portales web, aplicaciones móviles, certificados digitales, sistemas de seguimiento, monitoreo de unidades de despacho (cuando la unidad lo permita y según disponibilidad operativa), reportes, consultas en línea y demás medios electrónicos destinados a facilitar la gestión comercial, administrativa y operativa.
                </p>
                <p className="pl-4">
                  El acceso a dichas herramientas podrá estar sujeto a usuarios, contraseñas, perfiles autorizados, disponibilidad técnica, mantenimiento, actualizaciones o restricciones operativas. La información proporcionada mediante dichos sistemas tendrá carácter referencial.
                </p>
                <p className="pl-4">
                  LA EMPRESA podrá implementar, modificar, suspender, limitar o retirar total o parcialmente cualquiera de estas herramientas o servicios tecnológicos en cualquier momento, sin que ello genere compensación, penalidad o responsabilidad alguna frente al cliente. LA EMPRESA no será responsable por interrupciones, errores de transmisión, pérdida de conectividad, caídas de sistema o fallas de geolocalización.
                </p>
              </div>

              {/* 19. LIMITACIÓN DE RESPONSABILIDAD */}
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-primary uppercase tracking-wide flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  19. LIMITACIÓN DE RESPONSABILIDAD
                </h2>
                <p className="pl-4">
                  En caso de errores administrativos, operativos o de coordinación atribuibles a LA EMPRESA, esta podrá evaluar medidas correctivas razonables según cada caso concreto.
                </p>
                <p className="pl-4">
                  En ningún caso LA EMPRESA asumirá responsabilidades por paralización de obra, lucro cesante, pérdida de productividad, daños indirectos, sobrecostos indirectos de cualquier tipo, gastos de terceros, penalidades contractuales del cliente o daños consecuenciales.
                </p>
              </div>

              {/* 20. CASOS FORTUITOS Y FUERZA MAYOR */}
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-primary uppercase tracking-wide flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  20. CASOS FORTUITOS Y FUERZA MAYOR
                </h2>
                <p className="pl-4">
                  LA EMPRESA no será responsable por retrasos, reprogramaciones o incumplimientos derivados de hechos fortuitos o circunstancias ajenas a su control operativo, incluyendo congestión vehicular extraordinaria, accidentes de tránsito, cierre de vías, restricciones municipales, actos de autoridad, manifestaciones, fallas mecánicas imprevistas, disposiciones de autoridades competentes, interrupciones operativas o eventos que afecten la operación logística.
                </p>
              </div>

              {/* 21. ORDEN DE PRELACIÓN DOCUMENTAL */}
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-primary uppercase tracking-wide flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  21. ORDEN DE PRELACIÓN DOCUMENTAL
                </h2>
                <p className="pl-4">
                  En caso de discrepancia, contradicción, diferencia de interpretación o conflicto entre los documentos que conforman la relación comercial entre las partes, prevalecerán en el siguiente orden:
                </p>
                <ol className="list-decimal pl-8 space-y-1">
                  <li>La cotización aprobada por el cliente.</li>
                  <li>Las especificaciones técnicas formalmente confirmadas por escrito.</li>
                  <li>La orden de compra emitida y aceptada por LA EMPRESA.</li>
                  <li>Los presentes Términos y Condiciones Generales.</li>
                  <li>Las comunicaciones posteriores realizadas mediante correo electrónico u otros medios digitales autorizados.</li>
                </ol>
                <p className="pl-4 text-text-muted">
                  Ninguna instrucción verbal, mensaje informal o comunicación no documentada podrá modificar las condiciones originalmente pactadas, salvo aceptación expresa y escrita de LA EMPRESA.
                </p>
              </div>

              {/* 22. INTEGRIDAD DEL PEDIDO */}
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-primary uppercase tracking-wide flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  22. INTEGRIDAD DEL PEDIDO
                </h2>
                <p className="pl-4">
                  El cliente declara haber revisado, validado y aceptado las especificaciones técnicas, cantidades, metrados, ubicación de obra, condiciones de acceso, tipo de concreto, resistencia (f&apos;c), asentamiento (slump), tamaño máximo de agregado, requerimientos de bombeo, longitud de tuberías, horarios de atención, condiciones de programación y demás características necesarias para la correcta ejecución del servicio antes de confirmar el pedido.
                </p>
                <p className="pl-4">
                  Toda información proporcionada por el cliente será considerada correcta para efectos de cotización, programación, despacho y suministro. Una vez confirmado el pedido, cualquier modificación solicitada por el cliente estará sujeta a disponibilidad operativa y podrá generar costos adicionales, reprogramaciones o recotizaciones.
                </p>
              </div>

              {/* 23. ACEPTACIÓN DIGITAL */}
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-primary uppercase tracking-wide flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  23. ACEPTACIÓN DIGITAL
                </h2>
                <p className="pl-4">
                  La aceptación mediante correo electrónico, WhatsApp, orden de compra, mensajes de confirmación, programación, pago parcial o total, firma de guía, recepción del suministro o utilización del servicio constituirá aceptación expresa de los presentes términos y condiciones.
                </p>
              </div>

              {/* 24. PUBLICACIÓN Y VIGENCIA */}
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-primary uppercase tracking-wide flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  24. PUBLICACIÓN Y VIGENCIA
                </h2>
                <p className="pl-4">
                  Los presentes términos y condiciones estarán disponibles de manera permanente en la página web oficial de GRUPO EMPRESARIAL UNIMAX S.A.C. La versión publicada en la página web será considerada la versión vigente y aplicable al momento de la contratación del servicio.
                </p>
              </div>

              {/* 25. JURISDICCIÓN */}
              <div className="space-y-3">
                <h2 className="text-base font-bold text-text-primary uppercase tracking-wide flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  25. JURISDICCIÓN
                </h2>
                <p className="pl-4">
                  Toda controversia derivada de la relación comercial entre las partes será resuelta conforme a la legislación peruana vigente, sometiéndose las partes a la jurisdicción de los jueces y tribunales de Lima Metropolitana.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
