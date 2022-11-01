import { Files } from '../../Elements';
import styled from 'styled-components';

const { img4 } = Files;

export const MainContainer = styled.div`
  z-index: 1;
  width: 100%;
  height: calc(100vh - 4rem + 5px);
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url(${img4});
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  .middle {
    width: max-content;
    background: var(--charcoal);
    border-radius: 5px;
    padding-right: 0.3em;

    h1 {
      font-size: 2.5em;
      font-family: var(--typingFont);
      color: white;
      position: relative;
      font-weight: 100;
      width: max-content;

      @media (max-width: 900px) {
        font-size: 1.5em;
      }

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
        background: var(--charcoal);
        animation: typewriter 4s steps(23) 1s forwards;
      }

      &::after {
        z-index: 100;
        width: 0.125em;
        background: white;
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
    bottom: 4rem;

    svg {
      fill: white;
      width: 40px;
      height: 40px;
    }

    span {
      display: none;
      padding-top: 0.5rem;
      font-size: 2rem;
      font-family: var(--displayFont);
      font-weight: 900;
      color: white;
    }
  }
`;
