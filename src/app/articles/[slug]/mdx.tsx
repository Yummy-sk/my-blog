'use client';

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

interface Props {
  mdxSource: MDXRemoteSerializeResult<
  Record<string, unknown>,
  Record<string, unknown>
  >;
}

export default function MDX({ mdxSource }: Props) {
  return (
    <div className="prose dark:prose-invert">
      <MDXRemote {...mdxSource} />
    </div>
  );
}
