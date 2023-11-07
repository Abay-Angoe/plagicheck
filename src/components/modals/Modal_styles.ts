import styled from 'styled-components';

export const StyledModal = styled.div`
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(52, 64, 84, 0.5);
    backdrop-filter: blur(10px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 800;
  }

  .modal-tile {
    z-index: 9;
    border-radius: 0.5rem;
    padding: 32px 34px;
    width: 25.8rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: white;
  }
  .modal-tile .title {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
  .modal-tile .title img {
    height: 30px;
    width: 30px;
    cursor: pointer;
  }
  .modal-tile .title h1 {
    font-size: 20px;
    font-weight: 600;
  }
  .modal-content {
    font-size: 1rem;
  }
  .modal-buttons {
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }
  .modal-buttons .btn-primary,
  .modal-buttons .btn-secondary {
    padding: 0 20px;
    width: 150px;
  }

  .btn-schedule {
    flex-basis: 160px;
  }

  .modal-content .input-box {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 30px;
  }
  .modal-content .input-box input {
    padding: 10px 16px;
    border-radius: 8px;
    border: 1px solid #a6a6ab;
  }
  .modal-content select {
    margin-bottom: 20px;
  }

  .share .users {
    display: flex;
    padding: 10px;
    flex-direction: column;
    align-items: flex-start;
    min-height: 300px;
    max-height: 300px;
    max-width: 100%;
    min-width: 100%;
    gap: 16px;
    border-radius: 8px;
    border: 1px solid #a6a6ab;
    background: #fff;
    overflow-y: scroll;
    margin: 5px auto 15px;
  }

  .share .users label {
    display: flex;
    gap: 10px;
    flex-direction: column;
  }

  .share .users .check {
    display: flex;
    gap: 20px;
    padding: 5px;
  }

  .share input {
    display: flex;
    height: 40px;
    padding: 8px 25px;
    align-items: center;
    gap: 8px;
    align-self: stretch;
    border-radius: 8px;
    border: 1px solid #a6a6ab;
  }

  .share .link {
    display: flex;
    gap: 5px;
  }

  .share .link input {
    padding: 15px 15px 15px 40px;
    width: 90%;
  }

  .share .link button {
    display: flex;
    width: 40px;
    height: 40px;
    padding: 8px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 8px;
    border: 1px solid #a6a6ab;
    background: #e9e9ea;
    cursor: pointer;
  }
  .search {
    position: absolute;
    width: 17px;
    margin: 7px 0 0 6px;
  }
  .link-icon {
    position: absolute;
    margin: 10px 0 0 12px;
  }

  .btn {
    width: 12.313rem;
    height: 2.75rem;
    border-radius: 0.5rem;
    padding: 0 1.25rem;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.32px;
  }

  .date {
    width: 196%;
    display: flex;
    padding: 0.325rem;

    border: 1px solid;
  }
  .time {
    width: 100%;
    display: flex;
    padding: 0.125rem;
  }
  .set-date {
    padding-top: 0.5rem 0 0 0.5rem;
    /* background-color: red; */
  }
  .set-time {
    padding-top: 0.5rem 0 0 0.5rem;
    background-color: red;
  }
  .check {
    padding-top: 0.5rem;
  }
  @media screen and (max-width: 1024px) {
    .main {
      gap: 50px;
    }
    .outlet {
      padding: 30px 0;
    }
  }

  @media screen and (max-width: 1500px) {
  }
`;
