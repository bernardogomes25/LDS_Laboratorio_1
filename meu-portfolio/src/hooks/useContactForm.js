import { useState } from 'react'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xdalvlya'
const EMPTY_FORM = { name: '', email: '', subject: '', message: '' }

export function useContactForm(errorMessages) {
  const [form, setForm] = useState(EMPTY_FORM)
  const [errors, setErrors] = useState({})
  const [isSending, setIsSending] = useState(false)
  const [successMsg, setSuccessMsg] = useState('')

  const validate = () => {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = errorMessages.nameRequired
    if (!form.email.trim()) newErrors.email = errorMessages.emailRequired
    else if (!EMAIL_REGEX.test(form.email)) newErrors.email = errorMessages.emailInvalid
    if (!form.subject.trim()) newErrors.subject = errorMessages.subjectRequired
    if (!form.message.trim()) newErrors.message = errorMessages.messageRequired
    return newErrors
  }

  const handleChange = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newErrors = validate()
    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) return

    setIsSending(true)
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setSuccessMsg('✓')
        setForm(EMPTY_FORM)
        setTimeout(() => setSuccessMsg(''), 3000)
      }
    } catch {
      setErrors({ submit: 'Erro ao enviar. Tente novamente.' })
    } finally {
      setIsSending(false)
    }
  }

  return { form, errors, isSending, successMsg, handleChange, handleSubmit }
}
