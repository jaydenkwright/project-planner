import React from 'react'
import Login from './Login'
import Helmet from 'react-helmet';

const LoginPage = () => {
    return (
        <div className='flex bg-gray-100 h-screen items-center flex-col py-24'>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <div className=''>
                <Login />
            </div>
        </div>
    )
}

export default LoginPage
