import { type PageHeader } from '@/types';

type GridLayout = 'start' | 'end';

export type BlendWrapperPropsStyled = {
  $isWhite?: boolean;
};

export type BubblePropsStyled = {
  $isBlended?: boolean;
  $isBlank?: boolean;
};

export type PageHeaderProps = PageHeader & {
  className?: string;
  gridLayout: GridLayout;
}
