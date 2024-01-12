import styled, { css } from 'styled-components';
import { type HomeSectionStyledProps } from './Home.types';
import { Container } from '../Container/Container';

export const Section = styled.section<HomeSectionStyledProps>`
  h2 {
    text-align: ${({ $hasCenteredHeading }) => ($hasCenteredHeading ? 'center' : 'start')};
  }

  &.hero-section {
    margin-block-end: ${({ theme }) => theme.getMin(289)};

    a {
      margin-block-start: ${({ theme }) => theme.getMin(126)};
    }
  }

  &.product-section {
    margin-block-end: ${({ theme }) => theme.getMin(131)};
  }

  &.aloe-section {
    h2,
    p {
      margin-block: ${({ theme }) => theme.getMin(31)};
      padding-inline-end: 50%;
    }

    h2 {
      line-height: 1.2;
    }

    p {
      line-height: 1.875;
    }

    a {
      margin-block-end: ${({ theme }) => theme.getMin(21)};
    }
  }

  &.history-section {
    margin-block: ${({ theme }) => `${theme.getMin(198.5)} ${theme.getMin(128)}`};

    h2 {
      white-space: nowrap;
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

const tightContainerStyle = css`
  padding-inline: 32% 28%;

  p {
    line-height: 1.875;
  }

  a {
    margin-block-start: ${({ theme }) => theme.getMin(30)};
  }
`;

export const ProductContainer = styled(Container)`
  ${tightContainerStyle};

  p {
    padding-inline-end: 25.2%;
  }
`;

export const HistoryContainer = styled(Container)`
  ${tightContainerStyle};

  article {
    margin-block: ${({ theme }) => `${theme.getMin(83.5)} ${theme.getMin(17.5)}`};
    padding-inline-end: 25.2%;
  }
`;
