import React from 'react'

export default function NewProjectCard() {
    return (
        <div className="m-10 bg-white h-56 w-56 rounded-lg p-4 shadow-md">
            <p className="text-gray-900 font-semibold text-xl text-center">Create New Project</p>
            <span>
                <img className="w-24 h-24 m-auto mt-6 text-center" src={require('../assets/plus.svg')} />
            </span>
        </div>
    )
}
