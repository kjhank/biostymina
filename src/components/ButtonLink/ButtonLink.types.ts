import { type ReactNode } from 'react';

export type Size = 'small' | 'regular';
export type Variant = 'dark' | 'bright';

export type ButtonLinkProps = {
  children: ReactNode;
  size?: Size;
  variant?: Variant;
} & (
  {
    onClick?: never;
    to: string;
  } | {
    onClick: () => void;
    to?: never;
  }
);

export type ButtonStyledProps = {
  $size: Size;
  $variant: Variant;
}
