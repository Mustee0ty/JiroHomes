import React from 'react';
import { services } from '../data';

const Services = () => {
  return (
    <section className='flex flex-col flex-wrap bg-gray-200 h-max mx-auto container'>
      <h1 className='mx-auto text-center items-center text-bold text-[50px]'>Services</h1>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 h-full w-full gap-4 mx-auto
      '>
      {
        services.map((item) => {
          const {id, icon, service, text } = item;
          return(
            <div class="flex mx-auto m-10 h-max w-max bg-slate-100" key={id}>
            <div class="group h-[280px] w-[280px] [perspective:1000px]">
              <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div class="absolute inset-0">
                  <img class="h-full w-full rounded-xl object-fill p-2 shadow-md shadow-black/10" src={icon} alt="" />
                  <p>{service}</p>
                </div>
                <div key={id} class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div class="flex min-h-full flex-col items-center justify-center">
                    <p>{text}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          )
        })
      }
      </div>
    </section>
  )
}

export default Services