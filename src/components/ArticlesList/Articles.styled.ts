import styled from 'styled-components';
import { ButtonLink } from '../ButtonLink/ButtonLink';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.getMin(66)};
`;

export const Item = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.getMin(20)};
  box-shadow: rgb(0 0 0 / 6%) 0 15px 35px;
  border-radius: 30px;
  padding: 5.4%;
  transition: ${({ theme }) => `box-shadow ${theme.transitions.fast}`};

  &:hover {
    box-shadow: rgb(0 0 0 / 6%) 0 30px 35px;
  }

  .article-thumbnail {
    border-radius: 30px;
  }
`;

export const Title = styled.h3`
  margin-block-start: ${({ theme }) => theme.getMin(5)};
  padding-inline: 4% 25%;
  font-weight: 600;
  font-size: ${({ theme }) => theme.getClamped(24)};
  font-family: ${({ theme }) => theme.fonts.heading};
  line-height: 1.21;
`;

export const Timestamp = styled.time`
  margin-block-start: auto;
  padding-inline-start: 4%;
  color: ${({ theme }) => theme.colors.highlight};
  font-weight: 500;
  font-family: 'DM Sans', sans-serif;
`;

export const Link = styled(ButtonLink)`
  position: absolute;
  width: ${({ theme }) => theme.getMin(66)};
  height: ${({ theme }) => theme.getMin(66)};
  outline: 1px solid #DCDCE3;
  padding: unset;
  background-color: #fff;
  color: ${({ theme }) => theme.colors.brand};
  transition: ${({ theme }) => `width ${theme.transitions.default}, background-color ${theme.transitions.default}, color ${theme.transitions.default}`};
  isolation: isolate;
  inset: auto auto 6.8% 77.23%;

  > svg {
    stroke: currentColor;
    transition: ${({ theme }) => `stroke ${theme.transitions.default}, translate ${theme.transitions.default}`};
  }

  &:hover {
    width: ${({ theme }) => theme.getMin(130)};
    background-color: ${({ theme }) => theme.colors.highlight};
    color: #fff;

    > svg {
      translate: 150% 0;
    }
  }
`;
