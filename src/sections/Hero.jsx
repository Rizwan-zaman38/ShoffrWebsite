import React from 'react'

const Hero = () => {
  return (
    <section>
      <div className="w-full h-screen bg-[url('../src/assets/images/headerImg.png')] bg-cover bg-center bg-black/60 bg-blend-overlay border border-[#D4C5A0]">
        <div className='w-170 text-white pt-25 ps-40 max-md:ps-10 max-md:w-100 max-sm:ps-5'>
          <h1 className='text-5xl font-semibold max-sm:text-3xl py-3'><span className='font-Script text-7xl max-sm:text-5xl text-[#D4C5A0]'>Premium</span> rides that move you forward</h1>
          <p className='font-Roboto text-[15px] py-3'>Experience the gold standard of transportation. Professional drivers, pristine vehicles, and unmatched reliability for every journey.</p>
          <div className='flex gap-2 py-3'>
            <a href='#booking' className='font-Roboto bg-[#D4C5A0] py-2 px-5 hover:bg-slate-600 cursor-pointer'>Book Now</a>
            <a href='#booking' className='font-Roboto border border-[#D4C5A0] py-2 px-5 hover:bg-slate-600 cursor-pointer'>Get Discount</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero