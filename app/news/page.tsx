import News from '@/components/common/News';
import { newsData } from '@/components/utils/news';
import React from 'react';

export default function NewsPage() {
  return (
    <main
      style={{
        // background: '#fff',
        paddingTop: '40px'
      }}
    >
      <News
        title='Våra projekt'
        data={[...newsData, ...newsData, ...newsData]}
        hideButton={true}
      />
    </main>
  );
}
