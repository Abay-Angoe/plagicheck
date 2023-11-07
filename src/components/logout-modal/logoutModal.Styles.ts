import styled from 'styled-components';

export const StyleLogoutModal = styled.div`
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    position: absolute;

    background-color: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(3px);
    z-index: 10;
  }

  .logout {
    display: flex;
    width: 100%;
    justify-content: space-between;
    position: relative;
    padding: 0 0 1rem;
    z-index: 10;
    /* width: 461px; */
  }
  .close {
    cursor: pointer;
  }

  .logout-modal {
    background-color: #fff;
    width: 461px;
    border-radius: 0.5rem;
    padding: 2rem 1.5rem;
  }
  .description {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.32px;
    padding: 0 0 1rem;
  }

  h2 {
    color: #000;
    align-items: center;
  }

  .logout-buttons {
    display: flex;
    justify-content: space-between;
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
  .btn-error {
    border: none;
  }
`;
