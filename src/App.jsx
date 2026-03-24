import { Routes, Route } from 'react-router-dom'
import { ThemeProvider, useTheme, tokens } from './theme.jsx'
import Nav from './components/Nav.jsx'
import Overview from './pages/Overview.jsx'
import Warriors from './pages/Warriors.jsx'
import Trading from './pages/Trading.jsx'
import Roadmap from './pages/Roadmap.jsx'
import Setup from './pages/Setup.jsx'

function Layout() {
  const { dark } = useTheme()
  const t = tokens(dark)
  return (
    <div style={{ display:'flex', minHeight:'100vh', background:t.bg }}>
      <Nav/>
      <main style={{ flex:1, overflowY:'auto' }}>
        <Routes>
          <Route path="/"         element={<Overview/>}/>
          <Route path="/warriors" element={<Warriors/>}/>
          <Route path="/trading"  element={<Trading/>}/>
          <Route path="/roadmap"  element={<Roadmap/>}/>
          <Route path="/setup"    element={<Setup/>}/>
        </Routes>
      </main>
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <Layout/>
    </ThemeProvider>
  )
}
