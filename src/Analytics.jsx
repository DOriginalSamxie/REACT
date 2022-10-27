import React from 'react'
import Laptop from '../src/assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#A020f0] font-bold'>DATA ANALYTICS DASHBOARD</p>
          <h1 className='md:text-4xl sm:text-3xl text:2xl font-bold py-2'>
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius facere
            laborum assumenda dolor officiis, doloribus perferendis est modi!
            Enim nesciunt dolorem animi rerum atque tempore nam sint? Vero,
            excepturi in.
          </p>
          <button className='bg-[#000300] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#A020f0] md:mx-0'>
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

export default Analytics
