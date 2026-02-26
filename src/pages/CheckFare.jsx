import React, { useEffect, useState } from 'react'
import { cars } from '../constants/variable';
import { Link, useNavigate } from 'react-router-dom';
import icon1 from '../assets/icons/icon1.png'
import icon2 from '../assets/icons/icon2.png'
import icon3 from '../assets/icons/icon3.png'

const CheckFare = () => {

    const navigate = useNavigate();

    const [booking, setbooking] = useState(null);
    const [basefare, setBasefare] = useState(null);

    useEffect(() => {
        const data = localStorage.getItem("Booking Data");
        if (data) {
            setbooking(JSON.parse(data))
        };
    }, []);

    const calculateBaseFare = (ratePerKm) => {
        if (!booking || !booking.calculatedDistance) {
            console.error("Booking data not available");
            return;
        }

        const fare = Math.floor(ratePerKm * booking.calculatedDistance);
        setBasefare(fare);

        return fare;
    };

    return (
        <section>
            <div className='flex justify-center flex-col items-center text-center w-full text-white bg-black border border-[#D4C5A0] pt-10'>
                <div className='flex flex-col gap-8 justify-center items-center px-3 mt-10 max-sm:mt-10 min-w-sm max-w-3xl'>
                    <h1 className='text-3xl font-bold max-sm:text-2xl md:text-4xl py-2'>Book You <span className='font-Script text-[#D4C5A0]'>Comfort</span></h1>
                </div>
                <div className='flex p-10 max-md:flex-col gap-10'>
                    <div>
                        <div className=' bg-white rounded-2xl text-black p-2'>
                            <h1 className='text-center font-sans font-bold mt-2 text-md sm:text-base'>TRIP SUMMARY</h1>
                            {
                                booking ? (
                                    <div className='flex flex-wrap font-Roboto gap-2 mx-auto my-5 ps-2 max-sm:ms-3 text-base'>
                                        <div className='flex flex-col justify-center items-center py-2 px-4 bg-[#D4C5A0]/30 rounded-2xl lg:w-[30%]'>
                                            <h1 className='font-semibold max-sm:text-[15px]'>Pickup Date</h1>
                                            <p className='font-Roboto max-sm:text-[13px]'>{booking.pickupDate}</p>
                                        </div>
                                        <div className=' flex flex-col justify-center items-center py-2 px-4 bg-[#D4C5A0]/30 rounded-2xl lg:w-[30%]'>
                                            <h1 className='font-semibold max-sm:text-[15px]'>Pickup Time</h1>
                                            <p className='font-Roboto max-sm:text-[13px]'>{booking.pickupTime}</p>
                                        </div>
                                        <div className=' flex flex-col justify-center items-center py-2 px-4 bg-[#D4C5A0]/30 rounded-2xl lg:w-[30%]'>
                                            <h1 className='font-semibold max-sm:text-[15px]'>Pickup Location</h1>
                                            <p className='font-Roboto max-sm:text-[13px]'>{booking.pickup}</p>
                                        </div>
                                        <div className=' flex flex-col justify-center items-center py-2 px-4 bg-[#D4C5A0]/30 rounded-2xl lg:w-[30%]'>
                                            <h1 className='font-semibold max-sm:text-[15px]'>Drop-off Location</h1>
                                            <p className='font-Roboto max-sm:text-[13px]'>{booking.dropoff}</p>
                                        </div>
                                        <div className=' flex flex-col justify-center items-center py-2 px-4 bg-[#D4C5A0]/30 rounded-2xl lg:w-[30%]'>
                                            <h1 className='font-semibold max-sm:text-[15px]'>Total time</h1>
                                            <p className='font-Roboto max-sm:text-[13px]'>{booking.calculatedDuration}</p>
                                        </div>
                                        <div className=' flex flex-col justify-center items-center py-2 px-4 bg-[#D4C5A0]/30 rounded-2xl lg:w-[30%]'>
                                            <h1 className='font-semibold max-sm:text-[15px]'>Extra Stop</h1>
                                            <p className='font-Roboto max-sm:text-[13px]'>{booking.extraStop}</p>
                                        </div>
                                        <div className=' flex flex-col justify-center items-center py-2 px-4 bg-[#D4C5A0]/30 rounded-2xl lg:w-[30%]'>
                                            <h1 className='font-semibold max-sm:text-[15px]'>Total Kilometer</h1>
                                            <p className='font-Roboto max-sm:text-[13px]'>{booking.calculatedDistance} KM</p>
                                        </div>
                                    </div>
                                ) : (
                                    <p>No booking data found.</p>
                                )
                            }

                            <button className='w-90 border border-[#D4C5A0] mb-3 py-2 rounded-3xl hover:bg-[#D4C5A0] transition ease-in-out duration-500 hover:scale-110'><Link to="/">Previous</Link></button>
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
                                                <h1 className='font-semibold font-Roboto max-sm:text-[14px]'>{car.name}</h1>
                                                <p className='font-Roboto max-sm:text-[12px]'>{car.seats} | {car.luggage}</p>
                                            </div>
                                        </div>
                                        {
                                            booking ? (
                                                <div>
                                                    <p className='font-bold max-sm:text-[14px]'>${Math.floor(car.rateperkm*booking.calculatedDistance)}</p>
                                                    <button
                                                        onClick={() => {
                                                            calculateBaseFare(car.rateperkm); 
                                                            const fare = Math.floor(car.rateperkm * booking.calculatedDistance);

                                                            
                                                            const carPrice = {
                                                                fare,
                                                                car: car.name,
                                                            };

                                                            localStorage.setItem("Car price", JSON.stringify(carPrice));

                                                            // alert(
                                                            //     `Booking Summary:
                                                            //      Car: ${car.name}
                                                            //      Base Fare: $${fare}
                                                            //      `
                                                            // );

                                                            navigate("/checkout");
                                                        }}
                                                        className='bg-[#D4C5A0] px-6 py-2 text-white rounded-sm mt-5 cursor-pointer font-sans text-[14px] hover:bg-slate-600 max-sm:py-1 max-sm:px-3 transition ease-in-out duration-500 hover:scale-110'>Select</button>
                                                </div>
                                            ) : (
                                                <p>Booking data not found</p>
                                            )
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <div className='grid grid-cols-1 justify-center items-center my-10'>
                            <div className='flex flex-col items-center my-5 max-sm:my-1'>
                                <img src={icon1} alt='icon1' width={58} height={58} />
                                <h3 className="mt-5 font-Roboto text-xl leading-normal font-semibold max-sm:text-[18px]">Professional drivers</h3>
                                <p className="text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">Trained experts who prioritize your comfort and safety.</p>
                            </div>
                            <div className='flex flex-col items-center my-5 max-sm:my-1'>
                                <img src={icon2} alt='icon1' width={58} height={58} />
                                <h3 className="mt-5 font-Roboto text-xl leading-normal font-semibold max-sm:text-[18px]">Luxury vehicles</h3>
                                <p className="text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">Clean, modern fleet with premium amenities.</p>
                            </div>
                            <div className='flex flex-col items-center my-5 max-sm:my-1'>
                                <img src={icon3} alt='icon1' width={58} height={58} />
                                <h3 className="mt-5 font-Roboto text-xl leading-normal font-semibold max-sm:text-[18px]">Reliable service</h3>
                                <p className="text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">Punctual and dependable transportation for every need.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CheckFare