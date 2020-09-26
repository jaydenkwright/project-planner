import React, { useState } from 'react'
import axios from 'axios'
import Error from './Error'
import { useHistory } from "react-router-dom";

const Registration = () => {
    const [firstName, setFirstName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [error, setError] = useState<string | null>(null)
    const history = useHistory()

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const register = async () => {
            try{
                const res = await axios.post('/api/register', {
                    firstName,
                    lastName,
                    email,
                    password
                })
            }catch(err){
                setError(err.response.data.msg)
            }
        }
        register()
        if (!error){
            history.push(`/login`)
        }
    }

    return (
        <div>
            { error ? <Error error={error}/> : null}
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
                <input type='submit' className='submitBtn' value='Submit' />
            </form>
        </div>
    )
}

export default Registration
