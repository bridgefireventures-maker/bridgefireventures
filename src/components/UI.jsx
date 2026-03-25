// UI Components v4 — CSS variables only, standardised, zero mixed fonts

export function Card({ children, style = {}, onClick, hover = false }) {
  return (
    <div
      onClick={onClick}
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--r-lg)',
        padding: '20px 24px',
        boxShadow: 'var(--shadow-sm)',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'border-color 0.15s, box-shadow 0.15s',
        ...style,
      }}
      onMouseEnter={hover ? e => {
        e.currentTarget.style.borderColor = 'var(--border-md)'
        e.currentTarget.style.boxShadow = 'var(--shadow-md)'
      } : undefined}
      onMouseLeave={hover ? e => {
        e.currentTarget.style.borderColor = 'var(--border)'
        e.currentTarget.style.boxShadow = 'var(--shadow-sm)'
      } : undefined}
    >
      {children}
    </div>
  )
}

export function Label({ children, color, style = {} }) {
  return (
    <div style={{
      fontSize: 'var(--text-xs)',
      fontWeight: 500,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      fontFamily: 'var(--font-mono)',
      color: color || 'var(--text-4)',
      marginBottom: 8,
      ...style,
    }}>{children}</div>
  )
}

export function Pill({ label, color = 'var(--text-4)', bg = 'var(--bg-subtle)', border = 'var(--border)' }) {
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      fontSize: 'var(--text-xs)',
      fontWeight: 500,
      fontFamily: 'var(--font-mono)',
      padding: '3px 10px',
      background: bg,
      color,
      border: `1px solid ${border}`,
      borderRadius: 99,
      whiteSpace: 'nowrap',
    }}>{label}</span>
  )
}

const STATUS_MAP = {
  ACTIVE:   { dot: 'var(--c-echo)',   text: '#10b981', bg: '#d1fae508', border: '#10b98120' },
  LEARNING: { dot: '#f59e0b',          text: '#f59e0b', bg: '#fef3c708', border: '#f59e0b20' },
  READY:    { dot: 'var(--c-atlas)',  text: '#3b82f6', bg: '#dbeafe08', border: '#3b82f620' },
  BUILDING: { dot: '#f59e0b',          text: '#f59e0b', bg: '#fef3c708', border: '#f59e0b20' },
  NEW:      { dot: 'var(--c-cipher)',text: '#8b5cf6', bg: '#ede9fe08', border: '#8b5cf620' },
  'ON HOLD':{ dot: '#6b7280',          text: '#6b7280', bg: '#11111108', border: '#6b728020' },
  NEUTRAL:  { dot: '#6b7280',          text: '#6b7280', bg: '#11111108', border: '#6b728020' },
}

export function StatusDot({ status }) {
  const s = STATUS_MAP[status] || STATUS_MAP['NEUTRAL']
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      fontSize: 'var(--text-xs)', fontWeight: 600,
      fontFamily: 'var(--font-mono)',
      padding: '3px 10px',
      background: s.bg, color: s.text,
      border: `1px solid ${s.border}`,
      borderRadius: 99,
    }}>
      <span style={{ width: 6, height: 6, borderRadius: '50%', background: s.dot, display: 'inline-block' }}/>
      {status}
    </span>
  )
}

export function ProgressBar({ pct, color = 'var(--c-gold)', height = 3 }) {
  return (
    <div style={{ background: 'var(--border)', borderRadius: 99, height, overflow: 'hidden' }}>
      <div style={{
        width: `${Math.min(100, pct)}%`, height: '100%',
        background: color, borderRadius: 99,
        transition: 'width 0.8s ease',
      }}/>
    </div>
  )
}

export function Metric({ label, value, sub, color, style = {} }) {
  return (
    <div style={{
      background: 'var(--bg-subtle)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--r-md)',
      padding: '16px 18px',
      ...style,
    }}>
      <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-4)', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}>{label}</div>
      <div style={{ fontSize: 'var(--text-xl)', fontWeight: 600, color: color || 'var(--text)', lineHeight: 1.2 }}>{value}</div>
      {sub && <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-3)', marginTop: 4 }}>{sub}</div>}
    </div>
  )
}

export function Divider({ style = {} }) {
  return <div style={{ height: 1, background: 'var(--border)', ...style }}/>
}

export function PageWrap({ children, maxWidth = 1080 }) {
  return (
    <div style={{ maxWidth, margin: '0 auto', padding: '48px 32px' }}>
      {children}
    </div>
  )
}

export function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <div style={{ marginBottom: 40 }}>
      {eyebrow && (
        <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-4)', fontFamily: 'var(--font-mono)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12 }}>
          {eyebrow}
        </div>
      )}
      <h1 style={{ fontSize: 'var(--text-2xl)', fontWeight: 600, color: 'var(--text)', lineHeight: 'var(--lh-tight)', marginBottom: subtitle ? 14 : 0 }}>
        {title}
      </h1>
      {subtitle && (
        <p style={{ fontSize: 'var(--text-md)', color: 'var(--text-3)', lineHeight: 'var(--lh-loose)', maxWidth: 560 }}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
