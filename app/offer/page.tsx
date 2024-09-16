import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function OfferPage() {
  return (
    <main
      style={{
        // background: '#fff',
        paddingTop: '120px'
      }}
    >
      <section className='offer-layout'>
        <div>
          <h1>Vårt erbjudande</h1>
          <p>
            Lås upp ditt företags fulla potential med våra webblösningar. På
            Blackspace är vi specisliserade på att skapa unika och anpassade
            webb-och kundupplevelser som leder till resultat. Oavsett om du
            funderar på att bygga en helt ny webbplats, förnya en befintlig
            eller förbättra din digitala närvaro så har vi dig täckt. Vi
            erbjuder resultat med ett starkt fokus på värdesjapande genom
            sömnlösa användarupplevelser som andas enkelhet och kvalité
          </p>
        </div>
        <Image
          src='/assets/offer/hero.svg'
          alt='hero'
          layout='responsive'
          width={900}
          height={450}
        />
        <p
          style={{
            textAlign: 'left'
          }}
        >
          Våra tjäsnter inkluderar anpassade webbdesign och utveckling genom
          skräddarsydda webbplatser som speglar ditt varumärke och engagerar din
          publik. Sömnlösa shoppingupplevelser som gör besökare till lojala
          kunder, Responsiva och mobilvänlig design,webbplatser som ser bra ut
          på alla enheter, och säkerställer en optimal användarupplevelse.
          Lättanvända plattformar som ger dig full kontroll över ditt innehåll.
          Vi supportar dig med IT-juridik, så att allt fungerar smidigt för er.
          <br />
          <br />
          Skräddarsydda lösningar
          <br />
          Vi tror inte på att en enda storlek passar alla. Varje företag är
          unikt, och det är också vårt förhållningssätt. Vårt fokus ligger på
          att leverera webbplatser som inte bara ser bra ut utan också presterar
          och genererar affärer. Med många års erfarenhet av design utveckling
          och digital tjäsnteutveckling är vi rustade att hantera projekt av
          alla skalor. Vi är kundcentrerade och värdesätter transparans,
          samarbete och arbetar när dig från idé till lansering - och vidare.
          Låt oss hjälpa dig att skapa en online upplevelse som skiljer ditt
          företag åt. Kontakta oss idag från en kostnadsfri konsultation!
        </p>
        <Link href={'/'}>Se våra kundprojekt</Link>
      </section>
      <section className='offer-down-layout'>
        <article>
          <p>
            “Enkla användarupplevelser som människor tycker är tydliga, tycker
            om och gör bättre ifrån sig”
          </p>
          <p>
            “Den bästa tekniken som gör att våra kunder inte ligger efter, är
            snabb och genererar det bästa resultatet”
          </p>
          <p>
            “Kvalité och närvaro som gör att kunderna möts i en meningsfull
            upplevelse och visar företaget från sin bästa sida.”
          </p>
        </article>
      </section>
      <div className='footer-video'>
        <video
          loop={true}
          muted={true}
          playsInline={false}
          autoPlay={true}
          style={{
            width: '100vw'
          }}
        >
          <source src='/assets/footer/footer-video.mp4' type='video/mp4' />
          <p>Din webbläsare stödjer inte video.</p>
        </video>
      </div>
    </main>
  );
}
