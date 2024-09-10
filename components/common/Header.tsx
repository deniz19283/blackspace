import React from 'react';

export default function Header() {
  return (
    <>
      <header className='site-header active-header'>
        <div className='wrapper fluid'>
          <div className='site-logo'>
            <a
              href='https://www.mannheimerswartling.se/'
              title='Mannheimer Swartling'
            >
              <span className='visuallyhidden'>Mannheimer Swartling</span>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1034.6 52.4'>
                <path d='M70.1.2c-2.2.3-4.3 1.2-4.4 3.6-.1 2.1.2 4.6.4 6.4l3.1 37.5c.3 4 2.3 4.4 7 4.6V.3h-6.1zM55.9 9.8L55 .2H19.6l18 40.3 2.1 4.8-3.1 6.9h14.6v-.1c4.3-.2 7-.2 7-3.8 0-1 0-1.9-.1-4L55.9 9.8zM10 4.8S8.4.7 3.4.2h-2v52.1h29.9L13.1 10.9 10 4.8zM141.4 38.4l14.9-33c1.9 0 4.2.3 6.4.3s4.5-.3 6.7-.3v1.9h-.6c-1.9 0-5.7.1-5.9 2.9-.1 1.6.2 3.5.3 4.9l2.4 28.9c.3 3.2 1.8 3.4 5.6 3.5v1.9c-3-.1-6.1-.3-9.1-.3-3.5 0-6.9.1-10.4.3v-1.9c3.3-.2 5.4-.2 5.4-3 0-.8 0-1.5-.1-3.1l-1.8-26.6h-.1L139 50.3h-1.5l-15.3-34.8h-.1L120 43.2c0 2 .5 3 1.3 3.6.9.6 2.3.6 4 .7h.8v1.9c-2.8-.1-5.7-.3-8.6-.3-2.5 0-5 .1-7.4.3v-1.9h.9c5-.2 5.2-2.3 5.7-6.9l1.9-17.5c.5-4.5.8-8.6.8-11.1 0-3.5-2.7-4.7-5.5-4.7h-.8V5.4c2.6 0 5.1.3 7.7.3 1.9 0 3.8-.3 5.7-.3l14.9 33zM185 40.4c-.6 2.1-1.4 3.8-1.4 4.9 0 1.9 2.6 2.2 4.7 2.2h.7v1.9c-2.5-.1-5.1-.3-7.6-.3-2.3 0-4.5.1-6.8.3v-1.9h.4c2.5 0 4.5-1.5 5.5-4.1l10.1-28.9c.8-2.3 2-5.5 2.3-7.8 2-.7 4.5-2 5.7-2.7.2-.1.3-.1.5-.1s.3 0 .4.2c.2.5.4 1.1.6 1.6l11.6 33c.8 2.2 1.5 4.5 2.3 6.4.8 1.8 2.1 2.5 4.2 2.5h.4v1.9c-2.8-.1-5.7-.3-8.7-.3-3.1 0-6.2.1-9.5.3v-1.9h.7c1.5 0 3.9-.3 3.9-1.8 0-.8-.6-2.5-1.3-4.5l-2.5-7.3H187l-2 6.4zm9.2-27.9h-.1l-5.9 17.8H200l-5.8-17.8zM263 37l.1-.1V13.2c0-5.2-3.6-5.9-5.5-5.9h-1.4V5.4c3 0 5.9.3 8.8.3 2.6 0 5.2-.3 7.8-.3v1.9h-.9c-2.6 0-5.6.5-5.6 8V44c0 2.2.1 4.4.4 6.4h-2.4l-32.5-36.2v26c0 5.5 1.1 7.4 5.9 7.4h1.1v1.9c-2.7 0-5.4-.3-8.1-.3-2.8 0-5.7.3-8.6.3v-1.9h.9c4.3 0 5.7-3 5.7-8V13c0-3.5-2.9-5.7-5.7-5.7h-.8V5.4c2.4 0 4.9.3 7.3.3 1.9 0 3.7-.3 5.6-.3L263 37zM317.4 37l.1-.1V13.2c0-5.2-3.6-5.9-5.5-5.9h-1.4V5.4c3 0 5.9.3 8.8.3 2.6 0 5.2-.3 7.8-.3v1.9h-.9c-2.6 0-5.6.5-5.6 8V44c0 2.2.1 4.4.4 6.4h-2.4l-32.5-36.2v26c0 5.5 1.1 7.4 5.9 7.4h1.1v1.9c-2.7 0-5.4-.3-8.1-.3-2.8 0-5.7.3-8.6.3v-1.9h.9c4.3 0 5.7-3 5.7-8V13c0-3.5-2.9-5.7-5.7-5.7h-.8V5.4c2.4 0 4.9.3 7.2.3 1.9 0 3.7-.3 5.6-.3l28 31.6zM346.1 43.9c0 3.4 2.6 3.6 4.9 3.6h1.2v1.9c-2.8 0-6.8-.3-10.2-.3-3.2 0-7 .3-9.5.3v-1.9h.9c2.3 0 4.7-.3 4.7-3.6v-33c0-3.3-2.4-3.6-4.7-3.6h-.9V5.4c2.5 0 6.3.3 9.5.3 3.4 0 7.4-.3 10.2-.3v1.9H351c-2.3 0-4.9.2-4.9 3.6v13.8H369V10.9c0-3.4-2.6-3.6-4.9-3.6h-1.2V5.4c2.8 0 6.8.3 10.2.3 3.2 0 7-.3 9.5-.3v1.9h-.9c-2.3 0-4.7.3-4.7 3.6v33c0 3.3 2.4 3.6 4.7 3.6h.9v1.9c-2.5 0-6.3-.3-9.5-.3-3.4 0-7.4.3-10.2.3v-1.9h1.2c2.3 0 4.9-.2 4.9-3.6V28.2h-22.9v15.7zM389.6 47.5h.9c2.3 0 4.7-.3 4.7-3.6v-33c0-3.3-2.4-3.6-4.7-3.6h-.9V5.4c3.8 0 10.4.3 15.7.3 5.3 0 11.9-.3 16.1-.3-.1 2.7-.1 6.9.1 9.6l-1.9.5c-.3-4.1-1.1-7.4-7.7-7.4h-8.8v16.5h7.5c3.8 0 4.6-2.1 5-5.5h1.9c-.1 2.5-.2 4.9-.2 7.4 0 2.4.1 4.8.2 7.2l-1.9.4c-.4-3.8-.6-6.2-4.9-6.2h-7.6v14.7c0 4.1 3.7 4.1 7.7 4.1 7.6 0 10.9-.5 12.8-7.7l1.8.4c-.8 3.3-1.6 6.7-2.1 10-4 0-11.3-.3-17-.3-5.7 0-13.2.3-16.8.3v-1.9h.1zM431.6 47.5h.9c2.3 0 4.7-.3 4.7-3.6v-33c0-3.3-2.4-3.6-4.7-3.6h-.9V5.4c2.5 0 6.2.3 9.3.3 3.2 0 6.9-.3 9.9-.3v1.9h-.8c-2.3 0-4.7.3-4.7 3.6v33c0 3.3 2.4 3.6 4.7 3.6h.9v1.9c-3 0-6.8-.3-10-.3-3.1 0-6.8.3-9.3.3v-1.9zM488.1 38.4l14.9-33c1.9 0 4.2.3 6.4.3s4.5-.3 6.7-.3v1.9h-.6c-1.9 0-5.7.1-5.9 2.9-.1 1.6.2 3.5.3 4.9l2.4 28.9c.2 3.2 1.8 3.4 5.6 3.5v1.9c-3-.1-6.1-.3-9.1-.3-3.5 0-6.9.1-10.4.3v-1.9c3.3-.2 5.4-.2 5.4-3 0-.8 0-1.5-.1-3.1l-1.8-26.6h.1l-16.1 35.5h-1.5l-15.3-34.8h-.1l-2.1 27.7c0 2 .5 3 1.3 3.6.9.6 2.3.6 4 .7h.8v1.9c-2.8-.1-5.7-.3-8.6-.3-2.5 0-5 .1-7.4.3v-1.9h.9c5-.2 5.2-2.3 5.7-6.9l1.9-17.5c.5-4.5.8-8.6.8-11.1 0-3.5-2.7-4.7-5.5-4.7h-.8V5.4c2.6 0 5.1.3 7.7.3 1.9 0 3.8-.3 5.7-.3l14.7 33zM524.5 47.5h.9c2.3 0 4.7-.3 4.7-3.6v-33c0-3.3-2.4-3.6-4.7-3.6h-.9V5.4c3.8 0 10.4.3 15.7.3 5.3 0 11.8-.3 16.1-.3-.1 2.7-.1 6.9.1 9.6l-1.9.5c-.3-4.1-1.1-7.4-7.7-7.4H538v16.5h7.5c3.8 0 4.6-2.1 5-5.5h1.9c-.1 2.5-.2 4.9-.2 7.4 0 2.4.1 4.8.2 7.2l-1.9.4c-.4-3.8-.6-6.2-4.9-6.2H538v14.7c0 4.1 3.7 4.1 7.7 4.1 7.6 0 10.9-.5 12.8-7.7l1.8.4c-.8 3.3-1.6 6.7-2.1 10-4 0-11.3-.3-17-.3-5.7 0-13.2.3-16.8.3v-1.9h.1zM571.5 12.1c0-4.6-2.5-4.8-4.5-4.8h-1.1V5.4c2 0 5.9.3 9.8.3 3.8 0 6.8-.3 10.2-.3 7.9 0 15 2.1 15 11.1 0 5.7-3.8 9.1-8.8 11.1l10.8 16.1c1.8 2.6 3 3.4 6.1 3.8v1.9c-2.1 0-4.1-.3-6.2-.3-2 0-4 .3-5.9.3-4.9-6.4-9-13.2-13.1-20.4h-4.2v13.5c0 4.9 2.3 5 5.2 5h1.1v1.9c-3.6 0-7.3-.3-10.8-.3-3 0-6 .3-9.2.3v-1.9h1.1c2.3 0 4.5-1.1 4.5-3.4v-32zm8.1 14.6h3.1c6.3 0 9.7-2.4 9.7-9.8 0-5.6-3.6-9.2-9.2-9.2-1.9 0-2.7.2-3.6.3v18.7zM661.7 14.7c-.4-4.1-3.1-8-7.4-8-5 0-7.8 3-7.8 7.9 0 10.5 18.9 7.3 18.9 22.4 0 8.7-7.2 13.2-15.3 13.2-3.5 0-6.9-1.3-10-2.8-.3-3.2-.8-6.4-1.1-9.6l1.8-.4c.8 5.4 3.8 10 9.8 10 4.3 0 7.8-2.7 7.8-7.2 0-11.2-18.5-7.7-18.5-22.9 0-8.2 5.8-13 13.9-13 1.8 0 7.1.7 9.1.9 0 3 .3 6 .6 9l-1.8.5zM701.4 30.6l-8.3 19.7H691l-15.9-37.4c-1.3-3-2.1-5.6-5.5-5.6h-.9V5.4c2.4 0 6.1.3 9.1.3 2.7 0 5.9-.3 8-.3v1.9h-.6c-1.4 0-2.7.3-2.7 1.5 0 .8.6 2.7 2.1 6.5l10.3 24.3 5.1-12.3L692.1 9c-.6-1.5-2.2-1.7-3.8-1.7V5.4c3 0 5.9.3 8.9.3 2.3 0 4.6-.3 6.9-.3 2 0 4 .3 6.1.3 1.9 0 3.8-.3 5.7-.3v1.9h-.9c-3.1 0-3.9 1.2-5.5 4.8l-3.7 8.6 7.8 18.3 9.7-26.5c.4-1.1.9-2.6.9-3.5 0-1.4-1.1-1.8-3.8-1.8h-.8V5.4c2.1 0 4.2.3 6.2.3 1.9 0 3.7-.3 5.6-.3v1.9h-.8c-1.9 0-3 2.1-3.7 4.1l-14.9 39h-2.2l-8.4-19.8zm5.2-18.8c.4-1.2.8-2 .8-2.6 0-1.6-1.5-1.9-3.5-1.9-1.7 0-3.1.3-3.1 1.6 0 .9.5 1.8 1 3l2.4 5.6h.1l2.3-5.7zM735.3 40.4c-.6 2.1-1.4 3.8-1.4 4.9 0 1.9 2.6 2.2 4.7 2.2h.7v1.9c-2.5-.1-5.1-.3-7.6-.3-2.3 0-4.5.1-6.8.3v-1.9h.4c2.5 0 4.5-1.5 5.5-4.1l10.1-28.9c.8-2.3 2-5.5 2.3-7.8 2-.7 4.5-2 5.7-2.7.2-.1.3-.1.5-.1s.3 0 .4.2c.2.5.4 1.1.6 1.6l11.6 33c.8 2.2 1.5 4.5 2.3 6.4.8 1.8 2.1 2.5 4.2 2.5h.4v1.9c-2.8-.1-5.7-.3-8.7-.3-3.1 0-6.2.1-9.4.3v-1.9h.7c1.4 0 3.9-.3 3.9-1.8 0-.8-.6-2.5-1.3-4.5l-2.5-7.3h-14.3l-2 6.4zm9.2-27.9h-.1l-5.9 17.8h11.8l-5.8-17.8zM778.5 12.1c0-4.6-2.5-4.8-4.5-4.8h-1.1V5.4c2 0 5.9.3 9.8.3 3.8 0 6.8-.3 10.1-.3 7.9 0 15 2.1 15 11.1 0 5.7-3.8 9.1-8.8 11.1l10.8 16.1c1.8 2.6 3 3.4 6.1 3.8v1.9c-2.1 0-4.1-.3-6.2-.3-1.9 0-4 .3-5.9.3-4.9-6.4-9-13.2-13.1-20.4h-4.2v13.5c0 4.9 2.3 5 5.2 5h1.1v1.9c-3.6 0-7.2-.3-10.8-.3-3 0-6 .3-9.1.3v-1.9h1.1c2.3 0 4.5-1.1 4.5-3.4v-32zm8 14.6h3.1c6.3 0 9.7-2.4 9.7-9.8 0-5.6-3.6-9.2-9.2-9.2-1.9 0-2.7.2-3.6.3v18.7zM823 8.6c-4.7 0-4.9 1.1-5.9 5.7h-1.9c.3-1.8.6-3.5.8-5.4.2-1.8.4-3.5.4-5.4h1.5c.5 1.9 2.1 1.8 3.8 1.8h32.5c1.7 0 3.3-.1 3.4-1.9l1.5.2c-.3 1.7-.5 3.4-.7 5.1-.1 1.7-.1 3.4-.1 5.1l-1.9.7c-.1-2.3-.4-6.1-4.7-6.1h-10.3v33.5c0 4.9 2.2 5.4 5.2 5.4h1.2v1.9c-2.5 0-6.9-.3-10.3-.3-3.8 0-8.2.3-10.7.3v-1.9h1.2c3.5 0 5.2-.3 5.2-5.3V8.6H823zM878.7 43.7c0 2.6 1.8 3.3 3.8 3.6 2.6.2 5.5.2 8.4-.1 2.7-.3 5-1.9 6.1-3.5 1-1.4 1.6-3.2 2-4.6h1.8c-.7 3.6-1.6 7.2-2.4 10.9-5.6 0-11.2-.3-16.9-.3-5.6 0-11.2.3-16.9.3v-1.9h.9c2.3 0 4.8-.3 4.8-4.3V11c0-3.3-2.5-3.6-4.8-3.6h-.9v-2c3.4 0 6.7.3 10.1.3 3.2 0 6.4-.3 9.7-.3v1.9h-1.6c-2.4 0-4.3.1-4.3 3.5v32.9h.2zM906.2 47.5h.9c2.3 0 4.7-.3 4.7-3.6v-33c0-3.3-2.4-3.6-4.7-3.6h-.9V5.4c2.5 0 6.2.3 9.3.3 3.2 0 6.9-.3 9.9-.3v1.9h-.9c-2.3 0-4.7.3-4.7 3.6v33c0 3.3 2.4 3.6 4.7 3.6h.9v1.9c-3 0-6.8-.3-10-.3-3.1 0-6.8.3-9.3.3v-1.9h.1zM974.5 37l.1-.1V13.2c0-5.2-3.6-5.9-5.5-5.9h-1.4V5.4c3 0 5.9.3 8.8.3 2.6 0 5.2-.3 7.8-.3v1.9h-1c-2.6 0-5.6.5-5.6 8V44c0 2.2.1 4.4.4 6.4h-2.4l-32.5-36.2v26c0 5.5 1.1 7.4 5.9 7.4h1.1v1.9c-2.7 0-5.4-.3-8.1-.3-2.8 0-5.7.3-8.6.3v-1.9h.9c4.3 0 5.7-3 5.7-8V13c0-3.5-2.9-5.7-5.7-5.7h-.8V5.4c2.4 0 4.8.3 7.2.3 1.9 0 3.7-.3 5.6-.3L974.5 37zM1028.4 17.7c-1.9-7.8-7.2-10.5-14.6-10.5-11.3 0-16.8 8.3-16.8 18.8 0 10.4 5 21.5 17 21.5 3 .1 6.2-.4 7-1.2V36.1c0-2.6-2.5-3.2-4.8-3.2h-.8V31c3.2.1 6.3.3 9.5.3 2.8 0 5.6-.1 8.5-.3v1.9h-.8c-2.2 0-3.4 1-3.4 3.2v9.6l1.4.8v1.1c-5.6 1.6-11.1 2.7-17.6 2.7-14.1 0-24.8-8.4-24.8-23.6 0-14.6 12.5-22.3 25.2-22.3 3.9 0 6.6.6 9.1 1.1 2.5.6 4.6 1.1 7.1 1.2 0 2.3 0 7.1.8 10.8l-2 .2z' />
              </svg>
            </a>
          </div>
          <nav className='header-nav'>
            <ul id='menu-sidhuvud' className='primary-menu'>
              <li
                id='menu-item-8822'
                className='menu-item menu-item-type-post_type menu-item-object-page menu-item-8822'
              >
                <a href='https://www.mannheimerswartling.se/expertis/'>
                  Expertis
                </a>
              </li>
              <li
                id='menu-item-13766'
                className='menu-item menu-item-type-post_type menu-item-object-page menu-item-13766'
              >
                <a href='https://www.mannheimerswartling.se/medarbetare/'>
                  Medarbetare
                </a>
              </li>
              <li
                id='menu-item-22119'
                className='menu-item menu-item-type-post_type menu-item-object-page menu-item-22119'
              >
                <a href='https://www.mannheimerswartling.se/nyheter/'>
                  Nyheter
                </a>
              </li>
              <li className='menu-item menu-item-secondary menu-item-lang'>
                <a href='https://www.mannheimerswartling.se/en/'>English</a>
              </li>
              <li className='menu-item menu-item-secondary menu-item-search-button'>
                <a href='https://www.mannheimerswartling.se/?s='>Sök</a>
              </li>
            </ul>
            <button className='menu-button' aria-label='Meny'>
              <span className='visuallyhidden'>Meny</span>
              <div className='menu-button-lines' aria-hidden='true'>
                <span />
                <span />
                <span />
              </div>
            </button>
          </nav>
        </div>
      </header>
      <div className='offcanvas-nav'>
        <ul id='menu-offcanvas-svenska' className='menu'>
          <li
            id='menu-item-8824'
            className='menu-item menu-item-type-post_type menu-item-object-page menu-item-8824'
          >
            <a href='https://www.mannheimerswartling.se/expertis/'>Expertis</a>
          </li>
          <li
            id='menu-item-8390'
            className='menu-item menu-item-type-custom menu-item-object-custom menu-item-8390'
          >
            <a href='/medarbetare'>Medarbetare</a>
          </li>
          <li
            id='menu-item-8827'
            className='menu-item menu-item-type-post_type menu-item-object-page menu-item-8827'
          >
            <a href='https://www.mannheimerswartling.se/internationellt/'>
              Internationellt
            </a>
          </li>
          <li
            id='menu-item-8826'
            className='menu-item menu-item-type-post_type menu-item-object-page menu-item-8826'
          >
            <a href='https://www.mannheimerswartling.se/om-byran/'>Om byrån</a>
          </li>
          <li
            id='menu-item-8828'
            className='menu-item menu-item-type-post_type menu-item-object-page menu-item-8828'
          >
            <a href='https://www.mannheimerswartling.se/nyheter/'>Nyheter</a>
          </li>
          <li
            id='menu-item-8830'
            className='menu-item menu-item-type-post_type menu-item-object-page menu-item-8830'
          >
            <a href='https://www.mannheimerswartling.se/karriar/'>Karriär</a>
          </li>
          <li
            id='menu-item-8829'
            className='menu-item menu-item-type-post_type menu-item-object-page menu-item-8829'
          >
            <a href='https://www.mannheimerswartling.se/hallbarhet/'>
              Hållbarhet
            </a>
          </li>
          <li
            id='menu-item-8831'
            className='menu-item menu-item-type-post_type menu-item-object-page menu-item-8831'
          >
            <a href='https://www.mannheimerswartling.se/msa-innovation-lab/'>
              MSA Innovation Lab
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
