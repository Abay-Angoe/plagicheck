import styled from 'styled-components';

export const LoginButtonStyles = styled.div`
  .btn {
    border-radius: 0.5rem;
    width: 100%;
    height: 2.75rem;

    border: none;
  }
  .btn-primary:disabled {
    background-color: #0267ff;
    opacity: 0.2 !important;
    cursor: pointer;
  }
`;
