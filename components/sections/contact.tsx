'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Phone, Mail, MapPin, Linkedin, Instagram } from 'lucide-react'
import { useState } from 'react'
import { useLanguage } from '@/components/language-provider'

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

  const contactLines = [
    {
      title: language === 'es' ? 'Concreto Premezclado' : 'Ready-Mix Concrete',
      phones: ['+51 1 604-3901', '+51 999 123 456'],
      hours: language === 'es' ? 'Lun–Sáb: 5:00 am – 8:00 pm' : 'Mon–Sat: 5:00 am – 8:00 pm',
    },
    {
      title: language === 'es' ? 'Bombeo y Maquinaria' : 'Pumping & Machinery',
      phones: ['+51 1 604-3902', '+51 998 123 456'],
      hours: language === 'es' ? 'Lun–Sáb: 5:00 am – 8:00 pm' : 'Mon–Sat: 5:00 am – 8:00 pm',
    },
    {
      title: language === 'es' ? 'Soporte Técnico' : 'Technical Support',
      phones: ['+51 1 604-3903'],
      hours: language === 'es' ? 'Emergencias: 24/7' : 'Emergencies: 24/7',
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
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
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder={t('contact.form.name')}
                  value={formData.name}
                  required
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-12 px-4 rounded-md bg-background border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors text-sm"
                />
                <input
                  type="text"
                  placeholder={language === 'es' ? 'Empresa / Razón social (Opcional)' : 'Company Name (Optional)'}
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="h-12 px-4 rounded-md bg-background border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors text-sm"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <select
                  value={formData.type}
                  required
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="h-12 px-4 rounded-md bg-background border border-border text-text-primary focus:outline-none focus:border-primary transition-colors text-sm appearance-none cursor-pointer"
                >
                  <option value="">{t('contact.form.service.placeholder')}</option>
                  <option value="concreto">{t('contact.form.service.opt1')}</option>
                  <option value="bombeo">{t('contact.form.service.opt2')}</option>
                  <option value="laboratorio">{t('contact.form.service.opt3')}</option>
                </select>
                <input
                  type="text"
                  placeholder={t('contact.form.volume')}
                  value={formData.volume}
                  required
                  onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                  className="h-12 px-4 rounded-md bg-background border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors text-sm"
                />
              </div>

              <input
                type="text"
                placeholder={t('contact.form.location')}
                value={formData.address}
                required
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full h-12 px-4 rounded-md bg-background border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors text-sm"
              />

              <textarea
                placeholder={t('contact.form.msg')}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 rounded-md bg-background border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors resize-none text-sm"
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
              <h3 className="text-lg lg:text-xl font-bold text-text-primary tracking-wide">
                {t('contact.info.title')}
              </h3>

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
                      {line.phones.map((phone) => (
                        <a href={`tel:${phone.replace(/\s+/g, '')}`} key={phone} className="block text-sm lg:text-base text-text-secondary hover:text-primary transition-colors font-mono">
                          {phone}
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
                    <a href={`mailto:${t('contact.info.email.desc')}`} className="text-xs lg:text-sm text-text-muted hover:text-primary transition-colors mt-0.5 block font-mono">
                      {t('contact.info.email.desc')}
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Links - Technical Matte style */}
              <div className="mt-6 pt-6 border-t border-border/40 flex items-center gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-all shadow-xs"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-all shadow-xs"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/51999123456"
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

      {/* WhatsApp FAB - Premium Authentic Green Floating Button */}
      <motion.a
        href="https://wa.me/51999123456"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-lg hover:scale-105 active:scale-95 transition-transform group cursor-pointer border border-[#20ba59]"
        aria-label="Chat on WhatsApp"
      >
        {/* Sleek SVG WhatsApp Logo */}
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
          <path d="M12.031 2c-5.514 0-9.99 4.493-9.99 10.011 0 1.908.533 3.693 1.458 5.221L2 22l5.002-1.309c1.479.802 3.167 1.258 4.96 1.258 5.513 0 10.038-4.492 10.038-10.011C22.069 6.493 17.545 2 12.031 2zm0 18.294c-1.637 0-3.181-.469-4.502-1.354l-.323-.19-3.003.786.804-2.918-.21-.334c-.958-1.528-1.464-3.3-1.464-5.148 0-4.887 4.004-8.86 8.93-8.86 4.925 0 8.931 3.973 8.931 8.86.002 4.887-4.004 8.86-8.931 8.86zm4.908-6.079c-.269-.134-1.593-.787-1.841-.877-.247-.09-.427-.134-.607.134-.18.269-.696.877-.853 1.057-.157.18-.314.202-.583.067-.269-.134-1.137-.419-2.167-1.337-.802-.714-1.342-1.597-1.5-1.867-.157-.269-.017-.414.118-.548.121-.121.269-.314.404-.471.134-.157.18-.269.269-.449.09-.18.045-.337-.022-.471-.067-.134-.607-1.46-.831-2.001-.219-.526-.44-.453-.607-.461-.157-.008-.337-.008-.517-.008-.18 0-.472.067-.719.337-.247.269-.943.921-.943 2.246s.965 2.605 1.101 2.785c.134.18 1.9 2.9 4.6 4.069.643.277 1.144.443 1.536.568.647.206 1.233.177 1.697.108.517-.077 1.593-.651 1.819-1.28.225-.63.225-1.17.157-1.28-.069-.113-.248-.18-.517-.314z" />
        </svg>
        {/* Dynamic Tooltip */}
        <span className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-black/85 text-white text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-white/5 shadow-md tracking-wider uppercase select-none pointer-events-none">
          {language === 'es' ? 'Chatea ahora' : 'Chat now'}
        </span>
      </motion.a>
    </section>
  )
}
