import { useReveal } from '../hooks/useReveal'

/**
 * Scroll-triggered entrance. Opacity + 14px rise on a strong ease-out, once.
 * `delay` (ms) staggers siblings — keep it 30–80ms between items.
 */
export function Reveal({ as: Tag = 'div', delay = 0, className = '', style, children, ...rest }) {
  const ref = useReveal()
  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={{ ...style, '--reveal-delay': `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
