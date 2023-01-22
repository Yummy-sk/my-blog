import { PostOption } from '@/components/post_list/post_option/PostOption';
import { PostSection } from '@/components/post_list/post_section/PostSection';
import { PostListProps } from '@/types/data';
import * as S from './style';

interface Props {
  posts: Array<PostListProps>;
}

export function PostList({ posts }: Props) {
  return (
    <S.Container>
      <PostOption />
      {posts.map(post => (
        <PostSection key={post.id} post={post} />
      ))}
    </S.Container>
  );
}
