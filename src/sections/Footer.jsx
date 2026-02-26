import React from 'react'
import companylogo from '../assets/images/logo.jpeg'


const Footer = () => {
  return (
    <footer>
      <div className='py-10 max-md:py-5'>
        <div className='grid grid-cols-2 font-Roboto px-4 lg:px-10 md:px-7 sm:px-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 max-sm:gap-5 max-md:py-2'>
         <div className='col-span-2 sm:col-span-1'>
          <img src={companylogo} alt="logo" width={100} height={100} />
         </div>
          <div>
            <h1 className='font-bold text-[16px] mb-2 max-sm:mb-0'>Rides</h1>
            <ul>
              <li className='text-[14px] text-gray-600 rounded-1xl hover:text-[#d4c18f]'><a href="#booking">Airport Transfer</a></li>
              <li className='text-[14px] text-gray-600 rounded-1xl hover:text-[#d4c5a0]'><a href="#booking">City Tour</a></li>
              <li className='text-[14px] text-gray-600 rounded-1xl hover:text-[#d4c5a0]'><a href="#booking">Hourly Rental</a></li>
            </ul>
          </div>
          <div>
            <h1 className='font-bold text-[16px] mb-2 max-sm:mb-0'>Services</h1>
            <ul>
              <li className='text-[14px] text-gray-600  rounded-1xl hover:text-[#d4c18f]'><a href="#services">Corporate</a></li>
            </ul>
          </div>
          <div>
            <h1 className='font-bold text-[16px] mb-2 max-sm:mb-0'>About</h1>
            <ul>
              <li className='text-[14px] text-gray-600 rounded-1xl hover:text-[#d4c18f]'><a href="#services">Company</a></li>
              <li className='text-[14px] text-gray-600 rounded-1xl hover:text-[#d4c5a0]'><a href="#services">Careers</a></li>
              <li className='text-[14px] text-gray-600 rounded-1xl hover:text-[#d4c5a0]'><a href="#services">Press</a></li>
            </ul>
          </div>
          <div>
            <h1 className='font-bold text-[16px] mb-2 max-sm:mb-0'>More</h1>
            <ul>
              <li className='text-[14px] text-gray-600 rounded-1xl hover:text-[#d4c18f]'><a href="#contact">Support</a></li>
              <li className='text-[14px] text-gray-600 rounded-1xl hover:text-[#d4c5a0]'><a href="#FAQs">FAQ</a></li>
              <li className='text-[14px] text-gray-600 rounded-1xl hover:text-[#d4c5a0]'><a href="#team">Partners</a></li>
            </ul>
          </div>
        </div>
        <div className='flex justify-center items-center my-10 text-[#D4C5A0] max-sm:my-2'>
          <hr className='w-[95%]' />
        </div>
        <div className='flex md:flex justify-center items-center'>
          <ul className='flex justify-between items-center font-Roboto text-[14px] max-sm:text-[12px] max-sm:flex-col'>
            <li className='text-gray-500 hover:bg-slate-100 rounded-1xl '><a href="">© 2024 Shoffr. All rights reserved </a></li><div className="w-px h-6 bg-gray-400 mx-4 max-sm:hidden"></div>
            <li className='text-gray-500 hover:bg-slate-100 rounded-1xl '><a href="">Privacy policy </a></li><div className="w-px h-6 bg-gray-400 mx-4 max-sm:hidden"></div>
            <li className='text-gray-500 hover:bg-slate-100 rounded-1xl '><a href="">Terms of service </a></li><div className="w-px h-6 bg-gray-400 mx-4 max-sm:hidden"></div>
            <li className='text-gray-500 hover:bg-slate-100 rounded-1xl '><a href="">Cookies settings</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer