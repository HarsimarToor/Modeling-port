/* ==========================================================================
   YOUR PORTFOLIO CONTENT — this is the only file you need to edit to update
   the site. Save it and the pages update automatically.

   HOW TO ADD A PHOTO TO "SELECTED WORKS" (homepage)
   1. Drop the photo into  public/images/  (JPG, ideally under ~2000px wide).
   2. Add a new line to the `works` list below, e.g.
        { src: 'my-new-shoot.jpg', client: 'Brand Name', year: '2026' },
      New photos appear as a new box in the grid, in the order you list them.

   HOW TO ADD A NEW PROJECT (Experience page)
   1. Put its photos in  public/images/
   2. Copy any block in the `projects` list, paste it at the TOP of the list
      (newest first) and change the details.
   ========================================================================== */

export const profile = {
  name: 'Harsimar Singh Toor',
  shortName: 'SIMAR',
  // Shown under the name on the homepage hero
  tagline: ['Pure Indian', '19 Years', 'Model'],
}

// Shown as small labels under the hero
export const stats = [
  { label: 'HEIGHT', value: `6'3" / 190 cm` },
  { label: 'CHEST / WAIST', value: '38" / 30"' },
  { label: 'HAIR', value: 'Black' },
  { label: 'EYES', value: 'Dark Brown' },
  { label: 'LOCATION', value: 'Davao, PH' },
  { label: 'TRAVEL', value: 'Worldwide' },
]

// "Industry Partnerships" strip on the homepage
export const partners = [
  { name: 'GCash', role: 'Ambassador', year: '2025' },
  { name: 'Lacoste', role: 'Fashion', year: '2026' },
  { name: 'Champion', role: 'Editorial', year: '2026' },
  { name: 'Kadayawan', role: 'Runway', year: '2025' },
]

/* --------------------------------------------------------------------------
   SELECTED WORKS (homepage grid)
   Only `src` is required. Everything else is optional:
     client : caption shown under the photo and in the full-screen view
     year   : small year next to the caption
     ratio  : 'portrait' (default) | 'square' | 'landscape' | 'tall'
     focus  : where to keep the crop centred, e.g. '50% 20%' (x y).
              Default keeps the top of the photo (faces) in view.
   The first photo is shown full-width on phones, so put your best one first.
   TIP: 9, 15 or 21 photos fill the grid perfectly on both phone and desktop;
   any other number just leaves a small gap in the last row.
   -------------------------------------------------------------------------- */
export const works = [
  { src: 'back-pose.jpg', alt: 'Back pose, studio', focus: '50% 40%' },
  { src: 'lac1.jpg', client: 'Lacoste', year: '2026' },
  { src: 'img-3491.jpg', alt: 'Editorial portrait' },
  { src: 'img-3490.jpg', alt: 'Runway in gold' },
  { src: 'selfie-black-shirt.jpg', alt: 'Portrait in black shirt', focus: '50% 35%' },
  { src: 'red-suit.jpg', alt: 'Red embellished suit' },
  { src: 'champ2.jpg', client: 'Champion', year: '2026' },
  { src: 'xcl1.jpg', client: 'XCLV Davao', year: '2026' },
  { src: 'img-5785.jpg', alt: 'Runway look in white' },
  // ↓ Add new photos here ↓
]

// How many boxes to show on the homepage (the rest can still be in the list)
export const HOME_WORKS_LIMIT = 12

/* --------------------------------------------------------------------------
   PROJECTS (Experience page) — newest first
     cover   : image (or .mp4 video) shown on the card
     poster  : optional still image for a video cover
     gallery : all photos (or .mp4) in the full-screen viewer, in order
     year    : shown on the card; `date` is shown in the details panel
     location: optional — leave it out and only the date is shown
   -------------------------------------------------------------------------- */
