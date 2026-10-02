import { ProductCard } from './ProductCard'
import { Reveal } from './Reveal'

/** Responsive grid: 1 / 2 / 3 columns. Cards enter with a 60ms stagger. */
export function ProductGrid({ products, revealPrice = false, className = '' }) {
  return (
    <div className={`grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-16 ${className}`}>
      {products.map((p, i) => (
        <Reveal key={p.id} delay={(i % 3) * 60}>
          <ProductCard product={p} revealPrice={revealPrice} priority={i < 3} />
        </Reveal>
      ))}
    </div>
  )
}
