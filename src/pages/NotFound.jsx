import { Link } from 'react-router-dom'
import { Button } from '../components/Button'
import { usePageMeta } from '../hooks/usePageMeta'

const links = [
  { to: '/shop', label: 'Shop' },
  { to: '/story', label: 'Our story' },
  { to: '/contact', label: 'Contact' },
]

export function NotFound() {
  usePageMeta('Page not found — Homestead', 'This page could not be found. Return to the Homestead home page or browse the collection.')
  return (
    <section className="container-site flex min-h-[70vh] flex-col justify-center pb-24 pt-32 md:pt-40">
      <p className="label mb-5">404</p>
      <h1 className="serif-display max-w-[16ch] text-[46px] md:text-[64px]">This room is empty.</h1>
      <p className="mt-6 max-w-[44ch] text-[15px] leading-relaxed text-stone">
        The page you were looking for has moved, or never existed. Let us take you somewhere calmer.
      </p>
      <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-6">
        <Button to="/" size="lg">Back to home</Button>
        {links.map((l) => (
          <Link key={l.to} to={l.to} className="link-line font-sans text-[12px] uppercase tracking-label text-espresso">
            {l.label}
          </Link>
        ))}
      </div>
    </section>
  )
}
