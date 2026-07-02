import { GoogleGenerativeAI } from '@google/generative-ai'
import { NextRequest, NextResponse } from 'next/server'

const SYSTEM_PROMPT = `Eres el asistente virtual de UNIMAX Corp, empresa líder en concreto premezclado y maquinaria pesada en Lima, Perú. Tu nombre es "UNIMAX Asistente".

INFORMACIÓN DE LA EMPRESA:
- UNIMAX Corp tiene más de 10 años de experiencia acumulada en el sector, integrando trayectoria operativa, conocimiento técnico y atención directa a obras.
- Operan 2 plantas dosificadoras de concreto en Lima que despachan 24/7.
- Capacidad mensual: Actualmente atienden un promedio aproximado de 600 m³ mensuales, con proyección de crecimiento operativo hacia 1.200 m³ mensuales.
- Tiempo de entrega: Despachos desde hasta 90 minutos referenciales (sujeto a ubicación, tráfico, programación y condiciones de obra).
- Despacho y GPS: Coordinan cada despacho mediante comunicación directa con operadores y seguimiento operativo de ruta. Algunos equipos cuentan con GPS según disponibilidad.
- Certificaciones y Normas: Trabajan conforme a criterios técnicos aplicables al concreto en obra, incluyendo la Norma E.060 y documentación técnica según corresponda.

SERVICIOS PRINCIPALES:
1. Concreto Premezclado: Resistencias desde f'c 100 hasta f'c 420+ kg/cm². Concreto estándar, autocompactante, shotcrete, ligero, pesado, y concreto de alta resistencia temprana.
2. Bomba de Concreto (Bombeo): Bombas telescópicas y estacionarias para vaciado en altura y difícil acceso. Capacidad hasta 150 m³/h.
3. Alquiler de Maquinaria Pesada: Mixers, retroexcavadoras, cargadores frontales, volquetes, rodillos compactadores.

COBERTURA: Lima Metropolitana y principales provincias del Perú.

CONTACTO:
- WhatsApp: +51 932 095 130 (Solo chat, no recibe llamadas)
- Dirección: Calle Carrozable Lote 4, Lurigancho, Lima
- Web: unimaxcorp.com

ALIADOS: Tienen convenios con las empresas más grandes del Perú para garantizar suministro ininterrumpido.

REGLAS DE COMPORTAMIENTO:
- Responde SIEMPRE en español a menos que el usuario escriba en inglés.
- Sé profesional, amable y directo.
- Si preguntan por cotización, invítalos a usar el formulario de contacto o escribir al WhatsApp +51 932 095 130 (no recibe llamadas).
- No inventes datos que no están aquí. Si no sabes algo, di "Para información más detallada, te invito a contactarnos directamente."
- Mantén respuestas cortas y útiles (máximo 3-4 oraciones).
- Usa emojis con moderación (🏗️ 🚛 ✅) para hacerlo más amigable.
- Si preguntan algo no relacionado con construcción, redirige amablemente a los servicios de UNIMAX.`

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.GEMINI_API_KEY
    
    if (!apiKey) {
      return NextResponse.json(
        { error: 'API key no configurada' },
        { status: 500 }
      )
    }

    const { messages } = await request.json()

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Mensajes inválidos' },
        { status: 400 }
      )
    }

    const genAI = new GoogleGenerativeAI(apiKey)
    const model = genAI.getGenerativeModel({ 
      model: 'gemini-2.0-flash',
      systemInstruction: SYSTEM_PROMPT,
    })

    // Convert messages to Gemini format
    const history = messages.slice(0, -1).map((msg: { role: string; content: string }) => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }],
    }))

    const chat = model.startChat({ history })
    
    const lastMessage = messages[messages.length - 1]
    const result = await chat.sendMessage(lastMessage.content)
    const response = result.response.text()

    return NextResponse.json({ message: response })
  } catch (error) {
    console.error('Gemini API Error:', error)
    return NextResponse.json(
      { error: 'Error al procesar tu mensaje. Intenta de nuevo.' },
      { status: 500 }
    )
  }
}
