import React from 'react'
import AboutImg from '../assets/img/photo2.jpg'

const About = () => {
  return (
    <section className='w-screen my-10 scroll-smooth flex flex-col md:flex-row justify-center items-center align-middle h-full mx-auto container'  id='About'>
      {/* <img className='rounded-lg w-full' src={AboutImg} alt="" /> */}
      <div className='flex flex-row items-center align-top justify-center m-4'>
        {/* Company description */}
      <p className='text-center text-opacity-50 font-normal text-[25px] leading-relaxed  my-[10px]'>At Jiro Homes and Investment Limited, we are passionate  about helping our clients achieve their real estate goals. As a leading real estate company, we specialize in providing a range of services to both individual and corporate clients. 
      Whether you are a first-time buyer, an experienced investor, or looking for commercial or residential properties, we have the expertise 
      to help you find the right solution. Our team of experienced professionals understands the local real estate market and has the 
      knowledge and expertise to help you navigate the often complex and overwhelming process of buying or selling a property.
      We offer a range of services including property sales, rentals, property management, investment advisory, and valuation. We strive to 
      provide exceptional customer service, so you can feel confident that you are in good hands every step of the way.
      Our core values include integrity, professionalism, and excellence. We are dedicated to providing our clients with a seamless 
      experience and ensuring that they receive the best possible outcome. Our focus is on building long-term relationships with our clients, 
      so we can continue to provide quality services for years to come.
      At Jiro Homes and Investment Limited, our goal is to exceed your expectations and make your real estate dreams a reality. Contact us 
      today to find out how we can help you achieve your real estate goals
      '</p>
      </div>
    </section>
  )
}

export default About