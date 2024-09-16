import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Expertise() {
  return (
    <>
      <section className='module-component module-component_content'>
        <div className='wrapper content-module_width-large'>
          <div className='content-module_wrapper'>
            <h2 className='content-module_title section-title'>Our offer in an international environment</h2>
            <div className='content-module_content article-text text-flow'>
              <p className='preamble-large'>
                We offer to build the value that is needed to construct a more secure experience for your organisation. 
                Those who wants to improve the value of a company need to know how to organize to achieve organizational goals; 
                those who want to improve performance will need to understand how to achieve results.
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
