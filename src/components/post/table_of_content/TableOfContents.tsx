import { useState } from 'react';
import { useColorMode } from '@chakra-ui/react';
import { useHeadingData, useIntersectionObserver } from '@/hooks';
import { TocItem } from '@/types/content';
import * as S from './TableOfContents.style';

function Headings({
  headings,
  activeId,
}: {
  headings: Array<TocItem>;
  activeId: string;
}) {
  const { colorMode } = useColorMode();

  return (
    <S.HeadingContainer currentTheme={colorMode}>
      {headings.map(heading => (
        <li
          key={heading.id}
          className={heading.id === activeId ? 'active' : ''}
        >
          <a href={`#${heading.id}`}>{heading.title}</a>
          {heading.children.length ? (
            <Headings headings={heading.children} activeId={activeId} />
          ) : null}
        </li>
      ))}
    </S.HeadingContainer>
  );
}

export function TableOfContents() {
  const [activeId, setActiveId] = useState<string>('');
  const { headings } = useHeadingData();

  useIntersectionObserver({
    setActiveId,
  });

  return (
    <S.Container>
      <S.Wrapper>
        <Headings headings={headings} activeId={activeId} />
      </S.Wrapper>
    </S.Container>
  );
}
