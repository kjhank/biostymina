/* eslint-disable @typescript-eslint/no-unsafe-argument */

import { ArticlesList, Container } from '@/components';
import { Brow } from '@/components/styled';
import { type ArticlesSection as ArticlesProps } from '@/types/content/home.types';
import { Section } from '../styled';

export const Articles = ({
  list: articles, brow, heading, more,
}: ArticlesProps) => (
  <Section className="articles-section">
    <Container>
      <Brow>{brow}</Brow>
      <ArticlesList
        heading={heading} list={articles}
        more={more}
      />
    </Container>
  </Section>
);

