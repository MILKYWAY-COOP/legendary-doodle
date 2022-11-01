import styled from 'styled-components';

export const ContactContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 4rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 2rem;
  background-color: var(--purePurple);
  font-family: var(--mainFont);
  color: var(--cloud);

  h1 {
    font-size: 2.5rem;
  }

  p {
    font-size: 1.2rem;
  }

  h3 {
    font-size: 1.5rem;
    text-decoration: underline;
    margin-top: 1em;
  }

  h4 {
    margin-top: 0.5em;
    padding-left: 0.5em;
  }

  .bottom {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 100%;
    gap: 40px;
    > * {
      flex: 1;
    }
  }

  @media (max-width: 500px) {
    .bottom {
      flex-direction: column;

      .right, .left {
        width: 100%;
        display: flex;
        flex-direction: column;
      }
    }

    p {
      width: 100%;
      text-align: left;
      font-size: 1.2rem;
    }

    h3 {
      width: 100%;
      font-size: 1.5rem;
      text-align: left;
      text-decoration: underline;
      margin-top: 1em;
    }

    h4 {
      width: 100%;
      margin-top: 0.5em;
      padding-left: 0.5em;
      text-align: left;
    }

    span {
      width: 100%;
      padding-left: 1em;
    }
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
