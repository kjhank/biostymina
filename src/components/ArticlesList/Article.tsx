import { Arrow } from '@/icons';
import {
  Item, Link, Timestamp, Title,
} from './Articles.styled';
import { type ArticleProps } from './ArticlesList.types';
import { WPImage } from '../WPImage/WPImage';
import { formatDate } from '@/utils';

export const Article = ({
  acf, title, date, slug,
}: ArticleProps) => {
  const formattedTimestamp = formatDate(date);

  return (
    <Item>
      {acf.articledata?.headerImage && (
      <WPImage
        alt="" className="article-thumbnail"
        imageData={acf.articledata?.headerImage}
      />
)}
      <Title>{title.rendered}</Title>
      <Timestamp dateTime={date}>{formattedTimestamp}</Timestamp>
      <Link
        aria-label={`otwórz artykuł "${title.rendered}"`} to={`/odpornosc/${slug}`}
        variant="bright"
      >
        <Arrow />
      </Link>
    </Item>
  );
};
