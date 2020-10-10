import React from 'react'
import Registration from './Registration'
import Helmet from 'react-helmet';

const LoginPage = () => {
    return (
        <div className='flex bg-gray-100 h-screen items-center flex-col py-24'>
            <Helmet>
                <title>Register</title>
            </Helmet>
            <div className=''>
                <Registration />
            </div>
        </div>
    )
}

export default LoginPage
