import { useState } from 'react'
import { Card, Label, StatusDot, ProgressBar, PageWrap, PageHeader, Divider } from '../components/UI.jsx'
import { ceos } from '../data/index.js'
import { ArjunPortrait, SakuraPortrait, CipherPortrait, PixelPortrait, EchoPortrait, AtlasPortrait } from '../components/Portraits3D.jsx'

const portraits = { arjun: ArjunPortrait, sakura: SakuraPortrait, cipher: CipherPortrait, pixel: PixelPortrait, echo: EchoPortrait, atlas: AtlasPortrait }
const CC = { arjun:'var(--c-arjun)', sakura:'var(--c-sakura)', cipher:'var(--c-cipher)', pixel:'var(--c-pixel)', echo:'var(--c-echo)', atlas:'var(--c-atlas)' }

export default function Warriors() {
  const [sel, setSel] = useState(ceos[0])
  const Portrait = portraits[sel.id]
  const cc = CC[sel.id]

  return (
    <PageWrap>
      <PageHeader eyebrow="The Six Warriors" title="Born from Myth. Built for Markets." subtitle="Each CEO carries the wisdom of ancient mythology. Each bot executes with modern precision."/>
      <div style={{ display:'grid', gridTemplateColumns:'240px 1fr', gap:16, alignItems:'start' }}>
        <div style={{ display:'flex', flexDirection:'column', gap:6 }}>
          {ceos.map(c => {
            const P = portraits[c.id]; const active = sel.id === c.id; const col = CC[c.id]
            return (
              <button key={c.id} onClick={()=>setSel(c)} style={{ display:'flex', alignItems:'center', gap:12, padding:'10px 12px', borderRadius:'var(--r-md)', background: active?'var(--bg-card)':'transparent', border:`1px solid ${active?'var(--border-md)':'transparent'}`, cursor:'pointer', textAlign:'left', transition:'all 0.1s', boxShadow: active?'var(--shadow-sm)':'none' }}>
                <P size={40}/>
                <div>
                  <div style={{ fontSize:'var(--text-sm)', fontWeight: active?600:400, color: active?col:'var(--text-2)' }}>{c.name}</div>
                  <div style={{ fontSize:10, color:'var(--text-4)', fontFamily:'var(--font-mono)', marginTop:1 }}>{c.mythology.split('×')[0].trim()}</div>
                </div>
              </button>
            )
          })}
        </div>
        <Card style={{ padding:'28px 32px' }}>
          <div style={{ display:'flex', gap:20, alignItems:'flex-start', marginBottom:24 }}>
            <Portrait size={104}/>
            <div style={{ flex:1 }}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:8, flexWrap:'wrap', gap:8 }}>
                <div>
                  <div style={{ fontSize:'var(--text-2xl)', fontWeight:700, color:cc, lineHeight:1 }}>{sel.name}</div>
                  <div style={{ fontSize:'var(--text-sm)', color:'var(--text-3)', marginTop:4 }}>{sel.title}</div>
                </div>
                <div style={{ textAlign:'right' }}>
                  <StatusDot status={sel.status}/>
                  <div style={{ fontSize:'var(--text-lg)', fontWeight:600, color:cc, marginTop:6 }}>{sel.target}</div>
                </div>
              </div>
              <div style={{ fontSize:'var(--text-xs)', color:'var(--text-4)', fontFamily:'var(--font-mono)', marginBottom:12 }}>{sel.mythology} · {sel.domain}</div>
              <div style={{ display:'flex', gap:5, flexWrap:'wrap' }}>
                {sel.bots.map(b=><span key={b} style={{ fontSize:'var(--text-xs)', padding:'3px 10px', background:'var(--bg-subtle)', border:'1px solid var(--border)', borderRadius:6, color:'var(--text-3)', fontFamily:'var(--font-mono)' }}>{b}</span>)}
              </div>
            </div>
          </div>
          <Divider style={{ marginBottom:20 }}/>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12, marginBottom:20 }}>
            {[['🇮🇳 Indian', sel.mythology.split('×')[0].trim()],['🇯🇵 Japanese', sel.mythology.split('×')[1]?.trim()]].map(([f,n])=>(
              <div key={f} style={{ background:'var(--bg-subtle)', border:'1px solid var(--border)', borderRadius:'var(--r-md)', padding:'12px 14px' }}>
                <div style={{ fontSize:'var(--text-xs)', color:'var(--text-4)', marginBottom:4 }}>{f}</div>
                <div style={{ fontSize:'var(--text-md)', fontWeight:600, color:'var(--text)' }}>{n}</div>
              </div>
            ))}
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12, marginBottom:20 }}>
            {[['Personality', sel.personality],['Visual phase','SVG portraits live. Animated versions unlock at 120% revenue target.']].map(([l,t])=>(
              <div key={l} style={{ background:'var(--bg-subtle)', border:'1px solid var(--border)', borderRadius:'var(--r-md)', padding:'12px 14px' }}>
                <Label style={{ marginBottom:6 }}>{l}</Label>
                <div style={{ fontSize:'var(--text-sm)', color:'var(--text-3)', lineHeight:'var(--lh-normal)' }}>{t}</div>
              </div>
            ))}
          </div>
          <div style={{ borderLeft:`3px solid ${cc}`, padding:'12px 18px', marginBottom:20, background:'var(--bg-subtle)', borderRadius:'0 var(--r-md) var(--r-md) 0' }}>
            <p style={{ fontSize:'var(--text-md)', fontStyle:'italic', color:cc, lineHeight:'var(--lh-normal)' }}>"{sel.catchphrase}"</p>
          </div>
          <div style={{ display:'flex', justifyContent:'space-between', marginBottom:8 }}>
            <span style={{ fontSize:'var(--text-sm)', color:'var(--text-3)' }}>{sel.phase}</span>
            <span style={{ fontSize:'var(--text-sm)', fontFamily:'var(--font-mono)', color:cc }}>{sel.progress}%</span>
          </div>
          <ProgressBar pct={sel.progress} color={cc} height={4}/>
        </Card>
      </div>
      <div style={{ marginTop:20, padding:'16px 20px', background:'var(--bg-subtle)', border:'1px solid var(--border)', borderRadius:'var(--r-lg)', display:'flex', gap:14, alignItems:'center' }}>
        <AtlasPortrait size={44}/>
        <p style={{ fontSize:'var(--text-sm)', color:'var(--text-3)', lineHeight:'var(--lh-normal)' }}>
          <span style={{ color:'var(--c-atlas)', fontFamily:'var(--font-mono)', fontWeight:600 }}>ATLAS</span> — Phase 1 SVG portraits live. Animated characters unlock at 120% revenue. Talking personas via ElevenLabs in Q3 2026.
        </p>
      </div>
    </PageWrap>
  )
}
