import styled from 'styled-components';

export const NavbarContainer = styled.div`
  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    width: 100vw;
    height: 4rem;
    background-color: var(--cloud);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

    .logo {
      cursor: pointer;
      margin-left: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      > *:first-child {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        font-family: var(--displayFont);
        font-size: 1.5rem;
        color: var(--purpleTingedGrey);
      }

      > *:last-child {
        font-family: var(--displayFont);
        font-size: 1rem;
        color: var(--purpleTingedGrey);
      }
    }

    .navLinks {
      margin-right: 2rem;
      position: relative;

      .dropdownBackground {
        z-index: 9999;
        width: 100px;
        height: 100px;
        position: absolute;
        background: #fff;
        border-radius: 4px;
        box-shadow: 0 50px 100px rgba(50, 50, 93, 0.1),
          0 15px 35px rgba(50, 50, 93, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1);
        transition: all 0.3s, opacity 0.1s, transform 0.2s;
        transform-origin: 50% 0;
        display: flex;
        opacity: 0;

        &.open {
          opacity: 1;
        }

        .arrow {
          position: absolute;
          width: 20px;
          height: 20px;
          display: block;
          background: white;
          transform: translateY(-50%) rotate(45deg);
          left: 20%;
        }
      }

      ul,
      .ul {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 0.5rem;

        li {
          position: relative;
          height: 100%;
          padding: 0.5rem;
          list-style: none;
          font-family: var(--navFont);
          font-size: 1.2rem;
          color: var(--purpleTingedGrey);
          cursor: pointer;
          border-radius: 0.2rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          transition: all 0.2s ease;

          &:hover {
            span {
              color: var(--brightRed);
            }
          }

          .dropdown {
            opacity: 0;
            position: absolute;
            overflow: hidden;
            padding: 20px;
            top: -70px;
            border-radius: 2px;
            transition: all 0.5s;
            transform: translateY(100px);
            will-change: opacity;
            display: none;
            flex-direction: column;
            justify-content: center;
            height: auto;
            z-index: 9999;

            .about,
            .involved,
            .supporters {
              height: inherit;
              display: flex;
              flex-direction: column;
              justify-content: space-evenly;

              .text {
                font-family: var(--displayFont);
                font-size: 1.2rem;
                height: 2rem;
                width: 100%;
                text-overflow: clip;
                padding: 10px 0;
                transition: all 0.2s ease;

                &:hover {
                  text-decoration: underline;
                  cursor: pointer;
                }
              }
            }

            .about {
              min-width: 100px;
            }

            .involved {
              min-width: 150px;
            }

            .supporters {
              min-width: 200px;
            }
          }
        }

        .trigger-enter {
          .dropdown {
            display: flex;
          }
        }

        .trigger-enter-active {
          .dropdown {
            opacity: 1;
          }
        }

        #donate {
          background-color: var(--brightRed);
          padding: 0.5rem 1rem;
          border-radius: 0.2rem;
          color: var(--cloud);
        }
      }
    }
  }
`;
