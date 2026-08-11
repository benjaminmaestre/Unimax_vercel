'use client'
/* eslint-disable @typescript-eslint/no-explicit-any */


import { useEffect, useRef, useState } from 'react'
import { useTheme } from 'next-themes'

interface MapComponentProps {
  language: 'es' | 'en'
  searchQuery: string
  searchTrigger: number
  onSearchResolved: (result: {
    lat: number
    lng: number
    label: string
    closestPlant: string
    distance: number
    durationMin: number
    inRadius: boolean
    error?: string
  } | null) => void
  onSearchStart?: () => void
  onMapClickAddress?: (address: string) => void
}

const plantsData = [
  {
    name: 'Planta Lima Este',
    nameEn: 'East Lima Plant',
    lat: -12.0020,
    lng: -76.8850,
    radius: 30, // 30km
    address: 'Calle Carrozable Lote 4, Lurigancho, Lima'
  },
  {
    name: 'Planta Lima Sur',
    nameEn: 'South Lima Plant',
    lat: -12.2220,
    lng: -76.9690,
    radius: 30, // 30km
    address: 'Calle 13 Mz. S Lote 16 Coop. Las Vertientes, Villa el salvador, Lima'
  }
]

function getDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371 // Earth radius in km
  const dLat = (lat2 - lat1) * (Math.PI / 180)
  const dLon = (lon2 - lon1) * (Math.PI / 180)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return R * c
}

interface RouteData {
  distanceKm: number
  durationMin: number
  routeCoords: [number, number][]
}

async function getRoute(lat1: number, lng1: number, lat2: number, lng2: number): Promise<RouteData> {
  if (isNaN(lat1) || isNaN(lng1) || isNaN(lat2) || isNaN(lng2)) {
    return {
      distanceKm: 0,
      durationMin: 0,
      routeCoords: []
    }
  }

  try {
    const osrmUrl = `https://router.project-osrm.org/route/v1/driving/${lng1},${lat1};${lng2},{lat2}?overview=full&geometries=geojson`
    const res = await fetch(osrmUrl)
    const data = await res.json()

    if (data.code === 'Ok' && data.routes && data.routes.length > 0) {
      const route = data.routes[0]
      const distanceKm = route.distance / 1000
      const durationMin = route.duration / 60
      // OSRM returns [lng, lat], Leaflet needs [lat, lng]
      const routeCoords = route.geometry.coordinates
        .map((coord: [number, number]) => [coord[1], coord[0]] as [number, number])
        .filter((c: [number, number]) => typeof c[0] === 'number' && !isNaN(c[0]) && typeof c[1] === 'number' && !isNaN(c[1]))
      
      if (routeCoords && routeCoords.length >= 2) {
        return { distanceKm, durationMin, routeCoords }
      }
    }
  } catch (error) {
    console.error('OSRM routing error, falling back to Haversine:', error)
  }

  // Fallback: Haversine distance with 30% winding factor
  const distanceKm = getDistance(lat1, lng1, lat2, lng2) * 1.3
  const durationMin = (distanceKm / 35) * 60 + 10 // 35 km/h + 10 mins buffer
  const routeCoords: [number, number][] = ([
    [lat1, lng1],
    [lat2, lng2]
  ] as [number, number][]).filter((c) => typeof c[0] === 'number' && !isNaN(c[0]) && typeof c[1] === 'number' && !isNaN(c[1]))
  
  return { distanceKm, durationMin, routeCoords }
}

