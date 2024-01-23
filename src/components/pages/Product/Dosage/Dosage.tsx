import { type Dosage as DosageProps } from '@/types';
import {
 DosageSection, List, Wrapper,
} from './Dosage.styled';
import { Container, WPImage } from '@/components';
import { Brow } from '@/components/styled';
import { SingleDose } from './SingleDose';

export const Dosage = ({
  heading, doses, image,
}: DosageProps) => (
  <DosageSection>
    <Container>
      <Brow $isLighter as="h2">{heading}</Brow>
      <Wrapper>
        <WPImage
          alt="uśmiechnięci ludzie, dwoje dorosłych i dwoje dzieci" className="dosage-decoration"
          imageData={image}
        />
        <List>
          {doses.map(dose => <SingleDose key={dose.text} {...dose} />)}
        </List>
      </Wrapper>
    </Container>
  </DosageSection>
);
