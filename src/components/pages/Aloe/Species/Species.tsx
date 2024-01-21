import { Container } from '@/components/Container/Container';
import { SpeciesSection, TextPart } from './Species.styled';
import { type SpeciesProps } from './Species.types';
import { SpeciesList } from './SpeciesList';
import { Brow } from '@/components/styled';

export const Species = ({
  description, heading, species,
}: SpeciesProps) => (
  <SpeciesSection>
    <Container>
      <TextPart>
        <Brow as="h2">{heading}</Brow>
        <p>{description}</p>
      </TextPart>
      <SpeciesList species={species} />
    </Container>
  </SpeciesSection>
);
