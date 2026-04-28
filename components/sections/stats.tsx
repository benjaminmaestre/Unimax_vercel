'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: 120000, suffix: '', unit: 'm³', label: 'DESPACHO MENSUAL' },
  { value: 800, suffix: '+', unit: '', label: 'OBRAS COMPLETADAS' },
  { value: 28, suffix: '', unit: 'años', label: 'TRAYECTORIA' },
  { value: 90, prefix: '<', suffix: '', unit: 'min', label: 'TIEMPO DE ENTREGA' },
]

function AnimatedCounter({ 
  value, 
  prefix = '', 
  suffix = '', 
  duration = 2000 
}: { 
  value: number
  prefix?: string
  suffix?: string
  duration?: number 
}) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (!isInView) return

    let startTime: number | null = null
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOutQuart * value))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, value, duration])

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}

export function StatsSection() {
  return (
    <section className="relative bg-[var(--surface)] border-y border-[var(--border-subtle)] grain">
      <div className="section-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-[var(--border-subtle)]">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="py-10 lg:py-12 px-4 lg:px-8 text-center"
            >
              <div className="flex items-baseline justify-center gap-1">
                <span className="font-display text-5xl lg:text-7xl text-white">
                  <AnimatedCounter 
                    value={stat.value} 
                    prefix={stat.label === 'TIEMPO DE ENTREGA' ? '<' : ''} 
                    suffix={stat.suffix}
                  />
                </span>
                {stat.unit && (
                  <span className="text-xl lg:text-2xl font-semibold text-[var(--red-600)]">
                    {stat.unit}
                  </span>
                )}
              </div>
              <p className="mt-2 text-[11px] font-medium tracking-[0.14em] uppercase text-[var(--text-muted)]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
