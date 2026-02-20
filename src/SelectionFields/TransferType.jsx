import { Car } from 'lucide-react'
import React from 'react'
import { TransferRoute } from '../constants/variable'

const TransferType = ({ transferType, setTransferType }) => {
    return (
        <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-2xl shadow-sm">
            <Car className="w-5 h-5 text-black" />
            <select className='w-full text-black cursor-pointer'
                value={transferType}
                onChange={(e) => setTransferType(e.target.value)}
                required >
                <option value="" disabled selected hidden >Select Transfer type</option>
                {
                    TransferRoute.map((route) => (
                        <option value={route.value}>{route.label}</option>
                    ))
                }
            </select>
        </div>
    )
}

export default TransferType