import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function ProjectPage() {
  return (
    <main
      style={{
        // background: '#fff',
        paddingTop: '120px'
      }}
    >
      <div className='my-10 offer-layout gap-6'>
        <h1
          className='!text-5xl font-[900]  text-left'
          style={{
            textAlign: 'left'
          }}
        >
          Projekt 1
        </h1>
        <div className='flex items-start justify-between gap-12 md:flex-row flex-col'>
          <div>
            <p
              style={{
                textAlign: 'left'
              }}
              className='mb-8'
            >
              Vi erbjuder företag webbplatser inom alla områden med ett starkt
              fokus på enkelhet och kvalité. Vår expertis är den bästa tekniken,
              ansvarstagandet inom IT, design och användarupplevelser, och
              sömnlösa leveranser “end-to-end”. Vi levererar de där 10%en som
              verkar för verkligt värde.
            </p>
            <div className='w-full'>
              <Image
                src='/assets/offer/hero.svg'
                alt='hero'
                layout='responsive'
                width={400}
                height={200}
              />
            </div>
            <p
              style={{
                textAlign: 'left'
              }}
              className='my-8'
            >
              Jag hoppas att vår hemsida ska ge dig en bild av Mannheimer
              Swartling. Inte bara vad vi gör, utan vilka vi faktiskt är.
              <br />
              <br />
              Vi har alltid siktat på att vara den absolut bästa advokatbyrån på
              vår marknad. Att leverera rådgivning som håller den högsta möjliga
              kvaliteten samtidigt som vi agerar proaktivt och ansvarsfullt i
              förhållande till klienter, kollegor och samhället omkring oss. Vi
              vill vara en rådgivare som bidrar med någonting mer. Som inte bara
              möter förväntningarna, utan som hela tiden överträffar dem.
              <br />
              <br />
              Redan när jag började på Mannheimer Swartling för mer än 20 år
              sedan var detta drivkrafter som kännetecknade oss. Det är med
              stolthet jag konstaterar att dessa drivkrafter är precis lika
              starka idag.
            </p>
            <h1
              className='!text-4xl font-[900]  text-left mb-5'
              style={{
                textAlign: 'left'
              }}
            >
              Radgiving
            </h1>
            <ul className='pl-0 flex items-center justify-between gap-4 md:flex-row flex-col my-2'>
              <li className='list-disc'>
                {' '}
                Vi erbjuder företag webbplatser inom alla områden
              </li>
              <li className='list-disc'>
                {' '}
                Vi erbjuder företag webbplatser inom alla områden
              </li>
            </ul>
            <ul className='pl-0 flex items-center justify-between gap-4 md:flex-row flex-col my-2'>
              <li className='list-disc'>
                {' '}
                Vi erbjuder företag webbplatser inom alla områden
              </li>
              <li className='list-disc'>
                {' '}
                Vi erbjuder företag webbplatser inom alla områden
              </li>
            </ul>{' '}
            <ul className='pl-0 flex items-center justify-between gap-4 md:flex-row flex-col my-2'>
              <li className='list-disc'>
                {' '}
                Vi erbjuder företag webbplatser inom alla områden
              </li>
              <li className='list-disc'>
                {' '}
                Vi erbjuder företag webbplatser inom alla områden
              </li>
            </ul>
          </div>
          <div className='flex flex-col gap-[2rem] menu-link-heading w-full'>
            <h4 className='font-bold text-[22px] text-[#afafaf]'>Contact</h4>
            <div className='flex flex-col gap-0'>
              <h5 className='text-[16px]'>Henric Diefic</h5>
              <p className='text-[14px]'>Partner</p>
            </div>
            <div className='flex flex-col gap-0'>
              <h5 className='text-[16px]'>Andars</h5>
              <p className='text-[14px]'>Senior Advisor</p>
            </div>
            <div className='flex flex-col gap-0'>
              <h5 className='text-[16px]'>Tobias</h5>
              <p className='text-[14px]'>Partner</p>
            </div>
            <div className='flex flex-col gap-0'>
              <h5 className='text-[16px]'>Madeliene</h5>
              <p className='text-[14px]'>Senior Advisor</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
