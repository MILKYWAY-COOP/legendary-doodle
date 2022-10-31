import styled from 'styled-components';

export const MapDiv = styled.div`
  width: 100%;
  height: 100%;
  z-index: 9999;

  h3 {
    font-size: 1.5em;
    text-align: center;
    font-family: var(--mainFont);
    padding-bottom: 0.2em;
    text-decoration: underline;
  }

  .map-container {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
    width: 100%;
    height: 415px;
    border-radius: 5px;
  }
`;
