import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function AboutPage() {
  return (
    <main
      style={{
        // background: '#fff',
        paddingTop: '120px'
      }}
    >
      <section className='offer-layout gap-[24px]'>
        <div>
          <h1 className='!text-5xl font-[900] mb-8'>Om oss</h1>
          <p className='!text-center'>
            Vi erbjuder företag webbplatser inom alla områden med ett starkt
            fokus på enkelhet och kvalité. Vår expertis är den bästa tekniken,
            ansvarstagandet inom IT, design och användarupplevelser, och
            sömnlösa leveranser “end-to-end”. Vi levererar de där 10%en som
            verkar för verkligt värde.
          </p>
        </div>

        <section className='offer-down-layout'>
          <article className='flex-col'>
            <p className='!text-left'>
              EU har på senare tid antagit en rad nya regelverk inom bland annat
              produktsäkerhet, cybersäkerhet, hantering och delning av data,
              resiliens, kontinuitetshantering, digitala plattformar och
              utveckling och användning av AI. Några av dessa regelverk träffar
              alla företag, oavsett bransch eller storlek. Andra regelverk
              träffar specifika verksamheter eller myndigheter.
            </p>
            <p className='!text-left'>
              I det snabbt skiftande landskapet för digitala produkter och
              tjänster hjälper vi våra klienter med allt från strategisk
              rådgivning och regelefterlevnad till att genomföra de allra mest
              komplexa och strategiskt viktiga transaktionerna och projekten.
              Inom området Digital Compliance säkerställer vi sömlöst samarbete
              och full integration av juridiska kompetenser och branschkunskaper
              för att skapa affärsmässiga, värdeskapande och innovativa
              lösningar för våra klienter kring bland annat cyber- och
              produktsäkerhet, integritets- och konsumentskydd, resiliens,
              säkerhetsskydd samt digitala marknader och tillgång till och
              användning av data.
            </p>
            <p className='!text-left'>
              Ett flertal av byråns specialister samverkar inom området Digital
              Compliance för att skräddarsy den bästa möjliga rådgivningen med
              hänsyn till varje enskild klient och uppdrag, samt för att
              säkerställa att byrån alltid är uppdaterad på den senaste
              utvecklingen på området
            </p>
          </article>
        </section>
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
      <div className='my-10 offer-layout'>
        <p
          style={{
            textAlign: 'left'
          }}
        >
          EU har på senare tid antagit en rad nya regelverk inom bland annat
          produktsäkerhet, cybersäkerhet, hantering och delning av data,
          resiliens, kontinuitetshantering, digitala plattformar och utveckling
          och användning av AI. Några av dessa regelverk träffar alla företag,
          oavsett bransch eller storlek. Andra regelverk träffar specifika
          verksamheter eller myndigheter
          <br />
          <br />
          I det snabbt skiftande landskapet för digitala produkter och tjänster
          hjälper vi våra klienter med allt från strategisk rådgivning och
          regelefterlevnad till att genomföra de allra mest komplexa och
          strategiskt viktiga transaktionerna och projekten. Inom området
          Digital Compliance säkerställer vi sömlöst samarbete och full
          integration av juridiska kompetenser och branschkunskaper för att
          skapa affärsmässiga, värdeskapande och innovativa lösningar för våra
          klienter kring bland annat cyber- och produktsäkerhet, integritets-
          och konsumentskydd, resiliens, säkerhetsskydd samt digitala marknader
          och tillgång till och användning av data
          <br />
          <br />
          Ett flertal av byråns specialister samverkar inom området Digital
          Compliance för att skräddarsy den bästa möjliga rådgivningen med
          hänsyn till varje enskild klient och uppdrag, samt för att säkerställa
          att byrån alltid är uppdaterad på den senaste utvecklingen på området
        </p>
      </div>
      <hr />
      <div className='my-10 offer-layout'>
        <h1 className='!text-5xl font-[900] mb-8'>Idén</h1>
        <div className='flex items-center justify-between gap-8 md:flex-row flex-col'>
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
              textAlign: 'left',
              fontSize: '12px'
            }}
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
            Redan när jag började på Mannheimer Swartling för mer än 20 år sedan
            var detta drivkrafter som kännetecknade oss. Det är med stolthet jag
            konstaterar att dessa drivkrafter är precis lika starka idag.
          </p>
        </div>
      </div>
    </main>
  );
}
