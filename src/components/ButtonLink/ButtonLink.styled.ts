import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

import { type ButtonStyledProps } from './ButtonLink.types';

export const linkStyles = css<ButtonStyledProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: ${({ $size, theme }) => theme.getMin($size === 'small' ? 48 : 70)};
  outline: 2px solid transparent;
  outline-offset: -2px;
  border-radius: ${({ $size }) => ($size === 'regular' ? '35px' : '24px')};
  background-color: ${({ theme, $variant }) => ($variant === 'dark' ? theme.colors.brand : theme.colors.highlight)};
  color: #fff;
  font-size: ${({ theme }) => theme.getClamped(18)};
  font-family: ${({ theme }) => theme.fonts.heading};
  transition: ${({ theme }) => `background-color ${theme.transitions.fast}, outline-color ${theme.transitions.default}, outline-offset ${theme.transitions.fast}`};
  cursor: pointer;
  padding-inline: ${({ theme }) => theme.getMin(35)};

  > svg {
    fill: currentColor;
  }

  &:hover {
    background-color: ${({ theme, $variant }) => $variant === 'dark' && theme.colors.highlight};
  }

  &:focus {
    outline-color: ${({ theme }) => theme.colors.highlight};
    outline-offset: 2px;
  }

  &:active {
    outline-color: ${({ theme }) => theme.colors.highlight};
    outline-offset: 0;
  }
`;

export const LinkNode = styled(Link) <ButtonStyledProps>`
  ${linkStyles};
`;

export const ButtonNode = styled.button<ButtonStyledProps>`
  ${linkStyles};
`;

export const ExternalLinkNode = styled.a<ButtonStyledProps>`
  ${linkStyles};
`;
