import { projects } from '@/data/portfolioData'

const STACK_COLORS = ['rose', 'teal', 'orange', 'violet', 'sky', 'emerald', 'amber', 'blue'] as const
type ChipColor = typeof STACK_COLORS[number]

function TechChip({ label, index }: { label: string; index: number }) {
  const color: ChipColor = STACK_COLORS[index % STACK_COLORS.length]
  return (
    <span
      className="inline-flex items-center text-[12px] font-semibold px-2.5 py-1 rounded-full leading-none"
      style={{ backgroundColor: `var(--chip-${color}-bg)`, color: `var(--chip-${color}-fg)` }}
    >
      {label}
    </span>
  )
}

export const Projects = () => {
  return (
    <section id="work" className="py-40 px-8" style={{ backgroundColor: 'var(--surface)' }}>
      <div className="max-w-6xl mx-auto">
        <p className="text-[13px] tracking-[0.2em] uppercase font-medium mb-6" style={{ color: 'var(--accent)' }}>
          Selected work
        </p>
        <h2
          className="font-display font-bold text-[clamp(24px,3.5vw,48px)] leading-[1.1] max-w-2xl mb-16"
          style={{ letterSpacing: '-0.03em', color: 'var(--foreground)' }}
        >
          Case-study style projects built for real product workflows.
        </h2>

        <div className="flex flex-col gap-px" style={{ backgroundColor: 'var(--border)' }}>
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="grid md:grid-cols-[1fr_2fr] gap-px transition-colors duration-200"
              style={{ backgroundColor: 'var(--border)' }}
            >
              {/* Index panel */}
              <div
                className="flex flex-col justify-between p-10"
                style={{ backgroundColor: 'var(--background)' }}
              >
                <span
                  className="font-serif font-light text-[clamp(64px,8vw,96px)] leading-none select-none"
                  style={{ color: 'var(--border)', letterSpacing: '-0.04em' }}
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="mt-8">
                  <p className="text-[13px] tracking-[0.08em] uppercase font-medium mb-1" style={{ color: 'var(--accent)' }}>
                    {project.role}
                  </p>
                  <p className="text-[13px]" style={{ color: 'var(--foreground-muted)' }}>
                    {project.subtitle}
                  </p>
                </div>
              </div>

              {/* Content panel */}
              <div className="p-10 flex flex-col gap-6" style={{ backgroundColor: 'var(--surface)' }}>
                <h3
                  className="font-display font-bold text-[clamp(20px,2.5vw,30px)] leading-tight"
                  style={{ letterSpacing: '-0.025em', color: 'var(--foreground)' }}
                >
                  {project.title}
                </h3>
                <p className="text-base leading-[1.8]" style={{ color: 'var(--foreground-muted)' }}>
                  {project.description}
                </p>

                <ul className="flex flex-col gap-2.5" aria-label={`${project.title} highlights`}>
                  {project.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-[13px] leading-relaxed" style={{ color: 'var(--foreground-muted)' }}>
                      <span
                        className="mt-1.5 w-1 h-1 shrink-0"
                        style={{ backgroundColor: 'var(--foreground-muted)', opacity: 0.5 }}
                        aria-hidden="true"
                      />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
                  {project.techStack.map((item, i) => (
                    <TechChip key={item} label={item} index={i} />
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] tracking-[0.08em] uppercase font-medium px-4 py-2 border transition-all duration-200 hover:scale-[1.015]"
                      style={{ color: 'var(--background)', backgroundColor: 'var(--foreground)', borderColor: 'var(--foreground)' }}
                    >
                      Live Demo ↗
                    </a>
                  ) : (
                    <span
                      className="text-[13px] tracking-[0.08em] uppercase font-medium px-4 py-2 border opacity-30"
                      style={{ color: 'var(--foreground-muted)', borderColor: 'var(--border)' }}
                    >
                      Demo unavailable
                    </span>
                  )}
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] tracking-[0.08em] uppercase font-medium px-4 py-2 border transition-all duration-200 hover:scale-[1.015]"
                      style={{ color: 'var(--foreground)', borderColor: 'var(--border)' }}
                    >
                      Source ↗
                    </a>
                  ) : (
                    <span
                      className="text-[13px] tracking-[0.08em] uppercase font-medium px-4 py-2 border opacity-30"
                      style={{ color: 'var(--foreground-muted)', borderColor: 'var(--border)' }}
                    >
                      Private repo
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
