import { Roboto } from '@next/font/google';
import { Header } from './Header/Header';
import { Body } from './Body/Body';
import { Footer } from './Footer/Footer';
import * as S from './styles';

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
});

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <S.Container className={roboto.className}>
      <S.Wrapper>
        <Header />
        <Body>{children}</Body>
        <Footer />
      </S.Wrapper>
    </S.Container>
  );
}
