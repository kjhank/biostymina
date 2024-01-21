import { type ComponentProps } from 'react';

export type BrowProps = ComponentProps<'p'> & {
  $isLighter?: boolean;
};
