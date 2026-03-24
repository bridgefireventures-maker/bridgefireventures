import { useNavigate } from 'react-router-dom'
import { useTheme, tokens } from '../theme.jsx'
import { Card, Label, Metric, ProgressBar, SectionHeading, StatusPill } from '../components/UI.jsx'
import { ceos, revenueData } from '../data/index.js'
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { ArjunPortrait, SakuraPortrait, CipherPortrait, PixelPortrait, EchoPortrait, AtlasPortrait } from '../components/Portraits.jsx'

const portraits = { arjun:ArjunPortrait, sakura:SakuraPortrait, cipher:CipherPortrait, pixel:PixelPortrait, echo:EchoPortrait, atlas:AtlasPortrait }
const colorHex = { arjun:'#d97706', sakura:'#db2777', cipher:'#7c3aed', pixel:'#ca8a04', echo:'#059669' }

export default function Overview() {
  const nav = useNavigate()
  const { dark } = useTheme()
  const t = tokens(dark)
  const dec = revenueData[revenueData.length-1].total
  const pct = Math.round((dec/415000)*100)

  return (
    <div style={{ padding:'40px 40px', maxWidth:1100 }}>

      {/* Hero */}
      <div style={{ marginBottom:44 }}>
        <div style={{ fontSize:11, color:t.dim, fontFamily:t.mono, letterSpacing:3, marginBottom:12, textTransform:'uppercase' }}>
          BridgeFire Ventures · Tokyo · Founded March 2026
        </div>
        <h1 style={{ fontFamily:t.serif, fontSize:44, fontWeight:700, color:t.text, lineHeight:1.15, marginBottom:16, maxWidth:580 }}>
          The Japan · India · AI<br/>
          <span style={{ color: dark?'#f59e0b':'#d97706' }}>Wealth Machine</span>
        </h1>
        <p style={{ fontSize:17, color:t.muted, lineHeight:1.85, maxWidth:560, marginBottom:28 }}>
          Six AI warriors — born from Indian and Japanese mythology — fighting for financial freedom in Tokyo. Documented publicly. Every rupee tracked. Every trade real.
        </p>
        <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
          <span style={{ fontSize:13, padding:'6px 16px', background: dark?'#f59e0b18':'#fef3c7', color: dark?'#f59e0b':'#92400e', border:`1px solid ${dark?'#92400e60':'#d9770640'}`, borderRadius:20, fontFamily:t.mono }}>
            ◈ 6 AI CEOs Active
          </span>
          <span style={{ fontSize:13, padding:'6px 16px', background: dark?'#059669 18':'#d1fae5', color: dark?'#6ee7b7':'#064e3b', border:`1px solid ${dark?'#06522840':'#05966940'}`, borderRadius:20, fontFamily:t.mono }}>
            ◈ Phase 1 — Prove It
          </span>
          <span style={{ fontSize:13, padding:'6px 16px', background: dark?'#7c3aed18':'#ede9fe', color: dark?'#a78bfa':'#3730a3', border:`1px solid ${dark?'#4c1d9540':'#7c3aed40'}`, borderRadius:20, fontFamily:t.mono }}>
            ◈ Freedom Target: 2028
          </span>
        </div>
      </div>

      {/* Metrics */}
      <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:14, marginBottom:32 }}>
        <Metric label="Dec 2026 Target" value="¥415K" sub="honest projection / month" color={dark?'#f59e0b':'#d97706'}/>
        <Metric label="Freedom Number" value="¥1.62M" sub="per month by late 2028"/>
        <Metric label="CEO Board" value="6 + 1" sub="6 CEOs + SENTINEL bot"/>
        <Metric label="Max Exposure" value="¥300K" sub="Chairman's capital protected" color={dark?'#10b981':'#059669'}/>
      </div>

      {/* Revenue chart */}
      <Card style={{ marginBottom:28, padding:'24px 24px' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:20, flexWrap:'wrap', gap:10 }}>
          <div>
            <Label>Revenue projection — Apr to Dec 2026</Label>
            <div style={{ fontSize:24, fontFamily:t.serif, fontWeight:600, color:t.text }}>
              ¥{revenueData[revenueData.length-1].total.toLocaleString()}
              <span style={{ fontSize:14, color:t.muted, fontFamily:t.sans, fontWeight:400, marginLeft:8 }}>by December</span>
            </div>
          </div>
          <div style={{ display:'flex', gap:12, flexWrap:'wrap' }}>
            {Object.entries(colorHex).map(([k,c])=>(
              <span key={k} style={{ display:'flex', alignItems:'center', gap:5, fontSize:12, color:t.muted, fontFamily:t.mono }}>
                <span style={{ width:8,height:8,borderRadius:2,background:c,display:'inline-block' }}/>
                {k}
              </span>
            ))}
          </div>
        </div>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart data={revenueData} margin={{top:5,right:5,bottom:0,left:0}}>
            <defs>
              {Object.entries(colorHex).map(([k,c])=>(
                <linearGradient key={k} id={`g${k}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={c} stopOpacity={0.3}/>
                  <stop offset="100%" stopColor={c} stopOpacity={0}/>
                </linearGradient>
              ))}
            </defs>
            <XAxis dataKey="month" tick={{fontSize:12,fill:t.dim,fontFamily:t.mono}} axisLine={false} tickLine={false}/>
            <YAxis tick={{fontSize:11,fill:t.dim,fontFamily:t.mono}} axisLine={false} tickLine={false} tickFormatter={v=>v>0?`¥${v/1000}K`:'¥0'} width={48}/>
            <Tooltip
              contentStyle={{background:t.card,border:`1px solid ${t.border}`,borderRadius:10,fontSize:13,fontFamily:t.mono,color:t.text,boxShadow:'0 4px 12px rgba(0,0,0,0.1)'}}
              formatter={(v,n)=>[`¥${v.toLocaleString()}`,n.toUpperCase()]}
            />
            {Object.entries(colorHex).map(([k,c])=>(
              <Area key={k} type="monotone" dataKey={k} stackId="1"
                stroke={c} strokeWidth={2} fill={`url(#g${k})`}/>
            ))}
          </AreaChart>
        </ResponsiveContainer>
      </Card>

      {/* Warriors grid */}
      <Label style={{marginBottom:16}}>The Six Warriors — click to meet them</Label>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:14, marginBottom:32 }}>
        {ceos.map(ceo => {
          const Portrait = portraits[ceo.id]
          const c = t[ceo.color]
          return (
            <Card key={ceo.id} onClick={()=>nav('/warriors')}
              style={{ cursor:'pointer', transition:'transform 0.15s, box-shadow 0.15s' }}
              onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-2px)';e.currentTarget.style.boxShadow='0 8px 24px rgba(0,0,0,0.1)'}}
              onMouseLeave={e=>{e.currentTarget.style.transform='';e.currentTarget.style.boxShadow=''}}
            >
              <div style={{ display:'flex', gap:14, alignItems:'flex-start', marginBottom:12 }}>
                <Portrait size={56}/>
                <div style={{ flex:1 }}>
                  <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:4 }}>
                    <div style={{ fontFamily:t.serif, fontSize:18, fontWeight:700, color:c.main }}>{ceo.name}</div>
                    <StatusPill status={ceo.status}/>
                  </div>
                  <div style={{ fontSize:12, color:t.muted, fontFamily:t.mono }}>{ceo.mythology}</div>
                </div>
              </div>
              <div style={{ fontSize:14, color:t.muted, lineHeight:1.65, marginBottom:14, fontStyle:'italic' }}>
                "{ceo.tagline}"
              </div>
              <div style={{ display:'flex', gap:6, flexWrap:'wrap', marginBottom:12 }}>
                {ceo.bots.map(b=>(
                  <span key={b} style={{ fontSize:11, padding:'2px 9px', background:t.surface, border:`1px solid ${t.border}`, borderRadius:8, color:t.muted, fontFamily:t.mono }}>
                    {b}
                  </span>
                ))}
              </div>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:8 }}>
                <span style={{ fontSize:12, color:t.dim, fontFamily:t.mono }}>{ceo.phase}</span>
                <span style={{ fontSize:14, fontFamily:t.serif, fontWeight:600, color:c.main }}>{ceo.target}</span>
              </div>
              <ProgressBar pct={ceo.progress} color={c.main}/>
            </Card>
          )
        })}
      </div>

      {/* Freedom meter */}
      <Card style={{ background: dark?'#1a1520':t.surface, borderColor: dark?'#d9770640':'#d9770640' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:16, flexWrap:'wrap', gap:12 }}>
          <div>
            <Label style={{color: dark?'#92400e':'#92400e'}}>Mission — Financial Freedom</Label>
            <div style={{ fontFamily:t.serif, fontSize:26, fontWeight:600, color: dark?'#f59e0b':'#d97706' }}>
              {pct}% of December 2026 target
            </div>
            <div style={{ fontSize:14, color:t.muted, marginTop:4 }}>Projections vs ¥415,000/month honest target</div>
          </div>
          <div style={{ textAlign:'right' }}>
            <div style={{ fontSize:11, color:t.dim, fontFamily:t.mono, marginBottom:2 }}>PHASE 2 TRIGGER</div>
            <div style={{ fontSize:16, fontFamily:t.serif, color: dark?'#f59e0b':'#d97706', fontWeight:600 }}>¥1,620,000/month × 3</div>
            <div style={{ fontSize:12, color:t.dim }}>Late 2028</div>
          </div>
        </div>
        <ProgressBar pct={pct} color={dark?'#f59e0b':'#d97706'} height={6}/>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:12, marginTop:18 }}>
          {[
            ['Dec 2026 honest',   '¥415,000/mo',  dark?'#10b981':'#059669'],
            ['Freedom threshold', '¥1,620,000/mo', dark?'#f59e0b':'#d97706'],
            ['True freedom',      'Late 2028',      dark?'#818cf8':'#4f46e5'],
          ].map(([l,v,c])=>(
            <div key={l} style={{ background:t.surface, border:`1px solid ${t.border}`, borderRadius:10, padding:'12px 16px' }}>
              <div style={{ fontSize:11, color:t.dim, fontFamily:t.mono, marginBottom:4 }}>{l}</div>
              <div style={{ fontSize:17, fontFamily:t.serif, fontWeight:600, color:c }}>{v}</div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
