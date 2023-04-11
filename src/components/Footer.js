import React from 'react';

// import data
import { footer } from '..//data'

const Footer = () => {
  return <footer className='bg-primary text-white w-full'>
    <div className="mx-auto">
      <div className='flex flex-col lg:flex-row justify-between border-b border-opacity-75 border-gray-700 pb-2 lg:pb-2'>
        <a className='pt-2' href="">
          <img src='' alt="" />
        </a>
        {/* social */}
        <div className='flex gap-x-4 mt-2'>
          {footer.social.map((item, index)=> {
            return <div className='w-12 h-12 text-2xl bg-gray-700 hover:bg-accent rounded-full flex justify-center items-center transition' key={index}>
              <a href={item.href} className=''>
                {item.icon}
              </a>
            </div>
          })}
        </div>
      </div>
           {/* copyright text */}
           <p className='pb-[30px]'>
            &copy; Jirohomes Investment Nigeria LTD - All rights reserved 
           </p>
    </div>
  </footer>;
};

export default Footer;
