import styled from 'styled-components';

export const StyledHistoryPage = styled.div`
  .schedule .history-table .table {
    max-width: 90%;
  }

  .schedule .history-table .table th,
  .schedule .history-table .table td {
    min-width: 300px;
  }
  @media screen and (max-width: 1024px) {
    .schedule .history-table .table {
      max-width: 90%;
    }

    .schedule .history-table .table th,
    .schedule .history-table .table td {
      min-width: 400px;
    }
  }

  .table {
    width: 100%;
  }
`;
