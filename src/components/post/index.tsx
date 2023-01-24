import { PostContent } from '@/components/post/post_content/PostContent';
import { Transition } from '@/common';
import { PostPageProps } from '@/types/data';
import * as S from './style';

export function Post({ detail, content }: PostPageProps) {
  console.log(detail);
  return (
    <S.Container>
      <Transition>
        <PostContent content={content} />
      </Transition>
    </S.Container>
  );
}
