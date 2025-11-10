import Navbar from './Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <div className="bg-[#FAF8F5] text-[#333333] min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <footer className="border-t border-[#EADFD8] py-10 text-center bg-white/70 backdrop-blur">
        <p className="text-sm text-[#333333]/80">© {new Date().getFullYear()} Your Name — Crafted with care.</p>
      </footer>
    </div>
  )
}
