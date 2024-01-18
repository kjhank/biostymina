import sanitize from 'sanitize-html';
import { type Dose as DoseProps } from '@/types';
import {
  Heading, Item, Text,
} from './Dosage.styled';

export const SingleDose = ({ heading, text }: DoseProps) => {
  const sanitizedText = sanitize(text, { allowedTags: ['strong'] });

  return (
    <Item>
      <Heading>{heading}</Heading>
      <Text dangerouslySetInnerHTML={{ __html: sanitizedText }} />
    </Item>
  );
};
