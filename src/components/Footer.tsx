import { Mail, Phone, MapPin } from 'lucide-react'

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)
import { ContactForm } from './ContactForm'
import { socialLinks } from '@/data/portfolioData'
import { useTheme } from '@/lib/theme'

export const Footer = () => {
  const year = new Date().getFullYear()
  const { theme } = useTheme()

  return (
    <footer id="contact" className="py-24 px-8" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 mb-20">
          <div className="flex flex-col gap-6">
            <p className="text-[13px] tracking-[0.2em] uppercase font-medium" style={{ color: 'var(--accent)' }}>
              Get in touch
            </p>
            <h2
              className="font-display font-bold text-[clamp(26px,4.5vw,52px)] leading-[1.1]"
              style={{ letterSpacing: '-0.03em', color: 'var(--foreground)' }}
            >
              Let's build something together.
            </h2>
            <p className="text-base leading-[1.8] max-w-sm" style={{ color: 'var(--foreground-muted)' }}>
              Full-stack developer specializing in React, Node.js, and cloud-native applications. Open to new opportunities.
            </p>

            <div className="flex flex-col gap-3 mt-2">
              <a
                href={`mailto:${socialLinks.email}`}
                className="link-underline flex items-center gap-3 text-base font-medium transition-opacity duration-200 hover:opacity-70 w-fit"
                style={{ color: 'var(--foreground-muted)' }}
              >
                <Mail size={15} style={{ color: 'var(--accent)' }} aria-hidden="true" />
                {socialLinks.email}
              </a>
              <a
                href={`tel:${socialLinks.phone}`}
                className="link-underline flex items-center gap-3 text-base font-medium transition-opacity duration-200 hover:opacity-70 w-fit"
                style={{ color: 'var(--foreground-muted)' }}
              >
                <Phone size={15} style={{ color: 'var(--accent)' }} aria-hidden="true" />
                {socialLinks.phone}
              </a>
              <div className="flex items-center gap-3 text-base font-medium" style={{ color: 'var(--foreground-muted)' }}>
                <MapPin size={15} style={{ color: 'var(--accent)' }} aria-hidden="true" />
                {socialLinks.location}
              </div>
            </div>

            <div className="flex gap-3 mt-2 items-center">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex items-center justify-center w-9 h-9 border transition-all duration-200 hover:opacity-60"
                style={{ color: 'var(--foreground)', borderColor: 'var(--border)' }}
              >
                <GithubIcon />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center justify-center w-9 h-9 border transition-all duration-200 hover:opacity-60"
                style={{ color: 'var(--foreground)', borderColor: 'var(--border)' }}
              >
                <LinkedinIcon />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="link-underline text-[13px] tracking-[0.08em] uppercase font-medium transition-opacity duration-200 hover:opacity-60 ml-2"
                style={{ color: 'var(--foreground-muted)' }}
              >
                Resume ↗
              </a>
            </div>
          </div>

          <div>
            <p className="text-[13px] tracking-[0.08em] uppercase font-medium mb-8" style={{ color: 'var(--foreground-muted)' }}>
              Send a message
            </p>
            <ContactForm />
          </div>
        </div>

        <div className="w-full h-px mb-8" style={{ backgroundColor: 'var(--border)' }} />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <img
            src={theme === 'dark' ? '/logo-dark.png' : '/logo-light.png'}
            alt="Husnain Akhtar"
            className="h-16 w-auto object-contain"
          />
          <p className="text-[13px]" style={{ color: 'var(--foreground-muted)', opacity: 0.5 }}>
            © {year} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
