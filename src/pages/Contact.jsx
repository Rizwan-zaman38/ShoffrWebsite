import { Mail, MapPin, Phone } from 'lucide-react'
import React, { useState } from 'react'
import { Support } from '../constants/variable'

const Contact = () => {
    const [firstname, setFirstname] = useState();
    const [lastname, setLastname] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [support, setSupport] = useState();
    const [role, setRole] = useState();
    const [message, setMessage] = useState("");
    const [check, setCheck] = useState();

    const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Booking Summary:
      First name: ${firstname}
      Last name: ${lastname}
      Email: ${email}
      Phone number: ${phone}
      Support: ${support}
      Role: ${role}
      Message: ${message}
      Checked: ${check}`
    );
  };

    return (
        <section>
            <div className='w-full bg-black'>
                <div className='w-[89%] flex justify-between mx-auto py-10 max-md:flex-col gap-2 text-white'>
                    <div className='flex flex-col gap-7 font-Roboto max-md:gap-3'>
                        <p>Connect</p>
                        <h1 className='text-5xl font-bold max-md:text-3xl'>Contact us</h1>
                        <p>Have Questions? We're here to help you get started.</p>
                        <div className='flex flex-col gap-2'>
                            <div className='flex items-center gap-3'>
                                <Mail />
                                <a href="#" className='underlin'>hello@shoffr.com</a>
                            </div>
                            <div className='flex items-center gap-3'>
                                <Phone />
                                <a href="#">+61 2 8123 4567</a>
                            </div>
                            <div className='flex items-center gap-3'>
                                <MapPin />
                                <a href="#">123 Premium St, Sydney NSW 2000 AU</a>
                            </div>
                        </div>
                    </div>
                    <div className='max-md:mt-10'>
                        <form onSubmit={handleSubmit}>
                            <div className='flex flex-col gap-4'>
                                <div className='flex gap-3 max-sm:flex-col max-sm:gap-1'>
                                    <div className='font-Roboto '>
                                        <label htmlFor="firstname">First Name:</label><br />
                                        <input
                                            value={firstname}
                                            onChange={(e) => setFirstname(e.target.value)}
                                            type="text" className='border border-[#C5A13E] py-1 bg-transparent outline-none max-sm:w-full' required />
                                    </div>
                                    <div className='font-Roboto'>
                                        <label htmlFor="lastname">Last Name:</label><br />
                                        <input
                                            value={lastname}
                                            onChange={(e) => setLastname(e.target.value)}
                                            type="text" className='border border-[#C5A13E] py-1 bg-transparent outline-none max-sm:w-full' required />
                                    </div>
                                </div>
                                <div className='flex gap-3'>
                                    <div className='font-Roboto'>
                                        <label htmlFor="email">Email:</label><br />
                                        <input
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            type="email" className='border border-[#C5A13E] py-1 bg-transparent outline-none max-sm:w-full' required />
                                    </div>
                                    <div className='font-Roboto'>
                                        <label htmlFor="phone">Phone:</label><br />
                                        <input
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            type="phone" className='border border-[#C5A13E] py-1 bg-transparent outline-none max-sm:w-full' />
                                    </div>
                                </div>
                                <div className='font-Roboto'>
                                    <label htmlFor="question">What can we help with?</label><br />
                                    <select className='w-full border border-[#C5A13E] p-2 mt-1 bg-transparent outline-none cursor-pointer'
                                        value={support}
                                        onChange={(e) => setSupport(e.target.value)}
                                        required >
                                        <option value="" disabled selected hidden >Select One...</option>
                                        {
                                            Support.map((sup) => (
                                                <option value={sup.value} className='text-black'>{sup.label}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div className='font-Roboto'>
                                    <p>Who are you?</p>
                                    <div className='grid grid-cols-2 mt-1'>
                                        <div className='flex gap-2'>
                                            <input
                                                checked={role === "Business Traveler"}
                                                onChange={(e) => setRole(e.target.value)}
                                                type="radio" value="Business Traveler" />
                                            Bussiness Traveler
                                        </div>
                                        <div className='flex gap-2'>
                                            <input
                                                checked={role === "Corporate client"}
                                                onChange={(e) => setRole(e.target.value)}
                                                type="radio" value="Corporate client" />
                                            Corporate client
                                        </div>
                                        <div className='flex gap-2'>
                                            <input
                                                checked={role === "Tourism group"}
                                                onChange={(e) => setRole(e.target.value)}
                                                type="radio" value="Tourism group" />
                                            Tourism group
                                        </div>
                                        <div className='flex gap-2'>
                                            <input
                                                checked={role === "Individual"}
                                                onChange={(e) => setRole(e.target.value)}
                                                type="radio" value="Individual" />
                                            Individual
                                        </div>
                                        <div className='flex gap-2'>
                                            <input
                                                checked={role === "Event planner"}
                                                onChange={(e) => setRole(e.target.value)}
                                                type="radio" value="Event planner" />
                                            Event planner
                                        </div>
                                        <div className='flex gap-2'>
                                            <input
                                                checked={role === "Other"}
                                                onChange={(e) => setRole(e.target.value)}
                                                type="radio" value="Other" />
                                            Other
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="message">Message:</label>
                                    <textarea
                                    value={message}
                                    onChange={(e)=>setMessage(e.target.value)}                                    
                                    type="text" placeholder='Tell us more details' className='h-50 flex flex-wrap w-full focus:outline-none border border-[#C5A13E] rounded-sm p-2 mt-1' required></textarea>
                                </div>
                                <div>
                                    <label htmlFor="term" className='flex gap-2'>
                                        <input 
                                        onClick={(e)=>setCheck(e.target.value)}
                                        type="checkbox" value="term" required />
                                        I accept the terms
                                    </label>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="bg-[#d5c6a0] text-black font-medium py-3 px-5 mt-3 cursor-pointer rounded-xl hover:bg-[#c3b38f] transition"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact