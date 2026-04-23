import { useState } from 'react'
import { Link, useLocation } from 'react-router'
import logo from '../assets/logo.webp'

const NAV_LINKS = [
  { label: 'Menu',         to: '/menu' },
  { label: 'Reservations', to: '/reservations' },
  { label: 'Functions',    to: '/functions' },
  { label: 'Order', to: '/order' },
  { label: 'Events', to: '/events' },
  { label: 'Catering', to: '/catering' }
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <header className="sticky top-0 z-50 bg-crema-gray border-b border-beige">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">

        {/* Logo */}
        <Link to="/" onClick={() => setOpen(false)} className="shrink-0">
          <img src={logo} alt="Logo" className="h-13 w-auto" />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, to }) => (
            <li key={to}>
              <Link
                to={to}
                className={[
                  'font-sans text-sm font-medium tracking-wide transition-colors duration-150',
                  pathname === to
                    ? 'text-oro border-b-2 border-oro pb-0.5'
                    : 'text-testo hover:text-oro',
                ].join(' ')}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger button — mobile only */}
        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded focus-visible:outline-2 focus-visible:outline-oro"
        >
          <span
            className={[
              'block h-0.5 w-6 bg-testo rounded transition-all duration-200 origin-center',
              open ? 'translate-y-2 rotate-45' : '',
            ].join(' ')}
          />
          <span
            className={[
              'block h-0.5 w-6 bg-testo rounded transition-all duration-200',
              open ? 'opacity-0 scale-x-0' : '',
            ].join(' ')}
          />
          <span
            className={[
              'block h-0.5 w-6 bg-testo rounded transition-all duration-200 origin-center',
              open ? '-translate-y-2 -rotate-45' : '',
            ].join(' ')}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={[
          'md:hidden overflow-hidden transition-all duration-300 ease-in-out',
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
        ].join(' ')}
      >
        <ul className="flex flex-col px-4 pb-4 gap-1 bg-crema border-t border-beige">
          {NAV_LINKS.map(({ label, to }) => (
            <li key={to}>
              <Link
                to={to}
                onClick={() => setOpen(false)}
                className={[
                  'block py-3 font-sans text-base font-medium border-b border-beige/60 transition-colors duration-150',
                  pathname === to ? 'text-oro' : 'text-testo hover:text-oro',
                ].join(' ')}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
