import React from 'react'
import Login from './Login'
import Registration from './Registration'
import { useHistory } from "react-router-dom";

const Home = () => {
    const history = useHistory()
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
                <div className='demoBtn text-center'>
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
