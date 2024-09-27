import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Advertise() {
  return (
    <>
      <section className='module-component module-component_hero has-image'>
        <div className='wrapper'>
          <div className='hero_anchor'>
            <h2>Idéen om Blackspace</h2>
            <p className='preamble'>
              Att hjälpa företag, organisationer och myndigheter med bättre digitala produkter.
            </p>
            <Link
              href='/'
              target='_self'
              title='Läs mer'
              className='button button-white'
            >
              Läs mer{' '}
            </Link>
          </div>
        </div>
        <Image
          width={2000}
          height={1042}
          src='/assets/advertise/image-1.jpg'
          className='hero_img'
          alt='Vy över New York'
          decoding='async'
          loading='lazy'
          sizes='(max-width: 2000px) 100vw, 2000px'
        />
      </section>
    </>
  );
}
