import { Brow } from '@/components/styled';
import { AboutSection } from './About.styled';
import { type AboutAloeProps } from './About.types';
import { Container } from '@/components/Container/Container';
import { ImageList } from '@/components/ImageList/ImageList';

export const About = ({ heading, items }: AboutAloeProps) => (
  <AboutSection>
    <Container>
      <Brow $isLighter as="h2">{heading}</Brow>
      <ImageList items={items} />
    </Container>
  </AboutSection>
);
