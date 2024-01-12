import { ButtonLink, Container } from '@/components';
import { type Hero as HeroProps } from '@/mocks/static.types';
import { Heading, SubHeading } from './Hero.styled';
import { Section } from '../styled';

export const Hero = ({
  heading, link, subheading,
}: HeroProps) => (
  <Section className="hero-section">
    <Container>
      <h1>
        <Heading as="p">{heading}</Heading>
        <SubHeading as="p">{subheading}</SubHeading>
      </h1>
      <ButtonLink to={link.url}>{link.text}</ButtonLink>
    </Container>
  </Section>
);
