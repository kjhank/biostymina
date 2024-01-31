/* eslint-disable @typescript-eslint/no-unsafe-argument */

import sanitize from 'sanitize-html';
import { SectionHeading } from '@/components/styled';
import { type History as HistoryProps } from '@/types/content/home.types';
import { Section, Text } from '../styled';
import { ButtonLink, WPImage } from '@/components';
import { sanitizeConfig } from '@/utils';
import {
  Brow, HistoryContainer, HistoryInner,
} from './History.styled';

export const History = ({
  brow, decoration, decorationPortrait, heading, image, link, text,
}: HistoryProps) => {
  const sanitizedText = sanitize(text, sanitizeConfig);
  const sanitizedHeading = sanitize(heading, { allowedTags: ['sup'] });
  const linkPath = new URL(link.url).pathname;

  return (
    <Section className="history-section">
      <HistoryContainer>
        <WPImage
          alt="" className="history-section-decoration-portrait"
          imageData={decorationPortrait}
        />
        <WPImage
          alt="probówka" className="history-section-image"
          imageData={image}
        />
        <HistoryInner>
          <div>
            <Brow>{brow}</Brow>
            <SectionHeading dangerouslySetInnerHTML={{ __html: sanitizedHeading }} />
            <Text as="article" dangerouslySetInnerHTML={{ __html: sanitizedText }} />
            <ButtonLink to={linkPath}>{link.title}</ButtonLink>
          </div>
          <WPImage
            alt="" className="history-section-decoration"
            imageData={decoration}
          />
        </HistoryInner>
      </HistoryContainer>
    </Section>
  );
};

