import Link from 'next/link';
import * as Tags from '@/actions/tags';

interface TagProps {
  text: string;
  count: number;
}

function Tag({ text, count }: TagProps) {
  return (
    <Link href={`/tags/${text}`}>
      <span className="inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-200 text-zinc-500 dark:text-zinc-400 transition hover:text-teal-500 dark:hover:text-teal-500">
        {`#${text} (${String(count)})`}
      </span>
    </Link>
  );
}

export default async function Page() {
  const tags = await Tags.get();

  console.log(tags);

  return (
    <div className="w-full h-full">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
        Tags
      </h1>
      <div className="flex flex-row flex-wrap gap-5 mt-10">
        {tags.map(({ text, count }) => (
          <Tag key={text} text={text} count={count} />
        ))}
      </div>
    </div>
  );
}
