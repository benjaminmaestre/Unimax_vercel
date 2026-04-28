'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Phone, Mail, MapPin, Linkedin, Instagram } from 'lucide-react'
import { useState } from 'react'

const contactLines = [
  {
    title: 'Concreto Premezclado',
    phones: ['+57 604 XXX XXXX', '+57 300 XXX XXXX'],
    hours: 'Lun–Sáb: 5:00 am – 6:00 pm',
  },
  {
    title: 'Bombeo y Maquinaria',
    phones: ['+57 604 XXX XXXX', '+57 301 XXX XXXX'],
    hours: 'Lun–Sáb: 5:00 am – 6:00 pm',
  },
  {
    title: 'Soporte Técnico',
    phones: ['+57 604 XXX XXXX'],
    hours: 'Emergencias: 24/7',
  },
]

const requirementTypes = [
  'Concreto',
  'Bombeo',
  'Maquinaria',
  'Consulta',
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    type: '',
    volume: '',
    address: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('[v0] Form submitted:', formData)
  }

  return (
    <section className="relative py-24 lg:py-32 bg-[var(--surface)] grain" id="contacto">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="text-[11px] font-medium tracking-[0.14em] uppercase text-[var(--red-600)]">
            • HABLEMOS DE TU OBRA
          </span>
          <h2 className="mt-3 text-3xl lg:text-[40px] font-bold leading-[1.1] tracking-[-0.02em] text-white">
            Solicita tu cotización ahora.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Nombre completo"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-[52px] px-4 rounded-lg bg-[var(--elevated)] border border-[var(--border)] text-white placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--red-600)] transition-colors"
                />
                <input
                  type="text"
                  placeholder="Empresa / Razón social"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="h-[52px] px-4 rounded-lg bg-[var(--elevated)] border border-[var(--border)] text-white placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--red-600)] transition-colors"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="h-[52px] px-4 rounded-lg bg-[var(--elevated)] border border-[var(--border)] text-white focus:outline-none focus:border-[var(--red-600)] transition-colors appearance-none cursor-pointer"
                >
                  <option value="" className="bg-[var(--elevated)]">Tipo de requerimiento</option>
                  {requirementTypes.map((type) => (
                    <option key={type} value={type} className="bg-[var(--elevated)]">
                      {type}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  placeholder="Volumen estimado (m³)"
                  value={formData.volume}
                  onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                  className="h-[52px] px-4 rounded-lg bg-[var(--elevated)] border border-[var(--border)] text-white placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--red-600)] transition-colors"
                />
              </div>

              <input
                type="text"
                placeholder="Dirección de la obra"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full h-[52px] px-4 rounded-lg bg-[var(--elevated)] border border-[var(--border)] text-white placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--red-600)] transition-colors"
              />

              <textarea
                placeholder="Mensaje / observaciones"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-[var(--elevated)] border border-[var(--border)] text-white placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--red-600)] transition-colors resize-none"
              />

              <button
                type="submit"
                className="group w-full h-[52px] text-[13px] font-medium tracking-[0.12em] uppercase bg-[var(--red-600)] text-white rounded-lg hover:bg-[var(--red-700)] hover:glow-red-intense transition-all duration-150 flex items-center justify-center gap-2"
              >
                Solicitar cotización
                <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1" />
              </button>

              <p className="text-center text-sm text-[var(--text-muted)]">
                Respuesta en menos de 2 horas hábiles · Sin compromiso
              </p>
            </form>
          </motion.div>

          {/* Contact Info Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="glass rounded-xl border border-[var(--border-subtle)] p-6 lg:p-8">
              <h3 className="text-xl font-semibold text-white">
                Líneas de Despacho Directo
              </h3>

              <div className="mt-6 space-y-6">
                {contactLines.map((line, index) => (
                  <div
                    key={line.title}
                    className={`pb-6 ${index < contactLines.length - 1 ? 'border-b border-[var(--border-subtle)]' : ''}`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2 h-2 rounded-full bg-[var(--red-600)]" />
                      <span className="font-medium text-white">{line.title}</span>
                    </div>
                    <div className="ml-4 space-y-1">
                      {line.phones.map((phone) => (
                        <p key={phone} className="text-base text-[var(--text-secondary)]">
                          {phone}
                        </p>
                      ))}
                      <p className="text-sm text-[var(--text-muted)]">{line.hours}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-[var(--border-subtle)]">
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-[var(--red-600)] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-base text-white">Sede principal</p>
                    <p className="text-sm text-[var(--text-muted)]">
                      Calle XX #XX-XX, Bello, Antioquia
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[var(--red-600)] flex-shrink-0 mt-0.5" />
                  <p className="text-base text-white">info@unimaxcorp.com.co</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-6 pt-6 border-t border-[var(--border-subtle)] flex items-center gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-[var(--elevated)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-secondary)] hover:text-white hover:border-[var(--red-600)] transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-[var(--elevated)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-secondary)] hover:text-white hover:border-[var(--red-600)] transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-[#25D366] flex items-center justify-center text-white hover:shadow-[0_0_24px_rgba(37,211,102,0.4)] transition-shadow"
                >
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* WhatsApp FAB */}
      <motion.a
        href="#"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="fixed bottom-6 right-6 z-50 w-[60px] h-[60px] rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-[0_0_24px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform group"
      >
        <Phone className="w-7 h-7" />
        <span className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-white text-[var(--black-950)] text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Chatea ahora
        </span>
      </motion.a>
    </section>
  )
}
