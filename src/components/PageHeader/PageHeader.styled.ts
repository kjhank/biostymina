import styled from 'styled-components';
import { type BlendWrapperPropsStyled, type BubblePropsStyled } from './PageHeader.types';
// @ts-expect-error import types borked
import productHeaderBg from '@/images/product/headerBg.png';
// @ts-expect-error import types borked
import historyHeaderBg from '@/images/history/headerBg.png';
// @ts-expect-error import types borked
import aloeHeaderBg from '@/images/aloe/headerBg.png';
// @ts-expect-error import types borked
import articlesHeaderBg from '@/images/articles/headerBg.png';
import { queries } from '@/utils';

export const BlendWrapper = styled.div<BlendWrapperPropsStyled>`
  grid-area: blend;
  background-color: ${({ $isWhite }) => $isWhite && '#fff'};;
  mix-blend-mode: ${({ $isWhite }) => $isWhite && 'lighten'};
  isolation: isolate;

  .container {
    background-color: ${({ $isWhite }) => $isWhite && '#fff'};
  }

  .container + .container {
    margin-block-start: ${({ theme }) => theme.getMin(11)};
  }
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: ${({ theme }) => theme.getClamped(60)};
  font-family: ${({ theme }) => theme.fonts.heading};
  text-align: center;
`;

export const Bubble = styled.div<BubblePropsStyled>`
  display: flex;
  align-items: center;
  height: ${({ theme }) => theme.getMin(187)};
  border: 1px solid ${({ theme }) => theme.colors.neutral};
  border-radius: 9999px;
  background-color: ${({ $isBlended, theme }) => ($isBlended ? '#000' : theme.colors.neutral)};

  > h1 {
    display: none;
  }

  &:has(a) {
    justify-content: flex-end;
    padding-inline: ${({ theme }) => theme.getMin(85)};

    > a {
      padding-inline: ${({ theme }) => theme.getMin(57)};
    }
  }

  &:has(h1) {
    justify-content: center;

    a {
      display: none;
    }
  }
`;

