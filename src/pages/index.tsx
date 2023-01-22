import { Home } from '@/components';

interface Props {
  src: string;
}

export default function Page({ src }: Props) {
  return <Home src={src} />;
}

export function getStaticProps() {
  const src = process.env.NEXT_PUBLIC_PROFILE_URL;

  return {
    props: {
      src,
    },
  };
}
