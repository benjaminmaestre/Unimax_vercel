'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot, User, Loader2 } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

type Message = {
  role: 'user' | 'assistant'
  content: string
}

export function AiChat() {
  const { language } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const texts = {
    es: {
      title: 'UNIMAX Asistente',
      subtitle: 'IA · Responde al instante',
      placeholder: 'Escribe tu pregunta...',
      greeting: '¡Hola! 👋 Soy el asistente virtual de UNIMAX Corp. ¿En qué puedo ayudarte hoy? Puedo informarte sobre nuestros servicios de concreto premezclado, bombeo o maquinaria pesada.',
      error: 'Hubo un error. Intenta de nuevo.',
    },
    en: {
      title: 'UNIMAX Assistant',
      subtitle: 'AI · Instant answers',
      placeholder: 'Type your question...',
      greeting: 'Hello! 👋 I\'m UNIMAX Corp\'s virtual assistant. How can I help you today? I can provide information about our ready-mix concrete, pumping, or heavy machinery services.',
      error: 'An error occurred. Please try again.',
    },
  }

  const t = texts[language] || texts.es

  // Auto-scroll to bottom
  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages, scrollToBottom])

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 300)
    }
  }, [isOpen])

  // Add greeting on first open
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{ role: 'assistant', content: t.greeting }])
    }
  }, [isOpen, messages.length, t.greeting])

  const handleSend = async () => {
    const trimmed = input.trim()
    if (!trimmed || isLoading) return

    const userMessage: Message = { role: 'user', content: trimmed }
    const updatedMessages = [...messages, userMessage]
    setMessages(updatedMessages)
    setInput('')
    setIsLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updatedMessages }),
      })

      if (!res.ok) throw new Error('API error')

      const data = await res.json()
      setMessages(prev => [...prev, { role: 'assistant', content: data.message }])
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: t.error }])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-24 right-6 z-50 w-14 h-14 rounded-full bg-[#0A0F14] dark:bg-white text-white dark:text-[#0A0F14] shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-transform duration-200 border border-white/10 dark:border-black/10"
            aria-label="Abrir chat de IA"
          >
            <MessageCircle className="w-6 h-6" />
            {/* Pulse indicator */}
            <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-primary" />
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-48px)] h-[520px] max-h-[calc(100vh-100px)] flex flex-col rounded-2xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-[#0c1117]"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 bg-[#0A0F14] dark:bg-[#0A0F14] border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white leading-tight">{t.title}</h3>
                  <p className="text-[10px] text-white/50 font-medium tracking-wide uppercase">{t.subtitle}</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Cerrar chat"
              >
                <X className="w-4 h-4 text-white/70" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 scroll-smooth">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex gap-2.5 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                >
                  {/* Avatar */}
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
                    msg.role === 'user' 
                      ? 'bg-primary/15 text-primary' 
                      : 'bg-neutral-100 dark:bg-white/10 text-neutral-500 dark:text-white/50'
                  }`}>
                    {msg.role === 'user' ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                  </div>

                  {/* Bubble */}
                  <div className={`max-w-[75%] px-3.5 py-2.5 rounded-2xl text-[13px] leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-primary text-white rounded-br-md'
                      : 'bg-neutral-100 dark:bg-white/8 text-neutral-800 dark:text-neutral-200 rounded-bl-md border border-neutral-200/60 dark:border-white/5'
                  }`}>
                    {msg.content}
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-2.5"
                >
                  <div className="w-7 h-7 rounded-full bg-neutral-100 dark:bg-white/10 flex items-center justify-center text-neutral-500 dark:text-white/50">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                  <div className="bg-neutral-100 dark:bg-white/8 border border-neutral-200/60 dark:border-white/5 rounded-2xl rounded-bl-md px-4 py-3 flex items-center gap-1.5">
                    <Loader2 className="w-3.5 h-3.5 animate-spin text-primary" />
                    <span className="text-xs text-neutral-400">...</span>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="px-4 pb-4 pt-2 border-t border-neutral-100 dark:border-white/5">
              <div className="flex items-center gap-2 bg-neutral-50 dark:bg-white/5 rounded-xl border border-neutral-200 dark:border-white/10 px-3 py-1.5 focus-within:border-primary/50 focus-within:ring-1 focus-within:ring-primary/20 transition-all">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder={t.placeholder}
                  disabled={isLoading}
                  className="flex-1 bg-transparent text-sm text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-white/30 outline-none py-2 disabled:opacity-50"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="w-8 h-8 rounded-lg bg-primary hover:bg-primary/90 disabled:bg-neutral-300 dark:disabled:bg-white/10 disabled:cursor-not-allowed flex items-center justify-center transition-colors shrink-0"
                  aria-label="Enviar mensaje"
                >
                  <Send className="w-3.5 h-3.5 text-white" />
                </button>
              </div>
              <p className="text-[9px] text-neutral-400 dark:text-white/25 text-center mt-2 select-none">
                Powered by Google Gemini · UNIMAX Corp
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
