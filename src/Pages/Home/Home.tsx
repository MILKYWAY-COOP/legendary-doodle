import { HomeContainer } from './Home.styled';
import { Map, Main, About } from '../../Components';

export const Home = () => {
  return (
    <HomeContainer>
      <Main />
      <div className='bottom'>
        <h1>About Koimbi Children's Home</h1>
        <div className='MapAbout'>
          <About />
          <Map />
        </div>
        <div className='curve'></div>
      </div>
    </HomeContainer>
  );
};

export default Home;
