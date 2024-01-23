import styled from 'styled-components';

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
    }
  }
`;

export const Text = styled.p`
  width: 38.1%;
  font-weight: 500;
  font-size: ${({ theme }) => theme.getClamped(30)};
  font-family: ${({ theme }) => theme.fonts.heading};
`;
