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
              We help clients to reach better digital experiences.
            </h2>
            <p className='text-[#afafaf] font-monu-reg'>
             You need our help to produce a present, responsible and clear digital experience
              for your needs. Vi know how to help you.
            </p>
            <Newsletter />
          </div>
          <div className='flex md:flex-row flex-row justify-end sm:flex-col gap-[10rem] md:w-[50%] w-full sm:w-full mt-8'>
            <div className='flex flex-col gap-[8rem]'>
              <div className='flex flex-col gap-8 menu-link-heading'>
                <h4 className='font-bold '>Welcome</h4>
                <ul className='pl-0'>
                  <li className='list-none'>
                    <Link href='/' className='text-[16px]'>
                      Startsida
                    </Link>
                  </li>
                  <li className='list-none'>
                    <Link href='/' className='text-[16px]'>
                      About us
                    </Link>
                  </li>
                </ul>
              </div>
              <div className='flex flex-col gap-[2rem] menu-link-heading'>
                <h4 className='font-bold text-[28px]'>Blackspace</h4>
                <p className='text-2xl'>Stockholm</p>
                <p className='text-2xl'>
                  Valhallavägen 47 <br /> 114 22 Stockholm <br />
                  hello@blackspace.se
                </p>
              </div>
            </div>
            <div className='flex flex-col gap-8 menu-link-heading'>
              <h4 className='font-bold'>Our Offer</h4>
              <ul className='pl-0'>
                <li className='list-none'>
                  <Link href='/' className='text-[16px]'>
                    How can we help you
                  </Link>
                </li>
                <li className='list-none'>
                  <Link href='/' className='text-[16px]'>
                    Our offer
                  </Link>
                </li>
                <li className='list-none'>
                  <Link href='/' className='text-[16px]'>
                    Company
                  </Link>
                </li>
              </ul>
            </div>
            <div className='flex flex-col gap-8 menu-link-heading'>
              <h4 className='font-bold'>More info</h4>
              <ul className='pl-0'>
                <li className='list-none'>
                  <Link href='/' className='text-[16px]'>
                    FAQ
                  </Link>
                </li>
                <li className='list-none'>
                  <Link href='/' className='text-[16px]'>
                   Our projects
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
