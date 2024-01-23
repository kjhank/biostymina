import { type Recommendations as RecommendationsProps } from '@/types';
import { RecommendationsSection } from './Recommendations.styled';
import { ImageList } from '@/components/ImageList/ImageList';
import { Container, WPImage } from '@/components';
import { Brow } from '@/components/styled';

export const Recommendations = ({
  heading, image, list,
}: RecommendationsProps) => (
  <RecommendationsSection>
    <Container>
      <Brow $isLighter as="h2">
        {heading}
      </Brow>
      <div>
        <ImageList items={list} />

        <WPImage
          alt="opakowanie Biostymina" className="recommendations-package"
          imageData={image}
        />
      </div>
    </Container>
  </RecommendationsSection>
);
