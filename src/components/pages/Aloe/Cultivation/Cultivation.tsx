import sanitize from 'sanitize-html';
import { Brow } from '@/components/styled';
import {
  CultivationSection, Description, Map, Wrapper,
} from './Cultivation.styled';
import { type CultivationProps } from './Cultivation.types';
import { Container } from '@/components/Container/Container';
import { CultivationList } from './CultivationList';
import { WPImage } from '@/components/WPImage/WPImage';

export const Cultivation = ({
  decoration, description, heading, items, map,
}: CultivationProps) => {
  const sanitizedDescription = sanitize(description, { allowedTags: ['p'] });

  return (
    <CultivationSection>
      <Container>
        <WPImage
          alt="" className="cultivation-decoration"
          imageData={decoration}
        />
        <Wrapper>
          <Brow $isLighter as="h2">{heading}</Brow>
          <Description dangerouslySetInnerHTML={{ __html: sanitizedDescription }} />
          <Map />
        </Wrapper>
      </Container>
      <CultivationList items={items} />
    </CultivationSection>
  );
};
