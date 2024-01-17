/* eslint-disable @typescript-eslint/no-unsafe-argument */

import sanitize from 'sanitize-html';
import { StaticImage } from 'gatsby-plugin-image';
import { SectionHeading } from '@/components/styled';
import { type History as HistoryProps } from '@/mocks/static.types';
import { Section, Text } from '../styled';
import { ButtonLink } from '@/components';
import { sanitizeConfig } from '@/utils';
import {
 Brow, HistoryContainer, HistoryInner,
} from './History.styled';

export const History = ({
  brow, heading, link, text,
}: HistoryProps) => {
  const sanitizedText = sanitize(text, sanitizeConfig);
  const sanitizedHeading = sanitize(heading, { allowedTags: ['sup'] });

  return (
    <Section className="history-section">
      <HistoryContainer>
        <StaticImage
          alt="probówka" className="history-section-image"
          objectFit="contain" placeholder="blurred"
          src="../../../images/home/history-testTube.png"
          width={860}
        />
        <HistoryInner>
          <div>
            <Brow>{brow}</Brow>
            <SectionHeading dangerouslySetInnerHTML={{ __html: sanitizedHeading }} />
            <Text as="article" dangerouslySetInnerHTML={{ __html: sanitizedText }} />
            <ButtonLink to={link.url}>{link.text}</ButtonLink>
          </div>
          <StaticImage
            alt="" className="history-section-decoration"
            objectFit="contain"
            placeholder="blurred" src="../../../images/home/history-decoration.png"
            width={807}
          />
        </HistoryInner>
      </HistoryContainer>
    </Section>
  );
};

