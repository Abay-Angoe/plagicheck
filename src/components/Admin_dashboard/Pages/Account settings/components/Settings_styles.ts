import styled from 'styled-components';

export const StyledSettings = styled.div`
  .settings-nav {
    width: 100%;
    height: 100vh;
    padding: 40px 50px;
    border-right: 1px solid #a6a6ab;
  }
  .settings-nav .container {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
  }
  .settings-nav .container button {
    padding: 10px 20px;
  }

  .settings-nav .container .btn-primary.clicked {
    border-radius: 8px;
    background: #cce1ff;
    color: #0267ff;
  }

  .usercard {
    display: flex;
    align-items: center;
    gap: 24px;
    padding: 10px;
  }

  .usercard .image-box {
    border-radius: 50%;
    height: 114px;
    width: 114px;
    flex-shrink: 0;
    position: relative;
  }
  .usercard .image-box img {
    height: 100%;
    width: 100%;
    border-radius: 100%;
    background: #e9e9ea;
    box-shadow:
      0px 1px 3px 1px rgba(0, 0, 0, 0.15),
      0px 1px 2px 0px rgba(0, 0, 0, 0.3);
  }

  .usercard .user-info p {
    color: #000;
    font-size: 19.2px;
    font-style: normal;
    font-weight: 600;
    line-height: 125%;
  }

  .usercard .user-info span {
    color: var(--black-200, #1a1a2a);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.32px;
    opacity: 0.7;
  }

  .card .upload {
    height: 25px;
    width: 25px;
    border-radius: 50%;
    background: #ccd3e0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    margin-top: -3%;
    margin-left: 6%;
    cursor: pointer;
  }

  .card .upload img {
    height: 20px;
    width: 20px;
  }

  .input-box {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    width: 100%;
  }

  .input-box label {
    color: #000112;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.28px;
  }

  .input-box input {
    display: flex;
    height: 40px;
    padding: 8px 16px;
    align-items: center;
    gap: 8px;
    align-self: stretch;
    border-radius: 8px;
    border: 1px solid #a6a6ab;
  }
  .password {
    padding: 20px 0 0 100px;
  }
  .password .title {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    border-bottom: 1px solid #bcbcc0;
    width: 447px;
  }
  .password .title h1 {
    color: #1a1a2a;
    font-size: 19.2px;
    font-style: normal;
    font-weight: 600;
    line-height: 125%;
  }
  .password .title p {
    color: #333441;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.32px;
    opacity: 0.7;
  }
  .password form {
    display: flex;
    flex-direction: column;
    padding: 20px 30px 20px 0;
    width: 100%;
    gap: 50px;
  }

  .password form span {
    color: #000112;
    font-size: 12px;
    line-height: 20px;
    letter-spacing: 0.28px;
  }

  form .buttons {
    display: flex;
    gap: 20px;
    width: 100%;
  }
  form .buttons button {
    width: 160px;
    padding: 0 20px;
  }

  .profile {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 41px;
    width: 60%;
    height: 100%;
    padding: 10px;
  }
  .profile .title h1 {
    color: #1a1a2a;
    font-size: 19.2px;
    font-style: normal;
    font-weight: 600;
    line-height: 125%;
  }

  .profile .card {
  }

  .profile form {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 100px;
  }

  .profile form .input-box {
    margin-top: 25px;
  }

  .profile form button {
    margin-top: -30px;
  }

  @media screen and (max-width: 1024px) {
    .settings-nav {
      width: 100%;
      padding: 40px 10px;
    }
    .settings-nav .container {
    }
    .settings-nav .container button {
      padding: 10px 10px;
      margin-left: -10px;
    }
    .settings-nav .container .btn-primary {
      width: 120px;
    }

    .profile {
      display: inline-flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 21px;
      width: 70%;
      height: 100%;
      padding: 10px;
    }
    .profile .title h1 {
      color: #1a1a2a;
      font-size: 18.2px;
      font-style: normal;
      font-weight: 600;
      line-height: 125%;
    }

    .profile .card {
    }

    .profile form {
      gap: 50px;
    }

    .profile form .input-box {
      margin-top: 15px;
    }

    .usercard {
      gap: 14px;
    }

    .usercard .image-box {
      height: 90px;
      width: 90px;
    }

    .usercard .user-info p {
      font-size: 16.2px;
    }

    .usercard .user-info span {
      font-size: 13px;
      line-height: 20px;
    }

    .card .upload {
      height: 25px;
      width: 25px;
      border-radius: 50%;
      background: #ccd3e0;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      margin-top: -4%;
      margin-left: 8%;
      cursor: pointer;
    }

    .card .upload img {
      height: 17px;
      width: 17px;
    }

    .input-box {
      width: 100%;
    }

    .input-box label {
      font-size: 13px;
    }

    .input-box input {
      height: 35px;
      padding: 8px 10px;
    }
    .password {
      padding: 20px 0 0 0;
    }
    .password .title {
      gap: 8px;
      width: 437px;
    }
    .password .title h1 {
      font-size: 16.2px;
    }
    .password .title p {
      font-size: 14px;
      opacity: 0.7;
    }
    .password form {
      padding: 20px 0 0 0;
      width: 100%;
      gap: 30px;
    }

    .password form span {
      font-size: 12px;
      line-height: 20px;
      letter-spacing: 0.28px;
    }

    form .buttons {
      gap: 0;
      width: 70%;
    }
    form .buttons button {
      width: 120px;
      font-size: 13px;
      padding: 0 10px;
    }
  }

  @media screen and (max-width: 1500px) {
  }
`;
