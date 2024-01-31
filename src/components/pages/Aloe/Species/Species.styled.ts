import styled from 'styled-components';
import { queries } from '@/utils';

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

export const SpeciesSection = styled.section`
  margin-block-start: ${({ theme }) => theme.getMin(155)};

  > .container {
    display: flex;
    justify-content: space-between;
    gap: ${({ theme }) => theme.getMin(131)};
    align-items: flex-start;
  }

  /* stylelint-disable-next-line media-query-no-invalid */
  @media ${queries.s} {
    text-align: center;

    > .container {
      flex-direction: column;

      h2 {
        margin-block-end: 0.5em;
        font-size: ${({ theme }) => theme.getClamped(76)};
        text-align: left;

        &::after {
          width: 52.8vw;
          height: 5px;
          margin-block-start: 0.5em;
          margin-inline: auto;
        }
      }

      > ${TextPart} {
        width: 100%;
        padding-inline: 4%;

        > p {
          padding-inline: 2%;
          font-size: ${({ theme }) => theme.getClamped(72)};
        }
      }
    }

    ${List} {
      grid-template-columns: repeat(2, 1fr);
      gap: 8.27vw;
      padding-inline: 5%;

      > li {
        gap: 5.3vw;
        font-size: ${({ theme }) => theme.getClamped(36)};

        .species-item {
          width: 100%;
        }
      }
    }
  }
`;
