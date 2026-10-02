import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { products } from '../data/products'

const CartContext = createContext(null)
const STORAGE_KEY = 'homestead.cart.v1'

function readStored() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed.filter((l) => products.some((p) => p.id === l.id)) : []
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [lines, setLines] = useState(readStored)
  const [isOpen, setIsOpen] = useState(false)
  const returnFocusRef = useRef(null)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines))
    } catch {
      /* storage unavailable — cart still works for the session */
    }
  }, [lines])

  const open = useCallback((trigger) => {
    returnFocusRef.current = trigger ?? document.activeElement
    setIsOpen(true)
  }, [])

  const close = useCallback(() => {
    setIsOpen(false)
    const el = returnFocusRef.current
    if (el && typeof el.focus === 'function') {
      // Return focus after the drawer has left.
      window.setTimeout(() => el.focus({ preventScroll: true }), 40)
    }
  }, [])

  const add = useCallback((id, qty = 1) => {
    setLines((prev) => {
      const existing = prev.find((l) => l.id === id)
      if (existing) return prev.map((l) => (l.id === id ? { ...l, qty: l.qty + qty } : l))
      return [...prev, { id, qty }]
    })
  }, [])

  const setQty = useCallback((id, qty) => {
    setLines((prev) => (qty <= 0 ? prev.filter((l) => l.id !== id) : prev.map((l) => (l.id === id ? { ...l, qty } : l))))
  }, [])

  const remove = useCallback((id) => setLines((prev) => prev.filter((l) => l.id !== id)), [])

  const value = useMemo(() => {
    const items = lines.map((l) => ({ ...l, product: products.find((p) => p.id === l.id) }))
    const count = items.reduce((n, l) => n + l.qty, 0)
    const subtotal = items.reduce((n, l) => n + l.qty * l.product.price, 0)
    return { items, count, subtotal, isOpen, open, close, add, setQty, remove }
  }, [lines, isOpen, open, close, add, setQty, remove])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used inside CartProvider')
  return ctx
}
