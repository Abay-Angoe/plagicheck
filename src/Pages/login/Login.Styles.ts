import styled from 'styled-components';

export const Stylecontainer = styled.div`
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
`;
