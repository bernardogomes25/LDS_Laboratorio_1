import profileImg from '../assets/img/pfp.JPEG'
import { TypewriterText } from './shared/TypewriterText'
import { DotGrid } from './shared/DotGrid'
import { Squiggle } from './shared/Squiggle'
import { StairShape } from './shared/StairShape'
import { TRANSLATIONS } from '../i18n/translations'
import { COLORS } from '../constants/colors'

const WHITE = COLORS.TEXT_PRIMARY
const BLACK = '#2A2A2A'

export function AboutSection({ lang }) {
  const t = TRANSLATIONS[lang].about
  const heroLines = t.heroTitle.split('\n')

  return (
    <>
      <section
        id="about"
        className="flex flex-col md:flex-row min-h-screen pt-[64px]"
        style={{ overflow: 'hidden' }}
      >
        {/* Painel esquerdo – azul */}
        <div
          className="relative flex flex-col justify-between px-8 sm:px-14 py-14 md:w-[58%]"
          style={{ backgroundColor: 'rgba(27,27,27,0.65)', backdropFilter: 'blur(2px)', WebkitBackdropFilter: 'blur(2px)' }}
        >
          <div className="absolute bottom-20 right-8 opacity-30 hidden md:block">
            <StairShape color={WHITE} size={64} steps={4} direction="down-right" />
          </div>

          <div className="flex-1 flex flex-col justify-center">
            <h1
              className="font-extrabold leading-none mb-6"
              style={{ color: WHITE, fontSize: 'clamp(3rem, 7vw, 6rem)' }}
            >
              {heroLines.map((line, i) => (
                <span key={i} className="block"><TypewriterText speed={45}>{line}</TypewriterText></span>
              ))}
            </h1>
            <p className="text-white text-base sm:text-lg max-w-md leading-relaxed">
              <TypewriterText speed={14}>{t.heroSub}</TypewriterText>
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-12">
            <p className="text-white/70 text-xs sm:text-sm leading-relaxed"><TypewriterText speed={10}>{t.stat1}</TypewriterText></p>
            <p className="text-white/70 text-xs sm:text-sm leading-relaxed"><TypewriterText speed={10}>{t.stat2}</TypewriterText></p>
          </div>
        </div>

        {/* Painel direito – verde */}
        <div
          className="relative flex items-center justify-center overflow-hidden md:w-[42%] min-h-[50vh] md:min-h-0"
          style={{ backgroundColor: WHITE }}
        >
          <div className="absolute top-8 left-8 opacity-60">
            <DotGrid cols={8} rows={5} gap={16} r={2.5} color={BLACK} />
          </div>

          <div className="absolute left-6 top-1/2 opacity-60">
            <Squiggle color={BLACK} width={44} />
          </div>

          <div className="absolute bottom-16 left-10 opacity-30">
            <StairShape color={BLACK} size={56} steps={4} direction="down-right" />
          </div>

          <div className="absolute right-6 top-1/2 flex flex-col gap-3 items-center opacity-50">
            <div className="w-4 h-4 border-2" style={{ borderColor: BLACK }} />
            {[0,1,2,3].map(i => (
              <div key={i} className="w-2 h-2 rotate-45" style={{ backgroundColor: BLACK }} />
            ))}
          </div>

          <div className="relative z-10 m-12">
            <div
              className="absolute inset-0 border-2"
              style={{ transform: 'translate(12px, 12px)', borderColor: BLACK }}
            />
            <img
              src={profileImg}
              alt="Bernardo Gomes"
              className="relative block w-52 sm:w-64 md:w-60 lg:w-72 object-cover"
              style={{ aspectRatio: '3/4' }}
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="font-extrabold text-4xl sm:text-5xl mb-14" style={{ color: WHITE }}><TypewriterText speed={35}>{t.title}</TypewriterText></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <p className="text-white leading-relaxed text-sm sm:text-base"><TypewriterText speed={4}>{t.bio1}</TypewriterText></p>
          <p className="text-white leading-relaxed text-sm sm:text-base"><TypewriterText speed={4}>{t.bio2}</TypewriterText></p>
        </div>

        <div className="border-t pt-14" style={{ borderColor: 'rgba(232,232,232,0.12)' }}>
          <h3
            className="font-extrabold text-3xl sm:text-4xl mb-8"
            style={{ color: WHITE }}
          >
            <TypewriterText speed={35}>{t.hobbiesTitle}</TypewriterText>
          </h3>
          <p className="text-white/80 max-w-3xl leading-relaxed text-sm sm:text-base">
            <TypewriterText speed={4}>{t.hobbiesText}</TypewriterText>
          </p>
        </div>
      </section>
    </>
  )
}
