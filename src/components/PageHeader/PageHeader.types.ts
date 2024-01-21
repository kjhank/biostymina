import { type ComponentPropsWithoutRef } from 'react';
import { type PageHeader } from '@/types';

export type BlendWrapperPropsStyled = {
  $isWhite?: boolean;
};

export type BubblePropsStyled = {
  $isBlended?: boolean;
  $isBlank?: boolean;
};

export type PageHeaderProps = PageHeader & ComponentPropsWithoutRef<'header'>
