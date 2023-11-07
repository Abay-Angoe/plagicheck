import styled from 'styled-components';

export const StyledContainer = styled.div`
  .table-wrapper {
    width: 100%;
  }
  .loader {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 6rem;
  }
  .nodata {
    margin-top: 3.125rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1.25rem;
    font-size: 2rem;
  }

  .table {
    display: block;
    overflow: hidden;
    table-layout: fixed;
    border-collapse: collapse;
    white-space: nowrap;
    width: 100%;
    max-width: 100%;
    margin: auto;
    table-layout: auto;
    overflow-y: auto;
    padding-bottom: 3.75rem;
  }

  .table .hide {
    display: none;
  }

  .table thead {
    background-color: #e9e9ea;
    color: #222;
    text-align: left;
    font-size: 1rem;
  }

  .table th,
  .table td {
    padding: 1.5rem;
  }

  .history-table .table {
    max-width: 90%;
  }

  .history-table .table th,
  .history-table .table td {
    width: 35%;
    padding: 2.8rem;
  }

  .report-table .table th,
  .report-table .table td {
    width: 100%;
  }

  .academic-table .table th,
  .academic-table .table td {
    width: 70%;
    padding: 1.8rem;
  }
  .academic-table .table .expand {
    width: 80%;
  }

  .academic-table .table .expand div {
    display: flex;
  }

  .academic-table .table .expand ul {
    display: flex;
    gap: 10px;
    list-style: none;
    align-items: center;
  }

  .academic-table .table .expand ul li button {
    border-radius: 0.5rem;
    border: 2px solid #e9e9ea;
    background: #fff;
    display: flex;
    padding: 0.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
  }

  .academic-table .table .department {
    display: flex;
    width: fit-content;
    cursor: pointer;
    padding: 0.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    border-radius: 0.5rem;
    background: #e9e9ea;
    position: relative;
  }

  .academic-table .table .department:hover {
    background: #fff;
  }

  .academic-table .table .department-dropdown {
    position: absolute;
    background-color: #fff;
    border: none;
    border-radius: 0.5rem;
    z-index: 1;
    margin-top: 5rem;
    margin-left: 5rem;
    box-shadow:
      0px 4px 4px 0px rgba(0, 0, 0, 0.3),
      0px 0.5rem 12px 6px rgba(0, 0, 0, 0.15);
  }

  .academic-table .table .department-dropdown button {
    width: 3.125rem;
    margin: 5px;
    cursor: pointer;
  }

  .database-table .table th,
  .database-table .table td {
    min-width: 12.5rem;
    max-width: 43.75rem;
    width: auto;
    padding: 1.8rem;
  }

  .database-table .table .name {
    width: 25rem;
  }

  .table .name {
    color: black;
    display: flex;
    align-items: center;
    font-weight: 600;
  }
  .table .name img {
    margin-right: 10px;
    height: 30px;
    width: 30px;
    border-radius: 50%;
  }
  .fit {
    display: none;
  }

  .table td {
    text-overflow: ellipsis;
    color: #777;
  }
  .table tbody tr {
    border-bottom: 0.5px solid #d2d3d5;
  }

  .dept {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;
  }

  .label {
    border-radius: 3px;
    padding: 0.3rem;
    color: white;
  }

  @media screen and (max-width: 1024px) {
    .report-table .table {
      max-width: 100%;
    }

    .report-table .table th,
    .report-table .table td {
      min-width: 3rem;
      max-width: 7.5rem;
      width: auto;
      font-size: 10px;
    }

    .report-table .table th {
      font-size: 1rem;
    }

    .history-table .table {
      max-width: 95%;
    }

    .history-table .table th,
    .history-table .table td {
      max-width: 12.5rem;
      width: auto;
      padding: 1.6rem;
    }
    .history-table .table td {
      font-size: 1rem;
    }

    .academic-table {
      width: 100%;
    }
    .academic-table .table th,
    .academic-table .table td {
      max-width: 15.625rem;
      padding: 1.5rem;
    }

    .academic-table .table .expand ul {
      display: flex;
      gap: 10px;
      list-style: none;
      align-items: center;
    }

    .academic-table .table .expand ul li button {
      border-radius: 0.5rem;
      border: 2px solid #e9e9ea;
      background: #fff;
      display: flex;
      padding: 0.5rem;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      cursor: pointer;
    }

    .academic-table .table .department {
      display: flex;
      width: fit-content;
      cursor: pointer;
      padding: 0.5rem;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      border-radius: 0.5rem;
      background: #e9e9ea;
    }

    .table thead {
      font-size: 14px;
    }

    .manage .table th,
    .manage .table td {
      max-width: 9.375rem;
      width: auto;
      padding: 1rem 0.5rem;
    }

    .manage .table td {
      font-size: 10px;
    }
  }

  @media screen and (max-width: 1600px) {
    .history-table .table {
      width: 100%;
    }

    .history-table .table th,
    .history-table .table td {
      width: 100%;
      padding: 1.7rem;
    }
    .history-table .table td {
      font-size: 16px;
    }

    .academic-table {
      padding: 0 3.1rem;
    }
    .academic-table .table th,
    .academic-table .table td {
      width: 100%;
      padding: 1.7rem;
    }

    .academic-table .table .expand ul {
      display: flex;
      gap: 10px;
    }

    .academic-table .table .expand ul li button {
    }

    .academic-table .table .department {
    }

    .table thead {
      font-size: 1rem;
    }

    .manage {
      width: 100%;
    }

    .manage .table th,
    .manage .table td {
      width: 100%;
      padding: 1.5rem 0.9rem;
    }

    .manage .table td {
      font-size: 1rem;
    }

    .database-table {
      width: 100%;
      padding: 0 3.1rem;
    }

    .database-table .table th,
    .database-table .table td {
      width: 100%;
      padding: 1.7rem;
    }

    .detailed .table th,
    .detailed .table td {
      width: 100%;
      min-width: 6.25;
      max-width: 12.5rem;
      width: auto;
    }

    .detailed .table td {
      font-size: 15px;
    }
  }
`;
