import { ContactContainer } from './Contact.styled';

const Contact = () => {
  return (
    <ContactContainer>
      <h1>Contact Us</h1>
      <p>
        We appreciate your support. Please contact us if you have any questions
        about our program or how you might be able to help by supporting us.
      </p>
      <div className='bottom'>
        <div className='left'>
          <h3>Telephone</h3>
          <h4>Person 1</h4>
          <span>#########</span>
          <h4>Person 2</h4>
          <span>#########</span>
        </div>
        <div className='right'>
          <h3>Mail</h3>
          <h4>Email 1</h4>
          <span>############@gmail.com</span>
          <h4>Email 2</h4>
          <span>############@gmail.com</span>
        </div>
      </div>
      <div className='curve'></div>
    </ContactContainer>
  );
};

export default Contact;
