import { useState, useEffect, useRef } from 'react'

export function useTypewriter(text, speed = 30) {
  const [displayed, setDisplayed] = useState(text)
  const prevRef = useRef(text)
  const timerRef = useRef(null)

  useEffect(() => {
    if (text === prevRef.current) return
    prevRef.current = text
    if (timerRef.current) clearInterval(timerRef.current)
    setDisplayed('')
    let i = 0
    timerRef.current = setInterval(() => {
      i++
      setDisplayed(text.slice(0, i))
      if (i >= text.length) {
        clearInterval(timerRef.current)
        timerRef.current = null
      }
    }, speed)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [text, speed])

  return displayed
}
