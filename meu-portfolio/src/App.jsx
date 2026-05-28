import { useState } from 'react'
import { ScrollParallax } from './components/shared/ScrollParallax'
import { Navbar } from './components/Navbar'
import { AboutSection } from './components/AboutSection'
import { ProjectsSection } from './components/ProjectsSection/ProjectsSection'
import { ExperienceSection } from './components/ExperienceSection/ExperienceSection'
import { ContactSection } from './components/ContactSection/ContactSection'
import { Footer } from './components/Footer'

export default function App() {
  const [lang, setLang] = useState('en')
  const toggleLang = () => setLang((l) => (l === 'en' ? 'pt' : 'en'))

  return (
    <>
      <ScrollParallax />
      <div className="min-h-screen text-white" style={{ position: 'relative', zIndex: 1, backgroundColor: 'transparent' }}>
        <Navbar lang={lang} onToggleLang={toggleLang} />
        <main>
          <AboutSection lang={lang} />
          <div style={{ borderTop: '1px solid rgba(232,232,232,0.08)' }}>
            <ProjectsSection lang={lang} />
          </div>
          <div style={{ borderTop: '1px solid rgba(232,232,232,0.08)' }}>
            <ExperienceSection lang={lang} />
          </div>
          <div style={{ borderTop: '1px solid rgba(232,232,232,0.08)' }}>
            <ContactSection lang={lang} />
          </div>
        </main>
        <Footer lang={lang} />
      </div>
    </>
  )
}
