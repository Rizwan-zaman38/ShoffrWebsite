import React, { useState } from 'react'
import { tabs } from '../constants/variable';

const Team = () => {

    const [active, setActive] = useState("Airport rides"); 

    return (
        <section id='team'>
            <div className='flex justify-center items-center text-center w-full text-white bg-black border border-[#D4C5A0]'>
                <div className='flex flex-col gap-5 justify-center items-center px-3 mt-20 max-sm:gap-2 max-sm:mt-10 max-w-3xl'>
                    <h1 className='text-3xl font-bold max-sm:text-2xl md:text-4xl pb-3 sm:pb-4'>Professional drivers for every ride</h1>
                    <p className='text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base'>Our drivers are trained professionals who understand the art of exceptional service. Clean, courteous, and committed to your comfort.</p>
                    <div className='flex justify-center gap-4'>
                        <button className='transition ease-in-out duration-500 hover:scale-110 '>
                        <a href='#fleet' className='font-sans border  border-[#D4C5A0] py-2 px-5 hover:bg-slate-500 rounded-sm sm:text-base max-sm:py-1 max-sm:px-3 cursor-pointer max-sm:text-[14px]'>Hire our ride</a>
                        </button>
                        <button className='transition ease-in-out duration-500 hover:scale-110'>
                        <a href='#booking' className='font-sans py-2 px-5 hover:bg-slate-500 rounded-sm sm:text-base max-sm:py-1 max-sm:px-3 cursor-pointer max-sm:text-[14px]'>Learn more <i class="fa-solid fa-angle-right "></i></a>
                        </button>
                    </div>
                    <div className="flex justify-center gap-8 pb-5 pt-12 ">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActive(tab)}
                                className='text-white text-base max-sm:text-sm pb-2 relative font-medium transition duration-300
                                   hover:text-[#C5A13E]'
                            >
                                {tab}

                                {/* underline effect */}
                                {active === tab && (
                                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#C5A13E] rounded-full"></span>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team