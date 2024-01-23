import { ArticlesSection } from './Articles.styled';
import { ArticlesList, Container } from '@/components';
import { type ArticlesProps } from './Articles.types';

export const Articles = ({
  count = 3, hasPagination = false, heading, list: articles, more,
}: ArticlesProps) => (
  <ArticlesSection>
    <Container>
      <ArticlesList
        heading={heading} headingAsBrow
        list={articles} more={more}
      />
    </Container>
  </ArticlesSection>
);
