import { type ArticlesList } from '@/types';

export type ArticlesProps = ArticlesList & {
  count?: number;
  hasPagination?: boolean;
};
