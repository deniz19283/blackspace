import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Advertise() {
  return (
    <>
      <section className='module-component module-component_hero has-image'>
        <div className='wrapper'>
          <div className='hero_anchor'>
            <h2>The idea behind Blackspace</h2>
            <p className='preamble'>
              To those who wants to improve the value of a company, need to know how to organize to achieve organizational goals; 
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
