// Atmosphere imagery from /images/decor (downloaded from the Pinterest board).
// These are not products — supporting imagery only. Room scenes are preferred here so the
// product lifestyle shots (which several board pins duplicate) stay reserved for the shop.

export const decor = {
  // Supplied hero photograph (public/images/craft/hero-1.jpg).
  // `soften` blurs the photo slightly (it is a low-resolution file); `navInk` sets the transparent nav's text colour over it.
  hero: {
    src: '/images/craft/hero-1.jpg',
    alt: 'Late sun through tall windows onto a plaster wall, a linen daybed and an oak armchair',
    position: 'center 58%',
    soften: true,
    navInk: 'dark',
  },
  // Supplied craft photography (public/images/craft) for the materials / made-by moments.
  storyTeaser: { src: '/images/craft/woodwork-2.jpg', alt: 'A live-edge oak slab casting a long shadow on a plaster wall', position: 'center 45%' },
  storyTeaserSmall: { src: '/images/craft/woodwork-1.jpg', alt: 'Split oak logs showing bark and open grain', position: 'center' },
  craftOne: { src: '/images/craft/woodwork-1.jpg', alt: 'Split oak logs showing bark and open grain', position: 'center' },
  materialsOne: { src: '/images/craft/materials-1.jpg', alt: 'Brass shears cutting a length of undyed linen in raking light', position: 'center' },
  materialsTwo: { src: '/images/craft/materials-2.jpg', alt: 'A sewing machine foot stitching a seam in natural cotton', position: 'center 45%' },
  craftTwo: { src: '/images/craft/woodwork-2.jpg', alt: 'A live-edge oak slab casting a long shadow on a plaster wall', position: 'center' },
  // Supplied Story page opener (public/images/craft/story-hero.jpg).
  aboutHero: { src: '/images/craft/story-hero.jpg', alt: 'Evening light across a plaster wall, linen bedding and a cup on an oak side table', position: 'center 62%' },
  aboutMaterials: { src: '/images/decor/decor-11.png', alt: 'Walnut shelves warmly lit in the evening', position: 'center' },
  aboutSofa: { src: '/images/decor/decor-03.jpg', alt: 'A sunlit sofa beside a monstera and a red lamp', position: 'center' },
  aboutPlants: { src: '/images/decor/decor-10.jpg', alt: 'A monstera on a plant stand beside a grey sofa', position: 'center' },
  aboutEvening: { src: '/images/decor/decor-16.jpg', alt: 'Oak shelves and trailing plants in golden evening light', position: 'center' },
  aboutNook: { src: '/images/decor/decor-22.jpg', alt: 'A sage bean bag beneath a round oak mirror', position: 'center' },
  aboutShelves: { src: '/images/decor/decor-04.jpg', alt: 'Close detail of green velvet with an open magazine', position: 'center' },
  contact: { src: '/images/decor/decor-01.jpg', alt: 'Tall plants in stone pots beside a picture window', position: 'center 65%' },
}

export const instagramFeed = [
  { src: '/images/products/sofa-lifestyle-2.jpg', alt: 'Velvet, up close' },
  { src: '/images/decor/decor-22.jpg', alt: 'A reading corner beneath the round mirror' },
  { src: '/images/products/stool-lifestyle.jpg', alt: 'Morning coffee on the Fell stool' },
  { src: '/images/decor/decor-16.jpg', alt: 'Golden hour on the shelves' },
  { src: '/images/decor/decor-01.jpg', alt: 'Light through the window' },
  { src: '/images/products/plant-pot-lifestyle.jpg', alt: 'The Vessel planter in raking light' },
]
