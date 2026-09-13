import React from 'react'
import { IconSearch, IconMenu, IconUser } from './Icons.jsx'
import '../styles/header.css'

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-header__logo" href="#" aria-label="Airbnb home">
          <svg viewBox="0 0 32 32" width={32} height={32} fill="#FF385C" aria-hidden="true">
            <path d="M16 2c1.7 0 3 .9 4.2 2.9.9 1.5 6.6 11.6 8.1 15.3.6 1.4.9 2.6.9 3.7 0 3.7-2.9 6.1-6.4 6.1-2.4 0-4.7-1.4-6.8-4.2-2.1 2.8-4.4 4.2-6.8 4.2-3.5 0-6.4-2.4-6.4-6.1 0-1.1.3-2.3.9-3.7 1.5-3.7 7.2-13.8 8.1-15.3C13 2.9 14.3 2 16 2Zm0 3.4c-.6 0-1.1.4-1.9 1.7-.9 1.5-6.4 11.3-7.8 14.7-.4 1-.6 1.8-.6 2.5 0 2.3 1.7 3.7 3.7 3.7 1.9 0 3.9-1.5 5.7-4.4-2.1-3.1-3.3-5.9-3.3-8 0-2.6 1.9-4.6 4.2-4.6s4.2 2 4.2 4.6c0 2.1-1.2 4.9-3.3 8 1.8 2.9 3.8 4.4 5.7 4.4 2 0 3.7-1.4 3.7-3.7 0-.7-.2-1.5-.6-2.5-1.4-3.4-6.9-13.2-7.8-14.7-.8-1.3-1.3-1.7-1.9-1.7Zm0 6.3c-1 0-1.7.9-1.7 2.1 0 1.3.8 3.2 1.7 4.9.9-1.7 1.7-3.6 1.7-4.9 0-1.2-.7-2.1-1.7-2.1Z" />
          </svg>
          <span>airbnb</span>
        </a>

        <nav className="site-header__nav" aria-label="Search type">
          <button className="site-header__nav-item is-active" type="button">Homes</button>
          <button className="site-header__nav-item" type="button">
            Experiences
            <span className="site-header__badge">NEW</span>
          </button>
          <button className="site-header__nav-item" type="button">
            Services
            <span className="site-header__badge">NEW</span>
          </button>
        </nav>

        <div className="site-header__right">
          <button className="site-header__host" type="button">Become a host</button>
          <button className="site-header__icon-btn" type="button" aria-label="Language and region">
            <IconSearch aria-hidden="true" />
          </button>
          <button className="site-header__user" type="button" aria-label="Main menu">
            <IconMenu aria-hidden="true" />
            <IconUser aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="site-header__searchbar" role="search">
        <button className="searchbar__segment">
          <span className="searchbar__label">Where</span>
          <span className="searchbar__value">Candolim</span>
        </button>
        <span className="searchbar__divider" />
        <button className="searchbar__segment">
          <span className="searchbar__label">Check in</span>
          <span className="searchbar__value searchbar__value--muted">Add dates</span>
        </button>
        <span className="searchbar__divider" />
        <button className="searchbar__segment">
          <span className="searchbar__label">Check out</span>
          <span className="searchbar__value searchbar__value--muted">Add dates</span>
        </button>
        <span className="searchbar__divider" />
        <button className="searchbar__segment searchbar__segment--last">
          <span className="searchbar__label">Who</span>
          <span className="searchbar__value searchbar__value--muted">Add guests</span>
        </button>
        <button className="searchbar__submit" aria-label="Search">
          <IconSearch aria-hidden="true" />
        </button>
      </div>
    </header>
  )
}
