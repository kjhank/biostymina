import { Link as GatsbyLink } from 'gatsby';
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
  const linkPath = `/odpornosc/${slug}`;

  return (
    <Item>
      {acf.articledata?.headerImage && (
        <GatsbyLink to={linkPath}>
          <WPImage
            alt="" className="article-thumbnail"
            imageData={acf.articledata?.headerImage}
          />
        </GatsbyLink>
      )}
      <Title>
        <GatsbyLink to={linkPath}>{title.rendered}</GatsbyLink>
      </Title>
      <Timestamp dateTime={date}>{formattedTimestamp}</Timestamp>
      <Link
        aria-label={`otwórz artykuł "${title.rendered}"`} to={linkPath}
        variant="bright"
      >
        <Arrow />
      </Link>
    </Item>
  );
};
