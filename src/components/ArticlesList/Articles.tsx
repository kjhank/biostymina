import { List } from './Articles.styled';
import { type ArticlesProps } from './ArticlesList.types';
import { ButtonLink } from '../ButtonLink/ButtonLink';
import { Article } from './Article';

export const Articles = ({
  articles, more,
}: ArticlesProps) => (
  <>
    <List>
      {articles.map(article => <Article key={article.title} {...article} />)}
    </List>
    <ButtonLink to={more.url}>{more.text}</ButtonLink>
  </>
);
