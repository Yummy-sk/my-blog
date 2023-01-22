import { NextPageContext } from 'next';
import { NotionService } from '@/service';
import { PostListProps } from '@/types/data';
import { PostList } from '@/components';

interface Props {
  posts: Array<PostListProps>;
}
interface Query {
  tag: string | undefined;
}

export default function Page({ posts }: Props) {
  return <PostList posts={posts} />;
}

export async function getServerSideProps(context: NextPageContext) {
  const { tag } = context.query as unknown as Query;

  const notionService = new NotionService();
  const posts = await notionService.getPosts({ targetTag: tag?.trim() });

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
