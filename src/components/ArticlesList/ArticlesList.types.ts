import { type ReactNode } from 'react';
import {
 type ArticlesList, type ArticleThumb, type NavLink,
} from '@/types';

export type ArticlesListProps = {
  brow?: string;
  heading: ReactNode;
} & ArticlesList

export type ArticlesProps = {
  articles: Array<ArticleThumb>;
  more: NavLink;
};
