import { useState } from 'react'
import { useTheme, tokens } from '../theme.jsx'
import { Card, Label, StatusPill, ProgressBar, SectionHeading } from '../components/UI.jsx'
import { ceos } from '../data/index.js'
import { ArjunPortrait, SakuraPortrait, CipherPortrait, PixelPortrait, EchoPortrait, AtlasPortrait } from '../components/Portraits.jsx'

const portraits = { arjun:ArjunPortrait, sakura:SakuraPortrait, cipher:CipherPortrait, pixel:PixelPortrait, echo:EchoPortrait, atlas:AtlasPortrait }

export default function Warriors() {
  const { dark } = useTheme()
  const t = tokens(dark)
  const [selected, setSelected] = useState(ceos[0])
  const c = t[selected.color]
  const Portrait = portraits[selected.id]

  return (
    <div style={{ padding:'40px 40px', maxWidth:1100 }}>
      <SectionHeading
        label="The Six Warriors"
        title="Born from Myth. Built for Markets."
        sub="Each CEO carries the wisdom of ancient mythology. Each bot executes with modern precision. Together they fight for one goal — your financial freedom."
      />

      <div style={{ display:'grid', gridTemplateColumns:'260px 1fr', gap:20 }}>

        {/* Selector */}
        <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
          {ceos.map(ceo => {
            const P = portraits[ceo.id]
            const cc = t[ceo.color]
            const isSelected = selected.id === ceo.id
            return (
              <div key={ceo.id} onClick={()=>setSelected(ceo)} style={{
                display:'flex', alignItems:'center', gap:12,
                padding:'12px 14px', borderRadius:12,
                background: isSelected ? `${cc.main}12` : t.card,
                border: `1px solid ${isSelected ? cc.main+'50' : t.border}`,
                cursor:'pointer', transition:'all 0.15s',
                boxShadow: isSelected ? `0 2px 12px ${cc.main}20` : 'none',
              }}>
                <P size={44}/>
                <div>
                  <div style={{ fontSize:14, fontFamily:t.serif, fontWeight:700, color: isSelected ? cc.main : t.text }}>{ceo.name}</div>
                  <div style={{ fontSize:11, color:t.dim, fontFamily:t.mono, marginTop:2 }}>{ceo.mythology}</div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Detail */}
        <Card style={{ padding:'28px 32px' }}>
          {/* Hero */}
          <div style={{ display:'flex', gap:20, alignItems:'flex-start', marginBottom:24 }}>
            <Portrait size={96}/>
            <div style={{ flex:1 }}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:8, flexWrap:'wrap', gap:8 }}>
                <div>
                  <div style={{ fontFamily:t.serif, fontSize:32, fontWeight:700, color:c.main, lineHeight:1 }}>{selected.name}</div>
                  <div style={{ fontSize:14, color:t.muted, marginTop:4 }}>{selected.title}</div>
                </div>
                <div style={{ textAlign:'right' }}>
                  <StatusPill status={selected.status}/>
                  <div style={{ fontSize:20, fontFamily:t.serif, fontWeight:600, color:c.main, marginTop:6 }}>{selected.target}</div>
                </div>
              </div>
              <div style={{ fontSize:12, color:t.dim, fontFamily:t.mono, marginBottom:10 }}>{selected.mythology} · {selected.domain}</div>
              <div style={{ display:'flex', gap:6, flexWrap:'wrap' }}>
                {selected.bots.map(b=>(
                  <span key={b} style={{ fontSize:11, padding:'3px 10px', background:c.soft, border:`1px solid ${c.border}`, borderRadius:8, color:c.tag, fontFamily:t.mono }}>
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Mythology */}
          <div style={{ background: dark?c.soft:`${c.main}08`, border:`1px solid ${c.border}`, borderRadius:12, padding:'16px 20px', marginBottom:18 }}>
            <Label color={c.main} style={{marginBottom:12}}>Mythology origin</Label>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16 }}>
              {[['🇮🇳 Indian', selected.mythology.split('×')[0].trim()], ['🇯🇵 Japanese', selected.mythology.split('×')[1]?.trim()]].map(([flag, name])=>(
                <div key={flag}>
                  <div style={{ fontSize:12, color:t.dim, marginBottom:4 }}>{flag}</div>
                  <div style={{ fontSize:15, fontFamily:t.serif, fontWeight:600, color:t.text }}>{name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Personality + Visual */}
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:14, marginBottom:18 }}>
            {[['Personality', selected.personality], ['Visual design', selected.visual || 'Designed by ATLAS — Phase 1 caricature live, animation in Phase 2']].map(([label, text])=>(
              <div key={label} style={{ background:t.surface, border:`1px solid ${t.border}`, borderRadius:10, padding:'14px 16px' }}>
                <Label style={{marginBottom:6}}>{label}</Label>
                <div style={{ fontSize:14, color:t.muted, lineHeight:1.7 }}>{text}</div>
              </div>
            ))}
          </div>

          {/* Catchphrase */}
          <div style={{ borderLeft:`4px solid ${c.main}`, padding:'14px 20px', marginBottom:18, background: dark?c.soft:`${c.main}06`, borderRadius:'0 10px 10px 0' }}>
            <div style={{ fontSize:17, fontFamily:t.serif, fontStyle:'italic', color:c.main, lineHeight:1.7 }}>
              "{selected.catchphrase}"
            </div>
          </div>

          {/* Progress */}
          <div style={{ display:'flex', justifyContent:'space-between', marginBottom:6 }}>
            <span style={{ fontSize:13, color:t.muted }}>{selected.phase}</span>
            <span style={{ fontSize:13, fontFamily:t.mono, color:c.main }}>{selected.progress}%</span>
          </div>
          <ProgressBar pct={selected.progress} color={c.main} height={5}/>
        </Card>
      </div>

      {/* ATLAS note */}
      <div style={{ marginTop:20, padding:'16px 20px', background:t.surface, border:`1px solid ${t.border}`, borderRadius:12, display:'flex', gap:14, alignItems:'center' }}>
        <AtlasPortrait size={40}/>
        <div style={{ fontSize:14, color:t.muted, lineHeight:1.7 }}>
          <span style={{ color:t.atlas?.main||'#2563eb', fontFamily:t.mono, fontWeight:600 }}>ATLAS</span> is designing full character illustrations for all 6 warriors this month using AI image tools — zero cost. Phase 1 SVG portraits are live now. Animated versions unlock when revenue hits 120% of target.
        </div>
      </div>
    </div>
  )
}
