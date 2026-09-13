// All content below mirrors what is visible in the reference listing
// ("Romantic Jacuzzi 1BHK Candolim | Mirashya UG10") captured in the
// provided screenshots/recording.

export const photos = [
  {
    id: 'hero-lounge-wide',
    src: '/images/hero-lounge-wide.jpg',
    alt: 'Rooftop lounge with rattan armchairs and a jacuzzi',
    room: 'Living room 1',
    caption: 'Sofa · Air conditioning · Ceiling fan · TV',
  },
  {
    id: 'hero-lounge-nook',
    src: '/images/hero-lounge-nook.jpg',
    alt: 'Rattan lounge seating nook',
    room: 'Living room 1',
    caption: 'Sofa · Air conditioning · Ceiling fan · TV',
  },
  {
    id: 'hero-jacuzzi',
    src: '/images/hero-jacuzzi.jpg',
    alt: 'Private wooden-deck jacuzzi',
    room: 'Jacuzzi',
    caption: 'Private outdoor jacuzzi',
  },
  {
    id: 'hero-bedroom',
    src: '/images/hero-bedroom.jpg',
    alt: 'Bedroom with king bed and mirror',
    room: 'Bedroom',
    caption: 'Double bed · Air conditioning · Wardrobe · Ceiling fan',
  },
  {
    id: 'hero-exterior',
    src: '/images/hero-exterior.jpg',
    alt: 'Building exterior of Amor De Goa',
    room: 'Exterior',
    caption: 'Building exterior',
  },
  {
    id: 'gym-lounge-wide',
    src: '/images/gym-lounge-wide.jpg',
    alt: 'Wide view of gym and lounge deck',
    room: 'Gym',
    caption: 'Air conditioning · Gym · Exercise equipment · Ceiling fan',
  },
  {
    id: 'lobby-entrance',
    src: '/images/lobby-entrance.jpg',
    alt: 'Lobby entrance with reception desk',
    room: 'Exterior',
    caption: 'Shared lobby',
  },
  {
    id: 'lobby-lounge-wide',
    src: '/images/lobby-lounge-wide.jpg',
    alt: 'Lobby lounge seating area',
    room: 'Exterior',
    caption: 'Shared lounge',
  },
  {
    id: 'bench-plants-jacuzzi',
    src: '/images/bench-plants-jacuzzi.jpg',
    alt: 'Bench seating beside planters and the jacuzzi deck',
    room: 'Jacuzzi',
    caption: 'Private outdoor jacuzzi',
  },
  {
    id: 'living-yellow-wide',
    src: '/images/living-yellow-wide.jpg',
    alt: 'Living room with mustard leather sofa and dining table',
    room: 'Living room 2',
    caption: 'Ceiling fan · Hot tub',
  },
  {
    id: 'living-tv-console',
    src: '/images/living-tv-console.jpg',
    alt: 'TV console with rattan cabinet doors',
    room: 'Living room 2',
    caption: 'Ceiling fan · Hot tub',
  },
  {
    id: 'living-dining-angle',
    src: '/images/living-dining-angle.jpg',
    alt: 'Dining nook and kitchenette angle',
    room: 'Full kitchen',
    caption: 'Fridge · Blender · Oven · Countertop · Coffee maker',
  },
]

// Groups shown in the Photo tour, in scroll order
export const photoTourSections = [
  { room: 'Living room 2', caption: 'Ceiling fan · Hot tub', photoIds: ['living-yellow-wide', 'living-tv-console', 'living-dining-angle'] },
  { room: 'Full kitchen', caption: 'Fridge · Blender · Oven · Countertop · Coffee maker · Microwave · Toaster · Wine glasses · Cookware and cutlery', photoIds: ['living-dining-angle'] },
  { room: 'Bedroom', caption: 'Double bed · Air conditioning · Bed linen · Ceiling fan · Clothes storage · Closet · Hangers · Iron · Room-darkening shades · Cleaning available during stay · Cleaning products · Long-term stays allowed · Private entrance', photoIds: ['hero-bedroom'] },
  { room: 'Full bathroom', caption: 'Hair dryer · Hot water · Shampoo · Shower gel', photoIds: [] },
  { room: 'Gym', caption: 'Air conditioning · Gym · Exercise equipment · Ceiling fan', photoIds: ['gym-lounge-wide'] },
  { room: 'Exterior', caption: '', photoIds: ['lobby-entrance', 'lobby-lounge-wide', 'hero-exterior'] },
  { room: 'Living room 1', caption: 'Sofa · Air conditioning · Ceiling fan · TV', photoIds: ['hero-lounge-wide', 'hero-lounge-nook', 'bench-plants-jacuzzi'] },
]

