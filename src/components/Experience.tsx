import { experiences } from '@/data/portfolioData'

export const Experience = () => {
  return (
    <section id="experience" className="py-40 px-8">
      <div className="max-w-6xl mx-auto">
        <p className="text-[13px] tracking-[0.2em] uppercase font-medium mb-6" style={{ color: 'var(--accent)' }}>
          Professional Experience
        </p>
        <h2
          className="font-display font-bold text-[clamp(24px,3.5vw,48px)] leading-[1.1] max-w-2xl mb-16"
          style={{ letterSpacing: '-0.03em', color: 'var(--foreground)' }}
        >
          Where I've built things.
        </h2>

        <div className="flex flex-col">
          {experiences.map((exp, index) => (
            <article key={exp.company}>
              <div className="grid md:grid-cols-[220px_1fr] gap-12 py-12">
                <div className="flex flex-col gap-1.5 pt-1">
                  <p className="text-[13px] font-mono font-medium" style={{ color: 'var(--foreground-muted)' }}>
                    {exp.period}
                  </p>
                  <p className="text-[13px] opacity-50" style={{ color: 'var(--foreground-muted)' }}>
                    {exp.location}
                  </p>
                </div>

                <div
                  className="p-8 transition-colors duration-200"
                  style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
                >
                  <h3
                    className="font-display font-semibold text-lg leading-tight mb-1"
                    style={{ letterSpacing: '-0.02em', color: 'var(--foreground)' }}
                  >
                    {exp.company}
                  </h3>
                  <p className="text-[13px] tracking-[0.08em] uppercase font-medium mb-6" style={{ color: 'var(--accent)' }}>
                    {exp.role}
                  </p>
                  <ul className="flex flex-col gap-3" aria-label={`Achievements at ${exp.company}`}>
                    {exp.achievements.map((achievement) => (
                      <li key={achievement} className="flex items-start gap-3 text-base leading-[1.8]" style={{ color: 'var(--foreground-muted)' }}>
                        <span
                          className="mt-2 w-1 h-1 shrink-0"
                          style={{ backgroundColor: 'var(--foreground-muted)', opacity: 0.4 }}
                          aria-hidden="true"
                        />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {index < experiences.length - 1 && (
                <div className="w-full h-px" style={{ backgroundColor: 'var(--border)' }} />
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
