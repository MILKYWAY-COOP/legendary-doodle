import { Link } from 'react-router-dom';
import { FooterContainer } from './Footer.styled';
import Logo from './hold.svg';

export const Footer = () => {
  return (
    <FooterContainer>
      <div className='logo'>
        <img src={Logo} alt='logo' />
        <div className='text'>
          <div className='name'>
            <span>K</span>
            <span>O</span>
            <span>I</span>
            <span>M</span>
            <span>B</span>
            <span>I</span>
          </div>
          <span>CHILDRENS HOME</span>
        </div>
      </div>
      <div className='do'>
        <h5>What we do:</h5>
        <p>
          Provide a safe and supportive home for orphaned and abandoned children
          in Murang'a and her surrounding environs.
        </p>
      </div>

      <div className='support'>
        <h5>Our Supporters</h5>
        <Link to='/individual-supporters' className='Link'>
          Individual Supporters
        </Link>
        <Link to='/church-supporters' className='Link'>
          Church Supporters
        </Link>
        <Link to='/business-supporters' className='Link'>
          Business Supporters
        </Link>
      </div>
      <div className='contact'>
        <h5>Contact Us</h5>
        <p>Phone Number 1</p>
        <p>Phone Number 2</p>
        <p>P.O Box 1234 Murang'a</p>
      </div>
    </FooterContainer>
  );
};

export default Footer;
