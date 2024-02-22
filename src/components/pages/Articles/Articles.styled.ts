import styled from 'styled-components';
import { queries } from '@/utils';

export const ArticlesSection = styled.section`
  margin-block: ${({ theme }) => theme.getMin(37)} ${({ theme }) => theme.getMin(99)};

  > .container {
    padding-inline: 6.6%;

    > h2 {
      font-size: ${({ theme }) => theme.getClamped(62)};
      font-family: ${({ theme }) => theme.fonts.heading};
    }
  }

  /* stylelint-disable-next-line media-query-no-invalid */
  @media ${queries.s} {
    > .container {
      padding: 4%;

      h2 {
        font-size: ${({ theme }) => theme.getClamped(76)};
        text-align: center;

        &::after {
          width: 55%;
          height: 5px;
          margin-block: 0.5em 1em;
          margin-inline: auto;
        }
      }
    }
  }
`;
