import { AboutContainer } from './About.styled';

const About = () => {
  return (
    <AboutContainer>
      <h1>About Koimbi Children's Home</h1>
      <div className='bottom'>
        <ul className='accordion'>
          <li>
            <input type='radio' name='accordion' id='first' />
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
            <input type='radio' name='accordion' id='second' />
            <label htmlFor='second'>Who We Are</label>
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
        </ul>
      </div>
    </AboutContainer>
  );
};

export default About;
