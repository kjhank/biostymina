import { type Instructions as InstructionsProps } from '@/types';
import {
 Bubble, Description, Heading, InstructionsSection,
} from './Instructions.styled';
import { Container } from '@/components/Container/Container';
import { InstructionsList } from './InstructionsList';

export const Instructions = ({ title, instructions }: InstructionsProps) => (
  <InstructionsSection>
    <Container>
      <Bubble />
      <Bubble $isWide as="header">
        <Heading>{title.heading}</Heading>
        <hr />
        <Description>{title.description}</Description>
      </Bubble>
      <InstructionsList list={instructions} />
    </Container>
  </InstructionsSection>
);
