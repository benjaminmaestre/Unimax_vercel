'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/components/language-provider'
import { trackEvent } from '@/lib/analytics'

export function FloatingWhatsApp() {
  const { language } = useLanguage()

  return (
    <motion.a
      href="https://wa.me/51959345117"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent('click_whatsapp', 'Global', 'Floating WhatsApp Button')}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-lg hover:scale-105 active:scale-95 transition-transform group cursor-pointer border border-[#20ba59]"
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
        <path d="M12.031 2c-5.514 0-9.99 4.493-9.99 10.011 0 1.908.533 3.693 1.458 5.221L2 22l5.002-1.309c1.479.802 3.167 1.258 4.96 1.258 5.513 0 10.038-4.492 10.038-10.011C22.069 6.493 17.545 2 12.031 2zm0 18.294c-1.637 0-3.181-.469-4.502-1.354l-.323-.19-3.003.786.804-2.918-.21-.334c-.958-1.528-1.464-3.3-1.464-5.148 0-4.887 4.004-8.86 8.93-8.86 4.925 0 8.931 3.973 8.931 8.86.002 4.887-4.004 8.86-8.931 8.86zm4.908-6.079c-.269-.134-1.593-.787-1.841-.877-.247-.09-.427-.134-.607.134-.18.269-.696.877-.853 1.057-.157.18-.314.202-.583.067-.269-.134-1.137-.419-2.167-1.337-.802-.714-1.342-1.597-1.5-1.867-.157-.269-.017-.414.118-.548.121-.121.269-.314.404-.471.134-.157.18-.269.269-.449.09-.18.045-.337-.022-.471-.067-.134-.607-1.46-.831-2.001-.219-.526-.44-.453-.607-.461-.157-.008-.337-.008-.517-.008-.18 0-.472.067-.719.337-.247.269-.943.921-.943 2.246s.965 2.605 1.101 2.785c.134.18 1.9 2.9 4.6 4.069.643.277 1.144.443 1.536.568.647.206 1.233.177 1.697.108.517-.077 1.593-.651 1.819-1.28.225-.63.225-1.17.157-1.28-.069-.113-.248-.18-.517-.314z" />
      </svg>
      <span className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-black/85 text-white text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-white/5 shadow-md tracking-wider uppercase select-none pointer-events-none">
        {language === 'es' ? 'Chatea ahora' : 'Chat now'}
      </span>
    </motion.a>
  )
}
