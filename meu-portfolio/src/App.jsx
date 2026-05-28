import { useState, Suspense, lazy } from 'react'
import { ScrollParallax } from './components/shared/ScrollParallax'
import { Navbar } from './components/Navbar'
import { AboutSection } from './components/AboutSection'
import { Footer } from './components/Footer'

const ProjectsSection = lazy(() => import('./components/ProjectsSection/ProjectsSection'))
const ExperienceSection = lazy(() => import('./components/ExperienceSection/ExperienceSection'))
const ContactSection = lazy(() => import('./components/ContactSection/ContactSection'))

function SectionFallback() {
  return <div className="min-h-96" />
}

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
            <Suspense fallback={<SectionFallback />}>
              <ProjectsSection lang={lang} />
            </Suspense>
          </div>
          <div style={{ borderTop: '1px solid rgba(232,232,232,0.08)' }}>
            <Suspense fallback={<SectionFallback />}>
              <ExperienceSection lang={lang} />
            </Suspense>
          </div>
          <div style={{ borderTop: '1px solid rgba(232,232,232,0.08)' }}>
            <Suspense fallback={<SectionFallback />}>
              <ContactSection lang={lang} />
            </Suspense>
          </div>
        </main>
        <Footer lang={lang} />
      </div>
    </>
  )
}
