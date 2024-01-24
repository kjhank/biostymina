import { ArticlesSection } from './Articles.styled';
import { ArticlesList, Container } from '@/components';
import { type ArticlesProps } from './Articles.types';

export const Articles = ({
  heading, list, more,
}: ArticlesProps) => (
  <ArticlesSection>
    <Container>
      <ArticlesList
        heading={heading} headingAsBrow
        list={list} more={more}
      />
    </Container>
  </ArticlesSection>
);
