import React from 'react';

// import components
import Banner from '../components/Banner';
import WhyChooseUs from '../components/WhyChooseUs';
import Services from '../components/Services';
import Contact from '../components/Contact';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Missions from '../components/Missions';

const Home = () => {
  return (
    <div className='h-full w-full'>
      <Banner />
      <About />
      <Missions />
      <Services />
      <Gallery />
      <Contact />
    </div>
  )
};

export default Home;
