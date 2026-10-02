const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.25,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

export const BagIcon = ({ size = 20, ...rest }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} {...rest}>
    <path d="M6 8h12l1 12H5L6 8Z" />
    <path d="M9 8V6.5a3 3 0 0 1 6 0V8" />
  </svg>
)

export const MenuIcon = ({ size = 20, ...rest }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} {...rest}>
    <path d="M4 8h16M4 16h16" />
  </svg>
)

export const CloseIcon = ({ size = 20, ...rest }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} {...rest}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
)

export const PlusIcon = ({ size = 14, ...rest }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} {...rest}>
    <path d="M12 5v14M5 12h14" />
  </svg>
)

export const MinusIcon = ({ size = 14, ...rest }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} {...rest}>
    <path d="M5 12h14" />
  </svg>
)

export const ArrowIcon = ({ size = 16, ...rest }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} {...rest}>
    <path d="M4 12h16M14 6l6 6-6 6" />
  </svg>
)

export const ChevronIcon = ({ size = 16, ...rest }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} {...rest}>
    <path d="M6 9l6 6 6-6" />
  </svg>
)

export const TruckIcon = ({ size = 22, ...rest }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} {...rest}>
    <path d="M3 7h11v9H3zM14 10h4l3 3v3h-7z" />
    <circle cx="7" cy="17.5" r="1.5" />
    <circle cx="17" cy="17.5" r="1.5" />
  </svg>
)

export const HandIcon = ({ size = 22, ...rest }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} {...rest}>
    <path d="M4 20l6-6M14 4l6 6-8 8-6-6z" />
    <path d="M12 6l6 6" />
  </svg>
)

export const ReturnIcon = ({ size = 22, ...rest }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} {...rest}>
    <path d="M4 10h11a4 4 0 0 1 0 8H9" />
    <path d="M8 6l-4 4 4 4" />
  </svg>
)

export const InstagramIcon = ({ size = 18, ...rest }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} {...rest}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
    <circle cx="12" cy="12" r="3.75" />
    <circle cx="17" cy="7" r="0.6" fill="currentColor" stroke="none" />
  </svg>
)
