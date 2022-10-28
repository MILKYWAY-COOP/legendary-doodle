import styled from 'styled-components';

export const MainContainer = styled.div`
  z-index: 1;
  width: 100%;
  height: calc(100vh - 64px);
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url('imgs/img4.JPG');
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  .middle {
    width: max-content;
    background: var(--purpleTingedGrey);
    border-radius: 5px;
    padding-right: 0.3em;

    h1 {
      font-size: 2.5rem;
      font-family: var(--typingFont);
      color: var(--cloud);
      position: relative;
      font-weight: 100;
      width: max-content;

      &::before,
      &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }

      &::before {
        z-index: 100;
        background: var(--purpleTingedGrey);
        animation: typewriter 4s steps(23) 1s forwards;
      }

      &::after {
        z-index: 100;
        width: 0.125em;
        background: var(--cloud);
        animation: typewriter 4s steps(23) 1s forwards,
          blink 500ms steps(23) infinite;
      }

      @keyframes typewriter {
        to {
          left: 100%;
        }
      }

      @keyframes blink {
        to {
          background: transparent;
        }
      }
    }
  }

  .down {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 2rem;

    svg {
      fill: var(--cloud);
      width: 30px;
      height: 30px;
    }

    span {
      padding-top: 0.5rem;
      font-size: 1.5rem;
      font-family: var(--displayFont);
      font-weight: 400;
      color: var(--cloud);
    }
  }
`;
