import sanitize from 'sanitize-html';
import { Container } from '@/components/Container/Container';
import { Item, List } from './Cultivation.styled';
import { type CultivationListProps } from './Cultivation.types';

export const CultivationList = ({ items }: CultivationListProps) => (
  <Container>
    <List>
      {items.map(item => {
        const cleanItem = sanitize(item, { allowedTags: ['sup'] });

        return (
          <Item key={item}>
            <span dangerouslySetInnerHTML={{ __html: cleanItem }} />
          </Item>
        );
      })}
    </List>
  </Container>
);
