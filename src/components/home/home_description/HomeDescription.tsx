import { ListItem, UnorderedList } from '@chakra-ui/react';
import * as S from './HomeDescription.style';

function AboutMe() {
  return (
    <S.Wrapper>
      <S.Title>About me</S.Title>
      <S.Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quae
        molestiae ipsum? Eius quae perferendis neque, consequatur placeat culpa
        maxime rerum magni minima. Nisi sit omnis dolorem placeat possimus rem!
      </S.Paragraph>

      <S.Paragraph>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum ullam
        sapiente, iure eligendi fuga voluptate eum delectus earum alias. Dolorum
        assumenda hic molestiae.
      </S.Paragraph>
    </S.Wrapper>
  );
}

function Skills() {
  return (
    <S.Wrapper>
      <S.Title>Skills</S.Title>
      <S.Inner>
        <UnorderedList>
          <ListItem>JavaScript, TypeScript</ListItem>
          <ListItem>React.js, Next.js</ListItem>
          <ListItem>Redux.js, recoil</ListItem>
          <ListItem>GraphQL</ListItem>
        </UnorderedList>
      </S.Inner>
    </S.Wrapper>
  );
}

export function HomeDescription() {
  return (
    <S.Container>
      <AboutMe />
      <Skills />
    </S.Container>
  );
}
