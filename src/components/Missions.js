import React from 'react'
import { missions } from '../data'


const Missions = () => {
  return (
    <section className='flex justify-between bg-gray-100 flex-wrap flex-col  h-full mx-auto gap-1'>
      <h3 className='mx-auto text-bold text-[50px] pb-10 py-4 '>Missions.</h3>
    <div className='flex container mx-auto justify-around gap-1 flex-wrap lg:gap-0 lg:flex-row'>
        {
          missions.map((mission) =>{
            const { icon,text } = mission
            return (
              <div className='flex flex-col justify-center items-center rounded-lg h-[30vh] m-4 hover:bg-white w-[24vh]'> 
                <img className='w-[100px] h-[100px]' src={icon} alt="" />
                <p className='flex justify-center mt-5 w-full items-center mx-10 align-center p-4'>{text}</p>
              </div>
            )

          })
        }
      </div>
    </section>
  )
}

export default Missions