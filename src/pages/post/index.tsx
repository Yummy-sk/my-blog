import { useState, useCallback } from 'react';
import { NextPageContext } from 'next';
import { NotionService } from '@/service';
import { useDebounce } from '@/hooks';
import { PostListProps } from '@/types/data';
import { PostList } from '@/components';

interface Props {
  posts: Array<PostListProps>;
}
interface Query {
  tag: string | undefined;
}

interface PostState {
  keyword: string;
  posts: Array<PostListProps>;
}

export default function Page({ posts }: Props) {
  const [postState, setPostState] = useState<PostState>({
    keyword: '',
    posts,
  });

  const filterPost = async ({ keyword }: { keyword: string }) => {
    try {
      const response = await fetch('/api/post', {
        method: 'POST',
        body: JSON.stringify({ search: keyword }),
      });

      const data = (await response.json()) as Array<PostListProps>;

      setPostState((prev: PostState) => ({
        ...prev,
        posts: data,
      }));
    } catch (error) {
      console.error(error);
    }
  };

  const fetchWithDebounce = useDebounce<{
    keyword: string;
  }>({
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    callback: filterPost,
    delay: 500,
  });

  const onChangeKeyword = useCallback(
    ({ keyword }: { keyword: string }) => {
      setPostState((prev: PostState) => ({
        ...prev,
        keyword,
      }));

      fetchWithDebounce({ keyword });
    },
    [fetchWithDebounce],
  );

  return (
    <PostList
      posts={postState.posts}
      keyword={postState.keyword}
      onChangeKeyword={onChangeKeyword}
    />
  );
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
