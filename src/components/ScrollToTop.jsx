import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Route changes jump to the top instantly — navigation is not something to animate. */
export function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])
  return null
}
