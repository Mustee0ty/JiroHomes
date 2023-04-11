import React from 'react';

//import image
import Image from '../assets/img/photo1.jpg'

const Banner = () => {
  return <section className='h-full max-h-[640] mb-8 pt-[100px] w-screen md:pt-0 xl:mb-24' id='Hero'>
    <div className='flex flex-col lg:flex-row'>
      <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
      <h1 className='text-5xl lg:text-[70px] font-bold text-primary sm:mt-20 leading-none mb-6'>
          <span className='text-[#CC9933]' >Jiro</span>Homes
        </h1>
        <h1 className='text-4xl lg:text-[58px] font-semibold text-[#CC9933] leading-none mb-6'>
          <span className='text-primary' >Making</span> Your dream home a reality
        </h1>
      </div>
      {/* image */}
      <div className='hidden flex-1 lg:flex justify-end items-end' data-aos='fade-left' aos-delay-delay='600'>
        <img className='rounded-md' src={Image} alt="" />
      </div>
    </div>
  </section>;
};

export default Banner;
