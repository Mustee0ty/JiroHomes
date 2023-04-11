import React from 'react';

// import data
import {navigation} from '../data'

const NavMobile = () => {
  return <nav className='bg-white w-full h-screen shadow-2xl z-auto'>
    <ul className='text-center h-full flex flex-col items-center justify-center gap-y-6'>
      {navigation.map((item, index) => {

        const handleClick = (event) => {
          event.preventDefault();
          const target = document.querySelector(item.href);
          target.scrollIntoView({ behavior: 'smooth' });
        };

        return <li key={index}>
          <a className='text-xl font-medium capitalize' href={item.href} onClick={handleClick}>{item.name}</a>
        </li>
      })}
    </ul>
  </nav>;
};

export default NavMobile;
