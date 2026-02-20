import React from 'react'

const Fleet1 = () => {
  return (
    <section id='fleet'>
      <div className='flex max-lg:flex-col'>
        <div className='flex justify-center items-center w-150 max-lg:mt-10 max-sm:w-full md:mx-auto'>
          <img src="../src/assets/images/fleet1bigImg.png" alt="fleet1bigImg" />
        </div>
        <div className='flex justify-center items-center text-center'>
          <div className='flex flex-col gap-4 justify-center items-center px-3 my-20 max-sm:my-10 min-w-sm max-w-240'>
            <div className='md:px-10'>
              <h1 className='font-Roboto text-5xl font-bold max-sm:text-4xl py-3'>Explore Our Fleet</h1>
              <p className='font-Roboto py-5  md:px-5'>Shoffr brings you a wide range of cars to suit your mood, plan, or purpose. Whether you need a sleek sedan, a comfortable SUV, or a luxurious ride, we’ve got you covered. Our clean and well-maintained cars are ready to take you on a smooth, stress-free journey. Book now, we’ll take care of the rest.</p>
            </div>
            <div className='grid grid-cols-3 gap-5 max-md:grid-cols-2'>
              <img src="../src/assets/images/fleet1car1.png" alt="" className='w-53 h-40 rounded-4xl' />
              <img src="../src/assets/images/fleet1car2.png" alt="" className='w-53 h-40 rounded-4xl' />
              <img src="../src/assets/images/fleet1car3.png" alt="" className='w-53 h-40 rounded-4xl' />
              <img src="../src/assets/images/fleet1car4.png" alt="" className='w-53 h-40 rounded-4xl' />
              <img src="../src/assets/images/fleet1car5.png" alt="" className='w-53 h-40 rounded-4xl' />
              <img src="../src/assets/images/fleet1car6.png" alt="" className='w-53 h-40 rounded-4xl' />
            </div>
            <div className=' py-5'>
              <a className='w- font-Roboto bg-[#D4C5A0] py-2 px-30 hover:bg-slate-600 cursor-pointer w-80 rounded-[7px]'>Book Now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Fleet1