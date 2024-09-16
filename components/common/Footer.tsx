import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <>
      <footer className='site-footer'>
        <div className='wrapper'>
          <div className='site-footer-newsletter'>
            <h2>Mer Mannheimer Swartling?</h2>
            <p className='preamble-large'>
              Håll dig uppdaterad med&nbsp;våra&nbsp;nyhetsbrev.
            </p>
            <footer className='site-footer-newsletter_footer'>
              <Link
                href='/'
                className='button button-circular button-white'
                target=''
                title='Prenumerera'
              >
                Prenumerera{' '}
              </Link>
            </footer>
          </div>
          <nav className='company-offices'>
            <ul id='menu-kontorsmeny' className='company-offices_menu'>
              <li
                id='menu-item-13901'
                className='menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-13901'
              >
                <Link href='/'>Sverige</Link>
                <ul className='sub-menu'>
                  <li
                    id='menu-item-8497'
                    className='menu-item menu-item-type-custom menu-item-object-custom menu-item-8497'
                  >
                    <Link href='/'>Stockholm</Link>
                  </li>
                  <li
                    id='menu-item-8498'
                    className='menu-item menu-item-type-custom menu-item-object-custom menu-item-8498'
                  >
                    <Link href='/'>Göteborg</Link>
                  </li>
                  <li
                    id='menu-item-8499'
                    className='menu-item menu-item-type-custom menu-item-object-custom menu-item-8499'
                  >
                    <Link href='/'>Malmö</Link>
                  </li>
                </ul>
              </li>
              <li
                id='menu-item-13902'
                className='menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-13902'
              >
                <Link href='/'>Belgien</Link>
                <ul className='sub-menu'>
                  <li
                    id='menu-item-8502'
                    className='menu-item menu-item-type-custom menu-item-object-custom menu-item-8502'
                  >
                    <Link href='/'>Bryssel</Link>
                  </li>
                </ul>
              </li>
              <li
                id='menu-item-13906'
                className='menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-13906'
              >
                <Link href='/'>Singapore</Link>
                <ul className='sub-menu'>
                  <li
                    id='menu-item-8501'
                    className='menu-item menu-item-type-custom menu-item-object-custom menu-item-8501'
                  >
                    <Link href='/'>Singapore</Link>
                  </li>
                </ul>
              </li>
              <li
                id='menu-item-13907'
                className='menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-13907'
              >
                <Link href='/'>USA</Link>
                <ul className='sub-menu'>
                  <li
                    id='menu-item-8503'
                    className='menu-item menu-item-type-custom menu-item-object-custom menu-item-8503'
                  >
                    <Link href='/'>New York</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          <div className='site-footer-about-company'>
            <p>
              2008–2024 © Mannheimer Swartling Advokatbyrå AB med säte i
              Stockholm
            </p>
            <p>
              <span>Organisationsnummer: 556399–4499</span>
              <span>Momsnummer (VAT no): SE556399449901</span>
            </p>
          </div>
          <nav className='company-terms'>
            <ul id='menu-foretagsvillkor' className='company-terms_menu'>
              <li
                id='menu-item-16945'
                className='contact-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-16945'
              >
                <Link href='/'>Kontakt</Link>
              </li>
              <li
                id='menu-item-13405'
                className='menu-item menu-item-type-post_type menu-item-object-page menu-item-13405'
              >
                <Link href='/'>Allmänna villkor</Link>
              </li>
              <li
                id='menu-item-13410'
                className='menu-item menu-item-type-post_type menu-item-object-page menu-item-13410'
              >
                <Link href='/'>Disclaimer</Link>
              </li>
              <li
                id='menu-item-27105'
                className='menu-item menu-item-type-post_type menu-item-object-page menu-item-27105'
              >
                <Link href='/'>Privacy Notice</Link>
              </li>
              <li
                id='menu-item-13406'
                className='menu-item menu-item-type-post_type menu-item-object-page menu-item-13406'
              >
                <Link href='/'>Cookiepolicy</Link>
              </li>
            </ul>
          </nav>
          <ul className='company-social-list'>
            <li className='company-social-item'>
              <Link
                href='/'
                target='_blank'
                rel='noopener noreferrer'
                title='Instagram'
              >
                <svg className='icon icon-instagram'>
                  <use xlinkHref='#icon-instagram' />
                </svg>
              </Link>
            </li>
            <li className='company-social-item'>
              <Link
                href='/'
                target='_blank'
                rel='noopener noreferrer'
                title='Facebook'
              >
                <svg className='icon icon-facebook'>
                  <use xlinkHref='#icon-facebook' />
                </svg>
              </Link>
            </li>
            <li className='company-social-item'>
              <Link
                href='/'
                target='_blank'
                rel='noopener noreferrer'
                title='Linkedin'
              >
                <>
                  <svg className='icon icon-linkedin'>
                    <use xlinkHref='#icon-linkedin' />
                  </svg>
                </>
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
