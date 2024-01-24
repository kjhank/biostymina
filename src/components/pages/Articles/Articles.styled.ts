import styled from 'styled-components';

export const ArticlesSection = styled.section`
  margin-block: ${({ theme }) => theme.getMin(37)} ${({ theme }) => theme.getMin(99)};

  > .container {
    padding-inline: 6.6%;

    > h2 {
      font-size: ${({ theme }) => theme.getClamped(62)};
      font-family: ${({ theme }) => theme.fonts.heading};
    }
  }
`;
