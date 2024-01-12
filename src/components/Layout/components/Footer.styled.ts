import styled, { css } from 'styled-components';
import { Container as GenericContainer } from '@/components';

export const Container = styled(GenericContainer)`
  b, strong {
    font-weight: bold;
  }
`;

export const FooterNode = styled.footer`
  white-space: pre-line;

  a {
    ${({ theme }) => theme.colors.highlight};
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
  display: flex;
  gap: ${({ theme }) => theme.getMin(346)};
  font-size: ${({ theme }) => theme.getClamped(13)};
`;

const commonStyle = css`
  font-family: ${({ theme }) => theme.fonts.alt};
`;

export const AddressPart = styled.address`
  ${commonStyle};
  width: 20.8%;
`;

export const LegalPart = styled.section`
  ${commonStyle};
  display: flex;
  width: 48.48%;
`;

export const Registration = styled.p`
  width: 52.58%;
`;

export const Legal = styled.p`
  padding-inline-start: ${({ theme }) => theme.getMin(104)};
`;

export const FinePrint = styled.p`
  flex: 1;
  font-size: ${({ theme }) => theme.getClamped(12)};
  font-family: 'Helvetica Neue', sans-serif;
`;

export const Safety = styled.p`
  width: 100%;
  font-size: clamp(25px, 0.83vw + 1rem, 32px);
  font-family: 'Proxima Nova', sans-serif;
  text-align: center;
  border-block-start: ${({ theme }) => `${theme.getMin(2)} solid ${theme.colors.brand}`};
  margin-block-end: ${({ theme }) => theme.getMin(47)};
  padding-block-start: ${({ theme }) => theme.getMin(30)};
`;
