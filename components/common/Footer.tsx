import Link from 'next/link';
import React from 'react';
import Newsletter from './Newsletter';
import Bottom from './Bottom';

export default function Footer() {
  return (
    <>
      <footer className='site-footer'>
        <div className='h-full flex md:flex-row flex-row sm:flex-col gap-4 py-[10%] px-[5%]'>
          <div className='flex flex-col gap-4 md:w-[50%] w-full sm:w-full'>
            <h2 className='text-xl font-bold font-monu-reg'>
              Vi jobbar med att hjälpa kunder till bättre digitala upplevelser.
            </h2>
            <p className='text-[#afafaf] font-monu-reg'>
             Företag behöver hjälp med att producera en närvarande, ansvarsfull
              och tydlig webbplats för sina kunder och besökare. Vi vet, hur det
              det går till och fungerar. 
            </p>
            <Newsletter />
          </div>
          <div className='flex md:flex-row flex-row justify-end sm:flex-col gap-[10rem] md:w-[50%] w-full sm:w-full mt-8'>
            <div className='flex flex-col gap-[8rem]'>
              <div className='flex flex-col gap-8 menu-link-heading'>
                <h4 className='font-bold '>VÄLKOMMEN</h4>
                <ul className='pl-0'>
                  <li className='list-none'>
                    <Link href='/' className='text-[16px]'>
                      Startsida
                    </Link>
                  </li>
                  <li className='list-none'>
                    <Link href='/' className='text-[16px]'>
                      Om oss
                    </Link>
                  </li>
                </ul>
              </div>
              <div className='flex flex-col gap-[2rem] menu-link-heading'>
                <h4 className='font-bold text-[28px]'>Blackspace</h4>
                <p className='text-2xl'>Stockholm</p>
                <p className='text-2xl'>
                  Valhallavägen 47 <br /> 114 22 Stockholm <br />
                  info@blackspace.se
                </p>
              </div>
            </div>
            <div className='flex flex-col gap-8 menu-link-heading'>
              <h4 className='font-bold'>VÅRT ERBJUDANDE</h4>
              <ul className='pl-0'>
                <li className='list-none'>
                  <Link href='/' className='text-[16px]'>
                    Hur vi kan hjälpa dig
                  </Link>
                </li>
                <li className='list-none'>
                  <Link href='/' className='text-[16px]'>
                    Vårt erbjudande
                  </Link>
                </li>
                <li className='list-none'>
                  <Link href='/' className='text-[16px]'>
                    Företag
                  </Link>
                </li>
              </ul>
            </div>
            <div className='flex flex-col gap-8 menu-link-heading'>
              <h4 className='font-bold'>MER INFO</h4>
              <ul className='pl-0'>
                <li className='list-none'>
                  <Link href='/' className='text-[16px]'>
                    FAQ
                  </Link>
                </li>
                <li className='list-none'>
                  <Link href='/' className='text-[16px]'>
                   Våra projekt
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Bottom />
      </footer>
    </>
  );
}
