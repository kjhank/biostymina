import sanitize from 'sanitize-html';
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
    </Item>
  );
};
