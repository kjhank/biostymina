import { ArticlesSection } from './Articles.styled';
import { ArticlesList, Container } from '@/components';
import { type ArticlesProps } from './Articles.types';

export const Articles = ({
  heading, articles, more,
}: ArticlesProps) => (
  <ArticlesSection>
    <Container>
      <ArticlesList
        articles={articles} heading={heading}
        headingAsBrow more={more}
      />
    </Container>
  </ArticlesSection>
);
