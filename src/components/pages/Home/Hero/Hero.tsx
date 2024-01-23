import {
 ButtonLink, Container, WPImage,
} from '@/components';
import { type Hero as HeroProps } from '@/types/content/home.types';
import { Heading, SubHeading } from './Hero.styled';
import { Section } from '../styled';

export const Hero = ({
  background, heading, link, subheading,
}: HeroProps) => (
  <Section className="hero-section">
    <Container>
      <h1>
        <Heading as="p">{heading}</Heading>
        <SubHeading as="p">{subheading}</SubHeading>
      </h1>
      <ButtonLink to={link.url}>{link.text}</ButtonLink>
    </Container>
    <WPImage
      alt="" className="hero-section-decoration"
      imageData={{ url: background }}
      loading="eager"
    />
  </Section>
);
