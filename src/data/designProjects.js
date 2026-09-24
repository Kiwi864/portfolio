// Single source of truth for the Design world.
// Real projects pulled from Figma (Mimo-zadania). Images live in
// src/assets/projects and are imported so Vite fingerprints them.

import kiwiTickets from '../assets/projects/kiwi-tickets.png'
import kiwiHome from '../assets/projects/kiwi-home.png'
import kiwiPlace from '../assets/projects/kiwi-place.png'
import kiwiLogin from '../assets/projects/kiwi-login.png'
import kiwiPlanner from '../assets/projects/kiwi-planner.png'
import kiwiLogo from '../assets/projects/kiwi-logo-single.png'
import kiwiThumb from '../assets/projects/kiwi-thumb.webp'
import kiwiBanner from '../assets/projects/kiwi-banner.webp'

import moodifyIg from '../assets/projects/moodify-ig.webp'
import moodifyThumb from '../assets/projects/moodify-thumb.webp'
import moodifyBanner from '../assets/projects/moodify-banner.webp'
import moodHappiness from '../assets/projects/moodify-happiness.png'
import moodLove from '../assets/projects/moodify-love.png'
import moodEnergy from '../assets/projects/moodify-energy.png'
import moodDefault from '../assets/projects/moodify-default.png'

import coffeeThumb from '../assets/projects/coffee-thumb.webp'
import coffeePost1 from '../assets/projects/coffee-post1.webp'
import coffeePost3 from '../assets/projects/coffee-post3.webp'
import coffeeStory from '../assets/projects/coffee-story.webp'
import coffeeLinkedin from '../assets/projects/coffee-linkedin.webp'

import motionSpace from '../assets/projects/motion-space.png'
import motionStage from '../assets/projects/motion-stage.png'

