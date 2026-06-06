'use client'

import { motion } from 'framer-motion'
import { MapPin, ArrowRight, Search } from 'lucide-react'
import { useState } from 'react'
import { useLanguage } from '@/components/language-provider'
import dynamic from 'next/dynamic'

const MapComponent = dynamic(() => import('./map-component'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[350px] lg:min-h-[400px] rounded-xl bg-neutral-950/90 flex flex-col items-center justify-center gap-3 border border-border/80 shadow-md">
      <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
    </div>
  )
})

export function CoverageSection() {
  const { language, t } = useLanguage()
  const [searchValue, setSearchValue] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [searchTrigger, setSearchTrigger] = useState(0)
  const [searchResult, setSearchResult] = useState<{
    lat: number
    lng: number
    label: string
    closestPlant: string
    distance: number
    durationMin: number
    inRadius: boolean
    error?: string
  } | null>(null)
  const [isSearching, setIsSearching] = useState(false)

  const handleSearch = () => {
    if (!searchValue.trim()) return
    setIsSearching(true)
    setSearchQuery(searchValue)
    setSearchTrigger(prev => prev + 1)
  }

  const handleSearchResolved = (result: any) => {
    setSearchResult(result)
    setIsSearching(false)
  }

  const handleSearchStart = () => {
    setIsSearching(true)
  }

  const handleMapClickAddress = (address: string) => {
    setSearchValue(address)
  }

  const handleQuoteClick = () => {
    if (!searchResult) return
    
    // Dispatch custom event to autofill contact form
    const messageText = language === 'es'
      ? `Hola, deseo cotizar concreto premezclado para mi obra en: ${searchResult.label}. \n\nDatos de ruta calculados:\n- Planta de despacho: ${searchResult.closestPlant}\n- Distancia de ruta: ${searchResult.distance.toFixed(1)} km\n- Tiempo estimado: ${Math.round(searchResult.durationMin)} min`
      : `Hello, I would like to get a quote for ready-mix concrete for my job site at: ${searchResult.label}. \n\nCalculated route data:\n- Dispatch plant: ${searchResult.closestPlant}\n- Route distance: ${searchResult.distance.toFixed(1)} km\n- Estimated travel time: ${Math.round(searchResult.durationMin)} min`

    const event = new CustomEvent('autofill-contact', {
      detail: {
        address: searchResult.label,
        message: messageText,
        service: 'concreto'
      }
    })
    window.dispatchEvent(event)

    // Scroll to contact form
    const contactSection = document.getElementById('contacto')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const translateRadius = (radius: string, lang: 'es' | 'en') => {
    return lang === 'es' ? radius : radius.replace('Radio', 'Radius')
  }

  const translateHours = (hours: string, lang: 'es' | 'en') => {
    return lang === 'es' ? hours : hours.replace('Lun-Sab', 'Mon-Sat')
  }

  const plants = [
    {
      name: language === 'es' ? 'Planta Lima Este' : 'East Lima Plant',
      location: 'Lurigancho',
      address: 'Calle Carrozable Lote 4, Lurigancho, Lima',
      radius: 'Radio 30km',
      hours: 'Lun-Sab 5am-8pm',
      coords: { x: '70%', y: '45%' },
      googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Calle+Carrozable+Lote+4%2C+Lurigancho%2C+Lima'
    },
    {
      name: language === 'es' ? 'Planta Lima Sur' : 'South Lima Plant',
      location: 'Villa El Salvador',
      address: 'Calle 13 Mz. S Lote 16 Coop. Las Vertientes, Villa el salvador, Lima',
      radius: 'Radio 30km',
      hours: 'Lun-Sab 5am-8pm',
      coords: { x: '45%', y: '75%' },
      googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Calle+13+Mz.+S+Lote+16+Coop.+Las+Vertientes%2C+Villa+el+salvador%2C+Lima'
    },
  ]

  return (
    <section className="relative py-12 lg:py-32 bg-background grain" id="plantas">
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
            {t('coverage.prelabel')}
          </span>
          <h2 className="mt-3 text-2xl lg:text-3xl font-bold leading-[1.15] tracking-tight text-text-primary text-balance max-w-3xl mx-auto">
            {t('coverage.title')}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[55%_45%] gap-10 items-start">
          {/* Map Side (Premium Interactive Map) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-full min-h-[350px] lg:min-h-[400px]"
          >
            <MapComponent
              language={language}
              searchQuery={searchQuery}
              searchTrigger={searchTrigger}
              onSearchResolved={handleSearchResolved}
              onSearchStart={handleSearchStart}
              onMapClickAddress={handleMapClickAddress}
            />
          </motion.div>

          {/* Plants List Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-3.5 w-full"
          >
            {plants.map((plant, index) => (
              <motion.div
                key={plant.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group p-4 rounded-lg bg-surface border border-border/80 hover:border-primary transition-all duration-300 shadow-xs"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  {/* Left block: Icon + Content */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base font-bold text-text-primary leading-tight">
                        {plant.name}
                      </h4>
                      <p className="mt-1 text-sm text-text-secondary">
                        {plant.location} · {translateRadius(plant.radius, language)}
                      </p>
                      {plant.address && (
                        <p className="mt-1 text-xs text-text-muted select-all">
                          {plant.address}
                        </p>
                      )}
                      <p className="mt-0.5 text-xs text-text-muted">
                        {translateHours(plant.hours, language)}
                      </p>
                    </div>
                  </div>
                  {/* Right block: Action Button */}
                  <a
                    href={plant.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex items-center gap-1 text-text-muted hover:text-primary transition-colors shrink-0 pl-14 sm:pl-0 self-start"
                  >
                    <span className="text-xs font-bold tracking-wider uppercase">{language === 'es' ? 'Cómo llegar' : 'Get Directions'}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover/link:translate-x-1" />
                  </a>
                </div>
              </motion.div>
            ))}

            {/* Address Search Bar */}
            <div className="mt-6 flex gap-3 w-full">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                <input
                  type="text"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                  placeholder={language === 'es' ? 'Ingresa la dirección de tu obra' : 'Enter your job site address'}
                  className="w-full h-12 pl-11 pr-4 rounded-md bg-surface border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors text-sm"
                />
              </div>
              <button 
                onClick={handleSearch}
                disabled={isSearching}
                className="h-12 px-6 text-xs font-bold tracking-widest uppercase bg-primary hover:bg-cta-hover text-white rounded-md transition-all border border-primary hover:border-cta-hover active:scale-95 shadow-sm disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSearching ? (
                  <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  language === 'es' ? 'Buscar' : 'Search'
                )}
              </button>
            </div>

            {/* Tip text */}
            <p className="mt-2 text-[11px] text-text-muted/80 pl-1 italic">
              {language === 'es' 
                ? '💡 Consejo: También puedes hacer clic directamente en el mapa para marcar tu obra.' 
                : '💡 Tip: You can also click directly on the map to pinpoint your job site.'}
            </p>

            {/* Search Result Feedback Card */}
            {searchResult && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="mt-6 w-full"
              >
                {searchResult.error ? (
                  <div className="p-4 rounded-lg border border-red-500/20 bg-red-500/5 text-red-400 text-xs flex flex-col gap-1 shadow-xs">
                    <span className="font-bold uppercase tracking-wider">
                      {language === 'es' ? 'Dirección no encontrada' : 'Address Not Found'}
                    </span>
                    <p className="text-text-muted/90">{searchResult.error}</p>
                  </div>
                ) : (
                  <div className="relative overflow-hidden p-5 rounded-xl border border-border/80 bg-surface shadow-md flex flex-col gap-5">
                    {/* Glowing Accent Ring */}
                    <div className={`absolute top-0 left-0 w-1.5 h-full ${
                      searchResult.inRadius 
                        ? 'bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.5)]' 
                        : searchResult.distance <= 50
                          ? 'bg-amber-500 shadow-[0_0_12px_rgba(245,158,11,0.5)]'
                          : 'bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.5)]'
                    }`} />

                    {/* Header: Title and Status Badge */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pl-2">
                      <div className="min-w-0 flex-1">
                        <span className="text-[10px] font-bold text-text-muted tracking-wider uppercase block">
                          {language === 'es' ? 'Resultado del Análisis de Ruta' : 'Route Analysis Result'}
                        </span>
                        <h4 className="text-sm font-bold text-text-primary mt-1 truncate">
                          {searchResult.label.split(',')[0]}
                        </h4>
                      </div>

                      {/* Status Badge */}
                      <span className={`px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase rounded-full shrink-0 self-start sm:self-center ${
                        searchResult.inRadius
                          ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20'
                          : searchResult.distance <= 50
                            ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20'
                            : 'bg-red-500/10 text-red-500 border border-red-500/20'
                      }`}>
                        {searchResult.inRadius
                          ? (language === 'es' ? '✓ Cobertura Completa' : '✓ Full Coverage')
                          : searchResult.distance <= 50
                            ? (language === 'es' ? '⚠ Cobertura Especial' : '⚠ Extended Coverage')
                            : (language === 'es' ? '✘ Fuera de Rango' : '✘ Out of Range')}
                      </span>
                    </div>

                    {/* Stats Dashboard Grid */}
                    <div className="grid grid-cols-3 gap-3 pl-2">
                      <div className="p-3 rounded-lg bg-background border border-border/40 flex flex-col items-center justify-center text-center shadow-xs">
                        <span className="text-[9px] font-bold text-text-muted tracking-wider uppercase block text-center">
                          {language === 'es' ? 'DISTANCIA' : 'DISTANCE'}
                        </span>
                        <span className="mt-1.5 text-base md:text-lg font-black font-mono text-text-primary tracking-tight">
                          {searchResult.distance.toFixed(1)} <span className="text-xs font-normal">km</span>
                        </span>
                      </div>

                      <div className="p-3 rounded-lg bg-background border border-border/40 flex flex-col items-center justify-center text-center shadow-xs">
                        <span className="text-[9px] font-bold text-text-muted tracking-wider uppercase block text-center">
                          {language === 'es' ? 'TIEMPO VIAJE' : 'TRANSIT TIME'}
                        </span>
                        <span className="mt-1.5 text-base md:text-lg font-black font-mono text-text-primary tracking-tight">
                          {Math.round(searchResult.durationMin)} <span className="text-xs font-normal">min</span>
                        </span>
                      </div>

                      <div className="p-3 rounded-lg bg-background border border-border/40 flex flex-col items-center justify-center text-center shadow-xs">
                        <span className="text-[9px] font-bold text-text-muted tracking-wider uppercase block text-center">
                          {language === 'es' ? 'DESPACHO DESDE' : 'DISPATCH FROM'}
                        </span>
                        <span className="mt-1.5 text-[10px] font-bold text-primary tracking-wide text-center uppercase wrap-break-word line-clamp-2 leading-tight">
                          {searchResult.closestPlant.replace('Planta ', '').replace(' Plant', '')}
                        </span>
                      </div>
                    </div>

                    {/* Description Text */}
                    <p className="text-xs text-text-muted leading-relaxed pl-2">
                      {searchResult.inRadius
                        ? (language === 'es' 
                          ? `Tu proyecto está dentro del radio operativo de 30 km. La entrega se realiza desde la planta de ${searchResult.closestPlant} con un tiempo estimado de ${Math.round(searchResult.durationMin)} minutos en ruta.`
                          : `Your project is within the 30 km operational radius. Supply will be dispatched from ${searchResult.closestPlant} with an estimated transit duration of ${Math.round(searchResult.durationMin)} minutes.`)
                        : searchResult.distance <= 50
                          ? (language === 'es'
                            ? `Tu proyecto está a ${searchResult.distance.toFixed(1)} km, requiriendo cobertura logística especial. Comunícate para coordinar viabilidad y tarifas adicionales.`
                            : `Your project is at ${searchResult.distance.toFixed(1)} km, requiring special logistics coverage. Contact us to coordinate route viability and extra fees.`)
                          : (language === 'es'
                            ? `Tu ubicación supera los 50 km de distancia operativa. Se requiere una evaluación técnica individual por parte de nuestros ingenieros de ruta.`
                            : `Your location exceeds the 50 km standard operating distance. An individual technical route assessment is required by our traffic engineers.`)}
                    </p>

                    {/* Action button */}
                    <div className="pl-2 pt-1">
                      <button
                        onClick={handleQuoteClick}
                        className="group flex items-center justify-center gap-2 w-full h-11 text-[11px] font-bold tracking-widest uppercase bg-primary hover:bg-cta-hover text-white rounded-md transition-all active:scale-95 shadow-sm border border-primary hover:border-cta-hover cursor-pointer"
                      >
                        {language === 'es' ? 'Cotizar Despacho a esta Ubicación' : 'Quote Dispatch to this Location'}
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
