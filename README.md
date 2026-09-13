# Mirashya UG10 — Airbnb Listing Clone (Frontend Only)

A pixel-oriented clone of the Airbnb listing page for **"Romantic Jacuzzi 1BHK
Candolim | Mirashya UG10"**, built from the provided screenshots/recording.
Desktop viewport only, per the brief. No backend — all listing data is a
static JS module (`src/data/listing.js`) and photos are real crops taken
from the reference screenshots, stored in `public/images/`.

## Three views implemented

1. **Listing page** — sticky header + search pill, 5-photo hero grid with
   "Show all photos", sticky sub-nav (Photos / Amenities / Reviews /
   Location) that fades in on scroll and mirrors the reference's mini
   booking bar, title/rating/meta row, host strip, highlight icons,
   description with "Show more", "Where you'll sleep" cards, amenities
   preview grid + "Show all amenities" modal, guest-favourite rating panel,
   reviews grid, host card with co-hosts, location section with a map
   illustration, "Things to know", and a sticky booking/price card.
2. **Photo tour** — full-screen overlay opened from the hero image or
   "Show all photos". Left rail shows the room currently in view (scroll-spy
   via `IntersectionObserver`); a thumbnail filmstrip at the top tracks the
   active room and lets you jump to a section; photos are grouped exactly as
   in the reference (Living room 2 → Full kitchen → Bedroom → Full bathroom →
   Gym → Exterior → Living room 1).
3. **Lightbox** — single-photo viewer opened from any gallery/tour photo.
   Prev/next arrow buttons, `←`/`→` keyboard navigation, `Esc` to close,
   directional slide transition, photo counter, and captions.

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build      # production build to dist/
npm run preview    # preview the production build
```

Requires Node 18+. This is a Vite + React 18 project with no other runtime
dependencies (no UI kit, no router — a single page is all the brief asks
for). Deploy the `dist/` output to Vercel, Netlify, or any static host.

## Project structure

```
public/images/        Real photos cropped from the provided screenshots
src/data/listing.js    All listing copy/content in one place
src/components/        Header, Gallery, StickyNav, ListingContent,
                        BookingCard, AmenitiesModal, PhotoTour, Lightbox,
                        Footer, Icons (inline SVG set, no icon package)
src/styles/             One CSS file per component/section
architecture/           High-level system design diagram for a
                        production-scale version of this product
```

## Accessibility & behavior notes

- Focus-visible outlines are preserved (not suppressed) across interactive
  elements.
- `Esc` closes both overlays; arrow keys navigate the lightbox.
- `prefers-reduced-motion` disables the slide/fade animations.
- Overlays lock body scroll while open and restore it on close.
- A skip-link is provided at the top of the page for keyboard users.

## What's intentionally out of scope

- Mobile/responsive layout (desktop only, per the brief).
- Real booking/payment flow, authentication, and server persistence —
  the booking card and Reserve button are presentational.
- The full review list ("Show all reviews") and full cancellation-policy
  text are stubbed since the reference recording doesn't reveal that
  content.
