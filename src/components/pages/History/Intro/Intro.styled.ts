import styled from 'styled-components';
import { queries } from '@/utils';

export const Text = styled.p`
  width: 38.1%;
  font-weight: 500;
  font-size: ${({ theme }) => theme.getClamped(30)};
  font-family: ${({ theme }) => theme.fonts.heading};
`;

export const IntroSection = styled.section`
  position: relative;
  z-index: 2;

  > .container {
    display: flex;
    align-items: center;

    .history-intro-decoration {
      width: 39.36%;
      margin-inline: -5%;
    }

    .history-intro-image {
      align-self: flex-end;
      width: 34.18%;
      margin-block: 8% -8%;

      &-portrait {
        display: none;
      }
    }
  }

  /* stylelint-disable-next-line media-query-no-invalid */
  @media ${queries.s} {
    > .container {
      flex-direction: column;

      ${Text} {
        width: 100%;
        padding-inline: 8%;
        font-size: ${({ theme }) => theme.getClamped(32)};
        text-align: center;
      }

      .history-intro-decoration {
        display: none;
      }

      .history-intro-image {
        display: none;

        &-portrait {
          display: block;
          width: 125vw;
          margin-block: -30% -20%;
          margin-inline-start: -20vw;
        }
      }
    }
  }
`;
