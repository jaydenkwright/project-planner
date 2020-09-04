import React from 'react'

interface Error{
    error: string
}

const Error: React.FC<Error> = ({ error }) => {
    return (
        <div>
            <div className='text-gray-100 px-1 font-semibold bg-red-500 rounded-lg'>
                { error }
            </div>
        </div>
    )
}

export default Error
