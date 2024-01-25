import { type PageProps } from 'gatsby';
import { type ComponentPropsWithRef, type ReactNode } from 'react';
import {
  type LayoutNav, type PageContext, type WhereToBuyModal,
} from '@/types/pages.types';

export type LayoutProps = {
  children: ReactNode;
  location?: PageProps['location'];
  pageContext: PageContext;
};

export type NavLinkStyledProps = {
  $hasHighlight: boolean;
};

export type LayoutContextProps = {
  isModalOpen?: boolean;
  location?: PageProps['location'];
  toggleModal: () => void;
};

export type LayoutContextProviderProps = {
  children: ReactNode;
  value: LayoutContextProps;
}

export type HeaderProps = LayoutNav

export type HeaderPropsStyled = {
  $isFilled: boolean;
};

export type ModalProps = ComponentPropsWithRef<'dialog'> & WhereToBuyModal;

export type BlendWrapperStyledProps = {
  $isWhite?: boolean;
};
