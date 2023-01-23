import { Home } from '@/components';
import { Transition } from '@/common';

interface Props {
  src: string;
}

export default function Page({ src }: Props) {
  return (
    <Transition>
      <Home src={src} />
    </Transition>
  );
}

export function getStaticProps() {
  const src = process.env.NEXT_PUBLIC_PROFILE_URL;

  return {
    props: {
      src,
    },
  };
}
