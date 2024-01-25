import styled from 'styled-components';
import { Link } from 'gatsby';
import { Container as GenericContainer } from '@/components';
import { type HeaderPropsStyled, type NavLinkStyledProps } from '../Layout.types';

export const Container = styled(GenericContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.getMin(65)};
`;

export const Navigation = styled.nav`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.getMin(65)};
`;

export const HeaderNode = styled.header<HeaderPropsStyled>`
  position: sticky;
  inset: 0 0 auto;
  z-index: 10;
  padding-block: ${({ theme }) => theme.getMin(42)};
  background-color: ${({ $isFilled }) => ($isFilled ? '#fff' : 'transparent')};
  font-weight: 600;
  font-size: ${({ theme }) => theme.getClamped(20)};
  font-family: ${({ theme }) => theme.fonts.heading};
  text-transform: uppercase;
  transition: ${({ theme }) => `background-color ${theme.transitions.fast}`};
`;

export const HomeLink = styled(Link)`
  width: ${({ theme }) => theme.getMin(228)};

  > svg {
    display: block;
    width: 100%;
    height: auto;
  }
`;

export const NavLink = styled(Link) <NavLinkStyledProps>`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset-block-end: -0.5em;
    inset-inline-start: 0;
    display: block;
    width: ${({ theme }) => theme.getMin(67)};
    height: ${({ theme }) => theme.getMin(5)};
    margin-block-start: ${({ theme }) => theme.getMin(21)};
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.brow};
    scale: ${({ $hasHighlight }) => ($hasHighlight ? '1 1' : '0 1')};
    transition: ${({ theme }) => `scale ${theme.transitions.default}`};
    transform-origin: left;
  }

  &:hover::before {
    scale: 1 1;
  }
`;
