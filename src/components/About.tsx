const principles = [
  'Design interfaces that feel calm under pressure.',
  'Keep application state predictable and easy to extend.',
  'Build APIs and data flows around real product workflows.',
  'Ship responsive experiences that work beyond the happy path.',
]

const coreTech = ['React', 'Next.js', 'Node.js', 'TypeScript', 'AWS']

export const About = () => {
  return (
    <section id="about" className="py-40 px-8" aria-labelledby="about-heading">
      <div className="max-w-6xl mx-auto">
        <p className="text-[13px] tracking-[0.2em] uppercase font-medium mb-6" style={{ color: 'var(--accent)' }}>
          About
        </p>
        <h2
          id="about-heading"
          className="font-display font-bold text-[clamp(24px,3.5vw,48px)] leading-[1.1] max-w-2xl mb-16"
          style={{ letterSpacing: '-0.03em', color: 'var(--foreground)' }}
        >
          I turn complex product requirements into clear, usable software.
        </h2>

        <div className="grid md:grid-cols-2 gap-px" style={{ backgroundColor: 'var(--border)' }}>
          {/* Bio card */}
          <div className="p-10 flex flex-col gap-8" style={{ backgroundColor: 'var(--surface)' }}>
            <p className="text-base leading-[1.8]" style={{ color: 'var(--foreground-muted)' }}>
              I'm a full-stack developer based in Islamabad with hands-on experience across React, Next.js, Node.js, Express, databases, and AWS deployment workflows. I care about structure, performance, accessibility, and the small interface details that make software feel trustworthy.
            </p>
            <div className="flex flex-wrap gap-2 pt-6" style={{ borderTop: '1px solid var(--border)' }} aria-label="Core technologies">
              {coreTech.map((tech) => (
                <span
                  key={tech}
                  className="text-[13px] tracking-[0.06em] uppercase font-medium px-3 py-1.5 border"
                  style={{ color: 'var(--foreground-muted)', borderColor: 'var(--border)' }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Principles */}
          <ol className="flex flex-col gap-px" style={{ backgroundColor: 'var(--border)' }} aria-label="Engineering principles">
            {principles.map((principle, i) => (
              <li
                key={principle}
                className="flex gap-6 p-8 transition-colors duration-200"
                style={{ backgroundColor: 'var(--surface)' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--background)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--surface)')}
              >
                <span
                  className="text-[13px] font-medium mt-0.5 shrink-0 font-mono"
                  style={{ color: 'var(--accent)' }}
                >
                  0{i + 1}
                </span>
                <p className="text-base leading-[1.8]" style={{ color: 'var(--foreground-muted)' }}>
                  {principle}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