export const BubblesWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.getMin(11)};
`;

export const HeaderNode = styled.header`
  display: grid;
  grid-template-areas: 'blend';
  place-content: start stretch;
  background-repeat: no-repeat;

  &.product-header {
    background-image: url(${productHeaderBg});
    background-position: 38vw 57%;
    background-size: 78vw;

    ${BubblesWrapper}.bubbles-wrapper-1 {
      ${Bubble}:first-child {
        width: ${({ theme }) => theme.getMin(415)};
        margin-inline-start: ${({ theme }) => theme.getMax(-275)};
      }
      ${Bubble}:nth-child(2) {
        width: ${({ theme }) => theme.getMin(743.8)};

        > h1 {
          display: block;
        }
      }

      ${Bubble}:nth-child(3) {
        width: ${({ theme }) => theme.getMin(512.02)};

        &.bubble-product-header {
          background-color: transparent;
        }
      }

      ${Bubble}:last-child {
        width: ${({ theme }) => theme.getMin(512)};
        margin-inline-end: ${({ theme }) => theme.getMax(-372)};

        &.bubble-product-header {
          background-color: transparent;
        }
      }
    }

    ${BubblesWrapper}.bubbles-wrapper-2 {
      ${Bubble}:first-child {
        width: ${({ theme }) => theme.getMin(937)};
        margin-inline-start: ${({ theme }) => theme.getMax(-271)};
      }

      ${Bubble}:nth-child(2) {
        width: ${({ theme }) => theme.getMin(512.02)};

        &.bubble-product-header {
          background-color: transparent;
        }
      }

      ${Bubble}:last-child {
        width: ${({ theme }) => theme.getMin(719)};
        margin-inline-end: ${({ theme }) => theme.getMax(-441)};

        &.bubble-product-header {
          background-color: transparent;
        }
      }
    }
  }

  &.aloe-header {
    background-image: url(${aloeHeaderBg});
    background-position-x: ${({ theme }) => theme.getMax(-350)};
    background-position-y: 45%;
    background-size: 77.08%;

    /* // TODO: these sizes */

    ${BubblesWrapper}.bubbles-wrapper-1 {
      ${Bubble}:first-child {
        width: ${({ theme }) => theme.getMin(511.8)};
        margin-inline-start: ${({ theme }) => theme.getMax(-309)};

        &.bubble-aloe-header {
          background-color: transparent;
        }
      }

      ${Bubble}:nth-child(2) {
        width: ${({ theme }) => theme.getMin(511.8)};

        &.bubble-aloe-header {
          background-color: transparent;
        }
      }

      ${Bubble}:nth-child(3) {
        width: ${({ theme }) => theme.getMin(743.8)};

        > h1 {
          display: block;
        }
      }

      ${Bubble}:last-child {
        width: ${({ theme }) => theme.getMin(414.74)};
        margin-inline-end: ${({ theme }) => theme.getMax(-300)};
      }
    }

    ${BubblesWrapper}.bubbles-wrapper-2 {
      ${Bubble}:first-child {
        width: ${({ theme }) => theme.getMin(710.01)};
        margin-inline-start: ${({ theme }) => theme.getMax(-277)};

        &.bubble-aloe-header {
          background-color: transparent;
        }
      }

      ${Bubble}:nth-child(2) {
        width: ${({ theme }) => theme.getMin(511.8)};

        &.bubble-aloe-header {
          background-color: transparent;
        }
      }

      ${Bubble}:last-child {
        width: ${({ theme }) => theme.getMin(936.8)};
        margin-inline-end: ${({ theme }) => theme.getMax(-638.3)};
      }
    }
  }


  &.articles-header {
    background-color: #e8faf2;
    background-image: url(${articlesHeaderBg});
    background-size: 100%;
    background-position-x: ${({ theme }) => theme.getMax(-800.0)};
    background-position-y: 80%;

    ${BubblesWrapper}.bubbles-wrapper-1 {
      ${Bubble}:first-child {
        width: ${({ theme }) => theme.getMin(511.8)};
        margin-inline-start: ${({ theme }) => theme.getMax(-168)};

        &.bubble-articles-header {
          background-color: transparent;
        }
      }

      ${Bubble}:nth-child(2) {
        width: ${({ theme }) => theme.getMin(511.8)};

        &.bubble-articles-header {
          background-color: transparent;
        }
      }

      ${Bubble}:nth-child(3) {
        width: ${({ theme }) => theme.getMin(743.8)};

        > h1 {
          display: block;
        }
      }

      ${Bubble}:last-child {
        width: ${({ theme }) => theme.getMin(414.74)};
        margin-inline-end: ${({ theme }) => theme.getMax(-300.6)};
      }
    }

    ${BubblesWrapper}.bubbles-wrapper-2 {
      ${Bubble}:first-child {
        width: ${({ theme }) => theme.getMin(710.01)};
        margin-inline-start: ${({ theme }) => theme.getMax(-298.5)};

        &.bubble-articles-header {
          background-color: transparent;
        }
      }

      ${Bubble}:nth-child(2) {
        width: ${({ theme }) => theme.getMin(511.8)};

        &.bubble-articles-header {
          background-color: transparent;
        }
      }

      ${Bubble}:last-child {
        width: ${({ theme }) => theme.getMin(936.8)};
        margin-inline-end: ${({ theme }) => theme.getMax(-638.3)};
      }
    }
  }

  &.history-header {
    background-image: url(${historyHeaderBg});
    background-size: 77.08%;
    background-position-x: ${({ theme }) => theme.getMin(810)};
    background-position-y: 35%;

    ${BubblesWrapper}.bubbles-wrapper-1 {
      ${Bubble}:first-child {
        width: ${({ theme }) => theme.getMin(414.74)};
        margin-inline-start: ${({ theme }) => theme.getMax(-273)};
      }
      ${Bubble}:nth-child(2) {
        width: ${({ theme }) => theme.getMin(743.8)};

        > h1 {
          display: block;
        }
      }

      ${Bubble}:nth-child(3) {
        width: ${({ theme }) => theme.getMin(511.8)};

        &.bubble-history-header {
          background-color: transparent;
        }
      }

      ${Bubble}:last-child {
        width: ${({ theme }) => theme.getMin(511.8)};
        margin-inline-end: ${({ theme }) => theme.getMax(-299)};

        &.bubble-history-header {
          background-color: transparent;
        }
      }
    }

    ${BubblesWrapper}.bubbles-wrapper-2 {
      ${Bubble}:first-child {
        width: ${({ theme }) => theme.getMin(936.8)};
        margin-inline-start: ${({ theme }) => theme.getMax(-271)};
      }

      ${Bubble}:nth-child(2) {
        width: ${({ theme }) => theme.getMin(512.02)};

        &.bubble-history-header {
          background-color: transparent;
        }
      }

      ${Bubble}:last-child {
        width: ${({ theme }) => theme.getMin(719)};
        margin-inline-end: ${({ theme }) => theme.getMax(-269)};

        &.bubble-history-header {
          background-color: transparent;
        }
      }
    }
  }

  .portrait {
    display: none;
  }

  /* stylelint-disable-next-line media-query-no-invalid */
  @media ${queries.s} {
    position: relative;
    margin-block-start: 33vw;

    ${Bubble} {
      height: 27.2vw;
    }

    .portrait {
      position: absolute;
      inset: auto 0 100%;
      display: block;

      > ${Bubble} {
        justify-content: space-between;
        width: 112vw;
        margin-inline-start: -20vw;
        padding-inline: 25vw 1em;

        > h1 {
          display: block;
        }

        > a {
          display: flex;
          height: unset;
          padding: 0.6em 1.2em;
          font-size: ${({ theme }) => theme.getClamped(30)};
        }
      }
    }

    ${BubblesWrapper} {
      gap: 3vw;

      ${Bubble} {
        border: none;

        &.bubble-product-header,
        &.bubble-aloe-header,
        &.bubble-history-header,
        &.bubble-articles-header {
          flex-shrink: 0;
          width: 71.72vw !important;
          background-color: transparent;

          > h1,
          > a {
            display: none !important;
          }
        }
      }
    }

    &.product-header {
      background-position-x: initial;
      background-position-y: 40%;
      background-size: 200vw;
    }

    &.aloe-header {
      background-position-x: 65%;
      background-position-y: 55%;
      background-size: 200vw;
    }

    &.history-header {
      background-position-x: 15%;
      background-position-y: 15%;
      background-size: 180vw;
    }

    &.articles-header {
      background-position-x: 80%;
      background-position-y: 75%;
      background-size: 200vw;
    }

    ${BlendWrapper} {
      > .container {
        &:first-child {
          margin-block: 3vw;
        }

        &:first-of-type {
          ${Bubble} {
            width: 71.72vw !important;
            border: none;

            &:nth-child(2) {
              margin-inline-start: 4vw;
            }

            &:first-child,
            &:last-child {
              display: none;
            }
          }
        }

        &:last-of-type {
          ${Bubble} {
            width: 71.72vw !important;
            border: none;

            &:first-child {
              display: none;
            }

            &:nth-child(2) {
              margin-inline-start: -30vw;
            }
          }
        }
      }
    }
  }
`;
