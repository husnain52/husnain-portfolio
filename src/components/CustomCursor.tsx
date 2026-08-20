import { useEffect, useState, useRef } from 'react'
import { useTheme } from '@/lib/theme'

export const CustomCursor = () => {
  const [enabled, setEnabled] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const { theme } = useTheme()

  const cursorDotRef = useRef<HTMLDivElement | null>(null)
  const cursorRingRef = useRef<HTMLDivElement | null>(null)

  const posRef = useRef({
    x: -100,
    y: -100,
    ringX: -100,
    ringY: -100,
  })

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isTouch = window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768
    if (isTouch) return

    setEnabled(true)

    const handleMouseMove = (e: MouseEvent) => {
      posRef.current.x = e.clientX
      posRef.current.y = e.clientY
      if (!isVisible) setIsVisible(true)

      // Direct dot update for instant feedback (0ms latency)
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
      }

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement | null
      if (target) {
        const isInteractive = Boolean(
          target.closest('a, button, input, textarea, select, [role="button"], label, .clickable')
        )
        setIsHovering(isInteractive)
      }
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)
    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    // Smooth physics ring loop
    let animId: number
    const animateRing = () => {
      const pos = posRef.current
      pos.ringX += (pos.x - pos.ringX) * 0.18
      pos.ringY += (pos.y - pos.ringY) * 0.18

      if (cursorRingRef.current) {
        cursorRingRef.current.style.transform = `translate3d(${pos.ringX}px, ${pos.ringY}px, 0)`
      }

      animId = requestAnimationFrame(animateRing)
    }

    animId = requestAnimationFrame(animateRing)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [isVisible])

  if (!enabled) return null

  const isDark = theme === 'dark'

  return (
    <>
      {/* Precision center dot */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full transition-opacity duration-200"
        style={{
          width: isHovering ? '6px' : '4px',
          height: isHovering ? '6px' : '4px',
          backgroundColor: isDark ? '#60a5fa' : '#2563eb',
          opacity: isVisible ? 1 : 0,
          boxShadow: isDark ? '0 0 8px #3b82f6' : '0 0 6px #2563eb',
        }}
        aria-hidden="true"
      />

      {/* Smooth trailing outer ring */}
      <div
        ref={cursorRingRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-150 ease-out"
        style={{
          width: isHovering ? '44px' : isClicking ? '22px' : '30px',
          height: isHovering ? '44px' : isClicking ? '22px' : '30px',
          borderColor: isHovering
            ? isDark ? '#93c5fd' : '#1d4ed8'
            : isDark ? 'rgba(96, 165, 250, 0.4)' : 'rgba(37, 99, 235, 0.35)',
          backgroundColor: isHovering
            ? isDark ? 'rgba(59, 130, 246, 0.08)' : 'rgba(37, 99, 235, 0.05)'
            : 'transparent',
          opacity: isVisible ? 1 : 0,
        }}
        aria-hidden="true"
      />
    </>
  )
}
