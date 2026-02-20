import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className='py-10 max-md:py-5'>
        <div className='flex justify-between items-center px-10 max-md:flex-col max-md:px-5 max-md:gap-5'>
          <img src="../src/assets/images/Company Logo.png" alt="logo" />
          <div className=' md:flex justify-between items-center'>
            <div className='grid grid-cols-3 space-x-10 font-Roboto max-sm:grid-cols-2 lg:grid-cols-4 md:gap-8 max-md:gap-5 max-md:py-5'>
              <div>
                <h1 className='font-bold mb-2'>Rides</h1>
                <ul>
                  <li className='text-gray-900 rounded-1xl hover:text-[#d4c18f]'><a href="#booking">Airport Transfer</a></li>
                  <li className='text-gray-900 rounded-1xl hover:text-[#d4c5a0]'><a href="#booking">City Tour</a></li>
                  <li className='text-gray-900 rounded-1xl hover:text-[#d4c5a0]'><a href="#booking">Hourly Rental</a></li>
                </ul>
              </div>
              <div>
                <h1 className='font-bold mb-2'>Services</h1>
                <ul>
                  <li className='text-gray-900  rounded-1xl hover:text-[#d4c18f]'><a href="#services">Corporate</a></li>
                </ul>
              </div>
              <div>
                <h1 className='font-bold mb-2'>About</h1>
                <ul>
                  <li className='text-gray-900 rounded-1xl hover:text-[#d4c18f]'><a href="#services">Company</a></li>
                  <li className='text-gray-900 rounded-1xl hover:text-[#d4c5a0]'><a href="#services">Careers</a></li>
                  <li className='text-gray-900 rounded-1xl hover:text-[#d4c5a0]'><a href="#services">Press</a></li>
                </ul>
              </div>
              <div>
                <h1 className='font-bold mb-2'>More</h1>
                <ul>
                  <li className='text-gray-900 rounded-1xl hover:text-[#d4c18f]'><a href="#contact">Support</a></li>
                  <li className='text-gray-900 rounded-1xl hover:text-[#d4c5a0]'><a href="#FAQs">FAQ</a></li>
                  <li className='text-gray-900 rounded-1xl hover:text-[#d4c5a0]'><a href="#team">Partners</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className='flex gap-2'>
            <img src="../src/assets/icons/Facebook.png" alt="facebook" className='cursor-pointer'/>
            <img src="../src/assets/icons/instagram.png" alt="facebook" className='cursor-pointer'/>
            <img src="../src/assets/icons/X.png" alt="facebook" className='cursor-pointer'/>
            <img src="../src/assets/icons/LinkedIn.png" alt="facebook" className='cursor-pointer'/>
            <img src="../src/assets/icons/Youtube.png" alt="facebook" className='cursor-pointer'/>
          </div>
        </div>
        <div className='flex justify-center items-center my-10 text-[#D4C5A0]'>
          <hr className='w-[95%]'/>
        </div>
        <div className='flex md:flex justify-center items-center'>
            <ul className='flex justify-between items-center font-Roboto mr-2 max-md:flex-col'>
              <li className='text-gray-500 hover:bg-slate-100 rounded-1xl max-md:p-1'><a href="">© 2024 Shoffr. All rights reserved.</a></li><div className="w-px h-6 bg-gray-400 mx-4 max-md:hidden"></div>
              <li className='text-gray-500 hover:bg-slate-100 rounded-1xl max-md:p-1'><a href="">Privacy policy</a></li><div className="w-px h-6 bg-gray-400 mx-4 max-md:hidden"></div>
              <li className='text-gray-500 hover:bg-slate-100 rounded-1xl max-md:p-1'><a href="">Terms of service</a></li><div className="w-px h-6 bg-gray-400 mx-4 max-md:hidden"></div>
              <li className='text-gray-500 hover:bg-slate-100 rounded-1xl max-md:p-1'><a href="">Cookies settings</a></li>
            </ul>
          </div>
      </div>
    </footer>
  )
}

export default Footer