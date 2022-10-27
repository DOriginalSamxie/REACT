import React from 'react'
import Typed from 'react-typed'

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#A020f0] font-bold p-2'>
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Grow with data
        </h1>
        <div>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold mt-2'>
            Fast, flexible , financing for{' '}
            <Typed
              className='md:text-5xl sm:text-4xl text-xl font-bold pl-2'
              strings={['BTB', 'BTC', 'SASS']}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          </p>
        </div>
        <p className='md:text-2xl text:xl font-bold text-gray-500 mt-3'>
          Monitor your data analytics to increase revenue for BTB,BTC & SASS
          platform
        </p>
        <button className='bg-[#A020f0] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#000300]'>
          Get Started
        </button>
      </div>
    </div>
  )
}

export default Hero
