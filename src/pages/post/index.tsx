import { useEffect, useState, useCallback } from 'react';
import { NextPageContext } from 'next';
import { Transition, SEO } from '@/common';
import { NotionService } from '@/service';
import { useDebounce } from '@/hooks';
import { PostListProps } from '@/types/data';
import { PostList } from '@/components';

interface Props {
  posts: Array<PostListProps>;
  tag: string;
}
interface Query {
  tag: string | undefined;
}

interface PostState {
  keyword: string;
  posts: Array<PostListProps>;
}

export default function Page({ posts, tag }: Props) {
  const image = process.env.NEXT_PUBLIC_PROFILE_URL || '';
  const [postState, setPostState] = useState<PostState>({
    keyword: '',
    posts,
  });

  const filterPost = async ({ keyword }: { keyword: string }) => {
    try {
      const response = await fetch('/api/post', {
        method: 'POST',
        body: JSON.stringify({ search: keyword, tag }),
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

  useEffect(() => {
    setPostState((prev: PostState) => ({
      ...prev,
      posts,
    }));
  }, [posts]);

  return (
    <>
      <SEO
        title='Posts'
        description='안녕하세요 프론트앤드 개발자 염상권입니다. 경험과 공부한 내용을 기록하는 블로그입니다.'
        url='https://www.yeummy-blog.com/post'
        image={image}
      />
      <Transition>
        <PostList
          posts={postState.posts}
          keyword={postState.keyword}
          onChangeKeyword={onChangeKeyword}
        />
      </Transition>
    </>
  );
}

export async function getServerSideProps(context: NextPageContext) {
  const { tag } = context.query as unknown as Query;
  const targetTag = tag?.trim() || '';
  const notionService = new NotionService();
  const posts = await notionService.getPosts({ targetTag });

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
      tag: targetTag,
    },
  };
}
