import styled from 'styled-components';

export const StyledLecturerDashboard = styled.div`
  .main {
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 100%;
    padding: 40px;
  }
  .bottom {
    width: 100%;
  }

  .dashboard-table {
    width: 100%;
  }

  .main .top {
    width: 100%;
    display: flex;
    flex-direction: row;
    margin: 10px auto;
    height: 100%;
    gap: 20px;
  }

  @media screen and (max-width: 1600px) {
    .main {
      gap: 3.125rem;

      padding: 2.6rem;
    }

    .main .top {
      height: 100%;
      gap: 3.125rem;
    }
  }
`;
