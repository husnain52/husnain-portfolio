import { useEffect, useState } from 'react'
import { Menu, X, Sun, Moon, ArrowUp } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useTheme } from '@/lib/theme'

const links = [
  { label: 'About',      href: '#about',      id: 'about' },
  { label: 'Experience', href: '#experience',  id: 'experience' },
  { label: 'Projects',   href: '#work',        id: 'work2' },
  { label: 'Skills',     href: '#skills',      id: 'skills' },
  { label: 'Education',  href: '#education',   id: 'education' },
  { label: 'Contact',    href: '#contact',     id: 'contact' },
]

interface NavigationProps { activeSection: string }

export const Navigation = ({ activeSection }: NavigationProps) => {
  const [menuOpen, setMenuOpen]   = useState(false)
  const [scrolled, setScrolled]   = useState(false)
  const [progress, setProgress]   = useState(0)
  const [showTop,  setShowTop]    = useState(false)
  const { theme, toggle } = useTheme()

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY
      const docH    = document.documentElement.scrollHeight - window.innerHeight
      setScrolled(scrollY > 24)
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
      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[3px]" style={{ backgroundColor: 'var(--border)' }}>
        <div
          className="h-full transition-all duration-100"
          style={{ width: `${progress}%`, backgroundColor: 'var(--accent)' }}
        />
      </div>

      <header
        className={cn(
          'fixed top-[3px] left-0 right-0 z-50 transition-all duration-300',
          scrolled && 'border-b'
        )}
        style={scrolled ? { backgroundColor: 'color-mix(in srgb, var(--background) 88%, transparent)', backdropFilter: 'blur(14px)' } : {}}
      >
        <div className="max-w-6xl mx-auto px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" onClick={(e) => { e.preventDefault(); navigate('#home') }} className="flex items-center -ml-1">
            <img
              src={theme === 'dark' ? '/logo-dark.png' : '/logo-light.png'}
              alt="Husnain Akhtar"
              className="h-16 w-auto object-contain"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <button
                key={link.href + link.label}
                onClick={() => navigate(link.href)}
                className={cn(
                  'text-[12px] tracking-[0.08em] uppercase font-medium transition-all duration-200',
                  activeSection === link.id ? 'link-underline' : 'opacity-40 hover:opacity-100'
                )}
                style={{ color: 'var(--foreground)' }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button onClick={toggle} aria-label="Toggle theme" className="transition-opacity duration-200 hover:opacity-60" style={{ color: 'var(--foreground-muted)' }}>
              {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
            </button>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 text-[13px] tracking-[0.08em] uppercase font-medium border px-4 py-2 transition-all duration-200 hover:opacity-70"
              style={{ color: 'var(--foreground)', borderColor: 'var(--border)' }}
            >
              Resume ↗
            </a>
            <button
              className="md:hidden transition-opacity duration-200 hover:opacity-60"
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((o) => !o)}
              style={{ color: 'var(--foreground)' }}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-b px-8 py-6 flex flex-col gap-5" style={{ backgroundColor: 'var(--background)' }}>
            {links.map((link) => (
              <button
                key={link.href + link.label}
                className="text-left text-[13px] font-medium tracking-wide transition-opacity duration-200"
                style={{ color: activeSection === link.id ? 'var(--foreground)' : 'var(--foreground-muted)' }}
                onClick={() => navigate(link.href)}
              >
                {link.label}
              </button>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-[13px] tracking-[0.08em] uppercase font-medium border w-fit px-4 py-2"
              style={{ color: 'var(--foreground)', borderColor: 'var(--border)' }}
            >
              Resume ↗
            </a>
          </div>
        )}
      </header>

      {/* Scroll to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
        className={cn(
          'fixed bottom-8 right-8 z-50 w-10 h-10 flex items-center justify-center border transition-all duration-300',
          showTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        )}
        style={{ backgroundColor: 'var(--background)', borderColor: 'var(--border)', color: 'var(--foreground)' }}
      >
        <ArrowUp size={15} />
      </button>
    </>
  )
}
