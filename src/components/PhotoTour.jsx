import React, { useEffect, useMemo, useRef, useState } from 'react'
import { IconClose, IconShare, IconHeart, IconChevronLeft } from './Icons.jsx'
import { photos, photoTourSections } from '../data/listing.js'
import '../styles/phototour.css'

const photoById = Object.fromEntries(photos.map((p) => [p.id, p]))

export default function PhotoTour({ onClose, onOpenPhoto }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRefs = useRef([])
  const filmRefs = useRef([])
  const scrollRef = useRef(null)

  const globalIndexByPhotoId = useMemo(() => {
    const map = {}
    photos.forEach((p, i) => {
      map[p.id] = i
    })
    return map
  }, [])

  useEffect(() => {
    const root = scrollRef.current
    if (!root) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.dataset.index)
            setActiveIndex(idx)
          }
        })
      },
      { root, threshold: 0, rootMargin: '-45% 0px -45% 0px' },
    )
    sectionRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  useEffect(() => {
    const el = filmRefs.current[activeIndex]
    if (el) el.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  }, [activeIndex])

  const jumpTo = (index) => {
    const el = sectionRefs.current[index]
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const active = photoTourSections[activeIndex]

  return (
    <div className="phototour" role="dialog" aria-modal="true" aria-label="Photo tour">
      <div className="phototour__header">
        <button className="phototour__icon-btn" onClick={onClose} aria-label="Close photo tour">
          <IconChevronLeft aria-hidden="true" />
        </button>
        <div className="phototour__header-actions">
          <button className="gallery__action" type="button">
            <IconShare aria-hidden="true" />
            <span>Share</span>
          </button>
          <button className="gallery__action" type="button">
            <IconHeart aria-hidden="true" />
            <span>Save</span>
          </button>
          <button className="phototour__icon-btn" onClick={onClose} aria-label="Close">
            <IconClose aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="phototour__filmstrip no-scrollbar">
        {photoTourSections.map((section, i) => {
          const thumbId = section.photoIds[0]
          const thumb = thumbId ? photoById[thumbId] : null
          return (
            <button
              key={section.room}
              ref={(el) => (filmRefs.current[i] = el)}
              className={'phototour__film-item' + (i === activeIndex ? ' is-active' : '')}
              onClick={() => jumpTo(i)}
            >
              <span className="phototour__film-thumb">
                {thumb && <img src={thumb.src} alt="" />}
              </span>
              <span className="phototour__film-label">{section.room}</span>
            </button>
          )
        })}
      </div>

      <div className="phototour__body" ref={scrollRef}>
        <aside className="phototour__sidebar">
          <h2 className="phototour__room">{active.room}</h2>
          {active.caption && <p className="phototour__caption">{active.caption}</p>}
        </aside>

        <div className="phototour__content">
          {photoTourSections.map((section, i) => (
            <section
              key={section.room}
              className="phototour__section"
              data-index={i}
              ref={(el) => (sectionRefs.current[i] = el)}
            >
              <div className="phototour__section-heading">
                <h3>{section.room}</h3>
                {section.caption && <p>{section.caption}</p>}
              </div>
              <div className="phototour__grid">
                {section.photoIds.length === 0 && (
                  <div className="phototour__placeholder" aria-hidden="true" />
                )}
                {section.photoIds.map((id) => {
                  const p = photoById[id]
                  return (
                    <button
                      key={id}
                      className="phototour__photo"
                      onClick={() => onOpenPhoto(globalIndexByPhotoId[id])}
                      aria-label={`View photo: ${p.alt}`}
                    >
                      <img src={p.src} alt={p.alt} loading="lazy" />
                    </button>
                  )
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
