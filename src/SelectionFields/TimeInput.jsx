import React from 'react'
import { Clock3 } from 'lucide-react'
import { Times } from '../constants/time'

const TimeInput = ({ pickupTime, setPickupTime }) => {
    return (
        <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-2xl shadow-sm">
            <Clock3 className="w-5 h-5 text-black" />
            <select className='w-full text-black focus:outline-none cursor-pointer'
                value={pickupTime}
                onChange={(e) => setPickupTime(e.target.value)}
                required>
                <option value="" disabled selected>Select Time</option>
                {
                    Times.map((time) => (
                        <option value={time.value}>{time.label}</option>
                    ))
                }
            </select>
        </div>
    )
}

export default TimeInput