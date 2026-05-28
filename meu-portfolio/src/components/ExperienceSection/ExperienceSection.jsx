import { TypewriterText } from '../shared/TypewriterText'
import { TRANSLATIONS } from '../../i18n/translations'

const WHITE = '#E8E8E8'
const BLACK = '#2A2A2A'

export default function ExperienceSection({ lang }) {
  const t = TRANSLATIONS[lang].experience
  const experiences = TRANSLATIONS[lang].experienceData

  return (
    <section id="experience" className="py-20 px-6 max-w-5xl mx-auto">
      <div className="flex items-center gap-5 mb-14">
        <h2 className="font-extrabold text-4xl sm:text-5xl" style={{ color: WHITE }}><TypewriterText speed={35}>{t.title}</TypewriterText></h2>
        <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(232,232,232,0.15)' }} />
      </div>

      <div className="relative pl-16 sm:pl-24">
        <div
          className="absolute left-6 sm:left-10 top-0 bottom-0 w-0.5"
          style={{ backgroundColor: WHITE, opacity: 0.5 }}
        />
        <div
          className="absolute top-0 h-1 w-4 rounded-sm"
          style={{ backgroundColor: WHITE, left: 'calc(1.5rem - 8px)' }}
        />
        <div
          className="absolute bottom-0 h-1 w-4 rounded-sm"
          style={{ backgroundColor: WHITE, left: 'calc(1.5rem - 8px)' }}
        />

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <div key={i} className="relative flex items-start">
              <div
                className="absolute w-4 h-4 rounded-full z-10"
                style={{
                  backgroundColor: WHITE,
                  border: `3px solid ${BLACK}`,
                  left: 'calc(-2.5rem)',
                  top: '1.4rem',
                }}
              />

              <div
                className="flex-1 rounded-2xl p-5 sm:p-6 border"
                style={{ backgroundColor: WHITE, borderColor: WHITE }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3 flex-wrap">
                  <h3 className="text-black font-extrabold text-lg sm:text-xl">{exp.company}</h3>
                  <span className="text-black/70 text-xs sm:text-sm"><TypewriterText speed={28}>{exp.period}</TypewriterText></span>
                  <span
                    className="text-xs font-bold px-3 py-0.5 rounded-full self-start"
                    style={{ backgroundColor: BLACK, color: WHITE }}
                  >
                    <TypewriterText speed={22}>{exp.title}</TypewriterText>
                  </span>
                </div>
                <p className="text-black/80 text-sm leading-relaxed"><TypewriterText speed={4}>{exp.description}</TypewriterText></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
