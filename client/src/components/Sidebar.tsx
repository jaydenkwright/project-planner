import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import { UserInterface } from './Interfaces/UserInterface'

export default function Sidebar() {
    const [user, setUser] = useState<UserInterface>()

    useEffect(() => {
        const getUser = async () => {
            const res = await axios.get('http://localhost:5000/user', {
                withCredentials: true
            })
            setUser(res.data)
        }
        getUser()
    }, [])
    return (
        <div className="sidebar">
            <div className="sidebarUserContainer">
                <img src={require('../assets/image1.svg')} className='sidebarProfilePicture' alt='Sidebar profile' />
                <p className="sidebarUserName">{user ? user.firstName : null}</p>
                <p className="sidebarSettingsLabel"><Link to='/settings'>Settings</Link></p>
            </div>

            <div className="sidebarListContainer">
                <div className='sidebarItem'>
                    <span>
                        <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16px" height="16px">    
                            <path d="M 12 2 A 1 1 0 0 0 11.289062 2.296875 L 1.203125 11.097656 A 0.5 0.5 0 0 0 1 11.5 A 0.5 0.5 0 0 0 1.5 12 L 4 12 L 4 20 C 4 20.552 4.448 21 5 21 L 9 21 C 9.552 21 10 20.552 10 20 L 10 14 L 14 14 L 14 20 C 14 20.552 14.448 21 15 21 L 19 21 C 19.552 21 20 20.552 20 20 L 20 12 L 22.5 12 A 0.5 0.5 0 0 0 23 11.5 A 0.5 0.5 0 0 0 22.796875 11.097656 L 12.716797 2.3027344 A 1 1 0 0 0 12.710938 2.296875 A 1 1 0 0 0 12 2 z"/>
                        </svg>
                    </span>
                    <p className="px-2"><Link to='/'>Home</Link></p>
                </div>
                <div className='sidebarItem'>
                    <span>
                        <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16px" height="16px">    
                            <path d="M12,2C6.477,2,2,6.477,2,12s4.477,10,10,10s10-4.477,10-10S17.523,2,12,2z M16,13h-3v3c0,0.552-0.448,1-1,1h0 c-0.552,0-1-0.448-1-1v-3H8c-0.552,0-1-0.448-1-1v0c0-0.552,0.448-1,1-1h3V8c0-0.552,0.448-1,1-1h0c0.552,0,1,0.448,1,1v3h3 c0.552,0,1,0.448,1,1v0C17,12.552,16.552,13,16,13z"/>
                        </svg>
                    </span> 
                    <p className="px-2"><Link to='/create/project/'>Create New Project</Link></p>
                </div>
            </div>
        </div>
    )
}
