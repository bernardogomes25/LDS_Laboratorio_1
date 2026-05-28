import { useTypewriter } from '../../hooks/useTypewriter'

export function TypewriterText({ children, speed = 30 }) {
  const text = typeof children === 'string' ? children : ''
  const displayed = useTypewriter(text, speed)
  return <>{displayed}</>
}
