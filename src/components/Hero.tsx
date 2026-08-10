import { heroStats, socialLinks } from '@/data/portfolioData'

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
  return (
    <section id="home" className="relative min-h-screen flex items-center px-8 pt-20 pb-16 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-[1fr_340px] lg:grid-cols-[1fr_380px] gap-12 lg:gap-16 items-center">

          {/* Left — text */}
          <div className="flex flex-col gap-7">

            <div className="stagger-1 flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--accent)' }} />
              <span className="text-[13px] tracking-[0.12em] uppercase font-medium" style={{ color: 'var(--accent)' }}>
                Available for product teams &amp; full-stack builds
              </span>
            </div>

            <div className="stagger-2 flex flex-col gap-0.5">
              <h1
                className="text-[clamp(28px,4vw,52px)] leading-[1.08] font-display font-bold"
                style={{ letterSpacing: '-0.03em', color: 'var(--foreground)' }}
              >
                Full-stack developer
              </h1>
              <h1
                className="text-[clamp(28px,4vw,52px)] leading-[1.08] font-display font-bold"
                style={{ letterSpacing: '-0.03em', color: 'var(--foreground-muted)', opacity: 0.3 }}
              >
                for polished web products.
              </h1>
            </div>

            <p className="stagger-3 text-base leading-[1.8] max-w-sm" style={{ color: 'var(--foreground-muted)' }}>
              I build responsive dashboards, reliable Node.js APIs, and cloud-ready interfaces with React, Next.js, TypeScript, and a product-minded approach to detail.
            </p>

            <div className="stagger-4 flex flex-wrap gap-3 items-center">
              <a
                href="#work"
                className="inline-flex items-center text-sm tracking-[0.04em] font-semibold px-5 py-2.5 border transition-all duration-200 hover:opacity-80"
                style={{ color: 'var(--background)', backgroundColor: 'var(--foreground)', borderColor: 'var(--foreground)' }}
              >
                View selected work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center text-sm tracking-[0.04em] font-semibold px-5 py-2.5 border transition-all duration-200 hover:opacity-70"
                style={{ color: 'var(--foreground)', borderColor: 'var(--border)' }}
              >
                Start a conversation
              </a>

              {/* Icon links */}
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex items-center justify-center w-10 h-10 border transition-all duration-200 hover:opacity-60"
                style={{ color: 'var(--foreground)', borderColor: 'var(--border)' }}
              >
                <GithubIcon />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center justify-center w-10 h-10 border transition-all duration-200 hover:opacity-60"
                style={{ color: 'var(--foreground)', borderColor: 'var(--border)' }}
              >
                <LinkedinIcon />
              </a>
            </div>

            <div className="stagger-5 w-full h-px" style={{ backgroundColor: 'var(--border)' }} />

            <div className="stagger-5 flex flex-wrap gap-10">
              {heroStats.map((stat) => (
                <div key={stat.label}>
                  <p
                    className="font-display font-bold text-[clamp(20px,2vw,28px)] leading-none"
                    style={{ letterSpacing: '-0.03em', color: 'var(--foreground)' }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-[13px] font-medium mt-1.5" style={{ color: 'var(--foreground-muted)' }}>
                    {stat.label}
                  </p>
                  <p className="text-[13px] mt-0.5 opacity-50" style={{ color: 'var(--foreground-muted)' }}>
                    {stat.context}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — portrait */}
          <div className="stagger-2 hidden md:flex items-center justify-center">
            <div className="relative w-full">
              <div className="absolute -top-2 -left-2 w-5 h-5 pointer-events-none" style={{ borderTop: '2px solid var(--accent)', borderLeft: '2px solid var(--accent)' }} />
              <div className="absolute -top-2 -right-2 w-5 h-5 pointer-events-none" style={{ borderTop: '2px solid var(--accent)', borderRight: '2px solid var(--accent)' }} />
              <div className="absolute -bottom-2 -left-2 w-5 h-5 pointer-events-none" style={{ borderBottom: '2px solid var(--accent)', borderLeft: '2px solid var(--accent)' }} />
              <div className="absolute -bottom-2 -right-2 w-5 h-5 pointer-events-none" style={{ borderBottom: '2px solid var(--accent)', borderRight: '2px solid var(--accent)' }} />

              <div className="relative overflow-hidden" style={{ borderRadius: '2px' }}>
                <img
                  src="/hero-image.png"
                  alt="Husnain Akhtar"
                  className="w-full block"
                  style={{
                    aspectRatio: '662 / 768',
                    objectFit: 'cover',
                    objectPosition: 'top',
                    filter: 'brightness(0.82) contrast(1.08) saturate(0.75)',
                  }}
                />
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(160deg, color-mix(in srgb, var(--accent) 12%, transparent) 0%, transparent 60%)', mixBlendMode: 'normal' }} />
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent 50%, color-mix(in srgb, var(--background) 55%, transparent) 100%)' }} />
                <div className="absolute bottom-0 left-0 right-0 px-5 py-4" style={{ background: 'linear-gradient(to top, color-mix(in srgb, var(--background) 80%, transparent), transparent)' }}>
                  <p className="text-[13px] font-semibold tracking-wide" style={{ color: 'var(--foreground)' }}>Husnain Akhtar</p>
                  <p className="text-[11px] mt-0.5" style={{ color: 'var(--foreground-muted)' }}>Full-stack Developer · Islamabad</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
