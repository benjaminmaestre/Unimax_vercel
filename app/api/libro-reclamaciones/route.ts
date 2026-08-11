import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'

// Schema validation for backend matching the frontend validations
const reclamacionSchema = z.object({
  tipoSolicitud: z.enum(['Reclamo', 'Queja']),
  nombresApellidos: z.string().min(2, 'Nombres y apellidos o razón social es requerido'),
  tipoDocumento: z.string().min(1, 'Tipo de documento es requerido'),
  numeroDocumento: z.string().min(4, 'Número de documento es requerido'),
  telefono: z.string().min(6, 'Teléfono es requerido'),
  email: z.string().email('Correo electrónico no válido'),
  domicilio: z.string().min(5, 'Domicilio es requerido'),
  servicioRelacionado: z.string().optional().default('No especificado'),
  numeroComprobante: z.string().optional().default('No especificado'),
  fechaIncidente: z.string().min(10, 'Fecha del incidente es requerida'),
  montoReclamado: z.string().optional().default('No aplica'),
  descripcionHechos: z.string().min(10, 'Descripción de los hechos es requerida'),
  pedidoConcreto: z.string().min(5, 'Pedido concreto es requerido'),
  aceptaTratamientoDatos: z.literal(true, {
    errorMap: () => ({ message: 'Debe aceptar el tratamiento de datos personales' }),
  }),
  captchaResponse: z.number().optional(), // For simple math captcha
})

// Configuración de Resend
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

