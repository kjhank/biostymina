import styled from 'styled-components';
import { type BlendWrapperPropsStyled, type BubblePropsStyled } from './PageHeader.types';
import productBubble1 from '@/images/product/bubble-1.png';

export const Bubble = styled.div<BubblePropsStyled>`
  display: flex;
  align-items: center;
  height: ${({ theme }) => theme.getMin(187)};
  border: 1px solid ${({ theme }) => theme.colors.neutral};
  border-radius: 9999px;
  background-color: ${({ $isBlended, theme }) => ($isBlended ? '#000' : theme.colors.neutral)};

  &:has(a) {
    justify-content: flex-end;
    padding-inline: ${({ theme }) => theme.getMin(85)};

    > a {
      padding-inline: ${({ theme }) => theme.getMin(57)};
    }
  }

  &:has(h1) {
    justify-content: center;
  }
`;

export const BubblesWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.getMin(11)};
`;

export const HeaderNode = styled.header`
  display: grid;
  grid-template-areas: 'blend';
  place-content: end stretch;
  background-image: url(${productBubble1});
  background-position: 38vw 57%;
  background-size: 78vw;
  background-repeat: no-repeat;

  &.product-header {
    ${BubblesWrapper}.bubbles-wrapper-1 {
      ${Bubble}:first-child {
        width: ${({ theme }) => theme.getMin(415)};
        margin-inline-start: ${({ theme }) => theme.getMax(-275)};
      }
      ${Bubble}:nth-child(2) {
        width: ${({ theme }) => theme.getMin(743.8)};
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
`;

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
