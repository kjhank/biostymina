import styled from 'styled-components';
import { queries } from '@/utils';

export const ArticlesSection = styled.section`
  margin-block-end: ${({ theme }) => theme.getMin(54)};

  > .container {
    display: flex;
    flex-direction: column;
    padding-inline: 6%;

    > p, h2 {
      padding-inline-start: 1.85%;
    }

    h2 {
      margin-block: ${({ theme }) => `${theme.getMin(38)} ${theme.getMin(50)}`};
      font-size: ${({ theme }) => theme.getClamped(62)};
      font-family: ${({ theme }) => theme.fonts.heading};
    }

    > ul + div + a {
      margin: ${({ theme }) => theme.getMin(66)} auto 0;
    }
  }

  /* stylelint-disable-next-line media-query-no-invalid */
  @media ${queries.s} {
    margin-block-start: 3em;

    > .container {
      padding-inline: 2%;

      h2 {
        font-size: ${({ theme }) => theme.getClamped(76)};
        text-align: center;

        &::after {
          display: none;
        }
      }

      > ul + div + a {
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
`;
