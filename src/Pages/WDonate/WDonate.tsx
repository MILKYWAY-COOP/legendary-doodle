import { useNavigate } from 'react-router-dom';
import { WDonateContainer } from './WDonate.styled';

const WDonate = () => {
  const navigate = useNavigate();

  return (
    <WDonateContainer>
      <h1>Why Donate?</h1>
      <p>
        At Koimbi Children's Home, we believe that a child{' '}
        <strong>NEVER</strong> deserves to be mistreated or degraded, and that
        it is the community's responsibility to step in and provide{' '}
        <strong>safety, care, and compassion</strong> if such mistreatment is
        discovered.
      </p>
      <p>
        Every day, our staff provides care for abused and neglected children.
        Every day, we see the consequences of these traumas. We see children who
        refuse to believe they have worth because they have been mistreated for
        so long. We see children who have unhealthy coping mechanisms and walls
        built up around them. We see them as young men and women who have not
        been taught how to be adults or handle adult responsibilities. It is our
        responsibility to do everything in our power to help them learn positive
        coping strategies, teach success strategies, and help them see their own
        worth.
      </p>
      <p>
        Unfortunately, many of these aspects of care have monetary costs
        associated with them. KCH can barely meet the basic needs of food,
        shelter, and clothing; and to go beyond that, to truly make a difference
        in these precious lives, we rely on the generosity of our community. Our
        ultimate goal is to break the cycle of poverty and abuse one child at a
        time. We can only do so much on our own, but with your help, we can make
        significant progress toward ending victimization and hardship.
      </p>

      <h1>Ways To Donate</h1>
      <div>
        <h3>Monetary Donations</h3>
        <p>
          Your contribution to Koimbi Children's Home is greatly appreciated!
          Your contribution allows us to plan activities, raise awareness,
          maintain our home, and meet the many needs that come with housing
          kids. Donations of any size can make a significant difference in the
          lives of the kids in our care! Donate by clicking{' '}
          <span onClick={() => navigate('/donate')}>here</span>.
        </p>
      </div>
      <div className='wish'>
        <h3>Our Wish List</h3>
        <p>
          Visit our wish list page to see what we're looking for. The majority
          of the items on our wish list are common household items; with
          approximately (###) children and teenagers living under one roof, we
          go through a lot of basic supplies. Having these supplies donated
          allows us to spend money on ensuring that each child has a diverse
          range of valuable life experiences. Please do not hesitate to contact
          us if you have any questions about donations or items on our wishlist!
          Donations can be dropped off at our Murang'a office.
        </p>
      </div>
      <div className='curve'></div>
    </WDonateContainer>
  );
};

export default WDonate;
