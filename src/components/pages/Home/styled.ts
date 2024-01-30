import styled from 'styled-components';
import { type HomeSectionStyledProps } from './Home.types';
import { Container } from '../../Container/Container';
import { queries } from '@/utils';

export const Section = styled.section<HomeSectionStyledProps>`
  h2 {
    text-align: ${({ $hasCenteredHeading }) => ($hasCenteredHeading ? 'center' : 'start')};
  }

  &.hero-section {
    .hero-section-decoration {
      position: absolute;
      inset: ${({ theme }) => `${theme.getMax(-222)} auto auto ${theme.getMin(475.9)}`};
      z-index: -1;
      inline-size: ${({ theme }) => theme.getMin(1509)};

      /* stylelint-disable-next-line media-query-no-invalid */
      @media ${queries.m} {
        inset: ${({ theme }) => `${theme.getMax(-180)} auto auto ${theme.getMin(800)}`};
        inline-size: ${({ theme }) => theme.getMin(1200)};
      }

      /* stylelint-disable-next-line media-query-no-invalid */
      @media ${queries.s} {
        position: static;
        inline-size: 100%;
      }
    }

    a {
      margin-block: ${({ theme }) => theme.getMin(126)} ${({ theme }) => theme.getMin(287)};
    }
  }

  &.product-section {
    margin-block-start: ${({ theme }) => theme.getMax(-230.0)};
  }

  &.aloe-section {
    isolation: isolate;

    .container {
      padding-block: ${({ theme }) => theme.getMin(123)} 0;

      > .aloe-section-decoration {
        position: absolute;
        inset: 0 ${({ theme }) => theme.getMax(-180)} 0 ${({ theme }) => theme.getMin(135)};
        z-index: -1;
      };
    }

    h2,
    p {
      margin-block: ${({ theme }) => theme.getMin(31)};
      padding-inline-end: 50%;
      white-space: initial;

      > strong {
        display: inline-block;
      }
    }

    h2 {
      line-height: 1.2;
    }

    p {
      line-height: 1.875;
    }

    a {
      margin-block-end: ${({ theme }) => theme.getMin(219)};
    }
  }

  &.history-section {
    isolation: isolate;
    margin-block: ${({ theme }) => `${theme.getMin(98.5)} ${theme.getMin(128)}`};

    h2 {
      white-space: nowrap;
    }
  }

  &.articles-section {
    > .container {
      display: flex;
      flex-direction: column;
      padding-inline: 6%;

      > p, h2 {
        padding-inline-start: 1.85%;
      }

      h2 {
        margin-block: ${({ theme }) => `${theme.getMin(38)} ${theme.getMin(50)}`};
      }

      > ul + a {
        margin: ${({ theme }) => theme.getMin(66)} auto 0;
      }
    }
  }

  &.video-section {
    margin-block:${({ theme }) => `${theme.getMin(95)} ${theme.getMin(135)}`};

    /* stylelint-disable-next-line no-descending-specificity */
    h2 {
      margin-block-end: ${({ theme }) => theme.getMin(42)};
    }

    video {
      width: 86.6%;
      margin-inline: auto;
    }
  }
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.getClamped(16)};
  font-family: ${({ theme }) => theme.fonts.text};
  white-space: pre-line;

  b,
  strong {
    font-weight: 700;
  }

  em,
  i {
    font-style: italic;
  }
`;

export const ProductContainer = styled(Container)`
  display: flex;
  align-items: flex-end;

  .product-section-decoration {
    position: relative;
    inset-block-start: ${({ theme }) => theme.getMin(135)};
    width: ${({ theme }) => theme.getMin(716)};
    margin-inline: ${({ theme }) => theme.getMax(-140)} ${({ theme }) => theme.getMin(46)};
  }
`;

export const ProductInner = styled.div`
  display: flex;
  align-items: flex-end;
  width: ${({ theme }) => theme.getMin(888)};

  h2 {
    margin-block: ${({ theme }) => `${theme.getMin(31)} ${theme.getMin(71.5)}`};
    white-space: nowrap;
  }

  p {
    margin-block-end: ${({ theme }) => theme.getMin(31)};
    padding-inline-end: 26%;
    line-height: 1.875;
  }

  .product-section-package {
    position: relative;
    inset: ${({ theme }) => theme.getMin(40)} auto auto ${({ theme }) => theme.getMax(-60)};
    flex-shrink: 0;
    width: ${({ theme }) => theme.getMin(394)};
  }
`;
