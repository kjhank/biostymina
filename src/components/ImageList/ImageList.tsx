import {
  Content, List, Wrapper,
} from './ImageList.styled';
import { type ImageListProps } from './ImageList.types';

export const ImageList = ({ items }: ImageListProps) => (
  <Wrapper className="image-list">
    <List $isWhite>
      {items.map(item => (
        <li key={item}>
          <Content>{item}</Content>
        </li>
      ))}
    </List>
    <List>
      {items.map(item => (
        <li key={item}>
          <Content>{item}</Content>
        </li>
))}
    </List>
  </Wrapper>
);
