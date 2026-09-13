import React from 'react'
import { IconGrid, IconShare, IconHeart } from './Icons.jsx'
import { photos } from '../data/listing.js'
import '../styles/gallery.css'

export default function Gallery({ onOpenPhoto, onOpenTour }) {
  const [big, ...rest] = photos.slice(0, 5)

  return (
    <section className="gallery" aria-label="Photo gallery">
      <div className="gallery__topbar">
        <h1 className="gallery__title-mobile">Romantic Jacuzzi 1BHK Candolim | Mirashya UG10</h1>
        <div className="gallery__actions">
          <button className="gallery__action" type="button">
            <IconShare aria-hidden="true" />
            <span>Share</span>
          </button>
          <button className="gallery__action" type="button">
            <IconHeart aria-hidden="true" />
            <span>Save</span>
          </button>
        </div>
      </div>

      <div className="gallery__grid">
        <button
          className="gallery__cell gallery__cell--big"
          onClick={() => onOpenPhoto(0)}
          aria-label={`View photo: ${big.alt}`}
        >
          <img src={big.src} alt={big.alt} loading="eager" />
        </button>
        <div className="gallery__side">
          {rest.map((p, i) => (
            <button
              key={p.id}
              className="gallery__cell"
              onClick={() => onOpenPhoto(i + 1)}
              aria-label={`View photo: ${p.alt}`}
            >
              <img src={p.src} alt={p.alt} loading="eager" />
            </button>
          ))}
        </div>
        <button className="gallery__show-all" type="button" onClick={onOpenTour}>
          <IconGrid aria-hidden="true" />
          <span>Show all photos</span>
        </button>
      </div>
    </section>
  )
}
