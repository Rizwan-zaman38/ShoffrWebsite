import React from 'react'
import fleet1BigImg from '../assets/images/fleet1bigImg.png'
import car1 from '../assets/images/fleet1car1.png'
import car2 from '../assets/images/fleet1car2.png'
import car3 from '../assets/images/fleet1car3.png'
import car4 from '../assets/images/fleet1car4.png'
import car5 from '../assets/images/fleet1car5.png'
import car6 from '../assets/images/fleet1car6.png'

const Fleet1 = () => {
  return (
    <section id='fleet'>
      <div className='flex max-lg:flex-col-reverse'>
        <div className='flex justify-center items-center w-150 max-lg:mt-10 max-sm:w-full md:mx-auto'>
          <img src={fleet1BigImg} alt="fleet1bigImg" className='transition ease-in-out duration-500 hover:scale-90'/>
        </div>
        <div className='flex justify-center items-center text-center'>
          <div className='flex flex-col gap-4 justify-center items-center px-3 my-20 max-sm:my-10 max-w-240'>
            <div className='md:px-10'>
              <h1 className='text-3xl font-bold max-sm:text-2xl md:text-4xl py-3'>Explore Our Fleet</h1>
              <p className='text-gray-600 mb-6 sm:mb-8 max-w-2xl px-1 text-sm sm:text-base'>Shoffr brings you a wide range of cars to suit your mood, plan, or purpose. Whether you need a sleek sedan, a comfortable SUV, or a luxurious ride, we’ve got you covered. Our clean and well-maintained cars are ready to take you on a smooth, stress-free journey. Book now, we’ll take care of the rest.</p>
            </div>
            <div className='grid grid-cols-3 gap-5 max-md:grid-cols-2 max-sm:gap-2'>
              <img src={car1} alt="car1" className='w-53 h-40 rounded-4xl max-sm:w-40 max-sm:h-30 transition ease-in-out duration-500 hover:scale-110' />
              <img src={car2} alt="car2" className='w-53 h-40 rounded-4xl max-sm:w-40 max-sm:h-30 transition ease-in-out duration-500 hover:scale-110' />
              <img src={car3} alt="car3" className='w-53 h-40 rounded-4xl max-sm:w-40 max-sm:h-30 transition ease-in-out duration-500 hover:scale-110' />
              <img src={car4} alt="car4" className='w-53 h-40 rounded-4xl max-sm:w-40 max-sm:h-30 transition ease-in-out duration-500 hover:scale-110' />
              <img src={car5} alt="car5" className='w-53 h-40 rounded-4xl max-sm:w-40 max-sm:h-30 transition ease-in-out duration-500 hover:scale-110' />
              <img src={car6} alt="car6" className='w-53 h-40 rounded-4xl max-sm:w-40 max-sm:h-30 transition ease-in-out duration-500 hover:scale-110' />
            </div>
            <div className=' py-5'>
              <button className='transition ease-in-out duration-1000 hover:scale-90'>
            <a href='#booking' className='font-sans text-[16px] bg-[#D4C5A0] py-3 px-8 rounded-sm hover:bg-slate-600 cursor-pointer max-sm:py-1 max-sm:px-3 max-sm:text-[14px]'>Book Now</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Fleet1