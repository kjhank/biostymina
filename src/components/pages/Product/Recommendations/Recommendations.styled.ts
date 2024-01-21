import styled from 'styled-components';

export const RecommendationsSection = styled.section`
  > .container {
    display: flex;
    flex-direction: column;
    align-items: center;

    > div:has(.image-list) {
      display: flex;
      gap: ${({ theme }) => theme.getMin(21)};
      align-items: flex-start;
      width: 100%;
      margin-block-start: ${({ theme }) => theme.getMin(69)};

      .recommendations-package {
        position: relative;
        inset-block-start: ${({ theme }) => theme.getMax(-20)};
        width: 30.3%;
      }
    }
  }

  .image-list {
    flex-grow: 0;
    flex-shrink: 0;
    width: 59.15%;
  }
`;
