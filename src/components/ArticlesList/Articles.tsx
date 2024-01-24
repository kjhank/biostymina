import { List } from './Articles.styled';
import { type ArticlesProps } from './ArticlesList.types';
import { ButtonLink } from '../ButtonLink/ButtonLink';
import { Article } from './Article';
import { PaginatedArticles } from './PaginatedArticles';

export const Articles = ({
  list, isPaginated, more,
}: ArticlesProps) => {
  if (isPaginated) {
    return <PaginatedArticles list={list} />;
  }

  const linkPath = new URL(more.url).pathname;

  return (
    <>
      <List>
        {list.map(article => <Article key={article.title.rendered} {...article} />)}
      </List>
      <ButtonLink to={linkPath}>{more.title}</ButtonLink>
    </>
  );
};
