import { useState } from 'react'
import { T } from '../tokens.js'
import { GlowCard, Label, GoldTitle, StatusBadge, ProgressBar } from '../components/UI.jsx'
import { ceos } from '../data/index.js'

export default function Warriors() {
  const [selected, setSelected] = useState(ceos[0])
  const c = T[selected.color]

  return (
    <div style={{ padding:'32px 36px', maxWidth:1100 }}>
      <div style={{ marginBottom:28 }}>
        <div style={{ fontSize:10, color:T.dim, fontFamily:T.mono, letterSpacing:4, marginBottom:8 }}>
          THE SIX WARRIORS
        </div>
        <GoldTitle size={36} style={{marginBottom:8}}>Born from Myth.<br/>Built for Markets.</GoldTitle>
        <p style={{ fontSize:14, color:T.muted, maxWidth:500, lineHeight:1.8 }}>
          Each CEO carries the wisdom of ancient mythology. Each bot executes with modern precision. Together they fight for one goal — your financial freedom.
        </p>
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'280px 1fr', gap:16 }}>
        {/* Selector */}
        <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
          {ceos.map(ceo => {
            const cc = T[ceo.color]
            const isSelected = selected.id === ceo.id
            return (
              <div key={ceo.id} onClick={()=>setSelected(ceo)} style={{
                display:'flex', alignItems:'center', gap:12,
                padding:'12px 14px', borderRadius:10,
                background: isSelected ? `${cc.main}12` : T.card,
                border: `1px solid ${isSelected ? cc.border : T.border}`,
                cursor:'pointer', transition:'all 0.15s',
                boxShadow: isSelected ? `0 0 16px ${cc.glow}` : 'none',
              }}>
                <span style={{ fontSize:20 }}>{ceo.emoji}</span>
                <div>
                  <div style={{ fontSize:13, fontFamily:T.serif, color: isSelected ? cc.main : T.text, fontWeight:600 }}>{ceo.name}</div>
                  <div style={{ fontSize:10, color:T.dim, fontFamily:T.mono }}>{ceo.mythology}</div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Detail */}
        <GlowCard color={selected.color} style={{ padding:'24px 28px' }}>
          {/* Header */}
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:20 }}>
            <div>
              <div style={{ display:'flex', alignItems:'center', gap:14, marginBottom:8 }}>
                <span style={{ fontSize:40 }}>{selected.emoji}</span>
                <div>
                  <div style={{
                    fontFamily:T.serif, fontSize:32, fontWeight:600,
                    background:`linear-gradient(135deg, ${c.main}, #ffffff)`,
                    WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent',
                  }}>{selected.name}</div>
                  <div style={{ fontSize:12, color:T.muted }}>{selected.title}</div>
                </div>
              </div>
              <div style={{ display:'flex', gap:8, alignItems:'center', flexWrap:'wrap' }}>
                <StatusBadge status={selected.status}/>
                <span style={{ fontSize:10, color:T.dim, fontFamily:T.mono }}>
                  {selected.mythology}
                </span>
              </div>
            </div>
            <div style={{ textAlign:'right' }}>
              <div style={{ fontSize:9, color:T.dim, fontFamily:T.mono, marginBottom:2 }}>TARGET</div>
              <div style={{ fontSize:22, fontFamily:T.serif, color:c.main }}>{selected.target}</div>
            </div>
          </div>

          {/* Mythology origin */}
          <div style={{
            background:`${c.main}10`, border:`1px solid ${c.border}`,
            borderRadius:10, padding:'14px 16px', marginBottom:16,
          }}>
            <Label color={c.main} style={{marginBottom:8}}>Mythology Origin</Label>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }}>
              <div>
                <div style={{ fontSize:10, color:T.dim, marginBottom:3 }}>🇮🇳 Indian</div>
                <div style={{ fontSize:12, color:T.text, lineHeight:1.6 }}>
                  {selected.mythology.split('×')[0].trim()}
                </div>
              </div>
              <div>
                <div style={{ fontSize:10, color:T.dim, marginBottom:3 }}>🇯🇵 Japanese</div>
                <div style={{ fontSize:12, color:T.text, lineHeight:1.6 }}>
                  {selected.mythology.split('×')[1]?.trim()}
                </div>
              </div>
            </div>
          </div>

          {/* Personality + visual */}
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12, marginBottom:16 }}>
            <div style={{ background:T.surface, borderRadius:10, padding:'12px 14px', border:`1px solid ${T.border}` }}>
              <Label color={T.dim} style={{marginBottom:6}}>Personality</Label>
              <div style={{ fontSize:12, color:T.muted, lineHeight:1.7 }}>{selected.personality}</div>
            </div>
            <div style={{ background:T.surface, borderRadius:10, padding:'12px 14px', border:`1px solid ${T.border}` }}>
              <Label color={T.dim} style={{marginBottom:6}}>Visual Design</Label>
              <div style={{ fontSize:12, color:T.muted, lineHeight:1.7 }}>{selected.visual}</div>
            </div>
          </div>

          {/* Catchphrase */}
          <div style={{
            padding:'16px 20px', marginBottom:16,
            border:`1px solid ${c.border}`,
            borderLeft:`4px solid ${c.main}`,
            borderRadius:'0 10px 10px 0',
            background:`${c.main}08`,
          }}>
            <div style={{
              fontFamily:T.serif, fontSize:16, color:c.main,
              fontStyle:'italic', lineHeight:1.7,
            }}>{selected.catchphrase}</div>
          </div>

          {/* Bots */}
          <div>
            <Label color={T.dim} style={{marginBottom:10}}>Bot Workers</Label>
            <div style={{ display:'flex', gap:8, flexWrap:'wrap', marginBottom:14 }}>
              {selected.bots.map(b=>(
                <div key={b} style={{
                  padding:'6px 14px',
                  background:T.surface,
                  border:`1px solid ${c.border}`,
                  borderRadius:8, fontSize:11, color:c.main,
                  fontFamily:T.mono,
                }}>🤖 {b}</div>
              ))}
            </div>
            <div style={{ display:'flex', justifyContent:'space-between', marginBottom:6 }}>
              <span style={{ fontSize:10, color:T.dim, fontFamily:T.mono }}>{selected.phase}</span>
              <span style={{ fontSize:10, color:c.main, fontFamily:T.mono }}>{selected.progress}%</span>
            </div>
            <ProgressBar pct={selected.progress} color={c.main} height={4}/>
          </div>
        </GlowCard>
      </div>

      {/* Phase 1 character note */}
      <div style={{
        marginTop:20, padding:'14px 20px',
        background:T.surface, border:`1px solid ${T.border}`,
        borderRadius:10, display:'flex', gap:12, alignItems:'center',
      }}>
        <span style={{ fontSize:20 }}>🗺️</span>
        <div style={{ fontSize:12, color:T.muted, lineHeight:1.7 }}>
          <span style={{ color:T.atlas.main, fontFamily:T.mono }}>ATLAS</span> is designing character caricatures for all 6 warriors this month — zero cost, AI image tools. They will appear in every YouTube thumbnail, LinkedIn post and dashboard. The fanbase starts forming before a single animation is produced.
        </div>
      </div>
    </div>
  )
}
