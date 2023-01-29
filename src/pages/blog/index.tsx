import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import { Transition, SEO } from '@/common';
import { NotionService } from '@/service';
import { useDebounce } from '@/hooks';
import { BlogListProps } from '@/types/data';
import { BlogList } from '@/components';

interface Props {
  posts: Array<BlogListProps>;
}

interface BlogState {
  keyword: string;
  tag: string;
  posts: Array<BlogListProps>;
}

const parseTag = ({ tag }: { tag: string | string[] | undefined }) => {
  if (typeof tag === 'string') {
    return tag.trim();
  }

  return '';
};

export default function Page({ posts }: Props) {
  const router = useRouter();
  const image = process.env.NEXT_PUBLIC_PROFILE_URL || '';
  const [blogState, setBlogState] = useState<BlogState>({
    keyword: '',
    tag: '',
    posts,
  });

  const fetchPost = useCallback(
    async ({ keyword, tag }: { keyword: string; tag: string }) => {
      try {
        const response = await fetch('/api/post', {
          method: 'POST',
          body: JSON.stringify({ search: keyword, tag }),
        });

        const data = (await response.json()) as Array<BlogListProps>;

        setBlogState((prev: BlogState) => ({
          ...prev,
          posts: data,
        }));
      } catch (error) {
        console.error(error);
      }
    },
    [],
  );

  const fetchWithDebounce = useDebounce<{
    keyword: string;
    tag: string;
  }>({
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    callback: fetchPost,
    delay: 500,
  });

  const onChangeKeyword = useCallback(
    ({ keyword }: { keyword: string }) => {
      setBlogState((prev: BlogState) => ({
        ...prev,
        keyword,
      }));

      fetchWithDebounce({ keyword, tag: blogState.tag });
    },
    [fetchWithDebounce, blogState.tag],
  );

  useEffect(() => {
    const currentTag = parseTag({
      tag: router.query.tag,
    });

    // NOTE: 태그가 변경되면 조건에 맞는 포스트를 가져온다.
    if (blogState.tag !== currentTag) {
      fetchPost({ keyword: '', tag: currentTag });

      setBlogState((prev: BlogState) => ({
        ...prev,
        tag: currentTag,
      }));
    }
  }, [fetchPost, blogState.tag, router.query.tag]);

  return (
    <>
      <SEO
        title='Blog'
        description='안녕하세요 프론트앤드 개발자 염상권입니다. 경험과 공부한 내용을 기록하는 블로그입니다.'
        url='https://www.yeummy-blog.com/blog'
        image={image}
      />
      <Transition>
        <BlogList
          posts={blogState.posts}
          keyword={blogState.keyword}
          onChangeKeyword={onChangeKeyword}
        />
      </Transition>
    </>
  );
}

export async function getStaticProps() {
  const notionService = new NotionService();
  const posts = await notionService.getPosts({});

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
    // NOTE: Incremental Static Regeneration
    revalidate: 1000,
  };
}
