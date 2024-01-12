/* eslint-disable @typescript-eslint/strict-boolean-expressions */

import { Container } from '../Container/Container';
import { Brow, SectionHeading } from '../styled';
import { Articles } from './Articles';
import { type ArticlesListProps } from './ArticlesList.types';

export const ArticlesList = ({
  articles, brow, heading, more,
}: ArticlesListProps) => (
  <Container>
    {brow && <Brow>{brow}</Brow>}
    <SectionHeading>{heading}</SectionHeading>
    <Articles articles={articles} more={more} />
  </Container>
);
