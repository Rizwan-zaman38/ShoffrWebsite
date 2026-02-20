import React, { useState } from 'react'
import { tabs } from '../constants/variable';

const Team = () => {

    const [active, setActive] = useState("Airport rides"); 

    return (
        <section id='team'>
            <div className='flex justify-center items-center text-center w-full text-white bg-black border border-[#D4C5A0]'>
                <div className='flex flex-col gap-8 justify-center items-center px-3 mt-20 max-sm:mt-10 min-w-sm max-w-3xl'>
                    <p className='font-Roboto'>Excellence</p>
                    <h1 className='text-5xl font-semibold max-sm:text-4xl py-3'>Professional drivers for every ride</h1>
                    <p className='font-Roboto p-3'>Our drivers are trained professionals who understand the art of exceptional service. Clean, courteous, and committed to your comfort.</p>
                    <div className='flex justify-center gap-2'>
                        <a href='#fleet' className='font-Roboto border border-[#D4C5A0] py-2 px-5 hover:bg-slate-500 cursor-pointer'>Hire our ride</a>
                        <a href='#booking' className='font-Roboto py-2 px-5 hover:bg-slate-500 cursor-pointer'>Learn more <i class="fa-solid fa-angle-right"></i></a>
                    </div>
                    <div className="flex justify-center gap-8 pb-5 pt-12">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActive(tab)}
                                className='text-white pb-2 relative font-medium transition duration-300
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