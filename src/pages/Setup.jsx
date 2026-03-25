import { useState } from 'react'
import { Card, Label, PageWrap, PageHeader, Divider } from '../components/UI.jsx'
import { setupItems } from '../data/index.js'

const PRIORITY_STYLE = {
  'DONE':      { bg:'#d1fae508', color:'#10b981', dot:'#10b981', border:'#10b98120' },
  'THIS WEEK': { bg:'#dbeafe08', color:'#3b82f6', dot:'#3b82f6', border:'#3b82f620' },
  'WAITING':   { bg:'#fef3c708', color:'#f59e0b', dot:'#f59e0b', border:'#f59e0b20' },
  'MAY':       { bg:'#ede9fe08', color:'#8b5cf6', dot:'#8b5cf6', border:'#8b5cf620' },
}

export default function Setup() {
  const [items, setItems] = useState(setupItems)
  const done = items.filter(i => i.done).length
  const pct  = Math.round((done / items.length) * 100)
  const toggle = id => setItems(p => p.map(i => i.id === id ? { ...i, done: !i.done } : i))

  return (
    <PageWrap maxWidth={760}>
      <PageHeader
        eyebrow="Setup Checklist"
        title="Getting BridgeFire Operational"
        subtitle="Everything done from your phone. Tap each item when complete."
      />

      {/* Progress */}
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'20px 24px', background:'var(--bg-subtle)', border:'1px solid var(--border)', borderRadius:'var(--r-lg)', marginBottom:24 }}>
        <div>
          <div style={{ fontSize:'var(--text-xs)', color:'var(--text-4)', fontFamily:'var(--font-mono)', letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:6 }}>Overall progress</div>
          <div style={{ fontSize:'var(--text-xl)', fontWeight:600, color:'var(--c-echo)' }}>{done} of {items.length} complete</div>
        </div>
        <div style={{ fontSize:40, fontWeight:700, fontFamily:'var(--font-mono)', color:'var(--c-echo)' }}>{pct}%</div>
      </div>
      <div style={{ background:'var(--border)', borderRadius:99, height:4, overflow:'hidden', marginBottom:32 }}>
        <div style={{ width:`${pct}%`, height:'100%', background:'var(--c-echo)', borderRadius:99, transition:'width 0.4s ease' }}/>
      </div>

      {/* Checklist */}
      <Card style={{ marginBottom:24 }}>
        {items.map((item, idx) => {
          const s = PRIORITY_STYLE[item.priority] || PRIORITY_STYLE['THIS WEEK']
          return (
            <div key={item.id} onClick={() => toggle(item.id)} style={{
              display:'flex', gap:14, alignItems:'center',
              padding:'13px 0',
              borderBottom: idx < items.length - 1 ? '1px solid var(--border)' : 'none',
              cursor:'pointer', opacity: item.done ? 0.45 : 1,
              transition:'opacity 0.2s',
            }}>
              <div style={{
                width:20, height:20, borderRadius:5, flexShrink:0,
                background: item.done ? 'var(--c-echo)' : 'transparent',
                border: `2px solid ${item.done ? 'var(--c-echo)' : 'var(--border-md)'}`,
                display:'flex', alignItems:'center', justifyContent:'center',
                transition:'all 0.15s',
              }}>
                {item.done && <span style={{ color:'black', fontSize:11, fontWeight:800, lineHeight:1 }}>✓</span>}
              </div>
              <div style={{ flex:1, fontSize:'var(--text-base)', color:'var(--text)', lineHeight:1.4, textDecoration: item.done ? 'line-through' : 'none' }}>
                {item.label}
              </div>
              <span style={{
                display:'flex', alignItems:'center', gap:5,
                fontSize:'var(--text-xs)', fontWeight:500,
                padding:'3px 10px',
                background: s.bg, color: s.color,
                border: `1px solid ${s.border}`,
                borderRadius:99, fontFamily:'var(--font-mono)', flexShrink:0,
              }}>
                <span style={{ width:5, height:5, borderRadius:'50%', background:s.dot, display:'inline-block' }}/>
                {item.priority}
              </span>
            </div>
          )
        })}
      </Card>

      <Divider style={{ marginBottom:24 }}/>

      {/* Infrastructure */}
      <Label style={{ marginBottom:14 }}>Infrastructure — own over rent</Label>
      <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
        {[
          { item:'ARJUN bot',      where:'DigitalOcean $6/mo',  timing:'This week',       note:'All 6 CEOs run simultaneously. 33 months free on $200 credit.' },
          { item:'SAKURA',         where:'Make.com free tier',  timing:'After DO server',  note:'LinkedIn, YouTube, Buffer automated from cloud.' },
          { item:'PIXEL',          where:'Gumroad — no monthly',timing:'May 2026',         note:'10% per sale only. Zero upfront cost.' },
          { item:'ECHO',           where:'Pond5 + AudioJungle', timing:'This week signup', note:'Free to upload. Earn per license.' },
          { item:'Mac Mini M4 Pro',where:'Your desk, Tokyo',    timing:'When profitable',  note:'¥150,000 once. Replaces all cloud costs eventually.' },
        ].map(row => (
          <div key={row.item} style={{
            display:'grid', gridTemplateColumns:'120px 150px 1fr',
            gap:14, padding:'12px 16px',
            background:'var(--bg-subtle)', border:'1px solid var(--border)',
            borderRadius:'var(--r-md)', alignItems:'center',
          }}>
            <div style={{ fontSize:'var(--text-sm)', fontWeight:600, color:'var(--text)' }}>{row.item}</div>
            <div>
              <div style={{ fontSize:'var(--text-xs)', color:'var(--c-echo)', fontFamily:'var(--font-mono)', fontWeight:500 }}>{row.where}</div>
              <div style={{ fontSize:'var(--text-xs)', color:'var(--text-4)', marginTop:2 }}>{row.timing}</div>
            </div>
            <div style={{ fontSize:'var(--text-sm)', color:'var(--text-3)', lineHeight:'var(--lh-normal)' }}>{row.note}</div>
          </div>
        ))}
      </div>
    </PageWrap>
  )
}
