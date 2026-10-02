import { Link } from 'react-router-dom'
import { formatPrice } from '../data/products'
import { ProductImage } from './ProductImage'

/**
 * Product card. The white shot sits underneath; the lifestyle shot crossfades in on hover
 * (fine pointers only, 380ms ease). `revealPrice` hides the price until hover on the homepage grid.
 */
export function ProductCard({ product, revealPrice = false, priority = false }) {
  return (
    <article className="product-card group" data-reveal-price={revealPrice}>
      <Link to={`/shop/${product.slug}`} className="block rounded-[3px] focus-visible:outline-offset-4">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[3px] bg-ivory">
          <ProductImage
            src={product.images.white}
            alt={`${product.name} on a white background`}
            name={product.name}
            kind={product.kind}
            tone="white"
            fit="contain"
            loading={priority ? 'eager' : 'lazy'}
          />
          <ProductImage
            src={product.images.lifestyle}
            alt=""
            name={product.name}
            kind={product.kind}
            tone="lifestyle"
            className="card-lifestyle"
            aria-hidden="true"
          />
          {product.isNew && (
            <span className="label absolute left-4 top-4 rounded-full bg-cream/90 px-3 py-1.5 text-[10px] text-espresso backdrop-blur-sm">
              New
            </span>
          )}
        </div>
        <div className="mt-4 flex items-baseline justify-between gap-4">
          <div className="min-w-0">
            <h3 className="serif-display truncate text-[22px]">{product.name}</h3>
            <p className="label mt-1.5 text-[10px]">{product.tag}</p>
          </div>
          <p className="card-price-reveal shrink-0 font-sans text-[13px] tabular-nums text-espresso">
            {formatPrice(product.price)}
          </p>
        </div>
      </Link>
    </article>
  )
}
