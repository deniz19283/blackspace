import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Expertise() {
  return (
    <>
      <section className='module-component module-component_content'>
        <div className='wrapper content-module_width-large'>
          <div className='content-module_wrapper'>
            <h2 className='content-module_title section-title'>Vårt erbjudande</h2>
            <div className='content-module_content article-text text-flow'>
              <p className='preamble-large'>
                Vi hjälper företag att bli bättre och våra resultat ledar till en bättre digital närvaro och kundupplevelse, 
                vilket leder till bättre affärer - Vi fokuserar på simpla lösningar på den bästa tekniken.  
              </p>
            </div>
            <footer className='content-module_footer'>
              <Link
                href='/'
                target='_self'
                title='Vårt erbjudande'
                className='button'
              >
                Vårt erbjudande{' '}
              </Link>
            </footer>
          </div>
        </div>
      </section>
      <section className='module-component module-component_content'>
        <div className='wrapper content-module_width-medium'>
          <figure className='content-module_thumbnail'>
            <Image
              width={1200}
              height={800}
              src='/assets/expertise/image-1.jpg'
              className='responsive-img'
              alt=''
              decoding='async'
              loading='lazy'
              sizes='(max-width: 1200px) 100vw, 1200px'
            />
          </figure>
          <div className='content-module_wrapper'>
            <h2 className='content-module_title section-title'>Idéen om företaget</h2>
            <div className='content-module_content article-text text-flow'>
              <p className='preamble-large'>
                Världen påverkar hur vi utför vårt arbete. Det går fort. Alldeles för fort. Vi investerar därför vår tid
                till att hjälpa dig att göra din digitala produkt bättre, så att ditt företag på bästa sätt kan bli den bästa versionen. 
                Det blir bättre och du behöver inte springa fortare för det. 
              </p>
            </div>
            <footer className='content-module_footer'>
              <Link
                href='/'
                target='_self'
                title='Hitta medarbetare'
                className='button'
              >
                Hitta medarbetare{' '}
              </Link>
            </footer>
          </div>
        </div>
      </section>
    </>
  );
}
