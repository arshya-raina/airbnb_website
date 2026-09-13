import React, { useCallback, useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import Gallery from './components/Gallery.jsx'
import StickyNav from './components/StickyNav.jsx'
import ListingContent from './components/ListingContent.jsx'
import PhotoTour from './components/PhotoTour.jsx'
import Lightbox from './components/Lightbox.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

export default function App() {
  const [tourOpen, setTourOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const [stickyVisible, setStickyVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setStickyVisible(window.scrollY > 420)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const openPhoto = useCallback((index) => {
    setLightboxIndex(index)
  }, [])

  const closeLightbox = useCallback(() => setLightboxIndex(null), [])
  const navigateLightbox = useCallback((index) => setLightboxIndex(index), [])

  const openTour = useCallback(() => setTourOpen(true), [])
  const closeTour = useCallback(() => setTourOpen(false), [])

  const scrollToBooking = () => {
    const el = document.querySelector('.booking-card')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <div className="app">
      <a className="skip-link" href="#photos">Skip to content</a>
      <Header />
      <StickyNav visible={stickyVisible && !tourOpen && lightboxIndex === null} onReserve={scrollToBooking} />
      <main>
        <Gallery onOpenPhoto={openPhoto} onOpenTour={openTour} />
        <ListingContent onOpenPhoto={openPhoto} />
      </main>
      <Footer />

      {tourOpen && (
        <PhotoTour onClose={closeTour} onOpenPhoto={openPhoto} />
      )}

      {lightboxIndex !== null && (
        <Lightbox index={lightboxIndex} onClose={closeLightbox} onNavigate={navigateLightbox} />
      )}
    </div>
  )
}
