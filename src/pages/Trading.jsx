import { useState } from 'react'
import { useTheme, tokens } from '../theme.jsx'
import { Card, Label, Metric, SectionHeading, StatusPill } from '../components/UI.jsx'
import { arjunReports } from '../data/index.js'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts'
import { ArjunPortrait } from '../components/Portraits.jsx'

export default function Trading() {
  const { dark } = useTheme()
  const t = tokens(dark)
  const [active, setActive] = useState(arjunReports[arjunReports.length-1])
  const chartData = arjunReports.map(r=>({ day:`Day ${r.day}`, close:r.close, rsi:r.rsi }))
  const c = t.arjun

  return (
    <div style={{ padding:'40px 40px', maxWidth:1100 }}>

      <div style={{ display:'flex', gap:20, alignItems:'flex-start', marginBottom:36 }}>
        <ArjunPortrait size={72}/>
        <div>
          <div style={{ fontSize:11, color:t.dim, fontFamily:t.mono, letterSpacing:3, textTransform:'uppercase', marginBottom:6 }}>ARJUN · Chief Markets Officer</div>
          <h1 style={{ fontFamily:t.serif, fontSize:36, fontWeight:700, color:t.text, lineHeight:1.15, marginBottom:8 }}>USD/INR Trading Dashboard</h1>
          <div style={{ display:'flex', gap:8, flexWrap:'wrap' }}>
            {['Zerodha Kite','USD/INR Futures','Week 1 — Observation','Paper Mode'].map(tag=>(
              <span key={tag} style={{ fontSize:12, padding:'4px 14px', background:`${c.main}15`, border:`1px solid ${c.border}`, borderRadius:20, color:c.tag, fontFamily:t.mono }}>{tag}</span>
            ))}
          </div>
        </div>
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:14, marginBottom:28 }}>
        <Metric label="Paper Capital" value="₹50,000" sub="Simulated — not live"/>
        <Metric label="Paper P&L" value="₹0" sub="Week 1 — no trades yet"/>
        <Metric label="Win Rate" value="—" sub="Starts Week 2" />
        <Metric label="Confidence" value={`${active.confidence}/10`} sub="ARJUN's self-assessment" color={c.main}/>
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16, marginBottom:20 }}>
        <Card>
          <Label style={{marginBottom:12}}>USD/INR close — observation days</Label>
          <ResponsiveContainer width="100%" height={180}>
            <LineChart data={chartData} margin={{top:5,right:10,bottom:0,left:0}}>
              <XAxis dataKey="day" tick={{fontSize:12,fill:t.dim,fontFamily:t.mono}} axisLine={false} tickLine={false}/>
              <YAxis domain={['auto','auto']} tick={{fontSize:11,fill:t.dim,fontFamily:t.mono}} axisLine={false} tickLine={false} width={46}/>
              <Tooltip contentStyle={{background:t.card,border:`1px solid ${t.border}`,borderRadius:10,fontSize:13,fontFamily:t.mono,color:t.text}}/>
              <ReferenceLine y={83.40} stroke="#059669" strokeDasharray="5 3" label={{value:'Support',fontSize:10,fill:'#059669'}}/>
              <ReferenceLine y={83.80} stroke="#db2777" strokeDasharray="5 3" label={{value:'Resistance',fontSize:10,fill:'#db2777'}}/>
              <Line type="monotone" dataKey="close" stroke={c.main} strokeWidth={2.5} dot={{fill:c.main,r:5,strokeWidth:0}}/>
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card>
          <Label style={{marginBottom:12}}>RSI (14) — overbought / oversold</Label>
          <ResponsiveContainer width="100%" height={180}>
            <LineChart data={chartData} margin={{top:5,right:10,bottom:0,left:0}}>
              <XAxis dataKey="day" tick={{fontSize:12,fill:t.dim,fontFamily:t.mono}} axisLine={false} tickLine={false}/>
              <YAxis domain={[0,100]} tick={{fontSize:11,fill:t.dim,fontFamily:t.mono}} axisLine={false} tickLine={false} width={30}/>
              <Tooltip contentStyle={{background:t.card,border:`1px solid ${t.border}`,borderRadius:10,fontSize:13,fontFamily:t.mono,color:t.text}}/>
              <ReferenceLine y={70} stroke="#db2777" strokeDasharray="5 3"/>
              <ReferenceLine y={30} stroke="#059669" strokeDasharray="5 3"/>
              <Line type="monotone" dataKey="rsi" stroke="#7c3aed" strokeWidth={2.5} dot={{fill:'#7c3aed',r:5,strokeWidth:0}}/>
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Daily reports */}
      <Card style={{marginBottom:20}}>
        <Label style={{marginBottom:14}}>Daily observation reports — click to expand</Label>
        <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
          {arjunReports.map(r=>(
            <div key={r.day} onClick={()=>setActive(r)} style={{
              padding:'14px 16px', borderRadius:10,
              background: active.day===r.day ? `${c.main}10` : t.surface,
              border:`1px solid ${active.day===r.day ? c.main+'40' : t.border}`,
              cursor:'pointer', transition:'all 0.15s',
            }}>
              <div style={{ display:'grid', gridTemplateColumns:'60px 90px 80px 80px 1fr', gap:12, alignItems:'center' }}>
                <span style={{ fontSize:13, fontFamily:t.mono, fontWeight:600, color:c.main }}>Day {r.day}</span>
                <span style={{ fontSize:13, fontFamily:t.mono, color:t.text, fontWeight:500 }}>{r.close}</span>
                <span style={{ fontSize:12, fontFamily:t.mono, color:'#7c3aed' }}>RSI {r.rsi}</span>
                <StatusPill status={r.signal}/>
                <span style={{ fontSize:13, color:t.muted, lineHeight:1.5 }}>{r.note}</span>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* 3-week programme */}
      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:14 }}>
        {[
          { week:'Week 1', title:'Observation', desc:'Pure watching. No trades. Build USD/INR level map. Daily 5-line report to Chairman.', color:c.main, border:c.border, active:true },
          { week:'Week 2', title:'Paper Trading', desc:'RSI + EMA signals. Every trade logged with entry reason, stop loss, take profit. Win rate measured.', color:'#7c3aed', border:'#7c3aed40', active:false },
          { week:'Week 3', title:'Verdict', desc:'Green = go live ₹25K. Amber = adjust. Red = abort. Capital decided by data, not hope.', color:'#059669', border:'#05966940', active:false },
        ].map(p=>(
          <div key={p.week} style={{
            padding:'18px 20px', borderRadius:12,
            background: p.active ? `${p.color}10` : t.surface,
            border:`1px solid ${p.border}`,
          }}>
            <div style={{ fontSize:11, color:p.color, fontFamily:t.mono, letterSpacing:2, marginBottom:6, textTransform:'uppercase' }}>{p.week}</div>
            <div style={{ fontSize:16, fontFamily:t.serif, fontWeight:600, color:t.text, marginBottom:8 }}>{p.title}</div>
            <div style={{ fontSize:14, color:t.muted, lineHeight:1.7 }}>{p.desc}</div>
            {p.active && <div style={{ marginTop:10, fontSize:11, color:p.color, fontFamily:t.mono, fontWeight:600 }}>◈ CURRENT SPRINT</div>}
          </div>
        ))}
      </div>
    </div>
  )
}
