import styled from 'styled-components';

export const StyledBulkUpload = styled.div`
  button {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button img {
    height: 1.5rem;
    width: 1.5rem;
    margin-left: 0.5rem;
  }

  .bulk-page {
    display: flex;
    flex-direction: column;
    background: #fff;
    overflow: hidden;
  }
  .bulk-bar {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 16px 61px;
    justify-content: center;
    align-items: flex-start;
    border-bottom: 1px solid #bcbcc0;
    background: #fff;
  }
  .bulk-bar h1 {
    color: #1a1a2a;
    font-size: 19.2px;
    font-style: normal;
    font-weight: 600;
    line-height: 125%;
  }
  .bulk-bar p {
    color: #1a1a2a;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.32px;
  }
  .back-btn {
    margin-left: 60px;
    width: 100px;
  }
  .back-btn .btn-secondary {
    border: none !important;
    width: 100%;
    gap: 10px;
  }

  .main .content {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px 60px;
    gap: 40px;
  }

  .main .content h1 {
    color: #1a1a2a;
    font-size: 27.65px;
    font-style: normal;
    font-weight: 600;
    line-height: 125%;
  }

  .main .content h3 {
    color: #1a1a2a;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: 125%;
  }

  .main .content p {
    color: #1a1a2a;
    font-size: 19.2px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
  }

  .main .content ul {
    list-style: decimal;
    width: 750px;
    display: flex;
    flex-direction: column;
    gap: 13px;
    margin-left: 25px;
    margin-top: 20px;
  }
  .main .content div button {
    width: 40%;
    margin-top: 20px;
  }
`;
