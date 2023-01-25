import Image from 'next/image';
import { useRouter } from 'next/router';
import { ColorMode, useColorMode } from '@chakra-ui/react';
import { PostDetailProps } from '@/types/data';
import { getCdnSrc, parseDateString, parseTagString } from '@/util';
import * as S from './PostHeader.style';

interface TagProps {
  currentTheme: ColorMode;
  tag: string;
  onClick: () => void;
}

function Tag({ currentTheme, tag, onClick }: TagProps) {
  return (
    <S.Tag currentTheme={currentTheme} onClick={onClick}>
      <p>
        #
        {parseTagString({
          tag,
        })}
      </p>
    </S.Tag>
  );
}

export function PostHeader({ detail }: { detail: PostDetailProps }) {
  const { cover, title, createdTime, number, tags } = detail;
  const { colorMode } = useColorMode();
  const router = useRouter();

  const onTagClick = ({ tag }: { tag: string }) => {
    router.push(`/post?tag=${tag}`);
  };

  const onBackClick = () => {
    router.back();
  };

  return (
    <S.Container>
      <S.Title>PostHeader</S.Title>
      <S.Wrapper>
        <S.Info currentTheme={colorMode}>
          {parseDateString({
            dateString: createdTime,
          })}{' '}
          • ☕️ {number} min read
        </S.Info>
        <S.Inner>
          <S.UlWrapper>
            {tags.map(tag => (
              <li key={tag}>
                <Tag
                  currentTheme={colorMode}
                  tag={tag}
                  onClick={() => onTagClick({ tag })}
                />
              </li>
            ))}
          </S.UlWrapper>
          <S.BackButton currentTheme={colorMode} onClick={onBackClick}>
            Back
          </S.BackButton>
        </S.Inner>
      </S.Wrapper>
      <S.ImgWrapper>
        <Image
          className='autoImage'
          src={getCdnSrc({
            src: cover,
            width: 644,
            height: 430,
          })}
          alt={title}
          fill
          sizes='100%'
        />
      </S.ImgWrapper>
    </S.Container>
  );
}
