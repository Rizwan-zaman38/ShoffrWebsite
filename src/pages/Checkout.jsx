import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Hyundai from '../assets/images/Hyundai.png'

const Checkout = () => {

    const [booking, setbooking] = useState(null);
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [province, setProvince] = useState("");
    const [postalcode, setPostalcode] = useState(null);

    useEffect(() => {
        const data = localStorage.getItem("Booking Data");
        if (data) {
            setbooking(JSON.parse(data))
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const CheckoutData = {
            firstname,
            lastname,
            email,
            phone,
            address,
            country,
            city,
            province
        };

        localStorage.setItem("Checkout data", JSON.stringify(CheckoutData))

        alert(
            `Checkout Details:
            First Name: ${firstname}
            Last Name: ${lastname}
            Email: ${email}
            Phone number: ${phone}
            Address: ${address}
            Country: ${country}
            City: ${city}
            Province: ${province}
            Postal code: ${postalcode}
            `
        );

    };

    return (
        <section id='booking'>
            <div className='flex justify-center flex-col items-center text-center w-full bg-black border border-[#D4C5A0] pt-5'>
                <div className='flex flex-col gap-8 justify-center items-center px-3 max-sm:mt-5 min-w-sm max-w-3xl'>
                    <h1 className='text-5xl text-white font-semibold max-sm:text-4xl py-2'>Check-Out Your <span className='font-Script text-[#D4C5A0]'>Comfort</span></h1>
                </div>
                <div className='w-[85%] bg-white mx-auto rounded-2xl my-10 max-sm:w-[90%]'>
                    {
                        booking ? (
                            <div className='bg-[#D4C5A0]/30 rounded-2xl p-10 mx-10 my-10 max-sm:p-4'>
                                <div className='flex justify-between  max-sm:flex-col'>
                                    <div className='flex items-center gap-5 max-sm:flex-col'>
                                        <div className='w-[128] h-21 rounded-xl bg-white '>
                                            <img src={Hyundai} alt="" width={120} height={63} className='p-2' />
                                        </div>
                                        <div className='flex flex-col items-start'>
                                            <h1 className='text-xl font-semibold font-Roboto max-sm:text-[15px]'>Hyundai i30</h1>
                                            <p className='font-Roboto text-[13px] text-gray-600'>Base Fare: $3674.87</p>
                                            <p className='font-Roboto text-[13px] text-gray-600 text-left mt-2'>
                                                <span className='font-bold'>Outbound:</span> {booking.airportPickup} - {booking.airportDropOff}<br />
                                                Date: {booking.pickupDate} | Time: {booking.pickupTime}<br /> Date: {booking.pickupDate} |
                                                Time: {booking.pickupTime}<br /> Extra Stops: {booking.extraStop}

                                            </p>
                                        </div>
                                    </div>
                                    <div className='max-sm:mt-3'>
                                        <h1 className='text-2xl font-Roboto font-bold'>$650.50</h1>
                                        <p className='font-Roboto text-[12px] text-gray-600'>Inc. All Charges</p>
                                    </div>

                                </div>
                                <hr className='text-gray-300 my-5' />
                                <div>
                                    <input type="text" name="coupon" placeholder='Enter coupon code' className='w-[90%] border border-gray-300 focus:outline-none rounded-xl py-3 px-5' />
                                    <button
                                        className="bg-[#f8d376] text-black font-medium py-3 px-5 mt-3 ms-2 cursor-pointer rounded-xl hover:bg-[#c3b38f] transition">Apply</button>
                                </div>
                                <hr className='text-gray-300 my-5' />
                                <div className='flex justify-between'>
                                    <p className='font-Roboto text-[14px] text-gray-600'>Base Fare: </p>
                                    <p className='font-Roboto'>$8774.92</p>
                                </div>
                                <hr className='text-gray-300 my-2' />
                                <div className='flex justify-between py-1'>
                                    <p className='font-Roboto text-[14px] text-gray-600'>Subtotal: </p>
                                    <p className='font-Roboto'>$874</p>
                                </div>
                                <div className='flex justify-between py-1'>
                                    <p className='font-Roboto text-[14px] text-gray-600'>Toll: </p>
                                    <p className='font-Roboto'>$74.92</p>
                                </div>
                                <div className='flex justify-between py-1'>
                                    <p className='font-Roboto text-[14px] text-gray-600'>Extra Stop Charges: </p>
                                    <p className='font-Roboto'>$830</p>
                                </div>
                                <div className='flex justify-between py-1'>
                                    <p className='font-Roboto text-[14px] text-gray-600'>GST(10%): </p>
                                    <p className='font-Roboto'>87</p>
                                </div>
                                <hr className='text-gray-300 my-2' />
                                <div className='flex justify-between py-1'>
                                    <h1 className='font-Roboto text-xl font-bold'>Total Amount: </h1>
                                    <p className='font-Roboto text-xl font-bold'>8736.89</p>
                                </div>
                            </div>
                        ) : (
                            <p>Booking data not found</p>
                        )
                    }
                    <div className='p-5 max-sm:p-2'>
                        <div className=" flex items-center justify-center">
                            <form
                                onSubmit={handleSubmit}
                                className=" py-3 md:py-4 rounded-3xl w-full"
                            >
                                <div>
                                    <h1 className='text-xl font-Roboto font-bold text-left'>Contact Information</h1>
                                    <div className='grid grid-cols-2 gap-4 my-4 max-md:grid-cols-1 max-sm:gap-1'>
                                        <div className='flex flex-col font-Roboto'>
                                            <label className='text-start text-[14px] text-gray-600 mb-2'>First Name*</label>
                                            <input
                                                value={firstname}
                                                onChange={(e) => setFirstname(e.target.value)}
                                                required
                                                type="text" className='border border-gray-300 focus:outline-none rounded-xl py-3 px-5' />
                                        </div>
                                        <div className='flex flex-col font-Roboto'>
                                            <label className='text-start text-[14px] text-gray-600 mb-2'>Last Name*</label>
                                            <input
                                                value={lastname}
                                                onChange={(e) => setLastname(e.target.value)}
                                                required
                                                type="text" className='border border-gray-300 focus:outline-none rounded-xl py-3 px-5' />
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-2 gap-4 my-4 max-md:grid-cols-1 max-sm:gap-1'>
                                        <div className='flex flex-col font-Roboto'>
                                            <label className='text-start text-[14px] text-gray-600 mb-2'>Email*</label>
                                            <input
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                                type="email" className='border border-gray-300 focus:outline-none rounded-xl py-3 px-5' />
                                        </div>
                                        <div className='flex flex-col font-Roboto'>
                                            <label className='text-start text-[14px] text-gray-600 mb-2'>Phone*</label>
                                            <input
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                                required
                                                type="phone" className='border border-gray-300 focus:outline-none rounded-xl py-3 px-5 ' />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h1 className='text-xl font-Roboto font-bold text-left'>Billing address</h1>
                                    <input
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        type="text" placeholder='Street address*' className='w-full border border-gray-300 focus:outline-none rounded-xl py-3 px-5 my-2' />
                                    <div className="flex items-center">
                                        <select className='w-full border border-gray-300 focus:outline-none rounded-xl py-3 px-5 my-2 cursor-pointer '
                                            value={country}
                                            onChange={(e) => setCountry(e.target.value)}
                                            required>
                                            <option value="" disabled selected >Select Country</option>
                                            <option value="Australia">Australia</option>
                                            <option value="Canada">Canada</option>
                                        </select>
                                    </div>
                                    <div className='flex justify-between gap-3 max-sm:flex-col max-sm:gap-0'>
                                        <input
                                            value={city}
                                            onChange={(e) => setCity(e.target.value)}
                                            required
                                            type="text" placeholder='City*' className='w-full border border-gray-300 focus:outline-none rounded-xl py-3 px-5 my-2' />
                                        <input
                                            value={province}
                                            onChange={(e) => setProvince(e.target.value)}
                                            required
                                            type="text" placeholder='State/Province*' className='w-full border border-gray-300 focus:outline-none rounded-xl py-3 px-5 my-2' />
                                        <input
                                            value={postalcode}
                                            onChange={(e) => setPostalcode(e.target.value)}
                                            required
                                            type="text" placeholder='Postal code*' className='w-full border border-gray-300 focus:outline-none rounded-xl py-3 px-5 my-2' />
                                    </div>

                                </div>
                                <div className='py-4'>
                                    <h1 className='text-xl font-Roboto font-bold text-left'>Payment options</h1>
                                    <div className='border border-[#f7cc5f] bg-[#faf1db] rounded-xl mt-3'>
                                        <div className='p-5'>
                                            <label className='font-Roboto font-lighter flex gap-3 '>
                                                <input type="radio" name="" id="" checked className="scale-125 accent-gray-900 cursor-pointer" />
                                                Pay with Card (Stripe)</label>
                                            <p className='font-Roboto text-[14px] text-start text-gray-600 py-2 ps-6 '>
                                                Secure payment via Stripe. You will be redirected to complete your payment.
                                            </p>
                                            <div className='w-50 font-Roboto text-[13px] text-gray-400 text-start rounded-xl bg-white py-1 px-2 ms-5'>
                                                <span className='text-xl font-bold text-purple-800 mr-1'>stripe</span> Powered by Stripe
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="term" className='flex gap-2'>
                                        <input
                                            onClick={(e) => setCheck(e.target.value)}
                                            type="checkbox" value="term" required />
                                        I accept the terms
                                    </label>
                                </div>
                                <div className='flex justify-between items-center py-4'>
                                    <Link to='/checkfare'> Back to Car Selection</Link>
                                    <button
                                        type="submit"
                                        className="bg-[#d5c6a0] text-black font-medium py-3 px-5 mt-3 cursor-pointer rounded-xl hover:bg-[#c3b38f] transition"
                                    >
                                        Send
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Checkout