import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Advertise() {
  return (
    <>
      <section className='module-component module-component_hero has-image'>
        <div className='wrapper'>
          <div className='hero_anchor'>
            <h2>Idéen om byrån</h2>
            <p className='preamble'>
              Idéen för Blackspace föddes ur en simpel idé - att erbjuda rätt teknik på ett enkelt och tillgängligt sätt. 
              Efter 10 inom IT-världen insåg jag att det bästa är 5% av de lösningar som finns. Konkurrensen är tuff
              för att marknaden innehåller många alternativ. Vi ser förbi sånt och försöker hellre ligga ljussår före.
              Tänk att försöka implementera OK teknik, det kommer att kosta miljoner för det är resurs-inneffektivt
              att ta in designers, affärsutvecklare, kommunikatörer, systemutvecklare, säkerhetsexperter, för att 
              säkerställa rätt lösning. Vi erbjuder IT-arkitektur, Systemutveckling, IT-Juridik, Design, Kommunikation
              och allt som behövs. Men eftersom vi endast använder 5% av resurserna kan vi producera hållbara lösningar
              som håller i längden för minsta möjliga insats. Det tror vi gynnar alla i längden. 
            </p>
            <Link
              href='/'
              target='_self'
              title='Läs mer'
              className='button button-white'
            >
              Läs mer{' '}
            </Link>
          </div>
        </div>
        <Image
          width={2000}
          height={1042}
          src='/assets/advertise/image-1.jpg'
          className='hero_img'
          alt='Vy över Stockholm'
          decoding='async'
          loading='lazy'
          sizes='(max-width: 2000px) 100vw, 2000px'
        />
      </section>
    </>
  );
}
