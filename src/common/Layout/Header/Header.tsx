import Link from 'next/link';
import { useRouter } from 'next/router';
import { nanoid } from 'nanoid';
import * as S from './styles';

interface LinkProps {
  href: string;
  name: string;
  isActive: boolean;
}

function NavLink({ href, name, isActive }: LinkProps) {
  return (
    <Link href={href} passHref>
      <S.Anchor isActive={isActive}>{name}</S.Anchor>
    </Link>
  );
}

export function Header() {
  const router = useRouter();
  const links = [
    {
      key: nanoid(),
      name: 'Home',
      path: '/',
    },
    {
      key: nanoid(),
      name: 'Post',
      path: '/post',
    },
    {
      key: nanoid(),
      name: 'Contact',
      path: '/contact',
    },
  ];

  return (
    <S.Container>
      <S.Header>
        <h1>Yeummy-sk</h1>
      </S.Header>
      <S.Nav>
        <ul>
          {links.map(({ key, path, name }) => (
            <li key={key}>
              <NavLink
                href={path}
                name={name}
                isActive={path === router.pathname}
              />
            </li>
          ))}
        </ul>
      </S.Nav>
    </S.Container>
  );
}
