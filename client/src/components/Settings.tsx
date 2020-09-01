import React, { useState, useEffect } from 'react'
import { UserInterface } from './Interfaces/UserInterface'
import Header from './Header'
import Layout from './Layout'
import axios from 'axios'

const Settings = () => {
    const [user, setUser] = useState<UserInterface>()
    useEffect(() => {
        const getUser = async () => {
            const res = await axios.get('http://localhost:5000/user', {
                withCredentials: true
            })
            setUser(res.data)
        }
        getUser()
    }, [])
    return (
        <div>
            <Header title='Settings' />
            <Layout>
            <div className='mx-auto py-16'>
                    <form>
                        <label className='block mt-1 mb-1 text-gray-700 px-1 font-semibold'>First Name</label>
                        <input value={user?.firstName} type='text' className='rounded-lg mb-1 py-2 px-2 w-64 shadow-sm outline-none focus:shadow-outline block' maxLength={100} required />
                        <label className='block mt-1 mb-1 text-gray-700 px-1 font-semibold'>Last Name</label>
                        <input value={user?.lastName} type='text' className='rounded-lg mb-1 py-2 px-2 w-64 shadow-sm outline-none focus:shadow-outline block' maxLength={100} required />
                        <label className='block mt-1 mb-1 text-gray-700 px-1 font-semibold'>Email</label>
                        <input value={user?.email} type='text' className='rounded-lg mb-1 py-2 px-2 w-64 shadow-sm outline-none focus:shadow-outline block' maxLength={100} required />
                        <label className='block mt-1 mb-1 text-gray-700 px-1 font-semibold'>Password</label>
                        <input type='text' className='rounded-lg mb-1 py-2 px-2 w-64 shadow-sm outline-none focus:shadow-outline block' maxLength={100} required />
                        <label className='block mt-1 mb-1 text-gray-700 px-1 font-semibold'>New Password</label>
                        <input type='text' className='rounded-lg mb-1 py-2 px-2 w-64 shadow-sm outline-none focus:shadow-outline block' maxLength={100} required />
                        <input type='submit' className='block px-2 py-2 mt-2 rounded-lg bg-green-500 text-white shadow-sm font-semibold'/>
                    </form> 
                </div>
            </Layout>
        </div>
    )
}

export default Settings
