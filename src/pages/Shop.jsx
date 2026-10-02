import { usePageMeta } from '../hooks/usePageMeta'
import { useMemo, useState } from 'react'
import { ProductGrid } from '../components/ProductGrid'
import { Reveal } from '../components/Reveal'
import { CATEGORIES, products } from '../data/products'

const SORTS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price, low to high' },
  { value: 'price-desc', label: 'Price, high to low' },
]

const GROUPS = ['All', CATEGORIES.LIVING, CATEGORIES.ACCENTS]

export function Shop() {
  usePageMeta('Shop all pieces — Homestead', 'Sofas, tables, lighting and accents in oak, linen and stone. Six quiet pieces for the living room, delivered across Greater Malé.')
  const [sort, setSort] = useState('featured')
  const [group, setGroup] = useState('All')

  const visible = useMemo(() => {
    const list = products.filter((p) => group === 'All' || p.category === group)
    if (sort === 'price-asc') return [...list].sort((a, b) => a.price - b.price)
    if (sort === 'price-desc') return [...list].sort((a, b) => b.price - a.price)
    return list
  }, [sort, group])

  return (
    <div className="pt-28 md:pt-36">
      <section className="container-site pb-24 md:pb-32">
        <Reveal className="max-w-2xl">
          <p className="label mb-4">The collection</p>
          <h1 className="serif-display text-[44px] md:text-[64px]">Living room</h1>
          <p className="mt-5 max-w-[46ch] text-[15px] leading-relaxed text-stone">
            Six pieces, edited to what a living room actually needs. Each one is made to order in natural
            materials and finished by hand.
          </p>
        </Reveal>

        <Reveal
          delay={60}
          className="mt-12 flex flex-col gap-5 border-y border-espresso/[0.08] py-4 md:flex-row md:items-center md:justify-between"
        >
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2" role="group" aria-label="Filter by group">
            {GROUPS.map((g) => (
              <button
                key={g}
                type="button"
                onClick={() => setGroup(g)}
                aria-pressed={group === g}
                className={`link-line pressable font-sans text-[12px] uppercase tracking-label ${group === g ? 'text-espresso' : 'text-stone hover:text-espresso'}`}
                aria-current={group === g ? 'page' : undefined}
              >
                {g}
              </button>
            ))}
          </div>

          <label className="flex items-center gap-3 font-sans text-[12px] uppercase tracking-label text-stone">
            <span>Sort</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="select-minimal cursor-pointer bg-transparent font-sans text-[12px] uppercase tracking-label text-espresso focus:outline-none"
            >
              {SORTS.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
          </label>
        </Reveal>

        <p className="label mt-8 text-[10px]" aria-live="polite">
          {visible.length} piece{visible.length === 1 ? '' : 's'}
        </p>

        <ProductGrid key={`${group}-${sort}`} products={visible} className="mt-8" />
      </section>
    </div>
  )
}
