import React from 'react';

export default function SearchOverlay() {
  return (
    <>
      <div className='search-overlay'>
        <div className='wrapper'>
          <button className='search-overlay_close-button'>Stäng</button>
          <form
            action='https://www.blackspace.se'
            method='get'
            className='search-form'
            role='search'
          >
            <div className='search-input-container'>
              <input type='search' name='s' defaultValue='' placeholder='Sök' />
              <button>Sök</button>
            </div>
          </form>
          <div className='search-overlay_helpers'>
            <h3 className='popular-search-terms_title'>Populära söktermer</h3>
            <ul className='popular-search-terms_list'>
              <li className='search-terms-row'>
                <span>
                  <a href='https://www.blackspace.se/projects'>
                    Våra projekt
                  </a>
                </span>
                <span>
                  <a href='https://www.blackspace.se/brancher'>
                    Branscher
                  </a>
                </span>
              </li>
              <li className='search-terms-row'>
                <span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
