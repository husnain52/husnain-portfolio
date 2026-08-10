import { skillCategories, education, certificates } from '@/data/portfolioData'

// One color per category slot — cycles if more categories added
const CATEGORY_COLORS = ['blue', 'violet', 'emerald', 'amber'] as const
const CERT_COLOR = 'sky'

type ChipColor = 'blue' | 'violet' | 'emerald' | 'amber' | 'rose' | 'sky' | 'teal' | 'orange'

function Chip({ label, color }: { label: string; color: ChipColor }) {
  return (
    <span
      className="inline-flex items-center text-[12px] font-semibold px-2.5 py-1 rounded-full leading-none"
      style={{
        backgroundColor: `var(--chip-${color}-bg)`,
        color: `var(--chip-${color}-fg)`,
      }}
    >
      {label}
    </span>
  )
}

export const SkillsEducation = () => {
  return (
    <section id="skills" className="py-40 px-8" style={{ backgroundColor: 'var(--surface)' }}>
      <div className="max-w-6xl mx-auto">
        <p className="text-[13px] tracking-[0.2em] uppercase font-medium mb-6" style={{ color: 'var(--accent)' }}>
          Skills &amp; Credentials
        </p>
        <h2
          className="font-display font-bold text-[clamp(24px,3.5vw,48px)] leading-[1.1] max-w-2xl mb-16"
          style={{ letterSpacing: '-0.03em', color: 'var(--foreground)' }}
        >
          Technologies I work with.
        </h2>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 gap-px mb-px" style={{ backgroundColor: 'var(--border)' }}>
          {skillCategories.map((cat, i) => (
            <div key={cat.categoryName} className="p-8" style={{ backgroundColor: 'var(--background)' }}>
              <p className="text-[13px] tracking-[0.15em] uppercase font-medium mb-5" style={{ color: 'var(--accent)' }}>
                {cat.categoryName}
              </p>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <Chip key={skill} label={skill} color={CATEGORY_COLORS[i % CATEGORY_COLORS.length]} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Education + Certs */}
        <div className="grid sm:grid-cols-2 gap-px" style={{ backgroundColor: 'var(--border)' }}>
          <div className="p-8" style={{ backgroundColor: 'var(--background)' }}>
            <p className="text-[13px] tracking-[0.15em] uppercase font-medium mb-6" style={{ color: 'var(--accent)' }}>
              Education
            </p>
            <div className="flex flex-col gap-6">
              {education.map((edu) => (
                <div key={edu.level} className="flex justify-between items-start">
                  <div>
                    <p className="text-base font-medium" style={{ color: 'var(--foreground)' }}>{edu.level}</p>
                    <p className="text-[13px] mt-0.5" style={{ color: 'var(--foreground-muted)' }}>{edu.school}</p>
                  </div>
                  <span className="text-base font-mono font-medium" style={{ color: 'var(--accent)' }}>{edu.marks}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8" style={{ backgroundColor: 'var(--background)' }}>
            <p className="text-[13px] tracking-[0.15em] uppercase font-medium mb-6" style={{ color: 'var(--accent)' }}>
              Certifications
            </p>
            <div className="flex flex-wrap gap-2">
              {certificates.map((cert) => (
                <Chip key={cert} label={cert} color={CERT_COLOR} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
