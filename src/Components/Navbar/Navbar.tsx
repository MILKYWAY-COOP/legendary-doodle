import { useRef } from 'react';
import { NavbarContainer } from './Navbar.styled';

const Navbar = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  const listChildren = listRef.current?.children;
  const background = backgroundRef.current;
  const nav = navRef.current;

  if (listChildren) {
    const listChildrenArray = Array.from(listChildren);

    listChildrenArray.forEach((listItem) => {
      listItem.addEventListener('mouseenter', (e) => {
        const target = e.target as HTMLElement;
        const dropdown = target.querySelector('.dropdown') as HTMLElement;
        const dropdownCoords = dropdown?.getBoundingClientRect();
        const navCoords = nav?.getBoundingClientRect();
        const top = navCoords ? navCoords.top : 0;
        const left = navCoords ? navCoords.left : 0;

        const coords = {
          height: dropdownCoords.height,
          width: dropdownCoords.width,
          top: dropdownCoords.top - top,
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
  }

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
              <span>About Us</span>
              <div className='dropdown dropdown1'>
                <div className='about'>
                  <div className='text'>Our Team</div>
                  <div className='text'>Directors</div>
                </div>
              </div>
            </li>

            <li>
              <span>Get Involved</span>
              <div className='dropdown dropdown2'>
                <div className='involved'>
                  <div className='text'>Why Donate?</div>
                  <div className='text'>Wish List</div>
                </div>
              </div>
            </li>

            <li>
              <span>Supporters</span>
              <div className='dropdown dropdown3'>
                <div className='supporters'>
                  <div className='text'>Individual Supporters</div>
                  <div className='text'>Business Supporters</div>
                  <div className='text'>Churches Supporters</div>
                </div>
              </div>
            </li>

            <li id='donate'>DONATE</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </nav>
    </NavbarContainer>
  );
};

export default Navbar;
