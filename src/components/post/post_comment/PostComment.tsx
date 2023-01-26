import { useCallback, useEffect } from 'react';
import { useColorMode } from '@chakra-ui/react';
import { removeChild } from '@/components/post/util';
import * as S from './PostComment.style';

export function PostComment() {
  const { colorMode } = useColorMode();

  const commentsTheme = colorMode === 'dark' ? 'github-dark' : 'github-light';

  const COMMENTS_ID = 'comments-container';

  const LoadComments = useCallback(() => {
    const script = document.createElement('script');
    script.src = 'https://utteranc.es/client.js';
    script.setAttribute('repo', 'Yummy-sk/Blog_V2');
    script.setAttribute('issue-term', 'pathname');
    script.setAttribute('label', '💬 Discussion');
    script.setAttribute('theme', commentsTheme);
    script.setAttribute('crossorigin', 'anonymous');

    const comments = document.getElementById(COMMENTS_ID);

    if (comments && comments.hasChildNodes()) {
      const { firstChild } = comments;
      removeChild({
        parent: comments,
        child: firstChild,
      });
    }
    script.async = true;

    if (comments) comments.appendChild(script);
  }, [commentsTheme]);

  useEffect(() => {
    const iframe = document.querySelector('.utterances-frame');

    if (!iframe) return;
    LoadComments();
  }, [LoadComments]);

  return (
    <S.Container>
      <S.Comment className='utterances-frame' id={COMMENTS_ID} />
    </S.Container>
  );
}
