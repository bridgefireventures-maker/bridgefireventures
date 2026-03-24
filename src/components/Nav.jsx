import { NavLink } from 'react-router-dom'
import { T } from '../tokens.js'

const links = [
  { to:'/',         label:'Overview',  icon:'◈' },
  { to:'/warriors', label:'Warriors',  icon:'⚔' },
  { to:'/trading',  label:'ARJUN',     icon:'📈' },
  { to:'/roadmap',  label:'Roadmap',   icon:'🗺' },
  { to:'/setup',    label:'Setup',     icon:'⚙' },
]

export default function Nav() {
  return (
    <nav style={{
      width: 200, flexShrink: 0,
      background: T.surface,
      borderRight: `1px solid ${T.border}`,
      padding: '20px 0',
      display: 'flex', flexDirection: 'column',
      height: '100vh', position: 'sticky', top: 0,
      backgroundImage: `linear-gradient(180deg, ${T.surface} 0%, ${T.bg} 100%)`,
    }}>
      {/* Logo */}
      <div style={{ padding:'0 20px 20px', borderBottom:`1px solid ${T.border}` }}>
        <div style={{
          width:36, height:36,
          background:`linear-gradient(135deg, ${T.gold}, ${T.sakura})`,
          borderRadius:10, display:'flex', alignItems:'center',
          justifyContent:'center', fontSize:18, marginBottom:10,
          boxShadow:`0 0 20px ${T.goldGlow}`,
        }}>🔥</div>
        <div style={{
          fontFamily:T.serif, fontSize:14, fontWeight:600,
          background:`linear-gradient(135deg, ${T.gold}, #f8d870)`,
          WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent',
          lineHeight:1.3, letterSpacing:1,
        }}>BRIDGEFIRE<br/>VENTURES</div>
        <div style={{ fontSize:9, color:T.dim, fontFamily:T.mono, marginTop:4, letterSpacing:2 }}>
          TOKYO · 2026
        </div>
      </div>

      {/* Links */}
      <div style={{ padding:'16px 12px', flex:1 }}>
        {links.map(link => (
          <NavLink key={link.to} to={link.to} end={link.to=='/'}
            style={({isActive}) => ({
              display:'flex', alignItems:'center', gap:10,
              padding:'9px 12px', borderRadius:8,
              textDecoration:'none', marginBottom:2,
              background: isActive ? `${T.gold}12` : 'transparent',
              color: isActive ? T.gold : T.muted,
              fontSize:12, fontWeight: isActive ? 500 : 400,
              border: isActive ? `1px solid ${T.goldDim}` : '1px solid transparent',
              transition:'all 0.15s',
              fontFamily: T.sans,
            })}
          >
            <span style={{fontSize:14}}>{link.icon}</span>
            {link.label}
          </NavLink>
        ))}
      </div>

      {/* Sprint indicator */}
      <div style={{ padding:'14px 20px', borderTop:`1px solid ${T.border}` }}>
        <div style={{ fontSize:9, color:T.dim, fontFamily:T.mono, letterSpacing:2, marginBottom:4 }}>CURRENT SPRINT</div>
        <div style={{ fontSize:11, color:T.gold, fontFamily:T.mono }}>Week 1 — Observe</div>
        <div style={{ fontSize:9, color:T.dim, marginTop:2 }}>ARJUN watching markets</div>
      </div>
    </nav>
  )
}
