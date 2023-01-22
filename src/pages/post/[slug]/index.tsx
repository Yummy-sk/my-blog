import { NotionService } from '@/service';

export default function Page(props: any) {
  console.log(props);
  return (
    <div>
      <h1>Post</h1>
    </div>
  );
}
export function getStaticProps({
  params: { slug },
}: {
  params: { slug: string };
}) {
  // const notionService = new NotionService();

  console.log(slug);
  return {
    props: {
      text: '',
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
