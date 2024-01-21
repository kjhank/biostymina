import { type WarningsListProps } from './Warnings.types';
import { Bubble, WarningSection } from './Warnings.styled';
import { Container } from '@/components';
import { WarningsList } from './WarningsList';

export const Warnings = ({ list }: WarningsListProps) => (
  <WarningSection>
    <Container>
      <Bubble $isGray />
      <Bubble><WarningsList list={list} /></Bubble>
      <Bubble $isGray />
    </Container>
  </WarningSection>
);
