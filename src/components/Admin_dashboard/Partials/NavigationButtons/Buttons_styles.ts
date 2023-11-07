import styled from 'styled-components';

export const Styledcontainer = styled.div`
  .btn-primary {
    display: flex;
    padding: 0.6rem;
    align-items: center;
    width: 12.5rem;
    height: 2.5rem;
    background: none;
    color: black;
    font-size: 1rem;
    letter-spacing: 0.32px;
    gap: 9px;
  }
  .btn-primary:hover {
    color: #0267ff;
  }

  .btn-primary.clicked {
    background: #0267ff;
    color: white;
    font-weight: 200;
  }

  .btn-img {
    margin-top: -0.25rem;
    margin-right: 1.25rem;
  }

  @media screen and (max-width: 1024px) {
    .btn-primary {
      padding: 0.6rem;
      width: 170px;
      height: 40px;
      font-size: 0.8rem;
    }
  }

  @media screen and (max-width: 1600px) {
    .btn-primary {
      padding: 0.4rem;
      width: 180px;
      height: 40px;
      font-size: 0.9rem;
    }
  }
`;
