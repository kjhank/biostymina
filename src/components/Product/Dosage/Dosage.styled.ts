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
  width: 100%;
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
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.getMin(80)};
  border-radius: 1000px;
  padding: 11.87%;
  background-color: ${({ theme }) => theme.colors.neutral};
  font-family: ${({ theme }) => theme.fonts.heading};
  text-align: center;
  isolation: isolate;

  &::before,
  &::after {
    content: '';
    position: absolute;
    display: block;
    width: 79.13%;
    border-radius: inherit;
    aspect-ratio: 1;
    translate: -50% 0;
  }

  &::before {
    inset: 7% auto auto 50%;
    z-index: -2;
    background-image: linear-gradient(to bottom, #336542, #dbe93b);
  }

  &::after {
    inset: 23% auto auto 50%;
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
