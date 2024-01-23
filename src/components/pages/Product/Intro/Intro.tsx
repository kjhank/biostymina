import { type Intro as IntroProps } from '@/types';
import {
  IntroNode, List,
} from './Intro.styled';
import { Container } from '@/components';
import { IntroItem } from './IntroItem';

export const Intro = ({ introItems }: IntroProps) => (
  <IntroNode>
    <Container>
      <List>
        {introItems.map(item => <IntroItem key={item.text} {...item} />)}
      </List>
    </Container>
  </IntroNode>
);
