import sanitize from 'sanitize-html';
import { Brow, SectionHeading } from '@/components/styled';
import { type Product as ProductProps } from '@/types/content/home.types';
import {
  ProductContainer, ProductInner, Section, Text,
} from '../styled';
import { ButtonLink, WPImage } from '@/components';

export const Product = ({
  brow, decoration, heading, image, link, text,
}: ProductProps) => {
  const sanitizedText = sanitize(text, { allowedTags: ['sup'] });
  const sanitizedHeading = sanitize(heading, { allowedTags: ['br'] });

  return (
    <Section className="product-section">
      <ProductContainer>
        <WPImage
          alt="aloes i ampułki z płynem" className="product-section-decoration"
          imageData={{ url: decoration }}
          loading="eager"
        />
        <ProductInner>
          <div>
            <Brow>{brow}</Brow>
            <SectionHeading dangerouslySetInnerHTML={{ __html: sanitizedHeading }} />
            <Text dangerouslySetInnerHTML={{ __html: sanitizedText }} />
            <ButtonLink to={link.url}>{link.text}</ButtonLink>
          </div>
          <WPImage
            alt="opakowanie Biostymina" className="product-section-package"
            imageData={{ url: image }} loading="eager"
          />
        </ProductInner>
      </ProductContainer>
    </Section>
  );
};

