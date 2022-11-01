import styled from 'styled-components';

export const WDonateContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 68px);
  background-color: var(--purePurple);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--cloud);
  font-family: var(--mainFont);
  padding: 1em;
  position: relative;

  h1 {
    font-size: 2rem;
    padding-bottom: 0.5em;
  }

  p {
    width: 100%;
    text-align: left;
    font-size: 1.2rem;
    margin-bottom: 1em;
    z-index: 8000;
  }

  span {
    text-decoration: underline;
    cursor: pointer;
  }

  h3 {
    text-decoration: underline;
    font-size: 1.5rem;
  }

  .wish {
    width: 100%;
    z-index: 8000;
  }

  @media (max-width: 500px) {
    .curve {
      position: absolute;
      height: 100px;
      width: calc(100% - 1em);
      bottom: 0;
      z-index: 1;

      &::before {
        content: '';
        display: block;
        position: absolute;
        border-radius: 100% 50%;
        width: 60%;
        height: 100%;
        background-color: var(--purePurple);
        transform: translate(70%, 35%);
      }

      &::after {
        content: '';
        display: block;
        position: absolute;
        border-radius: 100% 50%;
        width: 60%;
        height: 100%;
        background-color: var(--brightRed);
        transform: translate(-15%, 65%);
      }
    }
  }

 
`;
