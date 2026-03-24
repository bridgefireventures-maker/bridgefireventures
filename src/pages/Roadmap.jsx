import { useTheme, tokens } from '../theme.jsx'
import { Card, Label, SectionHeading, StatusPill } from '../components/UI.jsx'
import { revenueData } from '../data/index.js'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const colorHex = { arjun:'#d97706', sakura:'#db2777', cipher:'#7c3aed', pixel:'#ca8a04', echo:'#059669' }

const milestones = [
  { date:'Apr–May 2026', title:'Foundation', desc:'ARJUN paper trading. First Gumroad product. ATLAS character designs. Zero cost tools.', status:'NOW', color:'#d97706' },
  { date:'Jun–Jul 2026', title:'First Income', desc:'ARJUN goes live ₹25K. SAKURA YouTube 1K subs. ECHO 100 tracks on Pond5.', status:'NEXT', color:'#db2777' },
  { date:'Aug–Sep 2026', title:'All Streams Active', desc:'CIPHER arb running. Mac Mini purchased. All 6 CEOs generating revenue.', status:'Q3', color:'#7c3aed' },
  { date:'Oct–Dec 2026', title:'Scaling', desc:'ARJUN capital scaled. ECHO 500 tracks. Target: ¥415,000/month by December.', status:'Q4', color:'#ca8a04' },
  { date:'Early 2027', title:'Package It', desc:'BridgeFire course for NRIs. 1,000 students × ₹50,000 = ₹5 crore.', status:'FUTURE', color:'#059669' },
  { date:'Late 2028', title:'Financial Freedom', desc:'¥1,620,000/month. Phase 2 product company live. Toyota contract optional.', status:'FUTURE', color:'#2563eb' },
]

const phase2 = [
  { year:'2026', label:'Prove It', desc:'Build the personal system. Document everything publicly. Audience grows.', color:'#d97706' },
  { year:'Early 2027', label:'Package It', desc:'NRI course. 1,000 students × ₹50,000.', color:'#db2777' },
  { year:'Mid 2027', label:'Scale It', desc:'White-label for NRIs globally. $99/month subscription.', color:'#7c3aed' },
  { year:'2028', label:'Platform It', desc:'BridgeFire becomes the product. API + community.', color:'#d97706' },
]

export default function Roadmap() {
  const { dark } = useTheme()
  const t = tokens(dark)

  return (
    <div style={{ padding:'40px 40px', maxWidth:1100 }}>
      <SectionHeading
        label="Roadmap & Phase 2 Vision"
        title="The Path to Financial Freedom"
        sub="Honest projections. Real milestones. Every number defended by data, not optimism."
      />

      <Card style={{marginBottom:28, padding:'24px 24px'}}>
        <Label style={{marginBottom:6}}>Monthly revenue by CEO — Apr to Dec 2026</Label>
        <div style={{ fontSize:22, fontFamily:t.serif, fontWeight:600, color:t.text, marginBottom:16 }}>
          ¥415,000 <span style={{ fontSize:14, fontWeight:400, color:t.muted }}>projected December</span>
        </div>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={revenueData} margin={{top:5,right:5,bottom:0,left:0}} barSize={24}>
            <XAxis dataKey="month" tick={{fontSize:12,fill:t.dim,fontFamily:t.mono}} axisLine={false} tickLine={false}/>
            <YAxis tick={{fontSize:11,fill:t.dim,fontFamily:t.mono}} axisLine={false} tickLine={false} tickFormatter={v=>v>0?`¥${v/1000}K`:'¥0'} width={48}/>
            <Tooltip contentStyle={{background:t.card,border:`1px solid ${t.border}`,borderRadius:10,fontSize:13,fontFamily:t.mono,color:t.text}} formatter={(v,n)=>[`¥${v.toLocaleString()}`,n.toUpperCase()]}/>
            {Object.entries(colorHex).map(([k,c])=>(
              <Bar key={k} dataKey={k} stackId="a" fill={c} opacity={0.88} radius={k==='echo'?[4,4,0,0]:[0,0,0,0]}/>
            ))}
          </BarChart>
        </ResponsiveContainer>
      </Card>

      <Label style={{marginBottom:14}}>Key milestones</Label>
      <div style={{ display:'flex', flexDirection:'column', gap:10, marginBottom:32 }}>
        {milestones.map((m,i)=>(
          <div key={i} style={{
            display:'grid', gridTemplateColumns:'160px 100px 1fr',
            gap:16, alignItems:'start',
            padding:'16px 20px',
            background:t.card,
            border:`1px solid ${t.border}`,
            borderLeft:`4px solid ${m.color}`,
            borderRadius:'0 12px 12px 0',
          }}>
            <div>
              <div style={{ fontSize:14, fontFamily:t.serif, fontWeight:600, color:t.text }}>{m.date}</div>
              <div style={{ fontSize:12, color:t.muted, marginTop:2 }}>{m.title}</div>
            </div>
            <div><StatusPill status={m.status}/></div>
            <div style={{ fontSize:14, color:t.muted, lineHeight:1.7 }}>{m.desc}</div>
          </div>
        ))}
      </div>

      {/* Phase 2 */}
      <Card style={{marginBottom:24, padding:'24px'}}>
        <Label style={{marginBottom:4}}>Phase 2 — The Product Company</Label>
        <p style={{ fontSize:15, color:t.muted, marginBottom:20, lineHeight:1.8 }}>
          Triggered when BridgeFire achieves 3 consecutive months at ¥1,620,000/month. Until then every CEO builds toward it daily. Every result matters twice.
        </p>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:12 }}>
          {phase2.map(s=>(
            <div key={s.year} style={{ background:t.surface, borderRadius:12, padding:'16px 18px', borderTop:`3px solid ${s.color}`, border:`1px solid ${t.border}`, borderTop:`3px solid ${s.color}` }}>
              <div style={{ fontSize:11, color:s.color, fontFamily:t.mono, marginBottom:6, fontWeight:600 }}>{s.year}</div>
              <div style={{ fontSize:15, fontFamily:t.serif, fontWeight:600, color:t.text, marginBottom:8 }}>{s.label}</div>
              <div style={{ fontSize:13, color:t.muted, lineHeight:1.65 }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </Card>

      {/* Pitch */}
      <div style={{ padding:'24px 28px', background: dark?'#1a150a':t.surface, border:`1px solid ${dark?'#92400e60':'#d9770640'}`, borderRadius:14 }}>
        <Label color={dark?'#92400e':'#92400e'} style={{marginBottom:10}}>The One Sentence Pitch — Every CEO Memorises This</Label>
        <p style={{ fontFamily:t.serif, fontSize:19, color: dark?'#f59e0b':'#d97706', fontStyle:'italic', lineHeight:1.85 }}>
          "The only AI-powered financial freedom system built by an Indian professional living in Japan — proven on real money, documented in public, available for every NRI who is tired of watching their savings sit still."
        </p>
      </div>
    </div>
  )
}
