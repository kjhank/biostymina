import styled from 'styled-components';
import { queries } from '@/utils';

export const ModalWrapper = styled.dialog`
  position: fixed;
  inset: calc(1em + 3px) 0 auto;
  width: min(60vw, 1440px);
  border-radius: ${({ theme }) => theme.getMin(30)};;
  padding: 2.5% 5%;
  color: ${({ theme }) => theme.colors.brand};

  > button {
    position: absolute;
    inset: 5% 5% auto auto;
    height: 2em;
    aspect-ratio: 1;
    padding: 0;
  }

  &::backdrop {
    background-color: rgb(255 255 255 / 30%);
    backdrop-filter: blur(15px);
  }

  h2 {
    font-size: ${({ theme }) => theme.getClamped(42)};
    text-align: center;
  }

  /* stylelint-disable-next-line media-query-no-invalid */
  @media ${queries.s} {
    inset: calc(1em + 3px) 0;
    width: 90vw;
    padding: 5% 2.5%;

    h2 {
      font-size: 18px;
    }

    > button {
      height: 2em;
      inset: 1% 2% auto auto;
    }
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.getMin(20)};
  margin-block-start: ${({ theme }) => theme.getMin(20)};
  font-family: ${({ theme }) => theme.fonts.heading};
  text-align: center;

  /* stylelint-disable-next-line media-query-no-invalid */
  @media ${queries.s} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ImageWrapper = styled.div`
  display: grid;
  place-items: center;
  flex: 1;

  > picture {
    max-width: 80%;
  }
`;

export const Item = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.getMin(11)};
  aspect-ratio: 1;
  box-shadow: rgb(0 0 0 / 6%) 0 15px 35px;
  border-radius: ${({ theme }) => theme.getMin(30)};;
  padding: 10% 5.4%;
  transition: ${({ theme }) => `box-shadow ${theme.transitions.fast}`};

  &:hover {
    box-shadow: rgb(0 0 0 / 6%) 0 30px 35px;
  }
`;
