import { useState } from 'react'
import { T } from '../tokens.js'
import { GlowCard, Label, GoldTitle } from '../components/UI.jsx'
import { setupItems } from '../data/index.js'

const priorityStyle = {
  'DONE':      { bg:`${T.teal}18`,   text:T.teal,   border:T.tealDim },
  'NOW':       { bg:`${T.gold}18`,   text:T.gold,   border:T.goldDim },
  'TODAY':     { bg:`${T.gold}18`,   text:T.gold,   border:T.goldDim },
  'THIS WEEK': { bg:`${T.indigo}18`, text:T.indigo, border:T.indigoDim },
  'MAY':       { bg:`${T.cipher.main}18`, text:T.cipher.main, border:T.cipher.border },
}

const infraItems = [
  { label:'ARJUN bot',         where:'MacBook (free)',        when:'Now',      note:'Move to Mac Mini M4 when profitable' },
  { label:'SAKURA automation', where:'Make.com free',         when:'After Gmail', note:'Connects LinkedIn, YouTube, Buffer' },
  { label:'PIXEL storefront',  where:'Gumroad (no monthly)',  when:'May 2026', note:'10% per sale only — zero upfront' },
  { label:'ECHO uploads',      where:'Pond5 + AudioJungle',   when:'This week',note:'Free to upload — earn per license' },
  { label:'Mac Mini M4 Pro',   where:'Your desk, Tokyo',      when:'When profitable', note:'¥150,000 once — replaces all cloud costs' },
]

export default function Setup() {
  const [items, setItems] = useState(setupItems)
  const done  = items.filter(i=>i.done).length
  const pct   = Math.round((done/items.length)*100)

  const toggle = id => setItems(p=>p.map(i=>i.id===id?{...i,done:!i.done}:i))

  return (
    <div style={{ padding:'32px 36px', maxWidth:800 }}>
      <div style={{ marginBottom:28 }}>
        <div style={{ fontSize:10, color:T.dim, fontFamily:T.mono, letterSpacing:4, marginBottom:8 }}>SETUP CHECKLIST</div>
        <GoldTitle size={32} style={{marginBottom:8}}>Getting BridgeFire<br/>Operational</GoldTitle>
        <p style={{ fontSize:14, color:T.muted, lineHeight:1.8, maxWidth:460 }}>
          Everything done from your phone or MacBook. No technical expertise needed.
        </p>
      </div>

      {/* Progress */}
      <GlowCard color="echo" style={{ marginBottom:20 }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:10 }}>
          <div style={{ fontFamily:T.serif, fontSize:22, color:T.teal }}>{done} of {items.length} complete</div>
          <div style={{ fontSize:32, fontFamily:T.mono, color:T.teal }}>{pct}%</div>
        </div>
        <div style={{ background:T.border, borderRadius:4, height:8, overflow:'hidden' }}>
          <div style={{
            width:`${pct}%`, height:'100%',
            background:`linear-gradient(90deg, ${T.teal}88, ${T.teal})`,
            borderRadius:4, transition:'width 0.4s ease',
            boxShadow:`0 0 10px ${T.teal}60`,
          }}/>
        </div>
      </GlowCard>

      {/* Checklist */}
      <GlowCard color="arjun" style={{marginBottom:20}}>
        <Label color={T.gold} style={{marginBottom:14}}>Tap each item when completed</Label>
        {items.map(item => {
          const ps = priorityStyle[item.priority] || priorityStyle['THIS WEEK']
          return (
            <div key={item.id} onClick={()=>toggle(item.id)} style={{
              display:'flex', gap:14, alignItems:'center',
              padding:'11px 0', borderBottom:`1px solid ${T.border}`,
              cursor:'pointer', opacity: item.done?0.45:1, transition:'opacity 0.2s',
            }}>
              <div style={{
                width:22, height:22, borderRadius:6, flexShrink:0,
                background: item.done ? T.teal : 'transparent',
                border: `1.5px solid ${item.done ? T.teal : T.border}`,
                display:'flex', alignItems:'center', justifyContent:'center',
                transition:'all 0.2s',
                boxShadow: item.done ? `0 0 8px ${T.teal}60` : 'none',
              }}>
                {item.done && <span style={{color:'#08060f',fontSize:12,fontWeight:700}}>✓</span>}
              </div>
              <div style={{ flex:1, fontSize:13, color:T.text, textDecoration:item.done?'line-through':'none' }}>
                {item.label}
              </div>
              <span style={{
                fontSize:9, padding:'2px 10px',
                background:ps.bg, color:ps.text,
                border:`1px solid ${ps.border}`,
                borderRadius:20, fontFamily:T.mono, flexShrink:0,
              }}>{item.priority}</span>
            </div>
          )
        })}
      </GlowCard>

      {/* Infrastructure */}
      <GlowCard color="atlas">
        <Label color={T.atlas.main} style={{marginBottom:14}}>Infrastructure decisions — ATLAS</Label>
        {infraItems.map((item,i)=>(
          <div key={i} style={{
            display:'grid', gridTemplateColumns:'130px 150px 1fr',
            gap:12, padding:'10px 0',
            borderBottom: i<infraItems.length-1?`1px solid ${T.border}`:'none',
            alignItems:'center',
          }}>
            <div style={{ fontSize:12, color:T.text }}>{item.label}</div>
            <div>
              <div style={{ fontSize:11, color:T.teal, fontFamily:T.mono }}>{item.where}</div>
              <div style={{ fontSize:9, color:T.dim, marginTop:2 }}>{item.when}</div>
            </div>
            <div style={{ fontSize:11, color:T.muted, lineHeight:1.6 }}>{item.note}</div>
          </div>
        ))}
      </GlowCard>
    </div>
  )
}
