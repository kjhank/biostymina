import styled from 'styled-components';
import { Brow as GenericBrow } from '@/components/styled';

export const Brow = styled(GenericBrow)`
  padding-inline-start: 2em;

  &::after {
    margin-inline-start: -2em;
  }
`;
