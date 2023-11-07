import styled from 'styled-components';

export const StyledPlagiarismSettings = styled.div`
  .checker-settings {
    display: flex;
    flex-direction: column;
  }

  .row {
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 30px 70px;
  }

  .row h2 {
    color: #1a1a2a;
    font-size: 19.2px;
    font-style: normal;
    font-weight: 600;
    line-height: 125%;
  }
  .row p {
    color: #1a1a2a;
    font-size: 14px;
    font-style: normal;
    font-weight: 200;
    line-height: 24px;
    letter-spacing: 0.32px;
    opacity: 0.7;
  }
  .row .right {
    width: 20%;
  }

  .row .right #threshold {
    width: 100%;
    height: 44px;
    padding: 10px 16px;
    align-items: center;
    gap: 8px;
    align-self: stretch;
    border-radius: 8px;
    border: 1px solid #a6a6ab;
  }

  .checker-settings .checkbox-dropdown {
  }

  .checker-settings .checkbox-dropdown button {
    width: 100%;
    height: 44px;
    padding: 10px 16px;
    background: none;
    border-radius: 0.5rem;
    border: 1px solid #a6a6ab;
  }

  .checker-settings .checkbox-dropdown .dropdown-content {
    margin-top: 5px;
    margin-left: -60px;
    display: flex;
    flex-direction: column;
    position: absolute;
    border-radius: 8px;
    border: none;
    padding: 16px;
    gap: 16px;
    background: #fff;
    box-shadow:
      0px 4px 4px 0px rgba(0, 0, 0, 0.3),
      0px 8px 12px 6px rgba(0, 0, 0, 0.15);
  }

  .btn-primary {
    margin-left: 89%;
  }
`;
