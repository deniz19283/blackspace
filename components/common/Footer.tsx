import Link from 'next/link';
import React from 'react';
import Newsletter from './Newsletter';
import Bottom from './Bottom';

export default function Footer() {
  return (
    <>
      <footer className='site-footer'>
        {/* <div className='wrapper'>
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
        </div> */}
        <div className='h-full flex md:flex-row flex-row sm:flex-col gap-4 py-[10%] px-[5%]'>
          <div className='flex flex-col gap-4 md:w-[50%] w-full sm:w-full'>
            <h2 className='text-xl font-bold font-monu-reg'>
              Vi jobbar med att hjälpa kunder till bättre digitala upplevelser.
            </h2>
            <p className='text-[#afafaf] font-monu-reg'>
             Företag behöver hjälp med att producera en närvarande, ansvarsfull
              och tydlig webbplats för sina kunder och besökare. Vi vet, hur det
              det går till och fungerar. 
            </p>
            <Newsletter />
          </div>
          <div className='flex md:flex-row flex-row justify-end sm:flex-col gap-[10rem] md:w-[50%] w-full sm:w-full mt-8'>
            <div className='flex flex-col gap-[8rem]'>
              <div className='flex flex-col gap-8 menu-link-heading'>
                <h4 className='font-bold '>VÄLKOMMEN</h4>
                <ul className='pl-0'>
                  <li className='list-none'>
                    <Link href='/' className='text-[16px]'>
                      Startsida
                    </Link>
                  </li>
                  <li className='list-none'>
                    <Link href='/' className='text-[16px]'>
                      Om oss
                    </Link>
                  </li>
                </ul>
              </div>
              <div className='flex flex-col gap-[2rem] menu-link-heading'>
                <h4 className='font-bold text-[28px]'>Blackspace</h4>
                <p className='text-2xl'>Stockholm</p>
                <p className='text-2xl'>
                  Valhallavägen 47 <br /> 114 22 Stockholm <br />
                  info@blackspace.se
                </p>
              </div>
            </div>
            <div className='flex flex-col gap-8 menu-link-heading'>
              <h4 className='font-bold'>VÅRT ERBJUDANDE</h4>
              <ul className='pl-0'>
                <li className='list-none'>
                  <Link href='/' className='text-[16px]'>
                    Hur vi kan hjälpa dig
                  </Link>
                </li>
                <li className='list-none'>
                  <Link href='/' className='text-[16px]'>
                    Vårt erbjudande
                  </Link>
                </li>
                <li className='list-none'>
                  <Link href='/' className='text-[16px]'>
                    Företag
                  </Link>
                </li>
              </ul>
            </div>
            <div className='flex flex-col gap-8 menu-link-heading'>
              <h4 className='font-bold'>MER INFO</h4>
              <ul className='pl-0'>
                <li className='list-none'>
                  <Link href='/' className='text-[16px]'>
                    FAQ
                  </Link>
                </li>
                <li className='list-none'>
                  <Link href='/' className='text-[16px]'>
                   Våra projekt
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Bottom />
      </footer>
    </>
  );
}
