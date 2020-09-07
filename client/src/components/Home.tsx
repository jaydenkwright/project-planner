import React from 'react'
import Login from './Login'
import Registration from './Registration'

const Home = () => {
    return (
        <div className='homeContainer'>
            <div className='w-2/3 my-auto p-16'>
                <div className='homeTitle'>
                    Plan Your Next Project.
                </div>
                <div className='homeSubTitle'>
                    Software. Design. Marketing. Education. Etc.
                </div>
            </div>
            <div className='w-1/3 my-auto'>
                <Login />
                <Registration />
            </div>
        </div>
    )
}

export default Home
