import sanitize from 'sanitize-html';
import { type Dose as DoseProps } from '@/types';
import {
  Heading, Item, ItemInner, Text,
} from './Dosage.styled';
import { WPImage } from '@/components/WPImage/WPImage';

export const SingleDose = ({
 heading, image, text,
}: DoseProps) => {
  const sanitizedText = sanitize(text, { allowedTags: ['strong'] });

  return (
    <Item>
      <ItemInner>
        <Heading>{heading}</Heading>
        <Text dangerouslySetInnerHTML={{ __html: sanitizedText }} />
      </ItemInner>
      <WPImage
        alt="ampułka z cieczą" className="dosage-ampoule"
        imageData={{ url: image }}
      />
    </Item>
  );
};
