import { useState } from 'react'
import { T } from '../tokens.js'
import { GlowCard, Label, GoldTitle, StatusBadge, Metric } from '../components/UI.jsx'
import { arjunReports } from '../data/index.js'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts'

export default function Trading() {
  const [active, setActive] = useState(arjunReports[arjunReports.length-1])
  const chartData = arjunReports.map(r=>({ day:`Day ${r.day}`, close:r.close, rsi:r.rsi }))

  return (
    <div style={{ padding:'32px 36px', maxWidth:1100 }}>
      <div style={{ marginBottom:24 }}>
        <div style={{ fontSize:10, color:T.dim, fontFamily:T.mono, letterSpacing:4, marginBottom:6 }}>
          ARJUN ⚔️ — CHIEF MARKETS OFFICER
        </div>
        <GoldTitle size={32} style={{ marginBottom:8 }}>USD/INR Trading<br/>Command Centre</GoldTitle>
        <div style={{ display:'flex', gap:8, flexWrap:'wrap' }}>
          {['Zerodha Kite','USD/INR Futures','Week 1 — Observation','Paper Trading'].map(t=>(
            <span key={t} style={{ fontSize:10, padding:'3px 12px', background:`${T.arjun.main}15`, border:`1px solid ${T.arjun.border}`, borderRadius:20, color:T.arjun.main, fontFamily:T.mono }}>{t}</span>
          ))}
        </div>
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:12, marginBottom:20 }}>
        <Metric label="Paper Capital" value="₹50,000" sub="Simulated — not live"/>
        <Metric label="Paper P&L" value="₹0" sub="Week 1 — observation"/>
        <Metric label="Win Rate" value="—" sub="Paper trading Week 2"/>
        <Metric label="Confidence" value={`${active.confidence}/10`} sub="ARJUN self-assessment" color={T.gold}/>
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16, marginBottom:16 }}>
        <GlowCard color="arjun">
          <Label color={T.arjun.main} style={{marginBottom:12}}>USD/INR Close — Observation</Label>
          <ResponsiveContainer width="100%" height={170}>
            <LineChart data={chartData} margin={{top:5,right:10,bottom:0,left:0}}>
              <XAxis dataKey="day" tick={{fontSize:10,fill:T.dim,fontFamily:T.mono}} axisLine={false} tickLine={false}/>
              <YAxis domain={['auto','auto']} tick={{fontSize:10,fill:T.dim,fontFamily:T.mono}} axisLine={false} tickLine={false} width={44}/>
              <Tooltip contentStyle={{background:T.card,border:`1px solid ${T.border}`,borderRadius:8,fontSize:11,fontFamily:T.mono,color:T.text}}/>
              <ReferenceLine y={83.40} stroke={T.teal} strokeDasharray="4 2"/>
              <ReferenceLine y={83.80} stroke={T.sakura} strokeDasharray="4 2"/>
              <Line type="monotone" dataKey="close" stroke={T.gold} strokeWidth={2} dot={{fill:T.gold,r:4,strokeWidth:0}}/>
            </LineChart>
          </ResponsiveContainer>
          <div style={{ display:'flex', gap:16, marginTop:8 }}>
            <span style={{ fontSize:10, color:T.teal, fontFamily:T.mono }}>— Support 83.40</span>
            <span style={{ fontSize:10, color:T.sakura, fontFamily:T.mono }}>— Resistance 83.80</span>
          </div>
        </GlowCard>

        <GlowCard color="cipher">
          <Label color={T.cipher.main} style={{marginBottom:12}}>RSI (14) — Daily Reading</Label>
          <ResponsiveContainer width="100%" height={170}>
            <LineChart data={chartData} margin={{top:5,right:10,bottom:0,left:0}}>
              <XAxis dataKey="day" tick={{fontSize:10,fill:T.dim,fontFamily:T.mono}} axisLine={false} tickLine={false}/>
              <YAxis domain={[0,100]} tick={{fontSize:10,fill:T.dim,fontFamily:T.mono}} axisLine={false} tickLine={false} width={30}/>
              <Tooltip contentStyle={{background:T.card,border:`1px solid ${T.border}`,borderRadius:8,fontSize:11,fontFamily:T.mono,color:T.text}}/>
              <ReferenceLine y={70} stroke={T.sakura} strokeDasharray="4 2"/>
              <ReferenceLine y={30} stroke={T.teal} strokeDasharray="4 2"/>
              <Line type="monotone" dataKey="rsi" stroke={T.indigo} strokeWidth={2} dot={{fill:T.indigo,r:4,strokeWidth:0}}/>
            </LineChart>
          </ResponsiveContainer>
          <div style={{ display:'flex', gap:16, marginTop:8 }}>
            <span style={{ fontSize:10, color:T.teal, fontFamily:T.mono }}>— 30 oversold</span>
            <span style={{ fontSize:10, color:T.sakura, fontFamily:T.mono }}>— 70 overbought</span>
          </div>
        </GlowCard>
      </div>

      {/* Daily reports */}
      <GlowCard color="arjun" style={{marginBottom:16}}>
        <Label color={T.arjun.main} style={{marginBottom:12}}>Daily Reports — Click to expand</Label>
        {arjunReports.map(r=>(
          <div key={r.day} onClick={()=>setActive(r)} style={{
            padding:'12px 14px', borderRadius:8, marginBottom:6,
            background: active.day===r.day ? `${T.arjun.main}12` : T.surface,
            border:`1px solid ${active.day===r.day ? T.arjun.border : T.border}`,
            cursor:'pointer', transition:'all 0.15s',
          }}>
            <div style={{ display:'grid', gridTemplateColumns:'70px 80px 80px 70px 1fr', gap:10, alignItems:'center' }}>
              <span style={{ fontSize:11, fontFamily:T.mono, color:T.arjun.main }}>Day {r.day}</span>
              <span style={{ fontSize:12, fontFamily:T.mono, color:T.text }}>{r.close}</span>
              <span style={{ fontSize:11, fontFamily:T.mono, color:T.indigo }}>RSI {r.rsi}</span>
              <StatusBadge status={r.signal}/>
              <span style={{ fontSize:11, color:T.muted }}>{r.note}</span>
            </div>
          </div>
        ))}
      </GlowCard>

      {/* 3-week programme */}
      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:12 }}>
        {[
          { week:'Week 1', title:'Observation', desc:'Watch USD/INR. No trades. Build level map. Daily report to Chairman.', color:T.arjun.main, border:T.arjun.border, glow:T.arjun.glow, active:true },
          { week:'Week 2', title:'Paper Trading', desc:'RSI + EMA signals. Every trade logged. Win rate measured.', color:T.indigo, border:T.indigoDim, glow:'#6b8cff20', active:false },
          { week:'Week 3', title:'Verdict', desc:'Green = go live. Amber = adjust. Red = abort. Capital decided by data.', color:T.teal, border:T.tealDim, glow:'#2ecfb020', active:false },
        ].map(p=>(
          <div key={p.week} style={{
            background: p.active ? `${p.color}10` : T.card,
            border:`1px solid ${p.border}`,
            borderRadius:10, padding:'14px 16px',
            boxShadow: p.active ? `0 0 16px ${p.glow}` : 'none',
          }}>
            <div style={{ fontSize:10, color:p.color, fontFamily:T.mono, letterSpacing:2, marginBottom:4 }}>{p.week}</div>
            <div style={{ fontSize:14, fontFamily:T.serif, color:T.text, marginBottom:8 }}>{p.title}</div>
            <div style={{ fontSize:11, color:T.muted, lineHeight:1.7 }}>{p.desc}</div>
            {p.active && <div style={{ marginTop:10, fontSize:10, color:p.color, fontFamily:T.mono }}>◈ CURRENT SPRINT</div>}
          </div>
        ))}
      </div>
    </div>
  )
}
