import styled from 'styled-components';
import { queries } from '@/utils';

export const AboutSection = styled.section`
  padding-block: ${({ theme }) => theme.getMin(115)};

  > .container {
    padding-inline: 8%;

    > h2 {
      margin-inline-start: ${({ theme }) => theme.getMin(30)};
      margin-block-end: ${({ theme }) => theme.getMin(86)};
      font-weight: 500;
      font-size: ${({ theme }) => theme.getClamped(62)};
      font-family: ${({ theme }) => theme.fonts.heading};
    }

    .image-list {
      background-position: 120% 95%;
      background-size: 95vw;
      background-repeat: no-repeat;
      font-weight: 500;
      font-size: ${({ theme }) => theme.getClamped(42)};

      li {
        padding-inline-start: 21%;

        > p {
          gap: ${({ theme }) => theme.getMin(20)};
        }
      }

      em.emphasis {
        color: ${({ theme }) => theme.colors.emphasis};
      }
    }
  }

  /* stylelint-disable-next-line media-query-no-invalid */
  @media ${queries.s} {
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

    .container {
      padding-inline: 0;

      .image-list {
        background-size: 450vw;
        background-position-x: 55%;
        background-position-y: 80%;
        font-weight: 700;
        font-size: ${({ theme }) => theme.getClamped(40)};

        li {
          padding: 5%;

          > p {
            height: 100%;
            padding: 7%;
            white-space: normal;

            &::before {
              width: 4em;
              height: 4em;
            }
          }
        }
      }
    }
  }
`;
