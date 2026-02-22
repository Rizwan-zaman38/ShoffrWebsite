import React from 'react'
import { Clock3 } from 'lucide-react'
import { ExtraStops } from '../constants/variable'

const ExtraStop = ({ extraStop, setExtraStop }) => {
    return (
        <div className="flex items-center gap-3 bg-gray-50  p-3 rounded-2xl shadow-sm">
            <Clock3 className="w-5 h-5 text-black" />
            <select className='w-full text-black focus:outline-none cursor-pointer'
                value={extraStop}
                onChange={(e) => setExtraStop(e.target.value)}
                required>
                <option value="" disabled selected hidden >No Extra stop</option>
                {
                    ExtraStops.map((stop) => (
                        <option value={stop.value}>{stop.label}</option>
                    ))
                }
            </select>
        </div>
    )
}

export default ExtraStop