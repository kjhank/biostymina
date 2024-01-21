import styled from 'styled-components';

export const AboutSection = styled.section`
  padding-block: ${({ theme }) => theme.getMin(115)};

  > .container {
    padding-inline: 8%;

    > h2 {
      margin-inline-start: ${({ theme }) => theme.getMin(30)};
      margin-block-end: ${({ theme }) => theme.getMin(86)};
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
`;
