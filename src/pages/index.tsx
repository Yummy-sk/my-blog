import dynamic from 'next/dynamic';
import { generateRSS } from '@/util/generateRSS';

const Home = dynamic(() => import('@/components').then(mod => mod.Home));

const Transition = dynamic(() =>
  import('@/common').then(mod => mod.Transition),
);

const SEO = dynamic(() => import('@/common').then(mod => mod.SEO));

interface Props {
  src: string;
}

export default function Page({ src }: Props) {
  return (
    <>
      <SEO
        title='Home'
        description='안녕하세요 프론트앤드 개발자 염상권입니다. 저에 대해 소개드립니다.'
        url='https://www.yeummy-blog.com'
        image={src}
      />
      <Transition>
        <Home src={src} />
      </Transition>
    </>
  );
}

export function getStaticProps() {
  const src = process.env.NEXT_PUBLIC_PROFILE_URL;

  generateRSS();

  return {
    props: {
      src,
    },
    revalidate: 100000,
  };
}
