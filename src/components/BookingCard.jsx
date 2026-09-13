import React, { useState } from 'react'
import { listing } from '../data/listing.js'
import { IconStar, IconChevronDown } from './Icons.jsx'
import '../styles/bookingcard.css'

export default function BookingCard() {
  const [guests, setGuests] = useState(2)
  const nights = 5
  const subtotal = listing.price * nights
  const cleaningFee = 1200
  const serviceFee = Math.round(subtotal * 0.12)
  const total = subtotal + cleaningFee + serviceFee

  return (
    <aside className="booking-card" aria-label="Booking">
      <div className="booking-card__price-row">
        <div>
          <span className="booking-card__price">{listing.currency}{listing.price.toLocaleString('en-IN')}</span>
          <span className="booking-card__unit"> for 1 night</span>
        </div>
        <div className="booking-card__rating">
          <IconStar aria-hidden="true" />
          <span>{listing.rating}</span>
          <span className="booking-card__dot">·</span>
          <span className="booking-card__reviews">{listing.reviewCount} reviews</span>
        </div>
      </div>

      <div className="booking-card__form">
        <div className="booking-card__dates">
          <label className="booking-card__field">
            <span>CHECK-IN</span>
            <span className="booking-card__field-value">11/9/2026</span>
          </label>
          <label className="booking-card__field">
            <span>CHECKOUT</span>
            <span className="booking-card__field-value">11/14/2026</span>
          </label>
        </div>
        <label className="booking-card__field booking-card__field--guests">
          <span>GUESTS</span>
          <span className="booking-card__guest-row">
            <span className="booking-card__field-value">{guests} guest{guests > 1 ? 's' : ''}</span>
            <IconChevronDown aria-hidden="true" />
          </span>
        </label>
      </div>

      <button className="booking-card__reserve">Reserve</button>
      <p className="booking-card__notice">You won't be charged yet</p>

      <div className="booking-card__breakdown">
        <div className="booking-card__row">
          <span>{listing.currency}{listing.price.toLocaleString('en-IN')} x {nights} nights</span>
          <span>{listing.currency}{subtotal.toLocaleString('en-IN')}</span>
        </div>
        <div className="booking-card__row">
          <span>Cleaning fee</span>
          <span>{listing.currency}{cleaningFee.toLocaleString('en-IN')}</span>
        </div>
        <div className="booking-card__row">
          <span>Airbnb service fee</span>
          <span>{listing.currency}{serviceFee.toLocaleString('en-IN')}</span>
        </div>
      </div>
      <div className="booking-card__total">
        <span>Total before taxes</span>
        <span>{listing.currency}{total.toLocaleString('en-IN')}</span>
      </div>
    </aside>
  )
}
