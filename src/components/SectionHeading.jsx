import { Reveal } from './Reveal'

export function SectionHeading({ eyebrow, title, description, align = 'left', className = '' }) {
  const center = align === 'center'
  return (
    <Reveal className={`${center ? 'mx-auto text-center' : ''} max-w-xl ${className}`}>
      {eyebrow && <p className="label mb-4">{eyebrow}</p>}
      <h2 className="serif-display text-[34px] md:text-[42px]">{title}</h2>
      {description && <p className="mt-4 text-[15px] leading-relaxed text-stone">{description}</p>}
    </Reveal>
  )
}
