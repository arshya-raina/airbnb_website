import React from 'react'

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export const IconSearch = (p) => (
  <svg viewBox="0 0 32 32" width={16} height={16} {...base} {...p}>
    <path d="M13 24c6.1 0 11-4.9 11-11S19.1 2 13 2 2 6.9 2 13s4.9 11 11 11ZM30 30l-9.6-9.6" />
  </svg>
)

export const IconMenu = (p) => (
  <svg viewBox="0 0 32 32" width={16} height={16} fill="currentColor" {...p}>
    <path d="M2 6h28v2H2zM2 15h28v2H2zM2 24h28v2H2z" />
  </svg>
)

export const IconUser = (p) => (
  <svg viewBox="0 0 32 32" width={24} height={24} fill="currentColor" {...p}>
    <path d="M16 16c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8Zm0 4c-6.1 0-18 3.1-18 9.3V32h36v-2.7c0-6.2-11.9-9.3-18-9.3Z" />
  </svg>
)

export const IconShare = (p) => (
  <svg viewBox="0 0 32 32" width={16} height={16} {...base} {...p}>
    <path d="M16 3v19M22 9l-6-6-6 6M4 19v9a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-9" />
  </svg>
)

export const IconHeart = (p) => (
  <svg viewBox="0 0 32 32" width={16} height={16} {...base} strokeWidth={2} {...p}>
    <path d="M16 28s-13-8.4-13-17a7 7 0 0 1 13-3.6A7 7 0 0 1 29 11c0 8.6-13 17-13 17Z" />
  </svg>
)

export const IconStar = (p) => (
  <svg viewBox="0 0 32 32" width={12} height={12} fill="currentColor" {...p}>
    <path d="M16 2 20.5 12 31 13.2 23 20.4 25.2 30.8 16 25.4 6.8 30.8 9 20.4 1 13.2 11.5 12z" />
  </svg>
)

export const IconGrid = (p) => (
  <svg viewBox="0 0 32 32" width={16} height={16} fill="currentColor" {...p}>
    <path d="M4 4h11v11H4zM17 4h11v11H17zM4 17h11v11H4zM17 17h11v11H17z" />
  </svg>
)

export const IconClose = (p) => (
  <svg viewBox="0 0 32 32" width={20} height={20} {...base} strokeWidth={2.4} {...p}>
    <path d="M6 6l20 20M26 6L6 26" />
  </svg>
)

export const IconChevronLeft = (p) => (
  <svg viewBox="0 0 32 32" width={18} height={18} {...base} strokeWidth={2.4} {...p}>
    <path d="M20 6 10 16l10 10" />
  </svg>
)

export const IconChevronRight = (p) => (
  <svg viewBox="0 0 32 32" width={18} height={18} {...base} strokeWidth={2.4} {...p}>
    <path d="M12 6l10 10-10 10" />
  </svg>
)

export const IconChevronDown = (p) => (
  <svg viewBox="0 0 32 32" width={14} height={14} {...base} strokeWidth={2.4} {...p}>
    <path d="M6 12l10 10 10-10" />
  </svg>
)

export const IconTrees = (p) => (
  <svg viewBox="0 0 48 48" width={28} height={28} {...base} {...p}>
    <path d="M14 20a7 7 0 1 1 14 0M11 27a8 8 0 1 1 16 0M18 27v15M30 22a6 6 0 1 1 12 0M32 29a7 7 0 1 1 14 0M38 29v13" />
  </svg>
)

export const IconSparkles = (p) => (
  <svg viewBox="0 0 48 48" width={28} height={28} {...base} {...p}>
    <path d="M24 6l3 9 9 3-9 3-3 9-3-9-9-3 9-3 3-9ZM38 30l1.6 4.4L44 36l-4.4 1.6L38 42l-1.6-4.4L32 36l4.4-1.6L38 30Z" />
  </svg>
)

export const IconKey = (p) => (
  <svg viewBox="0 0 48 48" width={28} height={28} {...base} {...p}>
    <path d="M20 28a10 10 0 1 1 7-17 10 10 0 0 1-7 17Zm3-7 15 15M32 32l4 4M38 26l4 4" />
  </svg>
)

export const IconCheck = (p) => (
  <svg viewBox="0 0 32 32" width={18} height={18} {...base} strokeWidth={2.4} {...p}>
    <path d="M5 17l7 7 15-15" />
  </svg>
)

export const IconMinus = (p) => (
  <svg viewBox="0 0 32 32" width={16} height={16} fill="currentColor" {...p}>
    <path d="M4 15h24v2H4z" />
  </svg>
)

export const IconMedal = (p) => (
  <svg viewBox="0 0 32 32" width={22} height={22} {...base} {...p}>
    <circle cx="16" cy="13" r="9" />
    <path d="M11 20 8 30l8-4 8 4-3-10" />
  </svg>
)

const amenityIcons = {
  Kitchen: (p) => (
    <svg viewBox="0 0 48 48" width={22} height={22} {...base} {...p}>
      <path d="M8 18h32M14 18V8M22 18V8M14 8h8M32 8v10M20 30h8M24 30v10" />
    </svg>
  ),
  'Dedicated workspace': (p) => (
    <svg viewBox="0 0 48 48" width={22} height={22} {...base} {...p}>
      <rect x="6" y="12" width="36" height="20" rx="2" />
      <path d="M6 26h36M18 40h12M24 32v8" />
    </svg>
  ),
  'Free parking on premises': (p) => (
    <svg viewBox="0 0 48 48" width={22} height={22} {...base} {...p}>
      <rect x="10" y="10" width="28" height="28" rx="4" />
      <path d="M19 32V16h6a5 5 0 0 1 0 10h-6" />
    </svg>
  ),
  'Hot tub': (p) => (
    <svg viewBox="0 0 48 48" width={22} height={22} {...base} {...p}>
      <path d="M6 26h36v6a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4v-6ZM10 26v-4M38 26v-4M16 16c0-3 2-4 2-7M24 16c0-3 2-4 2-7M32 16c0-3 2-4 2-7" />
    </svg>
  ),
  Pool: (p) => (
    <svg viewBox="0 0 48 48" width={22} height={22} {...base} {...p}>
      <path d="M4 20h40v14H4zM4 34c3 0 3 4 6 4s3-4 6-4 3 4 6 4 3-4 6-4 3 4 6 4 3-4 6-4M14 20V9l8 6 8-6v11" />
    </svg>
  ),
  Wifi: (p) => (
    <svg viewBox="0 0 48 48" width={22} height={22} {...base} {...p}>
      <path d="M6 19a26 26 0 0 1 36 0M13 26a16 16 0 0 1 22 0M20 33a6 6 0 0 1 8 0" />
      <circle cx="24" cy="39" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  ),
  'Exterior security cameras on property': (p) => (
    <svg viewBox="0 0 48 48" width={22} height={22} {...base} {...p}>
      <path d="M6 16h20l6 6h10v14H16l-6-6H6z" />
      <circle cx="28" cy="28" r="5" />
    </svg>
  ),
  'Air conditioning': (p) => (
    <svg viewBox="0 0 48 48" width={22} height={22} {...base} {...p}>
      <rect x="6" y="14" width="36" height="10" rx="2" />
      <path d="M12 24v4M20 24v6M28 24v4M36 24v6" />
    </svg>
  ),
}

export const AmenityIcon = ({ name, ...rest }) => {
  const Cmp = amenityIcons[name]
  if (!Cmp) return <IconCheck {...rest} />
  return <Cmp {...rest} />
}
