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
        position: relative;
        inline-size: 100%;
        inset: 6vw auto auto 4.53%;
        order: -1;
      }
    }

    a {
      margin-block: ${({ theme }) => theme.getMin(126)} ${({ theme }) => theme.getMin(287)};

      /* stylelint-disable-next-line media-query-no-invalid */
      @media ${queries.s} {
        display: flex;
        width: max-content;
        height: unset;
        margin-inline: auto;
        padding: 1.2em 2em;
        font-size: ${({ theme }) => theme.getClamped(36)};
      }
    }

    /* stylelint-disable-next-line media-query-no-invalid */
    @media ${queries.s} {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6vw;

      h1 {
        font-size: 1.5em;
        text-align: center;

        > p:first-child {
          font-size: ${({ theme }) => theme.getClamped(142)};
        }

        > p:last-child {
          font-size: ${({ theme }) => theme.getClamped(71)};
        }
      }
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

        /* stylelint-disable-next-line media-query-no-invalid */
        @media ${queries.s} {
          display: none;
        }

        &-portrait {
          display: none;

          /* stylelint-disable-next-line media-query-no-invalid */
          @media ${queries.s} {
            display: block;
            order: -1;
            width: 200vw;
            margin-inline-end: -30vw;
            margin-block: -35% -30%;
          }
        }
      };

      /* stylelint-disable-next-line media-query-no-invalid */
      @media ${queries.s} {
        display: flex;
        flex-direction: column;
        align-items: center;

        a {
          display: flex;
          width: max-content;
          height: unset;
          margin-block: 2em 0;
          margin-inline: auto;
          padding: 1.2em 2em;
          font-size: ${({ theme }) => theme.getClamped(36)};
        }
      }
    }

    h2,
    p {
      margin-block: ${({ theme }) => theme.getMin(31)};
      padding-inline-end: 50%;
      white-space: initial;

      > strong {
        display: inline-block;

        /* stylelint-disable-next-line media-query-no-invalid */
        @media ${queries.s} {
          display: inline;
        }
      }
    }

    h2 {
      line-height: 1.2;

      /* stylelint-disable-next-line media-query-no-invalid */
      @media ${queries.s} {
        padding: 0 15% 5%;
        text-align: center;
      }
    }

    p {
      line-height: 1.875;

      /* stylelint-disable-next-line media-query-no-invalid */
      @media ${queries.s} {
        &:last-of-type {
          padding: 0 11%;
          font-size: ${({ theme }) => theme.getClamped(32)};
          line-height: 1.3125;
          text-align: center;
        }

        &:first-child {
          width: 100%;
          padding-inline: 5%;
          font-size: ${({ theme }) => theme.getClamped(76)};

          &::after {
            width: 29.3%;
            height: 5px;
            margin-inline: auto;
          }
        }
      }
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

    &-decoration-portrait {
      display: none;
    }

    /* stylelint-disable-next-line media-query-no-invalid */
    @media ${queries.s} {
      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .history-section-image {
        position: static;
        width: 120vw;
        margin-inline-end: -20vw;
      }

      .history-section-decoration {
        display: none;

        &-portrait {
          display: block;
          width: 150vw;
          margin-block: -35% -40%;
          margin-inline-end: -8vw;
          pointer-events: none;
        }
      }

      h2 {
        margin-block-end: 1em;
        padding-inline: 10%;
        text-align: center;
        white-space: normal;
      }

      .brow {
        width: 100%;
        margin-block-end: 1em;
        padding-inline: 5%;
        font-size: ${({ theme }) => theme.getClamped(76)};
        text-align: center;


        &::after {
          width: 32.45%;
          height: 5px;
          margin-block-start: 0.75em;
          margin-inline: auto;
        }
      }

      a {
        display: flex;
        width: max-content;
        height: unset;
        margin-block-start: 2em;
        margin-inline: auto;
        padding: 1.2em 2em;
        font-size: ${({ theme }) => theme.getClamped(36)};
      }
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

    /* stylelint-disable-next-line media-query-no-invalid */
    @media ${queries.s} {
      > .container {
        .brow {
          margin-block-end: 0.5em;
          padding-inline-end: 12%;
          font-size: ${({ theme }) => theme.getClamped(76)};
          text-align: center;


          &::after {
            width: 32.45%;
            height: 5px;
            margin-block-start: 0.5em;
            margin-inline: auto;
          }
        }

        h2 {
          padding-inline: 5%;
          text-align: center;
        }

        > a {
          display: flex;
          width: max-content;
          height: unset;
          margin-block-start: 2em;
          margin-inline: auto;
          padding: 1.2em 2em;
          font-size: ${({ theme }) => theme.getClamped(36)};
        }
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

    /* stylelint-disable-next-line media-query-no-invalid */
    @media ${queries.s} {
      display: none;
    }
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

    /* stylelint-disable-next-line media-query-no-invalid */
    @media ${queries.s} {
      display: none;
    }

    &-portrait {
      display: none;

      /* stylelint-disable-next-line media-query-no-invalid */
      @media ${queries.s} {
        position: relative;
        inset-inline-start: -12.5vw;
        display: block;
        order: -1;
        width: 125vw;
        margin-block: -20% -30%;
      }
    }
  }

  /* stylelint-disable-next-line media-query-no-invalid */
  @media ${queries.s} {
    flex-direction: column;
    align-items: center;
    width: 100%;

    h2 {
      margin-block: 1em;
      font-size: ${({ theme }) => theme.getClamped(72)};
      text-align: center;
    }

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;

      > p:first-child {
        margin-block-end: 0;
        padding-inline-end: 12%;
        font-size: ${({ theme }) => theme.getClamped(76)};

        &::after {
          width: 55%;
          height: 5px;
          margin-inline: auto 10%;
        }
      }

      > p:last-of-type {
        padding: 0 11%;
        font-size: ${({ theme }) => theme.getClamped(32)};
        line-height: 1.3125;
        text-align: center;
      }
    }

    a {
      display: flex;
      width: max-content;
      height: unset;
      margin-block-start: 2em;
      margin-inline: auto;
      padding: 1.2em 2em;
      font-size: ${({ theme }) => theme.getClamped(36)};
    }
  }
`;
