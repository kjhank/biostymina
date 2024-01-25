import { ArticlesList, Container } from '@/components';
import { ArticlesSection } from './Articles.styled';
import { type ArticlesProps } from './Articles.types';

export const Articles = (props: ArticlesProps) => (
  <ArticlesSection>
    <Container>
      <ArticlesList
        headingAsBrow isPaginated
        {...props}
      />
    </Container>
  </ArticlesSection>
);
