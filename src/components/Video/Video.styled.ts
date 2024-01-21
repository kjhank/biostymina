import styled from 'styled-components';
import { type PlayButtonStyledProps } from './Video.types';

export const PlayButton = styled.button<PlayButtonStyledProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  opacity: ${({ $isVisible }) => ($isVisible ? 0.75 : 0)};
  background-color: transparent;
  transition: ${({ theme }) => `opacity ${theme.transitions.fast}, filter ${theme.transitions.fast}`};
  transform: translate(-50%, -50%);
  cursor: pointer;

  &:hover {
    filter: brightness(1.2);
  }
`;

export const Player = styled.video.attrs({ controls: true })`
  display: block;
  width: 100%;
  box-shadow: ${({ theme }) => `${theme.getMin(20)} ${theme.getMin(100)} ${theme.getMin(60)} ${theme.getMin(10)} rgba(0 0 0 / 10%)`};
  border-radius: 61px;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  position: relative;

  &:hover {
    > ${PlayButton} {
      filter: brightness(1.2);
    }
  }
`;
