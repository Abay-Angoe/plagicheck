import styled from 'styled-components';

export const StyledPagination = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-shrink: 0;
    margin: 10px auto 50px;
  }

  .pagination .next,
  .pagination .prev {
    display: flex;
    height: 44px;
    padding: 0px 16px 0px 12px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    border: 1px solid #a6a6ab;
  }

  .pagination .prev {
    border-radius: 8px 0px 0px 8px;
  }
  .pagination .next {
    border-radius: 0px 8px 8px 0px;
  }

  #pagebtn {
    display: flex;
    padding: 10px 16px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 44px;
    border: 1px solid #a6a6ab;
    background-color: white;
    cursor: pointer;
  }

  .active {
    background: var(--gray-1000, #e9e9ea);
  }
`;
