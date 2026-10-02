import { useId, useState } from 'react'
import { ChevronIcon } from './Icons'

export function AccordionItem({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  const id = useId()
  return (
    <div className="border-b border-espresso/[0.08]">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={`${id}-panel`}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="font-sans text-[13px] font-medium tracking-wide2 text-espresso">{title}</span>
        <ChevronIcon className="acc-chevron text-stone" data-open={open} />
      </button>
      <div id={`${id}-panel`} className="acc-body" data-open={open} role="region">
        <div>
          <div className="acc-content pb-6 text-[14px] leading-relaxed text-stone">{children}</div>
        </div>
      </div>
    </div>
  )
}
