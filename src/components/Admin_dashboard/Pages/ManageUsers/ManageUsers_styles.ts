import styled from 'styled-components';

export const StyledManageUsers = styled.div`
  .bars {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .bar {
    display: inline-flex;
    justify-content: space-between;
    border-bottom: 1px solid #bcbcc0;
    background: #fff;
    padding: 1.188rem 2.563rem;
    width: 80vw;
  }
  .left {
    width: 20%;
    display: flex;
    gap: 20px;
  }
  .table-btn {
    padding: 0.5rem 1rem;
    gap: 0.5rem;
    border: none;
    background: none;
    margin: auto;
  }
  .table-btn:hover {
    background: #e9e9ea;
  }
  .table-btn:focus {
    border-bottom: 2px solid #0267ff;
    background: #e9e9ea;
  }
  .active {
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid #0267ff;
    background: #e9e9ea;
  }
  #filter {
    width: 12.5rem;
    height: 2.75rem;
    padding: 0.7rem 1rem;
    align-items: center;
    gap: 0.5rem;
    border-radius: 5rem;
    border: 1px solid #a6a6ab;
  }
  .right {
    display: flex;
    width: 50%;
    justify-content: flex-end;
    gap: 2.5rem;
  }
  .bulk-upload button {
    width: 9.375rem;
    padding: 0 10px;
  }
  .add-btn {
    display: flex;
    gap: 10px;
  }
  .add-btn button {
    width: 10.625rem;
    font-size: 14px;
    padding: 5px auto;
    font-weight: 500;
  }
  .add-btn .button-box {
    margin-top: 0;
  }

  .add-btn .button-box .side-btn {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }

  .adduser-btn {
    display: flex;

    align-items: center;
  }
  .content {
    padding: 2.5rem;
  }
  .main {
    overflow: hidden;
  }
`;
