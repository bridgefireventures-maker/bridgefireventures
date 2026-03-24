import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Overview from './pages/Overview.jsx'
import Warriors from './pages/Warriors.jsx'
import Trading from './pages/Trading.jsx'
import Roadmap from './pages/Roadmap.jsx'
import Setup from './pages/Setup.jsx'
import { T } from './tokens.js'

export default function App() {
  return (
    <div style={{ display:'flex', minHeight:'100vh', background:T.bg }}>
      <Nav/>
      <main style={{ flex:1, overflowY:'auto', minHeight:'100vh' }}>
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
