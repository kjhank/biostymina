import styled from 'styled-components';
import { type BubblePropsStyled } from './Instructions.types';

export const InstructionsSection = styled.section`
  margin-block-end: ${({ theme }) => theme.getMin(241)};

  > .container {
    display: flex;
    flex-wrap: wrap;
    column-gap: ${({ theme }) => theme.getMin(10)};
  }
`;

export const Bubble = styled.div<BubblePropsStyled>`
  flex-grow: 0;
  width: ${({ theme }) => theme.getMin(744)};
  padding-block: ${({ theme }) => `${theme.getMin(56)} ${theme.getMin(17)}`};
  padding-inline-start: ${({ theme }) => theme.getMin(128)};
  border-radius: 9999px;
  background-color: ${({ theme }) => theme.colors.neutral};

  &:first-child {
    margin-inline-start: calc(${({ theme }) => theme.getMax(-727)});
  }

  hr {
    width: ${({ theme }) => theme.getMin(110)};
    margin-block: ${({ theme }) => theme.getMin(23)};
    margin-inline-start: 0;
    border: none;
    border-block-start: ${({ theme }) => `${theme.getMin(5)} solid ${theme.colors.brow}`};
    border-radius: 4px;
  }
`;

export const Heading = styled.h2`
  font-weight: 500;
  font-size: ${({ theme }) => theme.getClamped(62)};
  font-family: ${({ theme }) => theme.fonts.heading};
  white-space: nowrap;
`;

export const Description = styled.p`
  font-weight: 600;
  font-size: ${({ theme }) => theme.getClamped(30)};
  font-family: ${({ theme }) => theme.fonts.alt};
`;

export const List = styled.ol`
  display: flex;
  gap: ${({ theme }) => theme.getMin(191.7)};
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-block-start: ${({ theme }) => theme.getMin(110)};
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.heading};
  text-align: center;

  .instructions-step-1 {
    position: relative;
    inset-inline-end: ${({ theme }) => theme.getMax(-55)};
    order: 0;
    width: 77.17%;
    margin-block-end: ${({ theme }) => theme.getMin(48)};
  }

  .instructions-step-2 {
    margin-block-start: ${({ theme }) => theme.getMin(33)};
    order: 10;
  }

  &:first-child {
    width: ${({ theme }) => theme.getMin(368.71)};
  }

  &:last-child {
    width: ${({ theme }) => theme.getMin(347)};
  }
`;

export const ItemHeading = styled.h3`
  font-size: ${({ theme }) => theme.getClamped(42)};
  text-transform: uppercase;

  + hr {
    width: ${({ theme }) => theme.getMin(78)};
    margin-block: ${({ theme }) => theme.getMin(23)};
    border: none;
    border-block-start: ${({ theme }) => `${theme.getMin(4)} solid ${theme.colors.brow}`};
    border-radius: 4px;
  }
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.getClamped(30)};
`;
