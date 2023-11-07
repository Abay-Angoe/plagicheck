import styled from 'styled-components';

export const StyledAddUsers = styled.div`
  .toastify {
    max-width: 120px;
    height: 50px;
  }
  h1 {
    font-size: 1.44rem;
    font-weight: 600;
    line-height: 125%;
  }
  .title {
    display: flex;
    justify-content: space-between;
  }

  #modal {
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
  }
  .add-users {
    border-radius: 0.5rem;
    padding: 2rem 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: white;
  }

  .form-input {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
  }
  .form-input label {
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.25rem;
    letter-spacing: 0.28px;
  }
  .form-input input,
  .form-input select {
    display: flex;
    padding: 0 1rem;
    height: 44px;
    align-items: center;
    gap: 0.5rem;
    align-self: stretch;
    border: 1px solid #a6a6ab;
    border-radius: 0.5rem;
  }
  .form-input input:active {
    border: #0267ff !important;
  }
  .buttons {
    margin-top: 1rem;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1.19rem;
  }
  .buttons button {
    width: 12.313rem;
    height: 2.75rem;
    border-radius: 0.5rem;
    padding: 0 1.25rem;
  }
  .form-input input.error {
    border: 2px solid red;
  }
  .form-input input.success {
    border: 2px solid #00e600;
  }

  .error-message {
    color: red;
    font-size: 14px;
    margin-top: 5px;
  }

  .form-error {
    margin-top: 20px;
    background: #ffe6e6;
  }
`;
