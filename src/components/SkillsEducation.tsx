import { Award, GraduationCap, Monitor, Server, Database, Cloud, Terminal, CheckCircle2 } from 'lucide-react'
import { skillCategories, education, certificates } from '@/data/portfolioData'

type ChipColor = 'blue' | 'violet' | 'emerald' | 'amber' | 'rose' | 'sky' | 'teal' | 'orange'
const CATEGORY_COLORS: ChipColor[] = ['blue', 'violet', 'emerald', 'amber']
const CERT_COLOR: ChipColor = 'sky'

function Chip({ label, color }: { label: string; color: ChipColor }) {
  return (
    <span
      className="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-md border leading-none transition-transform duration-150 hover:scale-105"
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

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  Frontend: <Monitor size={17} className="text-blue-500" />,
  Backend: <Server size={17} className="text-purple-500" />,
  Database: <Database size={17} className="text-emerald-500" />,
  'DevOps & Tools': <Cloud size={17} className="text-amber-500" />,
}

const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  Frontend: 'Client frameworks, responsive styling & state architectures',
  Backend: 'RESTful APIs, authentication, microservices & real-time events',
  Database: 'Relational data models, document stores & query tuning',
  'DevOps & Tools': 'CI/CD workflows, AWS cloud deployment & automated testing',
}

export const SkillsEducation = () => {
  return (
    <>
      {/* ── Skills Section ── */}
      <section id="skills" className="py-24 md:py-32 px-6 md:px-8 relative" aria-labelledby="skills-heading">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 border" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', color: 'var(--accent)' }}>
              <span>04 // Technical Matrix</span>
            </div>
            <h2
              id="skills-heading"
              className="font-bold text-[clamp(26px,4vw,44px)] leading-[1.15] max-w-2xl tracking-tight"
              style={{ color: 'var(--foreground)' }}
            >
              Technologies, frameworks &amp; engineering tooling.
            </h2>
          </div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {skillCategories.map((cat, i) => {
              const icon = CATEGORY_ICONS[cat.categoryName] ?? <Terminal size={17} className="text-blue-500" />
              const desc = CATEGORY_DESCRIPTIONS[cat.categoryName] ?? ''
              const color = CATEGORY_COLORS[i % CATEGORY_COLORS.length]
              
              return (
                <div
                  key={cat.categoryName}
                  className="glass-card p-6 md:p-8 flex flex-col justify-between gap-5"
                >
                  {/* Category Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center border" style={{ backgroundColor: 'var(--background)', borderColor: 'var(--border)' }}>
                        {icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-base tracking-tight" style={{ color: 'var(--foreground)' }}>
                          {cat.categoryName}
                        </h3>
                        <p className="text-xs" style={{ color: 'var(--foreground-muted)' }}>
                          {desc}
                        </p>
                      </div>
                    </div>

                    <span
                      className="text-xs font-mono font-bold px-2 py-0.5 rounded-full border shrink-0"
                      style={{
                        backgroundColor: `var(--chip-${color}-bg)`,
                        color: `var(--chip-${color}-fg)`,
                        borderColor: `var(--chip-${color}-border)`,
                      }}
                    >
                      {cat.skills.length}
                    </span>
                  </div>

                  {/* Chips */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t" style={{ borderColor: 'var(--border)' }}>
                    {cat.skills.map((skill) => (
                      <Chip key={skill} label={skill} color={color} />
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Education & Credentials ── */}
      <section id="education" className="py-24 md:py-32 px-6 md:px-8 relative border-t" style={{ borderColor: 'var(--border)' }} aria-labelledby="education-heading">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 border" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', color: 'var(--accent)' }}>
              <span>05 // Credentials</span>
            </div>
            <h2
              id="education-heading"
              className="font-bold text-[clamp(26px,4vw,44px)] leading-[1.15] max-w-2xl tracking-tight"
              style={{ color: 'var(--foreground)' }}
            >
              Academic foundation &amp; certifications.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">

            {/* Education Card */}
            <div className="glass-card p-6 md:p-8 flex flex-col gap-6">
              <div className="flex items-center gap-3 pb-3 border-b" style={{ borderColor: 'var(--border)' }}>
                <div className="w-9 h-9 rounded-lg flex items-center justify-center border" style={{ backgroundColor: 'var(--background)', borderColor: 'var(--border)' }}>
                  <GraduationCap size={18} className="text-blue-500" />
                </div>
                <div>
                  <h3 className="font-bold text-base" style={{ color: 'var(--foreground)' }}>
                    Education History
                  </h3>
                  <p className="text-xs" style={{ color: 'var(--foreground-muted)' }}>
                    Degree &amp; associate engineering diplomas
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                {education.map((edu) => (
                  <div
                    key={edu.level}
                    className="flex justify-between items-start gap-4 p-4 rounded-xl border"
                    style={{
                      backgroundColor: 'var(--background)',
                      borderColor: 'var(--border)',
                    }}
                  >
                    <div className="flex flex-col gap-1">
                      <p className="text-sm md:text-base font-bold tracking-tight" style={{ color: 'var(--foreground)' }}>
                        {edu.level}
                      </p>
                      <p className="text-xs" style={{ color: 'var(--foreground-muted)' }}>
                        {edu.school}
                      </p>
                    </div>
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md border bg-emerald-500/10 text-emerald-500 border-emerald-500/20 shrink-0">
                      {edu.marks}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Card */}
            <div className="glass-card p-6 md:p-8 flex flex-col justify-between gap-6">
              <div>
                <div className="flex items-center gap-3 pb-3 border-b mb-5" style={{ borderColor: 'var(--border)' }}>
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center border" style={{ backgroundColor: 'var(--background)', borderColor: 'var(--border)' }}>
                    <Award size={18} className="text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base" style={{ color: 'var(--foreground)' }}>
                      Professional Certifications
                    </h3>
                    <p className="text-xs" style={{ color: 'var(--foreground-muted)' }}>
                      Verified competencies &amp; language proficiencies
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {certificates.map((cert) => (
                    <Chip key={cert} label={cert} color={CERT_COLOR} />
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl border flex items-start gap-2.5" style={{ backgroundColor: 'var(--background)', borderColor: 'var(--border)' }}>
                <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                <p className="text-xs leading-relaxed" style={{ color: 'var(--foreground-muted)' }}>
                  Certifications validate expertise in JavaScript fundamentals, Next.js application architectures, TypeScript strict typing, Microsoft Azure AI Fundamentals, and professional English proficiency (IELTS 6.5).
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

