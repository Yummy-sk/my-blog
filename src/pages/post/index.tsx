import { NotionService } from '@/service';

interface Props {
  posts: {
    title: string;
    description: string;
    number: number;
    tags: Array<string>;
    createdTime: string;
  };
}

export default function PostList({ posts }: Props) {
  console.log(posts);
  return (
    <div>
      <h1>Post List</h1>
    </div>
  );
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
