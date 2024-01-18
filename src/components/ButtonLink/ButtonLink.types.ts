import { type ReactNode } from 'react';

export type Size = 'small' | 'regular';
export type Variant = 'dark' | 'bright';

export type ButtonStyledProps = {
  $size: Size;
  $variant: Variant;
};

export type ButtonLinkProps = {
  children: ReactNode;
  size?: Size;
  variant?: Variant;
} & (
    {
      href?: never;
      onClick?: never;
      to: string;
    } | {
      href: string;
      onClick?: never;
      to?: never;
    } | {
      href?: never;
      onClick: () => void;
      to?: never;
    }
  );
