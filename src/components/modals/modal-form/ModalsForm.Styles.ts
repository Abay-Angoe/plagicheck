import styled from 'styled-components';

export const StyleModal = styled.div`
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    position: absolute;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(3px);
  }

  .input-field {
    outline: unset;
    border: none;
    width: 100%;
    padding-left: 0.325rem;
    font-size: 1rem;
  }
  .form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .form-group {
  }

  label {
    /* line-height: 1.5rem;
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 0.02rem;
    background-color: red; */
  }
  .icon-style {
    display: flex;
    padding: 0.625rem;
    border-radius: 0.5rem;
    border: 1px solid #a6a6ab;
    /* height: 2.75rem; */
  }
  .title {
    display: flex;
    width: 100%;
    justify-content: space-between;
    position: relative;
    align-items: center;
    /* padding: 0 0 1rem; */
    /* width: 461px; */
  }
  .close {
    cursor: pointer;
  }

  .modal {
    background-color: #fff;
    width: 461px;
    border-radius: 0.5rem;
    padding: 32px 24px;
  }
  .description {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.32px;
    /* padding: 0 0 1rem; */
  }

  h2 {
    color: #000;
    align-items: center;
  }

  .modal-buttons {
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
