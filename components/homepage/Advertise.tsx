import React from 'react';

export default function Advertise() {
  return (
    <>
      <section className='module-component module-component_hero has-image'>
        <div className='wrapper'>
          <div className='hero_anchor'>
            <h2>Internationellt</h2>
            <p className='preamble'>
              Vi erbjuder våra klienter den bästa möjliga rådgivningen var i
              världen de än gör affärer.
            </p>
            <a
              href='https://www.mannheimerswartling.se/internationellt/'
              target='_self'
              title='Läs mer'
              className='button button-white'
            >
              Läs mer{' '}
            </a>
          </div>
        </div>
        <img
          width={2000}
          height={1042}
          src='https://www.mannheimerswartling.se/app/uploads/2021/01/MannheimerSwartling-New-York-Globalt-1-2000x1042.jpg'
          className='hero_img'
          alt='Vy över New York'
          decoding='async'
          loading='lazy'
          srcSet='https://www.mannheimerswartling.se/app/uploads/2021/01/MannheimerSwartling-New-York-Globalt-1-2000x1042.jpg 2000w, https://www.mannheimerswartling.se/app/uploads/2021/01/MannheimerSwartling-New-York-Globalt-1-1200x625.jpg 1200w, https://www.mannheimerswartling.se/app/uploads/2021/01/MannheimerSwartling-New-York-Globalt-1-800x417.jpg 800w, https://www.mannheimerswartling.se/app/uploads/2021/01/MannheimerSwartling-New-York-Globalt-1-768x400.jpg 768w, https://www.mannheimerswartling.se/app/uploads/2021/01/MannheimerSwartling-New-York-Globalt-1-1536x800.jpg 1536w, https://www.mannheimerswartling.se/app/uploads/2021/01/MannheimerSwartling-New-York-Globalt-1-2048x1067.jpg 2048w'
          sizes='(max-width: 2000px) 100vw, 2000px'
        />
      </section>
    </>
  );
}
