import { usePageMeta } from '../hooks/usePageMeta'
import { Link } from 'react-router-dom'
import { Button } from '../components/Button'
import { Reveal } from '../components/Reveal'
import { decor } from '../data/decor'
import { products } from '../data/products'

function Photo({ img, className = '', ratio = 'aspect-[4/5]' }) {
  return (
    <div className={`tile relative overflow-hidden rounded-[3px] bg-sand ${ratio} ${className}`}>
      <img
        src={img.src}
        alt={img.alt}
        loading="lazy"
        decoding="async"
        className="tile-media absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: img.position }}
      />
    </div>
  )
}

function PullQuote({ children, cite }) {
  return (
    <Reveal as="figure" className="mx-auto max-w-3xl py-8 text-center">
      <blockquote className="font-serif text-[30px] font-normal italic leading-tight text-espresso md:text-[40px]">
        “{children}”
      </blockquote>
      {cite && <figcaption className="label mt-6">{cite}</figcaption>}
    </Reveal>
  )
}

const productLink = (id) => {
  const p = products.find((x) => x.id === id)
  return (
    <Link to={`/shop/${p.slug}`} className="link-line text-espresso">
      {p.name}
    </Link>
  )
}

export function Story() {
  usePageMeta('Our story — Homestead', 'Why Homestead makes furniture slowly: natural materials, careful joinery and pieces meant to stay for decades.')
  return (
    <div className="pt-24 md:pt-32">
      {/* Intro */}
      <section className="container-site">
        <Reveal className="max-w-3xl">
          <p className="label mb-5">Our story</p>
          <h1 className="serif-display text-[46px] md:text-[72px]">
            A home should feel <em className="font-normal italic">settled</em>.
          </h1>
          <p className="mt-8 max-w-[52ch] text-[16px] leading-relaxed text-stone md:text-[17px]">
            Homestead began in a small workshop in Hulhumalé with one question: what if furniture asked less
            of us? Less looking-after, less replacing, less noise. We make a handful of living room pieces in
            oak, ash, linen, and stoneware for homes across the Maldives, and we make them properly.
          </p>
        </Reveal>
        <Reveal delay={80} className="mt-14">
          <Photo img={decor.aboutHero} ratio="aspect-[4/5] md:aspect-[3/2]" />
        </Reveal>
      </section>

      {/* Craftsmanship */}
      <section className="container-site py-24 md:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="label mb-5">Craftsmanship</p>
            <h2 className="serif-display text-[36px] md:text-[46px]">Joinery you can see, and trust.</h2>
            <p className="mt-6 text-[15px] leading-relaxed text-stone">
              We still cut joints the old way — wedged tenons, dowels, corner blocks — because they hold
              for decades and they are honest about how a thing is made. Our timber is kiln-dried oak and
              ash from certified forests, shipped to Malé by sea and rested in the workshop until it has
              settled into island humidity. Every finish is a plant-based oil you could put on a chopping
              board.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-stone">
              The {productLink('stool')} is the clearest example: four turned legs, wedged through the seat,
              no screws, no apology.
            </p>
          </Reveal>
          <Reveal delay={80} className="grid grid-cols-2 gap-4 lg:col-span-7">
            <Photo img={decor.craftOne} className="mt-10" />
            <Photo img={decor.craftTwo} />
          </Reveal>
        </div>
      </section>

      {/* Owner */}
      <section className="bg-linen py-24 md:py-32">
        <div className="container-site grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <div className="relative mx-auto aspect-[4/5] max-w-[420px] overflow-hidden rounded-[3px] bg-sand">
              <img
                src="/images/craft/owner.png"
                alt="Aain Husham, founder of Homestead, in a dark suit"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover object-top mix-blend-multiply"
              />
            </div>
          </Reveal>
          <Reveal delay={80} className="lg:col-span-6 lg:col-start-7">
            <p className="label mb-5">The owner</p>
            <h2 className="serif-display text-[36px] md:text-[46px]">Aain Husham</h2>
            <p className="label mt-3 text-[10px]">Founder, Homestead</p>
            <blockquote className="mt-8 font-serif text-[24px] font-normal italic leading-snug text-espresso md:text-[28px]">
              “After I got my soft Korean haircut, I was thinking to myself after a sick raalhu session,
              ‘I should really open a furniture store or something.’ And honestly, that’s exactly what I did.
              Now I’m out here selling furniture like I was born for it.”
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* Materials / sustainability */}
      <section className="container-site py-24 md:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <Reveal className="order-2 grid grid-cols-2 gap-4 lg:order-1 lg:col-span-7">
            <Photo img={decor.materialsOne} />
            <Photo img={decor.materialsTwo} className="mt-10" />
          </Reveal>
          <Reveal delay={80} className="order-1 lg:order-2 lg:col-span-5 lg:pl-8">
            <p className="label mb-5">Materials</p>
            <h2 className="serif-display text-[36px] md:text-[46px]">Natural, undyed, and meant to age.</h2>
            <p className="mt-6 text-[15px] leading-relaxed text-stone">
              Linen that softens. Oak that darkens where hands rest. Stoneware that shows its clay. We choose
              materials that improve with use, and we avoid anything that only looks good on day one.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-stone">
              Salt air and humidity are hard on furniture, so ours is built for them: breathable natural
              fibres, solid timber instead of veneers, and brass rather than steel where metal meets wood.
              Our covers are removable, our cushions are refillable, and every piece can be repaired by the
              workshop that made it. Sustainability, to us, mostly means not throwing things away.
            </p>
          </Reveal>
        </div>
      </section>

      {/* The collection */}
      <section className="bg-linen py-24 md:py-32">
        <div className="container-site">
          <Reveal className="max-w-2xl">
            <p className="label mb-5">The collection</p>
            <h2 className="serif-display text-[36px] md:text-[46px]">How we chose these six.</h2>
          </Reveal>
          <div className="mt-12 grid gap-10 md:grid-cols-2 lg:gap-x-16">
            <Reveal className="space-y-5 text-[15px] leading-relaxed text-stone">
              <p>
                Every living room begins with a place to sit, so we started with the {productLink('sofa')}:
                deep, low, and forgiving. The {productLink('coffee-table')} came next, a single pebble of
                smoked oak that holds the room together without announcing itself.
              </p>
              <p>
                Light was the third piece. The {productLink('floor-lamp')} throws a warm, even pool through
                unlined linen — the difference between a room and an evening, once the sun drops behind the
                reef.
              </p>
            </Reveal>
            <Reveal delay={80} className="space-y-5 text-[15px] leading-relaxed text-stone">
              <p>
                Then the pieces that move. The {productLink('stool')} is a perch, a side table, a step. The{' '}
                {productLink('bean-bag')} is the extra seat you did not know you needed, in bouclé the colour
                of sage.
              </p>
              <p>
                And finally, something living. The {productLink('plant-pot')} is hand-thrown stoneware, left
                unglazed on the outside, made for a plant with presence. Six pieces. A whole room. Nothing
                you don’t need.
              </p>
            </Reveal>
          </div>
          <Reveal delay={120} className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3">
            <Photo img={decor.aboutEvening} />
            <Photo img={decor.aboutNook} />
            <Photo img={decor.aboutSofa} className="hidden md:block" />
          </Reveal>
        </div>
      </section>

      <section className="container-site py-24 md:py-32">
        <PullQuote>Good design is quiet. It lets the light, the people, and the years do the talking.</PullQuote>
        <Reveal className="mt-10 flex justify-center">
          <Button to="/shop" size="lg">
            See the collection
          </Button>
        </Reveal>
      </section>
    </div>
  )
}
