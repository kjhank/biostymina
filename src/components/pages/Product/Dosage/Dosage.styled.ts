import styled from 'styled-components';

export const DosageSection = styled.section`
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    padding-inline: 7.7%;
  }

  h2 {
    padding-inline-end: 1.9%;
    font-size: ${({ theme }) => theme.getClamped(62)};
    font-family: ${({ theme }) => theme.fonts.heading};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  .dosage-decoration {
    width: ${({ theme }) => theme.getMin(995)};
    margin-inline-start: ${({ theme }) => theme.getMax(-290)};
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.getMin(110)};
  width: ${({ theme }) => theme.getMin(666)};
  margin-inline-start: auto;
`;

export const Item = styled.li`
  position: relative;
  border-radius: 1000px;
  padding: 11.87%;
  background-color: ${({ theme }) => theme.colors.neutral};
  font-family: ${({ theme }) => theme.fonts.heading};
  text-align: center;

  .dosage-ampoule {
    position: absolute;
    inset: auto 100% ${({ theme }) => theme.getMax(-40)} auto;
    width: ${({ theme }) => theme.getMin(115)};
    mix-blend-mode: multiply;
    translate: 60% 0;
  }
`;

export const ItemInner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.getMin(70)};
  border-radius: inherit;
  isolation: isolate;

  &::before,
  &::after {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    border-radius: inherit;
    aspect-ratio: 1;
  }

  &::before {
    inset: 0 0 auto;
    z-index: -2;
    background-image: linear-gradient(to bottom, #336542, #dbe93b);
  }

  &::after {
    inset: 18% 0 auto;
    z-index: -1;
    backdrop-filter: blur(25px);
  }
`;

export const Heading = styled.h3`
  padding-block-start: 25%;
  color: #fff;
  font-size: ${({ theme }) => theme.getClamped(57)};
`;

export const Text = styled.p`
  padding-block-end: 1em;
  font-size: ${({ theme }) => theme.getClamped(28)};
  line-height: 1.21;
  white-space: pre-line;

  > strong {
    font-weight: 700;
  }
`;
