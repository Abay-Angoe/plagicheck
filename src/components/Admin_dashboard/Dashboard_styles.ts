import styled from 'styled-components';

export const StyledDashboard = styled.div`
  .dashboard {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
  }
  .sidebar {
    height: 100vh;
    width: 22%;
    background: #e9e9ea;
    padding: 40px 20px;
    border-right: 1px solid #bcbcc0;
  }
  .logo {
    width: 100%;
    margin: 20px auto;
  }
  .logo img {
    width: 90%;
  }

  .nav-btns {
    width: 95%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: -1px;
  }

  .nav-btns .submenu {
    display: flex;
    flex-direction: column;
    gap: -5px;
    margin-left: 20px;
  }

  .nav-btns .submenu .side-btn {
    margin-top: -18px;
  }

  .nav-btns .submenu .side-btn img {
    height: 20px;
    width: 20px;
  }

  .logout-div {
    margin: 20px 0 0 4px;
  }

  .button-box {
    margin-top: 25px;
  }
  .side-btn {
  }
  .bars {
    display: flex;
    flex-direction: column;
    width: 101%;
  }

  .bars .top {
    display: inline-flex;
    justify-content: space-between;
    border-bottom: 1px solid #bcbcc0;
    background: #fff;
    padding: 15px 61px;
    width: 100%;
    height: 70px;
  }
  .bars .top .profile-card {
    height: 70px;
    display: flex;
    gap: 10px;
    width: 300px;
  }
  .bars .top .profile-card .usercard {
    height: 40px;
    padding: 10px;
    margin-bottom: 15px;
    justify-content: center;
    align-items: center;
  }
  .profile-card .usercard .user-info p,
  .profile-card .usercard .user-info span {
    font-size: 15px;
  }
  .bars .top .profile-card .image-box,
  .bars .top .profile-card img {
    height: 40px;
    width: 40px;
  }
  #search {
    display: flex;
    height: 40px;
    padding: 8px 16px;
    align-items: center;
    gap: 8px;
    align-self: stretch;
    border-radius: 8px;
    border: 1px solid #a6a6ab;
  }
  .main {
    width: 100%;
    padding-right: 40px;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .main .add-users {
    width: 25%;
  }

  @media screen and (max-width: 1024px) {
    .dashboard {
      width: 100%;
      height: 100vh;
    }
    .sidebar {
      width: 20%;
      padding: 50px 10px;
    }
    .logo {
      width: 100%;
      margin: 20px auto;
    }
    .logo img {
      width: 100%;
    }

    .nav-btns {
      margin-top: -20px;
    }
    .logout-div {
      margin: 40px 0 0 0px;
    }
    .button-box {
      margin-top: 10px;
      margin-left: 15px;
      width: 100%;
    }
    .side-btn {
    }
    .bars {
      width: 100%;
    }
    .bars .top {
      padding: 15px 41px;
      width: 100%;
    }
    #search {
      height: 40px;
      padding: 8px 16px;
    }
    .main {
      width: 100%;
      padding-right: 20px;
    }
    .main .add-users {
      width: 55%;
    }
  }

  @media screen and (max-width: 1600px) {
    .bars .top {
      padding: 15px 51px;
      width: 100%;
    }
    .sidebar {
      width: 20%;
      padding: 40px 15px;
    }
    .nav-btns {
      margin-top: -10px;
      width: 80%;
    }
    .logout-div {
      margin: 150px 0 0 5px;
    }
    .button-box {
      margin-top: 17px;
      margin-left: 15px;
      width: 100%;
    }
  }
`;
