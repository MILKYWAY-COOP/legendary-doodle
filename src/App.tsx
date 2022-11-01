import { Route, Routes } from 'react-router-dom';
import {
  Wish,
  Team,
  Home,
  Individual,
  Church,
  Business,
  WDonate,
  Contact,
  Donate
} from './Pages';
import { Navbar, Footer } from './Components';
import './index.scss';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/our-team' element={<Team />} />
        <Route path='/wish-list' element={<Wish />} />
        <Route path='/why-donate' element={<WDonate />} />
        <Route path='/individual-supporters' element={<Individual />} />
        <Route path='/church-supporters' element={<Church />} />
        <Route path='/business-supporters' element={<Business />} />
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/donate' element={<Donate />} />
      </Routes>
      <Footer />
      <div className='milkyway'>
        <p>
          &copy;2022. A{' '}
          <a
            href='https://milkyway-coop.github.io/'
            target='_blank'
            rel='noopener noreferrer'
          >
            MILKYWAY
          </a>{' '}
          PRODUCTION. All rights reserved
        </p>
      </div>
    </div>
  );
}

export default App;
