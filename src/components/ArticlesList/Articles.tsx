import { useRef } from 'react';
import {
  ButtonsWrapper, List, ScrollButton,
} from './Articles.styled';
import { type ArticlesProps, type ScrollDirection } from './ArticlesList.types';
import { ButtonLink } from '../ButtonLink/ButtonLink';
import { Article } from './Article';
import { PaginatedArticles } from './PaginatedArticles';
import { LongArrow } from '@/icons';

export const Articles = ({
  list, isPaginated, more,
}: ArticlesProps) => {
  const listRef = useRef<HTMLUListElement>(null);

  if (isPaginated) {
    return <PaginatedArticles list={list} />;
  }

  const linkPath = new URL(more.url).pathname;

  const handleClick = (direction: ScrollDirection) => {
    const { current: listNode } = listRef;

    if (listNode) {
      const elementsCount = Array.from(listNode?.children ?? []).length;

      const listScroll = listNode.scrollWidth;
      const scrollAmount = (direction === 'toStart' ? -listScroll : listScroll) / elementsCount;

      const scrollOptions: ScrollToOptions = {
        behavior: 'smooth',
        left: Math.round(scrollAmount),
      };

      listNode.scrollBy(scrollOptions);
    }
  };

  return (
    <>
      <List $shouldScrollOnPortrait ref={listRef}>
        {list.map(article => <Article key={article.title.rendered} {...article} />)}
      </List>
      <ButtonsWrapper>
        <ScrollButton onClick={() => { handleClick('toStart'); }}>
          <LongArrow />
        </ScrollButton>
        <ScrollButton
          $isFlipped
          onClick={() => { handleClick('toEnd'); }}
        >
          <LongArrow />
        </ScrollButton>
      </ButtonsWrapper>
      <ButtonLink to={linkPath}>{more.title}</ButtonLink>
    </>
  );
};
