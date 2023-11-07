import styled from 'styled-components';

export const StyledAdminDasboard = styled.div`
  .dashboard-main {
    padding-left: 6%;
  }

  .dashboard-top {
    height: 30%;
    width: 100%;
    gap: 3.125rem;
    padding: 2rem 0;
  }
  .loader {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }

  .dashboard-top .columns {
    display: flex;
    flex-direction: row;
    gap: 3.125rem;
    width: 100%;
  }

  .dashboard-table {
    margin-top: 10px;
    width: 100%;
  }

  @media screen and (max-width: 1024px) {
    .dashboard-top {
      height: 30%;
      width: 100%;
      max-width: 100%;
      gap: 20px;
      padding: 2rem 0;
    }
    .dashboard-table {
      width: 100%;
    }
  }

  @media screen and (max-width: 1600px) {
    .dashboard-main {
      padding-left: 4%;
    }

    .dashboard-top {
      height: 30%;
      width: 100%;
      padding: 2rem 0;
    }

    .dashboard-top .columns {
      gap: 4rem;
      width: 97%;
    }

    .dashboard-table {
      width: 100%;
    }
  }
`;
