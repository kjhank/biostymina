import { Container, WPImage } from '@/components';
import { IntroSection, Text } from './Intro.styled';
import { type IntroProps } from './Intro.types';

export const Intro = ({
  decoration, image, text,
}: IntroProps) => (
  <IntroSection>
    <Container>
      <WPImage
        alt="" className="history-intro-decoration"
        imageData={{ url: decoration }}
        loading="eager"
      />
      <Text>{text}</Text>
      <WPImage
        alt="opakowanie Biostyminy oraz dwie ampułki" className="history-intro-image"
        imageData={{ url: image }}
        loading="eager"
      />
    </Container>
  </IntroSection>
  );
