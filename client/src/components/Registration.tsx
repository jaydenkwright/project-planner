import React from 'react'

const Registration = () => {
    return (
        <div>
            <form>
                <div className='flex'>
                    <div className='flex flex-col w-1/2'>
                        <label className='block mt-1 mb-1 text-gray-700 px-1 font-semibold'>First Name</label>
                        <input type='text' className='rounded-lg mb-1 py-2 px-2 w-32 shadow-sm outline-none focus:shadow-outline block' maxLength={50} required />
                    </div>
                    <div className='flex flex-col w-1/2 mx-2'>
                        <label className='block mt-1 mb-1 text-gray-700 px-1 font-semibold'>Last Name</label>
                        <input type='text' className='rounded-lg mb-1 py-2 px-2 w-32 shadow-sm outline-none focus:shadow-outline block' maxLength={50} required />
                    </div>
                </div>
                <label className='block mt-1 mb-1 text-gray-700 px-1 font-semibold'>Email</label>
                <input type='email' className='rounded-lg mb-1 py-2 px-2 w-64 shadow-sm outline-none focus:shadow-outline block' maxLength={100} required />
                <label className='block mt-1 mb-1 text-gray-700 px-1 font-semibold'>Password</label>
                <input type='password' className='rounded-lg mb-1 py-2 px-2 w-64 shadow-sm outline-none focus:shadow-outline block' maxLength={100} required />
            </form>
        </div>
    )
}

export default Registration
