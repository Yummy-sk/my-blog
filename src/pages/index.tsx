import { Home } from '@/components';
import { Transition, SEO } from '@/common';

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

  return {
    props: {
      src,
    },
  };
}
