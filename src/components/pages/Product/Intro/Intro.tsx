import { type Intro as IntroProps } from '@/types';
import {
  IntroNode, List,
} from './Intro.styled';
import { Container } from '@/components';
import { IntroItem } from './IntroItem';

export const Intro = ({ items }: IntroProps) => (
  <IntroNode>
    <Container>
      <List>
        {items.map(item => <IntroItem key={item.text} {...item} />)}
      </List>
    </Container>
  </IntroNode>
);
