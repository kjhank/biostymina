// import { type ReactNode } from 'react';
import {
 type ArticlesList, type ArticleThumb, type NavLink,
} from '@/types';

export type ArticlesListProps = {
  heading: string;
} & (
  {
    brow?: string;
    headingAsBrow?: never;
  } | {
    brow?: never;
    headingAsBrow: boolean;
  }
) & ArticlesList

export type ArticlesProps = {
  articles: Array<ArticleThumb>;
  more: NavLink;
};