export const designProjects = [
  {
    slug: 'kiwitravels',
    n: '01',
    title: 'KiwiTravels',
    kind: 'Travel app · UI/UX & branding',
    year: '2025',
    note: 'A flight-search and trip-planning app with a fresh green identity — from splash and onboarding to place pages and a ticket planner.',
    tags: ['Product design', 'Branding', 'UI kit'],
    cover: kiwiThumb,
    heroCover: kiwiBanner,
    tint: '#2f7d4f',

    summary:
      'KiwiTravels turns "where should we go?" into a booked flight in a few taps. I designed the whole journey — brand, onboarding, discovery and the ticket flow — around a bright, optimistic green identity.',
    role: 'Product designer & brand',
    timeline: '2025 · concept project',
    client: 'Self-initiated',
    deliverables: ['Brand identity', 'UI kit', '8+ screens', 'Iconography'],
    sections: [
      {
        heading: 'A brand that feels like a fresh start',
        body: 'The mark pairs a sliced kiwi with a route pin — travel and growth in one glyph. The palette leans on a confident green that reads as "go": permission to book the trip. Type is friendly but tight, so the interface stays calm under a lot of content.',
      },
      {
        heading: 'From search to boarding pass',
        body: 'Home surfaces recommended and popular destinations; place pages answer the real questions — distance, travel time, ratings — beside a gallery; the planner assembles a ticket you can send. Every screen shares one bottom-nav and one visual rhythm.',
      },
    ],
    gallery: [
      { src: kiwiTickets, label: 'Flight results' },
      { src: kiwiHome, label: 'Home — discovery' },
      { src: kiwiPlace, label: 'Place page' },
      { src: kiwiPlanner, label: 'Trip planner' },
      { src: kiwiLogin, label: 'Sign in' },
    ],
    results: [
      { value: '8+', label: 'screens' },
      { value: '1', label: 'identity system' },
      { value: '2025', label: 'concept build' },
    ],
  },
  {
    slug: 'moodify',
    n: '02',
    title: 'Moodify',
    kind: 'Wellness app · UI & design system',
    year: '2025',
    note: 'A mood-based music app with a dark, cinematic UI and a colour world for every emotion — plus the design system behind it.',
    tags: ['Product design', 'Design system', 'Dark UI'],
    cover: moodifyThumb,
    heroCover: moodifyBanner,
    tint: '#1b1e1b',

    summary:
      'Moodify plays to how you feel. Each emotion — love, anger, energy, sadness, happiness — gets its own colour world over a calm, dark base. I designed the screens and the system that keeps them consistent.',
    role: 'Product designer',
    timeline: '2025 · concept project',
    client: 'Self-initiated',
    deliverables: ['Design system', 'Emotion palettes', '7 screens', 'Custom iconography'],
    sections: [
      {
        heading: 'A palette per feeling',
        body: 'One dark, low-glare base carries the app. Each mood then introduces a single saturated accent, so the whole interface re-skins by emotion without a single screen being redrawn. The system does the work; the moods just swap tokens.',
      },
      {
        heading: 'Quiet by default',
        body: 'Near-black surfaces, generous spacing and soft, humanist type keep attention on how you feel — not on chrome. Premium features and stats sit in a calm sheet that slides up over the mood, never interrupting it.',
      },
    ],
    gallery: [
      { src: moodifyIg, label: 'Campaign post' },
      { src: moodHappiness, label: 'Happiness' },
      { src: moodLove, label: 'Love' },
      { src: moodEnergy, label: 'Energy' },
      { src: moodDefault, label: 'Home — how do you feel?' },
    ],
    results: [
      { value: '6', label: 'mood worlds' },
      { value: '1', label: 'token system' },
      { value: '7', label: 'screens' },
    ],
  },
  {
    slug: 'coffee-good',
    n: '03',
    title: 'Coffee Good',
    kind: 'Advertising & social design',
    year: '2024',
    note: 'A coffee-brand campaign — Instagram posts, a story and a LinkedIn cover built on a single warm, photoreal key visual.',
    tags: ['Campaign', 'Social', 'Art direction'],
    cover: coffeeThumb,
    heroCover: coffeeLinkedin,
    tint: '#6f4a2f',

    summary:
      'A social campaign for a coffee brand around the line "Good Coffee. Good Mood." One photoreal key visual — cup, beans and fresh leaves on warm wood — adapted across every social format.',
    role: 'Graphic & campaign designer',
    timeline: '2024',
    client: 'Coffee Good (concept)',
    deliverables: ['Key visual', 'Instagram posts', 'Instagram story', 'LinkedIn cover'],
    sections: [
      {
        heading: 'One key visual, every format',
        body: 'The hero composite — latte, scattered beans, backlit leaves and rising steam — was built once, then re-staged for the square feed, the vertical story and the wide LinkedIn banner. The focal cup survives every crop.',
      },
      {
        heading: 'Warmth you can taste',
        body: 'A palette of roasted browns and cream, a hand-script display, and shallow depth-of-field sell the mood before a word is read. The tagline sits on the wood grain like it was branded there.',
      },
    ],
    gallery: [
      { src: coffeePost1, label: 'Instagram post' },
      { src: coffeePost3, label: 'Instagram post — variant' },
      { src: coffeeStory, label: 'Instagram story' },
      { src: coffeeLinkedin, label: 'LinkedIn cover' },
    ],
    results: [
      { value: '5', label: 'assets' },
      { value: '3', label: 'formats' },
      { value: '1', label: 'key visual' },
    ],
  },
  {
    slug: 'motion-graphics',
    n: '04',
    title: 'Motion Graphics',
    kind: 'Motion & scene design',
    year: '2024',
    note: 'Cinematic background scenes for short-form video — an orbital sunrise and a warm product stage, built to loop.',
    tags: ['Motion', 'Compositing', 'Scene design'],
    cover: motionSpace,
    coverVideo: '/videos/motion-space.mp4',
    tint: '#10131f',
    motion: true,

    summary:
      'Two cinematic scenes designed as canvases for short-form motion: an orbital sunrise over Earth and a warm, arch-lit product stage. Built to loop and to sit behind type or a product.',
    role: 'Motion & scene designer',
    timeline: '2024',
    client: 'Self-initiated',
    deliverables: ['2 looping scenes', 'Lighting & composition', 'Reel / story exports'],
    sections: [
      {
        heading: 'Scenes, not stills',
        body: 'Each frame is staged for movement. The sunrise is timed to crest as light rakes the horizon; the product stage waits, lit and empty, for something to drop into frame. They are backdrops with intent.',
      },
      {
        heading: 'Lighting does the work',
        body: 'A single warm key on the wooden stage, a hard rim on the planet — depth and mood come from light, not clutter. Both scenes are graded to leave room for white type and a product to read clearly on top.',
      },
    ],
    gallery: [
      { src: motionSpace, video: '/videos/motion-space.mp4', label: 'Orbital sunrise' },
      { src: motionStage, video: '/videos/motion-stage.mp4', label: 'Product stage' },
    ],
    results: [
      { value: '2', label: 'scenes' },
      { value: '∞', label: 'loop-ready' },
      { value: '9:16', label: '& 4:5 exports' },
    ],
  },
]

export function getDesignProject(slug) {
  return designProjects.find((p) => p.slug === slug)
}

export function getAdjacent(slug) {
  const i = designProjects.findIndex((p) => p.slug === slug)
  if (i === -1) return { next: null }
  return { next: designProjects[(i + 1) % designProjects.length] }
}
