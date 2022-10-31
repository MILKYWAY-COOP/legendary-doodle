import styled from 'styled-components';

export const HomeContainer = styled.div`
  width: 100vw;

  .bottom {
    position: relative;
    background-color: var(--purePurple);
    padding: 0 2em;

    @media (max-width: 500px) {
      padding: 0.5em 0.5em;
    }

    h1 {
      font-family: var(--mainFont);
      font-size: 3rem;
      text-align: center;
      padding: 0.1em;
      color: var(--cloud);

      @media (max-width: 900px) {
        font-size: 2rem;
      }

      @media (max-width: 500px) {
        font-size: 1.3rem;
      }
    }

    .MapAbout {
      width: 100%;
      height: 450px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      gap: 1em;

      & > * {
        flex: 1;
      }

      @media (max-width: 900px) {
        justify-content: center;
        flex-direction: column;
        height: 990px;
      }
    }

    @media (max-width: 900px) {
      .curve {
        position: absolute;
        height: 100px;
        width: 100%;
        bottom: 0;

        &::before {
          content: '';
          display: block;
          position: absolute;
          border-radius: 100% 50%;
          width: 60%;
          height: 100%;
          background-color: var(--purePurple);
          transform: translate(75%, 35%);
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
          z-index: 1;
        }
      }
    }
  }
`;
