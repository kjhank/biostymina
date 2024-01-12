/* eslint-disable @typescript-eslint/no-unsafe-argument */

import sanitize from 'sanitize-html';
import { Container } from '@/components/Container/Container';
import { Brow, SectionHeading } from '@/components/styled';
import { type Aloe as AloeProps } from '@/mocks/static.types';
import { Section, Text } from '../styled';
import { ButtonLink } from '@/components';
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
      </Container>
    </Section>
  );
};

