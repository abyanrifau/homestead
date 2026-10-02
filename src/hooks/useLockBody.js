import { useEffect } from 'react'

/** Locks body scroll while `locked` is true, compensating for the scrollbar so nothing shifts. */
export function useLockBody(locked) {
  useEffect(() => {
    if (!locked) return undefined
    const { body, documentElement } = document
    const scrollbar = window.innerWidth - documentElement.clientWidth
    const prevOverflow = body.style.overflow
    const prevPadding = body.style.paddingRight
    body.style.overflow = 'hidden'
    if (scrollbar > 0) body.style.paddingRight = `${scrollbar}px`
    return () => {
      body.style.overflow = prevOverflow
      body.style.paddingRight = prevPadding
    }
  }, [locked])
}
