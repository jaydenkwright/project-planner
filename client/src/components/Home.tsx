import React, { useState, useContext } from 'react'
import Login from './Login'
import Registration from './Registration'
import UserContext from '../UserContext'
import { useHistory } from "react-router-dom";
import axios from 'axios'

const Home = () => {
    const history = useHistory()
    const [error, setError] = useState<string | null>()
    const user = useContext<any>(UserContext)
    const { setLoggedIn } = user
    const demoLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const login = async () => {
            try{
                const res = await axios.post('/api/login', {
                    email: 'demo@demo.com',
                    password: 'demo1234'
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
        <div className='homeContainer'>
            <div className='w-2/3 my-auto p-16'>
                <div className='homeTitle'>
                    Plan Your Next Project.
                </div>
                <div className='homeSubTitle'>
                    Software. Design. Marketing. Education. Etc.
                </div>
                <div className='flex'>
                    <div className='loginRegistrationBtn' onClick={() => history.push('/login')}>
                        Login
                    </div>
                    <div className='loginRegistrationBtn' onClick={() => history.push('/register')}>
                        Register
                    </div>
                </div>
                <div className='demoBtn text-center' onClick={() => demoLogin}>
                    Demo
                </div>
            </div>
            <div className='loginRegistration'>
                <Login />
                <Registration />
            </div>
        </div>
    )
}

export default Home
