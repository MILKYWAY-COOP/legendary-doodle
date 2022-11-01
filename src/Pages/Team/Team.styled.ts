import styled from 'styled-components';

export const TeamContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 4rem);
  background-color: var(--purePurple);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--cloud);
  font-family: var(--mainFont);
  padding: 1em;
  position: relative;

  h1 {
    font-size: 2.5rem;
    z-index: 8000;
  }

  p {
    width: 100%;
    text-align: left;
    font-size: 1.2rem;
    padding-bottom: 2rem;
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