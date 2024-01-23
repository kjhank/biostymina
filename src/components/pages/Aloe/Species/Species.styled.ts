import styled from 'styled-components';

export const SpeciesSection = styled.section`
  margin-block-start: ${({ theme }) => theme.getMin(155)};

  > .container {
    display: flex;
    justify-content: space-between;
    gap: ${({ theme }) => theme.getMin(131)};
    align-items: flex-start;
  }
`;

export const TextPart = styled.div`
  width: 30%;

  > h2 {
    &::after {
      width: ${({ theme }) => theme.getMin(198)};
    }
  }

  > p {
    margin-block-start: ${({ theme }) => theme.getMin(31)};
    font-weight: 500;
    font-size: ${({ theme }) => theme.getClamped(50)};
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.getMin(40)};
`;

export const SingleSpecies = styled.li`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.getMin(47)};
  font-weight: 500;
  font-size: ${({ theme }) => theme.getClamped(30)};
  font-family: ${({ theme }) => theme.fonts.heading};
  line-height: 1.1;
  text-align: center;
  white-space: pre-line;

  i {
    font-style: italic;
    font-weight: 400;
  }

  .species-item {
    width: ${({ theme }) => theme.getMin(220)};
    aspect-ratio: 0.6769;
    border-radius: 9999px;
  }
`;
