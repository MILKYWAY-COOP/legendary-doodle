import { useState } from 'react';
import { AboutContainer } from './About.styled';

const About = () => {
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);

  const toggleChecked = (e: any) => {
    if (e.target.id === 'first') {
      setChecked1(true);
      setChecked2(false);
      setChecked3(false);
    } else if (e.target.id === 'second') {
      setChecked1(false);
      setChecked2(true);
      setChecked3(false);
    } else if (e.target.id === 'third') {
      setChecked1(false);
      setChecked2(false);
      setChecked3(true);
    }
  };

  return (
    <AboutContainer>
      <div className='bottom'>
        <ul className='accordion'>
          <li>
            <input
              type='radio'
              name='accordion'
              id='first'
              checked={checked1}
              onClick={toggleChecked}
            />
            <label htmlFor='first'>Who We Are</label>
            <div className='content'>
              <p>
                In the heart of Murang'a County, approximately 21kms from
                Murang'a Town, the ruins of what used to be the home of{' '}
                <a
                  href='https://en.wikipedia.org/wiki/Wangu_wa_Makeri'
                  target='_blank'
                >
                  Wangu wa Makeri.
                </a>{' '}
                In the late 1990’s a group of concerned citizens were inspired
                to turn this ruins into a home for needy and neglected children.
                In Month of Year that dream became a reality and the doors of
                Koimbi Children’s Home officially opened. To date KCH has is a
                safe haven to X children in need.
              </p>
            </div>
          </li>
          <li>
            <input
              type='radio'
              name='accordion'
              id='second'
              checked={checked2}
              onClick={toggleChecked}
            />
            <label htmlFor='second'>What We Do</label>
            <div className='content'>
              <p>
                Koimbi Children's Home exists to provide Hope, Security, and
                Opportunity to children aged 0 to 18 who have been victims of
                abuse and/or neglect in Murang'a County. We work hard to ensure
                that each child placed with us is provided with a safe, caring,
                healthy, and structured environment in which they have every
                opportunity to become successful adults.
              </p>
            </div>
          </li>
          <li>
            <input
              type='radio'
              name='accordion'
              id='third'
              checked={checked3}
              onClick={toggleChecked}
            />
            <label htmlFor='third'>How To Help</label>
            <div className='content'>
              <p>
                Your support allows us to go far beyond basic care for each
                young child placed in our home. Monetary donations can be made
                through this link or by mail. Gently used clothing or items on
                our wish list can be placed in our donation bin or brought to
                the home during business hours. If you have any questions about
                brightening the lives of the children in our care please feel
                free to contact us!
              </p>
            </div>
          </li>
        </ul>
      </div>
    </AboutContainer>
  );
};

export default About;
