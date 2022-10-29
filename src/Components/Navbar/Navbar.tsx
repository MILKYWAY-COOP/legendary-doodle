import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavbarContainer } from './Navbar.styled';

const Navbar = () => {
  const [list, setList] = useState<Element[]>([]);

  const navRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  const background = backgroundRef.current;
  const nav = navRef.current;

  const navigate = useNavigate();

  list.forEach((listItem) => {
    if (listItem.className === 'not') return;
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

      background?.style.setProperty('width', `${coords.width}px`);
      background?.style.setProperty('height', `${coords.height}px`);
      background?.style.setProperty(
        'transform',
        `translate(${coords.left}px, ${coords.top}px)`
      );

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
  });

  useEffect(() => {
    const listChildren = listRef.current?.children;
    if (listChildren) {
      const listChildrenArray = Array.from(listChildren);
      setList(listChildrenArray);
    }
  }, [listRef]);

  return (
    <NavbarContainer>
      <nav>
        <div className='logo'>
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

        <div className='navLinks' ref={navRef}>
          <div className='dropdownBackground' ref={backgroundRef}>
            <span className='arrow'></span>
          </div>

          <ul ref={listRef}>
            <li>
              <span>
                About Us
                <div>
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
                    Our Team
                  </div>
                  <div className='text' onClick={() => navigate('/directors')}>
                    Directors
                  </div>
                </div>
              </div>
            </li>

            <li>
              <span>
                Get Involved
                <div>
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
                <div>
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

            <li id='donate' className='not'>
              DONATE
            </li>
            <li className='not'>Contact Us</li>
          </ul>
        </div>
      </nav>
    </NavbarContainer>
  );
};

export default Navbar;
