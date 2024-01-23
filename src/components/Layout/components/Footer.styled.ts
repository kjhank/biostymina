import styled, { css } from 'styled-components';
import { Container as GenericContainer } from '@/components';
import leftBg from '@/images/layout/footer-left.png';
import rightBg from '@/images/layout/footer-right.png';

export const Container = styled(GenericContainer)`
  b, strong {
    font-weight: bold;
  }

  em, i {
    font-style: italic;
  }
`;

export const FooterNode = styled.footer`
  overflow-x: hidden;
  margin-block-end: ${({ theme }) => theme.getMin(52)};
  white-space: pre-line;

  a {
    color: ${({ theme }) => theme.colors.highlight};
  }
`;

export const FootnotesPart = styled.section`
  display: flex;
  flex-wrap: wrap;
  column-gap: ${({ theme }) => theme.getMin(55)};
  padding-inline: 3.5%;

  > svg {
    width: ${({ theme }) => theme.getMin(125)};
  }
`;

export const BottomWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;

  /* padding-inline: 4.8%; */
  color: #fff;
  font-size: ${({ theme }) => theme.getClamped(13)};
  isolation: isolate;
  gap: ${({ theme }) => theme.getMin(13)};
`;

const commonStyle = css`
  position: relative;
  font-family: ${({ theme }) => theme.fonts.alt};
  isolation: isolate;
  padding-block-start: ${({ theme }) => theme.getMin(44)};
`;

export const LeftPart = styled.section`
  ${commonStyle};
  width: 35.4%;
  padding-inline: 4.85% ${({ theme }) => theme.getMin(156)};

  &::after {
    content: '';
    position: absolute;
    inset: 0 0 0 ${({ theme }) => theme.getMax(-693)};
    z-index: -1;
    opacity: 0.8;
    border-radius: 0 1000px 1000px 0;
    background-image: url(${leftBg}), linear-gradient(${({ theme }) => `${theme.colors.brand}, ${theme.colors.brand}`});
    background-blend-mode: multiply;
    pointer-events: none;
  }
`;

export const Address = styled.address`
  width: 99%;
  border-block-end: 1px solid #fff;
  padding-block-end: ${({ theme }) => theme.getMin(47.3)};

  a[href^="tel"] {
    color: #fff;
  }
`;

export const RightPart = styled.section`
  ${commonStyle};
  flex: 2;
  padding-inline-start: ${({ theme }) => theme.getMin(176.2)};

  &::after {
    content: '';
    position: absolute;
    inset: 0 ${({ theme }) => theme.getMax(-216)} 0 0;
    z-index: -1;
    opacity: 0.8;
    border-radius: 1000px 0 0 1000px;
    background-image: url(${rightBg}), linear-gradient(${({ theme }) => `${theme.colors.brand}, ${theme.colors.brand}`});
    background-blend-mode: multiply;
    pointer-events: none;
  }
`;

export const LegalWrapper = styled.div`
  display: flex;
  border-block-end: 1px solid #fff;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.getMin(53)};
  width: 100%;
  padding-block: ${({ theme }) => `${theme.getMin(34)} ${theme.getMin(45)}`};

  > a {
    color: #fff;
  }
`;

export const Registration = styled.article`
  padding-inline-end: ${({ theme }) => theme.getMin(174)};
`;

export const Legal = styled.article`
  border-inline-start: 1px solid #fff;
  margin-block-end: ${({ theme }) => theme.getMin(34)};
  padding-block-end: ${({ theme }) => theme.getMin(7)};
  padding-inline: ${({ theme }) => `${theme.getMin(104)} 11%`};
`;

export const FinePrint = styled.article`
  flex: 1;
  padding-block-start: ${({ theme }) => theme.getMin(20)};
  font-size: ${({ theme }) => theme.getClamped(12)};
  font-family: 'Helvetica Neue', sans-serif;
  letter-spacing: 0.5px;
`;

export const Safety = styled.article`
  width: 100%;
  font-size: clamp(25px, 0.83vw + 1rem, 32px);
  font-family: 'Proxima Nova', sans-serif;
  text-align: center;
  margin-block: ${({ theme }) => theme.getMin(41)} ${({ theme }) => theme.getMin(47)};
  border-block-start: ${({ theme }) => `${theme.getMin(2)} solid ${theme.colors.brand}`};
  padding-block-start: ${({ theme }) => theme.getMin(30)};
`;

export const Copyright = styled.p`
  padding-block: ${({ theme }) => `${theme.getMin(34)} ${theme.getMin(45)}`};
  font-family: ${({ theme }) => theme.fonts.heading};
`;
