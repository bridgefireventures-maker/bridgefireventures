import { createContext, useContext, useState, useEffect } from 'react'

const ThemeCtx = createContext()

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    document.body.className = dark ? 'dark' : 'light'
  }, [dark])

  return (
    <ThemeCtx.Provider value={{ dark, toggle: () => setDark(d => !d) }}>
      {children}
    </ThemeCtx.Provider>
  )
}

export const useTheme = () => useContext(ThemeCtx)

// Design tokens — light and dark
export function tokens(dark) {
  return dark ? {
    bg:       '#0f0d1a',
    surface:  '#16131f',
    card:     '#1c192a',
    border:   '#2e2a40',
    borderMd: '#3e3a55',
    text:     '#f0ebe0',
    muted:    '#9a94b4',
    dim:      '#5a5478',
    inputBg:  '#1c192a',
    serif:    "'Playfair Display', Georgia, serif",
    mono:     "'JetBrains Mono', monospace",
    sans:     "'Plus Jakarta Sans', system-ui, sans-serif",
    // CEO accent colours — same in both modes
    arjun:  { main:'#f59e0b', soft:'#fef3c720', border:'#92400e40', tag:'#78350f', tagBg:'#fef3c7' },
    sakura: { main:'#ec4899', soft:'#fce7f320', border:'#9d174d40', tag:'#831843', tagBg:'#fce7f3' },
    cipher: { main:'#8b5cf6', soft:'#ede9fe20', border:'#4c1d9540', tag:'#3730a3', tagBg:'#ede9fe' },
    pixel:  { main:'#eab308', soft:'#fefce820', border:'#71350040', tag:'#713f12', tagBg:'#fefce8' },
    echo:   { main:'#10b981', soft:'#d1fae520', border:'#06522840', tag:'#064e3b', tagBg:'#d1fae5' },
    atlas:  { main:'#3b82f6', soft:'#dbeafe20', border:'#1e3a8a40', tag:'#1e3a8a', tagBg:'#dbeafe' },
    gold:   '#f59e0b',
  } : {
    bg:       '#f7f5f2',
    surface:  '#ffffff',
    card:     '#ffffff',
    border:   '#e7e2da',
    borderMd: '#d4cdc4',
    text:     '#1c1917',
    muted:    '#57534e',
    dim:      '#a8a29e',
    inputBg:  '#faf9f7',
    serif:    "'Playfair Display', Georgia, serif",
    mono:     "'JetBrains Mono', monospace",
    sans:     "'Plus Jakarta Sans', system-ui, sans-serif",
    arjun:  { main:'#d97706', soft:'#fef3c760', border:'#d9770640', tag:'#78350f', tagBg:'#fef3c7' },
    sakura: { main:'#db2777', soft:'#fce7f360', border:'#db277740', tag:'#831843', tagBg:'#fce7f3' },
    cipher: { main:'#7c3aed', soft:'#ede9fe60', border:'#7c3aed40', tag:'#3730a3', tagBg:'#ede9fe' },
    pixel:  { main:'#ca8a04', soft:'#fefce860', border:'#ca8a0440', tag:'#713f12', tagBg:'#fefce8' },
    echo:   { main:'#059669', soft:'#d1fae560', border:'#05966940', tag:'#064e3b', tagBg:'#d1fae5' },
    atlas:  { main:'#2563eb', soft:'#dbeafe60', border:'#2563eb40', tag:'#1e3a8a', tagBg:'#dbeafe' },
    gold:   '#d97706',
  }
}
