import { experiences } from '@/data/portfolioData'
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react'

export const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32 px-6 md:px-8 relative" aria-labelledby="experience-heading">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 border" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', color: 'var(--accent)' }}>
            <span>02 // Experience</span>
          </div>
          <h2
            id="experience-heading"
            className="font-bold text-[clamp(26px,4vw,44px)] leading-[1.15] max-w-2xl tracking-tight"
            style={{ color: 'var(--foreground)' }}
          >
            Engineering roles where I've delivered scalable impact.
          </h2>
        </div>

        {/* Timeline list */}
        <div className="relative border-l ml-3 md:ml-6 pl-6 md:pl-10 space-y-10" style={{ borderColor: 'var(--border)' }}>
          {experiences.map((exp) => {
            const isCurrent = exp.period.includes('Present')
            return (
              <article key={exp.company} className="relative group">
                
                {/* Timeline glowing node */}
                <div
                  className="absolute -left-[31px] md:-left-[47px] top-6 w-4 h-4 rounded-full border-2 transition-all duration-300 group-hover:scale-125"
                  style={{
                    backgroundColor: isCurrent ? 'var(--accent)' : 'var(--surface)',
                    borderColor: isCurrent ? '#60a5fa' : 'var(--border)',
                    boxShadow: isCurrent ? '0 0 12px var(--accent)' : 'none',
                  }}
                />

                {/* Experience Card */}
                <div className="glass-card p-6 md:p-8 flex flex-col gap-5">
                  
                  {/* Card Header: Role, Company & Meta */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b" style={{ borderColor: 'var(--border)' }}>
                    <div>
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <h3 className="font-bold text-lg md:text-xl tracking-tight" style={{ color: 'var(--foreground)' }}>
                          {exp.role}
                        </h3>
                        {isCurrent && (
                          <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full border bg-emerald-500/10 text-emerald-500 border-emerald-500/20">
                            Present
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-semibold mt-1" style={{ color: 'var(--accent)' }}>
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex items-center gap-4 text-xs font-medium" style={{ color: 'var(--foreground-muted)' }}>
                      <span className="flex items-center gap-1.5 font-mono">
                        <Calendar size={13} className="text-blue-500" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={13} className="opacity-60" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Achievements */}
                  <ul className="flex flex-col gap-3" aria-label={`Achievements at ${exp.company}`}>
                    {exp.achievements.map((achievement) => (
                      <li
                        key={achievement}
                        className="flex items-start gap-3 text-sm md:text-[15px] leading-[1.75]"
                        style={{ color: 'var(--foreground-muted)' }}
                      >
                        <CheckCircle2
                          size={16}
                          className="mt-1 shrink-0 text-blue-500 opacity-75"
                          aria-hidden="true"
                        />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              </article>
            )
          })}
        </div>

      </div>
    </section>
  )
}

