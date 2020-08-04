import React, { useState } from 'react'
import axios from 'axios'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submit = (e: any) => {
        e.preventDefault()
        const login = async () => {
            const res = await axios.post('http://localhost:5000/login', {
                email,
                password
            }, { withCredentials: true })
            console.log(res)
        }
        login()
    }
    return (
        <div>
            <form onSubmit={submit}>
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
