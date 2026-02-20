import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
    const [isOpen, setisOpen] = useState(false);
    return (
        <header className='w-full h-[18] bg-white'>
            <nav className='flex justify-between items-center py-4 px-16 '>
                <div>
                    <img src="../src/assets/images/Company Logo.png" alt="logo" />
                </div>
                <div className='hidden md:flex justify-between items-center'>
                    <ul className='flex justify-between items-center font-Roboto mr-2'>
                        <li className='hover:bg-slate-100 py-2 px-4 rounded-1xl'><a href="#fleet">Rides</a></li>
                        <li className='hover:bg-slate-100 py-2 px-4 rounded-1xl'><a href="#services">Services</a></li>
                        <li className='hover:bg-slate-100 py-2 px-4 rounded-1xl'><a href="#services">About</a></li>
                        <li className='hover:bg-slate-100 py-2 px-4 rounded-1xl'><a href="#app">App</a></li>
                    </ul>
                    <div className='flex gap-2'>
                        <a href='#booking' className='font-Roboto border border-[#C5A13E] py-2 px-5 hover:bg-slate-200 cursor-pointer'>Book</a>
                        <Link to="/contact" className='font-Roboto border bg-black text-white py-2 px-5 hover:bg-slate-200 cursor-pointer'>Contact</Link>
                    </div>
                </div>
                <div className='hidden max-md:block cursor-pointer' onClick={()=>setisOpen(!isOpen)}>
                    <a><i class="fa-solid fa-bars" width={25} height={25}></i></a>
                </div>
            </nav>
            <div className={`${isOpen?"block":"hidden"} md:hidden`}>
                    <ul className='flex flex-col justify-between items-center font-Roboto bg-slate-100'>
                        <li className='hover:bg-slate-200 py-2 px-4 rounded-1xl'><a href="">Rides</a></li>
                        <li className='hover:bg-slate-200 py-2 px-4 rounded-1xl'><a href="">Services</a></li>
                        <li className='hover:bg-slate-200 py-2 px-4 rounded-1xl'><a href="">About</a></li>
                        <li className='hover:bg-slate-200 py-2 px-4 rounded-1xl'><a href="">More </a></li>
                    </ul>
                    <div className='flex justify-center py-1 gap-2 bg-slate-100'>
                        <button className='font-Roboto border border-[#C5A13E] py-2 px-5 hover:bg-slate-400 cursor-pointer'>Book</button>
                        <button className='font-Roboto border bg-black text-white py-2 px-5 hover:bg-slate-400 cursor-pointer'>Contact</button>
                    </div>
                </div>
        </header>
    )
}

export default Nav