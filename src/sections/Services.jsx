import React from 'react'
import icon1 from '../assets/icons/icon1.png'
import icon2 from '../assets/icons/icon2.png'
import icon3 from '../assets/icons/icon3.png'

const Services = () => {
  return (
    <section id='services'>
      <div className='flex justify-center flex-col items-center text-center w-full text-white bg-black border border-[#D4C5A0] pt-10'>
        <div className='flex justify-center items-center text-center w-full text-white'>
          <div className='flex flex-col gap-5 justify-center items-center mt-15 max-sm:mt-10 max-w-3xl max-sm:gap-1'>
            <p className='font-Roboto'>Benefits</p>
            <h1 className='text-3xl font-bold max-sm:text-2xl md:text-4xl py-2'>Why choose <span className='font-Script text-[#D4C5A0]'>Shoffr</span> for your rides</h1>
            <p className='text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base'>Discover the advantages of premium transportation that goes beyond simple point A to point B travel.</p>
          </div>
        </div>
        <div className='grid grid-cols-1 justify-center items-center md:grid-cols-2 lg:grid-cols-3 my-10'>
          <div className='flex flex-col items-center my-5 max-sm:my-1'>
            <img src={icon1} alt='icon1' width={58} height={58} />
            <h3 className="mt-5 font-Roboto text-xl leading-normal font-semibold max-sm:text-[18px]">Professional drivers</h3>
            <p className="text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">Trained experts who prioritize your comfort and safety.</p>
          </div>
          <div className='flex flex-col items-center my-5 max-sm:my-1'>
            <img src={icon2} alt='icon1' width={58} height={58} />
            <h3 className="mt-5 font-Roboto text-xl leading-normal font-semibold max-sm:text-[18px]">Luxury vehicles</h3>
            <p className="text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">Clean, modern fleet with premium amenities.</p>
          </div>
          <div className='flex flex-col items-center my-5 max-sm:my-1'>
            <img src={icon3} alt='icon1' width={58} height={58} />
            <h3 className="mt-5 font-Roboto text-xl leading-normal font-semibold max-sm:text-[18px]">Reliable service</h3>
            <p className="text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">Punctual and dependable transportation for every need.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services