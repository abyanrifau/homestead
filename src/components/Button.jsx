import { forwardRef } from 'react'
import { Link } from 'react-router-dom'

const variants = {
  primary:
    'bg-walnut-deep text-cream hover:bg-walnut-ink border border-transparent',
  secondary:
    'bg-transparent text-espresso border border-espresso/30 hover:border-espresso',
  ghost: 'bg-transparent text-espresso border border-transparent hover:bg-espresso/[0.04]',
  light: 'bg-cream/90 text-espresso hover:bg-cream border border-transparent',
}

const sizes = {
  md: 'h-12 px-7 text-[13px]',
  sm: 'h-10 px-5 text-[12px]',
  lg: 'h-14 px-9 text-[13px]',
}

export const Button = forwardRef(function Button(
  { as, to, href, variant = 'primary', size = 'md', className = '', children, ...rest },
  ref,
) {
  const cls = `pressable inline-flex items-center justify-center gap-2 rounded-full font-sans font-medium tracking-wide2 uppercase select-none ${variants[variant]} ${sizes[size]} ${className}`
  if (to) {
    return (
      <Link ref={ref} to={to} className={cls} {...rest}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a ref={ref} href={href} className={cls} {...rest}>
        {children}
      </a>
    )
  }
  const Tag = as || 'button'
  return (
    <Tag ref={ref} type={Tag === 'button' ? rest.type || 'button' : undefined} className={cls} {...rest}>
      {children}
    </Tag>
  )
})

/** Quiet text link with an animated underline. */
export function TextLink({ to, href, className = '', children, ...rest }) {
  const cls = `link-line inline-flex items-center gap-2 font-sans text-[12px] uppercase tracking-label text-espresso ${className}`
  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {children}
      </Link>
    )
  }
  return (
    <a href={href} className={cls} {...rest}>
      {children}
    </a>
  )
}
