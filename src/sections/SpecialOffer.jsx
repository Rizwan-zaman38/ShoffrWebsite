import React from 'react'

const SpecialOffer = () => {
  return (
    <section>
      <div className='flex justify-center items-center text-center w-full text-white border border-[#D4C5A0] bg-[url("../src/assets/images/offersBg.png")] bg-cover bg-center bg-black/30 bg-blend-overlay'>
        <div className='flex flex-col gap-8 justify-center items-center px-3 my-20 max-sm:my-10 max-w-240 max-sm:gap-2 '>
          <h1 className='text-2xl font-bold lg:text-5xl md:text-3xl sm:text-2xl py-3 '>Discount up to 10% only for new Member</h1>
          <p className='text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base'>Unlock Exclusive Savings! Join us as a new member and enjoy an instant 10% discount on your first purchase. Elevate your experience with premium offerings at an unbeatable value</p>
          <div className='flex gap-4 py-3'>
            <button className='transition ease-in-out duration-500 hover:scale-110'>
            <a href='#booking' className='font-sans text-[16px] bg-[#D4C5A0] py-3 px-8 rounded-sm hover:bg-slate-600 cursor-pointer max-sm:py-1 max-sm:px-3 max-sm:text-[14px]'>Book Now</a>
            </button>
            <button className='transition ease-in-out duration-500 hover:scale-110'>
            <a href='#booking' className='font-sans text-[16px] border border-[#D4C5A0] py-3 px-8 rounded-sm hover:bg-slate-600 cursor-pointer max-sm:py-1 max-sm:px-3 max-sm:text-[14px]'>Get Discount</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer