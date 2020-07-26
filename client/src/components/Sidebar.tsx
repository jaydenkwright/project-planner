import React from 'react'

export default function Sidebar() {
    return (
        <div className="h-screen top-0 sticky overflow-y-scroll w-64">
            <div className="mt-16 text-center">
                <img src={require('../assets/image1.svg')} className='w-32 h-32 m-auto'/>
                <p className="mt-4 text-gray-900 text-xl font-semibold">Andrew Phillips</p>
                <p className="text-gray-500">Settings</p>
            </div>

            <div className="mt-16 text-center">
                <div className='text-gray-900 p-4 text-lg font-medium'>
                    Home
                </div>
                <div className='text-gray-900 p-4 text-lg font-medium'>
                    Create New Project
                </div>
                <div className='text-gray-900 p-4 text-lg font-medium'>
                    Messages
                </div>
            </div>
        </div>
    )
}
