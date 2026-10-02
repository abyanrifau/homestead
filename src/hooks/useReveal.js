import { useEffect, useRef } from 'react'

/**
 * Adds `.is-in` once the element enters the viewport. Fires once.
 * Falls back to visible if IntersectionObserver is unavailable.
 */
export function useReveal({ rootMargin = '0px 0px -8% 0px', threshold = 0.08 } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined
    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('is-in')
      return undefined
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('is-in')
            io.disconnect()
          }
        })
      },
      { rootMargin, threshold },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [rootMargin, threshold])

  return ref
}
