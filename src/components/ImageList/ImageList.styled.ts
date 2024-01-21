import styled from 'styled-components';
import { type ImageListPropsStyled } from './ImageList.types';
import listBackground from '../../images/components/image-list.png';
import check from '../../images/components/check.png';

export const Wrapper = styled.div`
  display: grid;
  grid-template-areas: 'list';
  background-color: #f5fbf7;
  background-image: url(${listBackground});
  background-position: 73% 41%;
  background-size: 80vw;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.heading};
  isolation: isolate;
`;

export const List = styled.ul<ImageListPropsStyled>`
  display: grid;
  grid-template-columns: 1fr;
  grid-area: list;
  background-color: ${({ $isWhite }) => $isWhite && '#fff'};
  mix-blend-mode: ${({ $isWhite }) => $isWhite && 'lighten'};
  user-select: ${({ $isWhite }) => $isWhite && 'none'};
  isolation: isolate;
  gap: ${({ theme }) => theme.getMin(12)};

  > li {
    display: flex;
    align-items: center;
    border-radius: 1000px;
    padding-block: ${({ theme }) => `${theme.getMin(21)} ${theme.getMin(26)}`};
    padding-inline-start: 29.8%;
    background-color: ${({ $isWhite }) => ($isWhite ? '#000' : 'transparent')};
  }
`;

export const Content = styled.p`
  display: flex;
  gap: ${({ theme }) => theme.getMin(40)};
  align-items: center;
  border-radius: 1000px;
  padding-inline-start: ${({ theme }) => theme.getMin(57)};
  backdrop-filter: blur(25px);
  line-height: 1.18;
  white-space: pre-line;

  &::before {
    content: '';
    display: block;
    flex-shrink: 0;
    width: ${({ theme }) => theme.getMin(100)};
    height: ${({ theme }) => theme.getMin(100)};
    background-image: url(${check});
    background-position: top center;
    background-size: 100%;
    background-repeat: no-repeat;
  }
`;
