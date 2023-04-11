import React from 'react'
import { GalleryStuff } from '../data'


const Gallery = () => {
  return (
    <section className=' my-10 mx-auto justify-center bg-gray-200 container ' id='Gallery' >
      <h2 className='mx-auto items-center justify-center align-center text-bold text-[50px] pb-10 py-4'>Our Projects.</h2>
      <div className='grid grid-cols-1 gap-y-[50px] container '>
        {
          GalleryStuff.map((stuff) => {
            const { id, image, description} = stuff;
            return (
              <div className='lg:relative  flex flex-col' key={id}>
                <img className='lg:w-[70%] rounded-2xl h-full w-screen' src={image} alt="" />
                  <div className='lg:absolute top-10 right-0 h-full items-center justify-center lg:w-1/2'>
                  <p className='bg-primary rounded-lg text-md text-gray-300 p-4 lg:text-lg'>{description}
                  <button className='ml-4 text-secondary hidden'>Read More</button>
                  </p>
                  </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Gallery