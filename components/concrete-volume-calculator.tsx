'use client'

import { useMemo, useState } from 'react'
import { Calculator, MessageCircle } from 'lucide-react'
import { trackEvent } from '@/lib/analytics'

function parsePositive(value: string) {
  const parsed = Number.parseFloat(value.replace(',', '.'))
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 0
}

export function ConcreteVolumeCalculator() {
  const [length, setLength] = useState('')
  const [width, setWidth] = useState('')
  const [thickness, setThickness] = useState('')
  const [waste, setWaste] = useState('5')

  const result = useMemo(() => {
    const baseVolume = parsePositive(length) * parsePositive(width) * (parsePositive(thickness) / 100)
    return baseVolume > 0 ? baseVolume * (1 + parsePositive(waste) / 100) : 0
  }, [length, width, thickness, waste])

  const formattedResult = result.toLocaleString('es-PE', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
  const message = encodeURIComponent(
    `Hola, necesito cotizar aproximadamente ${formattedResult} m³ de concreto premezclado en Lima. ¿Pueden ayudarme a validar el volumen y la resistencia requerida?`
  )

  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Calculator aria-hidden="true" className="size-5" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-text-primary">Calculadora de concreto por volumen</h2>
          <p className="text-sm text-text-muted">Ingresa las medidas de la losa o elemento rectangular.</p>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {[
          ['Largo (metros)', length, setLength, 'Ej. 10'],
          ['Ancho (metros)', width, setWidth, 'Ej. 8'],
          ['Espesor (centímetros)', thickness, setThickness, 'Ej. 12'],
          ['Margen adicional (%)', waste, setWaste, 'Ej. 5'],
        ].map(([label, value, setter, placeholder]) => (
          <label key={label as string} className="space-y-2 text-sm font-semibold text-text-secondary">
            {label as string}
            <input
              value={value as string}
              onChange={(event) => (setter as (value: string) => void)(event.target.value)}
              inputMode="decimal"
              placeholder={placeholder as string}
              className="h-12 w-full rounded-lg border border-border bg-background px-4 font-normal text-text-primary outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
            />
          </label>
        ))}
      </div>
      <div className="mt-6 rounded-xl bg-[#0A0F14] p-6 text-white">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/60">Volumen referencial</p>
        <p className="mt-2 text-4xl font-bold">{formattedResult} m³</p>
        <p className="mt-3 text-xs leading-relaxed text-white/65">
          Resultado aproximado. Un asesor debe validar pérdidas, geometrías, bombeo, acceso y especificaciones antes del despacho.
        </p>
      </div>
      <a
        href={result > 0 ? `https://wa.me/51959345117?text=${message}` : 'https://wa.me/51959345117'}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent('calculator_quote_click', 'Price Calculator', `${formattedResult} m3`, result)}
        className="mt-5 inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-bold text-white transition hover:bg-cta-hover"
      >
        <MessageCircle aria-hidden="true" className="size-4" />
        Cotizar este volumen por WhatsApp
      </a>
    </div>
  )
}
