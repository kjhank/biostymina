import { Arrow } from '@/icons';
import { type ArticleThumb } from '@/types';
import {
 Item, Link, Timestamp, Title,
} from './Articles.styled';
import { WPImage } from '../WPImage/WPImage';

export const Article = ({
  title, timestamp, thumbnail, url,
}: ArticleThumb) => {
  const formattedTimestamp = new Intl.DateTimeFormat('pl-PL', { dateStyle: 'long' }).format(new Date(timestamp));

  return (
    <Item key={title}>
      <WPImage
        alt="" className="article-thumbnail"
        imageData={{ url: thumbnail }}
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
