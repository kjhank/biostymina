import styled from 'styled-components';
import { type PlayButtonStyledProps } from './Video.types';
import { queries } from '@/utils';

export const PlayButton = styled.button<PlayButtonStyledProps>`
  position: absolute;
  inset-block-start: 50%;
  inset-inline-start: 50%;
  opacity: ${({ $isVisible }) => ($isVisible ? 0.75 : 0)};
  width: ${({ theme }) => theme.getMin(180)};
  background-color: transparent;
  transition: ${({ theme }) => `opacity ${theme.transitions.fast}, filter ${theme.transitions.fast}`};
  transform: translate(-50%, -50%);
  cursor: pointer;

  > svg {
    width: 100%;
    height: auto;
  }

  &:hover {
    filter: brightness(1.2);
  }
`;

export const Player = styled.video.attrs({ controls: true })`
  display: block;
  width: 100%;
  box-shadow: ${({ theme }) => `${theme.getMin(20)} ${theme.getMin(100)} ${theme.getMin(60)} ${theme.getMin(10)} rgba(0 0 0 / 10%)`};
  border-radius: ${({ theme }) => theme.getMin(61)};
  cursor: pointer;
`;

export const Wrapper = styled.div`
  position: relative;

  &:hover {
    > ${PlayButton} {
      filter: brightness(1.2);
    }
  }

  /* stylelint-disable-next-line media-query-no-invalid */
  @media ${queries.s} {
    > ${PlayButton} {
      width: 33%;
    }
  }
`;
