import { useState, useEffect } from 'react'
import { MapPin, Briefcase, Code2, Rocket, Clock, Globe, ArrowUpRight, Sparkles } from 'lucide-react'
import { socialLinks } from '@/data/portfolioData'

const principles = [
  {
    icon: Code2,
    title: 'Clean Architecture',
    text: 'Design scalable component models and interfaces that feel effortless to maintain and expand.',
  },
  {
    icon: Rocket,
    title: 'Predictable State',
    text: 'Keep client state deterministic with Redux Toolkit and optimize network cycles to keep UIs instant.',
  },
  {
    icon: Briefcase,
    title: 'Product-Driven APIs',
    text: 'Build Node.js and SQL/NoSQL data layers tailored around real-world business and UX workflows.',
  },
  {
    icon: MapPin,
    title: 'Resilient Edge Cases',
    text: 'Craft responsive designs and error boundaries that look great beyond just the happy path.',
  },
]

const quickFacts = [
  { label: 'Location', value: 'Islamabad, PK', icon: MapPin },
  { label: 'Experience', value: '5+ Years', icon: Clock },
  { label: 'Availability', value: 'Open to Remote', icon: Globe },
  { label: 'Core Stack', value: 'React · Node · AWS', icon: Sparkles },
]

export const About = () => {
  const [currentTime, setCurrentTime] = useState('')

  useEffect(() => {
    const updateClock = () => {
      const now = new Date()
      // Format Islamabad time (UTC+5)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Karachi',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      }
      setCurrentTime(new Intl.DateTimeFormat('en-US', options).format(now))
    }
    updateClock()
    const timer = setInterval(updateClock, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-8 relative" aria-labelledby="about-heading">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 border" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', color: 'var(--accent)' }}>
            <span>01 // About Me</span>
          </div>
          <h2
            id="about-heading"
            className="font-bold text-[clamp(26px,4vw,44px)] leading-[1.15] max-w-2xl tracking-tight"
            style={{ color: 'var(--foreground)' }}
          >
            I turn complex product ideas into high-performing, elegant web software.
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid lg:grid-cols-12 gap-6">

          {/* Left Column (7 cols): Main Bio & Live Time */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Bio Card */}
            <div className="glass-card p-8 md:p-10 flex flex-col gap-5">
              <p className="text-base md:text-lg leading-[1.8]" style={{ color: 'var(--foreground-muted)' }}>
                I'm a full-stack engineer based in Islamabad with over 5 years of production experience crafting web platforms across <strong className="font-semibold text-foreground">React, Next.js, Node.js, Express, PostgreSQL, MongoDB, and AWS</strong>.
              </p>
              <p className="text-base md:text-lg leading-[1.8]" style={{ color: 'var(--foreground-muted)' }}>
                From architecting data models and optimizing query performance to building sleek micro-interactions and design systems, I take full ownership of the product delivery lifecycle.
              </p>

              {/* Links strip */}
              <div className="flex flex-wrap gap-4 pt-3 border-t" style={{ borderColor: 'var(--border)' }}>
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs uppercase tracking-wider font-semibold transition-opacity duration-200 hover:opacity-75"
                  style={{ color: 'var(--accent)' }}
                >
                  <span>GitHub</span>
                  <ArrowUpRight size={14} />
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs uppercase tracking-wider font-semibold transition-opacity duration-200 hover:opacity-75"
                  style={{ color: 'var(--accent)' }}
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight size={14} />
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs uppercase tracking-wider font-semibold transition-opacity duration-200 hover:opacity-75"
                  style={{ color: 'var(--accent)' }}
                >
                  <span>Resume</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            {/* Quick Facts Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {quickFacts.map((fact) => {
                const Icon = fact.icon
                return (
                  <div key={fact.label} className="glass-card p-4 flex flex-col gap-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] uppercase tracking-wider font-semibold" style={{ color: 'var(--accent)' }}>
                        {fact.label}
                      </span>
                      <Icon size={14} className="opacity-60" style={{ color: 'var(--accent)' }} />
                    </div>
                    <span className="text-sm font-semibold tracking-tight" style={{ color: 'var(--foreground)' }}>
                      {fact.value}
                    </span>
                  </div>
                )
              })}
            </div>

            {/* Live Clock Card */}
            <div className="glass-card p-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center border" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }}>
                  <Clock size={16} className="text-blue-500" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider font-semibold" style={{ color: 'var(--accent)' }}>
                    Islamabad Time (PKT)
                  </p>
                  <p className="text-xs" style={{ color: 'var(--foreground-muted)' }}>
                    UTC+5 • Open to worldwide teams
                  </p>
                </div>
              </div>
              <div className="font-mono text-sm font-bold px-3 py-1.5 rounded-lg border shadow-inner" style={{ backgroundColor: 'var(--background)', borderColor: 'var(--border)', color: 'var(--foreground)' }}>
                {currentTime || 'Loading...'}
              </div>
            </div>

          </div>

          {/* Right Column (5 cols): Principles */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <h3 className="text-xs uppercase tracking-widest font-bold px-1" style={{ color: 'var(--accent)' }}>
              Core Engineering Principles
            </h3>

            <div className="flex flex-col gap-3">
              {principles.map((item, index) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.title}
                    className="glass-card p-5 flex items-start gap-4 transition-transform duration-200 hover:scale-[1.01]"
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border"
                      style={{
                        backgroundColor: 'var(--background)',
                        borderColor: 'var(--border)',
                        color: 'var(--accent)',
                      }}
                    >
                      <span className="text-xs font-mono font-bold">0{index + 1}</span>
                    </div>

                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <Icon size={14} className="text-blue-500" />
                        <h4 className="text-sm font-bold" style={{ color: 'var(--foreground)' }}>
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-xs leading-relaxed" style={{ color: 'var(--foreground-muted)' }}>
                        {item.text}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

