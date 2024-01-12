/* eslint-disable @typescript-eslint/no-unsafe-argument */

import sanitize from 'sanitize-html';
import { SectionHeading } from '@/components/styled';
import { type History as HistoryProps } from '@/mocks/static.types';
import {
 HistoryContainer, Section, Text,
} from '../styled';
import { ButtonLink } from '@/components';
import { sanitizeConfig } from '@/utils';
import { Brow } from './History.styled';

export const History = ({
  brow, heading, link, text,
}: HistoryProps) => {
  const sanitizedText = sanitize(text, sanitizeConfig);
  const sanitizedHeading = sanitize(heading, { allowedTags: ['sup'] });

  return (
    <Section className="history-section">
      <HistoryContainer>
        <Brow>{brow}</Brow>
        <SectionHeading dangerouslySetInnerHTML={{ __html: sanitizedHeading }} />
        <Text as="article" dangerouslySetInnerHTML={{ __html: sanitizedText }} />
        <ButtonLink to={link.url}>{link.text}</ButtonLink>
      </HistoryContainer>
    </Section>
  );
};

