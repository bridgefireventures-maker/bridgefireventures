import { T } from '../tokens.js'
import { GlowCard, Label, GoldTitle, Metric, ProgressBar, StatusBadge } from '../components/UI.jsx'
import { ceos, company, revenueData } from '../data/index.js'
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { useNavigate } from 'react-router-dom'

const colorHex = { arjun:'#f0a020', sakura:'#e8748a', cipher:'#9b7fff', pixel:'#f0d020', echo:'#2ecfb0', atlas:'#6b8cff' }

export default function Overview() {
  const nav = useNavigate()
  const dec = revenueData[revenueData.length-1].total
  const freedomPct = Math.round((dec/company.honestTarget)*100)

  return (
    <div style={{ padding:'32px 36px', maxWidth:1100 }}>

      {/* Hero */}
      <div style={{ marginBottom:40, position:'relative' }}>
        <div style={{ fontSize:10, color:T.dim, fontFamily:T.mono, letterSpacing:4, marginBottom:12 }}>
          BRIDGEFIRE VENTURES · TOKYO · FOUNDED MARCH 2026
        </div>
        <GoldTitle size={42} style={{ marginBottom:16, maxWidth:600 }}>
          The Japan · India · AI<br/>Wealth Machine
        </GoldTitle>
        <p style={{ fontSize:15, color:T.muted, lineHeight:1.9, maxWidth:580, marginBottom:24 }}>
          {company.tagline}
        </p>
        <div style={{
          display:'inline-block', padding:'10px 20px',
          background:`linear-gradient(135deg, ${T.gold}18, ${T.sakura}18)`,
          border:`1px solid ${T.goldDim}`,
          borderRadius:8, fontFamily:T.mono, fontSize:11, color:T.gold,
          letterSpacing:1,
        }}>
          ◈ 6 AI CEOs ACTIVE · 15 BOTS DEPLOYED · PHASE 1 — PROVE IT
        </div>
      </div>

      {/* Key metrics */}
      <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:12, marginBottom:28 }}>
        <Metric label="Honest Dec 2026" value="¥415K" sub="per month target" color={T.teal}/>
        <Metric label="Freedom Target" value="¥1.62M" sub="per month by 2028"/>
        <Metric label="Active CEOs" value="6" sub="+ SENTINEL signal bot" color={T.sakura}/>
        <Metric label="Max Exposure" value="¥300K" sub="Chairman protected" color={T.indigo}/>
      </div>

      {/* Revenue chart */}
      <GlowCard color="arjun" style={{ marginBottom:24, padding:'20px 22px' }}>
        <Label color={T.gold} style={{marginBottom:14}}>Projected revenue — Apr to Dec 2026</Label>
        <div style={{ display:'flex', gap:16, marginBottom:14, flexWrap:'wrap' }}>
          {Object.entries(colorHex).map(([k,c]) => (
            <span key={k} style={{ display:'flex', alignItems:'center', gap:5, fontSize:10, color:T.muted, fontFamily:T.mono }}>
              <span style={{ width:8,height:8,background:c,borderRadius:2,display:'inline-block',boxShadow:`0 0 6px ${c}` }}/>
              {k.toUpperCase()}
            </span>
          ))}
        </div>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart data={revenueData} margin={{top:5,right:5,bottom:0,left:0}}>
            <defs>
              {Object.entries(colorHex).map(([k,c]) => (
                <linearGradient key={k} id={`g-${k}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={c} stopOpacity={0.4}/>
                  <stop offset="100%" stopColor={c} stopOpacity={0}/>
                </linearGradient>
              ))}
            </defs>
            <XAxis dataKey="month" tick={{fontSize:10,fill:T.dim,fontFamily:T.mono}} axisLine={false} tickLine={false}/>
            <YAxis tick={{fontSize:9,fill:T.dim,fontFamily:T.mono}} axisLine={false} tickLine={false} tickFormatter={v=>v>0?`¥${v/1000}K`:'0'} width={44}/>
            <Tooltip contentStyle={{background:T.card,border:`1px solid ${T.border}`,borderRadius:8,fontSize:11,fontFamily:T.mono,color:T.text}} formatter={(v,n)=>[`¥${v.toLocaleString()}`,n.toUpperCase()]}/>
            {Object.entries(colorHex).map(([k,c]) => (
              <Area key={k} type="monotone" dataKey={k} stackId="1"
                stroke={c} strokeWidth={1.5}
                fill={`url(#g-${k})`}/>
            ))}
          </AreaChart>
        </ResponsiveContainer>
      </GlowCard>

      {/* CEO grid */}
      <Label color={T.dim} style={{marginBottom:14}}>THE SIX WARRIORS — Click to meet them</Label>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:12, marginBottom:28 }}>
        {ceos.map(ceo => {
          const c = T[ceo.color]
          return (
            <GlowCard key={ceo.id} color={ceo.color}
              onClick={()=>nav('/warriors')}
              style={{ cursor:'pointer' }}
            >
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:10 }}>
                <div>
                  <span style={{ fontSize:22 }}>{ceo.emoji}</span>
                  <div style={{ fontSize:14, fontFamily:T.serif, color:c.main, marginTop:4, fontWeight:600 }}>{ceo.name}</div>
                  <div style={{ fontSize:10, color:T.dim, fontFamily:T.mono, marginTop:1 }}>{ceo.mythology}</div>
                </div>
                <StatusBadge status={ceo.status}/>
              </div>
              <div style={{ fontSize:12, color:T.muted, fontStyle:'italic', marginBottom:10, lineHeight:1.6 }}>
                {ceo.tagline}
              </div>
              <div style={{ display:'flex', gap:6, flexWrap:'wrap', marginBottom:10 }}>
                {ceo.bots.map(b=>(
                  <span key={b} style={{ fontSize:9, padding:'2px 8px', background:T.surface, border:`1px solid ${T.border}`, borderRadius:10, color:T.dim, fontFamily:T.mono }}>
                    🤖 {b}
                  </span>
                ))}
              </div>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:6 }}>
                <span style={{ fontSize:10, color:T.dim, fontFamily:T.mono }}>{ceo.phase}</span>
                <span style={{ fontSize:13, fontFamily:T.serif, color:c.main }}>{ceo.target}</span>
              </div>
              <ProgressBar pct={ceo.progress} color={c.main}/>
            </GlowCard>
          )
        })}
      </div>

      {/* Freedom meter */}
      <GlowCard color="arjun" style={{ background:`linear-gradient(135deg, ${T.card}, ${T.surface})` }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', flexWrap:'wrap', gap:12, marginBottom:16 }}>
          <div>
            <Label color={T.goldDim}>Mission — financial freedom</Label>
            <GoldTitle size={24}>
              {freedomPct}% of Dec 2026 target covered by projections
            </GoldTitle>
          </div>
          <div style={{ textAlign:'right' }}>
            <div style={{ fontSize:10, color:T.dim, fontFamily:T.mono }}>PHASE 2 TRIGGER</div>
            <div style={{ fontSize:13, color:T.gold, fontFamily:T.serif }}>3× ¥1,620,000/month</div>
            <div style={{ fontSize:10, color:T.dim }}>Late 2028</div>
          </div>
        </div>
        <ProgressBar pct={freedomPct} color={T.gold} height={6}/>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:10, marginTop:16 }}>
          {[
            ['Dec 2026 projection','¥415,000/mo',T.teal],
            ['Freedom threshold','¥1,620,000/mo',T.gold],
            ['True freedom date','Late 2028',T.indigo],
          ].map(([l,v,c])=>(
            <div key={l} style={{ background:T.surface, borderRadius:8, padding:'10px 14px', border:`1px solid ${T.border}` }}>
              <div style={{ fontSize:9, color:T.dim, fontFamily:T.mono, marginBottom:3 }}>{l}</div>
              <div style={{ fontSize:16, fontFamily:T.serif, color:c }}>{v}</div>
            </div>
          ))}
        </div>
      </GlowCard>
    </div>
  )
}
