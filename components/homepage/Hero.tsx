import Link from 'next/link';
import React from 'react';

export default function Hero() {
  return (
    <>
      <section className='module-component module-component_hero'>
        <div className='wrapper'>
          <div className='hero_anchor'>
            <h2>Välkommen till Mannheimer Swartling</h2>
            <Link
              href='/'
              target='_self'
              title='Om byrån'
              className='button button-white'
            >
              Om byrån{' '}
            </Link>
          </div>
        </div>
        <video loop={true} muted={true} playsInline={false} autoPlay={true}>
          <source src='/assets/hero.mp4' type='video/mp4' />
          <p>Din webbläsare stödjer inte video.</p>
        </video>
      </section>
    </>
  );
}
