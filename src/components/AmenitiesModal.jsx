import React, { useEffect } from 'react'
import { IconClose, AmenityIcon, IconMinus } from './Icons.jsx'
import { listing } from '../data/listing.js'
import '../styles/modal.css'

export default function AmenitiesModal({ onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" role="dialog" aria-modal="true" aria-label="All amenities" onClick={(e) => e.stopPropagation()}>
        <div className="modal__header">
          <button className="phototour__icon-btn" onClick={onClose} aria-label="Close">
            <IconClose aria-hidden="true" />
          </button>
          <h2>What this place offers</h2>
        </div>
        <div className="modal__body">
          {listing.amenityGroups.map((group) => (
            <div key={group.title} className="modal__group">
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item} className={group.unavailable ? 'is-unavailable' : ''}>
                    {group.unavailable ? <IconMinus aria-hidden="true" /> : <AmenityIcon name={item} aria-hidden="true" />}
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
