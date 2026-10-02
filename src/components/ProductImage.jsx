import { useState } from 'react'

/**
 * Product photo. Fills its parent; the parent sets the aspect ratio.
 *
 * `fit="contain"` is for the white-background cutouts: they come in mixed aspect ratios and
 * slightly different whites, so they're letterboxed inside the ivory tile and multiplied onto it,
 * which turns their white into the site's ivory. Lifestyle shots use the default cover.
 *
 * If a file is missing, a calm placeholder tile takes its place. `compact` is for thumbnails.
 */
export function ProductImage({
  src,
  alt,
  name,
  kind,
  tone = 'white',
  fit = 'cover',
  compact = false,
  className = '',
  loading = 'lazy',
  ...rest
}) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    const isWhite = tone === 'white'
    return (
      <div
        role="img"
        aria-label={alt}
        className={`absolute inset-0 flex flex-col items-center justify-center gap-2 ${isWhite ? 'bg-ivory' : 'bg-sand'} ${className}`}
        {...rest}
      >
        {compact ? (
          <span className="font-serif text-[22px] font-medium leading-none text-espresso/50">{name.charAt(0)}</span>
        ) : (
          <>
            <span className="px-4 text-center font-serif text-[22px] font-medium leading-none text-espresso/60">{name}</span>
            <span className="label text-[10px] text-stone/70">{kind}</span>
          </>
        )}
      </div>
    )
  }

  const fitCls =
    fit === 'contain'
      ? `object-contain mix-blend-multiply ${compact ? 'p-1.5' : 'p-[7%]'}`
      : 'object-cover'

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      decoding="async"
      onError={() => setFailed(true)}
      className={`absolute inset-0 h-full w-full ${fitCls} ${className}`}
      {...rest}
    />
  )
}
