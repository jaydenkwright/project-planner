import React, { useState } from 'react'
import axios from 'axios'

const Registration = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submit = (e: any) => {
        e.preventDefault()
        const register = async () => {
            const res = await axios.post('http://localhost:5000/register', {
                firstName,
                lastName,
                email,
                password
            })
        }
        register()
    }

    return (
        <div>
            <form onSubmit={submit}>
                <div className='flex'>
                    <div className='flex flex-col'>
                        <label className='block mt-1 mb-1 text-gray-700 px-1 font-semibold'>First Name</label>
                        <input type='text' className='rounded-lg mb-1 py-2 px-2 w-32 shadow-sm outline-none focus:shadow-outline block' maxLength={50} required onChange={(e) => setFirstName(e.target.value)}/>
                    </div>
                    <div className='flex flex-col mx-2'>
                        <label className='block mt-1 mb-1 text-gray-700 px-1 font-semibold'>Last Name</label>
                        <input type='text' className='rounded-lg mb-1 py-2 px-2 w-32 shadow-sm outline-none focus:shadow-outline block' maxLength={50} required onChange={(e) => setLastName(e.target.value)}/>
                    </div>
                </div>
                <label className='block mt-1 mb-1 text-gray-700 px-1 font-semibold'>Email</label>
                <input type='email' className='rounded-lg mb-1 py-2 px-2 w-64 shadow-sm outline-none focus:shadow-outline block' maxLength={100} required onChange={(e) => setEmail(e.target.value)}/>
                <label className='block mt-1 mb-1 text-gray-700 px-1 font-semibold'>Password</label>
                <input type='password' className='rounded-lg mb-1 py-2 px-2 w-64 shadow-sm outline-none focus:shadow-outline block' maxLength={100} required onChange={(e) => setPassword(e.target.value)}/>
                <input type='submit' className='block px-2 py-2 mt-2 rounded-lg bg-green-500 text-white shadow-sm font-semibold'/>
            </form>
        </div>
    )
}

export default Registration
