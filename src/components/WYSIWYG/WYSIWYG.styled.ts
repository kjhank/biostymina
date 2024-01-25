import styled from 'styled-components';

export const Wrapper = styled.article`
  font-size: ${({ theme }) => theme.getClamped(22)};
  font-family: ${({ theme }) => theme.fonts.text};
  line-height: 1.5;

  b, strong {
    font-weight: 700;
  }

  em, i {
    font-style: italic;
  }

  p + p {
    margin-block-start: 1em;
  }

  > p:first-child {
    a {
      color: ${({ theme }) => theme.colors.highlight};
      font-weight: 700;
      text-decoration: underline;

      &:hover {
        text-decoration-color: ${({ theme }) => theme.colors.brand};
      }
    }
  }

  h3 {
    margin-block: 2em;
    font-weight: 700;
    font-size: ${({ theme }) => theme.getClamped(30)};
    line-height: 1.53;
  }
`;
