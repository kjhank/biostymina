import { Container } from '@/components/Container/Container';
import {
 List, TimelineSection, TL,
} from './Timeline.styled';
import { type TimelineProps } from './Timeline.types';
import { TimelineItem } from './TimelineItem';

export const Timeline = ({ items }: TimelineProps) => (
  <TimelineSection>
    <TL />
    <Container>
      <List>
        {items.map(item => <TimelineItem key={item.date} {...item} />)}
      </List>
    </Container>
  </TimelineSection>
);
