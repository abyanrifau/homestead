import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { decor } from '../data/decor'
import { useScrolled } from '../hooks/useScrolled'
import { BagIcon, CloseIcon, MenuIcon } from './Icons'

const links = [
  { to: '/shop', label: 'Shop' },
  { to: '/story', label: 'Story' },
  { to: '/contact', label: 'Contact' },
]

/**
 * Sticky nav. Transparent over the homepage hero, condenses to a frosted cream bar on scroll.
 * Condensing is transform-only (inner row translate + wordmark scale); the bar's own height never animates.
 */
export function Navbar() {
  const { count, open, isOpen } = useCart()
  const scrolled = useScrolled(32)
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const cartBtnRef = useRef(null)
  const headerRef = useRef(null)
  const transparentAtTop = pathname === '/'
  const solid = scrolled || !transparentAtTop || menuOpen
  // Over the hero photograph the bar is transparent; its text colour follows the photo (decor.hero.navInk)
  // and returns to espresso as the bar turns solid.
  const ink = solid || decor.hero.navInk !== 'light' ? 'text-espresso' : 'text-cream'
  const inkTransition = 'transition-colors duration-300 ease'

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!menuOpen) return undefined
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false)
    const onPointer = (e) => headerRef.current && !headerRef.current.contains(e.target) && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onPointer)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onPointer)
    }
  }, [menuOpen])

  return (
    <header ref={headerRef} className="fixed inset-x-0 top-0 z-40">
      <div className={`nav-bar ${solid ? 'is-solid' : ''}`}>
        <div className="container-site">
          <div className="nav-inner flex h-16 items-center justify-between">
            <Link to="/" className={`nav-mark serif-display text-[24px] font-semibold tracking-[0.02em] ${ink} ${inkTransition}`} aria-label="Homestead home">
              Homestead
            </Link>

            <nav className="hidden items-center gap-10 md:flex" aria-label="Primary">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className={`link-line font-sans text-[12px] uppercase tracking-label ${ink} ${inkTransition}`}
                >
                  {l.label}
                </NavLink>
              ))}
            </nav>

            <div className="flex items-center gap-1">
              <button
                ref={cartBtnRef}
                type="button"
                onClick={() => open(cartBtnRef.current)}
                aria-haspopup="dialog"
                aria-expanded={isOpen}
                aria-label={count > 0 ? `Open cart, ${count} item${count === 1 ? '' : 's'}` : 'Open cart'}
                className={`pressable relative -mr-2 flex h-10 w-10 items-center justify-center rounded-full ${ink} ${ink === 'text-cream' ? 'hover:bg-cream/10' : 'hover:bg-espresso/[0.05]'}`}
              >
                <BagIcon />
                {count > 0 && (
                  <span className={`absolute right-1 top-1 flex h-4 min-w-[16px] items-center justify-center rounded-full px-1 font-sans text-[10px] font-medium ${inkTransition} ${ink === 'text-cream' ? 'bg-cream text-espresso' : 'bg-walnut-deep text-cream'}`}>
                    {count}
                  </span>
                )}
              </button>
              <button
                type="button"
                onClick={() => setMenuOpen((v) => !v)}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                className={`pressable -mr-2 flex h-10 w-10 items-center justify-center rounded-full md:hidden ${ink} ${ink === 'text-cream' ? 'hover:bg-cream/10' : 'hover:bg-espresso/[0.05]'}`}
              >
                {menuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        data-open={menuOpen}
        className="menu-panel absolute inset-x-0 top-16 border-b border-espresso/[0.07] bg-cream/95 backdrop-blur-md md:hidden"
        aria-hidden={!menuOpen}
      >
        <nav className="container-site flex flex-col py-4" aria-label="Mobile">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              tabIndex={menuOpen ? 0 : -1}
              className="serif-display border-b border-espresso/[0.06] py-4 text-[28px] last:border-b-0"
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
