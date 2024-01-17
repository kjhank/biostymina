import { StaticImage } from 'gatsby-plugin-image';
import { Arrow } from '@/icons';
import { type ArticleThumb } from '@/types';
import {
 Item, Link, Timestamp, Title,
} from './Articles.styled';

export const Article = ({
  title, timestamp, thumbnail, url,
}: ArticleThumb) => {
  const formattedTimestamp = new Intl.DateTimeFormat('pl-PL', { dateStyle: 'long' }).format(new Date(timestamp));

  return (
    <Item key={title}>
      <StaticImage
        alt="" className="article-thumbnail"
        src="../../images/articles/article-1-thumb.png" width={380}
      />
      <Title>{title}</Title>
      <Timestamp>{formattedTimestamp}</Timestamp>
      <Link
        aria-label={`otwórz artykuł "${title}"`} to={url}
        variant="bright"
      >
        <Arrow />
      </Link>
    </Item>
  );
};
