import Image from 'next/image';
import Link from 'next/link';
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
              <Link
                href='/'
                target='_self'
                title='Våra rådgivningstjänster'
                className='button'
              >
                Våra rådgivningstjänster{' '}
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
            <h2 className='content-module_title section-title'>Medarbetare</h2>
            <div className='content-module_content article-text text-flow'>
              <p className='preamble-large'>
                Vem söker du? Trots att vi är utspridda på en global marknad är
                vi ett nära sammansvetsat team med expertis inom alla delar av
                affärsjuridiken.
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
