import { type PageProps } from 'gatsby';
import { type ReactNode } from 'react';

export type LayoutProps = {
  children: ReactNode;
  location?: PageProps['location'];
}

export type NavLinkStyledProps = {
  $hasHighlight: boolean;
};

export type LayoutContextProps = {
  location?: PageProps['location'];
};

export type LayoutContextProviderProps = {
  children: ReactNode;
  value: LayoutContextProps;
}

export type HeaderPropsStyled = {
  $isFilled: boolean;
};
