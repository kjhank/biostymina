import sanitize from 'sanitize-html';
import {
  Content, List, Wrapper,
} from './ImageList.styled';
import { type ImageListProps } from './ImageList.types';

export const ImageList = ({ items }: ImageListProps) => {
  const sanitizedItems = items.map(({ item }) => {
    const sanitizedItem = sanitize(item, {
      allowedClasses: { em: ['emphasis'] },
      allowedTags: ['em'],
    });

    return sanitizedItem;
  });

  return (
    <Wrapper className="image-list">
      <List $isWhite>
        {items.map(({ item }) => (
          <li key={item}>
            <Content>{item}</Content>
          </li>
        ))}
      </List>
      <List>
        {sanitizedItems.map(item => (
          <li key={item}>
            <Content>
              <span dangerouslySetInnerHTML={{ __html: item }} />
            </Content>
          </li>
        ))}
      </List>
    </Wrapper>
  );
};
