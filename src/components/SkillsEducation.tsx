import { Award, GraduationCap } from 'lucide-react'
import { skillCategories, education, certificates } from '@/data/portfolioData'

// ── Chip colors ────────────────────────────────────────────────────────────────
type ChipColor = 'blue' | 'violet' | 'emerald' | 'amber' | 'rose' | 'sky' | 'teal' | 'orange'
const CATEGORY_COLORS: ChipColor[] = ['blue', 'violet', 'emerald', 'amber']
const CERT_COLOR: ChipColor = 'sky'

function Chip({ label, color }: { label: string; color: ChipColor }) {
  return (
    <span
      className="inline-flex items-center text-[12px] font-semibold px-2.5 py-1 rounded-full leading-none"
      style={{ backgroundColor: `var(--chip-${color}-bg)`, color: `var(--chip-${color}-fg)` }}
    >
      {label}
    </span>
  )
}

// ── Category icons ─────────────────────────────────────────────────────────────
const CATEGORY_META: Record<string, { emoji: string; desc: string }> = {
  Frontend:       { emoji: '🖥️', desc: 'UI frameworks, styling & state' },
  Backend:        { emoji: '⚙️', desc: 'APIs, auth & real-time services' },
  Database:       { emoji: '🗄️', desc: 'Relational & document stores' },
  'DevOps & Tools': { emoji: '🚀', desc: 'CI/CD, cloud & testing toolchain' },
}

// ── Skills Section ─────────────────────────────────────────────────────────────
export const SkillsEducation = () => {
  return (
    <>
      {/* ── Skills ── */}
      <section id="skills" className="py-40 px-8" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-[13px] tracking-[0.2em] uppercase font-medium mb-6" style={{ color: 'var(--accent)' }}>
            Skills
          </p>
          <h2
            className="font-display font-bold text-[clamp(24px,3.5vw,48px)] leading-[1.1] max-w-2xl mb-16"
            style={{ letterSpacing: '-0.03em', color: 'var(--foreground)' }}
          >
            Technologies I work with.
          </h2>

          <div className="grid sm:grid-cols-2 gap-px" style={{ backgroundColor: 'var(--border)' }}>
            {skillCategories.map((cat, i) => {
              const meta = CATEGORY_META[cat.categoryName] ?? { emoji: '🔧', desc: '' }
              const color = CATEGORY_COLORS[i % CATEGORY_COLORS.length]
              return (
                <div key={cat.categoryName} className="p-8 flex flex-col gap-5" style={{ backgroundColor: 'var(--background)' }}>
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-lg" aria-hidden="true">{meta.emoji}</span>
                        <p className="text-[13px] tracking-[0.15em] uppercase font-semibold" style={{ color: 'var(--accent)' }}>
                          {cat.categoryName}
                        </p>
                      </div>
                      <p className="text-[12px]" style={{ color: 'var(--foreground-muted)' }}>{meta.desc}</p>
                    </div>
                    <span
                      className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded-full shrink-0"
                      style={{ backgroundColor: `var(--chip-${color}-bg)`, color: `var(--chip-${color}-fg)` }}
                    >
                      {cat.skills.length}
                    </span>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-px" style={{ backgroundColor: 'var(--border)' }} />

                  {/* Chips */}
                  <div className="flex flex-wrap gap-2">
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

      {/* ── Education & Certifications ── */}
      <section id="education" className="py-40 px-8" style={{ backgroundColor: 'var(--background)' }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-[13px] tracking-[0.2em] uppercase font-medium mb-6" style={{ color: 'var(--accent)' }}>
            Education &amp; Credentials
          </p>
          <h2
            className="font-display font-bold text-[clamp(24px,3.5vw,48px)] leading-[1.1] max-w-2xl mb-16"
            style={{ letterSpacing: '-0.03em', color: 'var(--foreground)' }}
          >
            Academic background &amp; certifications.
          </h2>

          <div className="grid sm:grid-cols-2 gap-px" style={{ backgroundColor: 'var(--border)' }}>

            {/* Education */}
            <div className="p-8 flex flex-col gap-8" style={{ backgroundColor: 'var(--surface)' }}>
              <div className="flex items-center gap-2.5">
                <GraduationCap size={16} style={{ color: 'var(--accent)' }} aria-hidden="true" />
                <p className="text-[13px] tracking-[0.15em] uppercase font-semibold" style={{ color: 'var(--accent)' }}>
                  Education
                </p>
              </div>
              <div className="flex flex-col gap-6">
                {education.map((edu) => (
                  <div
                    key={edu.level}
                    className="flex justify-between items-start gap-4 pb-6"
                    style={{ borderBottom: '1px solid var(--border)' }}
                  >
                    <div className="flex flex-col gap-1">
                      <p className="text-base font-semibold" style={{ color: 'var(--foreground)' }}>{edu.level}</p>
                      <p className="text-[13px]" style={{ color: 'var(--foreground-muted)' }}>{edu.school}</p>
                    </div>
                    <Chip label={edu.marks} color="emerald" />
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="p-8 flex flex-col gap-8" style={{ backgroundColor: 'var(--surface)' }}>
              <div className="flex items-center gap-2.5">
                <Award size={16} style={{ color: 'var(--accent)' }} aria-hidden="true" />
                <p className="text-[13px] tracking-[0.15em] uppercase font-semibold" style={{ color: 'var(--accent)' }}>
                  Certifications
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {certificates.map((cert) => (
                  <Chip key={cert} label={cert} color={CERT_COLOR} />
                ))}
              </div>
              <div className="mt-auto pt-6" style={{ borderTop: '1px solid var(--border)' }}>
                <p className="text-[12px] leading-relaxed" style={{ color: 'var(--foreground-muted)' }}>
                  Certifications span JavaScript fundamentals, modern React & Next.js patterns, TypeScript, cloud AI (Azure), and professional English proficiency (IELTS 6.5).
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
