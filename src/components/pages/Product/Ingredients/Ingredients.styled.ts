import styled from 'styled-components';
import { Container } from '@/components';
import { Brow, SectionHeading } from '@/components/styled';
import { queries } from '@/utils';

export const IngredientsWrapper = styled.section`
  padding-block-end: ${({ theme }) => theme.getMin(69)};
`;

export const IngredientsInner = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  width: ${({ theme }) => theme.getMin(888)};

  .ingredients-image {
    position: absolute;
    inset: auto -6% -9% auto;
    width: 35.9%;

    &-portrait {
      display: none;
    }
  }
`;

export const IngredientsContainer = styled(Container)`
  display: flex;
  gap: ${({ theme }) => theme.getMin(120)};
  align-items: flex-start;

  .ingredients-decoration {
    width: 32.62%;
  }

  /* stylelint-disable-next-line media-query-no-invalid */
  @media ${queries.s} {
    flex-direction: column;
    align-items: center;
    text-align: center;

    h2 {
      margin-block-end: 0.5em;
      font-size: ${({ theme }) => theme.getClamped(76)};
      text-align: center;

      &::after {
        width: 32.45%;
        height: 5px;
        margin-block-start: 0.5em;
        margin-inline: auto;
      }
    }

    .ingredients-decoration,
    > div {
      width: 80%;
    }

    > div > div {
      > p:first-of-type {
        white-space: normal;
      }

      > p:last-of-type {
        font-size: ${({ theme }) => theme.getClamped(76)};
      }
    }

    ul {
      margin-block-start: 1em;
      font-size: ${({ theme }) => theme.getClamped(32)};
      text-align: start;
    }

    .ingredients-image {
      display: none;

      &-portrait {
        display: block;
        width: 80%;
        margin-block: 2em -1em;
        margin-inline: auto;
      }
    }
  }
`;

export const Heading = styled(Brow).attrs({ as: 'h2' })`
  margin-block-end: ${({ theme }) => theme.getMin(31)};
  font-weight: 500;
  font-family: ${({ theme }) => theme.fonts.heading};
`;

export const Amount = styled(SectionHeading).attrs({ as: 'p' })`
  margin-block-end: ${({ theme }) => theme.getMin(60)};
  font-weight: 600;
  font-size: ${({ theme }) => theme.getClamped(30)};
  font-family: ${({ theme }) => theme.fonts.alt};
  line-height: 1.2;
  white-space: pre-line;

  > em {
    font-style: italic;
    font-weight: 400;
    font-family: ${({ theme }) => theme.fonts.heading};
  }
`;

export const List = styled.ul`
  font-size: ${({ theme }) => theme.getClamped(16)};
  font-family: ${({ theme }) => theme.fonts.text};
  line-height: 1.5625;

  > li {
    list-style-position: inside;

    &::marker {
      content: '• ';
    }
  }
`;

export const LargeText = styled.p`
  margin-block: ${({ theme }) => theme.getMin(31)};
  font-weight: 500;
  font-size: ${({ theme }) => theme.getClamped(42)};
  font-family: ${({ theme }) => theme.fonts.heading};
  white-space: pre-line;
`;
