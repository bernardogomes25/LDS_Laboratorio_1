export function DotGrid({ cols = 8, rows = 4, gap = 18, r = 2.5, color }) {
  const w = (cols - 1) * gap + r * 2
  const h = (rows - 1) * gap + r * 2
  const dots = []
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      dots.push(
        <circle
          key={`${row}-${col}`}
          cx={col * gap + r}
          cy={row * gap + r}
          r={r}
          fill={color}
        />
      )
    }
  }
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} aria-hidden="true">
      {dots}
    </svg>
  )
}
