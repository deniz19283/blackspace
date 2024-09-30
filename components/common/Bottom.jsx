import Link from 'next/link';
import React from 'react';

export default function Bottom() {
  return (
    <div className='flex justify-between gap-6 items-center flex-wrap px-16 pb-16'>
      <div className='flex gap-6 item-center'>
        <Link className='font-monu-reg text-[15px] text-white' href='/'>
          Generellt
        </Link>
        <Link className='font-monu-reg text-[15px] text-white' href='/'>
          Miljö
        </Link>
        <Link className='font-monu-reg text-[15px] text-white' href='/'>
          Ansvarsfriskrivning
        </Link>
        <Link className='font-monu-reg text-[15px] text-white' href='/'>
          Dataskyddsbeskrivning
        </Link>
        <Link className='font-monu-reg text-[15px] text-white' href='/'>
          Cookiepolicy
        </Link>
      </div>
      <div className='flex gap-6 item-center'>
        <p className='font-monu-reg text-[16px] text-white' href='/'>
          2024 Stokholm, Sweden
        </p>
        <p className='font-monu-reg text-[16px] text-white' href='/'>
          Back to Top
        </p>
      </div>
    </div>
  );
}
