# Homestead

A front-end mockup for Homestead, a quiet-luxury living room furniture brand. React 18 + Vite + Tailwind CSS 3, no backend.

## Run

```
npm install
npm run dev
```

Then open the printed local URL. `npm run build` produces a static `dist/` folder.

## Images

- `public/images/decor/` — 22 atmosphere images downloaded from the Pinterest board. Used for the hero, story sections, Instagram strip and page imagery. Not products.
- `public/images/products/` — the supplied product photos (white cutout + in-room shot per product, plus a detail shot for the sofa). If one is missing the site shows a calm placeholder tile.
- `public/images/craft/` — the supplied homepage hero (`hero-1.jpg`), the Story page opener (`story-hero.jpg`), the two woodwork photos (homepage "Made slowly" teaser and the Story page's Craftsmanship section) and the two material-making photos (Story page Materials section).

## Structure

```
src/
  data/products.js        six products: copy, materials, dimensions, prices
  data/decor.js           which decor image plays which role
  context/CartContext.jsx local cart state (persists to localStorage)
  hooks/                  useReveal (scroll entrances), useScrolled (nav), useLockBody
  components/             Navbar, Hero, ProductCard, ProductGrid, CartDrawer,
                          InstagramStrip, Footer, Accordion, Reveal, Button, ...
  pages/                  Home, Shop, Product, Story, Contact
  index.css               palette tokens, easing curves, all motion primitives
```

## Motion

All curves and durations live in `src/index.css`:

- `--ease-out: cubic-bezier(0.23, 1, 0.32, 1)` for entrances and reveals
- `--ease-drawer: cubic-bezier(0.32, 0.72, 0, 1)` for the cart drawer (enter 440ms, exit 320ms)
- Hover fades use plain `ease`; press feedback is `scale(0.98)` at 120ms
- Only `transform` and `opacity` animate (the accordion's `grid-template-rows` is the one sanctioned exception)
- Hover motion is gated behind `(hover: hover) and (pointer: fine)`; `prefers-reduced-motion` keeps fades and removes movement
