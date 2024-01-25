import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import { Container as GenericContainer } from '@/components';
import backgroundImage from '@/images/layout/footer.png';

export const Container = styled(GenericContainer)`
  b, strong {
    font-weight: bold;
  }

  em, i {
    font-style: italic;
  }
`;

export const FooterNode = styled.footer`
  white-space: pre-line;
  margin-block-end: ${({ theme }) => theme.getMin(52)};

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
  background-image: linear-gradient(${({ theme }) => `${rgba(theme.colors.brand, 0.80)}, ${rgba(theme.colors.brand, 0.80)}`}), url(${backgroundImage});
  background-size: ${({ theme }) => theme.getMin(2829)};
  background-blend-mode: multiply;
  background-position-x: 76%;
  background-position-y: 27%;

  >.container {
    position: relative;
    display: flex;
    justify-content: space-between;
    color: #fff;
    font-size: ${({ theme }) => theme.getClamped(13)};
    isolation: isolate;

    &::before {
      content: '';
      order: 1;
      width: ${({ theme }) => theme.getMin(13)};
      background-color: #fff;
    }
  }
`;

const commonStyle = css`
  position: relative;
  overflow-y: hidden;
  font-family: ${({ theme }) => theme.fonts.alt};
  isolation: isolate;
  padding-block-start: ${({ theme }) => theme.getMin(44)};
`;

const commonPseudoStyle = css`
  content: '';
  position: absolute;
  z-index: -1;
  overflow: hidden;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 0 1000px #fff;
`;

export const LeftPart = styled.section`
  ${commonStyle};
  order: 0;
  width: 35.4%;
  padding-inline: 4.85% ${({ theme }) => theme.getMin(156)};

  &::after {
    ${commonPseudoStyle};
    inset: 0 0 0 auto;
    border-top-right-radius: 150vh;
    border-bottom-right-radius: 150vh;
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
  overflow-y: hidden;
  flex: 2;
  order: 2;
  padding-inline: ${({ theme }) => theme.getMin(176.2)} ${({ theme }) => theme.getMin(80)};

  &::after {
    ${commonPseudoStyle};
    inset: 0 auto 0 0;
    border-bottom-left-radius: 150vh;
    border-top-left-radius: 150vh;
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
  font-family: ${({ theme }) => theme.fonts.heading};

  > a {
    color: #fff;
  }

  > button {
    display: inline;
    border: none;
    padding: 0;
    background-color: transparent;
    color: #fff;
    font: inherit;
    cursor: pointer;
  }

  > a, > button {
    &:focus,
    &:hover {
      outline: none;
      text-decoration: underline;
    }
  }
`;

export const Registration = styled.article`
  padding-inline-end: ${({ theme }) => theme.getMin(170)};
`;

export const Legal = styled.article`
  border-inline-start: 1px solid #fff;
  margin-block-end: ${({ theme }) => theme.getMin(34)};
  padding-block-end: ${({ theme }) => theme.getMin(7)};
  padding-inline: ${({ theme }) => `${theme.getMin(100)} 0`};
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
