import { useState } from 'react'
import { decor } from '../data/decor'
import { Button, TextLink } from './Button'
import { ArrowIcon, HandIcon, ReturnIcon, TruckIcon } from './Icons'
import { Reveal } from './Reveal'

/* ---------- Brand story teaser ---------- */
export function StoryTeaser() {
  const big = decor.storyTeaser
  const small = decor.storyTeaserSmall
  return (
    <section className="bg-linen py-24 md:py-32">
      <div className="container-site grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
        <Reveal className="relative lg:col-span-7">
          <div className="tile relative aspect-[4/5] overflow-hidden rounded-[3px] bg-sand md:aspect-[5/4]">
            <img
              src={big.src}
              alt={big.alt}
              loading="lazy"
              decoding="async"
              className="tile-media h-full w-full object-cover"
              style={{ objectPosition: big.position }}
            />
          </div>
          <div className="tile absolute -bottom-8 -right-4 hidden w-[38%] overflow-hidden rounded-[3px] bg-sand shadow-soft md:block lg:-right-10">
            <div className="relative aspect-[3/4]">
              <img
                src={small.src}
                alt={small.alt}
                loading="lazy"
                decoding="async"
                className="tile-media absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </Reveal>
        <Reveal delay={80} className="lg:col-span-5 lg:pl-8">
          <p className="label mb-5">Our story</p>
          <h2 className="serif-display text-[36px] md:text-[46px]">
            Made slowly, from materials that <em className="font-normal italic">age well</em>.
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-stone">
            From our workshop in Hulhumalé we work with timber that arrives by sea and joiners who still cut by
            eye and tie springs by hand. Every piece is finished with natural oils and undyed textiles, chosen
            because they wear in rather than wear out, and because they stand up to island air.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-stone">
            The result is furniture that feels settled the day it arrives, and better ten years on.
          </p>
          <TextLink to="/story" className="mt-8">
            Read the full story <ArrowIcon size={14} />
          </TextLink>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- Testimonials ---------- */
const quotes = [
  {
    text: 'The Hollis is the first sofa we have owned that looks better in the evening than it does in the catalogue.',
    who: 'Aishath & Ibrahim, Hulhumalé',
  },
  {
    text: 'Homestead makes furniture the way I wish everything was made — quietly, and to last.',
    who: 'Kinfolk Home',
  },
  {
    text: 'A rare brand where the materials are the whole point.',
    who: 'Dwell',
  },
]

export function Testimonials() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-site">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="label mb-8">In good company</p>
        </Reveal>
        <div className="mx-auto grid max-w-5xl gap-14 md:grid-cols-3 md:gap-10">
          {quotes.map((q, i) => (
            <Reveal key={q.who} delay={i * 70} as="figure" className="text-center">
              <blockquote className="font-serif text-[24px] font-normal italic leading-snug text-espresso md:text-[26px]">
                “{q.text}”
              </blockquote>
              <figcaption className="label mt-6">{q.who}</figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- Trust indicators ---------- */
const trust = [
  { icon: TruckIcon, label: 'Complimentary delivery', sub: 'White-glove, across Greater Malé' },
  { icon: HandIcon, label: 'Craftsmanship guarantee', sub: 'Ten years, built for island air' },
  { icon: ReturnIcon, label: 'Easy returns', sub: '60 days to live with it' },
]

export function TrustStrip() {
  return (
    <section className="border-y border-espresso/[0.07]">
      <div className="container-site grid divide-y divide-espresso/[0.07] md:grid-cols-3 md:divide-x md:divide-y-0">
        {trust.map(({ icon: Icon, label, sub }, i) => (
          <Reveal key={label} delay={i * 60} className="flex items-center gap-5 py-7 md:justify-center md:px-8">
            <Icon className="shrink-0 text-walnut" />
            <div>
              <p className="font-sans text-[13px] font-medium text-espresso">{label}</p>
              <p className="mt-0.5 text-[12px] text-stone">{sub}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

/* ---------- Newsletter ---------- */
export function Newsletter() {
  const [state, setState] = useState('idle') // idle | done
  const [email, setEmail] = useState('')

  const submit = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setState('done')
  }

  return (
    <section className="bg-linen py-24 md:py-32">
      <div className="container-site">
        <Reveal className="mx-auto max-w-xl text-center">
          <p className="label mb-5">The Homestead list</p>
          <h2 className="serif-display text-[34px] md:text-[42px]">Early access to new pieces, a few times a year.</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-stone">
            No noise. Just first word on the next release, and the occasional note from the workshop.
          </p>

          <div className="relative mt-10 min-h-[56px]">
            <form
              onSubmit={submit}
              className={`mx-auto flex max-w-md items-center gap-3 border-b border-espresso/30 pb-3 transition-opacity duration-200 ${state === 'done' ? 'pointer-events-none opacity-0' : 'opacity-100'}`}
              aria-hidden={state === 'done'}
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                autoComplete="email"
                tabIndex={state === 'done' ? -1 : 0}
                className="h-10 flex-1 bg-transparent font-sans text-[14px] text-espresso placeholder:text-mist focus:outline-none"
              />
              <button
                type="submit"
                tabIndex={state === 'done' ? -1 : 0}
                className="pressable link-line font-sans text-[12px] uppercase tracking-label text-espresso"
              >
                Join
              </button>
            </form>
            <p
              className={`absolute inset-x-0 top-0 font-serif text-[22px] italic text-espresso transition-opacity duration-300 ${state === 'done' ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
              role="status"
              aria-live="polite"
            >
              {state === 'done' ? 'Thank you. We will be in touch, quietly.' : ''}
            </p>
          </div>
          <p className="mt-4 text-[12px] leading-relaxed text-stone">This is a Nuit Works concept. Nothing is sent and no payment is taken.</p>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- Featured intro ---------- */
export function FeaturedIntro() {
  return (
    <div className="mb-14 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
      <Reveal>
        <p className="label mb-4">The collection</p>
        <h2 className="serif-display text-[36px] md:text-[46px]">Six pieces. Nothing you don’t need.</h2>
      </Reveal>
      <Reveal delay={80}>
        <Button to="/shop" variant="secondary">
          View all
        </Button>
      </Reveal>
    </div>
  )
}
