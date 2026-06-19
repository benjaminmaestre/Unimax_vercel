'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [preferences, setPreferences] = useState({ analytics: false })

  useEffect(() => {
    // Check local storage for existing consent
    const consent = localStorage.getItem('unimax-cookie-consent')
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 400)
      return () => clearTimeout(timer)
    }
  }, [])

  const saveConsent = (status: 'accepted' | 'declined' | 'custom', analyticsEnabled: boolean) => {
    localStorage.setItem('unimax-cookie-consent', status)
    localStorage.setItem('unimax-cookie-analytics', analyticsEnabled ? 'true' : 'false')
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 40, opacity: 0, filter: 'blur(8px)' }}
          animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          exit={{ y: 20, opacity: 0, scale: 0.95, filter: 'blur(4px)' }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-4 left-4 right-4 z-50 md:bottom-6 md:left-6 md:right-auto md:w-full md:max-w-[420px]"
        >
          {/* Outer Border with Subtle Gradient */}
          <div className="relative overflow-hidden rounded-2xl p-px shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
            {/* Border Gradient (Red/Copper) */}
            <div className="absolute inset-0 bg-linear-to-br from-red-900/60 via-neutral-800/30 to-black/80" />
            
            {/* Inner Content */}
            <div className="relative rounded-[15px] bg-[#0A0A0A]/90 p-5 backdrop-blur-xl border border-white/5">
              
              {/* Header: Active Indicator */}
              <div className="mb-4 flex items-center gap-2">
                <div className="relative flex h-2 w-2 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500/80 opacity-75"></span>
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-red-500"></span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
                  Privacy Control
                </span>
              </div>

              {/* Dynamic Content area */}
              <motion.div
                layout
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <AnimatePresence mode="wait">
                  {!isExpanded ? (
                    <motion.div
                      key="collapsed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex flex-col gap-5"
                    >
                      <div className="flex flex-col gap-1.5">
                        <h3 className="text-sm font-semibold text-white">Privacidad y cookies</h3>
                        <p className="text-xs leading-relaxed text-neutral-400">
                          Usamos cookies necesarias y analíticas para mejorar el funcionamiento del sitio.
                        </p>
                      </div>

                      <div className="flex items-center justify-between gap-3">
                        <button
                          onClick={() => setIsExpanded(true)}
                          className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 transition-colors hover:text-white"
                        >
                          Configurar
                        </button>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => saveConsent('declined', false)}
                            className="rounded-lg px-4 py-2 text-xs font-semibold text-neutral-400 transition-colors hover:bg-white/5 hover:text-white"
                          >
                            Rechazar
                          </button>
                          <button
                            onClick={() => saveConsent('accepted', true)}
                            className="rounded-lg bg-white px-5 py-2 text-xs font-bold text-black shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all hover:scale-105 hover:bg-neutral-200"
                          >
                            Aceptar
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="expanded"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex flex-col gap-5"
                    >
                      <div className="flex flex-col gap-3">
                        {/* Necesarias */}
                        <div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/5 p-3">
                          <div className="flex flex-col gap-0.5">
                            <span className="text-xs font-semibold text-white">Necesarias</span>
                            <span className="text-[10px] text-neutral-500">Requeridas para el sitio.</span>
                          </div>
                          {/* Disabled Switch */}
                          <div className="relative h-4 w-8 rounded-full bg-red-600/50 opacity-50 cursor-not-allowed">
                            <div className="absolute right-0.5 top-0.5 h-3 w-3 rounded-full bg-white" />
                          </div>
                        </div>

                        {/* Analíticas */}
                        <div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/5 p-3">
                          <div className="flex flex-col gap-0.5">
                            <span className="text-xs font-semibold text-white">Analíticas</span>
                            <span className="text-[10px] text-neutral-500">Miden visitas y rendimiento.</span>
                          </div>
                          {/* Toggle Switch */}
                          <button
                            onClick={() => setPreferences(prev => ({ ...prev, analytics: !prev.analytics }))}
                            className={`relative h-4 w-8 rounded-full transition-colors duration-300 ${
                              preferences.analytics ? 'bg-red-600' : 'bg-neutral-700'
                            }`}
                          >
                            <motion.div
                              layout
                              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                              className="absolute top-0.5 h-3 w-3 rounded-full bg-white shadow-sm"
                              initial={false}
                              animate={{ x: preferences.analytics ? 16 : 2 }}
                            />
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between gap-3 mt-1">
                        <button
                          onClick={() => setIsExpanded(false)}
                          className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 transition-colors hover:text-white"
                        >
                          Volver
                        </button>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => saveConsent('custom', preferences.analytics)}
                            className="rounded-lg px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-neutral-400 transition-colors hover:bg-white/5 hover:text-white"
                          >
                            Guardar
                          </button>
                          <button
                            onClick={() => saveConsent('accepted', true)}
                            className="rounded-lg bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-black shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all hover:scale-105 hover:bg-neutral-200"
                          >
                            Aceptar Todas
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}


