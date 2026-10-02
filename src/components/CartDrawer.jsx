import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useLockBody } from '../hooks/useLockBody'
import { formatPrice } from '../data/products'
import { Button } from './Button'
import { CloseIcon, MinusIcon, PlusIcon } from './Icons'
import { ProductImage } from './ProductImage'

/**
 * Slide-out cart. Stays mounted so open/close are interruptible CSS transitions:
 * enter 440ms / exit 320ms on the iOS drawer curve, overlay fades alongside.
 */
export function CartDrawer() {
  const { items, count, subtotal, isOpen, close, setQty, remove } = useCart()
  const panelRef = useRef(null)
  const closeBtnRef = useRef(null)
  useLockBody(isOpen)

  useEffect(() => {
    if (!isOpen) return undefined
    const t = window.setTimeout(() => closeBtnRef.current?.focus({ preventScroll: true }), 60)
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'Tab' && panelRef.current) {
        const focusables = panelRef.current.querySelectorAll('a[href], button:not([disabled]), input, [tabindex]:not([tabindex="-1"])')
        if (!focusables.length) return
        const first = focusables[0]
        const last = focusables[focusables.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.clearTimeout(t)
      window.removeEventListener('keydown', onKey)
    }
  }, [isOpen, close])

  return (
    <>
      <div
        data-open={isOpen}
        onClick={close}
        className="drawer-overlay fixed inset-0 z-50 bg-espresso/25"
        aria-hidden="true"
      />
      <aside
        ref={panelRef}
        data-open={isOpen}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-title"
        aria-hidden={!isOpen}
        className="drawer fixed inset-y-0 right-0 z-50 flex w-full max-w-[440px] flex-col bg-cream shadow-soft"
      >
        <div className="flex items-center justify-between border-b border-espresso/[0.07] px-6 py-5 md:px-8">
          <h2 id="cart-title" className="serif-display text-[26px]">
            Your cart{' '}
            <span className="ml-1 font-sans text-[12px] uppercase tracking-label text-stone">
              {count > 0 ? `${count} item${count === 1 ? '' : 's'}` : 'Empty'}
            </span>
          </h2>
          <button
            ref={closeBtnRef}
            type="button"
            onClick={close}
            aria-label="Close cart"
            className="pressable -mr-2 flex h-10 w-10 items-center justify-center rounded-full text-espresso hover:bg-espresso/[0.05]"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 md:px-8">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-start justify-center gap-5 py-16">
              <p className="serif-display text-[28px] text-espresso/80">Nothing here yet.</p>
              <p className="max-w-[28ch] text-[14px] leading-relaxed text-stone">
                Pieces you add will wait here for you. Take your time.
              </p>
              <Button to="/shop" variant="secondary" size="sm" onClick={close}>
                Browse the collection
              </Button>
            </div>
          ) : (
            <ul className="divide-y divide-espresso/[0.07]">
              {items.map(({ product, qty }) => (
                <li key={product.id} className="flex gap-5 py-6">
                  <Link
                    to={`/shop/${product.slug}`}
                    onClick={close}
                    className="relative aspect-[4/5] w-24 shrink-0 overflow-hidden rounded-[3px] bg-ivory"
                  >
                    <ProductImage
                      src={product.images.white}
                      alt={product.name}
                      name={product.name}
                      kind={product.kind}
                      tone="white"
                      fit="contain"
                      compact
                    />
                  </Link>
                  <div className="flex min-w-0 flex-1 flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <Link to={`/shop/${product.slug}`} onClick={close} className="serif-display block truncate text-[21px]">
                          {product.name}
                        </Link>
                        <p className="label mt-1 text-[10px]">{product.tag}</p>
                      </div>
                      <p className="shrink-0 font-sans text-[13px] tabular-nums">{formatPrice(product.price * qty)}</p>
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-4">
                      <div className="flex items-center rounded-full border border-espresso/15">
                        <button
                          type="button"
                          onClick={() => setQty(product.id, qty - 1)}
                          aria-label={`Decrease quantity of ${product.name}`}
                          className="pressable flex h-8 w-8 items-center justify-center rounded-full text-espresso hover:bg-espresso/[0.05]"
                        >
                          <MinusIcon />
                        </button>
                        <span className="w-6 text-center font-sans text-[13px] tabular-nums" aria-live="polite">
                          {qty}
                        </span>
                        <button
                          type="button"
                          onClick={() => setQty(product.id, qty + 1)}
                          aria-label={`Increase quantity of ${product.name}`}
                          className="pressable flex h-8 w-8 items-center justify-center rounded-full text-espresso hover:bg-espresso/[0.05]"
                        >
                          <PlusIcon />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => remove(product.id)}
                        className="link-line font-sans text-[11px] uppercase tracking-label text-stone hover:text-espresso"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-espresso/[0.07] px-6 py-6 md:px-8">
            <div className="flex items-baseline justify-between">
              <span className="label">Subtotal</span>
              <span className="serif-display text-[24px] tabular-nums">{formatPrice(subtotal)}</span>
            </div>
            <p className="mt-2 text-[12px] leading-relaxed text-stone">
              Complimentary white-glove delivery across Greater Malé. Prices include GST.
            </p>
            <Button className="mt-5 w-full" size="lg" onClick={close}>
              Proceed to checkout
            </Button>
            <p className="mt-3 text-center text-[12px] leading-relaxed text-stone">This is a Nuit Works concept. Nothing is sent and no payment is taken.</p>
          </div>
        )}
      </aside>
    </>
  )
}
