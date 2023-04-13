import { useState,useRef } from 'react'
import emailjs from '@emailjs/browser';


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1omnjes', 'template_ez87hvn', form.current, 'db--MMosc9Ag_WeqX')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <section className="py-16 bg-gray-200 scroll-smooth" id='Contact'>
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-8">Contact Us</h2>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 mb-8 md:mb-0">
          <h3 className="text-lg font-bold mb-2">Address</h3>
          <p className="text-gray-700">3 Miracle Ave, Sangotedo Lagos
          </p>
          <p className="text-gray-700">Lagos State, Nigeria</p>
        </div>
        <div className="md:w-1/3 mb-8 md:mb-0">
          <h3 className="text-lg font-bold mb-2">Phone</h3>
          <p className="text-gray-700">(+234), 902 611 7053 </p>
        </div>
        <div className="md:w-1/3">
          <h3 className="text-lg font-bold mb-2">Email</h3>
          <p className="text-gray-700">jirohomesinvestment@gmail.com</p>
        </div>
      </div>
      <div className="flex mt-8">
        <a href="#" className="text-gray-700 hover:text-gray-900 mr-4">
          <i className="fab fa-facebook-square fa-2x"></i>
        </a>
        <a href="#" className="text-gray-700 hover:text-gray-900 mr-4">
          <i className="fab fa-twitter-square fa-2x"></i>
        </a>
        <a href="#" className="text-gray-700 hover:text-gray-900">
          <i className="fab fa-instagram fa-2x"></i>
        </a>
      </div>
    </div>
    <div className='mx-auto container'>
      <form onSubmit={sendEmail} ref={form} className='space-y-8 w-full max-w-[780px]' >
        <div className='flex gap-8 flex-col'>
          <div className='flex-1 flex gap-x-2 gap-y-1 sm:gap-x-4 md:flex-row flex-col justify-apart'>
            <input className='input border-gray-300 px-3 py-2 rounded-lg w-full shadow-sm focus:outline-none focus:border-gray-600 ' type="text" name='user_name' placeholder='Name' required />
            <input className='input w-full border-gray-300 px-3 py-2 justify-end rounded-lg shadow-sm focus:outline-none focus:border-gray-600' name='user_surname' type="text" placeholder='Surname' required/>
          </div>
         
          <input className='w-full border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none' type="text" name='user_email' placeholder='Your email' required />
          <textarea className='input border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none h-[300px] placeholder-justify-start' type="text" placeholder='Your message'  name='message' required/>
          <button type='submit' className='w-[150px] rounded-md p-1 h-[60px] hover:bg-[#ac7d20] bg-secondary text-white text-md duration-300'>Send Message</button>
        </div>
      </form>
    </div>
  </section>
  )
}

export default Contact