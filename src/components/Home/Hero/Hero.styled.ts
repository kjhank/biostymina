import styled from 'styled-components';

import { SectionHeading } from '@/components/styled';

export const Heading = styled(SectionHeading)`
  padding-block-start: ${({ theme }) => theme.getMin(102)};
  font-size: ${({ theme }) => theme.getClamped(100)};
  line-height: 0.87;
  white-space: pre-line;
`;

export const SubHeading = styled(SectionHeading)`
  padding-block-start: 0.5em;
  color: ${({ theme }) => theme.colors.accent};
  font-size: ${({ theme }) => theme.getClamped(52)};
`;
