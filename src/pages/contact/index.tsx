import { Contact } from '@/components';
import { Transition, SEO } from '@/common';

export default function Page() {
  const imageSrc = process.env.NEXT_PUBLIC_PROFILE_URL || '';

  return (
    <>
      <SEO
        title='Contact'
        description='안녕하세요 프론트앤드 개발자 염상권입니다. 언제든 편하게 메일 주세요!'
        url='https://www.yeummy-blog.com/contact'
        image={imageSrc}
      />
      <Transition>
        <Contact />
      </Transition>
    </>
  );
}
