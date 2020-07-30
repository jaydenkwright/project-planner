import React from 'react'
import { Props } from './Interfaces/PhaseInterface'

const PhaseCard: React.FC<Props> = ({ data }) => {
    return (
        <div className='flex-initial bg-white w-64 p-4 rounded-lg m-10'>
            <div className='text-2xl font-semibold text-gray-900'>
                {data.name}
            </div>
            <div className="bg-red-500 rounded-full shadow-sm inline-block px-2">
                <p className="text-gray-100 font-medium">{data.category}</p>
            </div>
            <div className='mt-2 text-gray-700 text-xl'>
                {data.description}
            </div>
        </div>
    )
}

export default PhaseCard
