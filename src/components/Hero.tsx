import { heroStats, socialLinks } from '@/data/portfolioData'

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

            <p
              className="stagger-3 text-base leading-[1.8] max-w-sm"
              style={{ color: 'var(--foreground-muted)' }}
            >
              I build responsive dashboards, reliable Node.js APIs, and cloud-ready interfaces with React, Next.js, TypeScript, and a product-minded approach to detail.
            </p>

            <div className="stagger-4 flex flex-wrap gap-3">
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
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm tracking-[0.04em] font-medium px-5 py-2.5 transition-opacity duration-200 hover:opacity-50"
                style={{ color: 'var(--foreground-muted)' }}
              >
                GitHub ↗
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

              {/* Decorative corner accents */}
              <div className="absolute -top-2 -left-2 w-5 h-5 pointer-events-none" style={{ borderTop: '2px solid var(--accent)', borderLeft: '2px solid var(--accent)' }} />
              <div className="absolute -top-2 -right-2 w-5 h-5 pointer-events-none" style={{ borderTop: '2px solid var(--accent)', borderRight: '2px solid var(--accent)' }} />
              <div className="absolute -bottom-2 -left-2 w-5 h-5 pointer-events-none" style={{ borderBottom: '2px solid var(--accent)', borderLeft: '2px solid var(--accent)' }} />
              <div className="absolute -bottom-2 -right-2 w-5 h-5 pointer-events-none" style={{ borderBottom: '2px solid var(--accent)', borderRight: '2px solid var(--accent)' }} />

              {/* Image */}
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

                {/* Blue tint overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: 'linear-gradient(160deg, color-mix(in srgb, var(--accent) 12%, transparent) 0%, transparent 60%)', mixBlendMode: 'normal' }}
                />

                {/* Bottom fade into background */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: 'linear-gradient(to bottom, transparent 50%, color-mix(in srgb, var(--background) 55%, transparent) 100%)' }}
                />

                {/* Name tag at bottom */}
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
