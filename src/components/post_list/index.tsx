import { PostOption } from '@/components/post_list/post_option/PostOption';
import { PostSection } from '@/components/post_list/post_section/PostSection';
import { Transition } from '@/common';
import { PostListProps } from '@/types/data';
import * as S from './style';

interface Props {
  posts: Array<PostListProps>;
  keyword: string;
  onChangeKeyword: ({ keyword }: { keyword: string }) => void;
}

export function PostList({ posts, keyword, onChangeKeyword }: Props) {
  return (
    <S.Container>
      <Transition>
        <PostOption keyword={keyword} onChangeKeyword={onChangeKeyword} />
        {posts.map(post => (
          <PostSection key={post.id} post={post} />
        ))}
      </Transition>
    </S.Container>
  );
}
