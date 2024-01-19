import { StaticImage } from 'gatsby-plugin-image';
import {
  Item, ItemHeading, List, Text,
} from './Instructions.styled';
import { type InstructionsListProps } from './Instructions.types';

export const InstructionsList = ({ list }: InstructionsListProps) => (
  <List>
    {list.map(item => (
      <Item key={item.text}>
        <StaticImage
          alt="dłoń trzymająca ampułkę" className="instructions-step-2"
          placeholder="blurred" src="../../../images/product/instructions-2.png"
          width={694}
        />
        {item.heading && <ItemHeading>{item.heading}</ItemHeading>}
        {item.hasSeparator && <hr />}
        <Text>{item.text}</Text>
      </Item>
    ))}
  </List>
);
