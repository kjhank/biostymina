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
`;

export const NavLink = styled(Link)<NavLinkStyledProps>`
  position: relative;

  &::before {
    content: '';
  }
`;
