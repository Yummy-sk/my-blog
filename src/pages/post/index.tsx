import { NotionService } from '@/service';
import { PostListProps } from '@/types/data';
import { PostList } from '@/components';

interface Props {
  posts: Array<PostListProps>;
}

export default function Page({ posts }: Props) {
  return <PostList posts={posts} />;
}

export async function getStaticProps() {
  const notionService = new NotionService();
  const posts = await notionService.getPosts();

  if (!posts) {
    // Note: 에러가 발생했을 경우, 에러 페이지로 리다이렉트 합니다.
    return {
      redirect: {
        destination: '/error',
        permanent: false,
      },
    };
  }

  return {
    props: {
      posts,
    },
  };
}
