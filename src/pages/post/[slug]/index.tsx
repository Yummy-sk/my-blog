import { NotionService } from '@/service';
import { PostPageProps } from '@/types/data';
import { Transition } from '@/common';

export default function Page({ detail, contents }: PostPageProps) {
  console.log(detail);
  console.log(contents);
  return (
    <Transition>
      <div>
        <h1>Post</h1>
      </div>
    </Transition>
  );
}
export async function getStaticProps({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const notionService = new NotionService();
  const [detail, contents] = await Promise.all([
    notionService.getPostDetail(slug),
    notionService.getPostContent(slug),
  ]);

  if (!detail || !contents) {
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
      detail,
      contents,
    },
  };
}

export async function getStaticPaths() {
  const notionService = new NotionService();

  const paths = await notionService.getPostIds();

  return {
    paths: paths?.map(id => ({
      params: {
        slug: id,
      },
    })),
    fallback: false,
  };
}
