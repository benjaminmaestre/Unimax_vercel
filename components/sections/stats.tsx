'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '@/components/language-provider'

function AnimatedCounter({ 
  value, 
  prefix = '', 
  suffix = '', 
  duration = 1800 
}: { 
  value: number
  prefix?: string
  suffix?: string
  duration?: number 
}) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  useEffect(() => {
    if (!isInView) return

    let startTime: number | null = null
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
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
  const { t } = useLanguage()

  const stats = [
    { value: 85000, prefix: '', suffix: '', unit: t('hero.stats.despacho.unit'), label: t('hero.stats.despacho.label') },
    { value: 1200, prefix: '', suffix: '+', unit: '', label: t('projects.prelabel').replace('• ', '') },
    { value: 25, prefix: '', suffix: '', unit: t('hero.stats.trayectoria.unit'), label: t('hero.stats.trayectoria.label') },
    { value: 60, prefix: '<', suffix: '', unit: t('hero.stats.entrega.unit'), label: t('hero.stats.entrega.label') },
  ]

  return (
    <section className="relative bg-surface border-y border-border/80 grain">
      <div className="section-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-border/80">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="py-8 lg:py-10 px-4 lg:px-6 text-center flex flex-col justify-center"
            >
              <div className="flex items-baseline justify-center gap-1">
                <span className="font-display text-4xl lg:text-6xl text-text-primary">
                  <AnimatedCounter 
                    value={stat.value} 
                    prefix={stat.prefix} 
                    suffix={stat.suffix}
                  />
                </span>
                {stat.unit && (
                  <span className="text-sm lg:text-base font-bold text-primary uppercase">
                    {stat.unit}
                  </span>
                )}
              </div>
              <p className="mt-1 text-[10px] font-bold tracking-[0.2em] uppercase text-text-muted">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
