export function Squiggle({ color, width = 48 }) {
  return (
    <svg width={width} height="20" viewBox={`0 0 ${width} 20`} aria-hidden="true">
      <path
        d={`M0 10 Q${width * 0.25} 0 ${width * 0.5} 10 Q${width * 0.75} 20 ${width} 10`}
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  )
}
