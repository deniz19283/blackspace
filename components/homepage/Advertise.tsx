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
              Idéen för Blackspace föddes ur att göra teknik mycket enklare och lätt förståeligt. Vi använder oss av de bästa lösningarna, 
              vilket motsvarar 5-10% av det som finns. De andra 90% motsvararar andra behov. Vi vill hjälpa våra kunder till den 
              bästa och mest närvarande användarupplvelsen för ett överkomligt pris. Vi undviker komplexitet, eftersom tekniken
              vi jobbar med är redan enormt komplex, så våra resterande komponenter kan vara simpla. Vi använder enkel kommunikation, bildspråk, animationer, 
              struktur och organisation för att slutanvändare ska uppskatta och förstå. Kan du t.ex hitta telefonummer och adress, lätt på en hemsida, så vet du.

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
