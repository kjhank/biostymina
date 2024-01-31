import sanitize from 'sanitize-html';
import { type Ingredients as IngredientsProps } from '@/types';
import {
  Amount,
  Heading, IngredientsContainer, IngredientsInner, IngredientsWrapper, LargeText, List,
} from './Ingredients.styled';
import { WPImage } from '@/components/WPImage/WPImage';

export const Ingredients = ({
  amount, descriptionList, decoration, heading, image, largeText, list,
}: IngredientsProps) => {
  const sanitizedAmount = sanitize(amount, { allowedTags: ['em'] });

  return (
    <IngredientsWrapper>
      <IngredientsContainer>
        <WPImage
          alt="" className="ingredients-decoration"
          imageData={decoration}
        />
        <IngredientsInner>
          <div>
            <Heading>{heading}</Heading>
            <Amount dangerouslySetInnerHTML={{ __html: sanitizedAmount }} />
            <List>
              {descriptionList.map(({ item }) => <li key={item}>{item}</li>)}
            </List>
            <WPImage
              alt="ampułki z cieczką" className="ingredients-image-portrait"
              imageData={image}
            />
            <LargeText>{largeText}</LargeText>
            <List>
              {list.map(({ item }) => <li key={item}>{item}</li>)}
            </List>
          </div>
          <WPImage
            alt="ampułki z cieczką" className="ingredients-image"
            imageData={image}
          />
        </IngredientsInner>
      </IngredientsContainer>
    </IngredientsWrapper>
  );
};
