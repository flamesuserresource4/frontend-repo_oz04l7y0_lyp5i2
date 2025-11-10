import { NavLink, Link } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const linkBase = 'px-4 py-2 rounded-full text-sm tracking-wide transition-colors'
  const inactive = 'text-rose-700/80 hover:text-rose-900 hover:bg-rose-100/70'
  const active = 'text-rose-900 bg-rose-100 shadow-sm'

  const items = [
    { to: '/', label: 'Home', end: true },
    { to: '/about', label: 'About' },
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-40 bg-white/75 backdrop-blur-xl border-b border-rose-100/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="font-semibold tracking-widest text-rose-900">
            <span className="text-[14px] align-top">•</span> My Portfolio
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
            className="md:hidden p-2 rounded-full hover:bg-rose-100 text-rose-800"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-rose-100/80 bg-white/90 backdrop-blur-md">
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
