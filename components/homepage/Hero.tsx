import React from 'react';

export default function Hero() {
  return (
    <>
      <section className='module-component module-component_hero'>
        <div className='wrapper'>
          <div className='hero_anchor'>
            <h2>Välkommen till Mannheimer Swartling</h2>
            <a
              href='https://www.mannheimerswartling.se/om-byran/'
              target='_self'
              title='Om byrån'
              className='button button-white'
            >
              Om byrån{' '}
            </a>
          </div>
        </div>
        <video loop={true} muted={true} playsInline={false} autoPlay={true}>
          <source
            src='https://www.mannheimerswartling.se/app/uploads/2024/08/MSA_Film_Landning_2.mp4'
            type='video/mp4'
          />
          <p>Din webbläsare stödjer inte video.</p>
        </video>
      </section>
    </>
  );
}
