export function Badge({ label, variant = 'default' }) {
  const variants = {
    default: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    secondary: 'bg-slate-500/20 text-slate-300 border-slate-500/30',
  }

  return (
    <span
      className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${variants[variant]}`}
    >
      {label}
    </span>
  )
}
