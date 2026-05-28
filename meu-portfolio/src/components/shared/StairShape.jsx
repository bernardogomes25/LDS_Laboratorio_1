export function StairShape({ color, size = 48, steps = 4, direction = 'down-right' }) {
  const step = size / steps
  const lines = []
  for (let i = 0; i < steps; i++) {
    if (direction === 'down-right') {
      lines.push(
        <line key={`h${i}`} x1={i * step} y1={i * step} x2={(i + 1) * step} y2={i * step} stroke={color} strokeWidth="2.5" strokeLinecap="square" />,
        <line key={`v${i}`} x1={(i + 1) * step} y1={i * step} x2={(i + 1) * step} y2={(i + 1) * step} stroke={color} strokeWidth="2.5" strokeLinecap="square" />
      )
    } else {
      lines.push(
        <line key={`h${i}`} x1={size - i * step} y1={i * step} x2={size - (i + 1) * step} y2={i * step} stroke={color} strokeWidth="2.5" strokeLinecap="square" />,
        <line key={`v${i}`} x1={size - (i + 1) * step} y1={i * step} x2={size - (i + 1) * step} y2={(i + 1) * step} stroke={color} strokeWidth="2.5" strokeLinecap="square" />
      )
    }
  }
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true" overflow="visible">
      {lines}
    </svg>
  )
}
