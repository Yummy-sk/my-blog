import daynamic from 'next/dynamic';

const NotFound = daynamic(() =>
  import('@/components').then(mod => mod.NotFound),
);

export default function Page() {
  return <NotFound />;
}
