import { Roboto } from '@next/font/google';
import * as S from './styles';

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
});

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <S.Container className={roboto.className}>
      <S.Wrapper>{children}</S.Wrapper>
    </S.Container>
  );
}
