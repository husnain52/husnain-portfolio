import { useState } from 'react'
import { heroStats, socialLinks } from '@/data/portfolioData'
import { ArrowDown, Copy, Check } from 'lucide-react'

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

export const Hero = () => {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(socialLinks.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center px-6 md:px-8 pt-28 pb-16 overflow-hidden">
      {/* Background ambient spotlight */}
      <div className="glow-spotlight" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-[1fr_360px] lg:grid-cols-[1fr_400px] gap-12 lg:gap-16 items-center">

          {/* Left — content */}
          <div className="flex flex-col gap-6">

            {/* Status indicator pill */}
            <div className="stagger-1 inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border w-fit shadow-sm" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }}>
              <span className="radar-beacon w-2 h-2 rounded-full" style={{ backgroundColor: '#10b981' }} />
              <span className="text-[12px] tracking-[0.04em] uppercase font-semibold" style={{ color: 'var(--foreground)' }}>
                Available for engineering roles &amp; product builds
              </span>
            </div>

            {/* Hero Headline */}
            <div className="stagger-2 flex flex-col gap-1">
              <h1
                className="text-[clamp(32px,5vw,56px)] leading-[1.08] font-bold tracking-tight"
                style={{ color: 'var(--foreground)' }}
              >
                Full-stack developer
              </h1>
              <h2
                className="text-[clamp(28px,4.5vw,50px)] leading-[1.08] font-bold tracking-tight"
                style={{ color: 'var(--foreground-muted)', opacity: 0.65 }}
              >
                building polished, resilient web apps.
              </h2>
            </div>

            {/* Intro paragraph */}
            <p className="stagger-3 text-base md:text-lg leading-[1.75] max-w-xl" style={{ color: 'var(--foreground-muted)' }}>
              Specialized in <strong className="font-semibold text-foreground">React</strong>, <strong className="font-semibold text-foreground">Next.js</strong>, <strong className="font-semibold text-foreground">TypeScript</strong>, and <strong className="font-semibold text-foreground">Node.js</strong> APIs. Architecting fast, accessible interfaces and scalable backend services with 5+ years of production experience.
            </p>

            {/* Primary Action Buttons */}
            <div className="stagger-4 flex flex-wrap gap-3 items-center pt-2">
              <a
                href="#work"
                className="inline-flex items-center gap-2 text-sm tracking-wide font-semibold px-5 py-3 rounded-xl transition-all duration-200 hover:scale-[1.02] shadow-sm active:scale-95"
                style={{
                  color: '#ffffff',
                  backgroundColor: 'var(--accent)',
                }}
              >
                <span>View Selected Work</span>
                <ArrowDown size={15} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm tracking-wide font-semibold px-5 py-3 rounded-xl border transition-all duration-200 hover:scale-[1.02] shadow-sm active:scale-95"
                style={{
                  color: 'var(--foreground)',
                  backgroundColor: 'var(--surface)',
                  borderColor: 'var(--border)',
                }}
              >
                <span>Get in Touch</span>
              </a>

              {/* Copy email quick button */}
              <button
                onClick={copyEmail}
                aria-label="Copy email address"
                className="inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-3 rounded-xl border transition-all duration-200 hover:scale-[1.02]"
                style={{
                  color: copied ? '#10b981' : 'var(--foreground-muted)',
                  backgroundColor: 'var(--surface)',
                  borderColor: copied ? '#10b981' : 'var(--border)',
                }}
              >
                {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                <span>{copied ? 'Email Copied!' : 'Copy Email'}</span>
              </button>

              {/* Social icons */}
              <div className="flex items-center gap-2">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-xl border transition-all duration-200 hover:scale-105"
                  style={{
                    backgroundColor: 'var(--surface)',
                    borderColor: 'var(--border)',
                    color: 'var(--foreground)',
                  }}
                >
                  <GithubIcon />
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-xl border transition-all duration-200 hover:scale-105"
                  style={{
                    backgroundColor: 'var(--surface)',
                    borderColor: 'var(--border)',
                    color: 'var(--foreground)',
                  }}
                >
                  <LinkedinIcon />
                </a>
              </div>
            </div>

            {/* Quick Metrics Grid */}
            <div className="stagger-5 grid grid-cols-3 gap-3 md:gap-4 pt-6 border-t" style={{ borderColor: 'var(--border)' }}>
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card p-4 flex flex-col justify-center"
                >
                  <p
                    className="font-bold text-2xl md:text-3xl leading-none"
                    style={{ color: 'var(--foreground)' }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-[12px] md:text-[13px] font-semibold mt-2" style={{ color: 'var(--foreground)' }}>
                    {stat.label}
                  </p>
                  <p className="text-[11px] mt-0.5 opacity-60 leading-tight" style={{ color: 'var(--foreground-muted)' }}>
                    {stat.context}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* Right — Refined Portrait with Floating Tech Badges */}
          <div className="stagger-2 hidden md:flex items-center justify-center relative">
            <div className="relative w-full max-w-[340px] group">

              {/* Ambient image background ring */}
              <div
                className="absolute -inset-1 rounded-2xl opacity-40 blur-lg transition duration-500 group-hover:opacity-75"
                style={{
                  background: 'linear-gradient(135deg, var(--accent), #6366f1, #06b6d4)',
                }}
              />

              {/* Card Container */}
              <div
                className="relative rounded-2xl overflow-hidden border shadow-xl"
                style={{
                  backgroundColor: 'var(--surface)',
                  borderColor: 'var(--border)',
                }}
              >
                <img
                  src="/hero-image.png"
                  alt="Husnain Akhtar"
                  className="w-full block object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                  style={{
                    aspectRatio: '662 / 768',
                    filter: 'brightness(0.92) contrast(1.05)',
                  }}
                />

                {/* Subtle gradient vignette */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to top, color-mix(in srgb, var(--surface) 95%, transparent) 0%, transparent 45%)',
                  }}
                />

                {/* Bottom name badge */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold tracking-tight" style={{ color: 'var(--foreground)' }}>
                        Husnain Akhtar
                      </p>
                      <p className="text-xs flex items-center gap-1.5 mt-0.5" style={{ color: 'var(--foreground-muted)' }}>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                        <span>Islamabad, PK (UTC+5)</span>
                      </p>
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded-md border text-blue-500 border-blue-500/20 bg-blue-500/10">
                      Full-Stack
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div
                className="absolute -top-3 -right-3 px-3 py-1 rounded-full text-xs font-semibold shadow-lg border animate-float"
                style={{
                  backgroundColor: 'var(--surface)',
                  borderColor: 'var(--border)',
                  color: 'var(--foreground)',
                }}
              >
                ⚡ Next.js &amp; React
              </div>

              <div
                className="absolute -bottom-3 -left-3 px-3 py-1 rounded-full text-xs font-semibold shadow-lg border"
                style={{
                  backgroundColor: 'var(--surface)',
                  borderColor: 'var(--border)',
                  color: 'var(--foreground)',
                }}
              >
                ☁️ AWS &amp; Node APIs
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

