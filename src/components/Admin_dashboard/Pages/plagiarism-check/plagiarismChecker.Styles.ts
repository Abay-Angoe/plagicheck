import styled from 'styled-components';

export const StyledPlagiarismCheck = styled.div`
  .main {
    width: 100%;
    height: 100vh;
    overflow: visible;
  }
  .bar {
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #bcbcc0;
    background: #fff;
    padding: 19px 61px;
    width: 100%;
  }

  .bar h1,
  .content-name h3 {
    color: #1a1a2a;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 125%;
  }

  .bar p,
  .content-name p {
    font-size: 0.9rem;
    font-weight: 400;
    letter-spacing: 0.32px;
  }
  .back {
    display: flex;
    gap: 10px;
  }

  .settings {
    display: flex;
    gap: 10px;
  }

  .settings .btn-secondary {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }

  .content {
    width: 25%;
    max-width: 30%;
    margin-top: 10px;
    display: flex;
    align-items: center;
    margin-left: 50px;
    gap: 20px;
  }
  .content-name {
    display: flex;
    flex-direction: column;
    margin: 25px 0;
    width: 250px;
    max-width: 230px;
  }
  .content-name h3 {
    font-size: 16px;
    font-weight: 500;
    max-width: 230px;
    text-overflow: ellipsis;
  }

  .content-name p {
    font-size: 14px;
    opacity: 0.8;
  }

  .content-arrows {
    cursor: pointer;
  }

  /* Checker*/

  .checker-field {
    width: 100%;
    height: 100%;
    padding: 20px 60px;
    gap: 10px;
    flex-direction: row;
    justify-content: center;
  }

  .checker-field .button-div {
    display: flex;
    width: 43%;
    margin: 10px auto;
    justify-content: center;
    gap: 40px;
  }

  .checker-field .button-div .scan-btn {
    display: flex;
    flex-direction: row;
  }

  .checker-field .button-div .scan-btn .btn-primary {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .checker-field .button-div .scan-btn #schedule {
    margin-left: -12px;
    padding: 5px;
    border-radius: 0px 8px 8px 0px;
    border-left: 2px solid #000112;
    display: flex;
    align-items: center;
  }
  .checker-field .button-div .scan-btn .tooltip {
    position: absolute;
    display: inline-flex;
    margin-left: 80px;
    margin-top: -20px;
    padding: 10px 8px;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border-radius: 4px;
    background: var(--white-100, #fff);
    box-shadow:
      0px 2px 6px 2px rgba(0, 0, 0, 0.15),
      0px 1px 2px 0px rgba(0, 0, 0, 0.3);
  }

  textarea,
  .highlighted-content {
    width: 95%;
    height: 450px;
    padding: 30px;
    margin-bottom: 10px;
    border-radius: 16px;
    border: none;
    background: #fff;
    overflow-y: scroll;
    overflow-x: hidden;
    box-shadow:
      0px 2px 6px 2px rgba(0, 0, 0, 0.15),
      0px 1px 2px 0px rgba(0, 0, 0, 0.3);
  }
  .highlight {
    background-color: blue;
    color: blue;
  }
  .textarea {
    position: relative;
    z-index: 1;
  }
  .reduce {
    width: 65%;
    max-width: 65%;
  }

  .report-bar {
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 700px;
    margin-top: -654px;
    padding: 24px;
    width: 35%;
    border-left: 1px solid #a6a6ab;
    float: right;
    align-items: flex-start;
    gap: 8px;
    background: #fff;
    position: relative;
    z-index: 2;
  }

  .report-bar h2 {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
  }
  .report-bar h2 img {
    cursor: pointer;
  }
  .detailed {
    width: 100%;
  }

  .detailed .side-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row-reverse;
    margin: auto;
  }
  .detailed-report .main {
    padding: 50px 50px;
  }

  @media screen and (max-width: 1024px) {
    .bar {
      display: inline-flex;
      justify-content: space-between;
      padding: 19px 21px;
      width: 100%;
    }

    .bar h1,
    .content-name h3 {
      font-size: 16px;
    }

    .bar p,
    .content-name p {
      font-size: 0.8rem;
    }
    .back {
      display: flex;
      gap: 5px;
    }

    .settings {
      display: flex;
      gap: 5px;
    }

    .settings .btn-secondary {
      display: flex;
      height: 40px;
      gap: 8px;
    }

    .content {
      width: 50%;
      max-width: 50%;
      margin-top: 10px;
      margin-left: 20px;
      gap: 10px;
    }
    .content-name {
      display: flex;
      flex-direction: column;
      margin: 15px 0;
    }
    .content-name h3 {
      font-size: 16px;
    }

    .content-name p {
      font-size: 14px;
    }

    .content-arrows {
      cursor: pointer;
    }

    .checker-field {
      width: 100%;
      height: 100%;
      padding: 20px 30px;
      gap: 10px;
      flex-direction: row;
      justify-content: center;
    }

    .checker-field .button-div {
      width: 43%;
      margin: 10px auto;

      gap: 10px;
    }

    .checker-field .button-div .scan-btn #schedule {
      margin-left: -22px;
      padding: 5px;
    }
    .checker-field .button-div .scan-btn .tooltip {
      margin-left: 80px;
      margin-top: -20px;
      padding: 8px 8px;
      gap: 5px;
    }

    textarea {
      width: 100%;
      height: 500px;
      padding: 20px;
      margin-bottom: 10px;
    }
    .textarea {
      position: relative;
    }
    .reduce {
      width: 45%;
      max-width: 45%;
    }

    .report-bar {
      margin-top: -677px;
      padding: 24px;
      width: 50%;
    }

    .report-bar h2 {
      font-size: 1.2rem;
    }

    .detailed {
      width: 100%;
    }

    .detailed .side-btn {
      margin: auto;
    }
    .detailed-report .main {
      padding: 50px 35px;
    }
  }

  @media screen and (max-width: 1600px) {
    .checker-field .button-div .scan-btn #schedule {
      padding: 5px;
      margin-left: -20px;
    }
    .bar {
      display: inline-flex;
      justify-content: space-between;
      padding: 19px 31px 19px 51px;
      width: 102%;
    }
    .reduce {
      width: 60%;
      padding: 0;
    }

    .report-bar {
      margin-top: -664px;
      padding: 24px 15px;
      width: 40%;
    }

    .report-bar h2 {
      font-size: 1.3rem;
    }

    .detailed {
      width: 100%;
    }

    .detailed .side-btn {
      margin: auto;
    }
    .detailed-report .main {
      padding: 50px 35px;
    }
    .checker-field .button-div {
      width: 45%;
      margin: 10px auto;
    }
  }
`;
