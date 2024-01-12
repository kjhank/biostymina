import sanitize from 'sanitize-html';
import { Brow, SectionHeading } from '@/components/styled';
import { type Product as ProductProps } from '@/mocks/static.types';
import {
  ProductContainer, Section, Text,
} from '../styled';
import { ButtonLink } from '@/components';

export const Product = ({
  brow, heading, link, text,
}: ProductProps) => {
  const sanitizedText = sanitize(text, { allowedTags: ['sup'] });

  return (
    <Section className="product-section">
      <ProductContainer>
        <Brow>{brow}</Brow>
        <SectionHeading>{heading}</SectionHeading>
        <Text dangerouslySetInnerHTML={{ __html: sanitizedText }} />
        <ButtonLink to={link.url}>{link.text}</ButtonLink>
      </ProductContainer>
    </Section>
  );
};

