import { Button } from '@my-site/ui-kit';
import { useEffect } from 'react';

const elementId = 'isolated-app';

export default function Home() {
  useEffect(() => {
    let unmount: () => void = () => {};
    import('about/injector').then(({ inject }) => {
      unmount = inject(elementId, { name: 'main' });
    });
    return () => {
      unmount();
    };
  }, []);

  return (
    <main>
      <Button />
      <div id={elementId}></div>
    </main>
  );
}
