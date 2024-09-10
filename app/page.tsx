import Advertise from '@/components/homepage/Advertise';
import Expertise from '@/components/homepage/Expertise';
import Hero from '@/components/homepage/Hero';
import News from '@/components/homepage/News';

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <News />
        <Expertise />
        <Advertise />
      </main>
    </>
  );
}
