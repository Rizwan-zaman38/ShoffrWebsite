import { Plane } from 'lucide-react'
import React from 'react'
import { Airports } from '../constants/variable'

const AirportDropoff = ({ airportDropOff, setAirportDropOff }) => {
    return (
        <div className="flex items-center gap-2 bg-gray-100 w-full p-3 rounded-2xl shadow-sm">
            <Plane className="w-5 h-5 text-[#d5c6a0]" />
            <select className='w-full text-gray-600 font-semibold focus:outline-none cursor-pointer'
                value={airportDropOff}
                onChange={(e) => setAirportDropOff(e.target.value)}
                required >
                <option value="" disabled selected hidden >Select Airport as Drop-off</option>
                {
                    Airports.map((airport) => (
                        <option value={airport.value} className='text-black font-light'>{airport.label}</option>
                    ))
                }
            </select>
        </div>
    )
}

export default AirportDropoff