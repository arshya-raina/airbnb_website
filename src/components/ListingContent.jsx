import React, { useState } from 'react'
import { listing, photos } from '../data/listing.js'
import { IconStar, IconMedal, IconTrees, IconSparkles, IconKey, AmenityIcon } from './Icons.jsx'
import BookingCard from './BookingCard.jsx'
import AmenitiesModal from './AmenitiesModal.jsx'
import '../styles/listing.css'

const highlightIcon = { trees: IconTrees, sparkles: IconSparkles, key: IconKey }

export default function ListingContent({ onOpenPhoto }) {
  const [descExpanded, setDescExpanded] = useState(false)
  const [amenitiesOpen, setAmenitiesOpen] = useState(false)

  const sleepPhoto = (id) => photos.find((p) => p.id === id)

  return (
    <div className="container listing-body">
      <div className="listing-body__main">
        <section id="photos" className="section overview">
          <h1 className="overview__title">{listing.title}</h1>
          <div className="overview__meta">
            <span className="overview__rating">
              <IconStar aria-hidden="true" /> {listing.rating}
            </span>
            <span className="overview__dot">·</span>
            <a href="#reviews" className="overview__link">{listing.reviewCount} reviews</a>
            <span className="overview__dot">·</span>
            <span>{listing.location.area}</span>
          </div>
          <div className="overview__subrow">
            <span>{listing.subtitle}</span>
            <span className="overview__dot">·</span>
            <span>{listing.guests} guests</span>
            <span className="overview__dot">·</span>
            <span>{listing.bedrooms} bedroom</span>
            <span className="overview__dot">·</span>
            <span>{listing.beds} bed</span>
            <span className="overview__dot">·</span>
            <span>{listing.bathrooms} bath</span>
          </div>
        </section>

        <section className="section host-strip">
          <div className="host-strip__avatar" aria-hidden="true">{listing.host.avatarInitial}</div>
          <div>
            <h2 className="host-strip__title">Hosted by {listing.host.name}</h2>
            <p className="host-strip__meta">{listing.host.yearsHosting} years hosting</p>
          </div>
        </section>

        <ul className="section highlights">
          {listing.highlights.map((h) => {
            const Icon = highlightIcon[h.icon]
            return (
              <li key={h.title} className="highlights__item">
                <Icon aria-hidden="true" />
                <div>
                  <h3>{h.title}</h3>
                  <p>{h.body}</p>
                </div>
              </li>
            )
          })}
        </ul>

        <section className="section description">
          {listing.description.map((p, i) => (
            <p key={i} className={descExpanded || i === 0 ? '' : 'is-clamped'}>
              {p}
            </p>
          ))}
          <button className="text-link" onClick={() => setDescExpanded((v) => !v)}>
            {descExpanded ? 'Show less' : 'Show more'} &nbsp;›
          </button>
        </section>

        <section className="section sleeping">
          <h2 className="section__heading">Where you'll sleep</h2>
          <div className="sleeping__grid">
            {listing.sleepingArrangement.map((s) => {
              const p = sleepPhoto(s.photoId)
              const idx = photos.findIndex((ph) => ph.id === s.photoId)
              return (
                <button key={s.room} className="sleeping__card" onClick={() => onOpenPhoto(idx)}>
                  <img src={p.src} alt={p.alt} />
                  <span className="sleeping__label">{s.room}</span>
                  <span className="sleeping__detail">{s.detail}</span>
                </button>
              )
            })}
          </div>
        </section>

        <section id="amenities" className="section amenities">
          <h2 className="section__heading">What this place offers</h2>
          <div className="amenities__grid">
            {listing.previewAmenities.map((a) => (
              <div key={a} className="amenities__item">
                <AmenityIcon name={a} aria-hidden="true" />
                <span>{a}</span>
              </div>
            ))}
          </div>
          <button className="btn-outline" onClick={() => setAmenitiesOpen(true)}>
            Show all {listing.amenityGroups.reduce((n, g) => n + g.items.length, 0)} amenities
          </button>
        </section>

        <section className="section calendar-teaser">
          <h2 className="section__heading">{listing.calendarNote}</h2>
          <p className="calendar-teaser__sub">Minimum stay policies may apply. Add your travel dates for exact pricing.</p>
          <div className="calendar-teaser__ratingbox">
            <div className="calendar-teaser__medal"><IconMedal aria-hidden="true" /></div>
            <div className="calendar-teaser__score">{listing.rating}</div>
            <div className="calendar-teaser__label">Guest favourite</div>
            <p className="calendar-teaser__desc">This home is a guest favourite based on ratings, reviews and reliability.</p>
          </div>
        </section>

        <section id="reviews" className="section reviews">
          <h2 className="section__heading">
            <IconStar aria-hidden="true" /> {listing.rating} · {listing.reviewCount} reviews
          </h2>
          <div className="reviews__grid">
            {listing.reviews.map((r) => (
              <article key={r.name} className="review-card">
                <div className="review-card__head">
                  <div className="review-card__avatar" aria-hidden="true">{r.name[0]}</div>
                  <div>
                    <div className="review-card__name">{r.name}</div>
                    <div className="review-card__meta">{r.meta}</div>
                  </div>
                </div>
                <div className="review-card__stars" aria-hidden="true">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <IconStar key={i} />
                  ))}
                </div>
                <p className="review-card__text">{r.text}</p>
              </article>
            ))}
          </div>
          <button className="btn-outline">Show all {listing.reviewCount} reviews</button>
        </section>

        <section id="location" className="section location">
          <h2 className="section__heading">Where you'll be</h2>
          <p className="location__area">{listing.location.area}</p>
          <div className="location__map" role="img" aria-label="Approximate location map of Candolim, Goa">
            <svg viewBox="0 0 600 260" width="100%" height="260" preserveAspectRatio="none">
              <rect width="600" height="260" fill="#eef2f0" />
              <path d="M0 60 C 120 20, 220 120, 380 90 S 600 40, 600 80 L 600 260 L 0 260 Z" fill="#cfe3da" />
              <path d="M0 150 C 150 130, 260 200, 420 170 S 600 190, 600 160 L 600 260 L 0 260 Z" fill="#dce9e1" />
              <circle cx="300" cy="130" r="80" fill="#c9e6c9" opacity="0.5" />
              <circle cx="300" cy="130" r="10" fill="#222" />
              <circle cx="300" cy="130" r="22" fill="none" stroke="#222" strokeWidth="1.4" opacity="0.4" />
            </svg>
          </div>
          <p className="location__desc">{listing.location.description}</p>
        </section>

        <section className="section host-card">
          <h2 className="section__heading">Meet your host</h2>
          <div className="host-card__panel">
            <div className="host-card__identity">
              <div className="host-card__avatar" aria-hidden="true">{listing.host.avatarInitial}</div>
              <h3>{listing.host.name}</h3>
              <p className="host-card__type">Host</p>
              <ul className="host-card__stats">
                <li><strong>{listing.host.reviewsAsHost.toLocaleString('en-IN')}</strong>Reviews</li>
                <li><strong>{listing.host.hostRating}</strong>Rating</li>
                <li><strong>{listing.host.yearsHosting}</strong>Years hosting</li>
              </ul>
            </div>
            <div className="host-card__details">
              <h4>Co-hosts</h4>
              <div className="host-card__cohosts">
                {listing.coHosts.map((c) => (
                  <div key={c.name} className="host-card__cohost">
                    <div className="host-card__avatar host-card__avatar--sm" aria-hidden="true">{c.avatarInitial}</div>
                    <span>{c.name}</span>
                  </div>
                ))}
              </div>
              <h4>Host details</h4>
              <p>Response rate: {listing.host.responseRate}</p>
              <p>Responds within {listing.host.respondsWithin}</p>
              <button className="btn-outline">Message host</button>
            </div>
          </div>
        </section>

        <section className="section things-to-know">
          <h2 className="section__heading">Things to know</h2>
          <div className="things-to-know__grid">
            <div>
              <h4>House rules</h4>
              <ul>
                {listing.thingsToKnow.houseRules.map((r) => <li key={r}>{r}</li>)}
              </ul>
              <button className="text-link">Show more</button>
            </div>
            <div>
              <h4>Safety &amp; property</h4>
              <ul>
                {listing.thingsToKnow.safety.map((r) => <li key={r}>{r}</li>)}
              </ul>
              <button className="text-link">Show more</button>
            </div>
            <div>
              <h4>Cancellation policy</h4>
              <ul>
                {listing.thingsToKnow.cancellation.map((r) => <li key={r}>{r}</li>)}
              </ul>
              <button className="text-link">Show more</button>
            </div>
          </div>
        </section>
      </div>

      <div className="listing-body__aside">
        <BookingCard />
      </div>

      {amenitiesOpen && (
        <AmenitiesModal onClose={() => setAmenitiesOpen(false)} />
      )}
    </div>
  )
}
