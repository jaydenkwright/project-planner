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
                        <label className='textboxLabel'>First Name</label>
                        <input type='text' className='registrationTextbox' maxLength={50} required onChange={(e) => setFirstName(e.target.value)}/>
                    </div>
                    <div className='flex flex-col mx-2'>
                        <label className='textboxLabel'>Last Name</label>
                        <input type='text' className='registrationTextbox' maxLength={50} required onChange={(e) => setLastName(e.target.value)}/>
                    </div>
                </div>
                <label className='textboxLabel'>Email</label>
                <input type='email' className='textbox' maxLength={100} required onChange={(e) => setEmail(e.target.value)}/>
                <label className='textboxLabel'>Password</label>
                <input type='password' className='textbox' maxLength={100} required onChange={(e) => setPassword(e.target.value)}/>
                <input type='submit' className='submitBtn'/>
            </form>
        </div>
    )
}

export default Registration
