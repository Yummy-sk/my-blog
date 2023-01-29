import Lottie from 'react-lottie';
import error_emoji from '@/components/error/lib/error.json';
import * as S from './style';

export function Error() {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <S.Container>
      <Lottie
        options={{ ...defaultOptions, animationData: error_emoji }}
        width={150}
        height={150}
      />
      <p>Oops, Error happened..</p>
    </S.Container>
  );
}
