import { useEffect, useRef } from 'react'
import { PARALLAX_ITEMS } from '../../data/parallax'

export function ScrollParallax() {
  const containerRef = useRef(null)
  const rafRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current) return
      rafRef.current = requestAnimationFrame(() => {
        const sy = window.scrollY
        const items = containerRef.current?.querySelectorAll('[data-speed]')
        items?.forEach((el) => {
          el.style.transform = `translateY(${sy * parseFloat(el.dataset.speed)}px)`
        })
        rafRef.current = null
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        backgroundColor: '#1F1F1F',
        overflow: 'hidden',
        pointerEvents: 'none',
        userSelect: 'none',
      }}
    >
      {PARALLAX_ITEMS.map((item, i) => (
        <span
          key={i}
          data-speed={item.speed}
          style={{
            position: 'absolute',
            left: item.left,
            top: item.top,
            fontSize: item.size,
            fontFamily: 'JetBrains Mono, ui-monospace, monospace',
            color: `rgba(232,232,232,${item.opacity})`,
            whiteSpace: 'nowrap',
            willChange: 'transform',
            letterSpacing: '0.05em',
            filter: item.blur ? `blur(${item.blur}px)` : undefined,
            textShadow: item.glow ? '0 0 14px rgba(232,232,232,0.30)' : undefined,
          }}
        >
          {item.text}
        </span>
      ))}
    </div>
  )
}
