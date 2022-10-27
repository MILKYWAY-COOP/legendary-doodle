import { useRef } from 'react';
import Styles from './Navbar.module.scss';

const Navbar = () => {
  const listRefs = useRef([]);

  console.log(listRefs);

  return (
    <nav>
      <div className={Styles.logo}>
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
      <div className={Styles.navLinks}>
        <div className={Styles.dropDownBackground}>
          <span className={Styles.arrow}></span>
        </div>
        <ul>
          <li ref={listRefs}>
            <a>About Us</a>
          </li>
          <li ref={listRefs}>Get Involved</li>
          <li ref={listRefs}>Supporters</li>
          <li id={Styles.donate} ref={listRefs}>
            DONATE
          </li>
          <li ref={listRefs}>Contact Us</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
