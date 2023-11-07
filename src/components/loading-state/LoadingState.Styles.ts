import styled from 'styled-components';

export const LoadingStateStyles = styled.div`
  .container {
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 2;
  }
  .color-ring {
    margin: auto;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 45%;
    transform: translate(50%-50%);
    z-index: 500;
  }
`;
