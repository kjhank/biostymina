import { StaticImage } from 'gatsby-plugin-image';
import sanitize from 'sanitize-html';
import { Brow, SectionHeading } from '@/components/styled';
import { type Product as ProductProps } from '@/types/content/home.types';
import {
  ProductContainer, ProductInner, Section, Text,
} from '../styled';
import { ButtonLink } from '@/components';

export const Product = ({
  brow, heading, link, text,
}: ProductProps) => {
  const sanitizedText = sanitize(text, { allowedTags: ['sup'] });
  const sanitizedHeading = sanitize(heading, { allowedTags: ['br'] });

  return (
    <Section className="product-section">
      <ProductContainer>
        <StaticImage
          alt="aloes i ampułki z płynem" className="product-section-decoration"
          loading="eager" placeholder="blurred"
          src="../../../images/home/product-decoration.png" width={706}
        />
        <ProductInner>
          <div>
            <Brow>{brow}</Brow>
            <SectionHeading dangerouslySetInnerHTML={{ __html: sanitizedHeading }} />
            <Text dangerouslySetInnerHTML={{ __html: sanitizedText }} />
            <ButtonLink to={link.url}>{link.text}</ButtonLink>
          </div>
          <StaticImage
            alt="opakowanie Biostymina" className="product-section-package"
            loading="eager" objectFit="contain"
            placeholder="blurred" src="../../../images/home/product-package.png"
            width={394}
          />
        </ProductInner>
      </ProductContainer>
    </Section>
  );
};

