import styled from 'styled-components';
import { Link } from 'gatsby';

export const Wrapper = styled.main``;

export const Text = styled.p`
  font-size: 18px;
`;

export const StyledLink = styled(Link)`
  color: #b00b13;
  text-decoration: underline;
`;

export const Brow = styled.p`
  font-weight: 600;
  font-size: ${({ theme }) => theme.getClamped(42)};
  font-family: ${({ theme }) => theme.fonts.alt};

  &::after {
    content: '';
    display: block;
    width: ${({ theme }) => theme.getMin(110)};
    height: ${({ theme }) => theme.getMin(5)};
    margin-block-start: ${({ theme }) => theme.getMin(21)};
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.brow};
  }
`;

export const SectionHeading = styled.h2`
  font-weight: 500;
  font-size: ${({ theme }) => theme.getClamped(62)};
  font-family: ${({ theme }) => theme.fonts.heading};
`;
