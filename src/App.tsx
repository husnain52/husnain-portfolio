import { lazy, Suspense, useEffect, useState } from 'react'
import { ThemeProvider } from './lib/theme'
import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'

const About = lazy(() => import('./components/About').then(m => ({ default: m.About })))
const Projects = lazy(() => import('./components/Projects').then(m => ({ default: m.Projects })))
const Experience = lazy(() => import('./components/Experience').then(m => ({ default: m.Experience })))
const SkillsEducation = lazy(() => import('./components/SkillsEducation').then(m => ({ default: m.SkillsEducation })))
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })))

const sectionIds = ['home', 'about', 'work', 'experience', 'skills', 'education', 'contact']

function Portfolio() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((s): s is HTMLElement => Boolean(s))

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id) setActiveSection(visible.target.id)
      },
      { rootMargin: '-28% 0px -48% 0px', threshold: [0.12, 0.28, 0.44, 0.6] }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeSection={activeSection} />
      <main>
        <Hero />
        <Suspense fallback={null}>
          <About />
          <Projects />
          <Experience />
          <SkillsEducation />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <Portfolio />
    </ThemeProvider>
  )
}

export default App
