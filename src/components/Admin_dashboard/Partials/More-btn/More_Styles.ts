import styled from 'styled-components';

export const StyledMoreBtn = styled.div`
  .more {
    position: relative;
  }
  .more button {
    border: none;
    background: none;
    cursor: pointer;
    position: relative;
  }

  .more .dropdown {
    display: flex;
    position: absolute;
    z-index: 10;
    margin-left: -70px;
    padding: 20px;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    border-radius: 8px;
    background: #fff;
    box-shadow:
      0px 4px 4px 0px rgba(0, 0, 0, 0.3),
      0px 8px 12px 6px rgba(0, 0, 0, 0.15);
  }

  .more .dropdown button {
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.32px;
  }

  .more .dropdown button:hover {
    color: #0267ff;
  }
`;
