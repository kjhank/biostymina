/* eslint-disable @typescript-eslint/no-unsafe-argument */

import sanitize from 'sanitize-html';
import { StaticImage } from 'gatsby-plugin-image';
import { ButtonLink, Container } from '@/components';
import { Brow, SectionHeading } from '@/components/styled';
import { type Aloe as AloeProps } from '@/types/content/home.types';
import { Section, Text } from '../styled';
import { sanitizeConfig } from '@/utils';

export const Aloe = ({
  brow, heading, link, text,
}: AloeProps) => {
  const sanitizedText = sanitize(text, sanitizeConfig);

  return (
    <Section className="aloe-section">
      <Container>
        <Brow>{brow}</Brow>
        <SectionHeading>{heading}</SectionHeading>
        <Text dangerouslySetInnerHTML={{ __html: sanitizedText }} />
        <ButtonLink to={link.url}>{link.text}</ButtonLink>
        <StaticImage
          alt="aloes" className="aloe-section-decoration"
          loading="lazy" placeholder="blurred"
          src="../../../images/home/aloe-decoration.png" width={1665}
        />
      </Container>
    </Section>
  );
};

