import React from 'react'

export default function NewProjectCard() {
    return (
        <div className="bg-white w-56 h-56 rounded-lg mx-12 my-10 p-4 shadow-md text-center">
            <p className="text-gray-900 font-semibold truncate text-xl text-center">Create New Project</p>
            <span>
                <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="5em" height="5em" className="fill-current text-indigo-600 inline-block mt-4">    
                    <path d="M12,2C6.477,2,2,6.477,2,12s4.477,10,10,10s10-4.477,10-10S17.523,2,12,2z M16,13h-3v3c0,0.552-0.448,1-1,1h0 c-0.552,0-1-0.448-1-1v-3H8c-0.552,0-1-0.448-1-1v0c0-0.552,0.448-1,1-1h3V8c0-0.552,0.448-1,1-1h0c0.552,0,1,0.448,1,1v3h3 c0.552,0,1,0.448,1,1v0C17,12.552,16.552,13,16,13z"/>
                </svg>
            </span>
        </div>
    )
}
