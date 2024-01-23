import sanitize from 'sanitize-html';
import { Item, Text } from './Intro.styled';
import { type IntroItemProps } from './Intro.types';
import { WPImage } from '@/components/WPImage/WPImage';

export const IntroItem = ({ image, text }: IntroItemProps) => {
  const sanitizedText = sanitize(text, {
    allowedAttributes: { span: ['class'] },
    allowedTags: ['span'],
  });

  return (
    <Item>
      <WPImage
        alt="" className="intro-image"
        imageData={{ url: image }}
      />
      <Text dangerouslySetInnerHTML={{ __html: sanitizedText }} />
    </Item>
  );
};
