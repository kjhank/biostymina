import { StaticImage } from 'gatsby-plugin-image';
import sanitize from 'sanitize-html';
import { type Ingredients as IngredientsProps } from '@/types';
import {
  Amount,
  Heading, IngredientsContainer, IngredientsInner, IngredientsWrapper, LargeText, List,
} from './Ingredients.styled';

export const Ingredients = ({
  amount, descriptionList, decoration, heading, image, largeText, list,
}: IngredientsProps) => {
  const sanitizedAmount = sanitize(amount, { allowedTags: ['em'] });

  return (
    <IngredientsWrapper>
      <IngredientsContainer>
        <StaticImage
          alt="" className="ingredients-decoration"
          placeholder="blurred" src="../../../images/product/ingredients-decoration.png"
          width={535}
        />
        <IngredientsInner>
          <div>
            <Heading>{heading}</Heading>
            <Amount dangerouslySetInnerHTML={{ __html: sanitizedAmount }} />
            <List>
              {descriptionList.map(item => <li key={item}>{item}</li>)}
            </List>
            <LargeText>{largeText}</LargeText>
            <List>
              {list.map(item => <li key={item}>{item}</li>)}
            </List>
          </div>
          <StaticImage
            alt="ampułki z cieczką" className="ingredients-image"
            placeholder="blurred" src="../../../images/product/ingredients-image.png"
            width={319}
          />
        </IngredientsInner>
      </IngredientsContainer>
    </IngredientsWrapper>
  );
};
