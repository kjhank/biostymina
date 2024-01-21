import styled from 'styled-components';

export const IntroNode = styled.section`
  margin-block: ${({ theme }) => theme.getMin(36)} 0;
`;

export const List = styled.ul`
  display: flex;
  width: 73.3%;
  margin-inline: auto;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  width: 50%;

  .intro-image {
    flex-shrink: 0;
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
