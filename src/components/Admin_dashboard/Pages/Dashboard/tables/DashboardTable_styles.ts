import styled from 'styled-components';

export const StyledDashboardTable = styled.div`
  .dashboard-table {
    padding: 1.5rem 2rem;
    border-radius: 0.5rem;
    background: var(--white-100, #fff);
    box-shadow:
      0px 1px 3px 1px rgba(0, 0, 0, 0.15),
      0px 1px 2px 0px rgba(0, 0, 0, 0.3);
  }

  .title-bar {
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 600;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .title-bar img {
    cursor: pointer;
  }
  /* UserTable.css */
  .user-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
  }

  .user-table .name-column {
    color: #000112;
    opacity: 1;
    display: flex;
    align-items: center;
  }
  .user-table .name-column img {
    height: 30px;
    width: 30px;
  }

  .user-table th {
    text-align: left;
  }

  .user-table td {
    padding: 1rem 0;
    color: #333441;
    font-size: 0.9rem;
    font-style: normal;
    font-weight: 400;
    line-height: 0.5rem;
    letter-spacing: 0.32px;
    opacity: 0.7;
  }

  .user-table tr {
    border-bottom: 1px solid #ccc;
  }
  .user-table .headrow {
    border: none;
  }

  .profile-pic {
    width: 35px;
    height: 35px;
    margin-right: 10px;
    background-color: #e9e9ea;
    border-radius: 50%;
  }

  @media screen and (max-width: 1024px) {
    .dashboard-table {
      padding: 1rem 1rem;
      width: 100%;
    }

    .title-bar {
      font-size: 1rem;
    }

    .title-bar img {
      cursor: pointer;
    }
    /* UserTable.css */
    .user-table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 20px;
    }

    .user-table .name-column {
      display: flex;
      align-items: center;
    }
    .user-table .name-column img {
      height: 20px;
      width: 20px;
    }

    .user-table th {
      text-align: left;
    }

    .user-table td {
      padding: 0.7rem;

      font-size: 0.8rem;

      line-height: 1rem;
      letter-spacing: 0.12px;
    }

    .profile-pic {
      width: 30px;
      height: 30px;
      margin-right: 10px;
    }
  }

  @media screen and (max-width: 1500px) {
    .dashboard-table {
      padding: 1.2rem 1rem;
    }

    .user-table .name-column img {
      height: 25px;
      width: 25px;
    }
  }
`;
