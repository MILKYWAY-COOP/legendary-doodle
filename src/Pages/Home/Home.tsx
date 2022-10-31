import { HomeContainer } from './Home.styled';
import { Navbar, Map, Main, About, Footer } from '../../Components';

export const Home = () => {
  return (
    <HomeContainer>
      <Navbar />
      <Main />
      <div className='bottom'>
        <h1>About Koimbi Children's Home</h1>
        <div className='MapAbout'>
          <About />
          <Map />
        </div>
        <div className='curve'></div>
      </div>
      <Footer />
    </HomeContainer>
  );
};

export default Home;
