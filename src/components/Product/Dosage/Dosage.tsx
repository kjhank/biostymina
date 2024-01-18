import { type Dosage as DosageProps } from '@/types';
import {
 DosageSection, List, Wrapper,
} from './Dosage.styled';
import { Container } from '@/components';
import { Brow } from '@/components/styled';
import { SingleDose } from './SingleDose';

export const Dosage = ({
  heading, doses, image,
}: DosageProps) => (
  <DosageSection>
    <Container>
      <Brow $isLighter as="h2">{heading}</Brow>
      <Wrapper>
        <List>
          {doses.map(dose => <SingleDose key={dose.text} {...dose} />)}
        </List>
      </Wrapper>
    </Container>
  </DosageSection>
);