export default function MapComponent({
  language,
  searchQuery,
  searchTrigger,
  onSearchResolved,
  onSearchStart,
  onMapClickAddress
}: MapComponentProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<any>(null)
  const tileLayerRef = useRef<any>(null)
  const markersRef = useRef<any[]>([])
  const searchMarkerRef = useRef<any>(null)
  const polylineRef = useRef<any>(null)
  const [leafletLoaded, setLeafletLoaded] = useState(false)
  const { theme, resolvedTheme } = useTheme()
  const isDark = (resolvedTheme || theme) === 'dark'

  // Refs to prevent stale closure bugs in Leaflet events
  const languageRef = useRef(language)
  const onSearchResolvedRef = useRef(onSearchResolved)
  const onSearchStartRef = useRef(onSearchStart)
  const onMapClickAddressRef = useRef(onMapClickAddress)
  const isDarkRef = useRef(isDark)

  useEffect(() => {
    languageRef.current = language
    onSearchResolvedRef.current = onSearchResolved
    onSearchStartRef.current = onSearchStart
    onMapClickAddressRef.current = onMapClickAddress
    isDarkRef.current = isDark
  })

  // Load Leaflet assets dynamically from unpkg
  useEffect(() => {
    if (typeof window === 'undefined') return

    // Inject CSS
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
    link.id = 'leaflet-css'
    document.head.appendChild(link)

    // Inject JS
    const script = document.createElement('script')
    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
    script.id = 'leaflet-js'
    script.onload = () => {
      setLeafletLoaded(true)
    }
    document.body.appendChild(script)

    return () => {
      document.getElementById('leaflet-css')?.remove()
      document.getElementById('leaflet-js')?.remove()
    }
  }, [])

  // Initialize Map
  useEffect(() => {
    if (!leafletLoaded || !mapContainerRef.current || mapInstanceRef.current) return

    const L = (window as any).L
    if (!L) return

    // Center of plants
    const centerLat = (-12.0020 + -12.2220) / 2
    const centerLng = (-76.8850 + -76.9690) / 2

    const map = L.map(mapContainerRef.current, {
      zoomControl: false,
      scrollWheelZoom: false
    }).setView([centerLat, centerLng], 10)

    // Zoom controls at bottom right
    L.control.zoom({ position: 'bottomright' }).addTo(map)

    mapInstanceRef.current = map

    // Set tiles
    const tileUrl = isDarkRef.current
      ? 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      : 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'

    tileLayerRef.current = L.tileLayer(tileUrl, {
      attribution: isDarkRef.current ? '&copy; OpenStreetMap' : '&copy; CARTO',
      className: isDarkRef.current ? 'dark-map-filter' : ''
    }).addTo(map)

    // Custom pulsing marker icon for plants
    const plantIcon = L.divIcon({
      className: 'custom-leaflet-marker',
      html: `
        <div class="relative flex items-center justify-center">
          <div class="absolute w-8 h-8 rounded-full bg-[#C13D3A]/25 animate-ping"></div>
          <div class="absolute w-5 h-5 rounded-full bg-[#C13D3A]/45"></div>
          <div class="w-3 h-3 rounded-full bg-[#C13D3A] border-2 border-white shadow-md"></div>
        </div>
      `,
      iconSize: [24, 24],
      iconAnchor: [12, 12]
    })

    // Add plants to map
    plantsData.forEach((plant) => {
      const name = languageRef.current === 'es' ? plant.name : plant.nameEn
      const marker = L.marker([plant.lat, plant.lng], { icon: plantIcon })
        .addTo(map)
        .bindPopup(`
          <div style="font-family: var(--font-inter), sans-serif; color: ${isDarkRef.current ? '#fff' : '#0f172a'}; padding: 4px;">
            <h4 style="margin: 0 0 4px 0; font-weight: bold; font-size: 13px; color: #C13D3A;">${name}</h4>
            <p style="margin: 0; font-size: 11px; opacity: 0.85; line-height: 1.4;">${plant.address}</p>
          </div>
        `)
      
      // Radius circle
      L.circle([plant.lat, plant.lng], {
        color: '#C13D3A',
        fillColor: '#C13D3A',
        fillOpacity: 0.03,
        radius: plant.radius * 1000, // 30km in meters
        weight: 1,
        dashArray: '4, 4'
      }).addTo(map)

      markersRef.current.push(marker)
    })

    // Add click event for reverse geocoding and routing
    map.on('click', async (e: any) => {
      const { lat, lng } = e.latlng
      if (isNaN(lat) || isNaN(lng)) return
      onSearchStartRef.current?.()

      try {
        const reverseUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
        const res = await fetch(reverseUrl)
        const data = await res.json()
        const label = data.display_name || (languageRef.current === 'es' ? `Ubicación Seleccionada` : `Selected Location`)

        let minDistance = Infinity
        let targetPlant = plantsData[0]

        plantsData.forEach((plant) => {
          const dist = getDistance(lat, lng, plant.lat, plant.lng)
          if (dist < minDistance) {
            minDistance = dist
            targetPlant = plant
          }
        })

        const { distanceKm, durationMin, routeCoords } = await getRoute(lat, lng, targetPlant.lat, targetPlant.lng)
        const insideRadius = distanceKm <= targetPlant.radius
        const activePlantName = languageRef.current === 'es' ? targetPlant.name : targetPlant.nameEn

        if (searchMarkerRef.current) {
          mapInstanceRef.current.removeLayer(searchMarkerRef.current)
        }

        const jobIcon = L.divIcon({
          className: 'custom-job-marker',
          html: `
            <div class="relative flex items-center justify-center">
              <div class="absolute w-8 h-8 rounded-full bg-amber-500/20 animate-ping"></div>
              <div class="absolute w-5 h-5 rounded-full bg-amber-500/40"></div>
              <div class="w-3 h-3 rounded-full bg-amber-500 border-2 border-white shadow-md"></div>
            </div>
          `,
          iconSize: [24, 24],
          iconAnchor: [12, 12]
        })

        searchMarkerRef.current = L.marker([lat, lng], { icon: jobIcon })
          .addTo(mapInstanceRef.current)
          .bindPopup(`
            <div style="font-family: var(--font-inter), sans-serif; color: ${isDarkRef.current ? '#fff' : '#0f172a'}; padding: 4px; max-width: 200px;">
              <h4 style="margin: 0 0 4px 0; font-weight: bold; font-size: 12px; color: #f59e0b;">
                ${languageRef.current === 'es' ? 'Obra Seleccionada' : 'Selected Job Site'}
              </h4>
              <p style="margin: 0 0 6px 0; font-size: 10px; opacity: 0.85; line-height: 1.4; word-wrap: break-word;">${label}</p>
              <div style="font-size: 9px; font-weight: bold; border-top: 1px solid rgba(128,128,128,0.2); padding-top: 4px; color: ${insideRadius ? '#22c55e' : '#ef4444'}">
                ${insideRadius ? '✓ ' + (languageRef.current === 'es' ? 'En cobertura' : 'In coverage') : '⚠ ' + (languageRef.current === 'es' ? 'Coordinar logística' : 'Logistics needed')}
              </div>
            </div>
          `)
          .openPopup()

        if (polylineRef.current) {
          mapInstanceRef.current.removeLayer(polylineRef.current)
        }

        if (routeCoords && routeCoords.length >= 2) {
          polylineRef.current = L.polyline(routeCoords, {
            color: '#C13D3A',
            weight: 4,
            opacity: 0.85,
            lineCap: 'round',
            lineJoin: 'round'
          }).addTo(mapInstanceRef.current)
          
          const bounds = L.latLngBounds(routeCoords)
          mapInstanceRef.current.fitBounds(bounds, { padding: [50, 50] })
        } else {
          polylineRef.current = L.polyline([[lat, lng], [targetPlant.lat, targetPlant.lng]], {
            color: '#C13D3A',
            weight: 4,
            opacity: 0.85,
            dashArray: '5, 5'
          }).addTo(mapInstanceRef.current)
          
          const bounds = L.latLngBounds([[lat, lng], [targetPlant.lat, targetPlant.lng]])
          mapInstanceRef.current.fitBounds(bounds, { padding: [50, 50] })
        }

        onMapClickAddressRef.current?.(label)
        onSearchResolvedRef.current?.({
          lat,
          lng,
          label,
          closestPlant: activePlantName,
          distance: distanceKm,
          durationMin,
          inRadius: insideRadius
        })

      } catch (err) {
        console.error('Map click geocoding error:', err)
        const label = languageRef.current === 'es' ? `Coordenadas: ${lat.toFixed(4)}, ${lng.toFixed(4)}` : `Coords: ${lat.toFixed(4)}, ${lng.toFixed(4)}`
        
        let minDistance = Infinity
        let targetPlant = plantsData[0]

        plantsData.forEach((plant) => {
          const dist = getDistance(lat, lng, plant.lat, plant.lng)
          if (dist < minDistance) {
            minDistance = dist
            targetPlant = plant
          }
        })

        const { distanceKm, durationMin, routeCoords } = await getRoute(lat, lng, targetPlant.lat, targetPlant.lng)
        const insideRadius = distanceKm <= targetPlant.radius
        const activePlantName = languageRef.current === 'es' ? targetPlant.name : targetPlant.nameEn

        if (searchMarkerRef.current) {
          mapInstanceRef.current.removeLayer(searchMarkerRef.current)
        }

        searchMarkerRef.current = L.marker([lat, lng])
          .addTo(mapInstanceRef.current)
          .bindPopup(`<b>${label}</b>`)
          .openPopup()

        if (polylineRef.current) {
          mapInstanceRef.current.removeLayer(polylineRef.current)
        }

        if (routeCoords && routeCoords.length >= 2) {
          polylineRef.current = L.polyline(routeCoords, { color: '#C13D3A', weight: 4 }).addTo(mapInstanceRef.current)
        } else {
          polylineRef.current = L.polyline([[lat, lng], [targetPlant.lat, targetPlant.lng]], {
            color: '#C13D3A',
            weight: 4,
            dashArray: '5, 5'
          }).addTo(mapInstanceRef.current)
        }

        onMapClickAddressRef.current?.(label)
        onSearchResolvedRef.current?.({
          lat,
          lng,
          label,
          closestPlant: activePlantName,
          distance: distanceKm,
          durationMin,
          inRadius: insideRadius
        })
      }
    })
  }, [leafletLoaded])

  // Update map tiles when theme changes
  useEffect(() => {
    if (!mapInstanceRef.current || !tileLayerRef.current) return
    const L = (window as any).L
    if (!L) return

    const tileUrl = isDark
      ? 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      : 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'

    tileLayerRef.current.setUrl(tileUrl)
    
    const container = tileLayerRef.current.getContainer()
    if (container) {
      if (isDark) container.classList.add('dark-map-filter')
      else container.classList.remove('dark-map-filter')
    }
  }, [isDark])

  // Handle address geocode search
  useEffect(() => {
    if (!mapInstanceRef.current || searchTrigger === 0 || !searchQuery) return
    const L = (window as any).L
    if (!L) return

    const executeSearch = async () => {
      onSearchStartRef.current?.()
      try {
        let url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchQuery + ', Lima, Peru')}&limit=1`
        let res = await fetch(url)
        let data = await res.json()

        if (!data || data.length === 0) {
          url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchQuery)}&limit=1`
          res = await fetch(url)
          data = await res.json()
        }

        if (data && data.length > 0) {
          const lat = parseFloat(data[0].lat)
          const lng = parseFloat(data[0].lon)
          const label = data[0].display_name

          if (isNaN(lat) || isNaN(lng)) {
            onSearchResolvedRef.current?.({
              lat: 0,
              lng: 0,
              label: searchQuery,
              closestPlant: '',
              distance: 0,
              durationMin: 0,
              inRadius: false,
              error: languageRef.current === 'es'
                ? 'Dirección con coordenadas inválidas.'
                : 'Address contains invalid coordinates.'
            })
            return
          }

          let minDistance = Infinity
          let targetPlant = plantsData[0]

          plantsData.forEach((plant) => {
            const dist = getDistance(lat, lng, plant.lat, plant.lng)
            if (dist < minDistance) {
              minDistance = dist
              targetPlant = plant
            }
          })

          const { distanceKm, durationMin, routeCoords } = await getRoute(lat, lng, targetPlant.lat, targetPlant.lng)
          const insideRadius = distanceKm <= targetPlant.radius
          const activePlantName = languageRef.current === 'es' ? targetPlant.name : targetPlant.nameEn

          if (searchMarkerRef.current) {
            mapInstanceRef.current.removeLayer(searchMarkerRef.current)
          }

          const jobIcon = L.divIcon({
            className: 'custom-job-marker',
            html: `
              <div class="relative flex items-center justify-center">
                <div class="absolute w-8 h-8 rounded-full bg-amber-500/20 animate-ping"></div>
                <div class="absolute w-5 h-5 rounded-full bg-amber-500/40"></div>
                <div class="w-3 h-3 rounded-full bg-amber-500 border-2 border-white shadow-md"></div>
              </div>
            `,
            iconSize: [24, 24],
            iconAnchor: [12, 12]
          })

          searchMarkerRef.current = L.marker([lat, lng], { icon: jobIcon })
            .addTo(mapInstanceRef.current)
            .bindPopup(`
              <div style="font-family: var(--font-inter), sans-serif; color: ${isDarkRef.current ? '#fff' : '#0f172a'}; padding: 4px; max-width: 200px;">
                <h4 style="margin: 0 0 4px 0; font-weight: bold; font-size: 12px; color: #f59e0b;">
                  ${languageRef.current === 'es' ? 'Ubicación Encontrada' : 'Location Found'}
                </h4>
                <p style="margin: 0 0 6px 0; font-size: 10px; opacity: 0.85; line-height: 1.4; word-wrap: break-word;">${label}</p>
                <div style="font-size: 9px; font-weight: bold; border-top: 1px solid rgba(128,128,128,0.2); padding-top: 4px; color: ${insideRadius ? '#22c55e' : '#ef4444'}">
                  ${insideRadius ? '✓ ' + (languageRef.current === 'es' ? 'En cobertura' : 'In coverage') : '⚠ ' + (languageRef.current === 'es' ? 'Coordinar logística' : 'Logistics needed')}
                </div>
              </div>
            `)
            .openPopup()

          if (polylineRef.current) {
            mapInstanceRef.current.removeLayer(polylineRef.current)
          }

          if (routeCoords && routeCoords.length >= 2) {
            polylineRef.current = L.polyline(routeCoords, {
              color: '#C13D3A',
              weight: 4,
              opacity: 0.85,
              lineCap: 'round',
              lineJoin: 'round'
            }).addTo(mapInstanceRef.current)
            
            const bounds = L.latLngBounds(routeCoords)
            mapInstanceRef.current.fitBounds(bounds, { padding: [50, 50] })
          } else {
            polylineRef.current = L.polyline([[lat, lng], [targetPlant.lat, targetPlant.lng]], {
              color: '#C13D3A',
              weight: 4,
              opacity: 0.85,
              dashArray: '5, 5'
            }).addTo(mapInstanceRef.current)
            
            const bounds = L.latLngBounds([[lat, lng], [targetPlant.lat, targetPlant.lng]])
            mapInstanceRef.current.fitBounds(bounds, { padding: [50, 50] })
          }

          onSearchResolvedRef.current?.({
            lat,
            lng,
            label,
            closestPlant: activePlantName,
            distance: distanceKm,
            durationMin,
            inRadius: insideRadius
          })
        } else {
          onSearchResolvedRef.current?.({
            lat: 0,
            lng: 0,
            label: searchQuery,
            closestPlant: '',
            distance: 0,
            durationMin: 0,
            inRadius: false,
            error: languageRef.current === 'es'
              ? 'No pudimos encontrar esa dirección. Revisa la ortografía, escribe un distrito en Lima (ej. "La Molina") o haz clic directo en el mapa.'
              : 'Address not found. Please review the spelling, enter a district in Lima (e.g. "La Molina") or click directly on the map.'
          })
        }
      } catch (err) {
        console.error('Map search error:', err)
        onSearchResolvedRef.current?.({
          lat: 0,
          lng: 0,
          label: searchQuery,
          closestPlant: '',
          distance: 0,
          durationMin: 0,
          inRadius: false,
          error: languageRef.current === 'es'
            ? 'Error de comunicación con el servicio de geolocalización. Intenta haciendo clic directo en el mapa.'
            : 'Error connecting to the geolocation service. Try clicking directly on the map.'
        })
      }
    }

    executeSearch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTrigger])

  return (
    <div className="relative w-full h-full min-h-87.5 lg:min-h-100">
      {!leafletLoaded && (
        <div className="absolute inset-0 bg-neutral-950/90 flex flex-col items-center justify-center gap-3 rounded-xl border border-border/80 shadow-md">
          <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
          <span className="text-xs font-bold text-white/50 tracking-widest uppercase">
            {language === 'es' ? 'Cargando Cobertura...' : 'Loading Coverage Map...'}
          </span>
        </div>
      )}
      <div ref={mapContainerRef} className="w-full h-full rounded-xl border border-border/80 shadow-md overflow-hidden bg-black" />
      <style jsx global>{`
        .dark-map-filter {
          filter: invert(100%) hue-rotate(180deg) brightness(85%) contrast(110%) saturate(80%);
        }
      `}</style>
    </div>
  )
}
