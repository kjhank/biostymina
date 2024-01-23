import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

import { type ButtonStyledProps } from './ButtonLink.types';

export const linkStyles = css<ButtonStyledProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: ${({ $size }) => ($size === 'small' ? '48px' : '70px')};
  padding-inline: ${({ theme }) => theme.getMin(35)};
  border-radius: ${({ $size }) => ($size === 'regular' ? '35px' : '24px')};
  background-color: ${({ theme, $variant }) => ($variant === 'dark' ? theme.colors.brand : theme.colors.highlight)};
  color: #fff;
  font-family: ${({ theme }) => theme.fonts.heading};
  transition: ${({ theme }) => `background-color ${theme.transitions.fast}`};
  cursor: pointer;

  > svg {
    fill: currentColor;
  }

  &:hover {
    background-color: ${({ theme, $variant }) => $variant === 'dark' && theme.colors.highlight};
  }
`;

export const LinkNode = styled(Link)<ButtonStyledProps>`
  ${linkStyles};
`;

export const ButtonNode = styled.button<ButtonStyledProps>`
  ${linkStyles};
`;

export const ExternalLinkNode = styled.a<ButtonStyledProps>`
  ${linkStyles};
`;
