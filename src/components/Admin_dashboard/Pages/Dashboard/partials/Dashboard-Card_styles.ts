import styled from 'styled-components';

export const StyledDasboardCard = styled.div`
  .dashboard-card {
    display: flex;
    background-color: red;
    width: 18.75rem;
    height: 100%;
    padding: 0.7rem 1rem;
    align-items: flex-start;
    flex-direction: column;
    flex-shrink: 0;
    border-radius: 0.5rem;
    border-left: 2px solid #0267ff;
    background: #fff;
    box-shadow:
      0px 1px 3px 1px rgba(0, 0, 0, 0.15),
      0px 1px 2px 0px rgba(0, 0, 0, 0.3);
  }

  .dashboard-card .top {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  .dashboard-card .top p {
    font-size: 1.1rem;
    font-style: normal;
    font-weight: 600;
    color: #333441;
  }

  .dashboard-card .count {
    padding-left: 20%;
    opacity: 0.6;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 600;
    line-height: 125%;
  }

  @media screen and (max-width: 1024px) {
    .dashboard-card {
      width: 205px;
      height: 100px;
      padding: 1rem;
    }

    .dashboard-card .top {
      gap: 0.5rem;
    }

    .dashboard-card .top img {
      width: 1.6rem;
      height: 1.6rem;
    }

    .dashboard-card .top p {
      font-size: 0.9rem;
    }

    .dashboard-card .count {
      padding-left: 20%;
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 1600px) {
    .dashboard-card {
      width: 22rem;
      height: 100%;
      padding: 1.5rem 2rem;
    }
    .dashboard-card .top img {
      width: 40px;
      height: 40px;
    }

    .dashboard-card .count {
      padding-left: 22%;
      font-size: 1.5rem;
    }
  }
`;
