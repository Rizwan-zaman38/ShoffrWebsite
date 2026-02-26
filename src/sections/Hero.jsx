import React from 'react'

const Hero = () => {
  return (
    <section>
      <div className="w-full h-screen bg-[url('../src/assets/images/headerImg.png')] bg-cover bg-center bg-black/60 bg-blend-overlay border border-[#D4C5A0]">
        <div className='w-full max-w-7xl text-white pt-40 px-4 sm:px-6 lg:px-20 animate-expand'>
          <h1 className='text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl py-3 '><span className='font-serif italic text-[#D4C5A0]'>Premium</span> rides that <br /> move you forward</h1>
          <p className=' text-base text-gray-300 py-3 sm:text-lg'>Experience the gold standard of transportation. Professional drivers,<br class="hidden sm:block"/> pristine vehicles, and unmatched reliability for every journey.</p>
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

export default Hero