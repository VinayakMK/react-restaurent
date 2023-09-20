import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Price from './components/Price';
import Header from './components/Header';
import Footer from './components/Footer';
import RestaurantDetails from './components/RestaurantDetails';

function App() {
  return (
    <Router>
      <Header/>
      <main>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/price' element={<Price/>}/>
        <Route path='/restaurant/:id' element={<RestaurantDetails/>}/>
      </Routes>
      </main>
      <Footer/>
    </Router> 
  );
}

export default App;
