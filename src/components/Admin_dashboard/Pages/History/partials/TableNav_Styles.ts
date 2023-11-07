import styled from 'styled-components';

export const StyledTableNav = styled.div`
  .bars {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .bar {
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #bcbcc0;
    background: #fff;
    padding: 0 41px 10px;
    width: 100%;
    margin: 15px auto 50px;
  }
  .left {
    width: 20%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    color: #1a1a2a;
    font-style: normal;
    padding-left: 25px;
  }
  .left h1 {
    font-size: 20px;
    font-size: 19.2px;
    font-weight: 600;
    line-height: 125%;
  }
  .left span {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.32px;
    opacity: 0.6;
  }
  .right {
    display: flex;
    width: 50%;
    justify-content: flex-end;
    align-items: center;
    gap: 40px;
  }
  .right .buttons {
    display: flex;
    gap: 30px;
    margin-bottom: 10px;
    margin-top: -10px;
  }
  .right .buttons button {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    gap: 10px;
  }

  @media screen and (max-width: 1024px) {
    .left {
      width: 40%;
      gap: 5px;
      padding-left: 25px;
    }
    .left h1 {
      font-size: 17px;
    }
    .left span {
      font-size: 14px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0.32px;
      opacity: 0.6;
    }
  }

  @media screen and (max-width: 1624px) {
    .left {
      width: 40%;
      gap: 5px;
      padding-left: 25px;
    }
    .left h1 {
      font-size: 17px;
    }
    .left span {
      font-size: 14px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0.32px;
      opacity: 0.6;
    }
    .right {
      display: flex;
      width: 70%;
      justify-content: flex-end;
      align-items: center;
      gap: 10px;
    }

    .right .buttons button {
      justify-content: center;
      align-items: center;
      width: 170px;
    }
  }
`;
