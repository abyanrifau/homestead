import { useEffect, useState } from 'react'

/** True once the window has scrolled past `offset` px. Passive listener, rAF-throttled. */
export function useScrolled(offset = 24) {
  const [scrolled, setScrolled] = useState(() => (typeof window === 'undefined' ? false : window.scrollY > offset))

  useEffect(() => {
    let ticking = false
    const update = () => {
      setScrolled(window.scrollY > offset)
      ticking = false
    }
    const onScroll = () => {
      if (!ticking) {
        ticking = true
        window.requestAnimationFrame(update)
      }
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [offset])

  return scrolled
}
