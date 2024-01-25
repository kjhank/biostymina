import sanitize from 'sanitize-html';
import {
  ButtonLink, Container, WPImage,
} from '@/components';
import { Brow, SectionHeading } from '@/components/styled';
import { type Aloe as AloeProps } from '@/types/content/home.types';
import { Section, Text } from '../styled';

export const Aloe = ({
  brow, decoration, heading, link, text,
}: AloeProps) => {
  const sanitizedText = sanitize(text, {
    allowedTags: [
      'b',
      'em',
      'i',
      'strong',
    ],
  });

  const linkPath = new URL(link.url).pathname;

  return (
    <Section className="aloe-section">
      <Container>
        <Brow>{brow}</Brow>
        <SectionHeading>{heading}</SectionHeading>
        <Text dangerouslySetInnerHTML={{ __html: sanitizedText }} />
        <ButtonLink to={linkPath}>{link.title}</ButtonLink>
        <WPImage
          alt="aloes" className="aloe-section-decoration"
          imageData={decoration}
        />
      </Container>
    </Section>
  );
};

