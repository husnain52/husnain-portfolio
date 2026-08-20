import { useEffect, useRef } from 'react'
import { useTheme } from '@/lib/theme'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  baseAlpha: number
  pulseSpeed: number
  pulseOffset: number
  colorType: 'blue' | 'indigo' | 'cyan'
}

interface Pulse {
  sourceIndex: number
  targetIndex: number
  progress: number
  speed: number
}

export const NeuralNetworkBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const { theme } = useTheme()
  const mouseRef = useRef<{ x: number | null; y: number | null; active: boolean }>({
    x: null,
    y: null,
    active: false,
  })
  const cursorGlowRef = useRef<{ x: number; y: number; targetX: number; targetY: number }>({
    x: -500,
    y: -500,
    targetX: -500,
    targetY: -500,
  })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    let animationFrameId: number
    let isVisible = true
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const isDark = theme === 'dark'

    // Determine particle count based on screen area for optimal 60fps performance
    const particleCount = Math.floor(Math.min(Math.max((width * height) / 14000, 35), 95))
    const connectionDistance = width < 768 ? 100 : 135
    const mouseRadius = width < 768 ? 120 : 180

    const particles: Particle[] = []
    const pulses: Pulse[] = []

    const colorPalette = isDark
      ? {
          blue: 'rgba(96, 165, 250, ',
          indigo: 'rgba(129, 140, 248, ',
          cyan: 'rgba(56, 189, 248, ',
          line: '59, 130, 246',
          mouseLine: '99, 102, 241',
          pulse: '255, 255, 255',
        }
      : {
          blue: 'rgba(37, 99, 235, ',
          indigo: 'rgba(79, 70, 229, ',
          cyan: 'rgba(2, 132, 199, ',
          line: '37, 99, 235',
          mouseLine: '79, 70, 229',
          pulse: '37, 99, 235',
        }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      const types: Array<'blue' | 'indigo' | 'cyan'> = ['blue', 'indigo', 'cyan']
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.55,
        vy: (Math.random() - 0.5) * 0.55,
        radius: Math.random() * 1.8 + 1.2,
        baseAlpha: Math.random() * 0.45 + 0.35,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        pulseOffset: Math.random() * Math.PI * 2,
        colorType: types[Math.floor(Math.random() * types.length)],
      })
    }

    // Handle resize
    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    // Handle mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
      mouseRef.current.active = true
      cursorGlowRef.current.targetX = e.clientX
      cursorGlowRef.current.targetY = e.clientY
    }

    const handleMouseLeave = () => {
      mouseRef.current.active = false
      mouseRef.current.x = null
      mouseRef.current.y = null
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.addEventListener('mouseleave', handleMouseLeave)

    // Handle visibility to save battery/CPU when tab is inactive
    const handleVisibility = () => {
      isVisible = !document.hidden
    }
    document.addEventListener('visibilitychange', handleVisibility)

    let time = 0

    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render)
        return
      }

      time += 0.015
      ctx.clearRect(0, 0, width, height)

      // Smooth cursor glow interpolation
      const glow = cursorGlowRef.current
      glow.x += (glow.targetX - glow.x) * 0.12
      glow.y += (glow.targetY - glow.y) * 0.12

      // Draw subtle mouse ambient aura
      if (mouseRef.current.active && glow.x > 0 && glow.y > 0) {
        const auraGradient = ctx.createRadialGradient(glow.x, glow.y, 0, glow.x, glow.y, isDark ? 280 : 200)
        auraGradient.addColorStop(0, isDark ? 'rgba(59, 130, 246, 0.07)' : 'rgba(37, 99, 235, 0.04)')
        auraGradient.addColorStop(1, 'rgba(0, 0, 0, 0)')
        ctx.fillStyle = auraGradient
        ctx.beginPath()
        ctx.arc(glow.x, glow.y, isDark ? 280 : 200, 0, Math.PI * 2)
        ctx.fill()
      }

      // Randomly spawn pulses along neural synapses
      if (Math.random() < 0.035 && pulses.length < 8 && particles.length > 2) {
        const s = Math.floor(Math.random() * particles.length)
        let closestT = -1
        let closestDist = connectionDistance

        for (let j = 0; j < particles.length; j++) {
          if (s === j) continue
          const dx = particles[s].x - particles[j].x
          const dy = particles[s].y - particles[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < closestDist) {
            closestDist = d
            closestT = j
          }
        }

        if (closestT !== -1) {
          pulses.push({
            sourceIndex: s,
            targetIndex: closestT,
            progress: 0,
            speed: Math.random() * 0.02 + 0.015,
          })
        }
      }

      // Update and draw particles
      const mouse = mouseRef.current
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        // Position step
        p.x += p.vx
        p.y += p.vy

        // Screen wrap with soft padding
        if (p.x < -20) p.x = width + 20
        if (p.x > width + 20) p.x = -20
        if (p.y < -20) p.y = height + 20
        if (p.y > height + 20) p.y = -20

        // Gentle interactive mouse attraction / repulsion
        if (mouse.active && mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - p.x
          const dy = mouse.y - p.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < mouseRadius && dist > 1) {
            const force = (1 - dist / mouseRadius) * 0.04
            p.x += dx * force
            p.y += dy * force
          }
        }

        // Breathing pulse alpha
        const alpha = p.baseAlpha + Math.sin(time * 2 + p.pulseOffset) * 0.15
        const colorPrefix = colorPalette[p.colorType]

        // Draw node
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `${colorPrefix}${Math.max(alpha, 0.1)})`
        ctx.fill()

        // Inner glowing core on dark mode
        if (isDark) {
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.radius * 0.45, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.9})`
          ctx.fill()
        }

        // Connect to other close particles (Neural synapses)
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < connectionDistance) {
            const lineAlpha = (1 - dist / connectionDistance) * (isDark ? 0.22 : 0.12)
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(${colorPalette.line}, ${lineAlpha})`
            ctx.lineWidth = lineAlpha > 0.15 ? 1.2 : 0.8
            ctx.stroke()
          }
        }

        // Connect to active mouse pointer
        if (mouse.active && mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - p.x
          const dy = mouse.y - p.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < mouseRadius) {
            const mouseLineAlpha = (1 - dist / mouseRadius) * (isDark ? 0.45 : 0.25)
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(mouse.x, mouse.y)
            ctx.strokeStyle = `rgba(${colorPalette.mouseLine}, ${mouseLineAlpha})`
            ctx.lineWidth = 1.3
            ctx.stroke()
          }
        }
      }

      // Update & render neural signal pulses
      for (let k = pulses.length - 1; k >= 0; k--) {
        const pulse = pulses[k]
        pulse.progress += pulse.speed

        if (pulse.progress >= 1) {
          pulses.splice(k, 1)
          continue
        }

        const p1 = particles[pulse.sourceIndex]
        const p2 = particles[pulse.targetIndex]
        if (!p1 || !p2) {
          pulses.splice(k, 1)
          continue
        }

        const currentX = p1.x + (p2.x - p1.x) * pulse.progress
        const currentY = p1.y + (p2.y - p1.y) * pulse.progress
        const pulseAlpha = Math.sin(pulse.progress * Math.PI) * (isDark ? 0.9 : 0.6)

        ctx.beginPath()
        ctx.arc(currentX, currentY, isDark ? 2.2 : 1.8, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${colorPalette.pulse}, ${pulseAlpha})`
        ctx.shadowColor = `rgba(${colorPalette.line}, 0.8)`
        ctx.shadowBlur = isDark ? 8 : 4
        ctx.fill()
        ctx.shadowBlur = 0
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('visibilitychange', handleVisibility)
    }
  }, [theme])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-500"
      style={{ opacity: theme === 'dark' ? 0.95 : 0.75 }}
      aria-hidden="true"
    />
  )
}