export const projects = [
  {
    id: 'fitness-shoot-2026',
    type: 'Fitness Photoshoot',
    client: 'Fitness Shoot',
    year: '2026',
    date: 'November 12, 2026',
    description: 'Personal fitness photoshoot.',
    cover: 'fitness-1.jpg',
    gallery: ['fitness-1.jpg'],
  },
  {
    id: 'snna-davao-halloween-2026',
    type: 'Event Photoshoot',
    client: 'SNNA Davao',
    year: '2026',
    date: 'October 31, 2026',
    location: 'Davao City',
    description: 'Halloween party photoshoot for a local SNNA Davao event.',
    cover: 'snna-1.jpg',
    gallery: ['snna-1.jpg', 'snna-2.jpg', 'snna-3.jpg', 'snna-4.jpg', 'snna-5.jpg'],
  },
  {
    id: 'lacoste-champion-2026',
    type: 'Fashion Show',
    client: 'Lacoste & Champion',
    year: '2026',
    date: 'January 24, 2026',
    location: 'Abreeza Mall, Davao',
    description: 'Runway show featuring the Spring/Summer 2026 collections.',
    cover: 'lac1.jpg',
    gallery: ['lac1.jpg', 'lac2.jpg', 'champ1.jpg', 'champ2.jpg'],
  },
  {
    id: 'xclv-2026',
    type: 'Club Photoshoot',
    client: 'XCLV Davao',
    year: '2026',
    date: 'January 15, 2026',
    location: 'XCLV, Davao City',
    description: 'High-end club promotional photoshoot featuring editorial and lifestyle photography.',
    cover: '/simar.mp4',
    poster: 'simar-poster.jpg',
    gallery: ['/simar.mp4', 'xcl1.jpg', 'xcl2.jpg'],
  },
  {
    id: 'gcash-2025',
    type: 'Brand Ambassador',
    client: 'GCash',
    year: '2025',
    date: 'August 15-17, 2025',
    location: 'Abreeza Mall, Davao',
    description: 'Lead brand ambassador for a 3-day regional promotional event.',
    cover: 'gcash1.jpg',
    gallery: ['gcash1.jpg', 'gcash2.jpg', 'gcash3.jpg', 'gcash4.jpg', 'gcash5.jpg', 'gcash6.jpg'],
  },
  {
    id: 'marinara-2025',
    type: 'Restaurant Campaign',
    client: 'Marinara Ristorante',
    year: '2025',
    date: 'July 2025',
    location: 'Davao City',
    description: 'Lifestyle campaign for social media and digital menus.',
    cover: 'mari1.jpg',
    gallery: ['mari1.jpg'],
  },
  {
    id: 'runway-archive',
    type: 'Runway Collective',
    client: 'Runway Archive',
    year: '2025 – 2026',
    date: '2025 - 2026',
    location: 'Various Locations',
    description:
      'A comprehensive collection of runway appearances, including Kadayawan Fashion Week, local designer showcases, and retail launches across the region.',
    cover: 'img-3490.jpg',
    gallery: ['run1.jpg', 'run2.jpg', 'img-3489.jpg', 'img-3490.jpg', 'run5.jpg'],
  },
  // ↓ Add new projects here (or paste a copy of a block above at the top) ↓
]

/* --------------------------------------------------------------------------
   CONTACT — links shown on the Contact page and in the menu / footer.
   Fill in `email`, `phone` or `whatsapp` and a tap-to-contact row appears
   automatically. Leave them as '' to hide them.
   -------------------------------------------------------------------------- */
export const contact = {
  instagram: 'https://www.instagram.com/cmrtoor/',
  facebook: 'https://www.facebook.com/harsimar.singh.395454/',
  email: '', // e.g. 'simar@example.com'
  phone: '', // e.g. '+639171234567'  (include country code)
  whatsapp: '', // e.g. '639171234567'  (country code, no + or spaces)
  location: 'Davao City, Philippines',
  availability: 'Currently accepting new bookings for 2026',
  intro: 'Currently based in Davao City. Available for runway, editorial, and commercial projects worldwide.',
}

// Turns 'lac1.jpg' into '/images/lac1.jpg' (paths starting with / are left alone)
export const asset = (file) => (file.startsWith('/') ? file : `/images/${file}`)
export const isVideo = (file) => /\.(mp4|webm|mov)$/i.test(file)
