import { useEffect, useState } from 'react';

//import logo
import Logo from '../assets/img/JiroLogo.jpg'

// import icons
import { CgMenuRight, CgClose } from 'react-icons/cg';

// import data
import { navigation,footer } from '../data'

import NavMobile from './NavMobile';

const Header = () => {
  const [bg, setBg] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  useEffect(() =>{
    window.addEventListener('scroll', () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    })
  })

  return  (
    <header className={`${bg ? 'bg-primary py-2 lg:py-3' : 'bg-accent' } fixed left-0 h-[87px] w-screen py-3 z-10 translation-all duration-200`} id='Header'
    data-aos='fade-down'
    data-aos-delay='700'
    data-aos-duration='800'
    >
    <div className='mx-[19px] lg:mr-[3vh] md:mx-[20px] mr-[3px]'>
      <div className='flex justify-between items-center'>
      {/* logo */}
      <a href="#">
        <img className='h-[60px] w-[60px]' src={Logo} alt="" />
      </a>
      {/* menu icon */}
      <div onClick={()=> setMobileNav(!mobileNav)} className='text-[#CC9933] lg:hidden cursor-pointer'>
        {mobileNav ? <CgClose /> : <CgMenuRight />}
        </div>
        {/* nav */}
        <nav className='hidden lg:flex lg:gap-4 '>
          <ul className='lg:flex md:gap-x-12'>
            {navigation.map((item, index) => {

              const handleClick = (event) => {
                event.preventDefault();
                const target = document.querySelector(item.href);
                target.scrollIntoView({ behavior: 'smooth' });
              };

              return (
               <li className='Capitalize' key={index}>
                <div to={item.href}>
                <a className={`${bg ? ' text-md text-white transition-all' : 'text-primary font-semibold text-md' }`} href={item.href} onClick={handleClick}>
                  {item.name}
                </a>
                </div>
              </li>
              )
            })}
          </ul>
        </nav>
          {/* Socials */}
          <div className='hidden lg:flex text-white gap-x-4 mt-2'>
          {footer.social.map((item, index)=> {
            return <div className='w-12 h-12 text-2xl bg-gray-700 hover:bg-accent rounded-full flex justify-center items-center transition' key={index}>
              <a href={item.href} className=''>
                {item.icon}
              </a>
            </div>
          })}
        </div>
        
        {/* nav mobile */}
        <div className={`${mobileNav ? 'left-0' : '-left-full' } lg:hidden fixed top-0 w-full max-w-xs h-full bg-white z-auto transition-all`}>
          <NavMobile />
        </div>
      </div>
    </div>
  </header>
  ) 
};

export default Header;
