import { Card, Label, StatusDot, PageWrap, PageHeader, Divider } from '../components/UI.jsx'
import { revenueData } from '../data/index.js'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const colorHex = { arjun:'#f59e0b', sakura:'#ec4899', cipher:'#8b5cf6', pixel:'#eab308', echo:'#10b981' }

const milestones = [
  { date:'Apr–May 2026', title:'Foundation',       desc:'ATLAS characters designed. SAKURA content starts. CIPHER Telegram setup. Zero-cost phase.', status:'NOW',    accent:'#f59e0b' },
  { date:'Jun–Jul 2026', title:'First Income',     desc:'ARJUN live on Japan forex. SAKURA YouTube 1K subs. ECHO 100 tracks on Pond5.', status:'NEXT',   accent:'#ec4899' },
  { date:'Aug–Sep 2026', title:'All Streams Live', desc:'CIPHER arb running. Mac Mini purchased. DigitalOcean deploying all 6 CEOs.', status:'READY',  accent:'#8b5cf6' },
  { date:'Oct–Dec 2026', title:'Scaling',          desc:'ARJUN capital scaled. ECHO 500 tracks. Target: ¥445,000/month December.', status:'BUILDING',accent:'#eab308' },
  { date:'Early 2027',   title:'Package It',       desc:'BridgeFire NRI course. 1,000 students × ₹50,000 = ₹5 crore.', status:'NEW',    accent:'#10b981' },
  { date:'Mid 2027',     title:'Freedom',          desc:'¥1,620,000/month. Toyota contract optional. Mercedes fund activated.', status:'LEARNING',accent:'#3b82f6' },
]

const phase2 = [
  { year:'2026', label:'Prove It',    desc:'Personal system proven. Audience builds. Everything documented.', color:'#f59e0b' },
  { year:'Early 2027', label:'Package It', desc:'NRI course. 1,000 students × ₹50,000.', color:'#ec4899' },
  { year:'Mid 2027', label:'Scale It',   desc:'White-label for NRIs globally. $99/month.', color:'#8b5cf6' },
  { year:'2028', label:'Platform It', desc:'BridgeFire becomes the product. API + community.', color:'#f59e0b' },
]

export default function Roadmap() {
  return (
    <PageWrap>
      <PageHeader eyebrow="Roadmap & Phase 2" title="The Path to Financial Freedom" subtitle="Honest projections. Real milestones. Every number defended by data, not optimism."/>

      <Card style={{ marginBottom:28 }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:20, flexWrap:'wrap', gap:12 }}>
          <div>
            <Label>Revenue by CEO — Apr to Dec 2026</Label>
            <div style={{ fontSize:'var(--text-xl)', fontWeight:600, color:'var(--text)' }}>
              ¥445,000 <span style={{ fontSize:'var(--text-sm)', fontWeight:400, color:'var(--text-4)' }}>/ month by December</span>
            </div>
          </div>
          <div style={{ display:'flex', gap:12, flexWrap:'wrap', alignItems:'center' }}>
            {Object.entries(colorHex).map(([k,c])=>(
              <span key={k} style={{ display:'flex', alignItems:'center', gap:5, fontSize:'var(--text-xs)', color:'var(--text-4)', fontFamily:'var(--font-mono)' }}>
                <span style={{ width:8, height:3, borderRadius:2, background:c, display:'inline-block' }}/>
                {k}
              </span>
            ))}
          </div>
        </div>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={revenueData} margin={{ top:5, right:5, bottom:0, left:0 }} barSize={22}>
            <XAxis dataKey="month" tick={{ fontSize:12, fill:'var(--text-4)', fontFamily:'var(--font-mono)' }} axisLine={false} tickLine={false}/>
            <YAxis tick={{ fontSize:11, fill:'var(--text-4)', fontFamily:'var(--font-mono)' }} axisLine={false} tickLine={false} tickFormatter={v=>v>0?`¥${v/1000}K`:'¥0'} width={48}/>
            <Tooltip contentStyle={{ background:'var(--bg-card)', border:'1px solid var(--border)', borderRadius:10, fontSize:12, fontFamily:'var(--font-mono)', color:'var(--text)', boxShadow:'var(--shadow-md)' }} formatter={(v,n)=>[`¥${v.toLocaleString()}`, n.toUpperCase()]}/>
            {Object.entries(colorHex).map(([k,c])=>(
              <Bar key={k} dataKey={k} stackId="a" fill={c} opacity={0.9} radius={k==='echo'?[4,4,0,0]:[0,0,0,0]}/>
            ))}
          </BarChart>
        </ResponsiveContainer>
      </Card>

      <Label style={{ marginBottom:12 }}>Key milestones</Label>
      <div style={{ display:'flex', flexDirection:'column', gap:8, marginBottom:32 }}>
        {milestones.map((m,i)=>(
          <div key={i} style={{ display:'grid', gridTemplateColumns:'160px 90px 1fr', gap:16, alignItems:'start', padding:'14px 18px', background:'var(--bg-card)', border:'1px solid var(--border)', borderLeft:`3px solid ${m.accent}`, borderRadius:'0 var(--r-md) var(--r-md) 0' }}>
            <div>
              <div style={{ fontSize:'var(--text-sm)', fontWeight:600, color:'var(--text)' }}>{m.date}</div>
              <div style={{ fontSize:'var(--text-xs)', color:'var(--text-4)', marginTop:2 }}>{m.title}</div>
            </div>
            <StatusDot status={m.status}/>
            <div style={{ fontSize:'var(--text-sm)', color:'var(--text-3)', lineHeight:'var(--lh-normal)' }}>{m.desc}</div>
          </div>
        ))}
      </div>

      <Divider style={{ marginBottom:28 }}/>

      <Card style={{ marginBottom:24 }}>
        <Label style={{ marginBottom:6 }}>Phase 2 — The Product Company</Label>
        <p style={{ fontSize:'var(--text-sm)', color:'var(--text-3)', marginBottom:20, lineHeight:'var(--lh-loose)' }}>
          Triggered when BridgeFire achieves 3 consecutive months at ¥1,620,000/month. Until then every CEO builds toward it daily.
        </p>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:10 }}>
          {phase2.map(s=>(
            <div key={s.year} style={{ background:'var(--bg-subtle)', borderRadius:'var(--r-md)', padding:'16px 16px', borderTop:`2px solid ${s.color}`, border:`1px solid var(--border)`, borderTop:`2px solid ${s.color}` }}>
              <div style={{ fontSize:'var(--text-xs)', color:s.color, fontFamily:'var(--font-mono)', marginBottom:6, fontWeight:500 }}>{s.year}</div>
              <div style={{ fontSize:'var(--text-md)', fontWeight:600, color:'var(--text)', marginBottom:8 }}>{s.label}</div>
              <div style={{ fontSize:'var(--text-sm)', color:'var(--text-3)', lineHeight:'var(--lh-normal)' }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </Card>

      <div style={{ padding:'24px 28px', background:'var(--bg-subtle)', border:'1px solid #f59e0b18', borderRadius:'var(--r-lg)' }}>
        <Label color="#92400e" style={{ marginBottom:10 }}>The one sentence pitch — every CEO memorises this</Label>
        <p style={{ fontSize:'var(--text-lg)', fontStyle:'italic', color:'var(--c-gold)', lineHeight:'var(--lh-loose)' }}>
          "The only AI-powered financial freedom system built by an Indian professional living in Japan — proven on real money, documented in public, available for every NRI who is tired of watching their savings sit still."
        </p>
      </div>
    </PageWrap>
  )
}
