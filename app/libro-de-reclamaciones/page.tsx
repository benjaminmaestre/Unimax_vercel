'use client'

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

// Form schema matching backend requirements
const schema = z.object({
  tipoSolicitud: z.enum(['Reclamo', 'Queja']),
  nombresApellidos: z.string().min(2, 'Este campo es obligatorio y debe ser válido'),
  tipoDocumento: z.string().min(1, 'Seleccione un tipo de documento'),
  numeroDocumento: z.string().min(4, 'Ingrese un número de documento válido'),
  telefono: z.string().min(6, 'Ingrese un número de teléfono válido'),
  email: z.string().email('Ingrese un correo electrónico válido'),
  domicilio: z.string().min(5, 'Ingrese su dirección completa'),
  servicioRelacionado: z.string().optional(),
  numeroComprobante: z.string().optional(),
  fechaIncidente: z.string().min(10, 'Seleccione la fecha del incidente'),
  montoReclamado: z.string().optional(),
  descripcionHechos: z.string().min(10, 'Detalle los hechos del incidente (mínimo 10 caracteres)'),
  pedidoConcreto: z.string().min(5, 'Detalle cuál es su pedido concreto (mínimo 5 caracteres)'),
  aceptaTratamientoDatos: z.literal(true, {
    errorMap: () => ({ message: 'Debe aceptar el tratamiento de sus datos personales' }),
  }),
  mathAnswer: z.string().min(1, 'Por favor, responda la pregunta de seguridad'),
  honeypot: z.string().optional(),
})

type FormData = z.infer<typeof schema>

