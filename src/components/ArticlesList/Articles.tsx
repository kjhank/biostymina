import { Arrow } from '@/icons';
import {
  Item, Link, List, Timestamp, Title,
} from './Articles.styled';
import { type ArticlesProps } from './ArticlesList.types';
import { ButtonLink } from '../ButtonLink/ButtonLink';

export const Articles = ({
  articles, more,
}: ArticlesProps) => (
  <>
    <List>
      {articles.map(article => (
        <Item key={article.title}>
          <Title>{article.title}</Title>
          <Timestamp>{article.timestamp}</Timestamp>
          <Link to={article.url} variant="bright"><Arrow /></Link>
        </Item>
      ))}
    </List>
    <ButtonLink to={more.url}>{more.text}</ButtonLink>
  </>
);
