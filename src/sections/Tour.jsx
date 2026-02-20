import React from 'react'

const Tour = () => {
  return (
    <section>
      <div className='flex flex-col justify-center items-center text-center w-full md:h-258 h-screen bg-[url("../src/assets/images/tour.png")] bg-[#D4C5A0]/90 bg-cover bg-center bg-blend-overlay'>
        <h1 className='font-Roboto text-5xl font-600 max-md:text-3xl py-3 max-md:py-1 text-white'><span className='text-2xl font-Rhodium tracking-[35%] max-md:tracking-[10%] max-md:text-xl max-md:leading-1' >Shroff - Your Premium Choice for Unmatched Travel Comfort</span><br />
          Discover All Iconic Destinations in Australia <br />
          <span className='text-2xl max-sm:text-xl'>Join us and experience the City Like Never Before - Premium Rides and Expert Tours with Shroff</span></h1>
        <div className='flex gap-10 md:py-4 md:mt-10 max-sm:gap-5'>
          <img src="../src/assets/images/slide1.png" alt="slide1" className='w-77.5 h-126.25 rounded-3xl max-sm:w-40 max-md:h-65'/>
          <img src="../src/assets/images/slide2.png" alt="slide1" className='w-77.5 h-126.25 rounded-3xl max-sm:w-40 max-md:h-65'/>
          <img src="../src/assets/images/slide3.png" alt="slide1" className='w-77.5 h-126.25 rounded-3xl max-sm:w-40 max-md:h-65'/>
          <img src="../src/assets/images/slide4.png" alt="slide1" className='w-77.5 h-126.25 rounded-3xl max-sm:w-40 max-md:h-65'/>
        </div>
        <div className='text-white mt-2 md:mt-15'>
          <button className=' font-Roboto bg-[#D4C5A0] py-2 hover:bg-slate-600 cursor-pointer w-80 rounded-[7px]'>View all</button>
        </div>
      </div>
    </section>
  )
}

export default Tour