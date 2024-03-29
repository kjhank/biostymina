import {
  ButtonLink, Container, WPImage,
} from '@/components';
import { type Hero as HeroProps } from '@/types/content/home.types';
import { Heading, SubHeading } from './Hero.styled';
import { Section } from '../styled';

export const Hero = ({
  background, heading, link, subheading,
}: HeroProps) => {
  const linkPath = new URL(link.url).pathname;

  return (
    <Section className="hero-section">
      <Container>
        <h1>
          <Heading as="p">{heading}</Heading>
          <SubHeading as="p">{subheading}</SubHeading>
        </h1>
        <ButtonLink to={linkPath}>{link.title}</ButtonLink>
      </Container>
      <WPImage
        alt="" className="hero-section-decoration"
        imageData={background}
        loading="eager"
      />
    </Section>
  );
};
