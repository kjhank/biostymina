import styled from 'styled-components';
// @ts-expect-error borked imports
import RawMap from '@/images/aloe/map.svg';

export const CultivationSection = styled.section`
  padding-block: ${({ theme }) => `${theme.getMin(23)} ${theme.getMin(59)}`};

  > .container {
    display: flex;
    align-items: flex-start;
  }

  .cultivation-decoration {
    position: relative;
    inset-block-start: ${({ theme }) => theme.getMax(-50)};
    width: ${({ theme }) => theme.getMin(879.5)};
  }
`;

export const Wrapper = styled.div`
  width: 54%;

  > h2 {
    font-size: ${({ theme }) => theme.getClamped(62)};
    font-family: ${({ theme }) => theme.fonts.heading};
    line-height: 0.98;

    &::after {
      margin-block-start: ${({ theme }) => theme.getMin(20)};
    }
  }
`;

export const Description = styled.div`
  margin-block-start: ${({ theme }) => theme.getMin(58)};
  padding-inline-end: 28%;
  font-weight: 600;
  font-size: ${({ theme }) => theme.getClamped(30)};

  > p + p {
    margin-block-start: 1em;
  }

  > p:first-child {
    font-family: ${({ theme }) => theme.fonts.alt};
  }

  > p:last-child {
    font-weight: 700;
    font-family: ${({ theme }) => theme.fonts.heading};
  }
`;

export const Map = styled(RawMap)`
  display: block;
  width: ${({ theme }) => theme.getMin(688.07)};
  height: auto;
  margin-block-start: ${({ theme }) => theme.getMax(-10)};
  margin-inline-start: auto;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3.9%;
  width: 74.88%;
  margin-inline: auto;
  background-color: #fff;
`;

export const Item = styled.li`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1;
  border-radius: 9999px;
  padding: 14%;
  background-image: linear-gradient(to bottom, #336542, #dbe93b);
  color: #fff;
  font-weight: 700;
  font-size: ${({ theme }) => theme.getClamped(26)};
  font-family: ${({ theme }) => theme.fonts.heading};
  text-align: center;
  white-space: pre-line;
  isolation: isolate;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    border-radius: 9999px;
    backdrop-filter: blur(15px);
    translate: 0 30%;
  }
`;
