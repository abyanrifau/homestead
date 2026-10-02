export const CATEGORIES = {
  LIVING: 'Living Room',
  ACCENTS: 'Decor & Accents',
}

export const products = [
  {
    id: 'sofa',
    slug: 'hollis-sofa',
    name: 'Hollis Sofa',
    kind: 'Sofa',
    category: CATEGORIES.LIVING,
    tag: 'Linen-cotton · Oak',
    price: 52900,
    isNew: true,
    blurb: 'A deep, low three-seat sofa that asks nothing of you.',
    description:
      'The Hollis is built the slow way: a kiln-dried oak frame, hand-tied springs, and feather-wrapped cushions that soften with every year. Its proportions are generous without being loud, made for long evenings and Sunday mornings.',
    materials: [
      'Kiln-dried solid oak frame with corner-blocked joinery',
      'Feather-and-down wrapped high-resilience foam cushions',
      'Linen-cotton upholstery in Moss, woven in Portugal and chosen for warm, humid rooms',
      'Solid oak plinth with natural oil finish',
    ],
    dimensions: 'W 228 × D 96 × H 82 cm · Seat height 42 cm',
    care: 'Plump cushions weekly. Vacuum with a soft brush. Spot clean with a damp, lint-free cloth; avoid direct sunlight to preserve the dye.',
    images: {
      white: '/images/products/sofa-white.jpg',
      lifestyle: '/images/products/sofa-lifestyle.jpg',
      detail: '/images/products/sofa-lifestyle-2.jpg',
    },
  },
  {
    id: 'coffee-table',
    slug: 'ester-coffee-table',
    name: 'Ester Coffee Table',
    kind: 'Coffee Table',
    category: CATEGORIES.LIVING,
    tag: 'Smoked oak',
    price: 18200,
    isNew: false,
    blurb: 'A pebble of smoked oak, hand-oiled to a quiet sheen.',
    description:
      'Ester is cut from a single run of European oak and shaped by hand into a soft, asymmetric top. Two plank legs hold it low to the floor. Over time the oil finish deepens, and the grain tells you where the light falls in your room.',
    materials: [
      'Solid European oak, smoked and hand-oiled',
      'Plank legs joined with concealed hardwood dowels',
      'Finished with a plant-based hardwax oil',
    ],
    dimensions: 'W 130 × D 70 × H 34 cm',
    care: 'Wipe with a soft, dry cloth. Re-oil once a year with a hardwax oil to refresh the finish. Use coasters for hot cups.',
    images: {
      white: '/images/products/coffee-table-white.jpg',
      lifestyle: '/images/products/coffee-table-lifestyle.jpg',
    },
  },
  {
    id: 'floor-lamp',
    slug: 'anders-floor-lamp',
    name: 'Anders Floor Lamp',
    kind: 'Floor Lamp',
    category: CATEGORIES.LIVING,
    tag: 'Ash · Linen shade',
    price: 7950,
    isNew: false,
    blurb: 'Three legs of solid ash and a shade that turns evening on.',
    description:
      'The Anders stands on a tripod of tapered ash, joined at the top with a turned brass collar. Its linen drum shade throws a warm, even pool of light — enough to read by, soft enough to leave on.',
    materials: [
      'Solid ash tripod, tapered by hand',
      'Natural linen drum shade, unlined',
      'Brushed brass collar and pull switch',
      'E27 fitting · dimmable bulb included',
    ],
    dimensions: 'Ø 46 × H 152 cm · Cord 2.4 m',
    care: 'Dust the shade with a soft brush. Wipe the ash with a barely damp cloth. Use a maximum 10 W LED bulb.',
    images: {
      white: '/images/products/floor-lamp-white.jpg',
      lifestyle: '/images/products/floor-lamp-lifestyle.jpg',
    },
  },
  {
    id: 'bean-bag',
    slug: 'nook-bean-bag',
    name: 'Nook Bean Bag',
    kind: 'Bean Bag',
    category: CATEGORIES.LIVING,
    tag: 'Bouclé · Sage',
    price: 5900,
    isNew: true,
    blurb: 'A soft place to land, in bouclé the colour of sage.',
    description:
      'Nook is our answer to the extra seat you never had. A dense bouclé cover in Sage, filled with responsibly sourced EPS beads that hold their shape. It settles into corners and reading spots and stays there.',
    materials: [
      'Cotton bouclé cover, breathable and light for warm rooms',
      'Removable cover with hidden zip',
      'Inner liner filled with recycled EPS beads',
    ],
    dimensions: 'W 95 × D 95 × H 70 cm · 4.5 kg',
    care: 'Cover is dry-clean only. Shake and fluff the liner monthly. Keep away from open flame.',
    images: {
      white: '/images/products/bean-bag-white.jpg',
      lifestyle: '/images/products/bean-bag-lifestyle.jpg',
    },
  },
  {
    id: 'stool',
    slug: 'fell-stool',
    name: 'Fell Stool',
    kind: 'Stool',
    category: CATEGORIES.LIVING,
    tag: 'Solid ash',
    price: 3650,
    isNew: false,
    blurb: 'Turned, wedged, and left honest. The piece that moves.',
    description:
      'A stool in solid ash with four turned legs and wedged tenons — the kind of joinery you can see and trust. It works as a perch, a side table, a plant stand, or wherever it ends up on the day.',
    materials: [
      'Solid ash seat and turned legs',
      'Wedged through-tenon joinery, no metal fixings',
      'Natural oil finish',
    ],
    dimensions: 'Ø 32 × H 45 cm · 2.8 kg',
    care: 'Wipe with a dry cloth. Re-oil as needed. Felt pads included for hard floors.',
    images: {
      white: '/images/products/stool-white.jpg',
      lifestyle: '/images/products/stool-lifestyle.jpg',
    },
  },
  {
    id: 'plant-pot',
    slug: 'vessel-planter',
    name: 'Vessel Planter',
    kind: 'Plant Pot',
    category: CATEGORIES.ACCENTS,
    tag: 'Stoneware · Sand',
    price: 2250,
    isNew: false,
    blurb: 'Hand-thrown stoneware with a matte, sand-coloured skin.',
    description:
      'Each Vessel is thrown on the wheel and left unglazed on the outside, so the clay body shows through. No two are alike; slight variations in tone and thickness are part of the piece. Made for a plant with presence.',
    materials: [
      'Hand-thrown stoneware, fired at 1,240 °C',
      'Unglazed exterior, glazed interior',
      'Drainage hole with removable stoneware saucer',
    ],
    dimensions: 'Ø 34 × H 30 cm · 5.2 kg',
    care: 'Wipe clean. Happy on a shaded balcony or indoors. Line with gravel to protect the interior glaze from roots.',
    images: {
      white: '/images/products/plant-pot-white.jpg',
      lifestyle: '/images/products/plant-pot-lifestyle.jpg',
    },
  },
]

export const getProduct = (slug) => products.find((p) => p.slug === slug)

/** Prices are in Maldivian rufiyaa, GST included. Rendered as "MVR 52,900". */
export const formatPrice = (n) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'MVR',
    currencyDisplay: 'code',
    maximumFractionDigits: 0,
  })
    .format(n)
    .replace(/ /g, ' ')
