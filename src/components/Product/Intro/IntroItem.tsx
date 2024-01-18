import { StaticImage } from 'gatsby-plugin-image';
import sanitize from 'sanitize-html';
import { Item, Text } from './Intro.styled';
import { type IntroItemProps } from './Intro.types';

export const IntroItem = ({ image, text }: IntroItemProps) => {
  const sanitizedText = sanitize(text, {
    allowedAttributes: { span: ['class'] },
    allowedTags: ['span'],
  });

  return (
    <Item>
      <StaticImage
        alt="" className="intro-image"
        placeholder="blurred"
        src="../../../images/product/intro-1.png" width={650}
      />
      <Text dangerouslySetInnerHTML={{ __html: sanitizedText }} />
    </Item>
  );
};
