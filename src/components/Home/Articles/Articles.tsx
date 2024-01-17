/* eslint-disable @typescript-eslint/no-unsafe-argument */

import { Container } from '@/components/Container/Container';
import { Brow } from '@/components/styled';
import { ArticlesList } from '@/components';
import { type Articles as ArticlesProps } from '@/mocks/static.types';
import { Section } from '../styled';

export const Articles = ({
  articles, brow, heading, more,
}: ArticlesProps) => (
  <Section className="articles-section">
    <Container>
      <Brow>{brow}</Brow>
      <ArticlesList
        articles={articles} heading={heading}
        more={more}
      />
    </Container>
  </Section>
);

