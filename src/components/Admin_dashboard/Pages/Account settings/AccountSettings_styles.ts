import styled from 'styled-components';

export const StyledAccountSettings = styled.div`
  .main {
    display: flex;
    gap: 6.25rem;
    width: 100%;
    height: 100%;
  }
  .outlet {
    padding: 1.8rem;
  }

  @media screen and (max-width: 1024px) {
    .main {
      gap: 3.125rem;
    }
    .outlet {
      padding: 30px 0;
    }
  }

  @media screen and (max-width: 1600px) {
    .main {
      gap: 3.125rem;
    }
    .outlet {
      padding: 30px 0;
    }
  }
`;
