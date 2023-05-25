// import logo from './logo.svg';
import './App.css';
import Navbar from './components/header/Navbar';
import Footer from './components/footer/footer';
import Contact from './components/contact/contact';
import About from './components/About/about'

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element ={<About/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    
    </>
  );
}

export default App;
