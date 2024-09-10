import React from 'react';

export default function SearchOverlay() {
  return (
    <>
      <div className='search-overlay'>
        <div className='wrapper'>
          <button className='search-overlay_close-button'>Stäng</button>
          <form
            action='https://www.mannheimerswartling.se/'
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
                  <a href='https://www.mannheimerswartling.se/?s=Verksamhetsomr%C3%A5den'>
                    Verksamhetsområden
                  </a>
                </span>
                <span>
                  <a href='https://www.mannheimerswartling.se/?s=Branscher'>
                    Branscher
                  </a>
                </span>
              </li>
              <li className='search-terms-row'>
                <span>
                  <a href='https://www.mannheimerswartling.se/?s=Student'>
                    Student
                  </a>
                </span>
                <span>
                  <a href='https://www.mannheimerswartling.se/?s=Lediga+tj%C3%A4nster'>
                    Lediga tjänster
                  </a>
                </span>
                <span>
                  <a href='https://www.mannheimerswartling.se/?s=Expertis'>
                    Expertis
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
