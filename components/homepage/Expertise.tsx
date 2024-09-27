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
                Vårt fokus är att hjälpa företag, organisationer att förbättre deras digitala affär. Vår idé är att förbättra
                varje enskild komponent att bli den bästa möjliga. Vi arbetar med designen, tekniken, IT-juridiken, kommunikationen
                till att bli den bästa möjliga versionen. Våra resultat ledar till bättre närvar och en bättre kundupplevelse, 
                högre konvertingar, färre risker med ökad tydlighet och klarhet. Vårt mål är att och företag som når mål. 
                Vi erbjuder att bygga förmågor som genererar värde och mer utrymme där ni behöver, för en mer ansvarsfull och säker digital närvaro.
                
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
                The world influence how we carry out our work, how leaders design and manage their 
                organisations, and how companies and we relate to the world around us, and to other people. 
                Wether you assume that your organisation is best run as a well oiled machine or a broken mirror, 
                you will perceive to be the best to design your organizational world. Our idea is to help you
                do just that - design the best organisational world possible. 
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
