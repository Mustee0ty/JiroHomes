import React from 'react';

// import animate on scroll
import Aos from 'aos';
import 'aos/dist/aos.css'


// import routes and route
import { Routes, Route } from 'react-router-dom'

// import components
import Header from './components/Header';
import Footer from './components/Footer';

// import Pages
import Home from './pages/Home';


const App = () => {

   // aos initialization
   Aos.init({
    duration: 1800,
    offset: 0,
  })

  return (
      <div className='flex flex-wrap maxw-screen-lg overflow-x-hidden mx-auto'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
      </div>
  )
};

export default App;
