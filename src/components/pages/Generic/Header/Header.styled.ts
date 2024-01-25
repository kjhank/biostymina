import styled from 'styled-components';

export const HeaderNode = styled.header`
  margin-block: ${({ theme }) => `${theme.getMin(104)} ${theme.getMin(58)}`};

  > .container {
    padding-inline: 6.6%;
  }

  .article-header-image {
    overflow: hidden;
    aspect-ratio: 3.36;
    border-radius: 30px;

    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const Timestamp = styled.time`
  display: block;
  margin-block: ${({ theme }) => theme.getMin(28)};
  color: ${({ theme }) => theme.colors.highlight};
  font-weight: 500;
  font-size: ${({ theme }) => theme.getClamped(30)};
  font-family: 'DM Sans', sans-serif;
`;

export const Heading = styled.h1`
  font-weight: 500;
  font-size: ${({ theme }) => theme.getClamped(62)};
  font-family: ${({ theme }) => theme.fonts.heading};
  text-wrap: balance;
  line-height: 1.19;
`;
