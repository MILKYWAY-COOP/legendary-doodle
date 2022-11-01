import styled from 'styled-components';
import { Files } from '../../Elements';

const { board } = Files;

export const IndividualContainer = styled.div`
  width: 100vw;
  min-height: calc(100vh - 65px);
  background-image: url(${board});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
  gap: 1em;

  h1 {
    font-family: var(--mainFont);
    font-size: 2rem;
    color: var(--cloud);
    text-align: center;
    padding: 0.5em;
    background: var(--brightRed);
    border-radius: 0.4rem;

    @media (max-width: 900px) {
      font-size: 2rem;
    }

    @media (max-width: 500px) {
      font-size: 1.5rem;
    }
  }

  table {
    font-family: var(--handWritingFont);
    background-color: white;
    border-radius: 0.4rem;
    width: 900px;
    font-size: 1.5rem;

    tbody {
      list-style-position: inside;

      tr {
        width: 100%;
        align-items: center;

        td {
          padding: 0.2em;
          text-align: center;
          border: 1px solid var(--brightRed);
          border-radius: 3px;
          transition: all 0.2s ease;

          &:hover {
            background-color: var(--brightRed);
          }
        }
      }
    }

    @media (max-width: 900px) {
      width: calc(100vw - 10%);
      font-size: 1.5rem;
    }

    @media (max-width: 800px) {
      width: calc(100vw - 10%);
      font-size: 1.5rem;
    }

    @media (max-width: 700px) {
      width: calc(100vw - 10%);
      font-size: 1.4rem;
    }

    @media (max-width: 600px) {
      width: calc(100vw - 10%);
      font-size: 1.4rem;
    }

    @media (max-width: 500px) {
      width: calc(100vw - 10%);
      font-size: 1.4rem;
    }

    @media (max-width: 400px) {
      width: calc(100vw - 10%);
      font-size: 1.3rem;
    }
  }
`;
