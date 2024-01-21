import sanitize from 'sanitize-html';
import {
 ButtonLink, Container, WPImage,
} from '@/components';
import { Brow, SectionHeading } from '@/components/styled';
import { type Aloe as AloeProps } from '@/types/content/home.types';
import { Section, Text } from '../styled';
import { sanitizeConfig } from '@/utils';

export const Aloe = ({
  brow, decoration, heading, link, text,
}: AloeProps) => {
  const sanitizedText = sanitize(text, sanitizeConfig);

  return (
    <Section className="aloe-section">
      <Container>
        <Brow>{brow}</Brow>
        <SectionHeading>{heading}</SectionHeading>
        <Text dangerouslySetInnerHTML={{ __html: sanitizedText }} />
        <ButtonLink to={link.url}>{link.text}</ButtonLink>
        <WPImage
          alt="aloes" className="aloe-section-decoration"
          imageData={{ url: decoration }}
        />
      </Container>
    </Section>
  );
};

