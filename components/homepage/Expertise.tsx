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
                Those leaderships who wants to improve the value of an organisation, state or company
                need to know how to organize to achieve organizational goals; We offer to build
                value in a space that is needed to construct a more secure digital end user experience.
              </p>
            </div>
            <footer className='content-module_footer'>
              <Link
                href='/'
                target='_self'
                title='Our offer'
                className='button'
              >
                Our offer{' '}
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
