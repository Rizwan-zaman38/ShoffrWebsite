import React from 'react'

const SpecialOffer = () => {
  return (
    <section>
      <div className='flex justify-center items-center text-center w-full text-white border border-[#D4C5A0] bg-[url("../src/assets/images/offersBg.png")] bg-cover bg-center bg-black/30 bg-blend-overlay'>
        <div className='flex flex-col gap-8 justify-center items-center px-3 my-20 max-sm:my-10 min-w-sm max-w-240'>
          <h1 className='text-5xl font-semibold max-sm:text-4xl py-3'>Discount up to 10% only for new Member</h1>
          <p className='font-Roboto'>Unlock Exclusive Savings! Join us as a new member and enjoy an instant 10% discount on your first purchase. Elevate your experience with premium offerings at an unbeatable value</p>
          <div className='flex gap-2 py-3'>
            <a href='#booking' className='font-Roboto bg-[#D4C5A0] py-2 px-5 hover:bg-slate-600 cursor-pointer'>Book Now</a>
            <a href='#booking' className='font-Roboto border border-[#D4C5A0] py-2 px-5 hover:bg-slate-600 cursor-pointer'>Get Discount</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer