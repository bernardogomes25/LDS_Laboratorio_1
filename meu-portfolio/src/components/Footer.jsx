import { Github } from 'lucide-react'
import { TypewriterText } from './shared/TypewriterText'
import { TRANSLATIONS } from '../i18n/translations'
import { COLORS } from '../constants/colors'

const WHITE = COLORS.TEXT_PRIMARY

export function Footer({ lang }) {
  return (
    <footer className="flex items-center px-10 py-6" style={{ backgroundColor: WHITE }}>
      <a
        href="https://github.com/bernardogomes25"
        aria-label="GitHub"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black hover:opacity-60 transition-opacity"
      >
        <Github size={26} strokeWidth={1.8} />
      </a>
      <p className="flex-1 text-center text-black text-sm font-medium"><TypewriterText speed={18}>{TRANSLATIONS[lang].footer}</TypewriterText></p>
      <div className="w-7" aria-hidden="true" />
    </footer>
  )
}
