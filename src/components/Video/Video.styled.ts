import styled from 'styled-components';
import { type PlayButtonStyledProps } from './Video.types';

export const Wrapper = styled.div`
  position: relative;
`;

export const PlayButton = styled.button<PlayButtonStyledProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  background-color: transparent;
  mix-blend-mode: multiply;
  transition: ${({ theme }) => theme.getTransitions(['opacity', 'filter'])};
  transform: translate(-50%, -50%);
  cursor: pointer;

  :hover {
    filter: brightness(1.2);
  }
`;

export const Player = styled.video.attrs({ controls: true })`
  width: 100%;
  border-radius: 61px;
  cursor: pointer;

  :hover {
    + ${PlayButton} {
      filter: brightness(1.2);
    }
  }
`;
