import { T } from '../tokens.js'
import { GlowCard, Label, GoldTitle, StatusBadge, Metric } from '../components/UI.jsx'
import { milestones, revenueData } from '../data/index.js'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const colorHex = { arjun:'#f0a020', sakura:'#e8748a', cipher:'#9b7fff', pixel:'#f0d020', echo:'#2ecfb0' }

const phase2Steps = [
  { year:'2026', label:'Prove It', desc:'Personal system proven. SAKURA documents everything. Audience builds.', color:T.arjun.main },
  { year:'Early 2027', label:'Package It', desc:'"Build your AI wealth machine" course. 1,000 NRIs × ₹50,000.', color:T.sakura.main },
  { year:'Mid 2027', label:'Scale It', desc:'White-label for NRIs globally. 500 subscribers × $99/month.', color:T.cipher.main },
  { year:'2028', label:'Platform It', desc:'BridgeFire becomes the product. API, community, marketplace.', color:T.gold },
]

export default function Roadmap() {
  return (
    <div style={{ padding:'32px 36px', maxWidth:1100 }}>
      <div style={{ marginBottom:28 }}>
        <div style={{ fontSize:10, color:T.dim, fontFamily:T.mono, letterSpacing:4, marginBottom:8 }}>ROADMAP & PHASE 2 VISION</div>
        <GoldTitle size={32} style={{marginBottom:8}}>The Path to<br/>Financial Freedom</GoldTitle>
        <p style={{ fontSize:14, color:T.muted, lineHeight:1.8, maxWidth:520 }}>
          Honest projections. Real milestones. Every number defended by data, not optimism.
        </p>
      </div>

      {/* Revenue chart */}
      <GlowCard color="arjun" style={{ marginBottom:24, padding:'20px 22px' }}>
        <Label color={T.gold} style={{marginBottom:14}}>Monthly revenue by CEO — stacked</Label>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={revenueData} margin={{top:5,right:5,bottom:0,left:0}} barSize={22}>
            <XAxis dataKey="month" tick={{fontSize:11,fill:T.dim,fontFamily:T.mono}} axisLine={false} tickLine={false}/>
            <YAxis tick={{fontSize:9,fill:T.dim,fontFamily:T.mono}} axisLine={false} tickLine={false} tickFormatter={v=>v>0?`¥${v/1000}K`:'0'} width={44}/>
            <Tooltip contentStyle={{background:T.card,border:`1px solid ${T.border}`,borderRadius:8,fontSize:11,fontFamily:T.mono,color:T.text}} formatter={(v,n)=>[`¥${v.toLocaleString()}`,n.toUpperCase()]}/>
            {Object.entries(colorHex).map(([k,c])=>(
              <Bar key={k} dataKey={k} stackId="a" fill={c} opacity={0.85}
                radius={k==='echo'?[3,3,0,0]:[0,0,0,0]}/>
            ))}
          </BarChart>
        </ResponsiveContainer>
      </GlowCard>

      {/* Milestones */}
      <Label color={T.dim} style={{marginBottom:12}}>Key milestones</Label>
      <div style={{ display:'flex', flexDirection:'column', gap:8, marginBottom:28 }}>
        {milestones.map((m,i)=>{
          const c = T[m.color]
          return (
            <div key={i} style={{
              display:'grid', gridTemplateColumns:'160px 100px 1fr',
              gap:16, alignItems:'center',
              padding:'14px 18px',
              background:T.card,
              border:`1px solid ${c?.border||T.border}`,
              borderLeft:`4px solid ${c?.main||T.border}`,
              borderRadius:'0 10px 10px 0',
              boxShadow: m.status==='NOW'?`0 0 12px ${c?.glow||'transparent'}`:'none',
            }}>
              <div>
                <div style={{ fontSize:13, fontFamily:T.serif, color:T.text }}>{m.date}</div>
                <div style={{ fontSize:11, color:T.muted, marginTop:2 }}>{m.title}</div>
              </div>
              <StatusBadge status={m.status}/>
              <div style={{ fontSize:12, color:T.muted, lineHeight:1.6 }}>{m.desc}</div>
            </div>
          )
        })}
      </div>

      {/* Phase 2 product roadmap */}
      <GlowCard color="arjun" style={{ padding:'20px 24px', marginBottom:20 }}>
        <Label color={T.gold} style={{marginBottom:6}}>Phase 2 — The Product Company</Label>
        <p style={{ fontSize:12, color:T.muted, marginBottom:16, lineHeight:1.7 }}>
          Triggered when BridgeFire achieves 3 consecutive months at ¥1,620,000/month. Until then, every CEO builds toward it daily.
        </p>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:10 }}>
          {phase2Steps.map(s=>(
            <div key={s.year} style={{
              background:T.surface, borderRadius:10, padding:'14px 16px',
              border:`1px solid ${T.border}`,
              borderTop:`3px solid ${s.color}`,
            }}>
              <div style={{ fontSize:10, color:s.color, fontFamily:T.mono, marginBottom:4 }}>{s.year}</div>
              <div style={{ fontSize:13, fontFamily:T.serif, color:T.text, marginBottom:8 }}>{s.label}</div>
              <div style={{ fontSize:11, color:T.muted, lineHeight:1.6 }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </GlowCard>

      {/* One sentence pitch */}
      <div style={{
        padding:'20px 24px',
        background:`linear-gradient(135deg, ${T.gold}10, ${T.sakura}08)`,
        border:`1px solid ${T.goldDim}`,
        borderRadius:12,
      }}>
        <Label color={T.goldDim} style={{marginBottom:8}}>The One Sentence Pitch — Every CEO Memorises This</Label>
        <div style={{
          fontFamily:T.serif, fontSize:18, color:T.gold,
          fontStyle:'italic', lineHeight:1.8,
        }}>
          "The only AI-powered financial freedom system built by an Indian professional living in Japan — proven on real money, documented in public, available for every NRI who is tired of watching their savings sit still."
        </div>
      </div>
    </div>
  )
}
