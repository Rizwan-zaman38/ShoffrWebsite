import React, { useEffect, useState } from 'react'
import { cars } from '../constants/variable';
import { Link } from 'react-router-dom';

const CheckFare = () => {

    const [booking, setbooking] = useState(null);

    useEffect(() => {
        const data = localStorage.getItem("Booking Data");
        if (data) {
            setbooking(JSON.parse(data))
        };
    }, []);

    return (
        <section>
            <div className='flex justify-center flex-col items-center text-center w-full text-white bg-black border border-[#D4C5A0] pt-10'>
                <div className='flex flex-col gap-8 justify-center items-center px-3 mt-10 max-sm:mt-10 min-w-sm max-w-3xl'>
                    <h1 className='text-5xl font-semibold max-sm:text-4xl py-2'>Book You <span className='font-Script text-[#D4C5A0]'>Comfort</span></h1>
                </div>
                <div className='flex p-10 max-md:flex-col gap-10'>
                    <div>
                        <div className=' bg-white rounded-2xl text-black p-2'>
                            <h1 className='text-xl text-center font-bold mt-2'>TRIP SUMMARY</h1>
                            {
                                booking ? (
                                    <div className='flex flex-wrap font-Roboto gap-2 mx-auto my-5 ps-2 max-sm:ms-3'>
                                        <div className='flex flex-col justify-center items-center py-2 px-4 bg-[#D4C5A0]/30 rounded-2xl lg:w-[30%]'>
                                            <h1 className=' font-semibold max-sm:text-[15px]'>Pickup Date</h1>
                                            <p className='font-Roboto max-sm:text-[13px]'>{booking.pickupDate}</p>
                                        </div>
                                        <div className=' flex flex-col justify-center items-center py-2 px-4 bg-[#D4C5A0]/30 rounded-2xl lg:w-[30%]'>
                                            <h1 className='font-semibold max-sm:text-[15px]'>Pickup Time</h1>
                                            <p className='font-Roboto max-sm:text-[13px]'>{booking.pickupTime}</p>
                                        </div>
                                        <div className=' flex flex-col justify-center items-center py-2 px-4 bg-[#D4C5A0]/30 rounded-2xl lg:w-[30%]'>
                                            <h1 className='font-semibold max-sm:text-[15px]'>Pickup Location</h1>
                                            <p className='font-Roboto max-sm:text-[13px]'>{booking.airportPickup}</p>
                                        </div>
                                        <div className=' flex flex-col justify-center items-center py-2 px-4 bg-[#D4C5A0]/30 rounded-2xl lg:w-[30%]'>
                                            <h1 className='font-semibold max-sm:text-[15px]'>Drop-off Location</h1>
                                            <p className='font-Roboto max-sm:text-[13px]'>{booking.airportDropOff}</p>
                                        </div>
                                        <div className=' flex flex-col justify-center items-center py-2 px-4 bg-[#D4C5A0]/30 rounded-2xl lg:w-[30%]'>
                                            <h1 className='font-semibold max-sm:text-[15px]'>Total time</h1>
                                            <p className='font-Roboto max-sm:text-[13px]'>3 hr 30 min</p>
                                        </div>
                                        <div className=' flex flex-col justify-center items-center py-2 px-4 bg-[#D4C5A0]/30 rounded-2xl lg:w-[30%]'>
                                            <h1 className='font-semibold max-sm:text-[15px]'>Extra Stop</h1>
                                            <p className='font-Roboto max-sm:text-[13px]'>{booking.extraStop}</p>
                                        </div>
                                        <div className=' flex flex-col justify-center items-center py-2 px-4 bg-[#D4C5A0]/30 rounded-2xl lg:w-[30%]'>
                                            <h1 className='font-semibold max-sm:text-[15px]'>Total Kilometer</h1>
                                            <p className='font-Roboto max-sm:text-[13px]'>123.2 KM</p>
                                        </div>
                                    </div>
                                ) : (
                                    <p>No booking data found.</p>
                                )
                            }

                            <button className='w-90 border border-[#D4C5A0] mb-3 py-2 rounded-3xl hover:bg-[#D4C5A0]'><Link to="/">Previous</Link></button>
                        </div>
                        <div className='bg-white rounded-2xl text-black mt-5 p-10'>
                            {
                                cars.map((car) => (
                                    <div className='flex justify-around py-4 bg-[#D4C5A0]/30 rounded-2xl my-5 max-sm:flex-col'>
                                        <div className='flex gap-5 items-center max-sm:flex-col'>
                                            <div className='w-[128] h-21 rounded-xl bg-white '>
                                                <img src={car.image} alt="" width={120} height={63} className='p-2' />
                                            </div>
                                            <div>
                                                <h1 className='font-semibold font-Roboto max-sm:text-[15px]'>{car.name}</h1>
                                                <p className='font-Roboto max-sm:text-[13px]'>{car.seats} | {car.luggage}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p className='font-bold'>${car.rateperkm}</p>
                                            <button className='bg-[#D4C5A0] px-6 py-2 text-white rounded-2xl mt-5 cursor-pointer'><Link to="/checkout">Select</Link></button>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <div className='flex flex-col justify-center items-center max-md:flex-col my-10'>
                            <div className='flex flex-col items-center my-5'>
                                <img src="../src/assets/icons/icon1.png" alt='icon1' width={48} height={48} />
                                <h3 className="mt-5 font-Roboto text-3xl leading-normal font-semibold max-sm:text-xl">Professional drivers</h3>
                                <p className="font-Roboto p-3">Trained experts who prioritize your comfort and safety.</p>
                            </div>
                            <div className='flex flex-col items-center my-5'>
                                <img src="../src/assets/icons/icon2.png" alt='icon1' width={48} height={48} />
                                <h3 className="mt-5 font-Roboto text-3xl leading-normal font-semibold max-sm:text-xl">Luxury vehicles</h3>
                                <p className="font-Roboto p-3">Clean, modern fleet with premium amenities.</p>
                            </div>
                            <div className='flex flex-col items-center my-5'>
                                <img src="../src/assets/icons/icon3.png" alt='icon1' width={48} height={48} />
                                <h3 className="mt-5 font-Roboto text-3xl leading-normal font-semibold max-sm:text-xl">Reliable service</h3>
                                <p className="font-Roboto p-3">Punctual and dependable transportation for every need.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CheckFare