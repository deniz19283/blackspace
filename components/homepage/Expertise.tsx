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
                Our focus is to deliver those outcomes that 
                deliver integrated value and Our idea is by structuring the right activities and designing organizational
                capabilities, we can help organisations, companies and states thrive and become the best version possible.
                Those leaderships, who wants to improve the value of an organisation, a company or a state need to know 
                how to organize and achieve organizational goals; We offer to build those capabilities that construct
                value in a space that is needed for responsible security and safety. 
                
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
            <h2 className='content-module_title section-title'>The idea behind Blackspace</h2>
            <div className='content-module_content article-text text-flow'>
              <p className='preamble-large'>
                the world influence how we carry out our work, how leaders design and manage their states, 
                organisations, and companies and how we relate to the world and to other people. 
                Wether you assume that your organisation is best run as a well oiled machine or a broken mirror, 
                you will perceive to be the best designing your organizational world. 
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
