import { NavLink, useLocation } from 'react-router-dom'
import { useTheme } from '../theme.jsx'
import { useState, useEffect } from 'react'

const links = [
  { to: '/',         label: 'Overview' },
  { to: '/warriors', label: 'Warriors' },
  { to: '/trading',  label: 'ARJUN' },
  { to: '/roadmap',  label: 'Roadmap' },
  { to: '/setup',    label: 'Setup' },
]

export default function TopNav() {
  const { dark, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0,
      height: 'var(--nav-h)',
      zIndex: 100,
      background: scrolled ? 'var(--nav-bg)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: `1px solid ${scrolled ? 'var(--border)' : 'transparent'}`,
      transition: 'background 0.2s, border-color 0.2s, backdrop-filter 0.2s',
    }}>
      <div style={{
        maxWidth: 1080,
        margin: '0 auto',
        padding: '0 32px',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 24,
      }}>

        {/* Logo */}
        <NavLink to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
          <div style={{
            width: 28, height: 28, borderRadius: 8,
            background: 'linear-gradient(135deg, #f59e0b, #ec4899)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 15,
          }}>🔥</div>
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
            <span style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--text)' }}>BridgeFire</span>
            <span style={{ fontSize: 10, color: 'var(--text-4)', fontFamily: 'var(--font-mono)', letterSpacing: '0.05em' }}>VENTURES</span>
          </div>
        </NavLink>

        {/* Nav links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {links.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              style={({ isActive }) => ({
                display: 'inline-flex',
                alignItems: 'center',
                padding: '6px 14px',
                borderRadius: 'var(--r-sm)',
                fontSize: 'var(--text-sm)',
                fontWeight: isActive ? 500 : 400,
                color: isActive ? 'var(--text)' : 'var(--text-3)',
                background: isActive ? 'var(--bg-card)' : 'transparent',
                border: `1px solid ${isActive ? 'var(--border)' : 'transparent'}`,
                textDecoration: 'none',
                transition: 'color 0.1s, background 0.1s',
                whiteSpace: 'nowrap',
              })}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Right actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
          {/* Sprint badge */}
          <span style={{
            fontSize: 'var(--text-xs)', fontFamily: 'var(--font-mono)',
            padding: '3px 10px',
            background: 'var(--bg-subtle)',
            border: '1px solid var(--border)',
            borderRadius: 99,
            color: 'var(--text-4)',
            display: 'none',
          }} className="hide-mobile">
            Sprint 1
          </span>

          {/* Theme toggle */}
          <button
            onClick={toggle}
            style={{
              width: 34, height: 34, borderRadius: 'var(--r-sm)',
              background: 'var(--bg-subtle)',
              border: '1px solid var(--border)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 15, color: 'var(--text-3)',
              transition: 'border-color 0.15s',
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--border-md)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
            title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {dark ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </header>
  )
}
