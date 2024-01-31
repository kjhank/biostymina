import styled from 'styled-components';
import { queries } from '@/utils';

export const IntroNode = styled.section`
  margin-block: ${({ theme }) => theme.getMin(36)} 0;
`;

export const List = styled.ul`
  display: flex;
  width: 73.3%;
  margin-inline: auto;

  /* stylelint-disable-next-line media-query-no-invalid */
  @media ${queries.s} {
    flex-direction: column;
    gap: 2em;
    width: 100%;
    margin-block-start: 3em;

    > li {
      position: relative;
      width: 100%;

      p {
        font-size: ${({ theme }) => theme.getClamped(28)};
      }

      &:first-of-type {
        .intro-image {
          position: absolute;
          inset-inline-start: -5%;
          width: 50%;
        }

        p {
          inset-inline-start: 20%;
          width: 80%;
        }
      }

      &:last-of-type {
        .intro-image {
          position: absolute;
          inset-inline-start: -5%;
          width: 40%;
        }

        p {
          inset-inline-start: 20%;
          width: 80%;
        }
      }
    }
  }
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  width: 50%;

  .intro-image {
    flex-shrink: 0;
    mix-blend-mode: multiply;
  }

  &:first-of-type {
    p {
      inset-inline-start: -30%;
      width: ${({ theme }) => theme.getMin(374)};
    }

    .intro-image {
      width: ${({ theme }) => theme.getMin(325)};
    }
  }

  &:last-of-type {
    p {
      inset-inline-start: -16%;
      width: ${({ theme }) => theme.getMin(474)};
    }

    .intro-image {
      width: ${({ theme }) => theme.getMin(251)};
    }
  }
`;

export const Text = styled.p`
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  backdrop-filter: blur(25px);
  border-radius: 1000px;
  padding-inline-start: 10%;
  padding-block: 6%;
  font-weight: 600;
  font-size: ${({ theme }) => theme.getClamped(22)};
  font-family: ${({ theme }) => theme.fonts.heading};
  line-height: 1.18;
  white-space: pre-line;

  .intro-highlight {
    color: ${({ theme }) => theme.colors.highlight};
  }
`;
