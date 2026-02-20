import React from 'react'
import { BedDouble } from 'lucide-react'
import { Seats } from '../constants/variable'

const Seat = ({ passengers, setPassengers }) => {
    return (
        <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-2xl shadow-sm mb-6">
            <BedDouble className="w-5 h-5 text-black" />
            <select className='w-full text-black cursor-pointer'
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
                required >
                <option value="" disabled selected hidden >Select Transfer type</option>
                {
                    Seats.map((seat) => (
                        <option value={seat.value}>{seat.label}</option>
                    ))
                }
            </select>
        </div>
    )
}

export default Seat