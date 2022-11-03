import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavbarContainer } from './Navbar.styled';

const Navbar = () => {
  const [list, setList] = useState<Element[]>([]);
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [top, setTop] = useState<number>(0);
  const [left, setLeft] = useState<number>(0);

  const navRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const mobileToggleRef = useRef<HTMLButtonElement>(null);

  const background = backgroundRef.current;
  const nav = navRef.current;
  const mobileToggle = mobileToggleRef?.current;

  const navigate = useNavigate();

  const { innerWidth } = window;

  list.forEach((listItem) => {
    if (listItem.className !== 'not' && innerWidth > 900) {
      listItem.addEventListener('mouseenter', (e) => {
        const target = e.target as HTMLElement;
        const dropdown = target.querySelector('.dropdown') as HTMLElement;
        const dropdownCoords = dropdown?.getBoundingClientRect();
        const navCoords = nav?.getBoundingClientRect();
        const left = navCoords ? navCoords.left : 0;

        const coords = {
          height: dropdownCoords.height,
          width: dropdownCoords.width,
          top: dropdownCoords.top,
          left: dropdownCoords.left - left
        };

        setWidth(coords.width);
        setHeight(coords.height);
        setTop(coords.top);
        setLeft(coords.left);

        // background?.style.setProperty('width', `${coords.width}px`);
        // background?.style.setProperty('height', `${coords.height}px`);
        // background?.style.setProperty(
        //   'transform',
        //   `translate(${coords.left}px, ${coords.top}px)`
        // );

        target.classList.add('trigger-enter');
        setTimeout(() => {
          target.classList.contains('trigger-enter') &&
            target.classList.add('trigger-enter-active');
        }, 150);
        background?.classList.add('open');
      });

      listItem.addEventListener('mouseleave', (e) => {
        const target = e.target as HTMLElement;
        target.classList.remove('trigger-enter', 'trigger-enter-active');
        background?.classList.remove('open');
      });
    }
  });

  useEffect(() => {
    const listChildren = listRef.current?.children;
    if (listChildren) {
      const listChildrenArray = Array.from(listChildren);
      setList(listChildrenArray);
    }
  }, [listRef]);

  function closeNav() {
    nav?.setAttribute('data-visible', 'false');
    mobileToggle?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = 'scroll';
  }

  function toggleMenu() {
    const visible = nav?.getAttribute('data-visible');
    if (visible === 'false') {
      mobileToggle?.setAttribute('aria-expanded', 'true');
      nav?.setAttribute('data-visible', 'true');
      document.body.style.overflow = 'hidden';
    } else {
      closeNav();
    }
  }

  return (
    <NavbarContainer>
      <nav>
        <div className='logo' onClick={() => navigate('/')}>
          <div>
            <span>K</span>
            <span>O</span>
            <span>I</span>
            <span>M</span>
            <span>B</span>
            <span>I</span>
          </div>
          <span>CHILDRENS HOME</span>
        </div>

        <button
          ref={mobileToggleRef}
          onClick={toggleMenu}
          className='mobile-nav-toggle'
          aria-expanded='false'
        ></button>

        <div className='navLinks' ref={navRef} data-visible='false'>
          <div
            className='dropdownBackground'
            ref={backgroundRef}
            style={{
              width: `${width}px`,
              height: `${height}px`,
              transform: `translate(${left}px, ${top}px)`
            }}
          >
            <span className='arrow'></span>
          </div>
          <ul ref={listRef}>
            <li>
              <span>
                About
                <div className='dropper'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='currentColor'
                    className='bi bi-caret-down-fill'
                    viewBox='0 0 16 16'
                  >
                    <path d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z' />
                  </svg>
                </div>
              </span>
              <div className='dropdown dropdown1'>
                <div className='about'>
                  <div className='text' onClick={() => navigate('/our-team')}>
                    The Team
                  </div>
                </div>
              </div>
            </li>

            <li>
              <span>
                Get Involved
                <div className='dropper'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='currentColor'
                    className='bi bi-caret-down-fill'
                    viewBox='0 0 16 16'
                  >
                    <path d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z' />
                  </svg>
                </div>
              </span>
              <div className='dropdown dropdown2'>
                <div className='involved'>
                  <div className='text' onClick={() => navigate('/why-donate')}>
                    Why Donate?
                  </div>
                  <div className='text' onClick={() => navigate('/wish-list')}>
                    Wish List
                  </div>
                </div>
              </div>
            </li>

            <li>
              <span>
                Supporters
                <div className='dropper'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='currentColor'
                    className='bi bi-caret-down-fill'
                    viewBox='0 0 16 16'
                  >
                    <path d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z' />
                  </svg>
                </div>
              </span>
              <div className='dropdown dropdown3'>
                <div className='supporters'>
                  <div
                    className='text'
                    onClick={() => navigate('/individual-supporters')}
                  >
                    Individual Supporters
                  </div>
                  <div
                    className='text'
                    onClick={() => navigate('/business-supporters')}
                  >
                    Business Supporters
                  </div>
                  <div
                    className='text'
                    onClick={() => navigate('/church-supporters')}
                  >
                    Church Supporters
                  </div>
                </div>
              </div>
            </li>

            <li id='donate' className='not' onClick={() => navigate('/donate')}>
              DONATE
            </li>
            <li
              id='contact'
              className='not'
              onClick={() => navigate('/contact-us')}
            >
              Contact Us
            </li>
          </ul>
        </div>
      </nav>
    </NavbarContainer>
  );
};

export default Navbar;
