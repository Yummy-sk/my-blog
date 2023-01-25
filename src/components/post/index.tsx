import { PostContent } from '@/components/post/post_content/PostContent';
import { PostHeader } from '@/components/post/post_header/PostHeader';
import { Transition } from '@/common';
import { PostPageProps } from '@/types/data';
import * as S from './style';

export function Post({ detail, content }: PostPageProps) {
  return (
    <S.Container>
      <Transition>
        <PostHeader detail={detail} />
        <PostContent content={content} />
      </Transition>
    </S.Container>
  );
}
