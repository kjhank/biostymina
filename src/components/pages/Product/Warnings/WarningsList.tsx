import { List } from './Warnings.styled';
import { type WarningsListProps } from './Warnings.types';

export const WarningsList = ({ list }: WarningsListProps) => (
  <List>
    {list.map(item => <li key={item}>{item}</li>)}
  </List>
);
