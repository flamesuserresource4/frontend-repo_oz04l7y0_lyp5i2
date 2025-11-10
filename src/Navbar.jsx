import { NavLink, Link } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const linkBase = 'px-4 py-2 rounded-full text-sm tracking-wide transition-colors'
  const inactive = 'text-[#333333]/80 hover:text-[#333333] hover:bg-[#EBD8D5]/60'
  const active = 'text-[#333333] bg-[#EBD8D5] shadow-sm'

  const items = [
    { to: '/', label: 'Home', end: true },
    { to: '/about', label: 'About' },
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-40 bg-white/75 backdrop-blur-xl border-b border-[#EADFD8]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="font-semibold tracking-widest text-[#333333]">
            <span className="text-[14px] align-top text-[#D4AF37]">•</span> My Portfolio
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {items.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) => `${linkBase} ${isActive ? active : inactive}`}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <button
            className="md:hidden p-2 rounded-full hover:bg-[#EBD8D5]/60 text-[#333333]"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-[#EADFD8] bg-white/90 backdrop-blur-md">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-1">
            {items.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) => `${linkBase} ${isActive ? active : inactive}`}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
