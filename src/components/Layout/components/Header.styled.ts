import styled from 'styled-components';
import { Link } from 'gatsby';
import { Container as GenericContainer } from '@/components';
import {
  type DrawerStyledProps, type HeaderPropsStyled, type NavLinkStyledProps,
} from '../Layout.types';
import { queries } from '@/utils';

export const Container = styled(GenericContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.getMin(65)};

  /* stylelint-disable-next-line media-query-no-invalid */
  @media ${queries.s} {
    /* width: 100%; */
    margin: 0;
    padding: 0 8.26%;
    gap: 11.8%;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;

  /* stylelint-disable-next-line media-query-no-invalid */
  @media ${queries.s} {
    flex-grow: 0;
    align-items: flex-start;
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.getMin(65)};

  /* stylelint-disable-next-line media-query-no-invalid */
  @media ${queries.s} {
    flex-direction: column;
  }
`;

export const HeaderNode = styled.header<HeaderPropsStyled>`
  position: sticky;
  z-index: 10;
  background-color: ${({ $isFilled }) => ($isFilled ? 'rgb(255 255 255 / 75%)' : 'transparent')};
  font-weight: 600;
  font-size: ${({ theme }) => theme.getClamped(20)};
  font-family: ${({ theme }) => theme.fonts.heading};
  text-transform: uppercase;
  transition: ${({ theme }) => `background-color ${theme.transitions.fast}, backdrop-filter ${theme.transitions.fast}`};
  isolation: isolate;
  inset: 0 0 auto;
  padding-block: ${({ theme }) => theme.getMin(42)};
  backdrop-filter: ${({ $isFilled }) => ($isFilled ? 'blur(25px)' : 'none')};


  /* stylelint-disable-next-line media-query-no-invalid */
  @media ${queries.s} {
    overflow-x: clip;
    background-color: transparent;
    font-size: 32px;
    text-align: center;
    backdrop-filter: none;

    &::after {
      content: '';
      position: absolute;
      z-index: -2;
      inset: auto 0 0;
      height: calc(100vh);
      background-color: rgb(255 255 255 / 75%);
      backdrop-filter: blur(25px);
      translate: ${({ $isDrawerOpen }) => ($isDrawerOpen ? '0 calc(100vh - 10%)' : '')};
      transition: translate ${({ theme }) => theme.transitions.fast};
    }
  }
`;

export const HomeLink = styled(Link)`
  width: ${({ theme }) => theme.getMin(228)};

  > svg {
    display: block;
    width: 100%;
    height: auto;
  }

  /* stylelint-disable-next-line media-query-no-invalid */
  @media ${queries.s} {
    flex: 1;
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

  /* stylelint-disable-next-line media-query-no-invalid */
  @media ${queries.s} {
    &::before {
      inset-block-end: -0.25em;
      inset-inline-start: 25%;
      width: 50%;
      height: 5px;
    }
  }
`;

export const Drawer = styled.div<DrawerStyledProps>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.getMin(65)};

  /* stylelint-disable-next-line media-query-no-invalid */
  @media ${queries.s} {
    position: absolute;
    z-index: -1;
    flex-direction: column;

    /* width: 100%; */
    height: 100vh;

    /* background-color: rgb(255 255 255); */
    transition: ${({ theme }) => `translate ${theme.transitions.fast}`};
    padding-block: 1em;
    inset: 100% 0 auto;
    translate: ${({ $isOpen }) => ($isOpen ? 'none' : '0 -100vh')};

    button {
      height: auto;
      padding: 0.25em 0.5em;
      font-size: inherit;
    }
  }
`;

export const Trigger = styled.button.attrs({ type: 'button' })`
  display: none;
  color: ${({ theme }) => theme.colors.brand};

  /* stylelint-disable-next-line media-query-no-invalid */
  @media ${queries.s} {
    display: block;
    border: none;
    padding: 0;
    background-color: transparent;
  }
`;