export default function LibroReclamacionesPage() {
  const [mounted, setMounted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState<{
    success: boolean
    code?: string
    message?: string
  } | null>(null)

  // Math challenge for anti-spam
  const [mathChallenge, setMathChallenge] = useState({ num1: 0, num2: 0 })

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
    // Generate simple random numbers for the safety check
    setMathChallenge({
      num1: Math.floor(Math.random() * 9) + 1,
      num2: Math.floor(Math.random() * 9) + 1,
    })
  }, [])

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      tipoSolicitud: 'Reclamo',
      tipoDocumento: 'DNI',
      aceptaTratamientoDatos: undefined,
      honeypot: '',
    },
  })

  const onSubmit = async (data: FormData) => {
    // 1. Honeypot check (anti-spam)
    if (data.honeypot) {
      console.warn('Spam detected via Honeypot')
      return // Silently ignore bot submission
    }

    // 2. Validate math answer
    const expected = mathChallenge.num1 + mathChallenge.num2
    if (parseInt(data.mathAnswer) !== expected) {
      alert('La respuesta a la verificación de seguridad es incorrecta.')
      return
    }

    setIsSubmitting(true)
    setSubmitResult(null)

    try {
      const response = await fetch('/api/libro-reclamaciones', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setSubmitResult({
          success: true,
          code: result.registrationCode,
          message: result.message,
        })
      } else {
        setSubmitResult({
          success: false,
          message: result.error || 'Ocurrió un error al procesar el registro.',
        })
      }
    } catch (err) {
      console.error('Error al enviar el formulario:', err)
      setSubmitResult({
        success: false,
        message: 'No se pudo conectar con el servidor. Intente de nuevo más tarde.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!mounted) return null

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />

      {/* Editorial Title Banner */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-[#F4F1ED] dark:bg-[#0A0F14] border-b border-border/40 transition-colors duration-300">
        <div className="section-container relative z-10">
          <div className="max-w-4xl">
            <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-primary mb-3 block">
              Servicio al Cliente
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight text-text-primary uppercase">
              Libro de Reclamaciones
            </h1>
            <p className="mt-4 text-xs md:text-sm text-text-secondary max-w-2xl leading-relaxed font-light">
              Conforme a lo establecido en el Código de Protección y Defensa del Consumidor de la República del Perú (Ley N.º 29571), ponemos a su disposición nuestro canal oficial para el registro de reclamos y quejas.
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
              <span>Grupo Empresarial UNIMAX S.A.C.</span>
              <span>RUC: 20614013983</span>
            </div>

            {submitResult?.success ? (
              <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800/40 rounded-lg p-6 md:p-8 text-center space-y-4">
                <div className="text-4xl text-green-600">✓</div>
                <h3 className="text-lg md:text-xl font-bold text-green-900 dark:text-green-300">
                  Registro Recibido Correctamente
                </h3>
                <p className="text-sm md:text-base text-green-700 dark:text-green-400">
                  Su registro ha sido recibido correctamente. Código de atención: <strong className="font-mono text-base px-2 py-0.5 bg-green-100 dark:bg-green-900/40 rounded text-green-800 dark:text-green-300">{submitResult.code}</strong>.
                </p>
                <p className="text-xs text-green-600/80 dark:text-green-400/60 max-w-md mx-auto">
                  Hemos enviado una confirmación a la dirección de correo proporcionada. Daremos respuesta en un plazo no mayor a quince (15) días hábiles.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitResult(null)
                      // Generate a new math challenge
                      setMathChallenge({
                        num1: Math.floor(Math.random() * 9) + 1,
                        num2: Math.floor(Math.random() * 9) + 1,
                      })
                    }}
                    className="inline-flex items-center justify-center h-10 px-6 text-xs font-bold tracking-wider uppercase bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors rounded-md"
                  >
                    Registrar otro reclamo/queja
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                {submitResult && !submitResult.success && (
                  <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800/40 rounded-lg p-4 text-sm text-red-700 dark:text-red-400">
                    <strong>Error:</strong> {submitResult.message}
                  </div>
                )}

                {/* Definitions */}
                <div className="bg-neutral-50 dark:bg-neutral-900/40 rounded-lg p-4 border border-neutral-200/50 dark:border-neutral-800/50 text-xs md:text-sm text-text-muted space-y-2">
                  <p><strong>Reclamo:</strong> Disconformidad relacionada con los productos o servicios expendidos o suministrados.</p>
                  <p><strong>Queja:</strong> Disconformidad no relacionada a los productos o servicios, sino al descontento o malestar respecto a la atención al cliente.</p>
                </div>

                {/* 1. Identificación del Consumidor */}
                <div className="space-y-4">
                  <h3 className="text-sm md:text-base font-bold text-text-primary uppercase tracking-wider pb-1 border-b border-border/40">
                    1. Identificación del Consumidor Reclamante
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-text-muted mb-1">
                        Tipo de Solicitud <span className="text-primary">*</span>
                      </label>
                      <div className="flex gap-4 mt-2">
                        <label className="flex items-center gap-2 text-sm cursor-pointer">
                          <input
                            type="radio"
                            value="Reclamo"
                            {...register('tipoSolicitud')}
                            className="w-4 h-4 text-primary border-gray-300 focus:ring-primary accent-primary"
                          />
                          Reclamo
                        </label>
                        <label className="flex items-center gap-2 text-sm cursor-pointer">
                          <input
                            type="radio"
                            value="Queja"
                            {...register('tipoSolicitud')}
                            className="w-4 h-4 text-primary border-gray-300 focus:ring-primary accent-primary"
                          />
                          Queja
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-text-muted mb-1">
                        Nombres y Apellidos / Razón Social <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        {...register('nombresApellidos')}
                        className="w-full h-10 px-3 text-sm bg-transparent border border-neutral-300 dark:border-white/10 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                        placeholder="Nombres y apellidos completos"
                      />
                      {errors.nombresApellidos && (
                        <p className="mt-1 text-xs text-red-500">{errors.nombresApellidos.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-text-muted mb-1">
                        Tipo de Documento <span className="text-primary">*</span>
                      </label>
                      <select
                        {...register('tipoDocumento')}
                        className="w-full h-10 px-3 text-sm bg-white dark:bg-[#0A0F14] border border-neutral-300 dark:border-white/10 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                      >
                        <option value="DNI">DNI</option>
                        <option value="CE">Carnet de Extranjería</option>
                        <option value="RUC">RUC</option>
                        <option value="Pasaporte">Pasaporte</option>
                      </select>
                      {errors.tipoDocumento && (
                        <p className="mt-1 text-xs text-red-500">{errors.tipoDocumento.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-text-muted mb-1">
                        Número de Documento <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        {...register('numeroDocumento')}
                        className="w-full h-10 px-3 text-sm bg-transparent border border-neutral-300 dark:border-white/10 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="Nro. de documento"
                      />
                      {errors.numeroDocumento && (
                        <p className="mt-1 text-xs text-red-500">{errors.numeroDocumento.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-text-muted mb-1">
                        Teléfono / WhatsApp <span className="text-primary">*</span>
                      </label>
                      <input
                        type="tel"
                        {...register('telefono')}
                        className="w-full h-10 px-3 text-sm bg-transparent border border-neutral-300 dark:border-white/10 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="+51"
                      />
                      {errors.telefono && (
                        <p className="mt-1 text-xs text-red-500">{errors.telefono.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-text-muted mb-1">
                        Correo Electrónico <span className="text-primary">*</span>
                      </label>
                      <input
                        type="email"
                        {...register('email')}
                        className="w-full h-10 px-3 text-sm bg-transparent border border-neutral-300 dark:border-white/10 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="usuario@correo.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-text-muted mb-1">
                        Domicilio <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        {...register('domicilio')}
                        className="w-full h-10 px-3 text-sm bg-transparent border border-neutral-300 dark:border-white/10 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="Av / Calle / Nro / Dpto / Distrito"
                      />
                      {errors.domicilio && (
                        <p className="mt-1 text-xs text-red-500">{errors.domicilio.message}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* 2. Detalle del Bien Contratado */}
                <div className="space-y-4">
                  <h3 className="text-sm md:text-base font-bold text-text-primary uppercase tracking-wider pb-1 border-b border-border/40">
                    2. Detalle del Bien o Servicio Contratado
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-text-muted mb-1">
                        Servicio Relacionado
                      </label>
                      <select
                        {...register('servicioRelacionado')}
                        className="w-full h-10 px-3 text-sm bg-white dark:bg-[#0A0F14] border border-neutral-300 dark:border-white/10 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                      >
                        <option value="Concreto Premezclado">Concreto Premezclado</option>
                        <option value="Alquiler de Bomba y Maquinaria">Alquiler de Bomba y Maquinaria</option>
                        <option value="Diseño de Mezcla / Laboratorio">Diseño de Mezcla / Laboratorio</option>
                        <option value="Logística / Despacho">Logística / Despacho</option>
                        <option value="Otro">Otro / No especificado</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-text-muted mb-1">
                        Nro. de Cotización, Pedido o Factura
                      </label>
                      <input
                        type="text"
                        {...register('numeroComprobante')}
                        className="w-full h-10 px-3 text-sm bg-transparent border border-neutral-300 dark:border-white/10 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="Nro. identificador (si aplica)"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-text-muted mb-1">
                        Fecha del Incidente <span className="text-primary">*</span>
                      </label>
                      <input
                        type="date"
                        {...register('fechaIncidente')}
                        className="w-full h-10 px-3 text-sm bg-white dark:bg-[#0A0F14] border border-neutral-300 dark:border-white/10 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                      {errors.fechaIncidente && (
                        <p className="mt-1 text-xs text-red-500">{errors.fechaIncidente.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-text-muted mb-1">
                        Monto Reclamado (S/.)
                      </label>
                      <input
                        type="text"
                        {...register('montoReclamado')}
                        className="w-full h-10 px-3 text-sm bg-transparent border border-neutral-300 dark:border-white/10 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="S/. 0.00 (si aplica)"
                      />
                    </div>
                  </div>
                </div>

                {/* 3. Detalle de la Reclamación */}
                <div className="space-y-4">
                  <h3 className="text-sm md:text-base font-bold text-text-primary uppercase tracking-wider pb-1 border-b border-border/40">
                    3. Detalle del Reclamo o Queja
                  </h3>

                  <div>
                    <label className="block text-xs font-bold uppercase text-text-muted mb-1">
                      Descripción de los Hechos <span className="text-primary">*</span>
                    </label>
                    <textarea
                      {...register('descripcionHechos')}
                      rows={4}
                      className="w-full p-3 text-sm bg-transparent border border-neutral-300 dark:border-white/10 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="Describa de manera clara y cronológica lo sucedido..."
                    />
                    {errors.descripcionHechos && (
                      <p className="mt-1 text-xs text-red-500">{errors.descripcionHechos.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-text-muted mb-1">
                      Pedido Concreto del Reclamante <span className="text-primary">*</span>
                    </label>
                    <textarea
                      {...register('pedidoConcreto')}
                      rows={3}
                      className="w-full p-3 text-sm bg-transparent border border-neutral-300 dark:border-white/10 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="Especifique qué solicita como solución..."
                    />
                    {errors.pedidoConcreto && (
                      <p className="mt-1 text-xs text-red-500">{errors.pedidoConcreto.message}</p>
                    )}
                  </div>
                </div>

                {/* Security and Acceptance */}
                <div className="space-y-4 pt-4 border-t border-border/40">
                  {/* Honeypot field (hidden from users) */}
                  <div className="hidden">
                    <input
                      type="text"
                      {...register('honeypot')}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  {/* Math verification */}
                  <div>
                    <label className="block text-xs font-bold uppercase text-text-muted mb-1">
                      Verificación de Seguridad <span className="text-primary">*</span>
                    </label>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-mono bg-neutral-100 dark:bg-white/5 px-3 py-2 rounded-md select-none">
                        ¿Cuánto es {mathChallenge.num1} + {mathChallenge.num2}?
                      </span>
                      <input
                        type="text"
                        {...register('mathAnswer')}
                        className="w-20 h-10 px-3 text-sm bg-transparent border border-neutral-300 dark:border-white/10 rounded-md focus:outline-none focus:ring-1 focus:ring-primary text-center"
                        placeholder="Respuesta"
                      />
                    </div>
                    {errors.mathAnswer && (
                      <p className="mt-1 text-xs text-red-500">{errors.mathAnswer.message}</p>
                    )}
                  </div>

                  {/* personal data checkbox */}
                  <div className="space-y-2">
                    <label className="flex items-start gap-2.5 text-xs text-text-secondary cursor-pointer">
                      <input
                        type="checkbox"
                        {...register('aceptaTratamientoDatos')}
                        className="mt-0.5 w-4 h-4 text-primary border-gray-300 focus:ring-primary rounded accent-primary"
                      />
                      <span>
                        Consiento el tratamiento de mis datos personales de acuerdo con las <a href="/politica-de-privacidad" target="_blank" className="text-primary hover:underline">Políticas de Privacidad</a> de UNIMAX Corp para la atención de esta reclamación.
                      </span>
                    </label>
                    {errors.aceptaTratamientoDatos && (
                      <p className="mt-1 text-xs text-red-500">{errors.aceptaTratamientoDatos.message}</p>
                    )}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center h-12 px-8 text-xs font-bold tracking-widest uppercase bg-primary text-white hover:bg-cta-hover disabled:bg-neutral-400 dark:disabled:bg-neutral-800 disabled:cursor-not-allowed transition-all duration-200 rounded-md active:scale-95 shadow-md text-center w-full md:w-auto"
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar Reclamación'}
                  </button>
                </div>
              </form>
            )}

            <div className="mt-12 pt-6 border-t border-border/40 text-center text-[10px] text-text-muted">
              <p>El proveedor resolverá el reclamo en el plazo indicado de acuerdo al D.S. N.º 011-2011-PCM.</p>
              <p className="mt-1">Grupo Empresarial UNIMAX S.A.C. — Lima, Perú.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
