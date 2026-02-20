import React from 'react'
import container from '../assets/icons/container.png'
import apple from '../assets/icons/apple.png'
import play from '../assets/icons/play.png'
import qrcode from '../assets/images/qrcode.png'
import mobile from '../assets/images/mobile.png'

const Subcribe = () => {
  return (
    <section id='app'>
      <div className='flex justify-center w-full bg-black max-md:flex-col gap-2 border border-[#D4C5A0]'>
        <div className='mt-15'>
          <div className='flex justify-center items-center gap-3'>
            <img src={container} alt="container" width={56} height={56} />
            <h1 className='text-5xl font-semibold max-sm:text-4xl py-2 text-[#D4C5A0]'>Download the app</h1>
          </div>
          <div className='flex text-[#D4C5A0] justify-center mt-5 gap-10'>
            <button className='flex gap-3 font-Roboto border border-[#D4C5A0] py-3 px-6 hover:bg-slate-500 cursor-pointer rounded-3xl'><img src={apple} alt="apple" width={20} height={20} /> App Store</button>
            <button className='flex gap-3 font-Roboto border border-[#D4C5A0] py-3 px-6 hover:bg-slate-500 cursor-pointer rounded-3xl'><img src={play} alt="play" width={20} height={20} /> Google Play</button>
          </div>
        </div>
        <div className='flex justify-center items-center max-md:mt-5'>
          <div className='flex flex-col justify-center items-center'>
            <img src={qrcode} alt="QR" width={163} height={162} className='max-md:w-21 max-md:h-20' />
            <p className='text-white py-5'>Scan the QR Code & Download now</p>
          </div>
          <img src={mobile} alt="Mobile" width={319} height={343} className='max-md:w-40 max-md:h-45'/>
        </div>
      </div>
    </section>
  )
}

export default Subcribe