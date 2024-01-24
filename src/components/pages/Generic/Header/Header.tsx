import { Container } from '@/components/Container/Container';
import {
  HeaderNode, Heading, Timestamp,
} from './Header.styled';
import { formatDate } from '@/utils';
import { type HeaderProps } from './Header.types';
import { WPImage } from '@/components/WPImage/WPImage';

export const Header = ({
  heading, date, image,
}: HeaderProps) => {
  const formattedDate = formatDate(date);

  return (
    <HeaderNode>
      <Container>
        <Heading>{heading}</Heading>
        <Timestamp dateTime={date}>{formattedDate}</Timestamp>
        {image && (
        <WPImage
          alt="" className="article-header-image"
          imageData={image}
        />
)}
      </Container>
    </HeaderNode>
  );
};
