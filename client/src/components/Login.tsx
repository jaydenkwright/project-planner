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
                <label className='textboxLabel'>Email</label>
                <input type='email' className='textbox' maxLength={100} required onChange={(e) => setEmail(e.target.value)}/>
                <label className='textboxLabel'>Password</label>
                <input type='password' className='textbox' maxLength={100} required onChange={(e) => setPassword(e.target.value)}/>
                <input type='submit' className='submitBtn'/>
            </form>
        </div>
    )
}

export default Login
