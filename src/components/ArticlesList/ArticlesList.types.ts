import { type ComponentPropsWithoutRef } from 'react';
import {
  type ACFLink, type ArticlesList,
  type Page, type Prettify,
} from '@/types';

export type ArticlesListProps = Prettify<{
  heading: string;
  isPaginated?: boolean;
} & (
    {
      brow?: string;
      headingAsBrow?: never;
    } | {
      brow?: never;
      headingAsBrow: boolean;
    }
  ) & ArticlesList>

export type ArticlesProps = {
  isPaginated: boolean;
  list: Array<Page>;
  more: ACFLink;
};

export type ArticleProps = Page;

export type PaginatedArticlesProps = {
  list: Array<Page>;
}

export type PaginationButtonPropsStyled = ComponentPropsWithoutRef<'button'> & {
  $isCurrent?: boolean;
}
