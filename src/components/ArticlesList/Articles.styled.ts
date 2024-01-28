import styled from 'styled-components';
import { type PaginationButtonPropsStyled } from './ArticlesList.types';
import { ButtonLink } from '../ButtonLink/ButtonLink';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.getMin(66)};

  &.articles-list-paginated {
    margin-block-start: ${({ theme }) => theme.getMin(42)};
  }
`;

export const Item = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.getMin(20)};
  box-shadow: rgb(0 0 0 / 6%) 0 15px 35px;
  border-radius: ${({ theme }) => theme.getMin(30)};;
  padding: 5.4%;
  transition: ${({ theme }) => `box-shadow ${theme.transitions.fast}`};

  &:hover {
    box-shadow: rgb(0 0 0 / 6%) 0 30px 35px;

    a:has(svg) {
      width: ${({ theme }) => theme.getMin(130)};
      background-color: ${({ theme }) => theme.colors.highlight};
      color: #fff;

      > svg {
        translate: 150% 0;
      }
    }
  }

  .article-thumbnail {
    overflow: hidden;
    border-radius: ${({ theme }) => theme.getMin(30)};;
    aspect-ratio: 1.64;

    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const Title = styled.h3`
  margin-block: ${({ theme }) => theme.getMin(5)} ${({ theme }) => theme.getMin(20)};
  padding-inline: 4% 20%;
  font-weight: 600;
  font-size: ${({ theme }) => theme.getClamped(24)};
  font-family: ${({ theme }) => theme.fonts.heading};
  line-height: 1.21;
`;

export const Timestamp = styled.time`
  margin-block-start: auto;
  padding-inline-start: 4%;
  color: ${({ theme }) => theme.colors.highlight};
  font-weight: 500;
  font-family: 'DM Sans', sans-serif;
`;

export const Link = styled(ButtonLink)`
  position: absolute;
  width: ${({ theme }) => theme.getMin(66)};
  height: ${({ theme }) => theme.getMin(66)};
  outline: 1px solid #DCDCE3;
  outline-offset: initial;
  padding: unset;
  background-color: #fff;
  color: ${({ theme }) => theme.colors.brand};
  transition: ${({ theme }) => `width ${theme.transitions.default}, background-color ${theme.transitions.default}, color ${theme.transitions.default}`};
  isolation: isolate;
  inset: auto auto 6.8% 77.23%;

  > svg {
    stroke: currentColor;
    transition: ${({ theme }) => `stroke ${theme.transitions.default}, translate ${theme.transitions.default}`};
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.getMin(22)};
  margin-block-start: ${({ theme }) => theme.getMin(70)};
`;

export const PaginationButton = styled(ButtonLink) <PaginationButtonPropsStyled>`
  height: ${({ theme }) => theme.getMin(50)};
  aspect-ratio: 1;
  outline-color: ${({ theme }) => theme.colors.brand};
  padding: 0;
  background-color: ${({ theme, $isCurrent }) => ($isCurrent ? theme.colors.brand : '#fff')};
  color: ${({ theme, $isCurrent }) => ($isCurrent ? '#fff' : theme.colors.brand)};
  font-weight: 500;
  font-size: ${({ theme }) => theme.getClamped(18)};
  font-family: 'DM Sans', sans-serif;

  &:first-child {
    > svg {
      rotate: 180deg;
    }
  }

  &:disabled {
    cursor: not-allowed;

    &:hover {
      background-color: #fff;
    }
  }
`;

export const PaginationList = styled.ol`
  display: flex;
  gap: ${({ theme }) => theme.getMin(3)};
`;
