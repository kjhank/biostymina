import { StaticImage } from 'gatsby-plugin-image';
import { type Recommendations as RecommendationsProps } from '@/types';
import { RecommendationsSection } from './Recommendations.styled';
import { ImageList } from '@/components/ImageList/ImageList';
import { Container } from '@/components';
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

        <StaticImage
          alt="opakowanie Biostymina" className="recommendations-package"
          loading="eager" objectFit="contain"
          placeholder="blurred" src="../../../images/product/package.png"
          width={600}
        />
      </div>
    </Container>
  </RecommendationsSection>
);
