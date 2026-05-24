'use client'

import React, { useState, useEffect } from 'react'
import { motion, PanInfo } from 'framer-motion'
import { cn } from '@/lib/utils'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export interface RingCarousel3DProps {
  children: React.ReactNode[]
  className?: string
  itemWidth?: number
  itemHeight?: number
  autoplay?: boolean
  autoplayInterval?: number
  visibleCards?: 3 | 5
  cardSpread?: number
}

export function RingCarousel3D({ 
  children, 
  className, 
  itemWidth = 380,
  itemHeight = 460,
  autoplay = true,
  autoplayInterval = 4500,
  visibleCards = 5,
  cardSpread = 0.60
}: RingCarousel3DProps) {
  const [isMounted, setIsMounted] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const items = React.Children.toArray(children)
  const count = items.length
  
  // High-performance hardware-accelerated autoplay loop
  useEffect(() => {
    if (!isMounted || !autoplay || count <= 1) return

    const handleAutoplayNext = () => {
      if (!isHovered && document.visibilityState === 'visible') {
        setCurrentIndex((prev) => (prev + 1) % count)
      }
    }

    const timer = setInterval(handleAutoplayNext, autoplayInterval)
    return () => clearInterval(timer)
  }, [isMounted, autoplay, autoplayInterval, count, isHovered])

  if (count === 0) return null

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % count)
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + count) % count)

  const handleDragEnd = (e: unknown, { offset, velocity }: PanInfo) => {
    const swipePower = Math.abs(offset.x) * Math.abs(velocity.x)
    if (swipePower > 800 || Math.abs(offset.x) > 40) {
      if (offset.x > 0) handlePrev()
      else handleNext()
    }
  }

  // Circular offset calculation to handle infinite seamless 3D wrap-around
  const getCircularOffset = (i: number, current: number, total: number) => {
    let diff = i - current
    if (diff > total / 2) {
      diff -= total
    } else if (diff < -total / 2) {
      diff += total
    }
    return diff
  }

  const handleCardClick = (e: React.MouseEvent, index: number, offset: number) => {
    const maxOffset = visibleCards === 3 ? 1 : 2
    if (offset !== 0 && Math.abs(offset) <= maxOffset) {
      e.preventDefault()
      e.stopPropagation()
      setCurrentIndex(index)
    }
  }

  if (!isMounted) return null

  // Clean container height (no extra reflection space needed since reflections are removed!)
  const containerHeight = itemHeight + 40

  return (
    <div 
      className={cn("relative flex items-center justify-center w-full overflow-visible select-none", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ height: containerHeight }}
    >
      {/* 3D Track */}
      <div 
        className="relative flex items-center justify-center w-full h-full overflow-visible"
        style={{ perspective: '1200px' }}
      >
        <motion.div
          className="relative flex items-center justify-center w-full h-full cursor-grab active:cursor-grabbing"
          style={{ transformStyle: 'preserve-3d' }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.1}
          onDragEnd={handleDragEnd}
        >
          {items.map((child, i) => {
            const offset = getCircularOffset(i, currentIndex, count)
            const absOffset = Math.abs(offset)
            
            // Limit to exactly 3 or 5 active visible cards based on visibleCards prop
            const isVisible = absOffset <= (visibleCards === 3 ? 1 : 2)
            
            // Refined Coverflow 3D geometry equations (No shadow, no reflection, high readability)
            const rotateY = offset * -20 // Angled inward (e.g. left cards positive, right cards negative)
            const translateX = offset * (itemWidth * cardSpread) // horizontal spread between cards
            const translateZ = absOffset * -150 // cards step backward in 3D depth
            const scale = 1 - absOffset * 0.08 // gradual scale down for side cards
            
            // Opacity values matching the reference image: Center 100%, neighbors 90%, outermost 55%
            const opacity = isVisible 
              ? (absOffset === 0 ? 1 : (absOffset === 1 ? 0.90 : 0.55)) 
              : 0
              
            const zIndex = 100 - absOffset
            
            // Clean brightness gradient for lighting depth, zero blur as requested
            const filter = absOffset === 0 
              ? 'brightness(1)' 
              : (absOffset === 1 ? 'brightness(0.90)' : 'brightness(0.75)')

            return (
              <motion.div
                key={i}
                className="absolute top-1/2 left-1/2 rounded-xl overflow-hidden"
                onClick={(e) => handleCardClick(e, i, offset)}
                animate={{
                  rotateY,
                  x: `calc(-50% + ${translateX}px)`,
                  y: '-50%',
                  z: translateZ,
                  scale,
                  opacity,
                  zIndex,
                  filter
                }}
                transition={{ type: 'spring', stiffness: 120, damping: 20, mass: 1 }}
                style={{
                  width: itemWidth,
                  height: itemHeight,
                  pointerEvents: isVisible ? 'auto' : 'none',
                  cursor: absOffset > 0 && absOffset <= (visibleCards === 3 ? 1 : 2) ? 'pointer' : 'default',
                  boxShadow: 'none',
                  // Solid background on the wrapper blocks cards behind from bleeding
                  // through in a 3D preserve-3d context. Uses design system token.
                  backgroundColor: 'var(--surface)',
                }}
              >
                {child}
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      {/* Floating White Circular Controls positioned completely outside the cards */}
      <button 
        onClick={handlePrev}
        className="absolute left-2 lg:-left-12 z-50 w-12 h-12 rounded-full bg-white text-black flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-lg border border-black/5 hover:bg-primary hover:text-white"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
      </button>
      
      <button 
        onClick={handleNext}
        className="absolute right-2 lg:-right-12 z-50 w-12 h-12 rounded-full bg-white text-black flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-lg border border-black/5 hover:bg-primary hover:text-white"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 stroke-[2.5]" />
      </button>
    </div>
  )
}
