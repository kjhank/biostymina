import { Brow, SectionHeading } from '../styled';
import { Articles } from './Articles';
import { type ArticlesListProps } from './ArticlesList.types';

export const ArticlesList = ({
  articles, brow, heading, headingAsBrow = false, more,
}: ArticlesListProps) => (
  <>
    {brow && <Brow>{brow}</Brow>}
    {headingAsBrow && <Brow $isLighter as="h2">{heading}</Brow>}
    {!headingAsBrow && <SectionHeading>{heading}</SectionHeading>}
    <Articles articles={articles} more={more} />
  </>
);
