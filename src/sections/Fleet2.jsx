import React from 'react'

const Fleet2 = () => {
  return (
    <section>
      <div className='flex max-lg:flex-col '>
        <div className='flex justify-center items-center w-150 max-lg:mt-10 max-sm:w-full md:mx-auto'>
          <img src="../src/assets/images/fleet2bigImg.png" alt="fleet2bigImg" />
        </div>
        <div className='flex justify-center items-center text-center'>
          <div className='flex flex-col gap-4 justify-center items-center px-3 my-20 max-sm:my-10 min-w-sm max-w-240'>
            <div className='md:px-10'>
              <h1 className='font-Roboto text-5xl font-bold max-sm:text-4xl py-3'>Affordable Rides</h1>
              <p className='font-Roboto py-5  md:px-5'>Shoffr offers a curated selection of stylish, affordable vehicles to match your journey. From the compact agility of the Kia Picanto Sport and MG MG3 Vibe, to the urban comfort of the Chery Tiggo 4 Pro Urban and Suzuki Swift Hybrid, and the sleek versatility of the Hyundai i30—each car is clean, well-maintained, and ready to roll. </p>
            </div>
            <div className='grid grid-cols-3 gap-5 max-md:grid-cols-2'>
              <div className='w-53 h-40 rounded-4xl bg-[#F5F4F1] px-2 py-4'>
                <h1 className='font-Roboto font-semibold'>Kia Picanto Sport</h1>
                <img src="../src/assets/images/fleet2car1.png" alt="" />
              </div>
              <div className='w-53 h-40 rounded-4xl bg-[#F5F4F1] px-2 py-4'>
                <h1 className='font-Roboto font-semibold'>Hyundai i30</h1>
                <img src="../src/assets/images/fleet2car2.png" alt="" />
              </div>
              <div className='w-53 h-40 rounded-4xl bg-[#F5F4F1] px-2 py-4'>
                <h1 className='font-Roboto font-semibold'>Chery Tiggo 4 Pro Urban</h1>
                <img src="../src/assets/images/fleet2car3.png" alt="" />
              </div>
              <div className='w-53 h-40 rounded-4xl bg-[#F5F4F1] px-2 py-4'>
                <h1 className='font-Roboto font-semibold'>Suzuki Ignis GL</h1>
                <img src="../src/assets/images/fleet2car4.png" alt="" />
              </div>
              <div className='w-53 h-40 rounded-4xl bg-[#F5F4F1] px-2 py-4'>
                <h1 className='font-Roboto font-semibold'>Suzuki Swift Hybrid</h1>
                <img src="../src/assets/images/fleet2car5.png" alt="" />
              </div>
              <div className='w-53 h-40 rounded-4xl bg-[#F5F4F1] px-2 py-4'>
                <h1 className='font-Roboto font-semibold'>MG MG3 Vibe</h1>
                <img src="../src/assets/images/fleet2car6.png" alt="" />
              </div>
            </div>
            <div className=' py-5'>
              <a href='#booking' className='w- font-Roboto bg-[#D4C5A0] py-2 px-30 hover:bg-slate-600 cursor-pointer w-80 rounded-[7px]'>Book Now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Fleet2