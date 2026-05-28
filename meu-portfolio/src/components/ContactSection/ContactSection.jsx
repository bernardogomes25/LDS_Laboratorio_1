import { Mail, Instagram, Linkedin, Github, Loader2 } from 'lucide-react'
import { TypewriterText } from '../shared/TypewriterText'
import { useContactForm } from '../../hooks/useContactForm'
import { TRANSLATIONS } from '../../i18n/translations'

const WHITE = '#E8E8E8'

function Field({ id, label, error, children }) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-white/70 text-xs font-semibold uppercase tracking-wider">
        <TypewriterText speed={35}>{label}</TypewriterText>
      </label>
      <div>
        {children}
        {error && <p className="text-red-400 text-xs mt-1 font-semibold">{error}</p>}
      </div>
    </div>
  )
}

export function ContactSection({ lang }) {
  const t = TRANSLATIONS[lang].contact
  const { form, errors, isSending, successMsg, handleChange, handleSubmit } = useContactForm(t.errors)

  const inputCls = 'w-full rounded-xl px-4 py-2.5 text-white text-sm outline-none focus:ring-2 border transition-colors'
  const inputStyle = { backgroundColor: 'rgba(255,255,255,0.06)', borderColor: 'rgba(232,232,232,0.2)' }

  return (
    <section id="contacts" className="py-20 px-6 max-w-5xl mx-auto">
      <div className="flex items-center gap-5 mb-14">
        <h2 className="font-extrabold text-4xl sm:text-5xl" style={{ color: WHITE }}><TypewriterText speed={35}>{t.title}</TypewriterText></h2>
        <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(232,232,232,0.15)' }} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Coluna esquerda: descrição e redes sociais */}
        <div className="flex flex-col gap-8">
          <p className="text-white/80 leading-relaxed text-base"><TypewriterText speed={8}>{t.description}</TypewriterText></p>

          <div className="flex flex-col gap-4">
            {[
              { Icon: Mail,      text: 'be.gpereira25@gmail.com',    href: 'mailto:be.gpereira25@gmail.com' },
              { Icon: Instagram, text: '__bernardogomes',             href: 'https://instagram.com/__bernardogomes' },
              { Icon: Linkedin,  text: 'Bernardo Gomes',              href: 'https://www.linkedin.com/in/bernardogomespereira/' },
              { Icon: Github,    text: 'bernardogomes25',             href: 'https://github.com/bernardogomes25' },
            ].map(({ Icon, text, href }) => (
              <a
                key={text}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:opacity-70 transition-opacity group"
                style={{ color: WHITE }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'rgba(232,232,232,0.08)' }}
                >
                  <Icon size={18} strokeWidth={1.8} />
                </div>
                <span className="text-sm text-white group-hover:opacity-70 transition-opacity">{text}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Coluna direita: formulário */}
        <div
          className="rounded-2xl p-6 sm:p-8 border"
          style={{ backgroundColor: 'rgba(42,42,42,0.9)', borderColor: 'rgba(232,232,232,0.1)' }}
        >
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field id="name" label={t.name} error={errors.name}>
                <input
                  id="name" type="text" name="name"
                  value={form.name} onChange={(e) => handleChange('name')(e)}
                  className={inputCls} style={inputStyle}
                />
              </Field>
              <Field id="email" label={t.email} error={errors.email}>
                <input
                  id="email" type="email" name="email"
                  value={form.email} onChange={(e) => handleChange('email')(e)}
                  className={inputCls} style={inputStyle}
                />
              </Field>
            </div>

            <Field id="subject" label={t.subject} error={errors.subject}>
              <input
                id="subject" type="text" name="subject"
                value={form.subject} onChange={(e) => handleChange('subject')(e)}
                className={inputCls} style={inputStyle}
              />
            </Field>

            <Field id="message" label={t.message} error={errors.message}>
              <textarea
                id="message" name="message"
                value={form.message} onChange={(e) => handleChange('message')(e)}
                rows={5}
                className={`${inputCls} rounded-xl resize-none`}
                style={inputStyle}
              />
            </Field>

            {errors.submit && (
              <p className="text-red-400 text-sm font-semibold text-center">{errors.submit}</p>
            )}
            {successMsg && (
              <p className="font-semibold text-sm text-center" style={{ color: WHITE }}>{successMsg}</p>
            )}

            <div className="flex justify-end pt-1">
              <button
                type="submit"
                disabled={isSending}
                className="flex items-center gap-2 font-bold px-10 py-3 rounded-full hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed text-black"
                style={{ backgroundColor: WHITE }}
              >
                {isSending && <Loader2 size={16} className="animate-spin" />}
                {isSending ? t.sending : t.send}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
