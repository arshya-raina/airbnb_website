import React, { useEffect, useState } from 'react'
import { listing } from '../data/listing.js'
import '../styles/stickynav.css'

const SECTIONS = [
  { id: 'photos', label: 'Photos' },
  { id: 'amenities', label: 'Amenities' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'location', label: 'Location' },
]

export default function StickyNav({ visible, onReserve }) {
  const [active, setActive] = useState('photos')

  useEffect(() => {
    const onScroll = () => {
      let current = 'photos'
      for (const s of SECTIONS) {
        const el = document.getElementById(s.id)
        if (el && el.getBoundingClientRect().top < 160) current = s.id
      }
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className={'stickynav' + (visible ? ' is-visible' : '')}>
      <div className="stickynav__inner container">
        <nav className="stickynav__tabs" aria-label="Listing sections">
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              className={'stickynav__tab' + (active === s.id ? ' is-active' : '')}
              onClick={() => scrollTo(s.id)}
            >
              {s.label}
            </button>
          ))}
        </nav>
        <div className="stickynav__book">
          <div className="stickynav__price">
            <strong>{listing.currency}{listing.price.toLocaleString('en-IN')}</strong>
            <span> night</span>
          </div>
          <button className="stickynav__reserve" onClick={onReserve}>Reserve</button>
        </div>
      </div>
    </div>
  )
}
