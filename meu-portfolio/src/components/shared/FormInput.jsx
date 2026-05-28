export function FormInput({ label, type = 'text', value, onChange, placeholder, error, required }) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="text-sm font-medium" style={{ color: '#E8E8E8' }}>
          {label}
          {required && <span className="text-red-400 ml-1">*</span>}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 border transition-colors
          ${error ? 'border-red-500/50 focus:ring-red-500/50' : 'focus:ring-emerald-500/50'}`}
        style={{
          backgroundColor: 'rgba(232,232,232,0.08)',
          borderColor: error ? undefined : 'rgba(232,232,232,0.1)',
          color: '#E8E8E8',
        }}
        aria-invalid={!!error}
      />
      {error && (
        <span className="text-xs text-red-400" role="alert">{error}</span>
      )}
    </div>
  )
}
