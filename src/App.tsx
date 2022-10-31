import { Route, Routes } from 'react-router-dom';
import {
  Wish,
  Team,
  Home,
  Individual,
  Church,
  Business,
  WDonate,
  Directors
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
        <Route path='/directors' element={<Directors />} />
        <Route path='/wish-list' element={<Wish />} />
        <Route path='/why-donate' element={<WDonate />} />
        <Route path='/individual-supporters' element={<Individual />} />
        <Route path='/church-supporters' element={<Church />} />
        <Route path='/business-supporters' element={<Business />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