// Preparación para Supabase (stub a ser implementado a futuro)
async function saveToSupabase(data: unknown, code: string, timestamp: string) {
  // TODO: Implementar guardado en Supabase a futuro
  // const { data, error } = await supabase.from('reclamaciones').insert([{ ...data, code, created_at: timestamp }])
  console.log('[Supabase Prep] Guardando datos con código:', code)
  return true
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // 1. Validar campos obligatorios en el backend
    const validationResult = reclamacionSchema.safeParse(body)
    if (!validationResult.success) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Datos del formulario inválidos', 
          details: validationResult.error.flatten().fieldErrors 
        },
        { status: 400 }
      )
    }

    const data = validationResult.data

    // 2. Generar número de registro temporal
    // Formato: LR-UNIMAX-YYYYMMDD-HHMMSS
    const now = new Date()
    // Adjust to Lima Time (UTC-5)
    const offset = -5
    const utc = now.getTime() + now.getTimezoneOffset() * 60000
    const limaDate = new Date(utc + 3600000 * offset)
    
    const year = limaDate.getFullYear()
    const month = String(limaDate.getMonth() + 1).padStart(2, '0')
    const day = String(limaDate.getDate()).padStart(2, '0')
    const hours = String(limaDate.getHours()).padStart(2, '0')
    const minutes = String(limaDate.getMinutes()).padStart(2, '0')
    const seconds = String(limaDate.getSeconds()).padStart(2, '0')

    const registrationCode = `LR-UNIMAX-${year}${month}${day}-${hours}${minutes}${seconds}`
    const timestampFormatted = `${day}/${month}/${year} ${hours}:${minutes}:${seconds} (Hora Lima)`

    // 3. Preparación de guardado (Supabase ready)
    await saveToSupabase(data, registrationCode, limaDate.toISOString())

    // Asunto del correo
    const emailSubject = `Nuevo registro en Libro de Reclamaciones - ${registrationCode}`

    // Cuerpo en formato HTML
    const emailHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px; border-radius: 8px;">
        <h2 style="color: #c13d3a; border-bottom: 2px solid #c13d3a; padding-bottom: 10px; margin-top: 0;">
          UNIMAX Corp - Libro de Reclamaciones
        </h2>
        
        <p>Se ha registrado una nueva solicitud en el Libro de Reclamaciones digital de UNIMAX Corp.</p>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr style="background-color: #f9f9f9;">
            <td style="padding: 8px; font-weight: bold; width: 40%; border-bottom: 1px solid #eee;">Código de Registro:</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee; font-family: monospace; font-weight: bold;">${registrationCode}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Fecha y Hora de Envío:</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${timestampFormatted}</td>
          </tr>
          <tr style="background-color: #f9f9f9;">
            <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Tipo de Solicitud:</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold; color: ${data.tipoSolicitud === 'Reclamo' ? '#c13d3a' : '#d97706'}">${data.tipoSolicitud.toUpperCase()}</td>
          </tr>
          
          <tr>
            <td colspan="2" style="padding: 12px 8px 4px 8px; font-weight: bold; color: #555; border-bottom: 1px solid #ddd; text-transform: uppercase; font-size: 11px;">
              Datos del Reclamante
            </td>
          </tr>
          <tr style="background-color: #f9f9f9;">
            <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Nombres y Apellidos / Razón Social:</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${data.nombresApellidos}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Documento:</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${data.tipoDocumento} - ${data.numeroDocumento}</td>
          </tr>
          <tr style="background-color: #f9f9f9;">
            <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Teléfono:</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${data.telefono}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Correo Electrónico:</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="mailto:${data.email}">${data.email}</a></td>
          </tr>
          <tr style="background-color: #f9f9f9;">
            <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Domicilio:</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${data.domicilio}</td>
          </tr>
          
          <tr>
            <td colspan="2" style="padding: 12px 8px 4px 8px; font-weight: bold; color: #555; border-bottom: 1px solid #ddd; text-transform: uppercase; font-size: 11px;">
              Detalles del Bien/Servicio Contratado
            </td>
          </tr>
          <tr style="background-color: #f9f9f9;">
            <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Servicio Relacionado:</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${data.servicioRelacionado}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Nro. Cotización/Pedido/Factura:</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${data.numeroComprobante}</td>
          </tr>
          <tr style="background-color: #f9f9f9;">
            <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Monto Reclamado:</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${data.montoReclamado}</td>
          </tr>
          
          <tr>
            <td colspan="2" style="padding: 12px 8px 4px 8px; font-weight: bold; color: #555; border-bottom: 1px solid #ddd; text-transform: uppercase; font-size: 11px;">
              Detalles de la Reclamación o Queja
            </td>
          </tr>
          <tr style="background-color: #f9f9f9;">
            <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Fecha del Incidente:</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${data.fechaIncidente}</td>
          </tr>
          <tr>
            <td colspan="2" style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee; background-color: #fff;">
              Descripción de los hechos:
              <p style="font-weight: normal; margin-top: 5px; padding: 10px; background-color: #f5f5f5; border-radius: 4px; border-left: 3px solid #ccc; white-space: pre-wrap;">${data.descripcionHechos}</p>
            </td>
          </tr>
          <tr style="background-color: #f9f9f9;">
            <td colspan="2" style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">
              Pedido concreto del reclamante:
              <p style="font-weight: normal; margin-top: 5px; padding: 10px; background-color: #f5f5f5; border-radius: 4px; border-left: 3px solid #c13d3a; white-space: pre-wrap;">${data.pedidoConcreto}</p>
            </td>
          </tr>
        </table>
        
        <div style="margin-top: 30px; font-size: 11px; color: #777; border-top: 1px solid #eee; padding-top: 10px; text-align: center;">
          Este es un correo automático generado por el sistema digital de UNIMAX Corp.
        </div>
      </div>
    `

    // Cuerpo en formato HTML para el usuario
    const userCopyHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px; border-radius: 8px;">
        <h2 style="color: #c13d3a; border-bottom: 2px solid #c13d3a; padding-bottom: 10px; margin-top: 0;">
          UNIMAX Corp - Confirmación de Registro
        </h2>
        
        <p>Estimado(a) <strong>${data.nombresApellidos}</strong>,</p>
        
        <p>Le confirmamos que su solicitud ha sido recibida correctamente en nuestro Libro de Reclamaciones.</p>
        
        <div style="background-color: #f9f9f9; border-left: 4px solid #c13d3a; padding: 15px; margin: 20px 0; border-radius: 0 4px 4px 0;">
          <p style="margin: 0; font-weight: bold; font-size: 16px; color: #333;">Código de Atención: <span style="font-family: monospace; color: #c13d3a;">${registrationCode}</span></p>
          <p style="margin: 5px 0 0 0; font-size: 13px; color: #666;">Fecha de registro: ${timestampFormatted}</p>
        </div>

        <p>De acuerdo con la normativa vigente en el Perú (Ley de Protección al Consumidor), daremos respuesta a su solicitud en un plazo no mayor a quince (15) días hábiles.</p>
        
        <h3 style="color: #555; margin-top: 25px; border-bottom: 1px solid #eee; padding-bottom: 5px;">Resumen del Registro:</h3>
        <ul style="list-style-type: none; padding-left: 0; font-size: 14px; line-height: 1.6;">
          <li><strong>Tipo de Solicitud:</strong> ${data.tipoSolicitud}</li>
          <li><strong>Documento de Identidad:</strong> ${data.tipoDocumento} - ${data.numeroDocumento}</li>
          <li><strong>Servicio Relacionado:</strong> ${data.servicioRelacionado}</li>
          <li><strong>Fecha del Incidente:</strong> ${data.fechaIncidente}</li>
          <li><strong>Pedido Concreto:</strong> ${data.pedidoConcreto}</li>
        </ul>

        <p style="margin-top: 30px; font-size: 13px; color: #555;">
          Agradecemos su comunicación.
        </p>

        <p style="font-size: 13px; font-weight: bold; color: #333; margin-bottom: 0;">
          Atentamente,<br>
          Área Comercial - UNIMAX Corp
        </p>
        
        <div style="margin-top: 30px; font-size: 11px; color: #777; border-top: 1px solid #eee; padding-top: 10px; text-align: center;">
          Este es un correo automático de confirmación. Por favor, no responda directamente a este mensaje.
        </div>
      </div>
    `

    // 4. Enviar correos si Resend está configurado
    if (resend) {
      // Envío de correo a la empresa
      await resend.emails.send({
        from: 'Libro de Reclamaciones <onboarding@resend.dev>', // Usar remitente por defecto de Resend
        to: 'area.comercial@unimaxcorp.com',
        subject: emailSubject,
        html: emailHtml,
        replyTo: data.email
      })

      // Envío de copia al usuario
      try {
        await resend.emails.send({
          from: 'Libro de Reclamaciones <onboarding@resend.dev>',
          to: data.email,
          subject: `Confirmación de Registro en Libro de Reclamaciones - ${registrationCode}`,
          html: userCopyHtml
        })
      } catch (err) {
        console.error('Error al enviar copia al correo del usuario:', err)
        // No bloqueamos la respuesta principal si falla el envío de la copia del usuario
      }
    } else {
      console.warn('RESEND_API_KEY no está configurada. Simulación de envío de correo.')
      console.log('--- EMAIL INTERNO ---')
      console.log('Asunto:', emailSubject)
      console.log('Destinatario:', 'area.comercial@unimaxcorp.com')
      console.log('--- EMAIL USUARIO ---')
      console.log('Asunto:', `Confirmación de Registro en Libro de Reclamaciones - ${registrationCode}`)
      console.log('Destinatario:', data.email)
    }

    return NextResponse.json({
      success: true,
      message: 'Registro recibido correctamente',
      registrationCode: registrationCode,
      timestamp: timestampFormatted
    })

  } catch (error) {
    console.error('Error en el registro del Libro de Reclamaciones:', error)
    return NextResponse.json(
      { success: false, error: 'Ocurrió un error al procesar el registro.' },
      { status: 500 }
    )
  }
}
