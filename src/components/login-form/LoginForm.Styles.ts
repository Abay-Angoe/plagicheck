import styled from 'styled-components';

export const StyledLoginForm = styled.div`
  .input-field {
    outline: unset;
    border: none;
    width: 100%;
    padding-left: 0.325rem;
    font-size: 1rem;
  }
  label {
    line-height: 1.5rem;
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 0.02rem;
  }
  .icon-style {
    display: flex;
    padding: 0.625rem;
    border-radius: 0.5rem;
    border: 1px solid #a6a6ab;
    height: 2.75rem;
  }

  .flex-c-s {
    display: flex;
    justify-content: space-between;
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
  .form-group {
    display: flex;
    flex-direction: column;
  }

  span a {
    text-decoration: none;
    color: #0267ff;
  }

  .btn {
    border-radius: 0.5rem;
    width: 100%;
    height: 2.75rem;

    border: none;
  }
  .remember {
    input {
      margin-right: 1rem;
    }
  }
`;
