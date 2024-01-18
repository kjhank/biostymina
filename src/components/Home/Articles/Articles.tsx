/* eslint-disable @typescript-eslint/no-unsafe-argument */

import { ArticlesList, Container } from '@/components';
import { Brow } from '@/components/styled';
import { type ArticlesSection as ArticlesProps } from '@/types/content/home.types';
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

