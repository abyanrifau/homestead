import { Link } from 'react-router-dom'
import { InstagramIcon } from './Icons'
import { IG_BIO, IG_HANDLE } from './InstagramStrip'

export const CONTACT_EMAIL = 'hello@homestead.mv'

const shop = [
  { to: '/shop', label: 'All pieces' },
  { to: '/shop/hollis-sofa', label: 'Hollis Sofa' },
  { to: '/shop/ester-coffee-table', label: 'Ester Coffee Table' },
  { to: '/shop/anders-floor-lamp', label: 'Anders Floor Lamp' },
]
const company = [
  { to: '/story', label: 'Our story' },
  { to: '/contact', label: 'Showroom' },
  { to: '/contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer className="border-t border-espresso/[0.07] bg-cream">
      <div className="container-site grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <Link to="/" className="serif-display text-[28px] font-semibold tracking-[0.02em]">
            Homestead
          </Link>
          <p className="mt-4 max-w-[30ch] font-serif text-[20px] italic leading-snug text-espresso/80">
            Quiet furniture for calm homes.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="link-line mt-8 inline-block font-sans text-[13px] text-espresso"
          >
            {CONTACT_EMAIL}
          </a>
        </div>

        <div className="md:col-span-2">
          <p className="label mb-5">Shop</p>
          <ul className="space-y-3">
            {shop.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="link-line font-sans text-[13px] text-espresso/85 hover:text-espresso">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="label mb-5">Homestead</p>
          <ul className="space-y-3">
            {company.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="link-line font-sans text-[13px] text-espresso/85 hover:text-espresso">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="label mb-5">Follow</p>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="link-line inline-flex items-center gap-2 font-sans text-[13px] text-espresso"
          >
            <InstagramIcon size={16} /> {IG_HANDLE}
          </a>
          <p className="mt-3 max-w-[30ch] text-[13px] leading-relaxed text-stone">{IG_BIO}</p>
        </div>
      </div>

      <div className="border-t border-espresso/[0.07]">
        <p className="container-site pt-6 font-sans text-[13px] leading-relaxed text-espresso/85">
          A{' '}
          <a href="https://nuit.works" target="_blank" rel="noopener" className="link-line text-espresso">
            Nuit Works
          </a>{' '}
          concept. Homestead is a fictional business.
        </p>
        <div className="container-site flex flex-col gap-3 py-6 text-[11px] uppercase tracking-label text-stone md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Homestead. Made to stay.</p>
          <p>Malé · Hulhumalé</p>
        </div>
      </div>
    </footer>
  )
}
