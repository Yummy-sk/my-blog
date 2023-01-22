import Link from 'next/link';
import { useColorMode, ColorMode } from '@chakra-ui/react';
import { PostListProps } from '@/types/data';
import * as S from './PostSection.style';

interface TagProps {
  tag: string;
  currentTheme: ColorMode;
}

function Tag({ tag, currentTheme }: TagProps) {
  return (
    <S.Tag currentTheme={currentTheme}>
      <p>#{tag}</p>
    </S.Tag>
  );
}

export function PostSection({ post }: { post: PostListProps }) {
  const { id, title, description, tags, createdTime } = post;
  const { colorMode } = useColorMode();
  const href = `/post/${id}`;

  return (
    <S.Container>
      <S.Head currentTheme={colorMode}>
        <Link href={href}>
          <h2>{title}</h2>
        </Link>
        <ul>
          {tags.map(tag => (
            <li key={tag}>
              <Tag tag={tag} currentTheme={colorMode} />
            </li>
          ))}
        </ul>
      </S.Head>
      <S.Middle currentTheme={colorMode}>
        <summary>{description}</summary>
        <Link href={`/post/${id}`}>
          <p>Read More →</p>
        </Link>
      </S.Middle>
      <S.Bottom currentTheme={colorMode}>
        <time>
          {new Date(createdTime).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            weekday: 'short',
            day: 'numeric',
          })}
        </time>
      </S.Bottom>
    </S.Container>
  );
}
