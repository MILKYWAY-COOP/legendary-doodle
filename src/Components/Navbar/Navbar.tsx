import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Dropper from './Components/Dropper';
import { listItemsIterator, Coordinates } from './Components/helpers';

import { NavbarContainer } from './Navbar.styled';

export default function Navbar() {
  const [coordinates, setCoordinates] = useState<Coordinates>({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  });

  const navRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const mobileToggleRef = useRef<HTMLButtonElement>(null);

  const nav = navRef.current;
  const mobileToggle = mobileToggleRef?.current;

  const navigate = useNavigate();

  useEffect(() => {
    const listChildren = listRef.current?.children;

    if (listChildren) {
      const list = Array.from(listChildren);
      listItemsIterator({
        list,
        window,
        backgroundRef,
        setCoordinates,
        nav
      });
    }
  }, [listRef, nav]);

  const closeNav = () => {
    nav?.setAttribute('data-visible', 'false');
    mobileToggle?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = 'scroll';
  };

  const toggleMenu = () => {
    const visible = nav?.getAttribute('data-visible');

    if (visible !== 'false') return closeNav();

    mobileToggle?.setAttribute('aria-expanded', 'true');
    nav?.setAttribute('data-visible', 'true');
    document.body.style.overflow = 'hidden';
  };

  const navigateAndToggle = (path: string) => {
    navigate(path);
    toggleMenu();
  };

  return (
    <NavbarContainer>
      <nav>
        <div className="logo" onClick={() => navigate('/')}>
          <div>
            {'KOIMBI'.split('').map((letter, index) => (
              <span key={index}>{letter}</span>
            ))}
          </div>
          <span>CHILDRENS HOME</span>
        </div>

        <button
          ref={mobileToggleRef}
          onClick={toggleMenu}
          className="mobile-nav-toggle"
          aria-expanded="false"
        />

        <div className="navLinks" ref={navRef} data-visible="false">
          <div
            className="dropdownBackground"
            ref={backgroundRef}
            style={{
              width: `${coordinates.width}px`,
              height: `${coordinates.height}px`,
              transform: `translate(${coordinates.left}px, ${coordinates.top}px)`
            }}
          >
            <span className="arrow" />
          </div>
          <ul ref={listRef}>
            <li>
              <span>
                About
                <Dropper />
              </span>
              <div className="dropdown dropdown1">
                <div className="about">
                  <div
                    className="text"
                    onClick={() => navigateAndToggle('/our-team')}
                  >
                    The Team
                  </div>
                </div>
              </div>
            </li>

            <li>
              <span>
                Get Involved
                <Dropper />
              </span>
              <div className="dropdown dropdown2">
                <div className="involved">
                  <div
                    className="text"
                    onClick={() => navigateAndToggle('/why-donate')}
                  >
                    Why Donate?
                  </div>
                  <div
                    className="text"
                    onClick={() => navigateAndToggle('/wish-list')}
                  >
                    Wish List
                  </div>
                </div>
              </div>
            </li>

            <li>
              <span>
                Supporters
                <Dropper />
              </span>
              <div className="dropdown dropdown3">
                <div className="supporters">
                  <div
                    className="text"
                    onClick={() => navigateAndToggle('/individual-supporters')}
                  >
                    Individual Supporters
                  </div>
                  <div
                    className="text"
                    onClick={() => navigateAndToggle('/business-supporters')}
                  >
                    Business Supporters
                  </div>
                  <div
                    className="text"
                    onClick={() => navigateAndToggle('/donate')}
                  >
                    Church Supporters
                  </div>
                </div>
              </div>
            </li>

            <li
              id="donate"
              className="not"
              onClick={() => navigateAndToggle('/donate')}
            >
              DONATE
            </li>
            <li
              id="contact"
              className="not"
              onClick={() => navigateAndToggle('/contact-us')}
            >
              Contact Us
            </li>
          </ul>
        </div>
      </nav>
    </NavbarContainer>
  );
}
