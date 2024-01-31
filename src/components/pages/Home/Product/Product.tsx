import sanitize from 'sanitize-html';
import { Brow, SectionHeading } from '@/components/styled';
import { type Product as ProductProps } from '@/types/content/home.types';
import {
  ProductContainer, ProductInner, Section, Text,
} from '../styled';
import { ButtonLink, WPImage } from '@/components';

export const Product = ({
  brow, decoration, heading, image, imagePortrait, link, text,
}: ProductProps) => {
  const sanitizedText = sanitize(text, { allowedTags: ['sup'] });
  const sanitizedHeading = sanitize(heading, { allowedTags: ['br'] });
  const linkPath = new URL(link.url).pathname;

  return (
    <Section className="product-section">
      <ProductContainer>
        <WPImage
          alt="aloes i ampułki z płynem" className="product-section-decoration"
          imageData={decoration}
          loading="eager"
        />
        <ProductInner>
          <div>
            <Brow>{brow}</Brow>
            <SectionHeading dangerouslySetInnerHTML={{ __html: sanitizedHeading }} />
            <Text dangerouslySetInnerHTML={{ __html: sanitizedText }} />
            <ButtonLink to={linkPath}>{link.title}</ButtonLink>
          </div>
          <WPImage
            alt="opakowanie Biostymina" className="product-section-package"
            imageData={image} loading="eager"
          />
          <WPImage
            alt="opakowanie Biostymina" className="product-section-package-portrait"
            imageData={imagePortrait} loading="eager"
          />
        </ProductInner>
      </ProductContainer>
    </Section>
  );
};

