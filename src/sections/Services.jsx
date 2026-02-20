import React from 'react'
import icon1 from '../assets/icons/icon1.png'
import icon2 from '../assets/icons/icon2.png'
import icon3 from '../assets/icons/icon3.png'

const Services = () => {
  return (
    <section id='services'>
      <div className='flex justify-center flex-col items-center text-center w-full text-white bg-black border border-[#D4C5A0] pt-10'>
        <div className='flex justify-center items-center text-center w-full text-white'>
          <div className='flex flex-col gap-8 justify-center items-center px-3 mt-20 max-sm:mt-10 min-w-sm max-w-3xl'>
            <p className='font-Roboto'>Benefits</p>
            <h1 className='text-5xl font-semibold max-sm:text-4xl py-2'>Why choose <span className='font-Script text-[#D4C5A0]'>Shoffr</span> for your rides</h1>
            <p className='primary-secondary p-3'>Discover the advantages of premium transportation that goes beyond simple point A to point B travel.</p>
          </div>
        </div>
        <div className='flex justify-center items-center max-md:flex-col my-10'>
          <div className='flex flex-col items-center my-5'>
            <img src={icon1} alt='icon1' width={48} height={48} />
            <h3 className="mt-5 font-Roboto text-3xl leading-normal font-semibold max-sm:text-xl">Professional drivers</h3>
            <p className="font-Roboto p-3">Trained experts who prioritize your comfort and safety.</p>
          </div>
          <div className='flex flex-col items-center my-5'>
            <img src={icon2} alt='icon1' width={48} height={48} />
            <h3 className="mt-5 font-Roboto text-3xl leading-normal font-semibold max-sm:text-xl">Luxury vehicles</h3>
            <p className="font-Roboto p-3">Clean, modern fleet with premium amenities.</p>
          </div>
          <div className='flex flex-col items-center my-5'>
            <img src={icon3} alt='icon1' width={48} height={48} />
            <h3 className="mt-5 font-Roboto text-3xl leading-normal font-semibold max-sm:text-xl">Reliable service</h3>
            <p className="font-Roboto p-3">Punctual and dependable transportation for every need.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services