import styled from 'styled-components';

export const AboutContainer = styled.div`
  width: 100%;
  height: 100%;
  z-index: 9999;

  .bottom {
    display: flex;
    flex-direction: column;
    align-items: center;

    .accordion {
      align-items: center;
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 1em;

      li {
        list-style: none;
        width: 100%;
        padding: 10px;
        border-radius: 8px;
        background-color: var(--lightBlue);
        box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.3),
          -6px -6px 10px -1px rgba(223, 223, 45, 0.15);
        font-family: var(--mainFont);

        label {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px;
          font-size: 18px;
          font-weight: 900;
          cursor: pointer;

          @media (max-width: 500px) {
            font-size: 16px;
            padding: 5px;
          }

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
          height: 170px;
          padding: 0 10px;
          line-height: 20px;
          max-height: 0;
          overflow: hidden;
          transition: padding 0.5s, max-height 0.5s;

          @media (max-width: 500px) {
            height: 250px;
          }

          p {
            text-align: left;
          }
        }
      }
    }
  }

  .accordion input[type='radio']:checked + label + .content {
    max-height: 400px;
    padding: 10px 10px 20px;
  }

  .accordion input[type='radio']:checked + label::before {
    content: '-';
  }
`;
