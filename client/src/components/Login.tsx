import React, { useState, useContext } from 'react'
import axios from 'axios'
import Error from './Error'
import UserContext from '../UserContext'
import { useHistory } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [error, setError] = useState<string | null>()
    const user = useContext<any>(UserContext)
    const { setLoggedIn } = user
    const history = useHistory()
    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const login = async () => {
            try{
                const res = await axios.post('/api/login', {
                    email,
                    password
                }, { withCredentials: true })
                if(res.data){
                    history.push('/')
                    setLoggedIn(true)
                }
            }catch(err){
                setError(err.response.data.msg)
            }
        }
        login()
    }
    return (
        <div>
            { error ? <Error error={error}/> : null}
            <form onSubmit={submit}>
                <label className='textboxLabel'>Email</label>
                <input type='email' className='textbox' maxLength={100} required onChange={(e) => setEmail(e.target.value)}/>
                <label className='textboxLabel'>Password</label>
                <input type='password' className='textbox' maxLength={100} required onChange={(e) => setPassword(e.target.value)}/>
                <input type='submit' className='submitBtn' value='Submit' />
            </form>
        </div>
    )
}

export default Login