export const listing = {
  title: 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10',
  subtitle: 'Entire serviced apartment in Candolim, India',
  guests: 3,
  bedrooms: 1,
  beds: 1,
  bathrooms: 1,
  rating: 4.95,
  reviewCount: 19,
  isGuestFavourite: true,
  price: 28499,
  currency: '₹',
  priceUnit: 'night',
  host: {
    name: 'Mirashya Homes',
    isSuperhost: false,
    yearsHosting: 2,
    reviewsAsHost: 1463,
    hostRating: 4.04,
    responseRate: '100%',
    respondsWithin: 'an hour',
    avatarInitial: 'M',
  },
  coHosts: [
    { name: 'Prasad', avatarInitial: 'P' },
    { name: 'Aden Zen Rehan', avatarInitial: 'A' },
    { name: 'Habsimran Priyanka', avatarInitial: 'H' },
    { name: 'Sayuri', avatarInitial: 'S' },
  ],
  highlights: [
    {
      icon: 'trees',
      title: 'Outdoor entertainment',
      body: 'This place has a hot tub, and a shared jacuzzi great for outdoor dining or drinks.',
    },
    {
      icon: 'sparkles',
      title: 'Designed for staying cool',
      body: 'Beat the heat with A/C and ceiling fans placed around the home.',
    },
    {
      icon: 'key',
      title: 'Self check-in',
      body: 'Check yourself in with the smart lock.',
    },
  ],
  description: [
    "Experience Your Relaxing Holiday at Amor De Goa by Mirashya Homes! Stay in the cosy 1BHK, right in the heart of Candolim, featuring a private jacuzzi ✨. Enjoy high speed WiFi 📶, 4K smart TV 📺, air-friendly comfort ❄️, and access the shared gym 🏋️, Candolim Beach 🏖️, popular cafés, and a host of nearby luxury dining options 🍽️.",
    'Free unlimited high speed WiFi, complimentary tea/coffee, and dedicated workspace included for every stay.',
  ],
  sleepingArrangement: [
    { room: 'Bedroom', detail: '1 double bed', photoId: 'hero-bedroom' },
    { room: 'Living room', detail: '1 sofa bed', photoId: 'living-yellow-wide' },
  ],
  amenityGroups: [
    {
      title: 'Bathroom',
      items: ['Hair dryer', 'Hot water'],
    },
    {
      title: 'Bedroom and laundry',
      items: ['Washer', 'Essentials', 'Hangers', 'Bed linen', 'Extra pillows and blankets', 'Iron', 'Clothes storage'],
    },
    {
      title: 'Entertainment',
      items: ['55" HDTV with Netflix, standard cable', 'Pool table', 'Exercise equipment'],
    },
    {
      title: 'Heating and cooling',
      items: ['Air conditioning', 'Ceiling fan'],
    },
    {
      title: 'Home safety',
      items: ['Exterior security cameras on property', 'Smoke alarm', 'Carbon monoxide alarm'],
    },
    {
      title: 'Internet and office',
      items: ['Wifi', 'Dedicated workspace'],
    },
    {
      title: 'Kitchen and dining',
      items: ['Kitchen', 'Refrigerator', 'Microwave', 'Cooking basics', 'Dishes and silverware', 'Coffee maker'],
    },
    {
      title: 'Outdoor',
      items: ['Private patio or balcony', 'Outdoor furniture'],
    },
    {
      title: 'Parking and facilities',
      items: ['Free parking on premises', 'Gym', 'Hot tub', 'Private living room'],
    },
    {
      title: 'Services',
      items: ['Self check-in', 'Smart lock', 'Long term stays allowed', 'Cleaning available during stay'],
    },
    {
      title: 'Not included',
      items: ['Air conditioning in every room', 'Smoking allowed'],
      unavailable: true,
    },
  ],
  previewAmenities: [
    'Kitchen',
    'Dedicated workspace',
    'Free parking on premises',
    'Hot tub',
    'Pool',
    'Wifi',
    'Exterior security cameras on property',
    'Air conditioning',
  ],
  calendarNote: '5 nights in Candolim',
  reviews: [
    {
      name: 'Sandhya',
      meta: 'Bengaluru, India · May 2026',
      rating: 5,
      text: 'This apartment was beautiful and clean, the pictures do not do it justice! The host was quick to respond, kind and helpful with any questions we had before and during our trip. We would definitely recommend and stay again!',
    },
    {
      name: 'Vedant',
      meta: '2 weeks ago',
      rating: 5,
      text: "We had a great time at this property. It was clean, spacious and had everything we needed. The host was quick and friendly, always available and responded fast to messages. Highly recommend staying here!",
    },
    {
      name: 'Siddhi',
      meta: '3 weeks ago',
      rating: 5,
      text: 'Great space, comfy beds and just a short walk from cafés and the beach. Communication with the host was smooth throughout. Would happily book again on our next Goa trip.',
    },
    {
      name: 'Rohan',
      meta: 'October 2025',
      rating: 5,
      text: 'The jacuzzi was the highlight of our stay — such a lovely surprise. Everything was spotless and check-in was completely seamless with the smart lock.',
    },
  ],
  location: {
    area: 'Candolim, Goa, India',
    description:
      "Candolim sits along a quiet stretch of Goa's coast, a short stroll from the beach and a cluster of well-loved cafés and restaurants.",
  },
  thingsToKnow: {
    houseRules: ['Check-in after 2:00 PM', 'Checkout before 11:00 AM', '3 guests maximum', 'No pets'],
    safety: ['Exterior security cameras on property', 'Carbon monoxide alarm not reported', 'Smoke alarm'],
    cancellation: ['Free cancellation for 48 hours', "Review this Host's full cancellation policy before booking."],
  },
}
