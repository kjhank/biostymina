import styled from 'styled-components';
import { queries } from '@/utils';

export const Container = styled.div.attrs({ className: 'container' })`
  position: relative;
  width: min(85.42vw, 1640px);
  margin: 0 auto;

  /* stylelint-disable-next-line media-query-no-invalid */
  @media ${queries.xl} {
    width: min(93.962vw, 1804px);
  }

  /* stylelint-disable-next-line media-query-no-invalid */
  @media ${queries.l} {
    width: min(96vw, 1844px);
  }

  /* stylelint-disable-next-line media-query-no-invalid */
  @media ${queries.s} {
    width: 95%;
    margin: auto;
  }
`;
