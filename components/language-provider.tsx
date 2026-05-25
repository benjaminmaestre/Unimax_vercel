'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'es' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Definición de las traducciones compartidas del sistemaconst translations: Record<Language, Record<string, string>> = {
  es: {
    // Navigation
    'nav.nosotros': 'NOSOTROS',
    'nav.soluciones': 'SOLUCIONES',
    'nav.productos': 'PRODUCTOS',
    'nav.servicios': 'SERVICIOS',
    'nav.plantas': 'PLANTAS',
    'nav.contacto': 'CONTACTO',
    'nav.cotizar': 'Cotizar Ahora',

    // Hero
    'hero.prelabel': 'LÍDERES EN CONCRETO PREMEZCLADO · PERÚ',
    'hero.title1': 'Concreto premezclado de alta resistencia',
    'hero.title2': 'para los proyectos más exigentes del Perú',
    'hero.bg_decor': 'QUE TRASCIENDEN.',
    'hero.desc': 'Especialistas en Concreto Premezclado de alta resistencia. Calidad certificada, bombeo de precisión y logística pesada para el sector de la construcción.',
    'hero.hook': 'INSPECCIÓN Y COTIZACIÓN 100% GRATIS',
    'hero.cta.cotizar': 'COTIZAR PROYECTO',
    'hero.cta.servicios': 'NUESTROS SERVICIOS',
    'hero.scroll': 'SCROLL',

    // Hero stats
    'hero.stats.despacho.unit': 'm³/mes',
    'hero.stats.despacho.label': 'DESPACHO',
    'hero.stats.trayectoria.unit': 'años',
    'hero.stats.trayectoria.label': 'TRAYECTORIA',
    'hero.stats.plantas.unit': 'plantas',
    'hero.stats.plantas.label': 'EN LIMA',
    'hero.stats.entrega.unit': 'min',
    'hero.stats.entrega.label': 'ENTREGA',

    // Manifesto (Nosotros / Quiénes Somos)
    'manifesto.prelabel': '• ACERCA DE LA EMPRESA',
    'manifesto.title': 'Trabajamos con dedicación en cada uno de tus proyectos.',
    'manifesto.desc': 'Impulsamos la evolución del sector constructivo. En Unimaxcorp combinamos rigor técnico y acompañamiento estratégico en todo el ciclo de vida de los proyectos. Transformamos desafíos técnicos en soluciones a medida, asegurando el cumplimiento de normativas de calidad y seguridad.',
    'manifesto.sub': 'Hemos consolidado nuestra presencia en el sector construcción a través de una gestión impecable en el suministro de concreto premezclado y soluciones de bombeo, garantizando que cada metro cúbico llegue con la precisión que las normas internacionales exigen.',
    'manifesto.cta': 'Conocer la empresa',
    'manifesto.badge': 'Concreto conforme a normas técnicas',
    'manifesto.tab.nosotros': 'QUIÉNES SOMOS',
    'manifesto.tab.mision': 'MISIÓN Y VISIÓN',
    'manifesto.tab.valores': 'VALORES CORPORATIVOS',
    'manifesto.mision.title': 'Misión',
    'manifesto.mision.desc': 'Proveer soluciones integrales en concreto premezclado con los más altos estándares de excelencia. Nuestra misión es maximizar la eficiencia en tiempos y costos mediante logística ágil y productos de calidad superior, garantizando procesos seguros y sostenibles.',
    'manifesto.vision.title': 'Visión',
    'manifesto.vision.desc': 'Consolidarse como el referente indiscutible en la producción de concreto premezclado, liderando la evolución del sector mediante innovación técnica constante y calidad garantizada. Buscamos optimizar tiempos de ejecución y garantizar progreso con compromiso ambiental.',
    'manifesto.proposito.title': 'Propósito',
    'manifesto.proposito.desc': 'Ser un aliado estratégico brindando productos que cumplan estándares de calidad y maquinarias en óptimas condiciones, aportando valor humano con asesorías técnicas.',
    'manifesto.valores.v1.title': 'Integridad y Ética',
    'manifesto.valores.v1.desc': 'Operamos bajo un estándar de conducta intachable fundamentado en la lealtad a los principios éticos y la transparencia total.',
    'manifesto.valores.v2.title': 'Seguridad Total',
    'manifesto.valores.v2.desc': 'La prioridad absoluta es la preservación de la integridad física y mental de todo nuestro personal mediante la prevención.',
    'manifesto.valores.v3.title': 'Asesoramiento',
    'manifesto.valores.v3.desc': 'Acompañamiento estratégico constante con rigor técnico y soporte técnico personalizado directo en obra.',
    'manifesto.valores.v4.title': 'Estándar de Calidad',
    'manifesto.valores.v4.desc': 'Aplicamos pensamiento disruptivo en laboratorio para entregar resultados superiores que redefinen la industria.',
    'manifesto.valores.v5.title': 'Compromiso Real',
    'manifesto.valores.v5.desc': 'Ejercemos la labor con sentido de pertenencia, asumiendo la autoría plena de cada paso y resultado obtenido.',
    'manifesto.valores.v6.title': 'Eco-responsabilidad',
    'manifesto.valores.v6.desc': 'Comprometidos con una gestión ambiental responsable, prácticas sostenibles y procesos de mezclado limpios.',

    // Bento
    'bento.prelabel': '• NUESTRAS SOLUCIONES',
    'bento.title': 'Todo lo que tu proyecto necesita, en un solo aliado.',
    'bento.p1.tag': 'PRODUCTOS',
    'bento.p1.title': 'Concreto Premezclado',
    'bento.p1.item1': "Diseño de mezcla f'c (kg/cm²)",
    'bento.p1.item2': 'Control de calidad en laboratorio',
    'bento.p1.item3': 'Soporte técnico en vaciado',
    'bento.p1.item4': 'Concretos de alta resistencia (HPC)',
    'bento.p1.link': 'Ver Ficha Técnica',
    'bento.p2.tag': 'TECNOLOGÍA',
    'bento.p2.title': 'Logística Inteligente',
    'bento.p2.item1': 'Rastreo GPS en tiempo real',
    'bento.p2.item2': 'Control técnico y ensayos normativos',
    'bento.p2.item3': 'Soporte técnico especializado',
    'bento.p2.item4': 'Programación de vaciados continuos',
    'bento.p2.link': 'Ver servicios',
    'bento.p3.tag': 'SERVICIOS',
    'bento.p3.title': 'Bombeo y Maquinaria',
    'bento.p3.item1': 'Bomba pluma: alcance telescópico',
    'bento.p3.item2': 'Bomba estacionaria de alta presión',
    'bento.p3.item3': 'Alquiler de maquinaria pesada',
    'bento.p3.item4': 'Operadores capacitados y certificados',
    'bento.p3.link': 'Ver maquinaria',
    'bento.p4.desc': 'Nuestras plantas dosificadoras en operación',
    'bento.p4.badge': 'DESPACHO CONTINUO 24/7',

    // Process
    'process.prelabel': '• NUESTRO PROCESO',
    'process.title': 'Del pedido a tu obra en menos de 90 minutos.',
    'process.s1.title': 'Solicitud',
    'process.s1.desc': 'Formulario o llamada, confirmación en 10 min',
    'process.s2.title': 'Diseño',
    'process.s2.desc': 'Laboratorio valida mezcla según especificaciones',
    'process.s3.title': 'Despacho',
    'process.s3.desc': 'Mixer sale con GPS, remisión digital en tiempo real',
    'process.s4.title': 'Vaciado',
    'process.s4.desc': 'Operador y bomba en sitio, soporte técnico incluido',

    // Fleet
    'fleet.prelabel': '• NUESTRA FLOTA',
    'fleet.title': 'Equipos de última generación para cualquier escala.',
    'fleet.swipe': 'Desliza para explorar',
    'fleet.cta': 'Solicitar',
    'fleet.more.title': 'Ver flota completa',
    'fleet.more.desc': 'Más de 80 equipos disponibles para tu proyecto en Lima y provincias',
    'fleet.more.cta': 'Cotizar Ahora',

    // Testimonial
    'testimonial.prelabel': '• CLIENTES SATISFECHOS',
    'testimonial.title': 'La voz de los que construyen el país.',
    'testimonial.role1': 'Director de Obras · Inmobiliaria Líder',
    'testimonial.role2': 'Gerente de Proyectos · Consorcio Vial Sur',
    'testimonial.role3': 'Ingeniero Residente · Edifica Perú',

    // Projects
    'projects.prelabel': '• PROYECTOS DESTACADOS',
    'projects.title': 'Obras que construyen confianza.',
    'projects.desc': 'Más de 1,200 proyectos entregados en Lima y provincias con los más altos estándares de calidad.',

    // Certifications
    'cert.prelabel': '• CUMPLIMIENTO NORMATIVO',
    'cert.title': 'Concreto producido bajo normas técnicas aplicables.',
    'cert.c1.title': 'Concreto premezclado',
    'cert.c1.desc': 'Producción y despacho conforme a especificaciones técnicas del proyecto, RNE E.060, NTP aplicables y ASTM C94/C94M para concreto premezclado.',
    'cert.c2.title': 'Ensayos del concreto fresco y endurecido',
    'cert.c2.desc': 'Control de asentamiento, temperatura, muestreo, curado de probetas y resistencia a compresión según NTP aplicables y métodos ASTM C143, C1064, C31 y C39.',
    'cert.c3.title': 'Materiales y desempeño',
    'cert.c3.desc': 'Control de agregados, aditivos, diseño de mezcla y desempeño del concreto conforme a NTP aplicables, ASTM C33, ASTM C494, ACI 301, ACI 318 y EN 206.',

    // Coverage
    'coverage.prelabel': '• NUESTRA COBERTURA',
    'coverage.title': 'Abastecimiento estratégico en Lima Metropolitana.',
    'coverage.desc': 'Operamos con 4 plantas dosificadoras estratégicamente ubicadas para asegurar el tiempo de entrega y la consistencia del concreto en tu obra.',
    'coverage.p1.title': 'Planta Norte (Puente Piedra)',
    'coverage.p1.desc': 'Abastecimiento para Lima Norte y proyectos viales.',
    'coverage.p2.title': 'Planta Centro (Cercado)',
    'coverage.p2.desc': 'Atención rápida a proyectos residenciales y comerciales del centro.',
    'coverage.p3.title': 'Planta Este (Huachipa)',
    'coverage.p3.desc': 'Soporte de alta capacidad para Lima Este y Chosica.',
    'coverage.p4.title': 'Planta Sur (Lurín)',
    'coverage.p4.desc': 'Abastecimiento industrial y mega proyectos del sur.',

    // Contact
    'contact.prelabel': '• COTIZACIÓN INMEDIATA',
    'contact.title': '¿Listo para iniciar tu proyecto?',
    'contact.desc': 'Completa el formulario y un asesor técnico se comunicará contigo en menos de 10 minutos para brindarte una propuesta personalizada.',
    'contact.info.title': 'Atención Inmediata',
    'contact.info.address.title': 'Oficina Principal',
    'contact.info.address.desc': 'Av. Industrial 450, Urb. Las Praderas, Lima',
    'contact.info.phone.title': 'Central Telefónica',
    'contact.info.phone.desc': '+51 (01) 555-0199',
    'contact.info.email.title': 'Correo Técnico',
    'contact.info.email.desc': 'area.comercial@unimaxcorp.com',
    'contact.form.name': 'Nombre y Apellidos',
    'contact.form.phone': 'Teléfono / WhatsApp',
    'contact.form.email': 'Correo Electrónico',
    'contact.form.location': 'Distrito de la Obra',
    'contact.form.service': 'Servicio requerido',
    'contact.form.service.placeholder': 'Seleccione un servicio',
    'contact.form.service.opt1': 'Concreto Premezclado',
    'contact.form.service.opt2': 'Alquiler de Bomba y Maquinaria',
    'contact.form.service.opt3': 'Diseño de Mezcla / Laboratorio',
    'contact.form.volume': 'Volumen Estimado (m³)',
    'contact.form.msg': 'Detalles del Proyecto',
    'contact.form.submit': 'Enviar Solicitud de Cotización',

    // Footer
    'footer.slogan': 'Soluciones integrales de concreto premezclado y maquinaria pesada para la construcción en todo el Perú.',
    'footer.rights': '© 2026 UNIMAX Corp. Todos los derechos reservados. Planta de Abastecimiento: Cono Norte - Cono Este - Cono Sur.',
    'footer.privacy': 'Políticas de Privacidad',
    'footer.terms': 'Términos de Servicio',
  },
  en: {
    // Navigation
    'nav.nosotros': 'ABOUT US',
    'nav.soluciones': 'SOLUTIONS',
    'nav.productos': 'PRODUCTS',
    'nav.servicios': 'SERVICES',
    'nav.plantas': 'PLANTS',
    'nav.contacto': 'CONTACT',
    'nav.cotizar': 'Quote Now',

    // Hero
    'hero.prelabel': 'LEADERS IN READY-MIX CONCRETE · PERU',
    'hero.title1': 'High-resistance ready-mix concrete',
    'hero.title2': 'for the most demanding projects in Peru',
    'hero.bg_decor': 'TRANSCEND.',
    'hero.desc': 'Specialists in high-resistance Ready-Mix Concrete. Certified quality, precision pumping, and heavy logistics for the construction sector.',
    'hero.hook': 'FREE INSPECTION & QUOTE — 100% FREE',
    'hero.cta.cotizar': 'QUOTE PROJECT',
    'hero.cta.servicios': 'OUR SERVICES',
    'hero.scroll': 'SCROLL',

    // Hero stats
    'hero.stats.despacho.unit': 'm³/mo',
    'hero.stats.despacho.label': 'DISPATCH',
    'hero.stats.trayectoria.unit': 'years',
    'hero.stats.trayectoria.label': 'TRAJECTORY',
    'hero.stats.plantas.unit': 'plants',
    'hero.stats.plantas.label': 'IN LIMA',
    'hero.stats.entrega.unit': 'min',
    'hero.stats.entrega.label': 'DELIVERY',

    // Manifesto (Nosotros / Quiénes Somos)
    'manifesto.prelabel': '• ABOUT THE COMPANY',
    'manifesto.title': 'We work with dedication on every single one of your projects.',
    'manifesto.desc': 'We drive the evolution of the construction sector. At Unimaxcorp we combine technical rigor and strategic support throughout the lifecycle of your projects. We transform technical challenges into tailored solutions, ensuring compliance with quality and safety regulations.',
    'manifesto.sub': 'We have consolidated our presence in the construction sector through impeccable management of ready-mix supply and pumping solutions, guaranteeing that every cubic meter arrives with the precision that international standards demand.',
    'manifesto.cta': 'About the company',
    'manifesto.badge': 'Concrete compliant with technical standards',
    'manifesto.tab.nosotros': 'WHO WE ARE',
    'manifesto.tab.mision': 'MISSION & VISION',
    'manifesto.tab.valores': 'CORPORATE VALUES',
    'manifesto.mision.title': 'Mission',
    'manifesto.mision.desc': 'To provide comprehensive ready-mix concrete solutions under the highest standards of excellence. Our mission is to maximize efficiency in time and costs through agile logistics and superior quality products, guaranteeing safe and sustainable processes.',
    'manifesto.vision.title': 'Vision',
    'manifesto.vision.desc': 'To consolidate as the indisputable benchmark in ready-mix concrete production, leading the evolution of the sector through constant technical innovation and guaranteed quality. We seek to optimize execution times and guarantee progress with environmental commitment.',
    'manifesto.proposito.title': 'Purpose',
    'manifesto.proposito.desc': 'To be a strategic ally providing products that comply with quality standards and heavy machinery in optimal conditions, adding human value with technical advisories.',
    'manifesto.valores.v1.title': 'Integrity & Ethics',
    'manifesto.valores.v1.desc': 'We operate under an impeccable standard of conduct based on loyalty and full transparency.',
    'manifesto.valores.v2.title': 'Total Safety',
    'manifesto.valores.v2.desc': 'Our absolute priority is the preservation of the physical and mental integrity of all our personnel through prevention.',
    'manifesto.valores.v3.title': 'Advisory Support',
    'manifesto.valores.v3.desc': 'Constant strategic support with technical rigor and personalized on-site guidance.',
    'manifesto.valores.v4.title': 'Quality Standard',
    'manifesto.valores.v4.desc': 'We apply disruptive thinking in laboratory to deliver superior results that redefine structural standards.',
    'manifesto.valores.v5.title': 'Real Commitment',
    'manifesto.valores.v5.desc': 'We perform our work with ownership, taking full accountability for every single step and result.',
    'manifesto.valores.v6.title': 'Eco-responsibility',
    'manifesto.valores.v6.desc': 'Committed to sustainable practices, responsible environmental management, and clean mixing processes.',

    // Bento
    'bento.prelabel': '• OUR SOLUTIONS',
    'bento.title': 'Everything your project needs, in a single ally.',
    'bento.p1.tag': 'PRODUCTS',
    'bento.p1.title': 'Ready-Mix Concrete',
    'bento.p1.item1': "Concrete mix design f'c (kg/cm²)",
    'bento.p1.item2': 'Quality control in laboratory',
    'bento.p1.item3': 'On-site pouring technical support',
    'bento.p1.item4': 'High Performance Concrete (HPC)',
    'bento.p1.link': 'View Technical Sheet',
    'bento.p2.tag': 'TECHNOLOGY',
    'bento.p2.title': 'Smart Logistics',
    'bento.p2.item1': 'Real-time GPS tracking',
    'bento.p2.item2': 'Technical control and standardized testing',
    'bento.p2.item3': 'Specialized technical support',
    'bento.p2.item4': 'Continuous pouring schedule',
    'bento.p2.link': 'View services',
    'bento.p3.tag': 'SERVICES',
    'bento.p3.title': 'Pumping & Machinery',
    'bento.p3.item1': 'Boom pump: telescopic reach',
    'bento.p3.item2': 'High-pressure stationary pumps',
    'bento.p3.item3': 'Heavy machinery rental',
    'bento.p3.item4': 'Trained and certified operators',
    'bento.p3.link': 'View machinery',
    'bento.p4.desc': 'Our batching plants in operation',
    'bento.p4.badge': 'CONTINUOUS DISPATCH 24/7',

    // Process
    'process.prelabel': '• OUR PROCESS',
    'process.title': 'From order to your job site in under 90 minutes.',
    'process.s1.title': 'Request',
    'process.s1.desc': 'Form or phone call, confirmation in 10 mins',
    'process.s2.title': 'Design',
    'process.s2.desc': 'Laboratory validates ready-mix as per specs',
    'process.s3.title': 'Dispatch',
    'process.s3.desc': 'Mixer truck leaves with GPS, digital waybill',
    'process.s4.title': 'Pouring',
    'process.s4.desc': 'Operator and pump on-site, technical support',

    // Fleet
    'fleet.prelabel': '• OUR FLEET',
    'fleet.title': 'State-of-the-art machinery for any scale.',
    'fleet.swipe': 'Swipe to explore',
    'fleet.cta': 'Request',
    'fleet.more.title': 'View entire fleet',
    'fleet.more.desc': 'Over 80 units available for your project in Lima and provinces',
    'fleet.more.cta': 'Quote Now',

    // Testimonial
    'testimonial.prelabel': '• SATISFIED CLIENTS',
    'testimonial.title': 'The voice of those who build the country.',
    'testimonial.role1': 'Construction Director · Inmobiliaria Líder',
    'testimonial.role2': 'Project Manager · Consorcio Vial Sur',
    'testimonial.role3': 'Resident Engineer · Edifica Perú',

    // Projects
    'projects.prelabel': '• FEATURED PROJECTS',
    'projects.title': 'Works that build trust.',
    'projects.desc': 'Over 1,200 projects delivered in Lima and provinces with the highest quality standards.',

    // Certifications
    'cert.prelabel': '• REGULATORY COMPLIANCE',
    'cert.title': 'Concrete produced under applicable technical standards.',
    'cert.c1.title': 'Ready-mix concrete',
    'cert.c1.desc': 'Production and dispatch in compliance with project technical specifications, RNE E.060, applicable NTP, and ASTM C94/C94M for ready-mix concrete.',
    'cert.c2.title': 'Fresh and hardened concrete testing',
    'cert.c2.desc': 'Control of slump, temperature, sampling, specimen curing, and compressive strength according to applicable NTP and ASTM C143, C1064, C31, and C39 methods.',
    'cert.c3.title': 'Materials and performance',
    'cert.c3.desc': 'Control of aggregates, chemical admixtures, mix design, and concrete performance in accordance with applicable NTP, ASTM C33, ASTM C494, ACI 301, ACI 318, and EN 206.',

    // Coverage
    'coverage.prelabel': '• OUR COVERAGE',
    'coverage.title': 'Strategic supply across Metropolitan Lima.',
    'coverage.desc': 'We operate with 4 strategically located batching plants to ensure delivery times and ready-mix consistency at your job site.',
    'coverage.p1.title': 'North Plant (Puente Piedra)',
    'coverage.p1.desc': 'Supply for North Lima and roadway infrastructure projects.',
    'coverage.p2.title': 'Central Plant (Cercado)',
    'coverage.p2.desc': 'Fast response to residential and commercial projects in center Lima.',
    'coverage.p3.title': 'East Plant (Huachipa)',
    'coverage.p3.desc': 'High-capacity support for East Lima and Chosica.',
    'coverage.p4.title': 'South Plant (Lurín)',
    'coverage.p4.desc': 'Industrial supply and mega projects in the south.',

    // Contact
    'contact.prelabel': '• IMMEDIATE QUOTE',
    'contact.title': 'Ready to start your project?',
    'contact.desc': 'Fill out the form and a technical advisor will contact you in less than 10 minutes to provide a customized proposal.',
    'contact.info.title': 'Immediate Attention',
    'contact.info.address.title': 'Headquarters',
    'contact.info.address.desc': 'Av. Industrial 450, Urb. Las Praderas, Lima',
    'contact.info.phone.title': 'Telephone Central',
    'contact.info.phone.desc': '+51 (01) 555-0199',
    'contact.info.email.title': 'Technical Mail',
    'contact.info.email.desc': 'area.comercial@unimaxcorp.com',
    'contact.form.name': 'Full Name',
    'contact.form.phone': 'Phone / WhatsApp',
    'contact.form.email': 'Email Address',
    'contact.form.location': 'Project Location (District)',
    'contact.form.service': 'Required Service',
    'contact.form.service.placeholder': 'Select a service',
    'contact.form.service.opt1': 'Ready-Mix Concrete',
    'contact.form.service.opt2': 'Pump & Heavy Machinery Rental',
    'contact.form.service.opt3': 'Mix Design / Laboratory Service',
    'contact.form.volume': 'Estimated Volume (m³)',
    'contact.form.msg': 'Project Details',
    'contact.form.submit': 'Send Quote Request',

    // Footer
    'footer.slogan': 'Comprehensive ready-mix concrete and heavy machinery rental solutions for construction projects throughout Peru.',
    'footer.rights': '© 2026 UNIMAX Corp. All rights reserved. Supply Plants: North Cono - East Cono - South Cono.',
    'footer.privacy': 'Privacy Policies',
    'footer.terms': 'Terms of Service',
  }
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('es')

  useEffect(() => {
    const saved = localStorage.getItem('unimax-lang') as Language
    if (saved === 'es' || saved === 'en') {
      setLanguageState(saved)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('unimax-lang', lang)
  }

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
