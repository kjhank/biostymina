import { useState } from 'react';
import { type PaginatedArticlesProps } from './ArticlesList.types';
import {
  List, Pagination, PaginationButton, PaginationList,
} from './Articles.styled';
import { Article } from './Article';
import { Arrow } from '@/icons';
import { isBrowser, queries } from '@/utils';

const postsPerPage = (isBrowser && window.matchMedia(queries.s).matches) ? 3 : 9;

export const PaginatedArticles = ({ list }: PaginatedArticlesProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const paginationNumbers = [...Array(Math.ceil(list.length / postsPerPage))]
    .map((_, index) => index + 1);

  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;

  const handlePagination = (number: number) => {
    if (number === currentPage) return;

    setCurrentPage(number);
  };

  return (
    <>
      <List className="articles-list-paginated">
        {list.slice(startIndex, endIndex)
          .map(article => (article?.id
            ? <Article key={article.title.rendered} {...article} />
            : null))}
      </List>
      {list.length > postsPerPage && (
        <Pagination>
          <PaginationButton
            disabled={currentPage === 1}
            onClick={() => { handlePagination(currentPage - 1); }}
          >
            <Arrow />
          </PaginationButton>
          <PaginationList>
            {paginationNumbers.map(number => {
              const shouldRenderAll = paginationNumbers.length < postsPerPage;
              const shouldRenderButton = number <= 2 || number >= paginationNumbers.length - 1;

              if (shouldRenderAll) {
                return (
                  <li key={number}>
                    <PaginationButton
                      $isCurrent={number === currentPage}
                      onClick={() => { handlePagination(number); }}
                    >
                      {number}
                    </PaginationButton>
                  </li>
                );
              }

              return shouldRenderButton
                ? (
                  <li key={number}>
                    <PaginationButton
                      $isCurrent={number === currentPage}
                      onClick={() => { handlePagination(number); }}
                    >
                      {number}
                    </PaginationButton>
                  </li>
                )
                : <li key={number}>●</li>;
            })}
          </PaginationList>
          <PaginationButton
            disabled={currentPage === paginationNumbers.at(-1)}
            onClick={() => { handlePagination(currentPage + 1); }}
          >
            <Arrow />
          </PaginationButton>
        </Pagination>
      )}
    </>
  );
};
