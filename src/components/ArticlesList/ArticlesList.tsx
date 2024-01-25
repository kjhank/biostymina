import { Brow, SectionHeading } from '../styled';
import { Articles } from './Articles';
import { type ArticlesListProps } from './ArticlesList.types';

export const ArticlesList = ({
  list, brow, heading, headingAsBrow = false, more, isPaginated = false,
}: ArticlesListProps) => (
  <>
    {brow && <Brow>{brow}</Brow>}
    {headingAsBrow && <Brow $isLighter as="h2">{heading}</Brow>}
    {!headingAsBrow && <SectionHeading>{heading}</SectionHeading>}
    <Articles
      isPaginated={isPaginated} list={list}
      more={more}
    />
  </>
);
