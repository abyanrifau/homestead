import { instagramFeed } from '../data/decor'
import { InstagramIcon } from './Icons'
import { Reveal } from './Reveal'

export const IG_HANDLE = '@homestead.home'
export const IG_BIO = 'Quiet furniture for calm homes. Handcrafted pieces, made to stay.'

/** Static, mocked Instagram feed. Tiles get a near-imperceptible 1.025 lift on hover. */
export function InstagramStrip() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-site">
        <Reveal className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="label mb-4">Follow along</p>
            <h2 className="serif-display text-[34px] md:text-[42px]">{IG_HANDLE}</h2>
          </div>
          <p className="max-w-[36ch] text-[14px] leading-relaxed text-stone">{IG_BIO}</p>
        </Reveal>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6 md:gap-4">
          {instagramFeed.map((tile, i) => (
            <Reveal key={tile.src} delay={i * 50}>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                aria-label={`${tile.alt} (Instagram, mock)`}
                className="tile group relative block aspect-square overflow-hidden rounded-[3px] bg-sand"
              >
                <img
                  src={tile.src}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="tile-media h-full w-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.opacity = '0'
                  }}
                />
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-espresso/0 text-cream opacity-0 transition-opacity duration-300 ease group-hover:bg-espresso/15 group-hover:opacity-100">
                  <InstagramIcon size={22} />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
