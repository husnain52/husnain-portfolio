import { Mail, Phone, MapPin } from 'lucide-react'
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

            <div className="flex gap-5 mt-2">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-[13px] tracking-[0.08em] uppercase font-medium transition-opacity duration-200 hover:opacity-60"
                style={{ color: 'var(--foreground-muted)' }}
              >
                GitHub ↗
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-[13px] tracking-[0.08em] uppercase font-medium transition-opacity duration-200 hover:opacity-60"
                style={{ color: 'var(--foreground-muted)' }}
              >
                LinkedIn ↗
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="link-underline text-[13px] tracking-[0.08em] uppercase font-medium transition-opacity duration-200 hover:opacity-60"
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
