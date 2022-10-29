import styled from 'styled-components';

export const AboutContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-family: var(--mainFont);
    font-size: 3rem;
  }

  .bottom {
    width: 100%;

    .accordion {
      display: flex;
      margin: 60px auto;
      width: 400px;

      li {
        list-style: none;
        width: 100%;
        height: 100%;
        margin: 20px;
        padding: 10px;
        border-radius: 8px;
        background-color: var(--lightBlue);
        box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.3),
          -6px -6px 10px -1px rgba(223, 223, 45, 0.15);
        font-family: var(--mainFont);

        label {
          display: flex;
          align-items: center;
          padding: 10px;
          font-size: 18px;
          font-weight: 900;
          cursor: pointer;

          &::before {
            content: '+';
            margin-right: 10px;
            font-size: 24px;
            font-weight: 900;
          }
        }

        input[type='radio'] {
          display: none;

          &:checked + label + .content {
            max-height: fit-content;
            padding: 5px;
          }
        }

        .content {
          color: var(--purePurple);
          padding: 0 10px;
          line-height: 20px;
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.5s, padding 0.5s;
        }
      }
    }
  }
  .accordion input[type='radio']:checked + label + .content {
    max-height: 400px;
    padding: 10px 10px 20px;
  }
`;
