import { useState } from 'react'
import { projects } from '@/data/portfolioData'
import { ExternalLink, CheckCircle2, Globe } from 'lucide-react'

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

const STACK_COLORS = ['blue', 'violet', 'emerald', 'sky', 'teal', 'amber', 'rose', 'orange'] as const
type ChipColor = typeof STACK_COLORS[number]

function TechChip({ label, index }: { label: string; index: number }) {
  const color: ChipColor = STACK_COLORS[index % STACK_COLORS.length]
  return (
    <span
      className="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-md border leading-none"
      style={{
        backgroundColor: `var(--chip-${color}-bg)`,
        color: `var(--chip-${color}-fg)`,
        borderColor: `var(--chip-${color}-border)`,
      }}
    >
      {label}
    </span>
  )
}

export const Projects = () => {
  const [filter, setFilter] = useState<'all' | 'fullstack' | 'frontend'>('all')

  const filteredProjects = projects.filter((p) => {
    if (filter === 'fullstack') return p.role.toLowerCase().includes('full-stack')
    if (filter === 'frontend') return p.role.toLowerCase().includes('frontend') || p.techStack.includes('Next.js')
    return true
  })

  return (
    <section id="work" className="py-24 md:py-32 px-6 md:px-8 relative" aria-labelledby="work-heading">
      <div className="max-w-6xl mx-auto">

        {/* Section Header & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 border" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', color: 'var(--accent)' }}>
              <span>03 // Selected Work</span>
            </div>
            <h2
              id="work-heading"
              className="font-bold text-[clamp(26px,4vw,44px)] leading-[1.15] max-w-2xl tracking-tight"
              style={{ color: 'var(--foreground)' }}
            >
              Case-study projects built for real-world operations.
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 p-1 rounded-xl border w-fit" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }}>
            <button
              onClick={() => setFilter('all')}
              className="text-xs font-semibold px-3.5 py-1.5 rounded-lg transition-all duration-200"
              style={{
                backgroundColor: filter === 'all' ? 'var(--accent)' : 'transparent',
                color: filter === 'all' ? '#ffffff' : 'var(--foreground-muted)',
              }}
            >
              All ({projects.length})
            </button>
            <button
              onClick={() => setFilter('fullstack')}
              className="text-xs font-semibold px-3.5 py-1.5 rounded-lg transition-all duration-200"
              style={{
                backgroundColor: filter === 'fullstack' ? 'var(--accent)' : 'transparent',
                color: filter === 'fullstack' ? '#ffffff' : 'var(--foreground-muted)',
              }}
            >
              Full-Stack
            </button>
            <button
              onClick={() => setFilter('frontend')}
              className="text-xs font-semibold px-3.5 py-1.5 rounded-lg transition-all duration-200"
              style={{
                backgroundColor: filter === 'frontend' ? 'var(--accent)' : 'transparent',
                color: filter === 'frontend' ? '#ffffff' : 'var(--foreground-muted)',
              }}
            >
              Frontend &amp; Next.js
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="flex flex-col gap-8">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className="glass-card overflow-hidden transition-all duration-300 group"
            >
              {/* Card Browser Window Header */}
              <div
                className="px-6 py-3.5 border-b flex items-center justify-between"
                style={{
                  backgroundColor: 'color-mix(in srgb, var(--surface) 60%, var(--background))',
                  borderColor: 'var(--border)',
                }}
              >
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-3 text-xs font-mono opacity-50 select-none hidden sm:inline" style={{ color: 'var(--foreground)' }}>
                    https://{project.id}.app
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-semibold" style={{ color: 'var(--accent)' }}>
                    PROJ // 0{index + 1}
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full border" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', color: 'var(--foreground-muted)' }}>
                    {project.role}
                  </span>
                </div>
              </div>

              {/* Project Body */}
              <div className="p-6 md:p-10 grid lg:grid-cols-12 gap-8 items-start">
                
                {/* Left (7 cols): Details & Highlights */}
                <div className="lg:col-span-7 flex flex-col gap-5">
                  <div>
                    <h3 className="font-bold text-2xl md:text-3xl tracking-tight mb-1" style={{ color: 'var(--foreground)' }}>
                      {project.title}
                    </h3>
                    <p className="text-sm font-medium" style={{ color: 'var(--accent)' }}>
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed" style={{ color: 'var(--foreground-muted)' }}>
                    {project.description}
                  </p>

                  <div className="space-y-2.5 pt-2">
                    <p className="text-xs uppercase tracking-wider font-bold" style={{ color: 'var(--foreground)' }}>
                      Key Architectural Impact
                    </p>
                    <ul className="flex flex-col gap-2" aria-label={`${project.title} highlights`}>
                      {project.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-2.5 text-xs md:text-sm leading-relaxed"
                          style={{ color: 'var(--foreground-muted)' }}
                        >
                          <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-blue-500" aria-hidden="true" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
                    {project.techStack.map((item, i) => (
                      <TechChip key={item} label={item} index={i} />
                    ))}
                  </div>
                </div>

                {/* Right (5 cols): Actions & Live Demo Card */}
                <div
                  className="lg:col-span-5 p-6 rounded-xl border flex flex-col justify-between gap-6"
                  style={{
                    backgroundColor: 'var(--background)',
                    borderColor: 'var(--border)',
                  }}
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Globe size={16} className="text-blue-500" />
                      <h4 className="text-sm font-bold" style={{ color: 'var(--foreground)' }}>
                        Deployment &amp; Status
                      </h4>
                    </div>
                    <p className="text-xs leading-relaxed" style={{ color: 'var(--foreground-muted)' }}>
                      Production-tested web application with high reliability, automated CI/CD pipeline, and responsive multi-device design.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 text-xs uppercase tracking-wider font-bold px-4 py-2.5 rounded-lg transition-all duration-200 hover:scale-[1.02] shadow-sm flex-1"
                        style={{
                          backgroundColor: 'var(--accent)',
                          color: '#ffffff',
                        }}
                      >
                        <span>Live Demo</span>
                        <ExternalLink size={14} />
                      </a>
                    ) : (
                      <span className="text-xs uppercase tracking-wider font-semibold px-4 py-2.5 rounded-lg border opacity-40 text-center flex-1" style={{ borderColor: 'var(--border)', color: 'var(--foreground-muted)' }}>
                        Demo Offline
                      </span>
                    )}

                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 text-xs uppercase tracking-wider font-bold px-4 py-2.5 rounded-lg border transition-all duration-200 hover:scale-[1.02] flex-1"
                        style={{
                          backgroundColor: 'var(--surface)',
                          borderColor: 'var(--border)',
                          color: 'var(--foreground)',
                        }}
                      >
                        <GithubIcon />
                        <span>Source</span>
                      </a>
                    ) : (
                      <span className="text-xs uppercase tracking-wider font-semibold px-4 py-2.5 rounded-lg border opacity-40 text-center flex-1" style={{ borderColor: 'var(--border)', color: 'var(--foreground-muted)' }}>
                        Private Repo
                      </span>
                    )}
                  </div>
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

