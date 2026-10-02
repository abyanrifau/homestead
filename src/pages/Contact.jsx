import { usePageMeta } from '../hooks/usePageMeta'
import { useState } from 'react'
import { Button } from '../components/Button'
import { CONTACT_EMAIL } from '../components/Footer'
import { InstagramIcon } from '../components/Icons'
import { IG_BIO, IG_HANDLE } from '../components/InstagramStrip'
import { Reveal } from '../components/Reveal'
import { decor } from '../data/decor'

const fieldCls =
  'w-full border-b border-espresso/25 bg-transparent py-3 font-sans text-[15px] text-espresso placeholder:text-mist transition-colors duration-200 ease focus:border-espresso focus:outline-none'

export function Contact() {
  usePageMeta('Contact & showroom — Homestead', 'Visit the Homestead showroom in Malé or write to us about a piece, a fabric or a delivery date.')
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="pt-24 md:pt-32">
      <section className="container-site pb-24 md:pb-32">
        <Reveal className="max-w-2xl">
          <p className="label mb-5">Contact</p>
          <h1 className="serif-display text-[46px] md:text-[64px]">We would love to hear from you.</h1>
          <p className="mt-6 max-w-[48ch] text-[15px] leading-relaxed text-stone">
            Questions about a piece, a fabric, or a delivery date — write to us, or come and sit on the
            sofa in person.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Form */}
          <Reveal className="lg:col-span-6">
            <div className="relative">
              <form
                onSubmit={submit}
                className={`space-y-8 transition-opacity duration-200 ${sent ? 'pointer-events-none opacity-0' : 'opacity-100'}`}
                aria-hidden={sent}
              >
                <div>
                  <label htmlFor="c-name" className="label mb-1 block text-[10px]">
                    Name
                  </label>
                  <input id="c-name" type="text" required value={form.name} onChange={update('name')} autoComplete="name" className={fieldCls} tabIndex={sent ? -1 : 0} />
                </div>
                <div>
                  <label htmlFor="c-email" className="label mb-1 block text-[10px]">
                    Email
                  </label>
                  <input id="c-email" type="email" required value={form.email} onChange={update('email')} autoComplete="email" className={fieldCls} tabIndex={sent ? -1 : 0} />
                </div>
                <div>
                  <label htmlFor="c-message" className="label mb-1 block text-[10px]">
                    Message
                  </label>
                  <textarea id="c-message" required rows={5} value={form.message} onChange={update('message')} className={`${fieldCls} resize-none`} tabIndex={sent ? -1 : 0} />
                </div>
                <Button type="submit" size="lg" tabIndex={sent ? -1 : 0}>
                  Send message
                </Button>
                <p className="text-[12px] leading-relaxed text-stone">This is a Nuit Works concept. Nothing is sent and no payment is taken.</p>
              </form>

              <div
                className={`absolute inset-x-0 top-0 transition-opacity duration-300 ${sent ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
                role="status"
                aria-live="polite"
              >
                {sent && (
                  <>
                    <p className="serif-display text-[32px]">Thank you, {form.name.split(' ')[0] || 'friend'}.</p>
                    <p className="mt-4 max-w-[40ch] text-[15px] leading-relaxed text-stone">
                      Your note is with us. We reply to everything, usually within a day or two.
                    </p>
                    <p className="mt-4 text-[12px] leading-relaxed text-stone">This is a Nuit Works concept. Nothing is sent and no payment is taken.</p>
                  </>
                )}
              </div>
            </div>
          </Reveal>

          {/* Details */}
          <Reveal delay={80} className="lg:col-span-5 lg:col-start-8">
            <div className="tile relative mb-10 aspect-[4/5] overflow-hidden rounded-[3px] bg-sand">
              <img
                src={decor.contact.src}
                alt={decor.contact.alt}
                loading="lazy"
                decoding="async"
                className="tile-media absolute inset-0 h-full w-full object-cover"
                style={{ objectPosition: decor.contact.position }}
              />
            </div>

            <dl className="grid gap-8 sm:grid-cols-2">
              <div>
                <dt className="label mb-3">Showroom</dt>
                <dd className="text-[14px] leading-relaxed text-espresso/85">
                  Nirolhu Magu, Lot 10395
                  <br />
                  Hulhumalé Phase 1, Maldives
                </dd>
              </div>
              <div>
                <dt className="label mb-3">Hours</dt>
                <dd className="text-[14px] leading-relaxed text-espresso/85">
                  Sun – Thu, 10:00 – 18:00
                  <br />
                  Sat, 14:00 – 20:00 · Closed Fridays
                </dd>
              </div>
              <div>
                <dt className="label mb-3">Email</dt>
                <dd>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="link-line text-[14px] text-espresso">
                    {CONTACT_EMAIL}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="label mb-3">Instagram</dt>
                <dd>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="link-line inline-flex items-center gap-2 text-[14px] text-espresso"
                  >
                    <InstagramIcon size={15} /> {IG_HANDLE}
                  </a>
                  <p className="mt-2 max-w-[30ch] text-[13px] leading-relaxed text-stone">{IG_BIO}</p>
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
