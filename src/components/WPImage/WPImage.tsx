import { Picture } from './WPImage.styled';
import { type WPImageProps } from './WPImage.types';

export const WPImage = ({
  alt = '', loading = 'lazy', imageData, ...props
}: WPImageProps) => {
  const { url: legacySrc } = imageData;
  // const fileSrc = `${legacySrc.replace('wp-content', 'wp-content/uploads-webpc/')}.webp`;

  return (
    <Picture {...props}>
      {/* <source src={fileSrc} type="image/webp" /> */}
      <source src={legacySrc} type={imageData.subtype} />
      <img alt={alt} src={legacySrc} />
    </Picture>
  );
};
