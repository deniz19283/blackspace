import React from 'react';

export default function Newsletter() {
  return (
    <div className='flex flex-col gap-12 newsletter'>
      <h4 className='text-3xl text-[#afafaf] font-bold my-4'>
        Anmäl dig till vårt nyhetsbrev
      </h4>
      <form className='flex  gap-6'>
        <input type='email' placeholder='Din e-postadress' className=' w-full p-2 pl-8 text-[16px] text-[#000] outline-none rounded-[100px]' />
        <button type='submit' className='button !bg-white !text-[#000]'>Anmäl mig</button>
      </form>
    </div>
  );
}
