import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { UserInterface } from './Interfaces/UserInterface'
import Header from './Header'
import Layout from './Layout'
import axios from 'axios'

const Settings = () => {
    const history = useHistory()
    const [user, setUser] = useState<UserInterface>()
    const [firstName, setFirstName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const getUser = async () => {
            const res = await axios.get('http://localhost:5000/user', {
                withCredentials: true
            })
            setUser(res.data)
        }
        getUser()
    }, [])


    const submit = (e: React.FormEvent<HTMLFormElement> | undefined) => {
        e?.preventDefault()
        const updateUser = async () => {
            try{
                const res = await axios.put('http://localhost:5000/user/update', {
                    firstName: firstName ? firstName : user?.firstName,
                    lastName: lastName ? lastName : user?.lastName,
                    email: email ? email : user?.email,
                    password
                }, {
                    withCredentials: true
                })
                if (res.data){
                    history.push('/')
                }
            }catch(err){
                if(err.response.status === 401){
                    setError('Incorrect Password')
                }else{
                    setError('Something went wrong')
                }
            }
        }
        updateUser()
    }
    return (
        <div>
            <Header title='Settings' />
            <Layout>
            <div className='mx-auto py-16'>
                    { error ? <div className='text-gray-100 px-1 font-semibold bg-red-500 rounded-lg'>
                        {error}
                    </div> : null}
                    <form onSubmit={submit}>
                        <label className='block mt-1 mb-1 text-gray-700 px-1 font-semibold'>First Name</label>
                        <input placeholder={user?.firstName} type='text' className='rounded-lg mb-1 py-2 px-2 w-64 shadow-sm outline-none focus:shadow-outline block' maxLength={100} onChange={(e) => setFirstName(e.target.value)}/>
                        <label className='block mt-1 mb-1 text-gray-700 px-1 font-semibold'>Last Name</label>
                        <input placeholder={user?.lastName} type='text' className='rounded-lg mb-1 py-2 px-2 w-64 shadow-sm outline-none focus:shadow-outline block' maxLength={100} onChange={e => setLastName(e.target.value)} />
                        <label className='block mt-1 mb-1 text-gray-700 px-1 font-semibold'>Email</label>
                        <input placeholder={user?.email} type='text' className='rounded-lg mb-1 py-2 px-2 w-64 shadow-sm outline-none focus:shadow-outline block' maxLength={100} onChange={e => setEmail(e.target.value)}/>
                        <label className='block mt-1 mb-1 text-gray-700 px-1 font-semibold'>Password</label>
                        <input type='password' className='rounded-lg mb-1 py-2 px-2 w-64 shadow-sm outline-none focus:shadow-outline block' maxLength={100} required onChange={e => setPassword(e.target.value)}/>
                        <input type='submit' className='block px-2 py-2 mt-2 rounded-lg bg-green-500 text-white shadow-sm font-semibold'/>
                    </form> 
                </div>
            </Layout>
        </div>
    )
}

export default Settings
