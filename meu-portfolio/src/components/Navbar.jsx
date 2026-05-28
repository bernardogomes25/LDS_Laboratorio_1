import { useState } from 'react'
import { Monitor, User, Phone, Briefcase, Menu, X } from 'lucide-react'
import { TypewriterText } from './shared/TypewriterText'
import { TRANSLATIONS } from '../i18n/translations'
import { COLORS } from '../constants/colors'

const WHITE = COLORS.TEXT_PRIMARY

export function Navbar({ lang, onToggleLang }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const t = TRANSLATIONS[lang].nav

  const NAV_LINKS = [
    { label: t.projects,   Icon: Monitor,   href: '#projects'   },
    { label: t.about,      Icon: User,      href: '#about'      },
    { label: t.contacts,   Icon: Phone,     href: '#contacts'   },
    { label: t.experience, Icon: Briefcase, href: '#experience' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: 'rgba(27,27,27,0.75)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}>
      <div className="flex items-center justify-between px-6 sm:px-10 py-4">
        <a href="#about" className="font-extrabold text-xl tracking-tight select-none" style={{ color: WHITE }}>
          Bernardo Gomes
        </a>

        {/* Links desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, Icon, href }) => (
            <li key={label}>
              <a
                href={href}
                className="flex flex-col items-center gap-1 text-white hover:opacity-70 transition-opacity text-xs font-medium"
              >
                <Icon size={18} strokeWidth={1.8} />
                <span><TypewriterText speed={30}>{label}</TypewriterText></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Seletor de idioma + menu hamburger */}
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleLang}
            className="font-bold text-xs border-2 rounded-full px-3 py-1 transition-colors"
            style={{ borderColor: WHITE, color: WHITE }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = WHITE; e.currentTarget.style.color = '#000' }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = WHITE }}
            aria-label="Toggle language"
          >
            {lang === 'en' ? 'PT' : 'EN'}
          </button>
          <button
            className="md:hidden text-white hover:opacity-70 transition-opacity"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            style={{ transition: 'transform 0.25s ease', transform: menuOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        className="md:hidden"
        style={{
          overflow: 'hidden',
          maxHeight: menuOpen ? '320px' : '0px',
          opacity: menuOpen ? 1 : 0,
          transition: 'max-height 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.25s ease',
          borderTop: menuOpen ? '1px solid rgba(232,232,232,0.12)' : '1px solid transparent',
        }}
      >
        <ul className="flex flex-col pb-3">
          {NAV_LINKS.map(({ label, Icon, href }, i) => (
            <li
              key={label}
              style={{
                transform: menuOpen ? 'translateX(0)' : 'translateX(-12px)',
                opacity: menuOpen ? 1 : 0,
                transition: `transform 0.30s ease ${i * 0.06}s, opacity 0.25s ease ${i * 0.06}s`,
              }}
            >
              <a
                href={href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 px-6 py-3 text-white hover:opacity-70 transition-opacity"
              >
                <Icon size={18} strokeWidth={1.8} />
                <span className="text-sm font-medium"><TypewriterText speed={30}>{label}</TypewriterText></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
