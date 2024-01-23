import {
  Item, ItemHeading, List, Text,
} from './Instructions.styled';
import { type InstructionsListProps } from './Instructions.types';
import { WPImage } from '@/components/WPImage/WPImage';

export const InstructionsList = ({ list }: InstructionsListProps) => (
  <List>
    {list.map((item, index) => (
      <Item key={item.text}>
        <WPImage
          alt="dłoń trzymająca ampułkę" className={`instructions-step-${index + 1}`}
          imageData={item.image}
        />
        {item.heading && <ItemHeading>{item.heading}</ItemHeading>}
        {item.hasSeparator && <hr />}
        <Text>{item.text}</Text>
      </Item>
    ))}
  </List>
);
