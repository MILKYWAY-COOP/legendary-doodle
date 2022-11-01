import styled from 'styled-components';
import { Files } from '../../Elements';

const { list, close } = Files;

export const NavbarContainer = styled.div`
  position: relative;
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

    .mobile-nav-toggle {
      display: none;
      outline: none;
      border: none;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
    }

    .navLinks {
      margin-right: 2rem;
      position: relative;

      .dropdownBackground {
        z-index: 9999;
        width: 100px;
        height: 100px;
        position: absolute;
        background: var(--brightRed);
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
          background: var(--brightRed);
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
        padding: 0.5rem;

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

          span {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 0.35rem;
          }

          &:hover {
            span {
              color: var(--brightRed);
            }
          }

          .dropdown {
            opacity: 0;
            position: absolute;
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
                font-size: 1.2rem;
                height: 2rem;
                width: 100%;
                text-overflow: clip;
                padding: 10px 0;
                transition: all 0.2s ease;
                color: var(--cloud);

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
          background-color: var(--purePurple);
          padding: 0.8rem;
          border-radius: 0.2rem;
          color: var(--cloud);
          cursor: pointer;
        }
      }
    }

    @media (max-width: 900px) {
      .mobile-nav-toggle {
        position: absolute;
        display: block;
        z-index: 9999;
        background-color: var(--purePurple);
        background-image: url(${list});
        background-repeat: no-repeat;
        background-position: center;
        width: 2.5em;
        height: 2.5em;
        border-radius: 35%;
        padding: 10px;
        right: 20px;
      }

      .mobile-nav-toggle[aria-expanded='true'] {
        background-image: url(${close});
      }

      .navLinks {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        height: fit-content;
        position: fixed;
        text-align: center;
        z-index: 9000;
        right: 0;
        top: 0;
        list-style: none;
        padding: 2rem;
        flex-direction: column;
        transform: translateX(115%);
        transition: transform 0.7s ease-in-out;
        width: fit-content;
        background-color: var(--cloud);
        backdrop-filter: blur(5px);
        border-radius: 10px;
        margin: 0;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

        .dropdownBackground {
          display: none;
        }

        ul {
          display: flex;
          flex-direction: column;
          z-index: 9999;
          width: 200px;
          position: static;

          li {
            width: 100%;
            padding: 0.5rem 0;
            display: flex;
            flex-direction: column;

            span {
              position: static;
              width: 100%;
              height: 70px;
              text-align: left;
              display: inline;
              font-size: 2rem;
              color: var(--brightRed);
              text-decoration: underline;

              .dropper {
                display: none;
              }
            }

            .dropdown {
              display: flex;
              opacity: 1;
              padding: 10px;

              .supporters,
              .involved,
              .about {
                position: static;
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                /* padding: 10px; */

                .text {
                  width: 100%;
                  height: 25px;
                  font-size: 1rem;
                  text-align: left;
                  padding-left: 10px;
                  color: black;
                }
              }
            }
          }

          #donate {
            position: static;
            width: 100%;
            padding: 0;
            height: 2rem;
            margin-top: 3rem;
            font-size: 2rem;
            text-align: left;
            background: none;
            text-decoration: underline;
            color: var(--brightRed);
          }

          #contact {
            color: var(--brightRed);
            text-align: left;
            font-size: 2rem;
            text-decoration: underline;
          }
        }
      }

      .navLinks[data-visible='true'] {
        transform: translateX(0%);
      }
    }
  }
`;
