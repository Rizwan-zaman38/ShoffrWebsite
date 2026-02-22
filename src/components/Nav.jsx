import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import companylogo from '../assets/images/logo.jpeg'
import { Car, Phone, Info, Briefcase, Smartphone } from 'lucide-react';

const Nav = () => {
    const [isOpen, setisOpen] = useState(false);
    return (
        <div className='w-full h-[18] bg-white ' >
            <nav className='flex justify-between items-center py-1 px-16 '>
                <div>
                    <img src={companylogo} alt="logo" width={70} height={70}/>
                </div>
                <div className='hidden lg:flex justify-between items-center'>
                    <ul className='flex justify-between items-center font-Roboto mr-2 text-gray-600'>
                        <li className='text-[16px] hover:bg-slate-100 py-2 px-4 rounded-1xl'><a href="#fleet" className='flex gap-2 justify-center items-center'><Car width={16} height={16}/>Rides</a></li>
                        <li className='text-[16px] hover:bg-slate-100 py-2 px-4 rounded-1xl'><a href="#services" className='flex gap-2 justify-center items-center'><Briefcase width={16} height={16}/>Services</a></li>
                        <li className='text-[16px] hover:bg-slate-100 py-2 px-4 rounded-1xl'><a href="#services" className='flex gap-2 justify-center items-center'><Info width={16} height={16}/>About</a></li>
                        <li className='text-[16px] hover:bg-slate-100 py-2 px-4 rounded-1xl'><a href="#app" className='flex gap-2 justify-center items-center'><Smartphone width={16} height={16}/>App</a></li>
                    </ul>
                    <div className='flex gap-4'>
                        <a href='#booking' className='text-[16px] font-Roboto border border-slate-300 py-2 px-4 rounded-sm hover:bg-slate-200 cursor-pointer'>Book Now</a>
                        <Link to="/contact" className='text-[16px] flex justify-center items-center gap-2 font-Roboto bg-black text-white py-2 px-4 rounded-[4px] hover:bg-slate-200 cursor-pointer'><Phone width={16} height={16}/>Contact</Link>
                    </div>
                </div>
                <div className='hidden max-lg:block cursor-pointer' onClick={()=>setisOpen(!isOpen)}>
                    <a><i class="fa-solid fa-bars" width={25} height={25}></i></a>
                </div>
            </nav>
            <div className={`${isOpen?"block":"hidden"} md:hidden`}>
                    <ul className='flex flex-col justify-between items-center font-Roboto bg-slate-100'>
                        <li className='text-[16px] hover:bg-slate-100 py-2 px-4 rounded-1xl'><a href="#fleet" className='flex gap-2 justify-center items-center'><Car width={16} height={16}/>Rides</a></li>
                        <li className='text-[16px] hover:bg-slate-100 py-2 px-4 rounded-1xl'><a href="#services" className='flex gap-2 justify-center items-center'><Briefcase width={16} height={16}/>Services</a></li>
                        <li className='text-[16px] hover:bg-slate-100 py-2 px-4 rounded-1xl'><a href="#services" className='flex gap-2 justify-center items-center'><Info width={16} height={16}/>About</a></li>
                        <li className='text-[16px] hover:bg-slate-100 py-2 px-4 rounded-1xl'><a href="#app" className='flex gap-2 justify-center items-center'><Smartphone width={16} height={16}/>App</a></li>
                    </ul>
                    <div className='flex justify-center py-1 gap-2 bg-slate-100'>
                        <a href='#booking' className='text-[16px] font-Roboto border border-slate-300 py-2 px-4 rounded-sm hover:bg-slate-200 cursor-pointer'>Book Now</a>
                        <Link to="/contact" className='text-[16px] flex justify-center items-center gap-2 font-Roboto bg-black text-white py-2 px-4 rounded-sm hover:bg-slate-200 cursor-pointer'><Phone width={16} height={16}/>Contact</Link>
                    </div>
                </div>
        </div>
    )
}

export default Nav