import sanitize from 'sanitize-html';
import { StaticImage } from 'gatsby-plugin-image';
import { type Dose as DoseProps } from '@/types';
import {
  Heading, Item, ItemInner, Text,
} from './Dosage.styled';

export const SingleDose = ({ heading, text }: DoseProps) => {
  const sanitizedText = sanitize(text, { allowedTags: ['strong'] });

  return (
    <Item>
      <ItemInner>
        <Heading>{heading}</Heading>
        <Text dangerouslySetInnerHTML={{ __html: sanitizedText }} />
      </ItemInner>
      <StaticImage
        alt="ampułka z cieczą" className="dosage-ampoule"
        placeholder="blurred"
        src="../../../images/product/ampoule-1-hq.png" width={239}
      />
    </Item>
  );
};
