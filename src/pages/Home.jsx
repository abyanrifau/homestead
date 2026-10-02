import { usePageMeta } from '../hooks/usePageMeta'
import { Hero } from '../components/Hero'
import { FeaturedIntro, Newsletter, StoryTeaser, Testimonials, TrustStrip } from '../components/HomeSections'
import { InstagramStrip } from '../components/InstagramStrip'
import { ProductGrid } from '../components/ProductGrid'
import { products } from '../data/products'

export function Home() {
  usePageMeta('Homestead — Quiet furniture for calm homes', 'Modern living room furniture in natural materials. Understated luxury, made to stay.')
  return (
    <>
      <Hero />

      <section className="py-24 md:py-32">
        <div className="container-site">
          <FeaturedIntro />
          <ProductGrid products={products} revealPrice />
        </div>
      </section>

      <StoryTeaser />
      <Testimonials />
      <TrustStrip />
      <InstagramStrip />
      <Newsletter />
    </>
  )
}
