import Navbar from './Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <div className="bg-[#FAF8F6] min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <footer className="border-t border-rose-100/80 py-10 text-center text-rose-800/80 bg-white/60 backdrop-blur">
        <p className="text-sm">© {new Date().getFullYear()} Your Name — Built with care.</p>
      </footer>
    </div>
  )
}
