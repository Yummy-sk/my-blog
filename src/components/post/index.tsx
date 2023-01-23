import { Transition } from '@/common';
import { PostPageProps } from '@/types/data';
import * as S from './style';

export function Post({ detail, contents }: PostPageProps) {
  console.log(detail, contents);
  return (
    <S.Container>
      <Transition>
        <h1>Post</h1>
      </Transition>
    </S.Container>
  );
}
