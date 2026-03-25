import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './theme.jsx'
import TopNav from './components/TopNav.jsx'
import Overview from './pages/Overview.jsx'
import Warriors from './pages/Warriors.jsx'
import Trading from './pages/Trading.jsx'
import Roadmap from './pages/Roadmap.jsx'
import Setup from './pages/Setup.jsx'

function Layout() {
  return (
    <>
      <TopNav/>
      <Routes>
        <Route path="/"         element={<Overview/>}/>
        <Route path="/warriors" element={<Warriors/>}/>
        <Route path="/trading"  element={<Trading/>}/>
        <Route path="/roadmap"  element={<Roadmap/>}/>
        <Route path="/setup"    element={<Setup/>}/>
      </Routes>
    </>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <Layout/>
    </ThemeProvider>
  )
}
