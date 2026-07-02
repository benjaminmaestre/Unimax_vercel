// JSON-LD data objects — exported for use with dangerouslySetInnerHTML on <script> directly
// These are used inline in layout.tsx and page files (NOT as React components)

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ConcreteContractor",
  "name": "UNIMAX Corp",
  "url": "https://www.unimaxcorp.com",
  "logo": "https://www.unimaxcorp.com/og-logo-dark.png",
  "image": "https://www.unimaxcorp.com/og-logo-dark.png",
  "description": "Empresa líder en concreto premezclado de alta resistencia, bombeo continuo y alquiler de maquinaria pesada en Lima y Perú. Más de 10 años de experiencia en el sector construcción.",
  "telephone": "+51 959 345 117",
  "email": ["area.comercial@unimaxcorp.com", "consultas@unimaxcorp.com"],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Calle Carrozable Lote 4, Lurigancho",
    "addressLocality": "Lima",
    "addressRegion": "Lima",
    "addressCountry": "PE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "-11.9961",
    "longitude": "-76.9922"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "08:00",
      "closes": "13:00"
    }
  ],
  "areaServed": "Lima y alrededores",
  "sameAs": [
    "https://www.facebook.com/UNIMAXCORP/",
    "https://www.tiktok.com/@unimaxcorp"
  ],
  "taxID": "20614013983",
  "priceRange": "$$"
}

export const concreteServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Concreto Premezclado",
  "description": "Suministro de concreto premezclado (mixer) de alta resistencia. Diseños de mezcla según especificaciones del proyecto y normas técnicas.",
  "provider": {
    "@type": "ConcreteContractor",
    "name": "UNIMAX Corp",
    "url": "https://www.unimaxcorp.com"
  },
  "serviceType": "Ready-Mix Concrete Supply",
  "areaServed": "Lima Metropolitana, Perú",
  "url": "https://www.unimaxcorp.com/servicios/concreto-premezclado",
  "offers": {
    "@type": "Offer",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "description": "El precio varía según el volumen solicitado, la resistencia del concreto (f'c) requerida y la ubicación del proyecto."
    }
  }
}

export const pumpServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Bomba de Concreto y Alquiler de Maquinaria Pesada",
  "description": "Servicio de bombeo de concreto con bombas telescópicas y estacionarias. Alquiler de maquinaria pesada para construcción.",
  "provider": {
    "@type": "ConcreteContractor",
    "name": "UNIMAX Corp",
    "url": "https://www.unimaxcorp.com"
  },
  "serviceType": "Concrete Pumping and Heavy Machinery Rental",
  "areaServed": "Lima Metropolitana, Perú",
  "url": "https://www.unimaxcorp.com/servicios/bomba-de-concreto",
  "offers": {
    "@type": "Offer",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "description": "El precio varía según el tipo de bomba, las horas de servicio, el volumen a bombear y la ubicación de la obra."
    }
  }
}

export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta el concreto premezclado en Lima?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El precio varía según la resistencia del concreto (f'c), el volumen solicitado y la distancia de la obra. Puede solicitar una cotización gratuita para un precio exacto."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuál es el tiempo de entrega del mixer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Los despachos pueden realizarse desde 90 minutos, dependiendo del tráfico y la ubicación. Aseguramos puntualidad operativa."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué resistencias de concreto manejan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Manejamos todas las resistencias estándar y concretos de alta resistencia (HPC). También ofrecemos diseños de mezcla según sus especificaciones."
      }
    },
    {
      "@type": "Question",
      "name": "¿Atienden en todos los distritos de Lima?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, tenemos cobertura en toda Lima Metropolitana gracias a nuestras plantas operativas. Atendemos Lima Este, Sur, Norte y Centro."
      }
    },
    {
      "@type": "Question",
      "name": "¿El servicio de bomba de concreto está incluido en el precio?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El servicio de bombeo se cotiza por separado según las necesidades de su obra. Ofrecemos paquetes integrales que combinan suministro y bombeo."
      }
    },
    {
      "@type": "Question",
      "name": "¿Trabajan con proyectos pequeños o solo obras grandes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Atendemos proyectos de toda escala, desde viviendas residenciales hasta grandes infraestructuras. Tenemos la flota adecuada para cualquier requerimiento."
      }
    }
  ]
}
