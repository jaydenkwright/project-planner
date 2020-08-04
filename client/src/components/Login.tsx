import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div>
            <form>
                <label className='block mt-1 mb-1 text-gray-700 px-1 font-semibold'>Email</label>
                <input type='email' className='rounded-lg mb-1 py-2 px-2 w-64 shadow-sm outline-none focus:shadow-outline block' maxLength={100} required onChange={(e) => setEmail(e.target.value)}/>
                <label className='block mt-1 mb-1 text-gray-700 px-1 font-semibold'>Password</label>
                <input type='password' className='rounded-lg mb-1 py-2 px-2 w-64 shadow-sm outline-none focus:shadow-outline block' maxLength={100} required onChange={(e) => setPassword(e.target.value)}/>
                <input type='submit' className='block px-2 py-2 mt-2 rounded-lg bg-green-500 text-white shadow-sm font-semibold'/>
            </form>
        </div>
    )
}

export default Login
