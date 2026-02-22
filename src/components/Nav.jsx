import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import companylogo from '../assets/images/logo.jpeg'
import { Car, Phone, Info, Briefcase, Smartphone } from 'lucide-react';

const Nav = () => {
    const [isOpen, setisOpen] = useState(false);
    return (
        <div className='w-full h-20 bg-white ' >
            <nav className='flex justify-between items-center py-1 px-16 '>
                <div>
                    <img src={companylogo} alt="logo" width={70} height={70} />
                </div>
                <div className='hidden lg:flex justify-between items-center'>
                    <ul className='flex justify-between items-center font-Roboto mr-2 text-gray-600'>
                        <li className='text-[16px] hover:bg-slate-100 py-2 px-4 rounded-1xl'><a href="#fleet" className='flex gap-2 justify-center items-center'><Car width={16} height={16} />Rides</a></li>
                        <li className='text-[16px] hover:bg-slate-100 py-2 px-4 rounded-1xl'><a href="#services" className='flex gap-2 justify-center items-center'><Briefcase width={16} height={16} />Services</a></li>
                        <li className='text-[16px] hover:bg-slate-100 py-2 px-4 rounded-1xl'><a href="#services" className='flex gap-2 justify-center items-center'><Info width={16} height={16} />About</a></li>
                        <li className='text-[16px] hover:bg-slate-100 py-2 px-4 rounded-1xl'><a href="#app" className='flex gap-2 justify-center items-center'><Smartphone width={16} height={16} />App</a></li>
                    </ul>
                    <div className='flex gap-4'>
                        <a href='#booking' className='text-[16px] font-Roboto border border-slate-300 py-2 px-4 rounded-sm hover:bg-slate-200 cursor-pointer'>Book Now</a>
                        <Link to="/contact" className='text-[16px] flex justify-center items-center gap-2 font-Roboto bg-black text-white py-2 px-4 rounded-[4px] hover:bg-slate-200 cursor-pointer'><Phone width={16} height={16} />Contact</Link>
                    </div>
                </div>
                <div className='hidden max-lg:block cursor-pointer' onClick={() => setisOpen(!isOpen)}>
                    <a><i class="fa-solid fa-bars" width={25} height={25}></i></a>
                </div>
            </nav>
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex justify-end p-4">
                    <i
                        className="fa-solid fa-xmark text-2xl text-gray-700 cursor-pointer"
                        onClick={() => setisOpen(false)}
                    ></i>
                </div>

                <ul className="flex flex-col items-center gap-4 font-Roboto text-gray-700">
                    <li>
                        <a href="#fleet" onClick={() => setisOpen(false)} className="flex gap-2 items-center">
                            <Car width={16} height={16} />Rides
                        </a>
                    </li>
                    <li>
                        <a href="#services" onClick={() => setisOpen(false)} className="flex gap-2 items-center">
                            <Briefcase width={16} height={16} />Services
                        </a>
                    </li>
                    <li>
                        <a href="#about" onClick={() => setisOpen(false)} className="flex gap-2 items-center">
                            <Info width={16} height={16} />About
                        </a>
                    </li>
                    <li>
                        <a href="#app" onClick={() => setisOpen(false)} className="flex gap-2 items-center">
                            <Smartphone width={16} height={16} />App
                        </a>
                    </li>
                </ul>

                <div className="flex justify-center mt-6">
                    <Link
                        to="/contact"
                        onClick={() => setisOpen(false)}
                        className="flex justify-center items-center gap-2 font-Roboto bg-black text-white py-2 px-6 rounded-sm hover:bg-slate-200 hover:text-black cursor-pointer"
                    >
                        <Phone width={16} height={16} />Contact
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Nav