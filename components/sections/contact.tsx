'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Phone, Mail, MapPin, Facebook } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useLanguage } from '@/components/language-provider'
import { trackEvent } from '@/lib/analytics'

function TiktokIcon({ className, strokeWidth = 2 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  )
}

export function ContactSection() {
  const { language, t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    type: '',
    volume: '',
    address: '',
    message: '',
  })
  const [touched, setTouched] = useState<Record<string, boolean>>({})

  // Event listener for map quote click autofill
  useEffect(() => {
    const handleAutofill = (e: Event) => {
      const customEvent = e as CustomEvent
      if (customEvent.detail) {
        setFormData(prev => ({
          ...prev,
          address: customEvent.detail.address || prev.address,
          message: customEvent.detail.message || prev.message,
          type: customEvent.detail.service || prev.type,
        }))
      }
    }
    window.addEventListener('autofill-contact', handleAutofill)
    return () => {
      window.removeEventListener('autofill-contact', handleAutofill)
    }
  }, [])

  const handleBlur = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }))
  }

  const contactLines = [
    {
      title: language === 'es' ? 'Central Comercial' : 'Commercial Central',
      items: [
        {
          label: language === 'es' ? '+51 959 345 117 (Solo WhatsApp)' : '+51 959 345 117 (WhatsApp Only)',
          href: 'https://wa.me/51959345117',
        },
      ],
      hours: language === 'es' ? 'Lun–Vie: 8:00 am – 6:00 pm | Sáb: 8:00 am – 1:00 pm' : 'Mon–Fri: 8:00 am – 6:00 pm | Sat: 8:00 am – 1:00 pm',
    },
    {
      title: language === 'es' ? 'Áreas de Contacto' : 'Contact Departments',
      items: [
        { label: 'area.comercial@unimaxcorp.com', href: 'mailto:area.comercial@unimaxcorp.com' },
        { label: 'consultas@unimaxcorp.com', href: 'mailto:consultas@unimaxcorp.com' },
      ],
      hours: language === 'es' ? 'Consultas comerciales, soporte y calidad' : 'Commercial inquiries, support and quality',
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Track form submission event in GA4
    trackEvent('submit_form', 'Contact', 'Quote Form Submitted')
    // Handle form submission
    console.log('Submitted', formData)
  }

  return (
    <section className="relative py-12 lg:py-32 bg-surface grain" id="contacto">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10 lg:mb-16"
        >
          <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-primary">
            {t('contact.prelabel')}
          </span>
          <h2 className="mt-3 text-2xl lg:text-4xl font-bold leading-[1.15] tracking-tight text-text-primary">
            {t('contact.title')}
          </h2>
          <p className="mt-4 text-sm lg:text-base text-text-muted max-w-2xl mx-auto">
            {t('contact.desc')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <form id="cotizador-volumen" aria-label="Cotizador de Volumen" onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder={t('contact.form.name')}
                  value={formData.name}
                  required
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onBlur={() => handleBlur('name')}
                  className={`h-12 px-4 rounded-md bg-background border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors text-base lg:text-sm ${
                    touched.name && !formData.name ? 'border-red-500 bg-red-500/5' : 'border-border'
                  }`}
                />
                <input
                  type="text"
                  placeholder={language === 'es' ? 'Empresa / Razón social (Opcional)' : 'Company Name (Optional)'}
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="h-12 px-4 rounded-md bg-background border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors text-base lg:text-sm"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <select
                  value={formData.type}
                  required
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  onBlur={() => handleBlur('type')}
                  className={`h-12 px-4 rounded-md bg-background border text-text-primary focus:outline-none focus:border-primary transition-colors text-base lg:text-sm appearance-none cursor-pointer ${
                    touched.type && !formData.type ? 'border-red-500 bg-red-500/5' : 'border-border'
                  }`}
                >
                  <option value="">{t('contact.form.service.placeholder')}</option>
                  <option value="concreto">{t('contact.form.service.opt1')}</option>
                  <option value="bombeo">{t('contact.form.service.opt2')}</option>
                  <option value="laboratorio">{t('contact.form.service.opt3')}</option>
                </select>
                <input
                  type="text"
                  aria-label="Largo, Ancho y Espesor de la losa"
                  placeholder={language === 'es' ? 'Volumen o Medidas (Largo x Ancho x Espesor)' : 'Volume or Dimensions (L x W x H)'}
                  value={formData.volume}
                  required
                  onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                  onBlur={() => handleBlur('volume')}
                  className={`h-12 px-4 rounded-md bg-background border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors text-base lg:text-sm ${
                    touched.volume && !formData.volume ? 'border-red-500 bg-red-500/5' : 'border-border'
                  }`}
                />
              </div>

              <input
                type="text"
                placeholder={t('contact.form.location')}
                value={formData.address}
                required
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                onBlur={() => handleBlur('address')}
                className={`w-full h-12 px-4 rounded-md bg-background border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors text-base lg:text-sm ${
                  touched.address && !formData.address ? 'border-red-500 bg-red-500/5' : 'border-border'
                }`}
              />

              <textarea
                placeholder={t('contact.form.msg')}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 rounded-md bg-background border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors resize-none text-base lg:text-sm"
              />

              <button
                type="submit"
                className="group w-full h-12 text-xs font-bold tracking-[0.12em] uppercase bg-primary hover:bg-cta-hover text-white rounded-md transition-all active:scale-98 shadow-sm flex items-center justify-center gap-2 border border-primary hover:border-cta-hover"
              >
                {t('contact.form.submit')}
                <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1" />
              </button>

              <p className="text-center text-xs text-text-muted">
                {language === 'es' ? 'Respuesta en menos de 2 horas hábiles · Datos referenciales' : 'Response in under 2 business hours · Reference information'}
              </p>
            </form>
          </motion.div>

          {/* Contact Info Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="bg-background rounded-xl border border-border/80 p-6 lg:p-8 shadow-xs">
              <p className="text-lg lg:text-xl font-bold text-text-primary tracking-wide">
                {t('contact.info.title')}
              </p>

              <div className="mt-6 space-y-6">
                {contactLines.map((line, index) => (
                  <div
                    key={line.title}
                    className={`pb-5 ${index < contactLines.length - 1 ? 'border-b border-border/40' : ''}`}
                  >
                    <div className="flex items-center gap-2.5 mb-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="font-bold text-sm lg:text-base text-text-primary">{line.title}</span>
                    </div>
                    <div className="ml-4 space-y-1">
                      {line.items.map((item) => (
                        <a
                          href={item.href}
                          key={item.label}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          onClick={() => {
                            if (item.href.includes('wa.me')) {
                              trackEvent('click_whatsapp', 'Contact', 'WhatsApp Link Info')
                            } else if (item.href.startsWith('mailto:')) {
                              trackEvent('click_email', 'Contact', item.label)
                            }
                          }}
                          className="block text-sm lg:text-base text-text-secondary hover:text-primary transition-colors font-mono"
                        >
                          {item.label}
                        </a>
                      ))}
                      <p className="text-xs text-text-muted">{line.hours}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-border/40 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm lg:text-base font-bold text-text-primary">{t('contact.info.address.title')}</p>
                    <p className="text-xs lg:text-sm text-text-muted mt-0.5">
                      {t('contact.info.address.desc')}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm lg:text-base font-bold text-text-primary">{t('contact.info.email.title')}</p>
                    <a 
                      href={`mailto:${t('contact.info.email.desc')}`} 
                      onClick={() => trackEvent('click_email', 'Contact', t('contact.info.email.desc'))}
                      className="text-xs lg:text-sm text-text-muted hover:text-primary transition-colors mt-0.5 block font-mono"
                    >
                      {t('contact.info.email.desc')}
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Links - Technical Matte style */}
              <div className="mt-6 pt-6 border-t border-border/40 flex items-center gap-4">
                <a
                  href="https://www.facebook.com/UNIMAXCORP/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('click_social', 'Contact', 'Facebook Link')}
                  className="w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-all shadow-xs"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://www.tiktok.com/@unimaxcorp"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('click_social', 'Contact', 'TikTok Link')}
                  className="w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-all shadow-xs"
                  aria-label="TikTok"
                >
                  <TiktokIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/51959345117"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('click_whatsapp', 'Contact', 'Social Section WhatsApp')}
                  className="w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-all shadow-xs"
                  aria-label="WhatsApp"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  )
}
