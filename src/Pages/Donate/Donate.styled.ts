import styled from 'styled-components';
import { Files } from '../../Elements';

const { mpesa } = Files;

export const DonateContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 4rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 2rem;
  background-color: var(--purePurple);
  font-family: var(--mainFont);
  color: var(--cloud);

  .img {
    height: 200px;
    width: 250px;
    background-image: url(${mpesa});
    z-index: 8000;
  }

  h4 {
    font-size: 30px;
    text-align: center;
  }

  p {
    text-align: center;
    font-size: 20px;
    margin-top: 5rem;
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
