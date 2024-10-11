import Advertise from '@/components/homepage/Advertise';
import Expertise from '@/components/homepage/Expertise';
import Hero from '@/components/homepage/Hero';
import News from '@/components/common/News';
import { newsData } from '@/components/utils/news';

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <News title='Våra pågende projekt' data={newsData} />
        <Expertise />
        <Advertise />
      </main>
    </>
  );
}
