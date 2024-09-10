import React from 'react';

export default function Expertise() {
  return (
    <>
      <section className='module-component module-component_content'>
        <div className='wrapper content-module_width-large'>
          <div className='content-module_wrapper'>
            <h2 className='content-module_title section-title'>Expertis</h2>
            <div className='content-module_content article-text text-flow'>
              <p className='preamble-large'>
                Med den samlade kunskapen hos våra välrenommerade jurister inom
                alla områden av affärsjuridik mobiliserar vi snabbt rätt
                expertis och erfarenhet för varje uppdrag. Vi är organiserade i
                grupper med fokus på specifika verksamheter och branscher och vi
                samarbetar sömlöst inom hela byrån.
              </p>
            </div>
            <footer className='content-module_footer'>
              <a
                href='https://www.mannheimerswartling.se/expertis/'
                target='_self'
                title='Våra rådgivningstjänster'
                className='button'
              >
                Våra rådgivningstjänster{' '}
              </a>
            </footer>
          </div>
        </div>
      </section>
      <section className='module-component module-component_content'>
        <div className='wrapper content-module_width-medium'>
          <figure className='content-module_thumbnail'>
            <img
              width={1200}
              height={800}
              src='https://www.mannheimerswartling.se/app/uploads/2023/09/04-0093-1200x800.jpg'
              className='responsive-img'
              alt=''
              decoding='async'
              loading='lazy'
              srcSet='https://www.mannheimerswartling.se/app/uploads/2023/09/04-0093-1200x800.jpg 1200w, https://www.mannheimerswartling.se/app/uploads/2023/09/04-0093-2000x1333.jpg 2000w, https://www.mannheimerswartling.se/app/uploads/2023/09/04-0093-800x533.jpg 800w, https://www.mannheimerswartling.se/app/uploads/2023/09/04-0093-768x512.jpg 768w, https://www.mannheimerswartling.se/app/uploads/2023/09/04-0093-1536x1024.jpg 1536w, https://www.mannheimerswartling.se/app/uploads/2023/09/04-0093-2048x1365.jpg 2048w'
              sizes='(max-width: 1200px) 100vw, 1200px'
            />
          </figure>
          <div className='content-module_wrapper'>
            <h2 className='content-module_title section-title'>Medarbetare</h2>
            <div className='content-module_content article-text text-flow'>
              <p className='preamble-large'>
                Vem söker du? Trots att vi är utspridda på en global marknad är
                vi ett nära sammansvetsat team med expertis inom alla delar av
                affärsjuridiken.
              </p>
            </div>
            <footer className='content-module_footer'>
              <a
                href='https://www.mannheimerswartling.se/medarbetare/'
                target='_self'
                title='Hitta medarbetare'
                className='button'
              >
                Hitta medarbetare{' '}
              </a>
            </footer>
          </div>
        </div>
      </section>
    </>
  );
}
