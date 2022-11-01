import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--brightRed);
  flex-wrap: wrap;
  padding: 1em 0;

  & > * {
    flex: 1;
    padding: 0 0 0 40px;
  }

  .logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    img {
      width: 30%;
      height: auto;
      z-index: 8000;
    }

    .text {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      color: var(--cloud);

      .name {
        width: 70%;
        font-family: var(--mainFont);
        display: flex;
        align-items: center;
        gap: 10px;

        span {
          font-size: 2.5rem;
        }
      }

      span {
        width: 100%;
        font-size: 1.5rem;
        font-family: var(--mainFont);
        text-align: center;
      }
    }
  }

  .support,
  .contact,
  .do {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    font-family: var(--mainFont);
    color: var(--cloud);
    height: 100%;
    z-index: 8000;

    h5 {
      width: 100%;
      font-size: 1.5rem;
      text-align: left;
    }

    p {
      width: 100%;
      font-size: 1rem;
      text-align: left;
    }

    .Link {
      font-size: 1rem;
      width: 100%;
      font-size: 1rem;
      text-align: left;
      color: var(--cloud);
      text-decoration: underline;

      &:hover {
        text-decoration: none;
      }
    }
  }

  @media (max-width: 900px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    padding: 15px;

    .support,
    .contact,
    .do {
      h5,
      p,
      .Link {
        text-align: center;
      }
    }
  }

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    gap: 20px;

    .logo {
      align-items: flex-start;

      .text {
        width: 100%;
        align-items: flex-start;

        span {
          text-align: left;
        }
      }
    }

    .support,
    .contact,
    .do {
      width: 100%;
      h5,
      p,
      .Link {
        text-align: left;
      }
    }
  }
`;
