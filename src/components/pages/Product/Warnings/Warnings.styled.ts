import styled from 'styled-components';
import { type BubblePropsStyled } from './Warnings.types';
import bang from '@/images/product/bang.png';
import { queries } from '@/utils';

export const Bubble = styled.div<BubblePropsStyled>`
  border-radius: 9999px;
  padding-block: ${({ theme }) => theme.getMin(77)};
  padding-inline: ${({ theme }) => `${theme.getMin(150)} ${theme.getMin(135)}`};
  background-color: ${({ theme, $isGray }) => ($isGray ? theme.colors.neutral : theme.colors.brand)};

  &:has(ul) {
    position: relative;
    margin-inline-start: ${({ theme }) => theme.getMin(46)};

    &::before {
      content: '';
      position: absolute;
      inset: 50% calc(100% - ${({ theme }) => theme.getMin(70)}) auto auto;
      height: 75.41%;
      aspect-ratio: 1;
      border-radius: inherit;
      backdrop-filter: blur(35px);
      background-color: rgb(255 255 255 / 30%);
      background-image: url(${bang});
      background-position: center;
      background-size: 80%;
      background-repeat: no-repeat;
      translate: 0 -50%;
    }
  }

  &:first-child {
    width: ${({ theme }) => theme.getMin(937)};
    margin-inline-start: ${({ theme }) => theme.getMax(-600)};
  }

  &:last-child {
    width: ${({ theme }) => theme.getMin(937)};
    margin-inline-end: ${({ theme }) => theme.getMax(-600)};
  }
`;

export const List = styled.ul`
  color: #fff;
  font-weight: 600;
  font-size: ${({ theme }) => theme.getClamped(27)};
  font-family: ${({ theme }) => theme.fonts.heading};
  line-height: 1.19;

  > li {
    list-style-position: inside;

    &::marker {
      content: '• ';
    }
  }
`;

export const WarningSection = styled.section`
  background-color: #fff;

  > .container {
    display: flex;
    gap: ${({ theme }) => theme.getMin(11)};
  }

  /* stylelint-disable-next-line media-query-no-invalid */
  @media ${queries.s} {
    margin-block: 8em 2em;

    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: ${({ theme }) => theme.getClamped(30)};
    }

    ${Bubble} {
      &:has(ul) {
        width: 100%;
        margin-inline: auto;
        padding-block: 4em 2em;
        padding-inline: 5%;

        &::before {
          inset: 0 auto auto 50%;
          translate: -50% -60%;
        }
      }

      &:not(:has(ul)) {
        display: none;
      }

    }
  }
`;
