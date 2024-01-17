import styled from 'styled-components';
import { Brow as GenericBrow } from '@/components/styled';
import { Container } from '@/components';

export const Brow = styled(GenericBrow)`
  padding-inline-start: 1em;
  white-space: nowrap;

  &::after {
    margin-inline-start: -1em;
  }
`;

export const HistoryContainer = styled(Container)`
  display: flex;

  .history-section-image {
    position: relative;
    inset-block-start: ${({ theme }) => theme.getMin(60)};
    inset-inline-start: 5%;
    z-index: -1;
    flex-shrink: 0;
    margin-inline-start: ${({ theme }) => theme.getMax(-200)};
  }

  .history-section-decoration {
    position: relative;
    z-index: -1;
    flex: 1;
    margin-inline: -10% -12%;
    margin-block-end: ${({ theme }) => theme.getMax(-130)};
  }
`;

export const HistoryInner = styled.div`
  display: flex;
  align-items: flex-end;

  h2 {
    margin-block-start: ${({ theme }) => theme.getMin(31)};
  }

  > div:not(.history-section-decoration) {
    width: 40.7%;
  }

  article {
    margin-block: ${({ theme }) => `${theme.getMin(83.5)} ${theme.getMin(17.5)}`};
    padding-inline-end: 1em;

    p {
      line-height: 1.875;
    }
  }

  a {
    margin-block-start: ${({ theme }) => theme.getMin(30)};
  }
`;
