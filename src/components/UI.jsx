import { useTheme, tokens } from '../theme.jsx'

export function useT() {
  const { dark } = useTheme()
  return tokens(dark)
}

export function Card({ children, style={}, onClick }) {
  const t = useT()
  return (
    <div onClick={onClick} style={{
      background: t.card,
      border: `1px solid ${t.border}`,
      borderRadius: 14,
      padding: '20px 24px',
      boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
      transition: 'all 0.15s',
      cursor: onClick ? 'pointer' : 'default',
      ...style,
    }}>{children}</div>
  )
}

export function Label({ children, color, style={} }) {
  const t = useT()
  return (
    <div style={{
      fontSize: 11,
      letterSpacing: 2,
      textTransform: 'uppercase',
      fontFamily: t.mono,
      color: color || t.dim,
      marginBottom: 8,
      fontWeight: 500,
      ...style,
    }}>{children}</div>
  )
}

export function Tag({ text, ceoKey }) {
  const t = useT()
  const c = t[ceoKey] || { main: t.muted, tagBg: t.surface, tag: t.dim }
  return (
    <span style={{
      display: 'inline-block',
      fontSize: 11,
      fontWeight: 600,
      padding: '3px 12px',
      background: c.tagBg,
      color: c.tag,
      border: `1px solid ${c.border}`,
      borderRadius: 20,
      fontFamily: t.mono,
      letterSpacing: 0.5,
    }}>{text}</span>
  )
}

export function StatusPill({ status }) {
  const t = useT()
  const map = {
    'ACTIVE':        { bg:'#d1fae5', color:'#064e3b', dot:'#059669' },
    'READY':         { bg:'#dbeafe', color:'#1e3a8a', dot:'#2563eb' },
    'BUILDING':      { bg:'#fef3c7', color:'#78350f', dot:'#d97706' },
    'NEW':           { bg:'#ede9fe', color:'#3730a3', dot:'#7c3aed' },
    'LEARNING':      { bg:'#fef3c7', color:'#78350f', dot:'#d97706' },
  }
  const s = map[status] || map['BUILDING']
  return (
    <span style={{
      display:'inline-flex', alignItems:'center', gap:5,
      fontSize:11, fontWeight:600,
      padding:'3px 10px',
      background: s.bg,
      color: s.color,
      borderRadius: 20,
      fontFamily: t.mono,
    }}>
      <span style={{ width:6, height:6, borderRadius:'50%', background:s.dot, display:'inline-block' }}/>
      {status}
    </span>
  )
}

export function ProgressBar({ pct, color, height=4 }) {
  const t = useT()
  return (
    <div style={{ background: t.border, borderRadius: 99, height, overflow:'hidden' }}>
      <div style={{
        width:`${Math.min(100,pct)}%`, height:'100%',
        background: color,
        borderRadius: 99,
        transition: 'width 0.8s ease',
      }}/>
    </div>
  )
}

export function Metric({ label, value, sub, color, style={} }) {
  const t = useT()
  return (
    <div style={{
      background: t.surface,
      border: `1px solid ${t.border}`,
      borderRadius: 12,
      padding: '16px 20px',
      ...style,
    }}>
      <div style={{ fontSize:12, color:t.muted, fontFamily:t.mono, letterSpacing:1.5, textTransform:'uppercase', marginBottom:6 }}>{label}</div>
      <div style={{ fontSize:26, fontFamily:t.serif, color: color || t.text, fontWeight:600, lineHeight:1.2 }}>{value}</div>
      {sub && <div style={{ fontSize:13, color:t.muted, marginTop:4 }}>{sub}</div>}
    </div>
  )
}

export function SectionHeading({ label, title, sub }) {
  const t = useT()
  return (
    <div style={{ marginBottom:32 }}>
      {label && <div style={{ fontSize:11, color:t.dim, fontFamily:t.mono, letterSpacing:3, textTransform:'uppercase', marginBottom:10 }}>{label}</div>}
      <h1 style={{ fontFamily:t.serif, fontSize:36, fontWeight:600, color:t.text, lineHeight:1.2, marginBottom: sub?12:0 }}>{title}</h1>
      {sub && <p style={{ fontSize:16, color:t.muted, lineHeight:1.8, maxWidth:540 }}>{sub}</p>}
    </div>
  )
}

export function Divider() {
  const t = useT()
  return <div style={{ height:1, background:t.border, margin:'28px 0' }}/>
}
