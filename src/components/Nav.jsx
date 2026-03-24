import { NavLink } from 'react-router-dom'
import { useTheme, tokens } from '../theme.jsx'

const links = [
  { to:'/',         label:'Overview',  icon:'◈' },
  { to:'/warriors', label:'Warriors',  icon:'⚔' },
  { to:'/trading',  label:'ARJUN',     icon:'📈' },
  { to:'/roadmap',  label:'Roadmap',   icon:'🗺' },
  { to:'/setup',    label:'Setup',     icon:'⚙' },
]

export default function Nav() {
  const { dark, toggle } = useTheme()
  const t = tokens(dark)

  return (
    <nav style={{
      width: 220,
      flexShrink: 0,
      background: t.surface,
      borderRight: `1px solid ${t.border}`,
      padding: '0',
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      position: 'sticky',
      top: 0,
    }}>
      {/* Logo */}
      <div style={{ padding:'24px 20px 20px', borderBottom:`1px solid ${t.border}` }}>
        <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:4 }}>
          <div style={{
            width:34, height:34, borderRadius:10,
            background:`linear-gradient(135deg, #f59e0b, #ec4899)`,
            display:'flex', alignItems:'center', justifyContent:'center',
            fontSize:18, flexShrink:0,
          }}>🔥</div>
          <div>
            <div style={{ fontFamily:t.serif, fontSize:14, fontWeight:700, color:t.text, lineHeight:1.2 }}>BridgeFire</div>
            <div style={{ fontFamily:t.serif, fontSize:14, fontWeight:400, color:t.muted, lineHeight:1.2, fontStyle:'italic' }}>Ventures</div>
          </div>
        </div>
        <div style={{ fontSize:10, color:t.dim, fontFamily:t.mono, marginTop:6, letterSpacing:1.5 }}>TOKYO · 2026</div>
      </div>

      {/* Links */}
      <div style={{ padding:'16px 12px', flex:1 }}>
        <div style={{ fontSize:10, color:t.dim, fontFamily:t.mono, letterSpacing:2, padding:'4px 8px 8px' }}>NAVIGATION</div>
        {links.map(link => (
          <NavLink key={link.to} to={link.to} end={link.to=='/'}
            style={({isActive}) => ({
              display:'flex', alignItems:'center', gap:10,
              padding:'9px 12px', borderRadius:8,
              textDecoration:'none', marginBottom:1,
              background: isActive ? (dark ? '#ffffff12' : '#f59e0b15') : 'transparent',
              color: isActive ? (dark ? '#f59e0b' : '#d97706') : t.muted,
              fontSize:14, fontWeight: isActive ? 600 : 400,
              transition:'all 0.1s',
            })}
          >
            <span style={{fontSize:15, width:20, textAlign:'center'}}>{link.icon}</span>
            {link.label}
          </NavLink>
        ))}
      </div>

      {/* Dark mode toggle + sprint */}
      <div style={{ padding:'16px 20px', borderTop:`1px solid ${t.border}` }}>
        <button onClick={toggle} style={{
          display:'flex', alignItems:'center', gap:8,
          width:'100%', padding:'8px 12px',
          background: t.surface,
          border:`1px solid ${t.border}`,
          borderRadius:8, cursor:'pointer',
          color:t.muted, fontSize:13,
          transition:'all 0.15s',
          marginBottom:12,
          fontFamily:t.sans,
        }}>
          <span style={{fontSize:16}}>{dark ? '☀️' : '🌙'}</span>
          {dark ? 'Light mode' : 'Dark mode'}
        </button>
        <div style={{ fontSize:10, color:t.dim, fontFamily:t.mono, letterSpacing:1.5, marginBottom:2 }}>CURRENT SPRINT</div>
        <div style={{ fontSize:12, color:dark?'#f59e0b':'#d97706', fontFamily:t.mono, fontWeight:500 }}>Week 1 — Observe</div>
        <div style={{ fontSize:11, color:t.dim, marginTop:2 }}>ARJUN watching USD/INR</div>
      </div>
    </nav>
  )
}
