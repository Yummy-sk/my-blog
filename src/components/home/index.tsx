import { HomeProfile } from '@/components/home/home_profile/HomeProfile';
import { HomeDescription } from '@/components/home/home_description/HomeDescription';
import * as S from './style';

interface Props {
  src: string;
}

export function Home({ src }: Props) {
  return (
    <S.Container>
      <HomeProfile src={src} />
      <HomeDescription />
    </S.Container>
  );
}
