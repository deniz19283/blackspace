import Image from 'next/image';
import Link from 'next/link';

export default function News({
  data,
  title,
  hideButton = false
}: {
  data: {
    link: string;
    title: string;
    image: string;
    date: string;
    terms: string[];
  }[];
  title: string;
  hideButton?: boolean;
}) {
  return (
    <>
      <section className='module-component module-component_posts'>
        <div className='wrapper'>
          <h2 className='section-title'>{title}</h2>
          <div className='posts-list'>
            {data.map((news, index) => (
              <div key={index} className='postentry'>
                <Link href={news.link} title={news.title}>
                  <Image
                    src={news.image}
                    alt={`new-image-${index}`}
                    width={800}
                    height={800}
                    layout='responsive'
                  />
                  <h2 className='postentry_title'>{news.title}</h2>
                </Link>
                <ul className='post-terms-list'>
                  {news.terms.map((term, index) => (
                    <li key={index} className='post-terms-list_item'>
                      <Link href='/'>{term}</Link>
                    </li>
                  ))}
                </ul>
                <time dateTime='2024-08-23 16:14:17'>{news.date}</time>
              </div>
            ))}
          </div>
          {!hideButton && (
            <footer className='posts_footer'>
              <a
                href='/'
                target='_self'
                title='Se fler projekt'
                className='button'
              >
                Se fler projekt{' '}
              </a>
            </footer>
          )}
        </div>
      </section>
    </>
  );
}
