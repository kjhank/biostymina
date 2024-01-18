import { type Articles as ArticlesProps } from '@/types';
import { ArticlesSection } from './Articles.styled';
import { ArticlesList, Container } from '@/components';

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
