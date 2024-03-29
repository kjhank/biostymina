import styled from 'styled-components';
import { Brow as GenericBrow } from '@/components/styled';
import { Container } from '@/components';
import { queries } from '@/utils';

export const Brow = styled(GenericBrow).attrs({ className: 'brow/*  */' })`
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
    inset-block-start: ${({ theme }) => theme.getMin(90)};
    inset-inline-start: 5%;
    z-index: -1;
    flex-shrink: 0;
    width: ${({ theme }) => theme.getMin(860)};
    margin-inline-start: ${({ theme }) => theme.getMax(-225)};
  }

  .history-section-decoration {
    position: relative;
    z-index: -1;
    flex: 1;
    width: ${({ theme }) => theme.getMin(403.5)};
    margin-inline: -11% -12%;
    margin-block-end: ${({ theme }) => theme.getMax(-170)};
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

    /* stylelint-disable-next-line media-query-no-invalid */
    @media ${queries.s} {
      width: 100%;

      article {
        padding: 0 11%;
        font-size: ${({ theme }) => theme.getClamped(32)};
        line-height: 1.3125;
        text-align: center;
        white-space: normal;

        > p:last-child {
          margin-block-start: 1em;
        }
      }
    }
  }

  article {
    margin-block: ${({ theme }) => `${theme.getMin(83.5)} ${theme.getMin(17.5)}`};
    padding-inline-end: ${({ theme }) => theme.getMin(36)};

    p {
      line-height: 1.875;
    }
  }

  a {
    margin-block-start: ${({ theme }) => theme.getMin(30)};
  }
`;
