import { useEffect, useState } from 'react'
import { Menu, X, Sun, Moon, ArrowUp, FileText } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useTheme } from '@/lib/theme'

const links = [
  { label: 'About',      href: '#about',      id: 'about' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Projects',   href: '#work',       id: 'work' },
  { label: 'Skills',     href: '#skills',     id: 'skills' },
  { label: 'Education',  href: '#education',  id: 'education' },
  { label: 'Contact',    href: '#contact',    id: 'contact' },
]

interface NavigationProps { activeSection: string }

export const Navigation = ({ activeSection }: NavigationProps) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const [showTop, setShowTop] = useState(false)
  const { theme, toggle } = useTheme()

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY
      const docH = document.documentElement.scrollHeight - window.innerHeight
      setScrolled(scrollY > 20)
      setProgress(docH > 0 ? (scrollY / docH) * 100 : 0)
      setShowTop(scrollY > 400)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const navigate = (href: string) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      {/* Precision scroll progress indicator */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[2.5px] bg-transparent">
        <div
          className="h-full transition-all duration-75 ease-out"
          style={{
            width: `${progress}%`,
            background: 'linear-gradient(90deg, var(--accent), #6366f1)',
          }}
        />
      </div>

      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'py-3 border-b shadow-sm'
            : 'py-5'
        )}
        style={{
          backgroundColor: scrolled
            ? 'color-mix(in srgb, var(--background) 85%, transparent)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderColor: 'var(--border)',
        }}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); navigate('#home') }}
            className="group flex items-center gap-3 select-none transition-transform duration-200 hover:scale-[1.02]"
            aria-label="Husnain Akhtar Home"
          >
            <img
              src={theme === 'dark' ? '/logo-dark.png' : '/logo-light.png'}
              alt="Husnain Akhtar"
              className="h-12 md:h-14 w-auto object-contain transition-opacity duration-200"
            />
          </a>

          {/* Desktop nav — sleek pill group */}
          <nav className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full border" style={{ backgroundColor: 'color-mix(in srgb, var(--surface) 80%, transparent)', borderColor: 'var(--border)' }}>
            {links.map((link) => {
              const isActive = activeSection === link.id
              return (
                <button
                  key={link.href + link.label}
                  onClick={() => navigate(link.href)}
                  className={cn(
                    'text-[12px] tracking-[0.05em] uppercase font-medium px-3.5 py-1.5 rounded-full transition-all duration-200',
                    isActive
                      ? 'font-semibold shadow-sm'
                      : 'hover:opacity-100 opacity-60'
                  )}
                  style={{
                    backgroundColor: isActive ? 'var(--accent)' : 'transparent',
                    color: isActive ? '#ffffff' : 'var(--foreground)',
                  }}
                >
                  {link.label}
                </button>
              )
            })}
          </nav>

          {/* Action buttons: Theme switch & Resume */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-200 hover:scale-105"
              style={{
                backgroundColor: 'var(--surface)',
                borderColor: 'var(--border)',
                color: 'var(--foreground)',
              }}
            >
              {theme === 'dark' ? (
                <Sun size={16} className="text-amber-400 transition-transform duration-300 rotate-0 hover:rotate-45" />
              ) : (
                <Moon size={16} className="text-slate-700 transition-transform duration-300 rotate-0 hover:-rotate-12" />
              )}
            </button>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-[12px] tracking-[0.06em] uppercase font-semibold px-4 py-2 rounded-full border transition-all duration-200 hover:scale-[1.02] shadow-sm"
              style={{
                backgroundColor: 'var(--surface)',
                borderColor: 'var(--border)',
                color: 'var(--foreground)',
              }}
            >
              <FileText size={13} className="text-blue-500" />
              <span>Resume</span>
              <span className="opacity-50">↗</span>
            </a>

            {/* Mobile menu button */}
            <button
              className="md:hidden w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-200"
              aria-label="Toggle navigation menu"
              onClick={() => setMenuOpen((o) => !o)}
              style={{
                backgroundColor: 'var(--surface)',
                borderColor: 'var(--border)',
                color: 'var(--foreground)',
              }}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile menu drawer */}
        {menuOpen && (
          <div
            className="md:hidden border-b px-6 py-6 flex flex-col gap-3 animate-fade-up shadow-lg"
            style={{
              backgroundColor: 'var(--surface)',
              borderColor: 'var(--border)',
            }}
          >
            {links.map((link) => {
              const isActive = activeSection === link.id
              return (
                <button
                  key={link.href + link.label}
                  className="text-left text-sm font-medium px-4 py-2.5 rounded-lg transition-all duration-150 flex items-center justify-between"
                  style={{
                    backgroundColor: isActive ? 'color-mix(in srgb, var(--accent) 12%, transparent)' : 'transparent',
                    color: isActive ? 'var(--accent)' : 'var(--foreground)',
                  }}
                  onClick={() => navigate(link.href)}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--accent)' }} />}
                </button>
              )
            })}
            <div className="pt-2 border-t mt-1" style={{ borderColor: 'var(--border)' }}>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 text-xs tracking-wider uppercase font-semibold w-full py-3 rounded-lg border"
                style={{
                  backgroundColor: 'var(--background)',
                  borderColor: 'var(--border)',
                  color: 'var(--foreground)',
                }}
              >
                <FileText size={14} className="text-blue-500" />
                Download Resume ↗
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Floating Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
        className={cn(
          'fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full flex items-center justify-center border shadow-md transition-all duration-300 hover:scale-110 active:scale-95',
          showTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        )}
        style={{
          backgroundColor: 'var(--surface)',
          borderColor: 'var(--border)',
          color: 'var(--foreground)',
        }}
      >
        <ArrowUp size={16} />
      </button>
    </>
  )
}

