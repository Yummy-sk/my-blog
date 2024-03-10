import { Button } from '@my-site/ui-kit';
import { useEffect } from 'react';

const Comps = dynamic(() => import('about/injector').then((mod) => mod.Comps), {
  ssr: false,
});

import dynamic from 'next/dynamic';

const elementId = 'isolated-app';

export default function Home() {
  return (
    <main>
      <Button />
      {/* <div id={elementId}></div> */}

      <Comps />
    </main>
  );
}
