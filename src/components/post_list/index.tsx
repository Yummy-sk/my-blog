import { PostListProps } from '@/types/data';
import { PostSection } from '@/components/post_list/post_section/PostSection';
import * as S from './style';

interface Props {
  posts: Array<PostListProps>;
}

export function PostList({ posts }: Props) {
  console.log(posts);
  return (
    <S.Container>
      {posts.map(post => (
        <PostSection key={post.id} post={post} />
      ))}
    </S.Container>
  );
}
