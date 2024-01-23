import styled from 'styled-components';

export const ModalWrapper = styled.dialog`
  position: relative;
  width: min(60vw, 100%);
  border-radius: 30px;
  padding: 2.5% 5%;
  color: ${({ theme }) => theme.colors.brand};

  > button {
    position: absolute;
    inset: 5% 5% auto auto;
    height: 2em;
    aspect-ratio: 1;
    padding: 0;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.getMin(20)};
  margin-block-start: ${({ theme }) => theme.getMin(20)};
  font-family: ${({ theme }) => theme.fonts.heading};
  text-align: center;
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
  border-radius: 30px;
  padding: 10% 5.4%;
  transition: ${({ theme }) => `box-shadow ${theme.transitions.fast}`};

  &:hover {
    box-shadow: rgb(0 0 0 / 6%) 0 30px 35px;
  }
`;
