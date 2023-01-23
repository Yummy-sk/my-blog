import { useRouter } from 'next/router';
import { Input, useColorMode } from '@chakra-ui/react';
import { parseTagString } from '@/util';
import * as S from './PostOption.style';

export function PostOption() {
  const router = useRouter();
  const { colorMode } = useColorMode();

  const {
    query: { tag },
  } = router;

  const getTitle = () => {
    if (tag && typeof tag === 'string') {
      return parseTagString({ tag });
    }

    return 'All Posts';
  };

  return (
    <S.Container>
      <S.Row>
        <S.Title>{getTitle()}</S.Title>
        {getTitle() !== 'All Posts' && (
          <S.Button
            currentTheme={colorMode}
            onClick={() => {
              router.push('/post');
            }}
          >
            All Posts
          </S.Button>
        )}
      </S.Row>
      <Input placeholder='Search Keyword' width='100%' />
    </S.Container>
  );
}
