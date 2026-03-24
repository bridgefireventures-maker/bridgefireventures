import { useState } from 'react'
import { useTheme, tokens } from '../theme.jsx'
import { Card, Label, SectionHeading } from '../components/UI.jsx'
import { setupItems } from '../data/index.js'

const priorityStyle = (dark) => ({
  'DONE':      { bg:'#d1fae5', color:'#064e3b', dot:'#059669' },
  'TONIGHT':   { bg:'#fef3c7', color:'#78350f', dot:'#d97706' },
  'THIS WEEK': { bg:'#dbeafe', color:'#1e3a8a', dot:'#2563eb' },
  'MAY':       { bg:'#ede9fe', color:'#3730a3', dot:'#7c3aed' },
})

export default function Setup() {
  const { dark } = useTheme()
  const t = tokens(dark)
  const [items, setItems] = useState(setupItems)
  const ps = priorityStyle(dark)

  const done = items.filter(i=>i.done).length
  const pct = Math.round((done/items.length)*100)
  const toggle = id => setItems(p=>p.map(i=>i.id===id?{...i,done:!i.done}:i))

  return (
    <div style={{ padding:'40px 40px', maxWidth:760 }}>
      <SectionHeading
        label="Setup Checklist"
        title="Getting BridgeFire Operational"
        sub="Everything done from your phone or MacBook. No technical expertise needed. Tap each item when done."
      />

      {/* Progress */}
      <Card style={{ marginBottom:24, background: dark?'#0a1f14':'#f0fdf4', borderColor:'#05966940' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:12 }}>
          <div>
            <div style={{ fontSize:11, color:t.dim, fontFamily:t.mono, letterSpacing:2, marginBottom:4 }}>OVERALL PROGRESS</div>
            <div style={{ fontFamily:t.serif, fontSize:24, fontWeight:600, color: dark?'#10b981':'#059669' }}>{done} of {items.length} complete</div>
          </div>
          <div style={{ fontFamily:t.mono, fontSize:40, fontWeight:500, color: dark?'#10b981':'#059669' }}>{pct}%</div>
        </div>
        <div style={{ background: dark?'#1a2e22':'#bbf7d0', borderRadius:99, height:8, overflow:'hidden' }}>
          <div style={{ width:`${pct}%`, height:'100%', background: dark?'#10b981':'#059669', borderRadius:99, transition:'width 0.4s ease' }}/>
        </div>
      </Card>

      {/* Checklist */}
      <Card>
        {items.map((item, idx) => {
          const s = ps[item.priority] || ps['THIS WEEK']
          return (
            <div key={item.id} onClick={()=>toggle(item.id)} style={{
              display:'flex', gap:14, alignItems:'center',
              padding:'14px 0',
              borderBottom: idx<items.length-1 ? `1px solid ${t.border}` : 'none',
              cursor:'pointer',
              opacity: item.done ? 0.5 : 1,
              transition:'opacity 0.2s',
            }}>
              {/* Checkbox */}
              <div style={{
                width:22, height:22, borderRadius:6, flexShrink:0,
                background: item.done ? '#059669' : 'transparent',
                border: `2px solid ${item.done ? '#059669' : t.borderMd}`,
                display:'flex', alignItems:'center', justifyContent:'center',
                transition:'all 0.2s',
              }}>
                {item.done && <span style={{color:'white', fontSize:13, fontWeight:700, lineHeight:1}}>✓</span>}
              </div>

              {/* Label */}
              <div style={{ flex:1, fontSize:15, color:t.text, textDecoration:item.done?'line-through':'none', lineHeight:1.4 }}>
                {item.label}
              </div>

              {/* Priority badge */}
              <span style={{
                display:'flex', alignItems:'center', gap:5,
                fontSize:11, fontWeight:600, padding:'3px 12px',
                background: s.bg, color: s.color,
                borderRadius:20, fontFamily:t.mono, flexShrink:0,
              }}>
                <span style={{width:6,height:6,borderRadius:'50%',background:s.dot,display:'inline-block'}}/>
                {item.priority}
              </span>
            </div>
          )
        })}
      </Card>

      {/* Infrastructure */}
      <div style={{ marginTop:24 }}>
        <Label style={{marginBottom:14}}>Infrastructure — own over rent</Label>
        <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
          {[
            { item:'ARJUN bot',     where:'MacBook (free)',        timing:'Now',        note:'Move to Mac Mini M4 when ARJUN profitable' },
            { item:'SAKURA',        where:'Make.com free tier',    timing:'After Gmail', note:'LinkedIn, YouTube, Buffer automated' },
            { item:'PIXEL',         where:'Gumroad (no monthly)',  timing:'May 2026',   note:'10% per sale — zero upfront cost' },
            { item:'ECHO',          where:'Pond5 + AudioJungle',   timing:'This week',  note:'Free to upload, earn per license' },
            { item:'Mac Mini M4',   where:'Your desk, Tokyo',      timing:'When profitable', note:'¥150,000 once — replaces all cloud costs forever' },
          ].map(row=>(
            <div key={row.item} style={{
              display:'grid', gridTemplateColumns:'120px 160px 1fr',
              gap:14, padding:'14px 18px',
              background:t.card, border:`1px solid ${t.border}`,
              borderRadius:10, alignItems:'center',
            }}>
              <div style={{ fontSize:13, fontWeight:600, color:t.text }}>{row.item}</div>
              <div>
                <div style={{ fontSize:12, color: dark?'#10b981':'#059669', fontFamily:t.mono, fontWeight:500 }}>{row.where}</div>
                <div style={{ fontSize:11, color:t.dim, marginTop:2 }}>{row.timing}</div>
              </div>
              <div style={{ fontSize:13, color:t.muted, lineHeight:1.6 }}>{row.note}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
