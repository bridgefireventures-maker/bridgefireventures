import { useNavigate } from 'react-router-dom'
import { Card, Label, Metric, ProgressBar, PageWrap, PageHeader, StatusDot, Divider } from '../components/UI.jsx'
import { ceos, revenueData } from '../data/index.js'
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { ArjunPortrait, SakuraPortrait, CipherPortrait, PixelPortrait, EchoPortrait, AtlasPortrait } from '../components/Portraits3D.jsx'

const portraits = { arjun: ArjunPortrait, sakura: SakuraPortrait, cipher: CipherPortrait, pixel: PixelPortrait, echo: EchoPortrait, atlas: AtlasPortrait }
const colorHex = { arjun: '#f59e0b', sakura: '#ec4899', cipher: '#8b5cf6', pixel: '#eab308', echo: '#10b981' }
const CEO_COLORS = { arjun:'var(--c-arjun)', sakura:'var(--c-sakura)', cipher:'var(--c-cipher)', pixel:'var(--c-pixel)', echo:'var(--c-echo)', atlas:'var(--c-atlas)' }

export default function Overview() {
  const nav = useNavigate()
  const dec = revenueData[revenueData.length - 1].total

  return (
    <PageWrap>
      {/* Hero */}
      <div style={{ marginBottom: 56, maxWidth: 640 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 12px', background: 'var(--bg-subtle)', border: '1px solid var(--border)', borderRadius: 99, marginBottom: 20 }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#f59e0b', display: 'inline-block' }}/>
          <span style={{ fontSize: 'var(--text-xs)', fontFamily: 'var(--font-mono)', color: 'var(--text-3)' }}>Phase 1 — Prove It · Tokyo, Japan · 2026</span>
        </div>
        <h1 style={{ fontSize: 'var(--text-3xl)', fontWeight: 600, color: 'var(--text)', lineHeight: 1.1, marginBottom: 16 }}>
          The Japan · India<br/>
          <span style={{ color: 'var(--c-gold)' }}>AI Wealth Machine</span>
        </h1>
        <p style={{ fontSize: 'var(--text-md)', color: 'var(--text-3)', lineHeight: 'var(--lh-loose)', marginBottom: 28 }}>
          Six AI warriors — born from Indian and Japanese mythology — fighting for financial freedom in Tokyo. Real money. Real trades. Nothing hidden.
        </p>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {['6 AI CEOs Active', 'Phase 1 — Prove It', 'Freedom by 2027'].map(t => (
            <span key={t} style={{ fontSize: 'var(--text-xs)', padding: '5px 14px', background: 'var(--bg-subtle)', border: '1px solid var(--border)', borderRadius: 99, color: 'var(--text-3)', fontFamily: 'var(--font-mono)' }}>{t}</span>
          ))}
        </div>
      </div>

      {/* Metrics */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 32 }}>
        <Metric label="Dec 2026 target" value="¥445K" sub="per month — revised" color="var(--c-gold)"/>
        <Metric label="Freedom number" value="¥1.62M" sub="per month by 2027"/>
        <Metric label="Active CEOs" value="6 + 1" sub="6 CEOs + SENTINEL bot"/>
        <Metric label="Max exposure" value="¥300K" sub="Chairman protected" color="var(--c-echo)"/>
      </div>

      {/* Revenue chart */}
      <Card style={{ marginBottom: 32 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20, flexWrap: 'wrap', gap: 12 }}>
          <div>
            <Label>Revenue projection — Apr–Dec 2026</Label>
            <div style={{ fontSize: 'var(--text-xl)', fontWeight: 600, color: 'var(--text)' }}>
              ¥{dec.toLocaleString()}
              <span style={{ fontSize: 'var(--text-sm)', fontWeight: 400, color: 'var(--text-4)', marginLeft: 8 }}>/ month by Dec</span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center' }}>
            {Object.entries(colorHex).map(([k, c]) => (
              <span key={k} style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 'var(--text-xs)', color: 'var(--text-4)', fontFamily: 'var(--font-mono)' }}>
                <span style={{ width: 8, height: 3, borderRadius: 2, background: c, display: 'inline-block' }}/>
                {k}
              </span>
            ))}
          </div>
        </div>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart data={revenueData} margin={{ top: 5, right: 5, bottom: 0, left: 0 }}>
            <defs>
              {Object.entries(colorHex).map(([k, c]) => (
                <linearGradient key={k} id={`ov-g-${k}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={c} stopOpacity={0.25}/>
                  <stop offset="100%" stopColor={c} stopOpacity={0}/>
                </linearGradient>
              ))}
            </defs>
            <XAxis dataKey="month" tick={{ fontSize: 12, fill: 'var(--text-4)', fontFamily: 'var(--font-mono)' }} axisLine={false} tickLine={false}/>
            <YAxis tick={{ fontSize: 11, fill: 'var(--text-4)', fontFamily: 'var(--font-mono)' }} axisLine={false} tickLine={false} tickFormatter={v => v > 0 ? `¥${v / 1000}K` : '¥0'} width={48}/>
            <Tooltip contentStyle={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 10, fontSize: 12, fontFamily: 'var(--font-mono)', color: 'var(--text)', boxShadow: 'var(--shadow-md)' }} formatter={(v, n) => [`¥${v.toLocaleString()}`, n.toUpperCase()]}/>
            {Object.entries(colorHex).map(([k, c]) => (
              <Area key={k} type="monotone" dataKey={k} stackId="1" stroke={c} strokeWidth={2} fill={`url(#ov-g-${k})`}/>
            ))}
          </AreaChart>
        </ResponsiveContainer>
      </Card>

      <Divider style={{ marginBottom: 32 }}/>

      {/* CEO Grid */}
      <Label style={{ marginBottom: 16 }}>The Six Warriors — click to meet them</Label>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginBottom: 40 }}>
        {ceos.map(ceo => {
          const Portrait = portraits[ceo.id]
          const cc = CEO_COLORS[ceo.id]
          return (
            <Card key={ceo.id} hover onClick={() => nav('/warriors')} style={{ cursor: 'pointer' }}>
              <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start', marginBottom: 14 }}>
                <Portrait size={60}/>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 6 }}>
                    <div style={{ fontSize: 'var(--text-md)', fontWeight: 600, color: cc }}>{ceo.name}</div>
                    <StatusDot status={ceo.status}/>
                  </div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-4)', fontFamily: 'var(--font-mono)', marginTop: 3 }}>{ceo.mythology}</div>
                </div>
              </div>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-3)', lineHeight: 'var(--lh-normal)', marginBottom: 14, fontStyle: 'italic' }}>
                "{ceo.tagline}"
              </p>
              <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap', marginBottom: 12 }}>
                {ceo.bots.map(b => (
                  <span key={b} style={{ fontSize: 'var(--text-xs)', padding: '2px 8px', background: 'var(--bg-subtle)', border: '1px solid var(--border)', borderRadius: 6, color: 'var(--text-4)', fontFamily: 'var(--font-mono)' }}>{b}</span>
                ))}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-4)', fontFamily: 'var(--font-mono)' }}>{ceo.phase}</span>
                <span style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: cc }}>{ceo.target}</span>
              </div>
              <ProgressBar pct={ceo.progress} color={cc}/>
            </Card>
          )
        })}
      </div>

      {/* Freedom meter */}
      <Card style={{ borderColor: '#f59e0b18' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20, flexWrap: 'wrap', gap: 16 }}>
          <div>
            <Label color="#92400e" style={{ marginBottom: 8 }}>Mission — Financial Freedom</Label>
            <div style={{ fontSize: 'var(--text-2xl)', fontWeight: 600, color: 'var(--c-gold)', lineHeight: 1.2 }}>
              {Math.round((dec / 445000) * 100)}% of Dec 2026 target
            </div>
            <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-4)', marginTop: 6 }}>Honest projection · DigitalOcean simultaneous deployment</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-4)', fontFamily: 'var(--font-mono)', marginBottom: 4 }}>PHASE 2 TRIGGER</div>
            <div style={{ fontSize: 'var(--text-md)', fontWeight: 600, color: 'var(--c-gold)' }}>¥1,620,000 × 3 months</div>
            <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-4)' }}>Mid 2027</div>
          </div>
        </div>
        <ProgressBar pct={Math.round((dec / 445000) * 100)} color="var(--c-gold)" height={5}/>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, marginTop: 20 }}>
          {[
            ['Dec 2026 projection', '¥445,000/mo', 'var(--c-echo)'],
            ['Freedom threshold', '¥1,620,000/mo', 'var(--c-gold)'],
            ['True freedom date', 'Mid 2027', 'var(--c-atlas)'],
          ].map(([l, v, c]) => (
            <div key={l} style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border)', borderRadius: 'var(--r-md)', padding: '12px 16px' }}>
              <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-4)', fontFamily: 'var(--font-mono)', marginBottom: 4 }}>{l}</div>
              <div style={{ fontSize: 'var(--text-lg)', fontWeight: 600, color: c }}>{v}</div>
            </div>
          ))}
        </div>
      </Card>
    </PageWrap>
  )
}
