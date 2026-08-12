import { MapPin, Briefcase, Code2, Rocket } from "lucide-react";
import { socialLinks } from "@/data/portfolioData";

const principles = [
  { icon: Code2, text: "Design interfaces that feel calm under pressure." },
  {
    icon: Rocket,
    text: "Keep application state predictable and easy to extend.",
  },
  {
    icon: Briefcase,
    text: "Build APIs and data flows around real product workflows.",
  },
  {
    icon: MapPin,
    text: "Ship responsive experiences that work beyond the happy path.",
  },
];

const quickFacts = [
  { label: "Based in", value: "Islamabad, Pakistan" },
  { label: "Experience", value: "5+ years" },
  { label: "Availability", value: "Open to remote" },
  { label: "Focus", value: "React · Node.js · AWS" },
];

export const About = () => {
  return (
    <section id="about" className="py-40 px-8" aria-labelledby="about-heading">
      <div className="max-w-6xl mx-auto">
        <p
          className="text-[13px] tracking-[0.2em] uppercase font-medium mb-6"
          style={{ color: "var(--accent)" }}
        >
          About
        </p>
        <h2
          id="about-heading"
          className="font-display font-bold text-[clamp(24px,3.5vw,48px)] leading-[1.1] max-w-2xl mb-16"
          style={{ letterSpacing: "-0.03em", color: "var(--foreground)" }}
        >
          I turn complex product requirements into clear, usable software.
        </h2>

        <div
          className="grid md:grid-cols-2 gap-px"
          style={{ backgroundColor: "var(--border)" }}
        >
          {/* Bio + quick facts */}
          <div
            className="flex flex-col gap-px"
            style={{ backgroundColor: "var(--border)" }}
          >
            <div
              className="p-10 flex flex-col gap-6"
              style={{ backgroundColor: "var(--surface)" }}
            >
              <p
                className="text-base leading-[1.9]"
                style={{ color: "var(--foreground-muted)" }}
              >
                I'm a full-stack developer based in Islamabad with 5+ years of
                hands-on experience shipping production software across React,
                Next.js, Node.js, Express, PostgreSQL, MongoDB, and AWS. I've
                worked across the full delivery cycle — from Figma handoff to
                cloud deployment — at a multinational firm.
              </p>
              <p
                className="text-base leading-[1.9]"
                style={{ color: "var(--foreground-muted)" }}
              >
                I care deeply about structure, performance, and the small
                interface details that make software feel trustworthy. I'm
                equally comfortable optimising a slow SQL query, architecting a
                Redux state model, or refining a component's micro-interaction.
              </p>
              <div className="flex gap-4 pt-2">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] tracking-[0.08em] uppercase font-medium link-underline transition-opacity duration-200 hover:opacity-60"
                  style={{ color: "var(--accent)" }}
                >
                  GitHub ↗
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] tracking-[0.08em] uppercase font-medium link-underline transition-opacity duration-200 hover:opacity-60"
                  style={{ color: "var(--accent)" }}
                >
                  LinkedIn ↗
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[13px] tracking-[0.08em] uppercase font-medium link-underline transition-opacity duration-200 hover:opacity-60"
                  style={{ color: "var(--accent)" }}
                >
                  Resume ↗
                </a>
              </div>
            </div>

            {/* Quick facts */}
            <div
              className="grid grid-cols-2 gap-px"
              style={{ backgroundColor: "var(--border)" }}
            >
              {quickFacts.map((f) => (
                <div
                  key={f.label}
                  className="p-6 flex flex-col gap-1"
                  style={{ backgroundColor: "var(--background)" }}
                >
                  <p
                    className="text-[11px] tracking-[0.15em] uppercase font-medium"
                    style={{ color: "var(--accent)" }}
                  >
                    {f.label}
                  </p>
                  <p
                    className="text-[14px] font-medium"
                    style={{ color: "var(--foreground)" }}
                  >
                    {f.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Principles */}
          <ol
            className="flex flex-col gap-px"
            style={{ backgroundColor: "var(--border)" }}
            aria-label="Engineering principles"
          >
            {principles.map(({ icon: Icon, text }, i) => (
              <li
                key={text}
                className="flex gap-6 p-8 transition-colors duration-200 group"
                style={{ backgroundColor: "var(--surface)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "var(--background)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "var(--surface)")
                }
              >
                <div className="flex flex-col items-center gap-3 shrink-0">
                  <span
                    className="text-[12px] font-medium font-mono"
                    style={{ color: "var(--accent)" }}
                  >
                    0{i + 1}
                  </span>
                  <Icon
                    size={15}
                    style={{ color: "var(--accent)", opacity: 0.6 }}
                    aria-hidden="true"
                  />
                </div>
                <p
                  className="text-base leading-[1.8] pt-0.5"
                  style={{ color: "var(--foreground-muted)" }}
                >
                  {text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};
