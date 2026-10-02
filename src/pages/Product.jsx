import { usePageMeta } from '../hooks/usePageMeta'
import { NotFound } from './NotFound'
import { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AccordionItem } from '../components/Accordion'
import { Button } from '../components/Button'
import { ProductGrid } from '../components/ProductGrid'
import { ProductImage } from '../components/ProductImage'
import { Reveal } from '../components/Reveal'
import { useCart } from '../context/CartContext'
import { formatPrice, getProduct, products } from '../data/products'

export function Product() {
  const { slug } = useParams()
  const product = getProduct(slug)
  const { add, open } = useCart()
  const [view, setView] = useState('white')
  const [added, setAdded] = useState(false)
  const addBtnRef = useRef(null)
  const timer = useRef(null)
  usePageMeta(product && `${product.name} — Homestead`, product && `${product.blurb} ${product.tag}. ${formatPrice(product.price)}, from Homestead.`)

  useEffect(() => {
    setView('white')
    setAdded(false)
  }, [slug])

  useEffect(() => () => window.clearTimeout(timer.current), [])

  if (!product) return <NotFound />

  const others = products.filter((p) => p.id !== product.id).slice(0, 3)

  const handleAdd = () => {
    add(product.id, 1)
    setAdded(true)
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setAdded(false), 1600)
    open(addBtnRef.current)
  }

  const views = [
    { key: 'white', src: product.images.white, label: 'Studio', alt: `${product.name} on a white background`, fit: 'contain' },
    { key: 'lifestyle', src: product.images.lifestyle, label: 'In the room', alt: `${product.name} styled in a living room`, fit: 'cover' },
    ...(product.images.detail
      ? [{ key: 'detail', src: product.images.detail, label: 'Detail', alt: `${product.name}, close detail`, fit: 'cover' }]
      : []),
  ]

  return (
    <div className="pt-24 md:pt-32">
      <div className="container-site">
        <nav aria-label="Breadcrumb" className="label mb-8 flex items-center gap-3 text-[10px]">
          <Link to="/shop" className="link-line hover:text-espresso">
            Shop
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-espresso/70">{product.kind}</span>
        </nav>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Gallery */}
          <div className="lg:col-span-7">
            <div className="lg:sticky lg:top-28">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[3px] bg-ivory">
                {views.map((v) => (
                  <ProductImage
                    key={v.key}
                    src={v.src}
                    alt={v.alt}
                    name={product.name}
                    kind={product.kind}
                    tone={v.key}
                    fit={v.fit}
                    loading="eager"
                    className={`gallery-img ${view === v.key ? 'opacity-100' : 'opacity-0'}`}
                    aria-hidden={view !== v.key}
                  />
                ))}
              </div>
              <div className="mt-4 flex gap-3" role="tablist" aria-label="Product views">
                {views.map((v) => {
                  const active = view === v.key
                  return (
                    <button
                      key={v.key}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      onClick={() => setView(v.key)}
                      className="pressable group flex flex-col items-start gap-2"
                    >
                      <span
                        className={`relative block aspect-[4/5] w-20 overflow-hidden rounded-[3px] bg-ivory ring-1 transition-[box-shadow,opacity] duration-200 ease ${active ? 'ring-espresso/60' : 'opacity-70 ring-espresso/10 group-hover:opacity-100'}`}
                      >
                        <ProductImage src={v.src} alt="" name={product.name} kind={product.kind} tone={v.key} fit={v.fit} compact />
                      </span>
                      <span className={`label text-[10px] ${active ? 'text-espresso' : ''}`}>{v.label}</span>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-5">
            <Reveal>
              <p className="label mb-4">
                {product.category} · {product.tag}
              </p>
              <h1 className="serif-display text-[40px] md:text-[52px]">{product.name}</h1>
              <p className="mt-4 font-sans text-[16px] tabular-nums text-espresso">{formatPrice(product.price)}</p>
              <p className="mt-6 font-serif text-[22px] italic leading-snug text-espresso/85">{product.blurb}</p>
              <p className="mt-5 text-[15px] leading-relaxed text-stone">{product.description}</p>

              <dl className="mt-8 grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 border-t border-espresso/[0.08] pt-6 text-[13px]">
                <dt className="label text-[10px]">Dimensions</dt>
                <dd className="text-espresso/85">{product.dimensions}</dd>
                <dt className="label text-[10px]">Lead time</dt>
                <dd className="text-espresso/85">Made to order · 6–8 weeks</dd>
              </dl>

              <Button
                ref={addBtnRef}
                size="lg"
                onClick={handleAdd}
                className="relative mt-8 w-full overflow-hidden sm:w-auto sm:min-w-[240px]"
                aria-live="polite"
              >
                <span className={`swap-label ${added ? '-translate-y-2 opacity-0' : 'translate-y-0 opacity-100'}`}>
                  Add to cart
                </span>
                <span
                  className={`swap-label absolute inset-0 flex items-center justify-center ${added ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}
                  aria-hidden={!added}
                >
                  Added
                </span>
              </Button>
              <p className="mt-4 text-[12px] text-stone">Complimentary delivery in Greater Malé · 60-day returns · GST included</p>

              <div className="mt-10 border-t border-espresso/[0.08]">
                <AccordionItem title="Materials & Care" defaultOpen>
                  <ul className="space-y-1.5">
                    {product.materials.map((m) => (
                      <li key={m}>{m}</li>
                    ))}
                  </ul>
                  <p className="mt-4">{product.care}</p>
                </AccordionItem>
                <AccordionItem title="Shipping & Returns">
                  <p>
                    Every piece is made to order and delivered by our own two-person team to the room of your
                    choice, unpacked and assembled. Delivery is complimentary across Malé, Hulhumalé and
                    Villimalé. For resorts and the atolls we arrange sea freight by launch or dhoni, quoted on
                    request.
                  </p>
                  <p className="mt-3">
                    Live with it for 60 days. If it isn’t right, we will collect it and refund you in full.
                  </p>
                </AccordionItem>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <section className="container-site mt-28 pb-24 md:mt-36 md:pb-32">
        <Reveal className="mb-12 flex items-end justify-between">
          <div>
            <p className="label mb-4">You may also like</p>
            <h2 className="serif-display text-[34px] md:text-[42px]">Pieces that sit well together</h2>
          </div>
        </Reveal>
        <ProductGrid key={product.id} products={others} />
      </section>
    </div>
  )
}
