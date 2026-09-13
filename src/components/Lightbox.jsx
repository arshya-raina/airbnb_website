import React, { useEffect, useRef, useState } from 'react'
import { IconClose, IconChevronLeft, IconChevronRight, IconShare, IconHeart } from './Icons.jsx'
import { photos } from '../data/listing.js'
import '../styles/lightbox.css'

export default function Lightbox({ index, onClose, onNavigate }) {
  const [direction, setDirection] = useState(0)
  const liveRegionRef = useRef(null)
  const total = photos.length
  const photo = photos[index]

  const goPrev = React.useCallback(() => {
    setDirection(-1)
    onNavigate((index - 1 + total) % total)
  }, [index, total, onNavigate])

  const goNext = React.useCallback(() => {
    setDirection(1)
    onNavigate((index + 1) % total)
  }, [index, total, onNavigate])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowLeft') goPrev()
      else if (e.key === 'ArrowRight') goNext()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose, goPrev, goNext])

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={`Photo ${index + 1} of ${total}`}>
      <div className="lightbox__header">
        <button className="phototour__icon-btn" onClick={onClose} aria-label="Close photo viewer">
          <IconClose aria-hidden="true" />
        </button>
        <div className="lightbox__counter">{index + 1} / {total}</div>
        <div className="phototour__header-actions">
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

      <div className="lightbox__stage">
        <button className="lightbox__nav lightbox__nav--prev" onClick={goPrev} aria-label="Previous photo">
          <IconChevronLeft aria-hidden="true" />
        </button>

        <div className="lightbox__image-wrap">
          <img
            key={photo.id}
            src={photo.src}
            alt={photo.alt}
            className={'lightbox__image ' + (direction >= 0 ? 'slide-in-right' : 'slide-in-left')}
          />
        </div>

        <button className="lightbox__nav lightbox__nav--next" onClick={goNext} aria-label="Next photo">
          <IconChevronRight aria-hidden="true" />
        </button>
      </div>

      <div className="lightbox__footer">
        <p>{photo.room} · {photo.caption}</p>
      </div>

      <div className="sr-only" aria-live="polite" ref={liveRegionRef}>
        {`Showing photo ${index + 1} of ${total}: ${photo.alt}`}
      </div>
    </div>
  )
}
