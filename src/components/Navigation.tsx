import { useEffect, useState } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useTheme } from '@/lib/theme'

const links = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Work', href: '#work', id: 'work' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Skills', href: '#skills', id: 'skills' },
]

interface NavigationProps { activeSection: string }

export const Navigation = ({ activeSection }: NavigationProps) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggle } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
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
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled && 'border-b'
      )}
      style={scrolled ? { backgroundColor: 'color-mix(in srgb, var(--background) 88%, transparent)', backdropFilter: 'blur(14px)' } : {}}
    >
      <div className="max-w-6xl mx-auto h-20 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); navigate('#home') }}
          className="flex items-center -ml-1"
        >
          <img
            src={theme === 'dark' ? '/logo-dark.png' : '/logo-light.png'}
            alt="Husnain Akhtar"
            className="h-16 w-auto object-contain"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => navigate(link.href)}
              className={cn(
                'text-[13px] tracking-[0.08em] uppercase font-medium transition-all duration-200',
                activeSection === link.id
                  ? 'link-underline'
                  : 'opacity-40 hover:opacity-100'
              )}
              style={{ color: 'var(--foreground)' }}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="transition-opacity duration-200 hover:opacity-60"
            style={{ color: 'var(--foreground-muted)' }}
          >
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
              key={link.href}
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
  )
}
