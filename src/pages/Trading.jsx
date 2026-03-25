import { useTheme } from '../theme.jsx'
import { Card, Label, Metric, PageWrap, StatusDot } from '../components/UI.jsx'
import { ArjunPortrait } from '../components/Portraits3D.jsx'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts'

const mockData = [
  { day: 'Day 1', close: 149.82, rsi: 48 },
  { day: 'Day 2', close: 150.14, rsi: 54 },
  { day: 'Day 3', close: 149.65, rsi: 46 },
]

export default function Trading() {
  return (
    <PageWrap>
      <div style={{ display:'flex', gap:20, alignItems:'flex-start', marginBottom:36 }}>
        <ArjunPortrait size={72}/>
        <div>
          <div style={{ fontSize:'var(--text-xs)', color:'var(--text-4)', fontFamily:'var(--font-mono)', letterSpacing:'0.12em', textTransform:'uppercase', marginBottom:8 }}>ARJUN · Chief Markets Officer</div>
          <h1 style={{ fontSize:'var(--text-2xl)', fontWeight:600, color:'var(--text)', marginBottom:10 }}>Japan Forex Dashboard</h1>
          <div style={{ display:'flex', gap:8, flexWrap:'wrap' }}>
            {['Japan Forex Account','USD/JPY · EUR/USD','Waiting for Activation','Indian Portfolio Protected'].map(t=>(
              <span key={t} style={{ fontSize:'var(--text-xs)', padding:'4px 12px', background:'var(--bg-subtle)', border:'1px solid var(--border)', borderRadius:99, color:'var(--text-3)', fontFamily:'var(--font-mono)' }}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:12, marginBottom:28 }}>
        <Metric label="Trading capital" value="¥90,000" sub="Wise Jar 2 — ready" color="var(--c-arjun)"/>
        <Metric label="Platform" value="Pending" sub="Japan forex account"/>
        <Metric label="Indian portfolio" value="₹55L" sub="Untouched — protected"/>
        <Metric label="Status" value="Waiting" sub="Account approval email"/>
      </div>

      {/* ON HOLD state */}
      <Card style={{ marginBottom:24, borderColor:'#f59e0b18', padding:'32px' }}>
        <div style={{ display:'flex', gap:16, alignItems:'center' }}>
          <div style={{ width:48, height:48, borderRadius:'var(--r-md)', background:'#f59e0b10', border:'1px solid #f59e0b20', display:'flex', alignItems:'center', justifyContent:'center', fontSize:24, flexShrink:0 }}>⏳</div>
          <div>
            <div style={{ fontSize:'var(--text-md)', fontWeight:600, color:'var(--c-arjun)', marginBottom:4 }}>ARJUN is waiting</div>
            <div style={{ fontSize:'var(--text-sm)', color:'var(--text-3)', lineHeight:'var(--lh-normal)', maxWidth:500 }}>
              Japan forex account application submitted. When the approval email arrives — forward to Claude. ARJUN bot gets rebuilt for the Japan platform and deployed to DigitalOcean immediately. Capital: ¥90,000 from Wise Jar 2.
            </div>
          </div>
        </div>
      </Card>

      {/* Why Japan not Zerodha */}
      <Card style={{ marginBottom:24 }}>
        <Label style={{ marginBottom:14 }}>Why Japan forex — not Zerodha</Label>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }}>
          {[
            ['Indian portfolio stays separate','₹55L + wife\'s ₹1.2 crore is built wealth over years. No reason to touch it for a learning experiment.'],
            ['FEMA compliance','Mixing Indian investments with forex trading through Zerodha creates regulatory complexity. Japan forex is clean.'],
            ['Better pairs for Tokyo','USD/JPY and EUR/USD have deep liquidity during Tokyo trading hours. USD/INR does not.'],
            ['Capital from Wise Jar 2','¥90,000 specifically allocated for trading — separate from personal finances. Chairman fully protected.'],
          ].map(([t,d])=>(
            <div key={t} style={{ background:'var(--bg-subtle)', border:'1px solid var(--border)', borderRadius:'var(--r-md)', padding:'14px 16px' }}>
              <div style={{ fontSize:'var(--text-sm)', fontWeight:600, color:'var(--text)', marginBottom:6 }}>{t}</div>
              <div style={{ fontSize:'var(--text-sm)', color:'var(--text-3)', lineHeight:'var(--lh-normal)' }}>{d}</div>
            </div>
          ))}
        </div>
      </Card>

      {/* 3-week plan */}
      <Label style={{ marginBottom:12 }}>3-week programme — when account arrives</Label>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:12 }}>
        {[
          { week:'Week 1', title:'Observation', desc:'Watch USD/JPY. No trades. Build level map. Daily report.', color:'var(--c-arjun)' },
          { week:'Week 2', title:'Paper Trading', desc:'RSI + EMA signals. All trades logged. Win rate measured.', color:'var(--c-cipher)' },
          { week:'Week 3', title:'Verdict', desc:'Green = go live ¥25K. Amber = adjust. Red = abort. Data decides.', color:'var(--c-echo)' },
        ].map(p=>(
          <div key={p.week} style={{ padding:'18px 20px', borderRadius:'var(--r-lg)', background:'var(--bg-subtle)', border:'1px solid var(--border)' }}>
            <div style={{ fontSize:'var(--text-xs)', color:p.color, fontFamily:'var(--font-mono)', letterSpacing:'0.1em', marginBottom:6, textTransform:'uppercase' }}>{p.week}</div>
            <div style={{ fontSize:'var(--text-md)', fontWeight:600, color:'var(--text)', marginBottom:8 }}>{p.title}</div>
            <div style={{ fontSize:'var(--text-sm)', color:'var(--text-3)', lineHeight:'var(--lh-normal)' }}>{p.desc}</div>
          </div>
        ))}
      </div>
    </PageWrap>
  )
}
