import { Github } from 'lucide-react'
import { TypewriterText } from '../shared/TypewriterText'
import { STATIC_REPOS } from '../../data/projects'
import { TRANSLATIONS } from '../../i18n/translations'

const WHITE = '#E8E8E8'
const BLACK = '#2A2A2A'

export default function ProjectsSection({ lang }) {
  const t = TRANSLATIONS[lang].projects

  const grouped = STATIC_REPOS.reduce((acc, p) => {
    if (!acc.length || acc[acc.length - 1].year !== p.year) {
      acc.push({ year: p.year, items: [p] })
    } else {
      acc[acc.length - 1].items.push(p)
    }
    return acc
  }, [])

  return (
    <section id="projects" className="py-20 px-6 max-w-5xl mx-auto">
      <div className="flex items-center gap-5 mb-14">
        <h2 className="font-extrabold text-4xl sm:text-5xl" style={{ color: WHITE }}><TypewriterText speed={35}>{t.title}</TypewriterText></h2>
        <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(232,232,232,0.15)' }} />
      </div>

      <div className="relative pl-16 sm:pl-24">
          <div
            className="absolute left-6 sm:left-10 top-0 bottom-0 w-0.5"
            style={{ backgroundColor: WHITE, opacity: 0.5 }}
          />

          {grouped.map((group) => (
            <div key={group.year}>
              <div className="relative mb-6 flex items-center">
                <div
                  className="absolute w-4 h-4 rotate-45 z-10"
                  style={{ backgroundColor: WHITE, left: 'calc(-2.5rem - 2px)' }}
                />
                <span
                  className="text-xs font-bold px-3 py-0.5 rounded-full"
                  style={{ backgroundColor: WHITE, color: '#000' }}
                >
                  {group.year}
                </span>
              </div>

              <div className="space-y-5 mb-10">
                {group.items.map((project, i) => (
                  <div key={i} className="relative flex items-start gap-4">
                    <div
                      className="absolute w-3 h-3 rounded-full mt-5 z-10"
                      style={{
                        backgroundColor: WHITE,
                        border: `2px solid ${BLACK}`,
                        left: 'calc(-2.5rem + 1px)',
                      }}
                    />

                    <div
                      className="flex-1 flex flex-col sm:flex-row gap-4 rounded-2xl p-5 border transition-all hover:border-opacity-60"
                      style={{ backgroundColor: 'rgba(42,42,42,0.9)', borderColor: 'rgba(232,232,232,0.1)' }}
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <h3 className="text-white text-lg font-bold">{project.title}</h3>
                          <span
                            className="text-xs font-semibold px-2 py-0.5 rounded-full border"
                            style={{ borderColor: WHITE, color: WHITE }}
                          >
                            {project.category}
                          </span>
                          <a
                            href={project.github}
                            aria-label="GitHub repository"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-auto hover:opacity-60 transition-opacity"
                            style={{ color: WHITE }}
                          >
                            <Github size={20} strokeWidth={1.8} />
                          </a>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-3">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-black text-xs font-semibold px-3 py-0.5 rounded-full"
                              style={{ backgroundColor: WHITE }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <p className="text-white/70 text-sm leading-relaxed">{project.description}</p>
                      </div>

                      {/* GIF do projeto */}
                      <div
                        className="flex-shrink-0 w-full sm:w-36 h-28 rounded-xl overflow-hidden border"
                        style={{ borderColor: 'rgba(232,232,232,0.08)', backgroundColor: 'rgba(50,50,50,0.9)' }}
                      >
                        <img
                          src={project.gif}
                          alt={`Preview de ${project.title}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </section>
  )
}
