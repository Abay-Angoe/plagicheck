import styled from 'styled-components';

export const StyleFileLoadingState = styled.div`
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    position: absolute;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(3px);
  }

  .description {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.32px;
    display: flex;
    justify-content: space-between;
    padding: 0 0 1rem;
  }
  .progress {
    height: 2.25rem;
  }
  .progress-fill {
    width: 100%;
    height: 2.25rem;
    background-color: green;
    transition: width 0.5s;
  }

  .loading {
    display: flex;
    width: 100%;
    justify-content: space-between;
    position: relative;
    padding: 0 0 1rem;
    z-index: 10;
  }
  .close {
    cursor: pointer;
  }

  .loading-modal {
    background-color: #fff;
    width: 461px;
    border-radius: 0.5rem;
    padding: 2rem 1.5rem;
  }

  h2 {
    color: #000;
    align-items: center;
  }

  .loading-buttons {
    display: flex;
    justify-content: flex-end;
    padding-top: 1.2rem;
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
  .btnn {
    display: flex;
    justify-content: flex-end;
  }
`;
