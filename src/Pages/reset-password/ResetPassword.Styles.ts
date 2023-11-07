import styled from 'styled-components';

export const StyledResetPassword = styled.div`
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .login {
    width: 29.438rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
  }

  label {
    line-height: 1.5rem;
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 0.02rem;
  }
  .login-box {
    background-color: #fff;
    box-shadow:
      0px 1px 3px 1px rgba(0, 0, 0, 0.15),
      0px 1px 2px 0px rgba(0, 0, 0, 0.3);
    border-radius: 1rem;
  }

  .login-logo-box {
    width: 13.8rem;
    height: 3.1rem;
  }

  .login-description {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-size: 1rem;
    font-style: normal;
    letter-spacing: 0.02rem;
  }

  .input-field {
    outline: unset;
    border: none;
    width: 100%;
    padding-left: 0.325rem;
    font-size: 1rem;
  }

  .icon-style {
    display: flex;
    padding: 0.625rem;
    border-radius: 0.5rem;
    border: 1px solid #a6a6ab;
    height: 2.75rem;
  }

  .icon-style {
    display: flex;
    padding: 0.625rem;
    border-radius: 0.5rem;
    border: 1px solid #a6a6ab;
    height: 2.75rem;
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .form-group-1 {
    display: flex;
    flex-direction: column;
  }

  .btn {
    border-radius: 0.5rem;
    width: 100%;
    height: 2.75rem;

    border: none;
  }

  .form-group-2 {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: relative;
    justify-content: center;
  }

  .arrow-left {
    position: absolute;
    left: 7.8rem;
  }
  .btnn {
    border: none;
  }
  .btn-secondary {
    background-color: #fff;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.32px;
    cursor: pointer;
  }
`;
