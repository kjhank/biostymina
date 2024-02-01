import styled from 'styled-components';
// @ts-expect-error borked import types
import RawTL from '@/images/history/timeline.svg';
import { queries } from '@/utils';

export const TL = styled(RawTL)`
  position: absolute;
  inset-block: 0;
  inset-inline-start: 50%;
  z-index: 2;
  display: block;
  height: 100%;
  translate: -46% 0;
  pointer-events: none;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 1fr;
  row-gap: ${({ theme }) => theme.getMin(126)};
  padding-block: ${({ theme }) => theme.getMin(77)} ${({ theme }) => theme.getMin(84)};
  padding-inline: 7.05% 4.15%;
  background-color: #fff;
  font-size: ${({ theme }) => theme.getClamped(24)};
  font-family: ${({ theme }) => theme.fonts.heading};
`;

export const Icon = styled.figure`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  aspect-ratio: 1;
  border-radius: 9999px;
  background-image: linear-gradient(to right, #336542, #dbe93b 90%,  #dbe93b);
  color: #fff;
  isolation: isolate;

  &.portrait {
    display: none;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    border-radius: 9999px;
    backdrop-filter: blur(15px);
    translate: 31.43% 0;
  }

  > svg {
    width: auto;
    height: 60%;
  }
`;

export const Time = styled.time`
  color: ${({ theme }) => theme.colors.highlight};
  font-weight: 700;
  font-size: ${({ theme }) => theme.getClamped(55)};
  white-space: pre-line;

  &.portrait {
    display: none;
  }
`;

export const ItemInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 57%;
  height: 100%;
  border-radius: 9999px;
  padding-block: 2.5%;
  padding-inline-start: 5.8%;
  background-color: ${({ theme }) => theme.colors.neutral};
  line-height: 1.21;
  text-align: center;
  white-space: pre-line;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 11.56%;
  border-radius: 9999px;

  &:nth-child(even) {
    flex-direction: row-reverse;

    ${ItemInner} {
      flex-direction: row-reverse;
      padding-inline-start: unset;
      padding-inline-end: 9.9%;
    }

    ${Icon} {
      background-image: linear-gradient(to left, #336542, #dbe93b);

      &::after {
        translate: -31.43% 0;
      }
    }

    ${Time} {
      text-align: end;
    }
  }
`;

export const TimelineSection = styled.section`
  position: relative;
  margin-block-end: ${({ theme }) => theme.getMin(113)};
  z-index: 1;

  /* stylelint-disable-next-line media-query-no-invalid */
  @media ${queries.s} {
    ${TL} {
      display: none;
    }

    ${List} {
      grid-auto-rows: unset;
      padding: 0;
      font-size: ${({ theme }) => theme.getClamped(32)};
    }

    ${Item} {
      flex-direction: column;
      gap: 0.5em;

      ${ItemInner} {
        justify-content: center;
        width: 100%;
        padding: 5% 10%;
        white-space: normal;
      }
    }

    ${Icon} {
      display: none;
      flex-grow: 0;
      flex-shrink: 0;
      width: 24.8vw;
      height: 24.8vw;
      margin-block-end: 0.5em;

      &.portrait {
        display: flex;

        &::after {
          translate: 28% 0;
        }
      }

      > svg {
        height: 70%;
      }
    }

    ${Time} {
      display: none;

      &.portrait {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5em;
        text-align: center;

        &::before {
          content: '';
          display: grid;
          width: 0.35em;
          height: 0.35em;
          outline: 2px solid black;
          outline-offset: 0.25em;
          border-radius: 999px;
          background-color: ${({ theme }) => theme.colors.emphasis};
          place-items: center;
        }
      }
    }
  }
`;
