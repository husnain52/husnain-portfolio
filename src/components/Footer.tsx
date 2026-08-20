import { useState } from 'react'
import { Mail, Phone, MapPin, Copy, Check, ArrowUpRight } from 'lucide-react'
import { ContactForm } from './ContactForm'
import { socialLinks } from '@/data/portfolioData'
import { useTheme } from '@/lib/theme'

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

export const Footer = () => {
  const year = new Date().getFullYear()
  const { theme } = useTheme()
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(socialLinks.email)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  const copyPhone = () => {
    navigator.clipboard.writeText(socialLinks.phone)
    setCopiedPhone(true)
    setTimeout(() => setCopiedPhone(false), 2000)
  }

  return (
    <footer id="contact" className="py-24 md:py-32 px-6 md:px-8 relative border-t" style={{ borderColor: 'var(--border)' }}>
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 border" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', color: 'var(--accent)' }}>
            <span>06 // Contact &amp; Connect</span>
          </div>
          <h2
            className="font-bold text-[clamp(28px,4.5vw,48px)] leading-[1.12] max-w-2xl tracking-tight"
            style={{ color: 'var(--foreground)' }}
          >
            Let's build something exceptional together.
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 mb-20 items-start">
          
          {/* Left info column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <p className="text-base md:text-lg leading-relaxed" style={{ color: 'var(--foreground-muted)' }}>
              Whether you have an open full-time role, need a high-performance web product engineered, or want to discuss technical architecture, my inbox is always open.
            </p>

            {/* Direct Contact Buttons with Copy */}
            <div className="flex flex-col gap-3">
              {/* Email */}
              <div
                className="glass-card p-4 flex items-center justify-between gap-3 group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center border shrink-0" style={{ backgroundColor: 'var(--background)', borderColor: 'var(--border)' }}>
                    <Mail size={15} className="text-blue-500" />
                  </div>
                  <a
                    href={`mailto:${socialLinks.email}`}
                    className="text-sm font-semibold truncate hover:underline"
                    style={{ color: 'var(--foreground)' }}
                  >
                    {socialLinks.email}
                  </a>
                </div>

                <button
                  onClick={copyEmail}
                  className="text-xs font-medium px-2.5 py-1.5 rounded-md border flex items-center gap-1.5 shrink-0 transition-transform duration-150 hover:scale-105"
                  style={{
                    backgroundColor: 'var(--background)',
                    borderColor: copiedEmail ? '#10b981' : 'var(--border)',
                    color: copiedEmail ? '#10b981' : 'var(--foreground-muted)',
                  }}
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check size={13} /> : <Copy size={13} />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Phone */}
              <div
                className="glass-card p-4 flex items-center justify-between gap-3 group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center border shrink-0" style={{ backgroundColor: 'var(--background)', borderColor: 'var(--border)' }}>
                    <Phone size={15} className="text-emerald-500" />
                  </div>
                  <a
                    href={`tel:${socialLinks.phone}`}
                    className="text-sm font-semibold truncate hover:underline"
                    style={{ color: 'var(--foreground)' }}
                  >
                    {socialLinks.phone}
                  </a>
                </div>

                <button
                  onClick={copyPhone}
                  className="text-xs font-medium px-2.5 py-1.5 rounded-md border flex items-center gap-1.5 shrink-0 transition-transform duration-150 hover:scale-105"
                  style={{
                    backgroundColor: 'var(--background)',
                    borderColor: copiedPhone ? '#10b981' : 'var(--border)',
                    color: copiedPhone ? '#10b981' : 'var(--foreground-muted)',
                  }}
                  aria-label="Copy phone"
                >
                  {copiedPhone ? <Check size={13} /> : <Copy size={13} />}
                  <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Location */}
              <div
                className="glass-card p-4 flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-lg flex items-center justify-center border shrink-0" style={{ backgroundColor: 'var(--background)', borderColor: 'var(--border)' }}>
                  <MapPin size={15} className="text-purple-500" />
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: 'var(--foreground)' }}>
                    {socialLinks.location}
                  </p>
                  <p className="text-xs opacity-75" style={{ color: 'var(--foreground-muted)' }}>
                    Available for Remote &amp; On-Site engagements
                  </p>
                </div>
              </div>
            </div>

            {/* Social profiles strip */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-xl border transition-all duration-200 hover:scale-105"
                style={{
                  backgroundColor: 'var(--surface)',
                  borderColor: 'var(--border)',
                  color: 'var(--foreground)',
                }}
              >
                <GithubIcon />
                <span>GitHub</span>
              </a>

              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-xl border transition-all duration-200 hover:scale-105"
                style={{
                  backgroundColor: 'var(--surface)',
                  borderColor: 'var(--border)',
                  color: 'var(--foreground)',
                }}
              >
                <LinkedinIcon />
                <span>LinkedIn</span>
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-xl border transition-all duration-200 hover:scale-105 ml-auto"
                style={{
                  backgroundColor: 'var(--surface)',
                  borderColor: 'var(--border)',
                  color: 'var(--accent)',
                }}
              >
                <span>Resume</span>
                <ArrowUpRight size={14} />
              </a>
            </div>

          </div>

          {/* Right column: Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderColor: 'var(--border)' }}>
          <div className="flex items-center gap-3">
            <img
              src={theme === 'dark' ? '/logo-dark.png' : '/logo-light.png'}
              alt="Husnain Akhtar"
              className="h-10 md:h-12 w-auto object-contain"
            />
            <span className="text-xs" style={{ color: 'var(--foreground-muted)' }}>
              © {year} Husnain Akhtar. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium" style={{ color: 'var(--foreground-muted)' }}>
            <span>Built with React 19 &amp; Next-gen Web Standards</span>
          </div>
        </div>

      </div>
    </footer>
  )
}

