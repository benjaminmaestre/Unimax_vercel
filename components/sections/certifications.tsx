'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

export function CertificationsSection() {
  const { t } = useLanguage()

  const certifications = [
    {
      name: t('cert.c1.title'),
      description: t('cert.c1.desc'),
    },
    {
      name: t('cert.c2.title'),
      description: t('cert.c2.desc'),
    },
    {
      name: t('cert.c3.title'),
      description: t('cert.c3.desc'),
    },
  ]

  return (
    <section className="relative py-20 bg-surface border-y border-border/80 grain" id="certificaciones">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-primary">
            {t('cert.prelabel')}
          </span>
          <h2 className="mt-3 text-2xl lg:text-3xl font-bold leading-[1.15] tracking-tight text-text-primary text-balance">
            {t('cert.title')}
          </h2>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col p-6 rounded-lg bg-surface border border-border/80 hover:border-primary transition-colors duration-300 shadow-xs"
            >
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm lg:text-base font-bold text-text-primary tracking-wide">
                  {cert.name}
                </span>
              </div>
              <p className="mt-3 text-xs lg:text-sm text-text-muted leading-relaxed">
                {cert.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
