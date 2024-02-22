import styled from 'styled-components';
import { queries } from '@/utils';

export const RecommendationsSection = styled.section`
  h2 {
    font-family: ${({ theme }) => theme.fonts.heading};
  }

  > .container {
    display: flex;
    flex-direction: column;
    align-items: center;

    > div:has(.image-list) {
      display: flex;
      gap: ${({ theme }) => theme.getMin(21)};
      align-items: flex-start;
      width: 100%;
      margin-block-start: ${({ theme }) => theme.getMin(69)};

      .recommendations-package {
        position: relative;
        inset-block-start: ${({ theme }) => theme.getMax(-20)};
        width: 30.3%;
      }
    }
  }

  .image-list {
    flex-grow: 0;
    flex-shrink: 0;
    width: 59.15%;
  }

  /* stylelint-disable-next-line media-query-no-invalid */
  @media ${queries.s} {
    h2 {
      margin-block-end: 0.5em;
      padding-inline: 10%;
      font-size: ${({ theme }) => theme.getClamped(76)};
      text-align: center;

      &::after {
        width: 32.45%;
        height: 5px;
        margin-block-start: 0.5em;
        margin-inline: auto;
      }
    }

    .container {
      > div:has(.image-list) {
        flex-direction: column-reverse;
        align-items: center;

        .recommendations-package {
          width: 60%;
        }
      }
    }

    .image-list {
      width: 100%;
    }
  }
`;
