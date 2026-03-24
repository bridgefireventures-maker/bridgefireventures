import { T } from '../tokens.js'

export function GlowCard({ children, color, style={}, onClick }) {
  const c = T[color] || { main: T.muted, glow: '#ffffff10', border: T.border }
  return (
    <div onClick={onClick} style={{
      background: T.card,
      border: `1px solid ${c.border}`,
      borderRadius: 12,
      padding: '16px 18px',
      boxShadow: `0 0 20px ${c.glow}`,
      transition: 'all 0.2s',
      cursor: onClick ? 'pointer' : 'default',
      ...style,
    }}>{children}</div>
  )
}

export function Label({ children, color, style={} }) {
  return (
    <div style={{
      fontSize: 10, letterSpacing: 3,
      textTransform: 'uppercase',
      fontFamily: T.mono, marginBottom: 8,
      color: color || T.dim,
      ...style,
    }}>{children}</div>
  )
}

export function GoldTitle({ children, size=28, style={} }) {
  return (
    <h2 style={{
      fontFamily: T.serif,
      fontSize: size,
      fontWeight: 600,
      background: `linear-gradient(135deg, ${T.gold}, #f8d870, ${T.gold})`,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      letterSpacing: 1,
      lineHeight: 1.2,
      ...style,
    }}>{children}</h2>
  )
}

export function StatusBadge({ status, color }) {
  const colors = {
    ACTIVE:   { bg:'#e8a02018', text:'#e8a020', border:'#8a5a08' },
    READY:    { bg:'#6b8cff18', text:'#6b8cff', border:'#2a3888' },
    BUILDING: { bg:'#f0d02018', text:'#f0d020', border:'#8a7808' },
    NEW:      { bg:'#2ecfb018', text:'#2ecfb0', border:'#0e6050' },
    DONE:     { bg:'#2ecfb018', text:'#2ecfb0', border:'#0e6050' },
    NOW:      { bg:'#e8a02018', text:'#e8a020', border:'#8a5a08' },
    'THIS WEEK':{ bg:'#6b8cff18', text:'#6b8cff', border:'#2a3888' },
    MAY:      { bg:'#9b7fff18', text:'#9b7fff', border:'#4a2888' },
    NEXT:     { bg:'#6b8cff18', text:'#6b8cff', border:'#2a3888' },
    FUTURE:   { bg:'#4a406018', text:'#6b5888', border:'#2a2040' },
    Q3:       { bg:'#9b7fff18', text:'#9b7fff', border:'#4a2888' },
    Q4:       { bg:'#f0d02018', text:'#f0d020', border:'#8a7808' },
    DEC:      { bg:'#2ecfb018', text:'#2ecfb0', border:'#0e6050' },
  }
  const s = colors[status] || colors.FUTURE
  return (
    <span style={{
      fontSize: 9, padding: '2px 10px',
      background: s.bg, color: s.text,
      border: `1px solid ${s.border}`,
      borderRadius: 20, fontFamily: T.mono,
      letterSpacing: 1, whiteSpace: 'nowrap',
    }}>{status}</span>
  )
}

export function ProgressBar({ pct, color, height=3 }) {
  return (
    <div style={{ background: T.border, borderRadius: 4, height, overflow:'hidden' }}>
      <div style={{
        width: `${Math.min(100,pct)}%`, height:'100%',
        background: `linear-gradient(90deg, ${color}88, ${color})`,
        borderRadius: 4, transition:'width 0.8s ease',
        boxShadow: `0 0 8px ${color}60`,
      }}/>
    </div>
  )
}

export function Metric({ label, value, sub, color }) {
  return (
    <div style={{
      background: T.surface, borderRadius: 10,
      padding: '14px 16px',
      border: `1px solid ${T.border}`,
    }}>
      <div style={{ fontSize:10, color:T.dim, fontFamily:T.mono, letterSpacing:2, marginBottom:4 }}>{label}</div>
      <div style={{ fontSize:22, fontFamily:T.serif, color: color||T.gold, fontWeight:600 }}>{value}</div>
      {sub && <div style={{ fontSize:11, color:T.muted, marginTop:3 }}>{sub}</div>}
    </div>
  )
}

export function Divider() {
  return (
    <div style={{
      height: 1,
      background: `linear-gradient(90deg, transparent, ${T.border}, transparent)`,
      margin: '24px 0',
    }}/>
  )
}
