import { decor } from '../data/decor'
import { Button } from './Button'

/**
 * Full-bleed hero. First-visit tier: the image settles from scale(1.045) over 1.8s,
 * the copy rises in three staggered steps. CSS animations so nothing stutters while fonts/images load.
 */
export function Hero() {
  const img = decor.hero
  return (
    <section className="relative isolate h-[92svh] min-h-[560px] w-full overflow-hidden bg-sand">
      <div className="hero-media absolute inset-0">
        <img
          src={img.src}
          alt={img.alt}
          className={`h-full w-full object-cover ${img.soften ? 'scale-[1.03] blur-[2px]' : ''}`}
          style={{ objectPosition: img.position }}
          fetchpriority="high"
          decoding="async"
        />
      </div>
      {/* Soft cream veil at the base so the copy sits calmly on the photo */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-cream/90 via-cream/35 via-45% to-transparent" aria-hidden="true" />

      <div className="container-site relative flex h-full flex-col justify-end pb-14 md:pb-20">
        <p className="rise label mb-5 text-espresso/80" style={{ '--d': '180ms' }}>
          The living room collection
        </p>
        <h1 className="rise serif-display max-w-[13ch] text-[46px] text-espresso md:text-[72px]" style={{ '--d': '260ms' }}>
          Furniture for the quiet hours.
        </h1>
        <div className="rise mt-8 flex flex-wrap items-center gap-4" style={{ '--d': '380ms' }}>
          <Button to="/shop" size="lg">
            Shop the collection
          </Button>
          <Button to="/story" variant="ghost" size="lg" className="text-espresso/80">
            Our story
          </Button>
        </div>
      </div>
    </section>
  )
}
