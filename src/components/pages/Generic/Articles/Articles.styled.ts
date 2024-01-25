import styled from 'styled-components';

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

    > ul + a {
      margin: ${({ theme }) => theme.getMin(66)} auto 0;
    }
  }
`;
